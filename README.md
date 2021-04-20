[![npm][npm-image]][npm-url] [![license][license-image]][license-url]
[![changelog][changelog-image]][changelog-url]

# Dir Compressor

Compress a whole directory (including subdirectories) into a zip file, with options to exclude specific files, or directories. and an option to specify how the zip will be created

# Installation

```sh
$ npm install dir-compressor -D
```

```sh
$ yarn add dir-compressor --dev
```

# Usage

## API

```javascript
// Require modules.
var DirCompressor = require("dir-compressor");

// Create an array with the files and directories to exclude.
const excludes = ["directory_name", "file.extension"];

/**
 * Create a dir-compressor object.
 * @param {string} directoryPath - The path of the folder to archive.
 * @param {string} zipPath - The path of the zip file to create.
 * @param {array} excludes - A list with the names of the files and folders to exclude.
 * @param {boolean} flatOff - Whether to turn off flattening
 * @param {string} ignoreFile - A .gitignore or similar file to respect
 */
var archive = new Dircompressor(
  "path/to/directory",
  "path/to/desination/zipfile.zip",
  excludes
);

// Create the zip file.
archive.createZip();
```

## Command Line Interface

```sh
Usage:

    dir-compressor --src <path-to-directory> --dest <path-to-file>.zip --exclude folder-name file-name.extention

    dir-compressor --src <path-to-directory> --dist <path-to-file>.zip --ignoreFile <ignorefile>

Options:
  --src         The path of the folder to archive.
  --dest        The path of the zip file to create.
  --flatOff     Include the directory inside the zip, meaning append files from a sub-directory, putting its contents at the root of archive
  --exclude     Specify a list with the names of the files and folders to exclude (do not use ignoreFile)
  --ignoreFile  Specify a .gitignore or similar file to ignore files/directories (do not use exclude)
```

### Ignore File

The ignore file is _relative to the destination directory_. If the zip file will be created within the destination, be sure to include `.zip` or a similar ignore entry otherwise it will **NOT** ignore the zip file.

[changelog-image]: https://img.shields.io/badge/changelog-md-blue.svg?style=flat-square
[changelog-url]: CHANGELOG.md
[license-image]: https://img.shields.io/npm/l/dir-compressor.svg?style=flat-square
[license-url]: LICENSE
[npm-image]: https://img.shields.io/npm/v/dir-compressor.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/dir-compressor
