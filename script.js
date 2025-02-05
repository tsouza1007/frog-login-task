// document.getElementById('loginForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     let username = document.getElementById('username').value;
//     let password = document.getElementById('password').value;
//     let storedUser = localStorage.getItem(username);
//     if (storedUser && JSON.parse(storedUser).password === password) {
//         alert('Login successful!');
//     } else {
//         document.getElementById('errorMsg').textContent = 'Invalid username or password';
//     }
// });

// // document.getElementById('register').addEventListener('click', function() {
// //     let username = prompt('Enter a username:');
// //     let password = prompt('Enter a password:');
// //     if (username && password) {
// //         localStorage.setItem(username, JSON.stringify({ password: password }));
// //         alert('Registration successful!');
// //     }
// // });

// // document.getElementById('password').addEventListener('input', function() {
// //     let password = this.value;
// //     let strengthText = '';
// //     if (password.length < 6) {
// //         strengthText = 'Weak password';
// //     } else if (password.match(/[a-z]/) && password.match(/[A-Z]/) && password.match(/[0-9]/) && password.match(/[@$!%*?&]/)) {
// //         strengthText = 'Strong password';
// //     } else {
// //         strengthText = 'Moderate password';
// //     }
// //     document.getElementById('passwordStrength').textContent = strengthText;
// // });
// // // Toggle Password Visibility
// // document.getElementById('togglePassword').addEventListener('click', function () {
// //     const passwordInput = document.getElementById('password');
// //     const icon = this;

// //     if (passwordInput.type === 'password') {
// //         passwordInput.type = 'text';
// //         icon.textContent = '🙈'; // Change icon to 'hide' symbol
// //     } else {
// //         passwordInput.type = 'password';
// //         icon.textContent = '👁️'; // Change icon back to 'show' symbol
// //     }
// // });
// document.getElementById('register').addEventListener('click', function() {
//     let username = prompt('Enter a username:');
//     let password = prompt('Enter a password:');
//     if (username && password) {
//         localStorage.setItem(username, JSON.stringify({ password: password }));
//         alert('Registration successful!');
//     }
// });

// document.getElementById('password').addEventListener('input', function() {
//     let password = this.value;
//     let strengthText = '';
//     if (password.length < 6) {
//         strengthText = 'Weak password';
//     } else if (password.match(/[a-z]/) && password.match(/[A-Z]/) && password.match(/[0-9]/) && password.match(/[@$!%*?&]/)) {
//         strengthText = 'Strong password';
//     } else {
//         strengthText = 'Moderate password';
//     }
//     document.getElementById('passwordStrength').textContent = strengthText;
// });

// // Toggle Password Visibility
// document.getElementById('togglePassword').addEventListener('click', function () {
//     const passwordInput = document.getElementById('password');
//     const icon = this;

//     if (passwordInput.type === 'password') {
//         passwordInput.type = 'text';
//         icon.textContent = '🙈'; // Change icon to 'hide' symbol
//     } else {
//         passwordInput.type = 'password';
//         icon.textContent = '👁️'; // Change icon to 'show' symbol
//     }
// });
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        let storedUser = localStorage.getItem(username);
        if (storedUser && JSON.parse(storedUser).password === password) {
            alert('Login successful!');
        } else {
            document.getElementById('errorMsg').textContent = 'Invalid username or password';
        }
        });
    });

    document.getElementById('register').addEventListener('click', function() {
        let username = prompt('Enter a username:');
        let password = prompt('Enter a password:');
        if (username && password) {
            localStorage.setItem(username, JSON.stringify({ password: password }));
            alert('Registration successful!');
        }
    });

    document.getElementById('password').addEventListener('input', function() {
        let password = this.value;
        let strengthText = '';
        if (password.length < 6) {
            strengthText = 'Weak password';
        } else if (password.match(/[a-z]/) && password.match(/[A-Z]/) && password.match(/[0-9]/) && password.match(/[@$!%*?&]/)) {
            strengthText = 'Strong password';
        } else {
            strengthText = 'Moderate password';
        }
        document.getElementById('passwordStrength').textContent = strengthText;
    });
    //Toggle Password Visibility


console.log(document.getElementById('togglePassword'))




    document.getElementById('togglePassword').addEventListener('click', function () {
        const passwordInput = document.getElementById('password');
        const icon = this;
    
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            icon.textContent = '🙈'; // Change icon to 'hide' symbol
        } else {
            passwordInput.type = 'password';
            icon.textContent = '👁️'; // Change icon to 'show' symbol
        }
    
    
      
    });