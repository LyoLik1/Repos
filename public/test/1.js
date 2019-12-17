var ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start('#firebaseui-auth-container', {
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

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
     var userInfo = document.getElementById('user-info');
     userInfo.style.display='block'
     userInfo.innerHtml =user.phoneNumber;
      
    } else {
      // User is signed out.
      // ...
    }
    return false;
  });