document.getElementById('btn-login').addEventListener('click', function () {
    const emailFiled = document.getElementById('email-fild');
    const passwordField = document.getElementById('password-fild');

    const email = emailFiled.value;
    const password = passwordField.value;

    if (email === 'hasan@gmail.com' && password === 'admin') {
        window.location.href = 'dashbord.html';
    }
    else {
        alert("Tumi Vul Password Dichi");
    }
})