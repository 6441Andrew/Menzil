function submit(){
    var collections=document.querySelector(".msgBody");
    collections.setAttribute('style',"display:none");
    var chatBox1=document.querySelector(".chatBox1");
    var collection=document.querySelector("#collection");
    collection.appendChild(chatBox1);
    collection.setAttribute('style',"display:block");
    var chatBox2=document.querySelector(".chatBox2");
    var collection=document.querySelector("#collection");
    collection.appendChild(chatBox2);
    collection.setAttribute('style',"display:block");
}
function senderOne() {
    var senderOne=document.querySelector(".senderOne");
    senderOne=InputEvent.value;
    var senderTwo=document.querySelector(".senderTwo");
    senderTwo.appendChild(senderOne)
}