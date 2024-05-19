const chalk = require("chalk");

const app = require("./app");

const { PORT, BASE_URL } = process.env;
const errorMsg = chalk.bgKeyword("white").redBright;
const successMsg = chalk.bgKeyword("green").white;

try {
  app.listen(PORT, () => {
    console.log(successMsg(`Server is running on ${BASE_URL}`));
  });
} catch (error) {
  console.error(errorMsg(error));
  process.exit(1);
}
