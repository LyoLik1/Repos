function ongetMessages(snapshot) {
    console.log(snapshot.docs[0].data());
}
function ShowMessage(username, messageText,timestamp ) {
    var MessageList = document.getElementById('messageList');
    MessageList.innerHTML += `
<div><span class="un">`+ username + `</span>
<span class="tm">`+ timestamp + `</span>
<span class="text">`+ messageText + `</span></div>`;
}
var db = firebase.firestore();
var messages = db.collection('messages').get();
messages.then(ongetMessages);
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

   ShowMessage(Message, Name, timestamp);
}