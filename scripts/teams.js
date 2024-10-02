/*
 BrickCore Game Manager 

 This file handles everything related to BrickCore

 v0.2.0
*/

/* Environment Variables */

const propertiesJob = require('./jobs/propertySetting')
const sLog = require('./utils/sLog')

/* We can't forget teams, so let's create them */

Game.assignRandomTeam = false
const teams = {
    Employee: new Team('Employee', '#8C92AC'),
    Security: new Team('Security', '#8C92AC'),
    Raider: new Team('Raider', '#8C92AC'),
    Menu: new Team('Main Menu', '#bf00000'),
}

/**
 * Initial spawn, we set the teams and config.
 */
Game.on('initialSpawn', (p) => {
    propertiesJob(p)
})

module.exports = {
    teams,
}
