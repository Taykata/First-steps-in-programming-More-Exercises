function vegetableMarket(input) {

    let kiloVegetables = Number(input[0]);
    let kiloFruits = Number(input[1]);
    let totalVegetables = Number(input[2]);
    let totalFruits = Number(input[3]);

    let vegetables = kiloVegetables * totalVegetables;
    let fruits = kiloFruits * totalFruits;

    let totalLeva = vegetables + fruits;

    let totalEuro = totalLeva / 1.94;

    console.log(totalEuro.toFixed(2));
}

vegetableMarket([0.194, 19.4, 10, 10]);