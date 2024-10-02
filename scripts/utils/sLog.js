/**
 * @author Shigetorum (https://github.com/Shigetorum635)
 * @license MIT License
 *
 * A Serverside logging app for Node-Hill that doesn't suck.
 *
 * @example success('We did something correctly!', 'Wohoo!') => []
 *
 */
const chalk = getModule('chalk')
const moment = getModule('moment')
class sLog {
    static success(args) {
        console.log(chalk.green(`✅ - ${moment().format('h:mm:ss')} - ${args}`))
    }

    static fail(args) {
        console.log(chalk.red(`✖️  - ${moment().format('h:mm:ss')} - ${args}`))
    }

    static startWorker(args, workerName) {
        console.time(workerName)
        console.log(
            chalk.yellow.bold(
                `🔭 - ${moment().format(
                    'h:mm:ss'
                )} - ✨ Worker ✨ [${workerName}] starting ${args}`
            )
        )
    }

    static finishWorker(args, workerName) {
        console.log(
            chalk.yellow.bold(
                `🔭 - ${moment().format(
                    'h:mm:ss'
                )} - ✨ Worker ✨ [${workerName}] finished ${args}`
            )
        )
        console.timeEnd(workerName)
    }
}

module.exports = sLog
