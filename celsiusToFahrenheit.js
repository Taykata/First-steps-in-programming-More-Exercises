function celsiousToFahrenheit(input) {

    let C = Number(input[0]);

    let F = C * 9 / 5 + 32;

    console.log(F.toFixed(2));
}

celsiousToFahrenheit([25]);