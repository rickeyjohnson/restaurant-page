export const about_page_load = () => {
    let content = document.getElementById("content")
    
    let about = document.createElement("div")
    about.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo minus impedit animi voluptate sit quisquam magni magnam dignissimos voluptates quis unde cumque, deleniti adipisci sed cum eaque alias sequi odit?"
    content.appendChild(about)
}