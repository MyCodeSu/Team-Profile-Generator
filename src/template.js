// boiler plate
const template = data => {
    return `
        <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                        <meta http-equiv="X-UA-Compatible" content="IE=edge">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                <title>Team Composition</title>
                                <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">     
                            </head>
                            <body>
                                <header class="container">
                                    <div class = "flex box justify-center bg-pink-700 text-white text-lg py-7 team">
                                        <h1>My Team</h1>
                                    </div>
                                    <employee_container my-10 flex-auto">
                                    ${employeeContainer(data)}
                                    </main>
                                </header>
                            </body>
                        </html>`
}

// Manager card
const manager = managerData => {
    return `
    <div id="${managerData.getRole()}-card" class="employee_display w-1/3 border shadow-2xl shadow-black-200">
        <div class="box position_title manager_name bg-blue-700 text-white py-3 px-2.5">
            <h2 class="text-2xl font-medium">${managerData.getName()}</h2>
            <h3>Role: ${managerData.getRole()}</h3>
        </div>
        <div class="box employee_info px-2.5 bg-gray-200 py-3">
            <ul class="list">
                <li class="list_item bg-white border">ID: ${managerData.getId()}</li>
                <li class="list_item bg-white border">Email: <a class="text-blue-600"  href="mailto:${managerData.getEmail()}">${managerData.getEmail()}</a></a></li>
                <li class="list_item bg-white border">Office Number: ${managerData.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
    `
}

// Engineer card
const engineer = engineerData => {
    return `
    <div id="${engineerData.getRole()}-card" class="employee_display w-1/3 border shadow-2xl shadow-black-200">
        <div class="box position_title manager_name bg-blue-700 text-white py-3 px-2.5">
            <h2 class="text-2xl font-medium">${engineerData.getName()}</h2>
            <h3>Role: ${engineerData.getRole()}</h3>
        </div>
        <div class="box employee_info px-2.5 bg-gray-200 py-3">
            <ul class="list">
                <li class="list_item bg-white border">ID: ${engineerData.getId()}</li>
                <li class="list_item bg-white border">Email: <a class="text-blue-600"  href="mailto:${engineerData.getEmail()}">${engineerData.getEmail()}</a>></a></li>
                <li class="list_item bg-white border">Github: <a class="text-blue-600"  href="https://www.github.com/${engineerData.getGithub()}" target="_blank">www.github.com/${engineerData.getGithub()}</a></li>
            </ul>
        </div>
    </div>
    `
}

// Intern card
const intern = internData => {
    return `
    <div id="${internData.getRole()}-card" class="employee_display w-1/3 border shadow-2xl shadow-black-200">
        <div class="box position_title manager_name bg-blue-700 text-white py-3 px-2.5">
            <h2 class="text-2xl font-medium">${internData.getName()}</h2>
            <h3>Role: ${internData.getRole()}</h3>
        </div>
        <div class="box employee_info px-2.5 bg-gray-200 py-3">
            <ul class="list">
                <li class="list_item bg-white border">ID: ${internData.getId()}</li>
                <li class="list_item bg-white border">Email: <a class="text-blue-600"  href="mailto:${internData.getEmail()}">${internData.getEmail()}</a>></a></li>
                <li class="list_item bg-white border">Office Number: ${internData.getSchool()}</li>
            </ul>
        </div>
    </div>
    `
}

// create cards from employeeObjectArray
const employeeContainer = employeeObjectArray => {
    let newEmployeeCard = ''

    for (i = 0; i < employeeObjectArray.length; i++) {
        if (employeeObjectArray[i].getRole() === "Manager") {
            newEmployeeCard += manager(employeeObjectArray[i])
        } else if (employeeObjectArray[i].getRole() === "Engineer") {
            newEmployeeCard += engineer(employeeObjectArray[i])
        } else if (employeeObjectArray[i].getRole() === "Intern") {
            newEmployeeCard += intern(employeeObjectArray[i])
        }
    } return newEmployeeCard
}

module.exports = template;