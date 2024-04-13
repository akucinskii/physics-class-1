// Teoria
// Połączenie szeregowe rezystorów

// R1 + R2 + R3 + ... + Rn = R

// Połączenie równoległe rezystorów

// 1/R1 + 1/R2 + 1/R3 + ... + 1/Rn = 1/R

// MOJE WARTOSCI

const wartosci = require("../wartosci/wartosci");
const Zadanie1 = () => {
  const { R1, R2, R3, R4, R5, R6, R7, R8, R9, R10 } = wartosci.zadanie1;

  const ObliczOpornoscRownolegla = (R1, R2) => (R1 * R2) / (R1 + R2);
  const ObliczOpornoscSzeregowa = (R1, R2) => R1 + R2;

  // Połączenie równoległe
  const R13 = ObliczOpornoscRownolegla(R1, R3);
  const R24 = ObliczOpornoscRownolegla(R2, R4);
  const R78 = ObliczOpornoscRownolegla(R7, R8);
  const R910 = ObliczOpornoscSzeregowa(R9, R10);

  const R78910 = ObliczOpornoscRownolegla(R78, R910);

  const R678910 = ObliczOpornoscSzeregowa(R6, R78910);

  const R5678910 = ObliczOpornoscRownolegla(R5, R678910);

  const R135678910 = ObliczOpornoscSzeregowa(R13, R5678910);

  const RZ = ObliczOpornoscRownolegla(R24, R135678910);

  console.log("ZADANIE 1: ", RZ);
  return RZ;
};

module.exports = Zadanie1;
