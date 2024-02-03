const http = require("http");
const fs = require("fs");

http
  .createServer(function (req, res) {
    const myString = req.url;
    const myArray = myString.split("/");
    // console.log(myArray);

    const operator = myArray[1];
    const number1 = parseInt(myArray[2]);
    const number2 = parseInt(myArray[3]);
    const additionalNumbers = myArray
      .slice(4)
      .map((numString) => parseInt(numString));

    const serverCalculator = function (
      operator,
      number1,
      number2,
      ...additionalNumbers
    ) {
      let result = 0;

      if (isNaN(number1) || isNaN(number2) || additionalNumbers.some(isNaN)) {
        return "Invalid input, Please enter at least two valid numbers .";
      }

      switch (operator) {
        case "add":
          result =
            number1 + number2 + additionalNumbers.reduce((a, b) => a + b, 0);
          break;
        case "sub":
          result =
            number1 - number2 - additionalNumbers.reduce((a, b) => a + b, 0);
          break;
        case "mul":
          result =
            number1 * number2 * additionalNumbers.reduce((a, b) => a * b, 1);
          break;
        case "div":
          result =
            number1 / number2 / additionalNumbers.reduce((a, b) => a / b, 1);
          break;
        default:
          result = "Invalid operator";
      }

      return result;
    };

    const result = serverCalculator(
      operator,
      number1,
      number2,
      ...additionalNumbers
    );

    console.log(`The result of ${operator} for numbers is ---> ${result}`);

    fs.appendFile(
      "result.txt",
      `${operator} ${number1} ${number2} ${additionalNumbers}= ${result}\n`,
      (err) => {
        if (err) throw err;
        console.log("Result is already saved in result.txt file.");
      }
    );

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      `<h1>The result of ${operator} for numbers is ---> ${result}</h1>`
    );
    res.end();
  })
  .listen(9000, () => console.log("Server running on port 9000"));
