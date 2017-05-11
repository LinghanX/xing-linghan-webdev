export class TestList {
  content: string;
  createdAt: string;

  constructor(content: string){
    this.content = content;
    this.createdAt = new Date().toString();
  }
}
