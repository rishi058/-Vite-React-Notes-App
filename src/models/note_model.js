export class Notes {
    constructor(id, title, content, date) {
      this.content = content; 
      this.title = title;    
      this.date = date;      
      this.id = id;           
    }
  }
  


let notesList = [
    new Notes("1", "123456789123456789", "Content for note 1", "2024-04-01"),
    new Notes("2", "Title 2", "Content for note 2", "2024-04-02"),
    new Notes("3", "Title 3", "Content for note 3", "2024-04-03"),
    new Notes("4", "Title 4", "Content for note 4", "2024-04-04"),
  ];

  export default notesList;