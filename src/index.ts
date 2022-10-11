import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './teszt'
import { Book } from './Book';


let input_cim = (document.getElementById("input_cim") as HTMLInputElement);
let input_rating = (document.getElementById("input_rating") as HTMLInputElement);
let btn_hozzaad = (document.getElementById("btn_hozzaad") as HTMLButtonElement);
let konyvek = (document.getElementById("konyvek") as HTMLDivElement);

function addKonyv(konyv: Book): void {
  let konyvElem = document.createElement("div");
  konyvElem.innerHTML =
    `
  <div>
  <span class="fw-bold">Cím:</span> ${konyv.name}
  <span class="fw-bold">Értékelés:</span> ${konyv.getRating()}/10
  <span class="text-danger fw-bold" role="button" onclick="this.parentElement.remove();">X</span>
  </div>
  `;
  konyvek.appendChild(konyvElem);

}

function init(): void {

  addKonyv(new Book("SICP", 10));

  btn_hozzaad.addEventListener("click", () => {

    if (input_cim.value == "" || input_rating.value == "") {
      return;
    }

    let rating: number = parseFloat(input_rating.value);
    // lekerekítjük 1 tizedesjegyre
    rating = parseFloat(rating.toFixed(1));
    addKonyv(new Book(input_cim.value, rating))

    input_cim.value = "";
    input_rating.value = "";

  })

}

init();
