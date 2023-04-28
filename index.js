const yargs = require('yargs')
// Create add command
yargs.command({
    command: 'add',
    describe: 'Adds two number',
    builder: {
        firstNumber: {
            describe: 'First Number',
            demandOption: true, // Required
            type: 'number'
        },
        secondNumber: {
            describe: 'Second Number',
            demandOption: true,
            type: 'number'
        }
    },
    handler(argv) {
        console.log("Result:",
            (argv.firstNumber + argv.secondNumber))
    }
})
yargs.command({
    command: 'sub',
    describe: 'Sub two number',
    builder: {
        firstNumber: {
            describe: 'First Number',
            demandOption: true, // Required
            type: 'number'
        },
        secondNumber: {
            describe: 'Second Number',
            demandOption: true,
            type: 'number'
        }
    },
    handler(argv) {
        console.log("Result:",
            (argv.firstNumber - argv.secondNumber))
    }
})
yargs.command({
    command: 'mul',
    describe: 'Mul two number',
    builder: {
        firstNumber: {
            describe: 'First Number',
            demandOption: true, // Required
            type: 'number'
        },
        secondNumber: {
            describe: 'Second Number',
            demandOption: true,
            type: 'number'
        }
    },
    handler(argv) {
        console.log("Result:",
            (argv.firstNumber * argv.secondNumber))
    }
})
yargs.parse() // To set above changes
