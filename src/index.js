const prompts = require('./prompts');
const generator = require('./generator');
const { checkAndInstallPnpm } = require('./utils/packageManager');
const { logSuccess, logError } = require('./utils/logger');

async function main() {
  try {
    await checkAndInstallPnpm();
    const answers = await prompts();
    await generator(answers);
    logSuccess('\nSetup project selesai! Happy coding!');
  } catch (error) {
    logError(error.message);
    process.exit(1);
  }
}

main();