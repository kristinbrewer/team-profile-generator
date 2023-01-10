//manager
const createManager = function (manager) {
    return `
    <div class="col-4 mt-4">
    <div class="card h-100">
        <div class="card-header bg-warning">
            <h3>${manager.name}</h3>
            <h4>Manager</h4>
        </div>
        <div class="card-body">
            <p class="id">ID: ${manager.id}</p>
            <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
            <p class="office">Office Number: ${manager.officeNumber}</p>
        </div>
    </div>
</div> 
    `
}

//engineer card
const createEngineer = function (engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `
}
//intern card 
const createIntern = function (intern) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <h4>Intern</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
    </div>
</div>
    `
};

generateHTML = (data) => {
//array for cards 
cardArray = [];

for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole(); 


    // call manager function
    if (role === 'Manager') {
        const managerCard = createManager(employee);

        pageArray.push(managerCard);
    }

    // call engineer function
    if (role === 'Engineer') {
        const engineerCard = createEngineer(employee);

        pageArray.push(engineerCard);
    }

    // call intern function 
    if (role === 'Intern') {
        const internCard = createIntern(employee);

        cardArray.push(internCard);
    }
}
//combining strings
const employeeCards = cardArray.join('');
//getting generated page
const createTeam = createTeamPage(employeeCards); 
return createTeam;

}
//creates html 

const createTeamPage = function (employeeCards) {
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="./assets/styles.css" />
    <title>Team Profiles</title>
</head>

<body>
    <header>
          <nav class="navbar" id="navbar">
              <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
          </nav>
      </header>
      <main>
          <div class="container">
              <div class="row justify-content-center" id="team-cards">
                  <!--Team Cards-->
                  ${employeeCards}
              </div>
          </div>
      </main>
      
  </body>
  </html>
  `  ;
};

//exports to index
module.exports = generateHTML;