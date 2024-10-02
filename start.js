const nh = require('node-hill')

nh.startServer({
    hostKey: '', // Your host key here (can be found under the settings of the set.)

    gameId: 478, // Your game id here

    port: 42480, // Your port id here (default is 42480)

    local: true, // Whether or not your server is local

    mapDirectory: './maps/', // The path to your maps folder.

    recursiveLoading: true,

    map: 'example.brk', // The file name of your .brk

    scripts: './scripts', // Your .js files path

    // Add npm / built-in node.js modules here
    modules: ['moment', 'chalk', 'dumper.js'],
})

// For more help: https://brickhill.gitlab.io/open-source/node-hill/interfaces/gamesettings.html
