console.log('Yo, this is JavaScript on your page')
// Can be seen in console on page

let mainHeader = document.querySelector("h1")

console.log(mainHeader)

mainHeader.textContent = "Mochi icecream is the best"
mainHeader.setAttribute("style", "color: silver; border: 1px solid blue;")

let myBody = document.querySelector('body')

document.body.setAttribute("style", "background-color: #343434;")

let myPara = document.createElement('p')
myPara.textContent = "Here is the stuff that is stuff that is"

let myDiv = document.createElement('div')
myDiv.appendChild(myPara)

// myDiv.textContent = "Hey, this is a Div!"
myDiv.setAttribute("style", "color: aliceblue;")

document.body.appendChild(myDiv)

let myPic = document.createElement("img")

myPic.setAttribute("src", "http://timetoady.com/dgm2120/05Images/gallery_images/SNES2.jpg")

document.body.appendChild(myPic)