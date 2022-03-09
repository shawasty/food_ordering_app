
const logInForm  = document.getElementById("logIn_form")
logInForm.addEventListener('submit',logInUser);


async function logInUser(ev){
    ev.preventDefault();
    const username = document.getElementById('username');
    const password = document.getElementById('password');

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
        console.log({body.username,password})

    } else {
       console.log('err')
    }

}