// My web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD7QKX6JNX7NEg_eUixUSuZpxUr8pN3b0Q",
    authDomain: "iti-dbtest.firebaseapp.com",
    databaseURL: "https://iti-dbtest-default-rtdb.firebaseio.com",
    projectId: "iti-dbtest",
    storageBucket: "iti-dbtest.appspot.com",
    messagingSenderId: "150317720917",
    appId: "1:150317720917:web:19e8d748a0982905ea7bdc",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();

//SignIn
function signIn() {
    var email = $("#email").val();
    var password = $("#password").val();

    auth.signInWithEmailAndPassword(email, password)
        .then((user) => {
            console.log(user);
            console.log(user.user.email);
            window.location.href = "./departments.html";
        })
        .catch((error) => {
            console.log(error);
        });
}

//SignUp
function signUp() {

    var email = $("#email").val();
    var password = $("#password").val();

    auth.createUserWithEmailAndPassword(email, password)
        .then((user) => {
            console.log("New user Created Successfully and SignedIn");
            console.log(user.user.email);
            window.location.href = "./departments.html";
        })
        .catch((error) => {
            console.log(error.message);
        });
}


//LogOut
// function logout() {
//     auth.signOut()
//         .then(() => {
//             console.log("SignedOut Successfully");
//             close();
//             open("./index.html");
//         })
//         .catch((error) => {
//             console.log(error.message);
//         });
// }

auth.onAuthStateChanged((user) => {
    if (user) {
        window.location.href = "./departments.html";
    } else {
        console.log("no user signed in");
    }
});