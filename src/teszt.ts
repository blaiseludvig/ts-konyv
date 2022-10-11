import { Book } from './Book';

let teszt_adat: Book[] = [];

teszt_adat.push(new Book("SICP", 11))
teszt_adat.push(new Book("asd", 5))
teszt_adat.push(new Book("amongus", -20))

console.log("teszt adat: ");
for (const b of teszt_adat) {
  console.log(b.toString());
}

let random_konyvek: Book[] = randomKonyvek();

console.log("random könyvek címei: ");
for (const b of random_konyvek) {
  console.log(b.name);
}

console.log("nagyobb mint 7 értékelés: ");
for (const b of random_konyvek) {
  if (b.getRating() > 7) {
    console.log(b.toString());
  }
}

console.log(`Legjobb könyv: ${bestof(random_konyvek)}`);


function randomKonyvek(): Book[] {
  let konyvek: Book[] = [];

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values
  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  for (let i = 0; i < 30; i++) {
    konyvek.push(new Book(`Book #${i}`, getRandomInt(1, 10 + 1)))
  }

  return konyvek;
}

function bestof(konyvek: Book[]): Book {
  let legjobb: Book = konyvek[0];

  for (const b of konyvek) {
    if (b.getRating() > legjobb.getRating()) {
      legjobb = b;
    }
  }

  return legjobb;
}
