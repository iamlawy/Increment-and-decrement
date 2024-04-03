let fullname = document.getElementById('username')
let email = document.getElementById('Adress')
let password = document.getElementById('pass')
let confirmpassword = document.getElementById('confirm')
let checker = document.getElementById('check')
let table = document.getElementById('table')
let datas = [] && JSON.parse(localStorage.getItem("userdetails"))

function signUp(){
    if (fullname.value =='' || email.value =='' || password.value =='' || confirmpassword.value =='') {
        alert('all field are mandatory')
    } else if (password.value.length  < 8 ) {
        alert("you no get sense")
    }
     else if (password.value !== confirmpassword.value){
        alert('password does not match')
    } else if (checker.checked !== true) {
        alert("please agree to terms and condition")
        
    }
    else{
        let userDataObj = {
            fullname: fullname.value,
            email: email.value,
            password:password.value,
            confirmpassword: confirmpassword.value,
            terms: checker.checked

        }
        console.log(userDataObj);
        const existuser = datas.find(el=> el.email == email.value)
        console.log(existuser);
        if (existuser) {
            alert("user already exist")
            
        }else{
        datas.push(userDataObj)
        localStorage.setItem("userdetails", JSON.stringify(datas))
        console.log(datas);
    
        }
        alert(`sign up successful ${fullname.value}`)
        
        fullname.value = ''
        email.value = ''
        password.value = ''
        confirmpassword.value = ''
        checker.checked = false
        displayTable()
    }
}

showid.innerHTML = 'SHOW'
function showHide(){
    password.type == 'password' ? password.type = 'text' : password.type = 'password'
    showid.innerHTML == 'SHOW' ? showid.innerHTML = 'HIDE' : showid.innerHTML = 'SHOW'
}

let displayTable = ()=>{
    table.innerHTML = ''
    
    datas.forEach((data, index) =>{
        // table.innerHTML += <tr> <td>${data.fullname} </td>  <td>${data.email} </td> <td>${data.password} </td> <td>${data.terms} </td> </tr>

    })

}