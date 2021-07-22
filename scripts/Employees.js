import { getEmployees, getOrders } from "./database.js"
const employees = getEmployees()
const orders = getOrders()



document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) {
            const [, employeeId] = itemClicked.id.split("--")
            let count = 0

            for (const employee of employees) {
                if (employee.id === parseInt(employeeId)) {

                    for (const order of orders) {
                        if (order.employeeId === employee.id) {
                            count++
                            

                            
                        }
                        //window.alert(`${employee.name} sold ${count}`)

                    }window.alert(`${employee.name} sold ${count}`)
                }//window.alert(`${employee.name} sold ${count}`)

            }//window.alert(`${employee.name} sold ${count}`)
           
        }
    }
)


export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

