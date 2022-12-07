const generateRoster = (team) => {
    const html = [];

//create manager card
    const createManager = manager => {

    let managerSection = `

<div class="card-custom card border-success mb-3" style="max-width: 18rem;">
<div class="card-header bg-transparent border-success">Manager</div>
<div class="card-body text-success">
<h5 class="card-title">${manager.name}</h5>
    <p class="card-text">Manager Name: ${manager.id}</p>
    <p class="card-text">Email: ${manager.email}</p>
    <p class="card-text">Office Number: ${manager.officeNumber}</p>
</div>
</div>
    `
        html.push(managerSection);
    }

//create engineer card
    const createEngineer = engineer => {

        let engineerSection = `
<div class="card-custom card border-success mb-3" style="max-width: 18rem;">
<div class="card-header bg-transparent border-success">Engineer</div>
<div class="card-body text-success">
<h5 class="card-title">${engineer.name}</h5>
    <p class="card-text">Engineer Name: ${engineer.id}</p>
    <p class="card-text">Email: ${engineer.email}</p>
    <p class="card-text">GitHub: ${engineer.github}</p>
</div>
</div>
    `
        html.push(engineerSection);
    }

//create intern card
    const createIntern = intern => {

        let internSection = `
<div class="card-custom card border-success mb-3" style="max-width: 18rem;">
<div class="card-header bg-transparent border-success">Intern</div>
<div class="card-body text-success">
<h5 class="card-title">${intern.name}</h5>
    <p class="card-text">Intern Name: ${intern.id}</p>
    <p class="card-text">Email: ${intern.email}</p>
    <p class="card-text">School: ${intern.school}</p>
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