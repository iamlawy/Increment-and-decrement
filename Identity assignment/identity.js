let image = document.getElementById('inner')
let text = document.getElementById('text')
// let img = ['avatar 1.jfif', 'avatar 2.jfif', 'avatar 3.jfif', 'avatar 4.jfif']
index = 0


let arrObj = [
    {Name: 'Fullname : Lawy', Age: 'Age : 100', Nationality: 'Nationality: Nigeria', Email: 'Email:Boylawy9@gmail.com', img: 'avatar 1.jfif'},
    {Name: 'Fullname : Esther', Age: 'Age : 23', Nationality: 'Nationality: Nigeria', Email: 'Email:Esther@gmail.com', img: 'avatar 2.jfif'},
    {Name: 'Fullname : Emmanuel', Age: 'Age 19: ', Nationality: 'Nationality: Nigeria', Email: 'Email:Fatokun@gmail.com', img: 'avatar 3.jfif'},
    {Name: 'Fullname : Lekan', Age: 'Age : 25', Nationality: 'Nationality: Nigeria', Email: 'Email:Lekan@gmail.com', img: 'avatar 4.jfif'}
]

display()

function display(){
image.src = arrObj[index].img
text.innerHTML = `<h3 id='myh3'>
${arrObj[index].Name}
<br></br>
${arrObj[index].Age}
<br></br>
${arrObj[index].Nationality}
<br></br>
${arrObj[index].Email}

</h3>`
}
function next(){
    if (index == arrObj.length -1) {
        index = 0
    }
    else{
        index++
    }
    display()
}
function previous(){
    if (index == arrObj.length -1) {
        index = 0
    }
    else{
        index++
    }
   display()
}
