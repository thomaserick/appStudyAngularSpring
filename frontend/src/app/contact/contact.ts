export class Contact {
    id: number;
    name: String;
    email: String;
    favorite: Boolean;    

    constructor(name:string,email:string)
    {
        this.name=name;
        this.email=email;
    }
}