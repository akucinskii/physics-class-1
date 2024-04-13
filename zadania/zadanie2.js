const zadanie2 = require("../wartosci/wartosci").zadanie2;

const Zadanie2 = () => {
  console.log("Zadanie 2:");
  const { R, L, F1, F2, U } = zadanie2;

  // replace 3.14 with Math.PI
  const Xl = 2 * 3.14 * F1 * L;

  const Xc = (1 / (2 * 3.14 * F1 * Xl)) * 1000000;

  console.log("Pojemnosc C aby uzyskać dostrojenie: ", Xc + "pF");

  const I = U / R;

  const Uc = (I * Xl) / 1000;

  console.log("Napięcie na kondensatorze dla F1 wynosi: ", Uc + "mV");

  // Dla F2

  const Xl2 = 2 * 3.14 * F2 * L;

  // Xc bo amplituda prądu jest taka sama
  const Xc2 = (1 / (2 * 3.14 * F2 * Xc)) * 1000000;

  const Z = Math.sqrt(R * R + (Xl2 - Xc2) * (Xl2 - Xc2));

  const J = U / Z;

  const Uc2 = J * Xc2;

  console.log("Napięcie na kondensatorze przy F2 wynosi : ", Uc2 + "mV");
};

module.exports = Zadanie2;
