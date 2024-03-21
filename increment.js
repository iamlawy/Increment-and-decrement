let number=0
let numberdisplay = document.getElementById("show");

function increasenumber() {
    number++;
    numberdisplay.innerHTML = number;
    if(number == ""){
        clearInterval(incrementer)
    }
}

let incrementer = setInterval(()=>{
    increasenumber()
    },3000)

    let display= document.getElementById("increase")
    let myNum= 0

    function increasing(){
        if (myNum == 10) {
            return;
        }
        myNum++
        display.innerHTML = myNum
    }

    function decreasing() {
        if (myNum == 0) {
            return;
        }
        myNum--
        display.innerHTML = myNum
    }
     
    
