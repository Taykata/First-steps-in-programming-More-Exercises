function weatherForecastPart2(input) {

    let graduces = Number(input[0]);

    if (graduces >= 26.00 && graduces <= 35.00) {
        console.log("Hot");
    } else if (graduces >= 20.1 && graduces <= 25.9) {
        console.log("Warm");
    } else if (graduces >= 15.00 && graduces <= 20.00) {
        console.log("Mild");
    } else if (graduces >= 12.00 && graduces <= 14.9) {
        console.log("Cool");
    } else if (graduces >= 5.00 && graduces <= 11.9){
        console.log("Cold");
    } else {
        console.log("unknown");
    }
}

weatherForecastPart2([16.5]);