// import { createConnection } from "typeorm";
import "reflect-metadata";
import cookieParser from "cookie-parser";
import express, { Request, Response} from 'express';
import passport from "passport";
import "./config/passport";
import authRoutes from "./routes/auth.router";
const app = express();

app.use(cookieParser());

app.use('/auth', authRoutes );

app.use('/protected', (req: Request, res: Response) => {
    passport.authenticate('jwt', {session: false}, (err, user) => {
        if (err ) {
            return res.status(404).send('Error');
        } else {
            
            return res.status(200).send('Access granted');
        }
    })(req, res);
});

app.listen(3000);



// createConnection()
//     .then(connection => {
//     // here you can start to work with your entities
//     console.log('Connection successful')
// }).catch(error => console.log(error));