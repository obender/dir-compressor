#!/usr/bin/env node

var DirArchiver = require("./index");

const arguments = process.argv;
var directoryPath = "";
var zipPath = "";
var excludes = [];
var ignoreFilePath = ".gitignore";

if (!arguments.includes("--src") || !arguments.includes("--dest")) {
  console.log(` Dir Compressor could not be executed. Some arguments are missing.

    Options:
      --src         The path of the folder to archive.                          [string][required]
      --dest        The path of the zip file to create.                         [string][required]
      --exclude     A list with the names of the files and folders to exclude.             [array]
      --flatOff     if specified the target directory will be placed inside the root [on by default]
      --ignoreFile  Path to a .gitignore or similar file. [string][default: .gitignore]`);
  process.exit();
}
let flat = true;
let glob = false;
for (argumentIndex in arguments) {
  if (arguments[argumentIndex] === "--src") {
    directoryPath = arguments[parseInt(argumentIndex) + 1];
  }
  if (arguments[argumentIndex] === "--dest") {
    zipPath = arguments[parseInt(argumentIndex) + 1];
  }
  if (afterExclude === true) {
    excludes.push(arguments[argumentIndex]);
  }
  if (arguments[argumentIndex] === "--exclude") {
    var afterExclude = true;
  }
  if (arguments[argumentIndex] === "--flatOff") {
    flat = false;
  }
  if (afterIgnoreFile === true) {
    ignoreFilePath = arguments[argumentIndex];
    console.log("Using ignore file:", ignoreFilePath);
  }
  if (arguments[argumentIndex] === "--ignoreFile") {
    var afterIgnoreFile = true;
  }
  
}

const archive = new DirArchiver(directoryPath, zipPath, excludes, flat, ignoreFilePath);
archive.createZip();
