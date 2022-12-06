const generateRoster = (team) => {
    const html = [];
    const generateManager = manager => {

        let managerSection = `
<div class="card" style="width: 18rem;">
  <div class="card-header">
    ${manager.name}
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Manager Name: ${manager.id}</li>
    <li class="list-group-item">Email: ${manager.email}</li>
    <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
  </ul>
    </div>
    `
        html.push(managerSection);
    }

    const generateEngineer = engineer => {

        let engineerSection = `
    <div class="card" style="width: 18rem;">
      <div class="card-header">
        ${engineer.name}
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Manager Name: ${engineer.id}</li>
        <li class="list-group-item">Email: ${engineer.email}</li>
        <li class="list-group-item">GibHub: ${engineer.github}</li>
      </ul>
    </div>
    `
        html.push(engineerSection);
    }

    const generateIntern = intern => {

        let internSection = `
    <div class="card" style="width: 18rem;">
      <div class="card-header">
        ${intern.name}
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Manager Name: ${intern.id}</li>
        <li class="list-group-item">Email: ${intern.email}</li>
        <li class="list-group-item">School: ${intern.school}</li>
      </ul>
    </div>
    `
        html.push(internSection);
    }

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
  <title>Team Roster Generator</title>
</head>

<body>
</body>
</html>
`
    }
}