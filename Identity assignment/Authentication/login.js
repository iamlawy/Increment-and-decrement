let email = document.getElementById('email')
let username = document.getElementById('username')
let password = document.getElementById('password')
let showw = document.getElementById("show")

let userdetails = JSON.parse(localStorage.getItem("userdetails"))
console.log(userdetails);

function login() {
    let login = userdetails.find(user => user.email == username.value && user.password == password.value)
  if (username.value == '' || email.value == '' || password.value == '' ) {
    alert('All inputs are mandatory')
  }  else if(login) {
    alert('account not registered')
  } else{
    alert(`Log in successful ${username.value}`)
  }
    

// let user = {
//     email : email.value ,
//     fullname : username.value ,
//     password : password.value ,
// }
// console.log(user);
// const existuser = userarray.find(el=> el.email == email.value)

// console.log(existuser);
// if (existuser) {
//     alert('user already exist')
// }else{
//     userarray.push(user)
//     localStorage.getItem("userdetails",  JSON.stringify(userarray))
//     console.log(userarray);
// }

}
password.innerHTML = 'Hide'
function show() {
    password.type == 'password' ? password.type = 'text' : password.type = 'password'
    showw.innerHTML== 'show' ? showw.innerHTML='hide' : showw.innerHTML = 'show'
}