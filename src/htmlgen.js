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
        return console.log("1) Your team is made and ready to view!") +
        console.log("2) CTRL + Right Mouse Click this link './dist/my-team.html'") + 
        console.log("3) Then press ALT + B!")
        }
    });
    
}

module.exports = generateHtml;