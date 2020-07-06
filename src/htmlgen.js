const Html = require('./Html');
const fs = require('fs');
// create Html object
generateHtml = (team) => {
    let html = new Html();
    // pass each employee through createEmployeeCard to add to html template
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
        return console.log("HTML file created! CTRL + Right Mouse Click this link './dist/my-team.html'!");
        }
    });
    
}

module.exports = generateHtml;