import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { Book } from './Book';

let teszt_adat: Book[] = [];

teszt_adat.push(new Book("SICP", 11))
teszt_adat.push(new Book("asd", 5))
teszt_adat.push(new Book("amongus", -20))

for (const b of teszt_adat) {
  console.log(b.toString());
}
