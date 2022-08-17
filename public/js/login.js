async function loginHandler (event) {
    event.preventDefault();
    const email = document.querySelector("input[id='email'").value.trim();
    const password = document.querySelector("input[id='password'").value.trim();

    if (email && password) {
        const response = await fetch('http://localhost:3001/api/users/login', {
            method: 'post',
            // mode: 'no-cors',
            body: JSON.stringify({
                email,
                password
            }),
            // headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:5500/'}
            headers: { 'Content-Type': 'application/json'}
        });

        if (response.ok) {
            fetch('http://localhost:3001/home');
            document.location.replace('/home');
            // response.redirected('back');
            // .then(response.render('homepage'));
            
        } else {
            alert(response.statusText);
        }
    }
}

document.getElementById("login-form")
  .addEventListener("submit", loginHandler);
