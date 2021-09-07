import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn , Unique} from "typeorm";
import { Profile } from "./Profile";
import {Student} from "./Student";



@Entity("representative")
export class Representative {

    @PrimaryGeneratedColumn({name: "representative_id"})
    id: number;

    @Column({name: "child_number"})
    child_number: number;
    
    @OneToOne( () => Profile,{cascade : true})
    @JoinColumn({name: "profile_id"})
    profile: Profile;

    @OneToMany(() => Student, student => student.representative)
    students: Student[];
}