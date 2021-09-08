import { createConnection } from "typeorm";
import "reflect-metadata";
import cookieParser from "cookie-parser";
import express from 'express';
import passport from "passport";
import authRoutes from "./routes/auth.router";
const app = express();

app.use(cookieParser());

app.use('/auth', authRoutes )



createConnection()
    .then(connection => {
    // here you can start to work with your entities
    console.log('Connection successful')
}).catch(error => console.log(error));