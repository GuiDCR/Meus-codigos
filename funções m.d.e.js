function mOver(obj) {
    obj.innerHTML="onMouseOver";
}
function mOut(obj) {
    obj.innerHTML="onMouseOut";
}
function mDown(obj){
    obj.style.backgroundColor="#1ec5e5";
    obj.innerHTML="OnMouseDown";
}
function mUp(obj){
    obj.style.backgroundColor="#D94A38";
    obj.innerHTML="onMouseUp";
}
function dentro(){
    document.getElementById("textbox1").style.background = "green";
    document.getElementById("textinput").innerHTML = "onFocus";
}
function fora(){
    document.getElementById("textbox1").style.background = "yellow";
    document.getElementById("textinput").innerHTML = "onBlur";
}
function trocar(){
    document.getElementById("doubleclick").innerHTML = "onDblClick";
    document.getElementById("doubleclick").style.background = "#D94A38";
}
function chamar(){
    alert("Você ativou -onSelect-");
}
function teclar(){
    document.getElementById("textinput2").innerHTML = "Você ao teclar no campo ativou onKeyDown";
}
function mudar_para_minusculo() {
    let min = document.getElementById("textbox4");
    min.value = min.value.toLowerCase();
    document.getElementById("descr_onkeyup").innerHTML = "Ao soltar o botão você ativou -onKeyUp";
}