const menuBtn = document.getElementById("menu")
const menuList = document.querySelector("ul")
const links = document.querySelectorAll('ul li a')

const images = {
  "HTML": {
    path: "https://i.postimg.cc/CxNZMrj8/html-logo.png",
    width: "5.5em",
    resWidth: "4.5em",
    marginBottom: true
  },
  "CSS": {
    path: "https://i.postimg.cc/fb4hbDnC/css-logo.png",
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
  "Python": {
    path: "https://i.postimg.cc/m2rb3Xbb/python.png",
    width: "5.5em",
    resWidth: "",
    marginBottom: false
  },
  "Git": {
    path: "https://i.postimg.cc/DwFJT3bF/git-logo.png",
    width: "7.5em",
    resWidth: "6em",
    marginBottom: true
  },
  "Node.js": {
    path: "https://i.postimg.cc/vTM65JRw/node-js-logo.png",
    width: "10em",
    resWidth: "6.5em",
    marginBottom: false
  },
  "SQL": {
    path: "https://i.postimg.cc/HWzYyD1Z/SQL-Database.png",
    width: "5.5em",
    resWidth: "5em",
    marginBottom: false
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
 
const rows = document.querySelectorAll(".row")
let divCount = 0;
let indexNum = 0;

for (let skill in images) {
  const skillDiv = document.createElement("div")
  const skillWrapper = document.createElement("div")
  const skillImage = document.createElement("img")
  const skillName = document.createElement("p")

  skillDiv.classList.add("skill-container")
  skillWrapper.classList.add("skill-img-wrapper")

  skillImage.setAttribute("src", images[skill].path)
  skillImage.setAttribute("alt", skill + " logo")
  skillImage.style.maxWidth = images[skill].width
  skillImage.style.display = "block"

  images[skill].marginBottom ? 
    skillImage.style.margin = "0 auto 0.75em" :
    skillImage.style.margin = "0 auto"

  const mediaQuery = window.matchMedia('(max-width: 425px)')
  mediaQuery.addEventListener("change", event => {
    skillImage.style.width = event.matches ? images[skill].resWidth : images[skill].width
  })
  
  skillName.style.textAlign = "center"
  skillName.textContent = skill
  skillWrapper.appendChild(skillImage)
  skillDiv.append(skillWrapper, skillName)
  rows[indexNum].appendChild(skillDiv)
  divCount++

  if (divCount === 5) {
    indexNum++
    divCount = 0
  }
}

rows.forEach(row => {
  let templateColumns = ""
  const numOfColumns = row.childElementCount
  
  for (let i = 0; i < numOfColumns; i++) {
    templateColumns = templateColumns + "1fr "
  }

  row.style.gridTemplateColumns = templateColumns.trim()
})
