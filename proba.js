console.log("Halló!");

/*változok dekralálása */

var szoveg = "Virág";
let szoveg2 = "Madár";
const SZOVEG = "Élet értelme"; //konstans csupa nagybetuvel
const SZAM = 42;

szoveg2 = "repül";

/*Hatokör kulönbségek
láthatoságot jelöl */

szoveg = "2";
console.log(typeof szoveg); /*Megmondja hogy mia tipusa */
console.log(szoveg + 2); /*összefüzi  mert sszöveg*/
console.log(Number(szoveg + 2)); /*tipuskényszerités*/
console.log(szoveg * 2);
szoveg2 = 12.3;
console.log(typeof szoveg2);
let igaze = true;
console.log(typeof igaze);

/*Ősszetet tipusok */
let lista = [];
console.log(typeof lista);
lista = [
  12, 33, 1234, 45, 34,
]; /*Csak azonos értéket lehet belepakolni,attol fugetlenul hogy ez most mind objekt nek minösül */
console.log(lista.length, lista[0]); /*lista hossza */

/*elágazás */
console.log("Elágazás");
if (lista[0] % 2 == 0) {
  console.log("Páros");
} else {
  console.log("páratlan");
}

if ("2" == 2) {
  console.log("Egyenlő");
} else {
  console.log("Nem egyenlő");
}

if ("2" === 2) {
  /*A3. egyenlöség jel a tipust nézi meg */
  console.log("Egyenlő");
} else {
  console.log("Nem egyenlő");
}

let hetnapja = 2;
switch (hetnapja) {
  case 1:
    console.log("Hétfő");
    break;
  case 2:
    console.log("Kedd");
    break;
  case 3:
    console.log("Szerda");
    break;
  case 4:
    console.log("Csütörtök");
    break;
  case 5:
    console.log("Péntek");
    break;
  case 6:
    console.log("Szombat");
    break;
  case 7:
    console.log("Vasárnap");
    break;

  default:
    console.log("Nem nap érték");
    break;
}

if (hetnapja === 1) {
  console.log("Hétfő");
} else if (hetnapja === 2) {
  console.log("Kedd");
} else {
  console.log("Nem nap érték");
}

/*Ciklus */
console.log("Ciklus");
for (let index = 0; index < lista.length; index++) {
  if (lista[index] % 2 == 0) {
    console.log("Páros");
  } else {
    console.log("páratlan");
  }
}

let i = 0;
while (i < lista.length) {
  /*console.log(i + ".elem" + lista[i]);*/
  console.log(`${i + 1}. elem ${lista[i]}`); /*Alt Gr 7 ,formázott kiirás */
  i++;
}
for (let index = 0; index < lista.length; index++) {
  console.log(`${index + 1}. elem ${lista[index]}`);
}

/*Eljárások és függvények avagy metodusok */

function listaBejarasFor() {
  for (let index = 0; index < lista.length; index++) {
    console.log(`${index + 1}. elem ${lista[index]}`);
  }
}
function HetNapja1(hetnapja) {
  let nap = "";
  switch (hetnapja) {
    case 1:
      nap = "Hétfő";
      break;
    case 2:
      nap = "Kedd";
      break;
    case 3:
      nap = "Szerda";
      break;
    case 4:
      nap = "Csütörtök";
      break;
    case 5:
      nap = "Péntek";
      break;
    case 6:
      nap = "Szombat";
      break;
    case 7:
      nap = "Vasárnap";
      break;

    default:
      nap = "Nem nap érték";
      break;
  }
  return nap;
}
HetNapja1(1);
listaBejarasFor();
