const fs = require('fs')
const path = require('path')

/**
 * readJSON
 * @returns {string[]}
 */
const readYaml = () => {
    return []
}

/**
 * readJSON
 * @returns {string[]}
 */
const readJSON = () => {
    const jsonPath = path.join(__dirname, "../static/commandConfig.json")
    let rawData = fs.readFileSync(jsonPath);
    let commandsJSON = JSON.parse(rawData);
    let commandList = []
    for (let commandIndex in commandsJSON.commands) {
        // commandList.push(commandItem.com)
        commandList.push(commandsJSON.commands[commandIndex].com);
    }
    return commandList
}

// console.log(readJSON());
const jsonPath = path.join(__dirname, "../static/commandConfig.json")
// console.log(jsonPath);

module.exports = {
    readYaml,
    readJSON,
    jsonPath
}