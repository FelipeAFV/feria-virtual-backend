
import { Column, Entity, OneToMany, PrimaryGeneratedColumn , Unique} from "typeorm";



@Entity("user")
export class User {

    @PrimaryGeneratedColumn({name: "user_id"})
    id: number;

    @Column({name: "username"})
    //@MinLength(8)
    username: string;
    
    @Column({name: "password"})
    //@MinLength(8)
    password: string;


}