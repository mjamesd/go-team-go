// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Author: Mark Drummond
// Date: 20-Nov-2021
// Project Title: Go, Team, Go!
// Assignment: Team Profile Generator
// See README.md for more information
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const fs = require('fs');
const path = require('path');

/**
 * Function to render cards for each employee
 * @param {array} employees The array of employees
 * @returns {string} A string of formatted HTML for all employees
 */
const renderHtml = (employees) => {
    let picsumRand = 1;
    let colCount = 0;
    let html = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.css"
            integrity="sha512-aOG0c6nPNzGk+5zjwyJaoRUgCdOrfSDhmMID2u4+OIslr0GjpLKo7Xm0Ao3xmpM4T8AmIouRkqwj1nrdVsLKEQ=="
            crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="./assets/css/style.css" />
        <title>Go, Team, Go! | Software Development Team Profile</title>
    </head>
    
    <body>
    
        <header>
            <nav>
                <div class="nav-wrapper">
                    <a href="#" class="brand-logo right"><i class="material-icons-outlined md-48">groups</i>Go, Team, Go!</a>
                    <ul id="nav-mobile" class="left hide-on-med-and-down">
                        <li><a href="https://github.com/mjamesd/go-team-go" target="_blank">See Repo</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    
        <main>
            <div class="container">`;
    employees.forEach(employee => {
        if (employee.getRole() === `Manager`) {
            html += `
            <div class="card sticky-action" style="width: 30%;">
                <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src="https://picsum.photos/300?blur=2&random=${picsumRand++}" />
                    <span class="card-title">${employee.getName()}</span>
                </div>
                <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4"><i class="material-icons-outlined">business_center</i> ${employee.getRole()}<i
                            class="material-icons-outlined right">more_vert</i>
                        </span>
                </div>
                <div class="card-action">
                    <a href="mailto:${employee.getEmail()}">Email</a>
                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4"><i
                            class="material-icons-outlined">business_center</i> ${employee.getName()}<i
                            class="material-icons-outlined right">close</i></span>
                    <p>The Manager is a vital member of the team.</p>
                    <p>Employee ID: ${employee.getId()}</p>
                    <p><i class="material-icons-outlined">meeting_room</i> Office #${employee.getOfficeNumber()}</p>
                </div>
            </div>
`;
        } else if (employee.getRole() === `Engineer`) {
            html += `
            
            <div class="card sticky-action" style="width: 30%;">
                <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src="https://picsum.photos/300?blur=2&random=${picsumRand++}" />
                    <span class="card-title">${employee.getName()}</span>
                </div>
                <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4"><i class="material-icons-outlined">settings_suggest</i> ${employee.getRole()}<i
                            class="material-icons-outlined right">more_vert</i>
                        </span>
                </div>
                <div class="card-action">
                    <a href="https://github.com/${employee.getGitHub()}">GitHub</a>
                    <a href="mailto:${employee.getEmail()}">Email</a>
                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4"><i
                            class="material-icons-outlined">settings_suggest</i> ${employee.getName()}<i
                            class="material-icons-outlined right">close</i></span>
                    <p>The Engineer is a full-stack web developer. They get it done.</p>
                    <p>Employee ID: ${employee.getId()}</p>
                </div>
            </div>
`;
        } else if (employee.getRole() === `Intern`) {
            html += `
            <div class="card sticky-action" style="width: 30%;">
                <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src="https://picsum.photos/300?blur=2&random=${picsumRand++}" />
                    <span class="card-title">${employee.getName()}</span>
                </div>
                <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4"><i
                        class="material-icons-outlined">school</i> ${employee.getRole()}<i
                        class="material-icons-outlined right">more_vert</i>
                        </span>
                </div>
                <div class="card-action">
                    <a href="#">${employee.getSchool()}</a>
                    <a href="mailto:${employee.getEmail()}">Email</a>
                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4"><i
                            class="material-icons-outlined">school</i> ${employee.getName()}<i
                            class="material-icons-outlined right">close</i></span>
                    <p>The Intern is learning a lot from the manager and the engineers.</p>
                    <p>Employee ID: ${employee.getId()}</p>
                    <p><i class="material-icons-outlined">location_city</i> ${employee.getSchool()}</p>
                </div>
            </div>
`;
        } else {
            html += `
            <div class="card sticky-action" style="width: 30%;">
                <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src="https://picsum.photos/300?blur=2&random=${picsumRand++}" />
                    <span class="card-title">${employee.getName()}</span>
                </div>
                <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4"><i
                        class="material-icons-outlined">badge</i> ${employee.getRole()}<i
                        class="material-icons-outlined right">more_vert</i>
                        </span>
                </div>
                <div class="card-action">
                    <a href="mailto:${employee.getEmail()}">Email</a>
                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4"><i
                            class="material-icons-outlined">badge</i> ${employee.getName()}<i
                            class="material-icons-outlined right">close</i></span>
                    <p>The employee supports the manager, engineers, and interns.</p>
                    <p>Employee ID: ${employee.getId()}</p>
                </div>
            </div>
`;
        }
        colCount++;
        if (colCount == 3) {
            colCount = 0;
            html += `
            </div>
            <div class="container">
`;
        }
    });
    html += `</div>
</main>

<footer class="page-footer">
    <div class="footer-copyright">
        <div class="container">
            © 2021 DrumDev
            <a class="grey-text text-lighten-4 right" href="https://materializecss.com/" target="_blank">Made with
                Materialize</a>
        </div>
    </div>
</footer>

<!-- SCRIPTS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
<script src="./assets/js/script.js"></script>
</body>

</html>`;
    fs.writeFile(path.join(__dirname, `../dist/index.html`), html, (err) => {
        if (err) {
            return false;
        }
        return true;
    });
};

module.exports = { renderHtml };