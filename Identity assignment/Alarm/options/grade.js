let input = document.getElementById('score')
let ringtone = new Audio('Zlatan-Ft-Asake-Bust-Down-(TrendyBeatz.com) (1).mp3')

function grade() {
    if (input.value == "") {
        alert('input field cannot be empty')
    } else if( input.value >= 101) {
        alert ('You typed a wrong number')
    } else if( input.value >= 70) {
        alert('A')
        ringtone.play()
    } else if( input.value >= 60) {
        alert('B')
        ringtone.play()
    } else if( input.value >= 50){
        alert('C')
        ringtone.play()
    } else if( input.value >= 40){
        alert('D')
        ringtone.play()
    } else if( input.value >= 30 ){
        alert('E')
        ringtone.play()
    } else if( input.value < 30){
        alert('F ')
        ringtone.play() 
    }  
}