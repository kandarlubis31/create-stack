const chalk = require('chalk');

const logInfo = (msg) => console.log(chalk.blue(msg));
const logSuccess = (msg) => console.log(chalk.green.bold(msg));
const logError = (msg) => console.log(chalk.red.bold(msg));
const logWarning = (msg) => console.log(chalk.yellow(msg));

module.exports = {
  logInfo,
  logSuccess,
  logError,
  logWarning
};