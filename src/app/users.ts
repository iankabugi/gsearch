export class Users {
    constructor(
        public username:string,
        public bio:string,
        public date:Date,
        public followers:number,
        public following:number,
        public picture:string
    ){}
}
