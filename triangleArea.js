function triangleArea(input) {

    let a = Number(input[0]);
    let h = Number(input[1]);

    let S = a * h / 2;

    console.log(S.toFixed(2));
}

triangleArea([20, 30]);