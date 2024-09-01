import './styles.css'
import { menu_page_load } from './menu'
import { about_page_load } from './about'

const initial_page_load = () => {
    let content = document.getElementById("content")
    let title = document.createElement("h1")
    let summary = document.createElement("div")
    let hours = document.createElement("div")
    let location = document.createElement("div")

    title.setAttribute("id", "title")
    title.textContent = "Title"
    content.appendChild(title)

    summary.setAttribute("id", "summary")
    summary.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, dignissimos ratione! Cumque voluptate in, assumenda, accusamus minima recusandae fugit doloremque tempora nostrum odio ipsam sint praesentium quis dolores, quibusdam ratione."
    content.appendChild(summary)

    hours.setAttribute("id", "hours")
    let ul = document.createElement("ul")
    let weekdayHours = document.createElement("li")
    let satHours = document.createElement("li")
    let sunHours = document.createElement("li")
    weekdayHours.textContent = "Mon - Fri: 8am - 8pm"
    satHours.textContent = "Sat: 8am - 10pm"
    sunHours.textContent = "Sun: 9am - 7pm"
    ul.appendChild(weekdayHours)
    ul.appendChild(satHours)
    ul.appendChild(sunHours)
    hours.appendChild(ul)
    content.appendChild(hours)

    location.setAttribute("id", "location")
    location.textContent = "1600 Pennsylvania Avenue NW, Washington, DC 20500"
    content.appendChild(location)
}

function wipePage() {
    // code
}

initial_page_load()

let buttons = document.querySelectorAll("button")
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let id = button.getAttribute("id")

        switch (id) {
            case "home":
                initial_page_load()
                break
            case "menu":
                menu_page_load()
                break
            case "about":
                about_page_load()
                break
            default:
                break
        }
    })
})