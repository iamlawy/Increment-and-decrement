let text = document.getElementById('questions')
index = 0


let arrObj= [
{Question: 'Question1 : What is your age', option: 'Options : a.20 b.15 c.25 d.17 e.150'},
{Question: 'Question2 : What is your favorite food', option: 'Options : a.rice b.beans c.semo d.iyan e.shawarma'},
{Question: 'Question3 : Who is your God', option: 'Options : a.Allah b.Jesus c.Ogun d.Sango e.Esu'}
]
arrObj.innerHtml = display()
function display() {
    text.innerText = ` ${arrObj[index].Question}
    ${arrObj[index].option}`
}
function next() {
    if (index == arrObj.length -1) {
        index = 0
    }
    else {
        index++
    }
    display()
}
function previous() {
    if (index = 0) {
        index = arrObj.length -1
    }
    else{
        index++
    }
    display()
}