const form  = document.getElementById("reg_form");




//Register

form.addEventListener('submit',registerUser);

async function registerUser(event){
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const result = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            email,
            password
        })
        
    }).then((res)=> res.json());
    console.log(result)
}
// LOGIN USER



