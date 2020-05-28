function judgePassword() {
    const password = '123';
    let inputPassword = document.getElementById('password').value;
    if (password === inputPassword) {
        window.open("https://www.google.ca/");
    } else {
        alert("Please input the right password");
    }
}