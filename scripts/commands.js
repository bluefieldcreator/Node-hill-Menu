const sLog = require('./utils/sLog')
const { teams } = require('./teams')
const menuPages = require('./menuPages')

/**
 * Menu command - Back
 * Goes back one page in the menu.
 */
Game.command('back', (player, caller) => {
    if (player.menuEnabled == false)
        return player.topPrint('Use /menu to set back to menu team.', 2)

    if (player.menuPage <= 0)
        return player.topPrint('Invalid page, you are on page 0!', 2)

    player.menuPage--
    sLog.success(
        `/back called by ${player.username}, going to page ${player.menuPage}`
    )
})
/**
 * Menu command - Next
 * Goes one page forward in the menu.
 */
Game.command('next', (player) => {
    if (player.menuEnabled == false)
        return player.topPrint('Use /menu to set back to menu team.', 2)
    player.menuPage++
    if(!menuPages[player.menuPage]) {
        sLog.fail(`Player ${player.username} tried accessing an invalid page.`)
        player.menuPage--
        return player.message(`[🖥️] The page you attempted to go to does not exist, reverting back.`)
    }

    sLog.success(
        `/next called by ${player.username}, going to page ${player.menuPage}`
    )
})
/**
 * Menu command - Invoke
 * Invokes the menu UI.
 */
Game.command('menu', (player) => {
    sLog.startWorker('MENU ENABLING', 'MenuWorker')
    /**
     * Checks if the menu is open or not.
     */
    if (player.menuEnabled === true)
        return (
            player.topPrint('You are on menu already!') &&
            sLog.finishWorker('MENU ENABLING', 'MenuWorker')
        )

    sLog.success(`/menu called by ${player.username}, enabling menu.`)
    /**
     * Set the properties for the player.
     */
    player.menuEnabled = true
    player.menuPage = 0
    player.setTeam(teams['Main Menu'])
    sLog.success(`All properties set succesfully.`)
    /**
     * Menu rendering loop.
     */
    setInterval(() => {

        player.topPrint(menuPages[player.menuPage].top, 1)
        player.centerPrint(menuPages[player.menuPage].middle, 1)
        player.bottomPrint(menuPages[player.menuPage].bottom, 1)
        if (player.menuEnabled == false)
            clearInterval(() => {
            })
    }, 100)
})

Game.command('join', (player, arguments) => {
    if (
        arguments == null ||
        arguments == 'menu' ||
        teams[arguments] == undefined
    )
        return player.topPrint('Please enter a correct team name.')
    player.setTeam(teams[arguments])
})
