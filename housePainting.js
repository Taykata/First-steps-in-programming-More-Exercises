function housePainting(input) {

    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);

    //walls
    let sideWall = x * y;
    let window = 1.5 * 1.5;
    let bothWalls = (2 * sideWall) - (2 * window);
    let backWall = x * x;
    let entrance = 1.2 * 2;
    let totalFrontAndBackWall = (2 * backWall) - entrance;
    let totalWallArea = bothWalls + totalFrontAndBackWall;
    let greenPaint = totalWallArea / 3.4;

    //roof
    let theTwoRectanglesOnTheRoof = 2 * (x * y);
    let theTwoTriangles = 2 * (x * h / 2);
    let totalRoofArea = theTwoRectanglesOnTheRoof + theTwoTriangles;
    let redPaint = totalRoofArea / 4.3;

    console.log(greenPaint.toFixed(2));
    console.log(redPaint.toFixed(2));
}

housePainting([6, 10, 5.2]);