const body = document.querySelector("body");

const Menu = {
  open() {
    document.querySelector(".mobile-menu").classList.add("active");
    body.style.overflowY = "hidden";
  },
  close() {
    document.querySelector(".mobile-menu").classList.remove("active");
    body.style.overflowY = "inherit";
  },
};

// MSAL configuration
const msalConfig = {
  auth: {
    clientId: '954ec38a-091a-44a7-a30c-0fdad3885358',
    authority: 'https://login.microsoftonline.com/your-tenant-id',
    redirectUri: 'https://http://127.0.0.1:5500/dashboard.html',
  },
};

// Create a UserAgentApplication instance
const msalApp = new msal.PublicClientApplication(msalConfig);

// Handle registration form submission
document.getElementById('registrationForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try {
    // Register the user in your backend and obtain a token or redirect to a registration API
    // based on your application's design
    // ...
  } catch (error) {
    console.error('Registration error:', error);
  }
});

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try {
    // Sign in the user using MSAL
    const loginRequest = {
      scopes: ['openid', 'profile'],
      username,
      password,
    };

    const authResult = await msalApp.loginPopup(loginRequest);
    console.log('Access token:', authResult.accessToken);

    // Redirect or perform other actions based on successful login
    // ...
  } catch (error) {
    console.error('Login error:', error);
  }
});

