
firebase.firestore();
function saveMessage(messageText, userName) {
    return firebase.firestore().collection('messages').add({
        text: messageText,
        userName: userName,
        time_stand: new Date()
    });
}
    function sendMessage() {
        var MessageList =document.getElementById('messageList');
        MessageList.innerHTML+=`
        <div><span class="un">username</span>
        <span class="tm">(timestamp)</span>
        <span class="text">Message Text</span></div>`;
        var Message = document.getElementById('messageText').value;
        var Name = document.getElementById('name').value;
        saveMessage(Message, Name);

    }