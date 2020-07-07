const Html = require('./Html');
const fs = require('fs');

generateHtml = (team) => {
    let html = new Html();
    team.forEach(element => {
        html.body = 
        `${html.body}
        ${html.createEmployeeCard(element)}`
    });
//===================== add footer ====================//
    html.body = 
    `${html.body}
    ${html.foot}`;
//=============== Creates file, puts it in dist folder, also a note in command prompt on how to open in browser ==================//
    fs.writeFile('./dist/my-team.html', html.body, function (err) {
        if (err) {
            return console.log(err);
        } else {
        return console.log("HTML file created! CTRL + Right Mouse Click this link './dist/my-team.html' and then press ALT + B!");
        }
    });
    
}

module.exports = generateHtml;