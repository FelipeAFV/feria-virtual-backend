import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("challenge")
export class Challenge {

    @PrimaryGeneratedColumn()
    id: number;
}