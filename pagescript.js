const menuBtn = document.getElementById("menu")
const menuList = document.querySelector("ul")
const links = document.querySelectorAll('ul li a')

const images = {
  "HTML": {
    path: "https://i.postimg.cc/CxNZMrj8/html-logo.png",
    width: "5em",
    resWidth: "4em",
    marginBottom: true
  },
  "CSS": {
    path: "https://i.postimg.cc/Hkxm56qX/css-logo.png",
    width: "4em",
    resWidth: "3.25em",
    marginBottom: false
  },
  "JavaScript": {
    path: "https://i.postimg.cc/Z5TRQP15/javascript-logo.png",
    width: "5em",
    resWidth: "4em",
    marginBottom: true
  },
  "React": {
    path: "https://i.postimg.cc/cLrq6r3c/react-logo.png",
    width: "5em",
    resWidth: "4em",
    marginBottom: true
  },
  "Git": {
    path: "https://i.postimg.cc/DwFJT3bF/git-logo.png",
    width: "7.5em",
    resWidth: "6em",
    marginBottom: true
  },
  "Node.js": {
    path: "https://i.postimg.cc/jqPSdkTj/node-js-logo.png",
    width: "10em",
    resWidth: "6.5em",
    marginBottom: false
  },
  "MySQL": {
    path: "https://i.postimg.cc/D0kfP1rF/mysql-logo.png",
    width: "7.5em",
    resWidth: "5em",
    marginBottom: true
  },
  "TypeScript": {
    path: "https://i.postimg.cc/Ss8kRjwP/typescript-logo.png",
    width: "5em",
    resWidth: "4em",
    marginBottom: true
  }
}

function hoverEffect() {
  menuBtn.addEventListener("mouseover", () => { menuBtn.style.backgroundColor = "black"; menuBtn.style.color = "white" })
  menuBtn.addEventListener("mouseout", () => { menuBtn.style.backgroundColor = "silver"; menuBtn.style.color = "black" })
}

menuBtn.addEventListener("click", () => {
  menuList.classList.toggle("displayed")
  if (menuList.classList.contains('displayed')) {
    menuBtn.style.backgroundColor = "darkgray"
    menuBtn.addEventListener("mouseover", () => menuBtn.style.backgroundColor = "black")
    menuBtn.addEventListener("mouseout", () => menuBtn.style.backgroundColor = "darkgray")
  } else {
    menuBtn.style.backgroundColor = "silver"
    menuBtn.style.color = "black"
    hoverEffect()
  }
})

for (const link of links) {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 990) {
      menuList.classList.remove("displayed")
      menuBtn.style.backgroundColor = "silver"
      hoverEffect()
    }
  })
}

function createDivs(element, className, times) {
  for (let i = 0; i < times; i++) {
    const newDiv = document.createElement("div")
    newDiv.classList.add(className)
    element.appendChild(newDiv)
  }
}
 
const rows = [document.getElementById("row1"), document.getElementById("row2")]
rows.forEach(row => {
  createDivs(row, "img-container", 4)
  createDivs(row, "caption", 4)
})

const skillContainers = document.querySelectorAll(".img-container")
const captions = document.querySelectorAll(".caption")
let count = 0;

for (let skill in images) {
  const skillImage = document.createElement("img")

  skillImage.setAttribute("src", images[skill].path)
  skillImage.setAttribute("alt", skill)
  skillImage.style.width = images[skill].width
  skillImage.style.display = "block"

  images[skill].marginBottom ? 
    skillImage.style.margin = "0 auto 0.75em" :
    skillImage.style.margin = "0 auto"

  const mediaQuery = window.matchMedia('(max-width: 425px)')
  mediaQuery.addEventListener("change", event => {
    skillImage.style.width = event.matches ? images[skill].resWidth : images[skill].width
  })
  
  skillContainers[count].appendChild(skillImage)
  captions[count].textContent = skill
  count++
}
