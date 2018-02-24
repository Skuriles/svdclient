import { PersonCategory } from "./person-category";

export class Person {
    public _id: string;
    public name: string;
    public coach: string;
    public position: string;
    public isPosition: boolean;
    public isCoach: boolean;
    public categories: PersonCategory[];   
}
