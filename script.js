const bar = document.getElementById('bar');
const nav = document.getElementById('navbar')
const close = document.getElementById('close')

if (bar) {
	bar.addEventListener('click', () => {
		nav.classList.add('active');
	})
}

if (close) {
	close.addEventListener('click', () => {
		nav.classList.remove('active');
	})
}


// script.js

async function signup() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:5000/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        });

        const data = await response.json();

        if (response.ok) {
            alert('Signup successful!');
            document.getElementById('signupForm').reset();
            showLoginForm();
        } else {
            document.getElementById('signupError').textContent = data.error;
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('signupError').textContent = 'An error occurred. Please try again.';
    }
}

async function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    try {
        const response = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.ok) {
            alert('Login successful!');
            document.getElementById('loginForm').reset();
            // Redirect to another page or handle successful login
        } else {
            document.getElementById('loginError').textContent = data.error;
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('loginError').textContent = 'An error occurred. Please try again.';
    }
}

function showLoginForm() {
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}


async function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    try {
        const response = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.ok) {
            alert('Login successful!');
            document.getElementById('loginForm').reset();

            // Redirect to the original page after successful login
            window.location.href = 'index.html'; // Replace with your actual page URL
        } else {
            document.getElementById('loginError').textContent = data.error;
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('loginError').textContent = 'An error occurred. Please try again.';
    }
}
