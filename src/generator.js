const path = require('path');
const { execSync } = require('child_process');
const ora = require('ora');
const { createProjectFolder, copyTemplate, updatePackageJson } = require('./utils/fileOps');
const packageManager = require('./utils/packageManager');
const { logInfo, logError } = require('./utils/logger');

module.exports = async (answers) => {
  const { stackValue, projectName, git, install, pkgType } = answers;
  const targetPath = path.join(process.cwd(), projectName);

  logInfo(`\nMemulai setup untuk project ${projectName}...`);

  await createProjectFolder(targetPath);
  await copyTemplate(stackValue, targetPath);
  await updatePackageJson(targetPath, projectName, pkgType);

  if (git) {
    const spinner = ora('Inisialisasi Git...').start();
    try {
      execSync('git init', { cwd: targetPath, stdio: 'ignore' });
      spinner.succeed('Git repository dibuat');
    } catch (error) {
      spinner.fail('Gagal inisialisasi Git');
      logError(error.message);
    }
  }

  if (install) {
    packageManager.installDependencies(targetPath, pkgType);
  }
};