// nav-bar process
// get element
var btnLogin = document.getElementById('log-in');
var btnLogout = document.getElementById('logout');
var btnSignup = document.getElementById('sign-up');
var txtEmail = document.getElementById('txt-email');
var txtPassword = document.getElementById('txt-password');

// login event
btnLogin.addEventListener('click', () => {
  // get email and password
  var email = txtEmail.value;
  var pass = txtPassword.value;
  const auth = firebase.auth();

  // login
  var promise = auth.signInWithEmailAndPassword(email, pass);
  promise
    .then(console.log('done log in'))
    .catch(e => console.log(e.message));
});

// sign up
btnSignup.addEventListener('click', () => {
  // get email and password
  var email = txtEmail.value;
  var pass = txtPassword.value;
  const auth = firebase.auth();

  // login
  var promise = auth.createUserWithEmailAndPassword(email, pass);
  promise
    .then(console.log('done sign up'))
    .catch(e => console.log(e.message));
});


// log out
// btnLogout.addEventListener('click', (e) => {
//   firebase.auth().signOut();
// });

// code anh Duc ne!
firebase.auth().signOut().then(function() {
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
});



// realtime listeners
// const auth = firebase.auth();
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    console.log(user);
  } else {
    // User is signed out.
    // ...
    console.log('not log in yet');
    
  }
});