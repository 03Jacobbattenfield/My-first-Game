var Char = document.getElementById("character")
var block = document.getElementById("block")
function jump(){
if(character.classList != "animate"){
character.classList.add("animate");
}
setTimeout (function(){
    character.classList.remove("animate");
},700);
}
var dead = setInterval(function(){
    var Chartop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockint = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockint<20 && blockint>0 && Chartop>=130){
        block.style.animation="none"
        block.style.display="none"
        alert=("you lose");
    }
},10);
