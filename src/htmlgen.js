const Html = require('./Html');
const fs = require('fs');
// create web page
generateHtml = (team) => {
    let html = new Html();
    team.forEach(element => {
        html.body = 
        `${html.body}
        ${html.createEmployeeCard(element)}`
    });
    // add html footer to template
    html.body = 
    `${html.body}
    ${html.foot}`;
    // create new html file in ./dist folder
    fs.writeFile('./dist/my-team.html', html.body, function (err) {
        if (err) {
            return console.log(err);
        } else {
        return console.log("HTML file created! CTRL + Right Mouse Click this link './dist/my-team.html' and then press ALT + B!");
        }
    });
    
}

module.exports = generateHtml;