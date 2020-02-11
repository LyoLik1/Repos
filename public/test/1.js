var ui = new firebaseui.auth.AuthUI(firebase.auth());

function uiStart() {
  ui.start('#firebaseui-auth-container', {
    callbacks: {
      signInSuccess: () => false
    },
    signInOptions: [
      {
        provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
        recaptchaParameters: {
          type: 'image',
          size: 'normal',
          badge: 'bottomleft'
        },
        defaultCountry: 'UA',
        loginHint: '+380'
      }
    ]
  });
}
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    var userInfo = document.getElementById('user-info');
    userInfo.innerHTML = user.phoneNumber
    // document.getElementById('firebaseui-auth-container').style.display = "block";
 

  } else {
   
  }
  return false;
});
function logOut() {
  firebase.auth().signOut();

}
