/*----Start Basic Calculator Section----*/
const dispaly = document.getElementById("result");
const buttons = document.querySelectorAll("button");
const buttonArray = Array.from(buttons);
let string = "";

buttonArray.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      dispaly.value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      dispaly.value = string;
    } else if (e.target.innerHTML == "=") {
      string = eval(string);
      dispaly.value = string;
    } else {
      string += e.target.innerHTML;
      dispaly.value = string;
    }
  });
});
/*----End Basic Calculator Section----*/
/*-------------------------------------------*/
/*----Start Fahrenheit to Celsius Calculator Section----*/

const calculateFahrenheit = document.getElementById("fahrenheitCalculate");
const fahrenheitValue = document.getElementById("fahrenheitValue");
const errorMessageFahrenheit = document.getElementById("fahrenheit-error");
const dispalyCelsius = document.getElementById("showCelsiusValue");

calculateFahrenheit.addEventListener("click", () => {
  if (fahrenheitValue.value == "") {
    errorMessageFahrenheit.classList.remove("hide");
    errorMessageFahrenheit.innerText = `Value can't be Empty!`;
    dispalyCelsius.value = "0.00";
  } else if (fahrenheitValue.value < 0) {
    errorMessageFahrenheit.classList.remove("hide");
    errorMessageFahrenheit.innerText = `Fahrenheit Value In-Valid!`;
    dispalyCelsius.value = "0.00";
  } else {
    errorMessageFahrenheit.classList.add("hide");
    function celsius(x) {
      let sumCelsius = ((x - 32) * 5) / 9;
      return sumCelsius;
    }
    const resultCelsius = celsius(parseFloat(fahrenheitValue.value));
    dispalyCelsius.value = resultCelsius.toFixed(2);
    fahrenheitValue.value = "";
  }
});

/*----End Fahrenheit to Celsius Calculator Section----*/
/*-------------------------------------------*/
/*----Start Celsius to Fahrenheit Calculator Section----*/
const calculateCelsius = document.getElementById("celsiusCalculate");
const celsiusValue = document.getElementById("celsiusValue");
const errorMessageCelsius = document.getElementById("celsius-error");
const displayFahrenheit = document.getElementById("showFahrenheitValue");

calculateCelsius.addEventListener("click", () => {
  if (celsiusValue.value == "") {
    errorMessageCelsius.classList.remove("hide");
    errorMessageCelsius.innerText = `Value can't be Empty!`;
    displayFahrenheit.value = "0.00";
  } else if (celsiusValue.value < 0) {
    errorMessageCelsius.classList.remove("hide");
    errorMessageCelsius.innerText = `Fahrenheit Value In-Valid!`;
    displayFahrenheit.value = "0.00";
  } else {
    errorMessageCelsius.classList.add("hide");
    function fahrenheit(x) {
      let sumFahrenheit = (x * 9) / 5 + 32;
      return sumFahrenheit;
    }
    const resultFahrenheit = fahrenheit(parseFloat(celsiusValue.value));
    displayFahrenheit.value = resultFahrenheit.toFixed(2);
    celsiusValue.value = "";
  }
});
/*----End Celsius to Fahrenheit Calculator Section----*/
/*-------------------------------------------*/
/*----Start Area of Circle Section----*/
const calculateCircle = document.getElementById("circleCalculate");
const radiusValue = document.getElementById("radiusValue");
const errorMessageCircle = document.getElementById("circle-error");
const dispalyRadius = document.getElementById("showRadiusValue");

calculateCircle.addEventListener("click", () => {
  if (radiusValue.value == "") {
    errorMessageCircle.classList.remove("hide");
    errorMessageCircle.innerText = `Value can't be Empty!`;
    dispalyRadius.value = "0.00";
  } else if (radiusValue.value <= 0) {
    errorMessageCircle.classList.remove("hide");
    errorMessageCircle.innerText = `Enter a Value Greater Than Zero`;
    dispalyRadius.value = "0.00";
  } else {
    errorMessageCircle.classList.add("hide");
    function radius(r) {
      let areaOfCircle = Math.PI * r ** 2;
      return areaOfCircle;
    }
    const resultOfCircle = radius(parseFloat(radiusValue.value));
    dispalyRadius.value = resultOfCircle.toFixed(2);
    radiusValue.value = "";
  }
});
/*----End Area of Circle Section----*/
/*-------------------------------------------*/
/*----Start Area of Rectangle Section----*/
const calculateRectangle = document.getElementById("calculateRectangle");
const rectangleLengthValue = document.getElementById("rectangleLengthValue");
const rectangleWidthValue = document.getElementById("rectangleWidthValue");
const errorMessageRectangleLength = document.getElementById(
  "rectangle-errorLength"
);
const errorMessageRectangWidth = document.getElementById(
  "rectangle-errorWidth"
);
const displayRectangle = document.getElementById("showRectangleValue");

calculateRectangle.addEventListener("click", () => {
  if (rectangleLengthValue.value == "") {
    errorMessageRectangleLength.classList.remove("hide");
    errorMessageRectangleLength.innerText = `Value can't be Empty!`;
    displayRectangle.value = "0.00";
  } else if (rectangleLengthValue.value <= 0) {
    errorMessageRectangleLength.classList.remove("hide");
    errorMessageRectangleLength.innerText = `Enter a Value Greater Than Zero`;
    displayRectangle.value = "0.00";
  } else if (rectangleWidthValue.value == "") {
    errorMessageRectangWidth.classList.remove("hide");
    errorMessageRectangleLength.classList.add("hide");
    errorMessageRectangWidth.innerText = `Value can't be Empty!`;
    displayRectangle.value = "0.00";
  } else if (rectangleWidthValue.value <= 0) {
    errorMessageRectangWidth.classList.remove("hide");
    errorMessageRectangleLength.classList.add("hide");
    errorMessageRectangWidth.innerText = `Enter a Value Greater Than Zero`;
    displayRectangle.value = "0.00";
  } else {
    errorMessageRectangWidth.classList.add("hide");
    function rectangle(l, w) {
      let areaOfRectangle = l * w;
      return areaOfRectangle;
    }
    parseFloat(rectangleLengthValue.value);
    parseFloat(rectangleWidthValue.value);

    const resultOfRectangle = rectangle(
      rectangleLengthValue.value,
      rectangleWidthValue.value
    );
    displayRectangle.value = resultOfRectangle.toFixed(2);
    rectangleLengthValue.value = "";
    rectangleWidthValue.value = "";
  }
});
/*----End Area of Rectangle Section----*/
/*-------------------------------------------*/
/*----Start Area of Square Section----*/
const calculateSquare = document.getElementById("squarecalculate");
const squareValue = document.getElementById("squareValue");
const errorMessageSquare = document.getElementById("square-error");
const dispalySquare = document.getElementById("showSquareValue");

calculateSquare.addEventListener("click", () => {
  if (squareValue.value == "") {
    errorMessageSquare.classList.remove("hide");
    errorMessageSquare.innerText = `Value can't be Empty!`;
    dispalySquare.value = "0.00";
  } else if (squareValue.value <= 0) {
    errorMessageSquare.classList.remove("hide");
    errorMessageSquare.innerText = `Enter a Value Greater Than Zero`;
    dispalySquare.value = "0.00";
  } else {
    errorMessageSquare.classList.add("hide");
    function square(a) {
      let areaOfSquare = a ** 2;
      return areaOfSquare;
    }
    const resultOfSquare = square(parseFloat(squareValue.value));
    dispalySquare.value = resultOfSquare.toFixed(2);
    squareValue.value = "";
  }
});
/*----End Area of Square Section----*/
/*-------------------------------------------*/
/*----Start Area of Triangle Section----*/
const calculateTriangle = document.getElementById("calculateTriangle");
const triangleBaseValue = document.getElementById("triangleBaseValue");
const triangleHeightValue = document.getElementById("triangleHeightValue");
const errorMessageTriangleBase = document.getElementById("triangle-errorBase");
const errorMessageTriangleHeight = document.getElementById(
  "triangle-errorHeight"
);
const displayTriangle = document.getElementById("showTriangleValue");

calculateTriangle.addEventListener("click", () => {
  if (triangleBaseValue.value == "") {
    errorMessageTriangleBase.classList.remove("hide");
    errorMessageTriangleBase.innerText = `Value can't be Empty!`;
    displayTriangle.value = "0.00";
  } else if (triangleBaseValue.value <= 0) {
    errorMessageTriangleBase.classList.remove("hide");
    errorMessageTriangleBase.innerText = `Enter a Value Greater Than Zero`;
    displayTriangle.value = "0.00";
  } else if (triangleHeightValue.value == "") {
    errorMessageTriangleHeight.classList.remove("hide");
    errorMessageTriangleBase.classList.add("hide");
    errorMessageTriangleHeight.innerText = `Value can't be Empty!`;
    displayTriangle.value = "0.00";
  } else if (triangleHeightValue.value <= 0) {
    errorMessageTriangleHeight.classList.remove("hide");
    errorMessageTriangleBase.classList.add("hide");
    errorMessageTriangleHeight.innerText = `Enter a Value Greater Than Zero`;
    displayTriangle.value = "0.00";
  } else {
    errorMessageTriangleHeight.classList.add("hide");
    function triangle(b, h) {
      let areaOftriangle = (1 / 2) * b * h;
      return areaOftriangle;
    }
    parseFloat(triangleBaseValue.value);
    parseFloat(triangleHeightValue.value);

    const resultOfTriangle = triangle(
      triangleBaseValue.value,
      triangleHeightValue.value
    );
    displayTriangle.value = resultOfTriangle.toFixed(2);
    triangleBaseValue.value = "";
    triangleHeightValue.value = "";
  }
});
/*----End Area of Triangle Section----*/
/*-------------------------------------------*/
/*----Start Area of Parallelogram Section----*/
const calculateParallelogram = document.getElementById(
  "calculateParallelogram"
);
const parallelogramBaseValue = document.getElementById(
  "parallelogramBaseValue"
);
const parallelogramHeightValue = document.getElementById(
  "parallelogramHeightValue"
);
const errorMessageParallelogramBase = document.getElementById(
  "parallelogram-errorBase"
);
const errorMessageParallelogramHeight = document.getElementById(
  "parallelogram-errorHeight"
);
const displayParallelogram = document.getElementById("showParallelogramValue");

calculateParallelogram.addEventListener("click", () => {
  if (parallelogramBaseValue.value == "") {
    errorMessageParallelogramBase.classList.remove("hide");
    errorMessageParallelogramBase.innerText = `Value can't be Empty!`;
    displayParallelogram.value = "0.00";
  } else if (parallelogramBaseValue.value <= 0) {
    errorMessageParallelogramBase.classList.remove("hide");
    errorMessageParallelogramBase.innerText = `Enter a Value Greater Than Zero`;
    displayParallelogram.value = "0.00";
  } else if (parallelogramHeightValue.value == "") {
    errorMessageParallelogramHeight.classList.remove("hide");
    errorMessageParallelogramBase.classList.add("hide");
    errorMessageParallelogramHeight.innerText = `Value can't be Empty!`;
    displayParallelogram.value = "0.00";
  } else if (parallelogramHeightValue.value <= 0) {
    errorMessageParallelogramHeight.classList.remove("hide");
    errorMessageParallelogramBase.classList.add("hide");
    errorMessageParallelogramHeight.innerText = `Enter a Value Greater Than Zero`;
    displayParallelogram.value = "0.00";
  } else {
    errorMessageParallelogramHeight.classList.add("hide");
    function parallelogram(b, h) {
      let areaOfParallelogram = b * h;
      return areaOfParallelogram;
    }
    parseFloat(parallelogramBaseValue.value);
    parseFloat(parallelogramHeightValue.value);

    const resultOfParallelogram = parallelogram(
      parallelogramBaseValue.value,
      parallelogramHeightValue.value
    );
    displayParallelogram.value = resultOfParallelogram.toFixed(2);
    parallelogramBaseValue.value = "";
    parallelogramHeightValue.value = "";
  }
});

/*----End Area of Parallelogram Section----*/
/*-------------------------------------------*/
/*----Start Area of Rhombus Section----*/
const calculateRhombus = document.getElementById("calculateRhombus");
const rhombusFristDiagonal = document.getElementById("rhombusFristDiagonal");
const rhombusSecondDiagonal = document.getElementById("rhombusSecondDiagonal");
const errorMessageRhombusBase = document.getElementById(
  "rhombus-errorFristDiagonal"
);
const errorMessageRhombusHeight = document.getElementById(
  "rhombus-errorSecondDiagonal"
);
const displayRhombus = document.getElementById("showRhombusValue");

calculateRhombus.addEventListener("click", () => {
  if (rhombusFristDiagonal.value == "") {
    errorMessageRhombusBase.classList.remove("hide");
    errorMessageRhombusBase.innerText = `Value can't be Empty!`;
    displayRhombus.value = "0.00";
  } else if (rhombusFristDiagonal.value <= 0) {
    errorMessageRhombusBase.classList.remove("hide");
    errorMessageRhombusBase.innerText = `Enter a Value Greater Than Zero`;
    displayRhombus.value = "0.00";
  } else if (rhombusSecondDiagonal.value == "") {
    errorMessageRhombusHeight.classList.remove("hide");
    errorMessageRhombusBase.classList.add("hide");
    errorMessageRhombusHeight.innerText = `Value can't be Empty!`;
    displayRhombus.value = "0.00";
  } else if (rhombusSecondDiagonal.value <= 0) {
    errorMessageRhombusHeight.classList.remove("hide");
    errorMessageRhombusBase.classList.add("hide");
    errorMessageRhombusHeight.innerText = `Enter a Value Greater Than Zero`;
    displayRhombus.value = "0.00";
  } else {
    errorMessageRhombusHeight.classList.add("hide");
    function rhombus(d1, d2) {
      let areaOfRhombus = (1 / 2) * d1 * d2;
      return areaOfRhombus;
    }
    parseFloat(rhombusFristDiagonal.value);
    parseFloat(rhombusSecondDiagonal.value);

    const resultOfRhombus = rhombus(
      rhombusFristDiagonal.value,
      rhombusSecondDiagonal.value
    );
    displayRhombus.value = resultOfRhombus.toFixed(2);
    rhombusFristDiagonal.value = "";
    rhombusSecondDiagonal.value = "";
  }
});
/*----End Area of Rhombus Section----*/
/*-------------------------------------------*/
/*----Start Area of Trapezoid Section----*/

const calculateTrapezoid = document.getElementById("calculateTrapezoid");
const trapezoidFristBase = document.getElementById("trapezoidFristBaseValue");
const trapezoidSecondBase = document.getElementById("trapezoidSecondBaseValue");
const trapezoidHeight = document.getElementById("trapezoidHeightValue");
const errorMessageTrapezoidFristBase = document.getElementById(
  "trapezoid-errorFristBase"
);
const errorMessageTrapezoidSecondBase = document.getElementById(
  "trapezoid-errorSecondBase"
);
const errorMessageTrapezoidHeight = document.getElementById(
  "trapezoid-errorHeight"
);
const displayTrapezoid = document.getElementById("showTrapezoidValue");

calculateTrapezoid.addEventListener("click", () => {
  if (trapezoidFristBase.value == "") {
    errorMessageTrapezoidFristBase.classList.remove("hide");
    errorMessageTrapezoidFristBase.innerText = `Value can't be Empty!`;
    displayTrapezoid.value = "0.00";
  } else if (trapezoidFristBase.value <= 0) {
    errorMessageTrapezoidFristBase.classList.remove("hide");
    errorMessageTrapezoidFristBase.innerText = `Enter a Value Greater Than Zero`;
    displayTrapezoid.value = "0.00";
  } else if (trapezoidSecondBase.value == "") {
    errorMessageTrapezoidSecondBase.classList.remove("hide");
    errorMessageTrapezoidFristBase.classList.add("hide");
    errorMessageTrapezoidSecondBase.innerText = `Value can't be Empty!`;
    displayTrapezoid.value = "0.00";
  } else if (trapezoidSecondBase.value <= 0) {
    errorMessageTrapezoidSecondBase.classList.remove("hide");
    errorMessageTrapezoidFristBase.classList.add("hide");
    errorMessageTrapezoidSecondBase.innerText = `Enter a Value Greater Than Zero`;
    displayTrapezoid.value = "0.00";
  } else if (trapezoidHeight.value == "") {
    errorMessageTrapezoidHeight.classList.remove("hide");
    errorMessageTrapezoidSecondBase.classList.add("hide");
    errorMessageTrapezoidFristBase.classList.add("hide");
    errorMessageTrapezoidHeight.innerText = `Value can't be Empty!`;
  } else if (trapezoidHeight.value <= 0) {
    errorMessageTrapezoidHeight.classList.remove("hide");
    errorMessageTrapezoidSecondBase.classList.add("hide");
    errorMessageTrapezoidFristBase.classList.add("hide");
    errorMessageTrapezoidHeight.innerText = `Enter a Value Greater Than Zero`;
  } else {
    errorMessageTrapezoidHeight.classList.add("hide");
    function trapezoid(a, b, h) {
      let areaOfTrapezoid = (1 / 2) * (a + b) * h;
      return areaOfTrapezoid;
    }

    let resultOfTrapezoid = trapezoid(
      parseInt(trapezoidFristBase.value),
      parseInt(trapezoidSecondBase.value),
      parseInt(trapezoidHeight.value)
    );
    displayTrapezoid.value = resultOfTrapezoid.toFixed(2);
    trapezoidFristBase.value = "";
    trapezoidSecondBase.value = "";
    trapezoidHeight.value = "";
  }
});
/*----End Area of Trapezoid Section----*/
/*-------------------------------------------*/
/*----Start Area of Ellipse Section----*/

const calculateEllipse = document.getElementById("calculateEllipse");
const ellipseMajorAxis = document.getElementById("ellipseMajorAxisValue");
const ellipseMinorAxis = document.getElementById("ellipseMinorAxisValue");
const errorMessageEllipseMajor = document.getElementById(
  "ellipse-errorMajorAxis"
);
const errorMessageEllipseMinor = document.getElementById(
  "ellipse-errorMinorAxis"
);
const displayEllipse = document.getElementById("showEllipseValue");

calculateEllipse.addEventListener("click", () => {
  if (ellipseMajorAxis.value == "") {
    errorMessageEllipseMajor.classList.remove("hide");
    errorMessageEllipseMajor.innerText = `Value can't be Empty!`;
    displayEllipse.value = "0.00";
  } else if (ellipseMajorAxis.value <= 0) {
    errorMessageEllipseMajor.classList.remove("hide");
    errorMessageEllipseMajor.innerText = `Enter a Value Greater Than Zero`;
    displayEllipse.value = "0.00";
  } else if (ellipseMinorAxis.value == "") {
    errorMessageEllipseMinor.classList.remove("hide");
    errorMessageEllipseMajor.classList.add("hide");
    errorMessageEllipseMinor.innerText = `Value can't be Empty!`;
    displayEllipse.value = "0.00";
  } else if (ellipseMinorAxis.value <= 0) {
    errorMessageEllipseMinor.classList.remove("hide");
    errorMessageEllipseMajor.classList.add("hide");
    errorMessageEllipseMinor.innerText = `Enter a Value Greater Than Zero`;
    displayEllipse.value = "0.00";
  } else {
    errorMessageEllipseMinor.classList.add("hide");
    function ellipse(a, b) {
      let areaOfEllipse = Math.PI * a * b;
      return areaOfEllipse;
    }
    parseFloat(ellipseMajorAxis.value);
    parseFloat(ellipseMinorAxis.value);

    const resultOfEllipse = ellipse(
      ellipseMajorAxis.value,
      ellipseMinorAxis.value
    );
    displayEllipse.value = resultOfEllipse.toFixed(2);
    ellipseMajorAxis.value = "";
    ellipseMinorAxis.value = "";
  }
});
/*----End Area of Ellipse Section----*/
/*-------------------------------------------*/
/*----Start Area of Cube Section----*/
const calculateCube = document.getElementById("Cubecalculate");
const cubeValue = document.getElementById("cubeHeightValue");
const errorMessageCube = document.getElementById("cube-error");
const displayCube = document.getElementById("showCubeValue");

calculateCube.addEventListener("click", () => {
  if (cubeValue.value == "") {
    errorMessageCube.classList.remove("hide");
    errorMessageCube.innerText = `Value can't be Empty!`;
    displayCube.value = "0.00";
  } else if (cubeValue.value <= 0) {
    errorMessageCube.classList.remove("hide");
    errorMessageCube.innerText = `Enter a Value Greater Than Zero`;
    displayCube.value = "0.00";
  } else {
    errorMessageCube.classList.add("hide");
    function cube(a) {
      let sumOfCube = 6 * a ** 2;
      return sumOfCube;
    }
    const resultOfCube = cube(parseFloat(cubeValue.value));
    displayCube.value = resultOfCube.toFixed(2);
    cubeValue.value = "";
  }
});
/*----End Area of Cube Section----*/
