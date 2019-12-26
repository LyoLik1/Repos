// function ongetMessages(snapshot) {
//     for (var i = snapshot.docs.length - 1; i >= 0; i--) {
//         var message = snapshot.docs[i].data();
//         ShowMessage(message.userName, message.text, message.time_stand);

//     }
// }
// function ShowMessage(username, messageText, timestamp) {
//     var MessageList = document.getElementById('messageList');

//     MessageList.innerHTML += `
// <div><div style='color:red'>Message</div>Name
// <span class="un">`+ username + `</span>;<div style='color:orange'></div>time
// <span class="tm">`+ timestamp + `</span>;<div style='color:green'></div>Text
// <span class="text">`+ messageText + `</span>;
// </div>`;
//     MessageList.scrollTop = 999999;

// }
// var db = firebase.firestore();
// //var messages = db.collection('messages').orderBy('time_stand', 'desc').limit(25).get();
// //messages.then(ongetMessages);
// var ongetMessages = db.collection('messages').orderBy('time_stand', 'desc').limit(30).onSnapshot(function (snapshot) {
//     console.log('gtrerg');
//     snapshot.docChanges().reverse().forEach(function (change) {
//         if (change.type === "added") {
//             var message = change.doc.data()
//             console.log("gtrerg ", message);
//             var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeStyle: "short", dateStyle: "short" };
//             ShowMessage(message.userName, message.text, message.time_stand.toDate().toLocaleDateString("ru-RU", options));
//         }
//     })
// });
// console.log(messages);
// function saveMessage(messageText, userName, timestamp) {
//     return db.collection('messages').add({
//         text: messageText,
//         userName: userName,
//         time_stand: timestamp
//     });
// }
//ddd
// function sendMessage() {
//     var Message = document.getElementById('messageText').value;
//     var Name = document.getElementById('name').value;
//     var timestamp = new Date();
//     saveMessage(Message, Name, timestamp);

//     //ShowMessage(Message, Name, timestamp);
// }
// function Submit() {
//     // var Name = document.getElementById('log').value;
//     // var password = document.getElementById('password').value;
//     // var number = document.getElementById('number').value;
//     // var hobbi = document.getElementById('hobbi').value;
//     // var Pol = document.getElementById('Pol').value;
//     console.log(Submit);
//     return false;
// }
function getSelectedRadioIdnex(buttons) {
    for (var i = 0; i < buttons.length; i++)
        if (buttons[i].checked)
            return i;
}
function Submit() {
    var nameValue = document.getElementsByName('name').value;
    var passwordValue = document.getElementsByName('password').value;
    var numberValue = document.getElementsByName('number').value;
    var hobbiValue = document.getElementsByName('hobbi').value;
    var polValue = getSelectedRadioIdnex(document.getElementsByName('Pol'));
    
    
   var appVerifier = window.recaptchaVerifier;
   firebase.auth().signInWithPhoneNumber(numberValue, appVerifier)
    .then(function (confirmationResult) {
      console.log();
      window.confirmationResult = confirmationResult;
    }).catch(function (error) {
    console.log();
    });
    return false;
}
firebase.auth().languageCode = 'en';
// To apply the default browser preference instead of explicitly setting it.
// firebase.auth().useDeviceLanguage();
window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
  'size': 'invisible',
  'callback': function (response) {
    // reCAPTCHA solved, allow signInWithPhoneNumber.
    console.log('asdsadsadsad');
  }
});
window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('firebaseui-auth-container', {
    'size': 'normal',
    'callback': function(response) {
      // reCAPTCHA solved, allow signInWithPhoneNumber.
      // ...
    },
    'expired-callback': function() {
      // Response expired. Ask user to solve reCAPTCHA again.
      // ...
    }
  });
  recaptchaVerifier.render().then(function(widgetId) {
    window.recaptchaWidgetId = widgetId;
  });


