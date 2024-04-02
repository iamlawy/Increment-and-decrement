let fullname = document.getElementById('fullname')
let email = document.getElementById('email')
let password = document.getElementById('password') 
let confirmpassword = document.getElementById('confirmpassword')
let checker = document.getElementById('checker')
let showandhide = document.getElementById('showandhide')
console.log(showandhide.innerHTML);
let showandhide2 = document.getElementById('showandhide2')
let icon = document.getElementById("icon")
let icon2 = document.getElementById("icon2")
let data = []
let userarray = []
let userdetails = JSON.parse(localStorage.getItem("userdetails"))
console.log(userdetails);

function signup(){
    if (fullname.value == '' || email.value == '' || password.value == '' || confirmpassword.value == '') {
        alert('All fields are mandatory')
    } else if( password.value !== confirmpassword.value) {
        alert('Password does not match')
    } else if (checker.checked !== true){
        alert('Please agree to the terms and conditions')
    } else if ( password.value.length < 8 && confirmpassword.value.length < 8){
        alert('Password must be atleast eight characters')
    }
    else{
        let userDataObj = {
            fullname: fullname.value,
            email: email.value,
            password: password.value,
            terms: checker.checked
        }

        // data.push(userDataObj)
        // console.log(data);
        // alert (`sign up successful ${fullname.value}`)

        displayTable()
        fullname.value = '',
        email.value ='',
        password.value = '',
        confirmpassword.value = '',
        checker.checked = false
    }
    console.log(email.value , fullname.value, password.value);
    let user = {
        email : email.value ,
        fullname : fullname.value ,
        password : password.value ,
    }
    console.log(user);
    const existuser = userarray.find(el=> el.email == email.value)
    
    console.log(existuser);
    if (existuser) {
        alert('user already exist')
    }
    else{
        userarray.push(user)
        localStorage.setItem("userdetails",  JSON.stringify(userarray))
        alert(`Sign in successful Welcome ${fullname.value} please login`)
        console.log(userarray);
    }
   
    
}   
function show() {
    password.type == 'password' ? password.type = 'text' : password.type = 'password'
    icon.className == "fa fa-eye-slash" ? icon.className = "fa fa-eye" : icon.className = "fa fa-eye-slash"
}
function showit() {
    confirmpassword.type == 'password' ? confirmpassword.type = 'text' : confirmpassword.type = 'password'
    icon2.className == "fa fa-eye-slash" ? icon2.className = "fa fa-eye" : icon2.className = "fa fa-eye-slash"
}
let displayTable = () =>{
    table.innerHTML = ''
     
    data.forEach((data, index)=>{
        table.innerHTML += `<tr> <td>${data.fullname} </td> <td>${data.email} <td>${data.password} </td> <td>${data.terms} </td> </tr>`
    })
}