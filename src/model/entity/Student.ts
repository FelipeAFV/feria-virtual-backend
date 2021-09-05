import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn , Unique} from "typeorm";
import { Representative } from "./Representative";
import { Profile } from "./Profile";



@Entity("student")
export class Student {

    @PrimaryGeneratedColumn({name: "student_id"})
    id: number;

    @Column({name: "school"})
    school: string;
    
    @Column({name: "grade"})
    grade: string;

    @OneToOne( () => Profile,{cascade : true})
    @JoinColumn({name: "profile_id"})
    profile: Profile;

    @ManyToOne(()=>Representative, representative => representative.students)
    representative: Representative;
}