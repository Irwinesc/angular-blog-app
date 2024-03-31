export class Article{
    static date: any;
    constructor(
        public _id: string,
        public title: string,
        public date: any,
        public content: string,
        public image: string
    ){}
}


// title: String,
//     content: String,
//     date: { type: Date, default: Date.now },
//     image: String