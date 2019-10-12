## notice

This is FORK of custom-template-generator https://www.npmjs.com/package/custom-template-generator

* Implement the same functionality with TypesScript

## custom-template-generator
[![npm version](https://badge.fury.io/js/%40tomilenko%2Fcustom-template-generator.svg)](https://badge.fury.io/js/%40tomilenko%2Fcustom-template-generator)
[![Downloads/week](https://img.shields.io/npm/dw/@tomilenko/custom-template-generator)](https://npmjs.org/package/@tomilenko/custom-template-generator)
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=LW54FD3RBE2PJ)

## Prerequisites

This project has a dependencies that require Node to be installed. For help to install Node, go to:

https://nodejs.org

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)
```bash
npm install @tomilenko/custom-template-generator
```

Once the plugin has been installed, just need to add this line:

```ts

import Generator from '@tomilenko/custom-template-generator';
```

## Usage


```ts
import Generator from '@tomilenko/custom-template-generator';

const options = {
    customTemplatesUrl: __dirname + '/templates/',
    type: 'components',
    name: "button",
    dest: 'test',
    template: 'component',
    autoIndent: true
};
new Generator(options);
```

### Options

Scaffold               | Type      | Usage
---                    |---        | ---
name          | `string`  | Name of the generated file/component/project
customTemplatesUrl     | `string`  | Location of the custom templates folder
type     | `string`  | Location of the custom types of templates folder
dest                   | `string`  | Destination of generated templates files
template           | `string`  | Template name
autoIndent             | `boolean`  | Default set to false, will indent the whole file. Only works with js and ts files.
isSingleFile             | `boolean`  | Default set to false. If you need to generate one file template
wrapInFolder             | `boolean`  | Default set to true
autoIndentExtensions   | `array`    | The list of extensions file to indent. Default ['js', 'ts']
data                    | `object` | This custom meta data can be injected in the custom template using '{}'
### Directories structure
You should have use the next templates directory structure:

./templates -
    type -
        template

For example:

./templates -
    - projects
        - expressProject
        - testProject
    - components
        - componentOne
        - componentTwo



### Meta data

The meta data helps customize your templates, here are some options:


Name               | Description
---                |---
name               | Component name
Name               | capitalized component name

### Demo

In this repository, use the `demo` folder to test the generator. Here is the folder hierarchy:

<p align="center">
  <img src="https://github.com/m2omou/custom-template-generator/raw/master/demo/demo.png" alt="" />
</p>

To help customized the file name `{component}` will be replace by the componentName defined in the generator parameters. 

The following template `{component}.interface.ts`:

```ts
// Angular imports
import { ElementRef, Renderer } from '@angular/core';
// Custom imports
import { {Name}Config } from './config/{name}.config';

export interface {Name}Interface<T> {
    /*
     * Model from the {name}.
     */
    model: T;
    /*
     * Stores config for the {name}.
     */
    readonly options: {Name}Config;
    /*
     * init
     */
    ngOnInit(): void;
}

```

By running this function

```ts
new Generator({
    componentName: "button",
    customTemplatesUrl: './templates/',
    dest: 'src',
    templateName: 'component'
});
```

Will generate this file

```ts
// Angular imports
import { ElementRef, Renderer } from '@angular/core';
// Custom imports
import { ButtonConfig } from './config/button.config';

export interface ButtonInterface<T> {
    /*
     * Model from the button.
     */
    model: T;
    /*
     * Stores config for the button.
     */
    readonly options: ButtonConfig;
    /*
     * init
     */
    ngOnInit(): void;
}

```

## License

MIT
