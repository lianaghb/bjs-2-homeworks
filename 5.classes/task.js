class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5;
    }

    set state(new_state) {
        if (new_state < 0) {
            this._state = 0;
        } else if (new_state > 100) {
            this._state = 100;
        } else {
            this._state = new_state;
        }
    }

    get state() {
        return this._state;
    }
}


class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor (author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

const picknick = new FantasticBook(
  "Аркадий и Борис Стругацкие",
  "Пикник на обочине",
  1972,
  168
);

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book)
        }
    }

    findBookBy(type, value) {
        const foundBook = this.books.find(book => book[type] === value);
        if (foundBook) {
            return foundBook;
        } else {
            return null;
        }
    }

    giveBookByName(bookName) {
        const index = this.books.findIndex(book => book.name === bookName);
        if (index !== -1) {
            return this.books.splice(index, 1)[0];
        } else {
            return null;
        }
    }
}

const lib = new Library("Ужасы");

lib.addBook(new NovelBook("Стивен Кинг", "Сияние", 1977, 447));
lib.addBook(new NovelBook("Стивен Кинг", "Оно", 1986, 1138));

let oldBook = lib.findBookBy("releaseDate", 1919);
if (!oldBook) {
    oldBook = new NovelBook("Говард Лавкрафт", "Дагон", 1919, 30);
    lib.addBook(oldBook);
}
console.log("Книга 1919 года:", oldBook.name);

const issued = lib.giveBookByName("Сияние");

issued.state = 20; 
console.log("Состояние после порчи:", issued.state); 

issued.fix();
console.log("Состояние после fix:", issued.state); 

lib.addBook(issued);
console.log("Вернулась ли книга в библиотеку?", lib.books.includes(issued));