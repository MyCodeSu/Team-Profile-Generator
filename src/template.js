// boiler plate
const boilerPlate = data => {
    return `
        < !DOCTYPE html >
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                        <meta http-equiv="X-UA-Compatible" content="IE=edge">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                <title>Document</title>
                            </head>
                            <body>

                            </body>
                        </html>`
}

// Manager card
const manager = managerData => {
    return `
    <div id=${managerData.getRole()}-card" class="employee_display">
    <div class="box position_title manager_name">
        <h2>${managerData.getName()}</h2>
        <h3>Role: ${managerData.getRole()}</h3>
    </div>
    <div class="box employee_info">
        <ul class="list">
            <li class="list_item">ID: ${managerData.getId()}</li>
            <li class="list_item">Email: ${managerData.getEmail()}</li>
            <li class="list_item">Office Number: ${managerData.getOfficeNumber()}</li>
        </ul>
    </div>
    `
}

// Engineer card
const engineer = engineerData => {
    return `
    <div id="${engineerData.getRole()}-card" class="employee_display>
        <div class="box position_title engineer_name">
            <h2>${engineerData.getName()}</h2>
            <h3>Role: ${engineerData.getRole()}</h3>
        </div>
        <div class="box employee_info">
            <ul class="list">
                <li class="list_item">ID: ${engineerData.getId()}</li>
                <li class="list_item">Email: ${engineerData.getEmail()}</li>
                <li class="list_item">Github: <a href="https://www.github.com/${engineerData.getGithub()}" target="_blank">www.github.com/${engineerData.getGithub()}</a></li>
            </ul>
        </div>
    </div>
    `
}