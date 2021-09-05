import { createConnection } from "typeorm";
import "reflect-metadata";
createConnection()
    .then(connection => {
    // here you can start to work with your entities
    console.log('Connection successful')
}).catch(error => console.log(error));