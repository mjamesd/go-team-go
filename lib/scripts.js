const chalk = require('../node_modules/chalk');


function printWelcomeMsg() {
    console.info(chalk.keyword(`darkgreen`).bgKeyword(`darkblue`).bold(` ~*~ WELCOME  Go, Team, Go!  WELCOME ~*~ `));
    console.info(`Add employees to make a team roster webpage. You can edit it later, just use this to make the initial structure of the file.`);
}

module.exports = printWelcomeMsg;