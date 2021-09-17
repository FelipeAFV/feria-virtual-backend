import { Request, Response} from "express";
import { getRepository } from "typeorm";
import { compareHashedPassword, encrypt} from "../utils/password-encrypt";
import jwt from "jsonwebtoken";
import { User } from "../model/entity/User";
import { Profile } from "../model/entity/Profile";
import { roleGenerator } from "../utils/role.utils";
import { Role } from "../model/interface/role";
import { UserRole } from "../model/enums/user-role";
import { Student } from "../model/entity/Student";
import { Representative } from "../model/entity/Representative";
import { Profesor } from "../model/entity/Profesor";


class AuthController {
    
    
    signUp = async (req: Request, res: Response) => {
        // const userRepo = getRepository(User);

        console.log(req.body);
        const {username, password} = req.body;
        const userToCheck = await getRepository(User).findOne({username: username});
        
        if (userToCheck) {
            return res.status(400).json({error: 'Username already exist'})
        }
        
        /**Creación de usuario */
        const hashedPass =  await encrypt(password);
        const user: User = {
            id: 1,
            username: username,
            password: hashedPass,
        }

        /** Creacion de profile */
        const profile: Profile = req.body;
        profile.id = 1; 
        profile.user = user;
        

        /** Creacion de rol */
        const role: Role | undefined = roleGenerator(profile, req.body);
        


        console.log('Profile a crear ', profile);
        
        const insertedUser: User = await getRepository(User).save(user);
        const insertedProfile: Profile = await getRepository(Profile).save(profile);

        if (role) {
            let insertedRole;
            switch (profile.role) {
                case UserRole.ALUMNO:
                    
                    insertedRole = await getRepository(Student).save(role);
                    break;
                case UserRole.APODERADO:
                    insertedRole = await getRepository(Representative).save(role);
                    
                    break;
                case UserRole.PROFESOR:
                    insertedRole = await getRepository(Profesor).save(role);
                    
                    break;
            
            }
        }
        res.cookie('jwt', jwt.sign({ userId: insertedUser.id}, 'SECRET'), {httpOnly: true});
        return res.status(200).json({success: 'Successfully registered'});
    }
    
    signIn = async (req: Request, res: Response) => {
        // const userRepo = getRepository(User);
        const {username, password} = req.body;
        

        const user = await getRepository(User).findOne({ username: username});

        if (!user) {
            return res.status(401).json({error: 'Username not valid'});
        } 
        const validPassword = await compareHashedPassword(password, user.password);
        
        if (validPassword) {
            res.cookie('jwt', jwt.sign({ userId: user.id}, 'SECRET'), {httpOnly: true});
        } else {
            return res.status(401).json({error: 'Incorrect password'});
        }
        
        
        res.end();
    }
}

export default new AuthController();