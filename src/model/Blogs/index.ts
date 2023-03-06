export default interface IBlog {
  id: string;
  title: string;
  author: string;
  datetime: string;
  content: string;
  img: string;
}

// export class BlogORM {
//   title: string;
//   author: string;
//   datetime: string;
//   content: string;
//   img: string;

//   constructor(
//     title: string,
//     author: string,
//     datetime: string,
//     content: string,
//     img: string
//   ) {
//     this.title = title;
//     this.author = author;
//     this.datetime = datetime;
//     this.content = content;
//     this.img = img;
//   }
// }
