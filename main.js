/*Objektum , lista , adatok tárolásarol */

let termekLista = [
  {
    nev: "Cicagolyó",
    ar: 1234,
    db: 12,
    leiras: "Cica számuzésér készült puha labda",
  },
  {
    nev: "Egérfogo",
    ar: 123454,
    db: 124,
    leiras: "Egeret leht vele fogni",
  },
  {
    nev: "Kutyaház",
    ar: 31234,
    db: 132,
    leiras: "A kutyának van hol aludnia",
  },
  {
    nev: "sejempárna",
    ar: 127734,
    db: 162,
    leiras: "Cica alvohelye",
  },
];
console.log(termekLista[0]);
console.log(termekLista[0].nev);
console.log(typeof termekLista[0]);

function termekekSzama() {
  termSzam = 0;

  for (let index = 0; index < termekLista.length; index++) {
    termSzam += 1;
  }
  return termSzam;
}
function osszesTermekDb() {
  let ossz = 0;
  for (let index = 0; index < termekLista.length; index++) {
    ossz += termekLista[index].db;
  }
  return ossz;
}

function terekekAtlagaAra() {
  let osszeg = 0;
  let atlag = 0;
  for (let index = 0; index < termekLista.length; index++) {
    osszeg += termekLista[index].ar;
  }
  atlag = osszeg / termekLista.length;
  return atlag;
}

function legdragabbTermekNeve() {
  let legdragabb = "";
  for (let index = 0; index < termekLista.length; index++) {
    if (termekLista[index] > legdragabb) {
      legdragabb = termekLista[index].nev;
    }
  }

  return legdragabb;
}
console.log("Termékek száma: "+termekekSzama())
console.log("Termékek db száma: "+osszesTermekDb())
console.log("Termékek átlagára: "+terekekAtlagaAra())
console.log("Legdrágább termék neve: "+legdragabbTermekNeve())

