const fs = require('fs-extra');
const path = require('path');
const ora = require('ora');

const createProjectFolder = async (targetPath) => {
  const spinner = ora('Membuat folder project...').start();
  if (fs.existsSync(targetPath)) {
    spinner.fail('Folder sudah ada');
    throw new Error(`Folder ${targetPath} sudah ada. Pilih nama lain.`);
  }
  await fs.ensureDir(targetPath);
  spinner.succeed('Folder project dibuat');
};

const copyTemplate = async (stack, targetPath) => {
  const spinner = ora('Menyalin file template...').start();
  const templatePath = path.join(__dirname, '..', 'templates', stack);

  if (!fs.existsSync(templatePath)) {
    spinner.fail('Template tidak ditemukan');
    throw new Error(`Template untuk ${stack} belum tersedia.`);
  }

  await fs.copy(templatePath, targetPath);
  spinner.succeed('File template berhasil disalin');
};

const updatePackageJson = async (targetPath, projectName, pkgType) => {
  if (pkgType === 'pnpm') {
    const pkgPath = path.join(targetPath, 'package.json');
    if (fs.existsSync(pkgPath)) {
      const pkg = await fs.readJson(pkgPath);
      pkg.name = projectName;
      await fs.writeJson(pkgPath, pkg, { spaces: 2 });
    }
  }
};

module.exports = {
  createProjectFolder,
  copyTemplate,
  updatePackageJson
};