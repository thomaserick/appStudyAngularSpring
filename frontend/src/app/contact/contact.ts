export class Contact {
    id: number;
    name: String;
    email: String;
    favorite: Boolean;

    constructor(name: string, email: string, favorite: Boolean) {
        this.name = name;
        this.email = email;
        this.favorite = favorite;
    }
}