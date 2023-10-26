import inquirer from 'inquirer';

const countWordsAndCharacters = async () => {
  const {text} = await inquirer.prompt({
    type: 'input',
    name: 'text',
    message: 'Enter a sentence:',
  });

  const wordCount = text.split(' ').length;
  const characterCount = text.replace(/\s/g, '').length

  console.log(`The sentence contains ${wordCount} words and ${characterCount} characters.`);
};

countWordsAndCharacters();
