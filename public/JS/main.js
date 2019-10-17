function ongetMessages(snapshot) {
    for (var i = snapshot.docs.length-1; i >=0; i--) {
        var message = snapshot.docs[i].data();
        ShowMessage(message.userName, message.text,message.time_stand);
        
    }
}
function ShowMessage(username, messageText, timestamp) {
    var  MessageList= document.getElementById('messageList');
    MessageList.innerHTML += `
<div>MessageList
<span class="un">`+ username + `</span>
<span class="tm">`+timestamp + `</span>
<span class="text">`+ messageText + `</span>
</div>`;
MessageList.scrollTop = 999999;
}
var db = firebase.firestore();
var messages = db.collection('messages').orderBy('time_stand','desc').limit(35).get();
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
