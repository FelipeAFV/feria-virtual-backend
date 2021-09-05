import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn , Unique} from "typeorm";
import { Challenge } from "./Challenge";
import { Video } from "./Video";



@Entity("stand")
export class Stand{

    @PrimaryGeneratedColumn({name: "stand_id"})
    id: number;

    @Column({name: "theme"})
    theme: string;

    @Column({name: "image_logo_name"})
    image_logo: string;

    @Column({name: "image_background_name"})
    image_background: string;
    

    @OneToMany( () => Challenge, Challenge => Challenge.challenges)
    challenge: Challenge;

    @OneToMany(()=> Video, Video=> Video.stand)
    videos: Video[];
}