const prompts = require('prompts');
const { stacks } = require('./config');

module.exports = async () => {
  const choices = stacks.map(s => ({
    title: `[${s.category}] ${s.title}`,
    description: s.description,
    value: s.value
  }));

  const response = await prompts([
    {
      type: 'select',
      name: 'stackValue',
      message: 'Pilih tech stack:',
      choices: choices
    },
    {
      type: 'text',
      name: 'projectName',
      message: 'Nama project:',
      initial: 'my-app',
      validate: value => value.length > 0 ? true : 'Nama tidak boleh kosong'
    },
    {
      type: 'confirm',
      name: 'git',
      message: 'Inisialisasi repository Git?',
      initial: true
    },
    {
      type: 'confirm',
      name: 'install',
      message: 'Install dependencies sekarang?',
      initial: true
    }
  ], {
    onCancel: () => {
      console.log('\nOperasi dibatalkan.');
      process.exit(0);
    }
  });

  const selectedStackInfo = stacks.find(s => s.value === response.stackValue);
  response.pkgType = selectedStackInfo.pkg;

  return response;
};