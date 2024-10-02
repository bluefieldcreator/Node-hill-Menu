const sLog = require('./../utils/sLog')
const { teams } = require('./../teams')

function beginJob(teams) {
    sLog.startWorker('TEAM CREATION', 'TeamWorker')
    Game.newTeams(Object.values(teams))
    sLog.finishWorker('TEAM CREATION', 'TeamWorker')
}

beginJob(teams)
