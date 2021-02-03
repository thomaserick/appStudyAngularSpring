export class Contact {
    id: number;
    name: String;
    email: String;
    favorite: Boolean;
    photo: any

    constructor(name: string, email: string, favorite: Boolean) {
        this.name = name;
        this.email = email;
        this.favorite = favorite;
    }
}