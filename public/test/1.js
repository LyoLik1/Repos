var ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start('#firebaseui-auth-container', {
  callbacks:{
    signInSuccess:()=>false
  },
  signInOptions: [
    {
      provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      recaptchaParameters: {
        type: 'image', // 'audio'
        size: 'normal', // 'invisible' or 'compact'
        badge: 'bottomleft' //' bottomright' or 'inline' applies to invisible.
      },
      defaultCountry: 'UA',
      loginHint: '+380'
    }
  ]
});

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    var userInfo = document.getElementById('user-info');
     userInfo.innerHTML = user.phoneNumber;
    document.getElementById('firebaseui-auth-container').style.display = "none";
    document.getElementById('Logout').style.display = "block";
  


  } else {
    document.getElementById('firebaseui-auth-container') .style.display = "block"; 
    document.getElementById('logout').style.display = "none";
  

  }
  return false;
});
function logOut(){
firebase.auth().signOut();

}