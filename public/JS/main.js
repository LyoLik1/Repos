function ongetMessages(snapshot) {
    for (var i = snapshot.docs.length - 1; i >= 0; i--) {
        var message = snapshot.docs[i].data();
        ShowMessage(message.userName, message.text, message.time_stand);

    }
}
function ShowMessage(username, messageText, timestamp) {
    var MessageList = document.getElementById('messageList');

    MessageList.innerHTML += `
<div><div style='color:red'>Message</div>Name
<span class="un">`+ username + `</span>;<div style='color:orange'></div>time
<span class="tm">`+ timestamp + `</span>;<div style='color:green'></div>Text
<span class="text">`+ messageText + `</span>;
</div>`;
    MessageList.scrollTop = 999999;

}
var db = firebase.firestore();
//var messages = db.collection('messages').orderBy('time_stand', 'desc').limit(25).get();
//messages.then(ongetMessages);
var ongetMessages = db.collection('messages').orderBy('time_stand', 'desc').limit(29).onSnapshot(function (snapshot) {
    console.log('gtrerg');
    snapshot.docChanges().reverse().forEach(function(change) {
    if (change.type === "added") {
        var message = change.doc.data()
        console.log("gtrerg ", message);
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',timeStyle:"short",dateStyle :"short" };
        ShowMessage( message.userName,message.text,message.time_stand.toDate().toLocaleDateString("ru-RU",options));   
    }
   })
});
console.log(messages);
function saveMessage(messageText, userName, timestamp) {
    return db.collection('messages').add({
        text: messageText,
        userName: userName,
        time_stand: timestamp
    });
}
function sendMessage() {
    var Message = document.getElementById('messageText').value;
    var Name = document.getElementById('name').value;
    var timestamp = new Date();
    saveMessage(Message, Name, timestamp);

    //ShowMessage(Message, Name, timestamp);
}
