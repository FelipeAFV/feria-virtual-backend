import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn , Unique} from "typeorm";
import { Stand } from "./Stand";



@Entity("stand")
export class Video{

    @PrimaryGeneratedColumn({name: "video_id"})
    id: number;

    @Column({name: "video_url"})
    url: string;

    @ManyToOne(()=>Stand,Stand=>Stand.video)
    @JoinColumn({name:"stand_id"})
    stand: Stand;

}