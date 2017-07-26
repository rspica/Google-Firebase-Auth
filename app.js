// Initialize Firebase
var config = {
    apiKey: "AIzaSyB3dwBJJUf4kxjGIqVYgfcbq0J4yBMJkQ0",
    authDomain: "neighborhood-174902.firebaseapp.com",
    databaseURL: "https://neighborhood-174902.firebaseio.com",
    projectId: "neighborhood-174902",
    storageBucket: "neighborhood-174902.appspot.com",
    messagingSenderId: "901399671706"
};
firebase.initializeApp(config);


// Get all elements from HTML file
const textEmail = $("#textEmail");
const textPassword = $("#textPassword");
const btnLogin = $("#btnLogin");
const btnSignUp = $("#btnSignUp");
const btnLogout = $("#btnLogout");

// Add login event
btnLogin.click(function() {
    console.log("clicked login btn");
    const email = textEmail.val();
    const password = textPassword.val();
    const auth = firebase.auth();

    console.log("Email: " + email "Password:")

    // Sign In
    const promise = auth.signInWithEmailAndPassword(email, password);

    promise.catch(e => console.log(e.message));

});


// Add signup event
btnSignUp.click(function() {
    console.log("clicked login btn");
    const email = textEmail.val();
    const password = textPassword.val();
    const auth = firebase.auth();

    // Create User
    const promise = auth.createUserWithEmailAndPassword(email, password);

    promise.catch(e => console.log(e.message));

});

btnLogout.click(function(e) {
    console.log("clicked logout");

    firebase.auth().signOut();

})


// Add a realtime listener
firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        console.log(firebaseUser);
        btnLogout.removeClass('hide');
    } else {
        console.log("You are not logged in");
        btnLogout.addClass('hide')
    }
})