
import { Request } from "express";
import { Authenticator } from "passport";
import { ExtractJwt, Strategy as JwtStrategy, StrategyOptions } from "passport-jwt";
import { getRepository } from "typeorm";
import { User } from "../model/entity/User";

/**
 * Extraer token de una cookie
 */
const stractMethod = (req: Request) => {
    let token = '';
    req.cookies['jwt'];

    return req.cookies['jwt'];
}

const options: StrategyOptions = {
    jwtFromRequest: stractMethod,
    secretOrKey: 'SECRET'
}


/**
 * Passport se encarga de revisar el jwt
 */
const strategy : JwtStrategy = new JwtStrategy(options, async (payload, done) => {
    const userRepo = getRepository(User);
    const user : User | undefined = await userRepo.findOne(payload.userId);
    if (!user) {
        return done('An error has ocurred', false);
    }
    if (user) {
        return done(null, user);
    } else {
        return done(null, false);
        // or you could create a new account
    }
});

export default function config(passport: Authenticator)   {
    passport.use(strategy);
}