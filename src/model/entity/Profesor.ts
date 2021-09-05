import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn , Unique} from "typeorm";
import { Profile } from "./Profile";



@Entity("profesor")
export class Profesor {

    @PrimaryGeneratedColumn({name: "profesor_id"})
    id: number;

    @Column({name: "school"})
    school: string;
    
    @Column({name: "subject"})
    subject: string;

    @OneToOne( () => Profile,{cascade : true})
    @JoinColumn({name: "profile_id"})
    profile: Profile;
}