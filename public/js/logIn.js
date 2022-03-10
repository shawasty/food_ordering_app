
const logInForm  = document.getElementById("logIn_form")
logInForm.addEventListener('submit',logInUser);


async function logInUser(ev){
    ev.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const result = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        })
    }).then((res)=> res.json())

    if (result){
        console.log(result)

    } else {
       console.log('err')
    }

}