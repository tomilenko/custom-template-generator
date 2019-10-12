import Generator, { GenerateOptions } from '@tomilenko/custom-template-generator';

const options: GenerateOptions = {
    type: 'components',
    name: "button",
    customTemplatesUrl: __dirname + '/templates/',
    dest: 'tests',
    absoluteDirName: __dirname,
    template: 'component',
    autoIndent: true
};

new Generator(options);