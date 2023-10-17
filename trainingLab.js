function trainingLab(input) {

    let length = Number(input[0]) * 100;
    let width = Number(input[1]) * 100;

    let corridor = 100;

    let desks = Math.floor((width - corridor) / 70);

    let lines = Math.floor(length / 120);

    let numberOfPlaces = desks * lines - 3;

    console.log(numberOfPlaces);
}

trainingLab([15, 8.9]);