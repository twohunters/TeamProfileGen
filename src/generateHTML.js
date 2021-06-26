const newTeam = team => {
    const newEngineer = engineer => {
        return `
        <article class="col">
            <div class="card">
                <div class="card h-100">
                    <div class="card-header">
                        <h3>${engineer.name}, Engineer </h3><i class="fas fa-laptop-code"></i>
                    </div>
                    <div class ="card-body">
                        <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                        <p class="id">ID: ${engineer.id}</p>
                        <p class="github">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
                    </div>
                </div>
            </div>
        </article>
        `
    };

    const newIntern = intern => {
        return `
        <article class="col">
            <div class="card">
                <div class="card h-100">
                    <div class="card-header">
                        <h3>${intern.name}, Intern </h3><i class="fas fa-id-badge"></i>
                    </div>
                    <div class ="card-body">
                        <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                        <p class="id">ID: ${intern.id}</p>
                        <p class="school">School: ${intern.school}</p>
                    </div>
                </div>
            </div>
        </article>
        `
    };

    const newManager = manager => {
        return `
        <article class="col">
            <div class="card">
                <div class="card h-100">
                    <div class="card-header">
                        <h3>${manager.name}, Manager </h3><i class="fas fa-user-tie"></i>
                    </div>
                    <div class ="card-body">
                        <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                        <p class="id">ID: ${manager.id}</p>
                        <p class="office">Office: # ${manager.office}</p>
                    </div>
                </div>
            </div>
        </article>
        `
    };

    const html = [];

    html.push(team
        .filter(employee => employee.role() === "Engineer")
        .map(engineer => newEngineer(engineer))
        .join(""));
    html.push(team
        .filter(employee => employee.role() === "Intern")
        .map(intern => newIntern(intern))
        .join(""));
    html.push(team
        .filter(employee => employee.role() === "Manager")
        .map(manager => newManager)
        .join(""));
    return html.join("");
}

module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
        
        <title>New Team</title>
    </head>
    <body>
        <header>
            <nav class="navbar">
                <h1>New Team</h1>
            </nav>
        </header>
        <main>
            <div class="container">
                <div class="row justify-content-center">
                    ${newTeam(team)}
                </div>
            </div>
        </main>
    </body>
    </html>
    `
};