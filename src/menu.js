export const menu_page_load = () => {
    let content = document.getElementById("content")

    let title = document.createElement("h1")
    title.setAttribute("id", "title")
    title.textContent = "Menu"
    content.appendChild(title)

    let foodContainer = document.createElement("div")
    foodContainer.setAttribute("id", "foodContainer")

    for (let i = 0; i < 4; i++) {
        let foodTitle = document.createElement("h2")
        foodTitle.setAttribute("class", "food-title")
        foodTitle.textContent = "Food #" + i

        let foodDescription = document.createElement("p")
        foodDescription.setAttribute("class", "food-description")
        foodDescription.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus fuga nihil et sunt consectetur dignissimos facere repudiandae nisi soluta eligendi, sapiente nesciunt fugiat laboriosam repellat qui fugit blanditiis! Minima, at. Ipsam odit odio placeat cupiditate ut mollitia ducimus labore molestiae animi cum! Repellendus, ipsam laborum amet animi ab exercitationem sint eveniet voluptatum cupiditate commodi qui at nam saepe, deleniti eius. Ipsa similique ut odit hic quis, culpa laudantium! Illo est possimus in exercitationem dicta animi inventore ipsum minus necessitatibus dolorem sed qui consectetur tempora repudiandae beatae delectus ex, iure maxime! Distinctio odio vitae cumque natus earum ea, suscipit id quis? Itaque incidunt blanditiis quod aliquam. Obcaecati dolores necessitatibus, odit nulla molestiae animi sit cupiditate, at voluptatem, veritatis ratione asperiores laboriosam! Labore, iusto esse explicabo at voluptatum dolores veniam vero amet voluptate quod tempore dicta vel sequi error animi veritatis inventore neque quae laudantium ipsa nostrum eum. Nihil reiciendis modi sequi."

        foodContainer.appendChild(foodTitle)
        foodContainer.appendChild(foodDescription)
    }

    content.appendChild(foodContainer)
}