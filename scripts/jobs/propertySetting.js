const sLog = require("../utils/sLog")
const { teams } = require('./../teams')


function beginJob(p) {
    sLog.startWorker('PROPERTY SETTING', 'PayerWorker')
    p.setTeam(teams.Menu)
    p.menuEnabled = false
    p.menuPage = 1
    sLog.finishWorker(`PROPERTY SETTING`, 'PayerWorker')
}

module.exports = beginJob