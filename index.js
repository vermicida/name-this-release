#!/usr/bin/env node

"use strict";

/** Dependencies */
const chalk = require("chalk");
const program = require("commander");

let dictionaryName;

/** Parse the command */
program
    .version("0.0.2")
    .description("This is a simple CLI util that helps you to name your app's releases.")
    .usage("<dictionary>")
    .arguments("<dict>")
    .action(dict => dictionaryName = dict)
    .parse(process.argv);

/** Set a default dictionary */
dictionaryName = dictionaryName || "es";

try {
    /** Load the dictionary */
    let dictionary = require(`./dict/${dictionaryName}-dict`);

    /** Generate a random name */
    console.log(`\nName your release as ${chalk.green(dictionary.generateRandomName())}.\n`);
}
catch(err) {
    /** In case of error */
    console.error(chalk.red(`\nThe dictionary '${dictionaryName}' does not exists.\n`));
}
