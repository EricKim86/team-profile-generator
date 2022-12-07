const generateRoster = (team) => {
    const html = [];

//create manager card
    const createManager = manager => {

    let managerSection = `

<div class="card-custom card mb-3" style="max-width: 18rem;">
<div class="header bg-primary">${manager.name}</div>
<div class="header bg-primary">Manager</div>
<div class="card-body">
    <p class="card-body">Manager ID: ${manager.id}</p>
    <p class="card-body">Email: <a href="mailto:email@example.com">${manager.email}</a></p>
    <p class="card-body">Office Number: ${manager.officeNumber}</p>
</div>
</div>
    `
        html.push(managerSection);
    }

//create engineer card
    const createEngineer = engineer => {

        let engineerSection = `
<div class="card-custom card mb-3" style="max-width: 18rem;">
<div class="header bg-primary">${engineer.name}</div>
<div class="header bg-primary">Engineer</div>
<div class="card-body">
    <p class="card-body">Engineer ID: ${engineer.id}</p>
    <p class="card-body">Email: <a href="mailto:email@example.com">${engineer.email}</a></p>
    <p class="card-body">GitHub: <a href="https://www.github.com/${engineer.github}" target="_blank">${engineer.github}</a></p>
</div>
</div>
    `
        html.push(engineerSection);
    }

//create intern card
    const createIntern = intern => {

        let internSection = `
<div class="card-custom card mb-3" style="max-width: 18rem;">
<div class="header bg-primary">${intern.name}</div>
<div class="header bg-primary">Intern</div>
<div class="card-body">
    <p class="card-body">Intern ID: ${intern.id}</p>
    <p class="card-body">Email: <a href="mailto:email@example.com">${intern.email}</a></p>
    <p class="card-body">School: ${intern.school}</p>
</div>
</div>
    `
        html.push(internSection);
    }
//create loop to create cards based on roles and number of inputs
    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === "Manager") {
            createManager(team[i]);
        }
        if (team[i].getRole() === "Engineer") {
            createEngineer(team[i]);
        }
        if (team[i].getRole() === "Intern") {
            createIntern(team[i]);
        }
    }
    return html.join('');
}

//generate html layout
module.exports = team => {
    return `
        <!DOCTYPE html>
        <html lang="en">

        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta name="Description" content="Enter your description here" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="./style.css">
        <title>Team Roster Generator</title>
        </head>
        <body>
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <span class="navbar-brand mb-0 h1">My Team Roster</span>
                </div>
            </nav>
            <section class = "main-section">
                ${generateRoster(team)}
            </section>
        </body>
        </html>
    `
}