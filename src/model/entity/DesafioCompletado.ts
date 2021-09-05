import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Challenge } from "./Desafio";
import { Profile } from "./Profile";

@Entity("completed_challenge")
export class CompletedChallenge {

    @PrimaryColumn({ type: 'int', name: 'profile_id'})
    @ManyToOne( () => Profile)
    @JoinColumn({ name: 'profile_id'})
    profile: Profile;
    
    @PrimaryColumn({ type: 'int', name: 'challenge_id'})
    @ManyToOne( () => Challenge)
    @JoinColumn({ name: 'challenge_id'})
    challenge: Challenge;


    @Column()
    verification_image: string;

    @Column()
    upload_date: Date;

}