const { execSync } = require('child_process');
const ora = require('ora');
const prompts = require('prompts');
const { logError, logInfo } = require('./logger');

const checkAndInstallPnpm = async () => {
  try {
    execSync('pnpm --version', { stdio: 'ignore' });
    return true;
  } catch (error) {
    logInfo('\npnpm belum terinstall di komputermu.');
    
    const { install } = await prompts({
      type: 'confirm',
      name: 'install',
      message: 'Install pnpm secara global sekarang? (via npm)',
      initial: true
    });

    if (install) {
      const spinner = ora('Menginstall pnpm secara global...').start();
      try {
        execSync('npm install -g pnpm', { stdio: 'ignore' });
        spinner.succeed('pnpm berhasil diinstall');
        return true;
      } catch (err) {
        spinner.fail('Gagal menginstall pnpm otomatis');
        logError('Silakan jalankan "npm install -g pnpm" secara manual.');
        process.exit(1);
      }
    } else {
      process.exit(0);
    }
  }
};

const installDependencies = (targetPath, pkgType) => {
  if (pkgType === 'none') return;

  let cmd = '';
  let msg = '';

  const pkgCommands = {
    'pnpm': { cmd: 'pnpm install', msg: 'Menginstall dependencies via pnpm...' },
    'pip': { cmd: 'pip install -r requirements.txt', msg: 'Menginstall dependencies via pip...' },
    'flutter': { cmd: 'flutter pub get', msg: 'Menginstall dependencies via flutter pub...' },
    'go': { cmd: 'go mod tidy', msg: 'Menginstall dependencies via go mod...' },
    'bun': { cmd: 'bun install', msg: 'Menginstall dependencies via bun...' },
    'composer': { cmd: 'composer install', msg: 'Menginstall dependencies via composer...' }
  };

  const selectedPkg = pkgCommands[pkgType];
  
  if (!selectedPkg) {
    logError(`Package manager ${pkgType} tidak dikenali.`);
    return;
  }

  cmd = selectedPkg.cmd;
  msg = selectedPkg.msg;

  const spinner = ora(msg).start();
  try {
    execSync(cmd, { cwd: targetPath, stdio: 'ignore' });
    spinner.succeed('Dependencies berhasil diinstall');
  } catch (error) {
    spinner.fail('Gagal menginstall dependencies.');
    logError(error.message);
  }
};

module.exports = { checkAndInstallPnpm, installDependencies };