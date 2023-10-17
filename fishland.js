function fishland(input) {

    let priceMackerel = Number(input[0]);
    let priceSprinkle = Number(input[1]);
    let kilosOfBonito = Number(input[2]);
    let kilosOfSaffron = Number(input[3]);
    let kilosOfMussels = Number(input[4]);

    let priceForKiloBonito = priceMackerel + priceMackerel * 0.60;
    let priceForKiloSaffron = priceSprinkle + priceSprinkle * 0.80;
    let priceForKiloMussels = 7.50;

    let sumBonito = kilosOfBonito * priceForKiloBonito;
    let sumSaffron = kilosOfSaffron * priceForKiloSaffron;
    let sumMussels = kilosOfMussels * priceForKiloMussels;

    let totalSum = sumBonito + sumSaffron + sumMussels;

    console.log(totalSum.toFixed(2));
}

fishland([6.90, 4.20, 1.5, 2.5, 1]);