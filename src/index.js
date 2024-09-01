import './styles.css'

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