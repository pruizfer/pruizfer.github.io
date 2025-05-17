




function generate(path, name, icon, desc, date) {

    const box = document.createElement("a")
    box.classList.add("subsite")
    box.href = path

    const img = document.createElement("img")
    img.src = icon
    img.alt = name + "Icon"

    const content = document.createElement("div")
    content.classList.add("content")

    const topbar = document.createElement("div")
    topbar.classList.add("topbar")

    const nameSpan = document.createElement("span")
    nameSpan.classList.add("name", "text")
    nameSpan.innerHTML = name

    const idSpan = document.createElement("span")
    idSpan.classList.add("id", "text")
    idSpan.innerHTML = path

    const dateSpan = document.createElement("span")
    dateSpan.classList.add("date", "text")
    dateSpan.innerHTML = date

    const descParagraph = document.createElement("p")
    descParagraph.classList.add("desc", "text")
    descParagraph.innerHTML = desc

    topbar.appendChild(nameSpan)
    topbar.appendChild(idSpan)
    topbar.appendChild(dateSpan)

    content.appendChild(topbar)
    content.appendChild(descParagraph)

    box.appendChild(img)
    box.appendChild(content)

    const body = document.getElementById("body")
    body.appendChild(box)

}

generate("froggy-talking-gif", "Froggy Talking Gif", "assets/images/froggy_talking.gif", "lorem ipsun", "today")