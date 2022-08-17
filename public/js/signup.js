async function signupFormHandler (event) {
    event.preventDefault();
    //console.log("submitting");

    const username = document.querySelector("input[id='username'").value.trim();
    const email = document.querySelector("input[id='email'").value.trim();
    const password = document.querySelector("input[id='password'").value.trim();

    if (username && email && password) {
        const response = await fetch('http://localhost:3001/api/users', {
            method: 'post',
            // mode: 'no-cors',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            // headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:5500/'}
            headers: { 'Content-Type': 'application/json'}
        });

        if (response.ok) {
            //console.log('success');
            document.location.replace('/home');
        } else {
            alert(response.statusText);
        }
    }

}


document.getElementById("signup-form")
  .addEventListener("submit", signupFormHandler);
