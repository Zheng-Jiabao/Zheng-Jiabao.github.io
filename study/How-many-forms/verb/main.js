var version="0";

function Runout(word){
    var BS=document.getElementsByName("BS");
    var SPrT=document.getElementsByName("SPrT");
    var SPaT=document.getElementsByName("SPaT");
    var PP=document.getElementsByName("PP");
    for(let i=0;i<BS.length;i++){
        BS[i].innerHTML=word;
    }
    for(let i=0;i<SPrT.length;i++){
        SPrT[i].innerHTML=word+"ing";
    }
    for(let i=0;i<SPaT.length;i++){
        SPaT[i].innerHTML=word+"ed";
    }
    for(let i=0;i<PP.length;i++){
        PP[i].innerHTML=word+"ed";
    }
}
function RunoutIRR(word,SPaT,SPrT,PP){
    var _BS=document.getElementsByName("BS");
    var _SPrT=document.getElementsByName("SPrT");
    var _SPaT=document.getElementsByName("SPaT");
    var _PP=document.getElementsByName("PP");
    for(let i=0;i<_BS.length;i++){
        _BS[i].innerHTML=word;
    }
    for(let i=0;i<_SPrT.length;i++){
        _SPrT[i].innerHTML=SPrT;
    }
    for(let i=0;i<_SPaT.length;i++){
        _SPaT[i].innerHTML=SPaT;
    }
    for(let i=0;i<_PP.length;i++){
        _PP[i].innerHTML=PP;
    }
}
function focusn(){
    var word=document.getElementById("word").value;
    if(!word){
        document.getElementById("wordCHK").innerHTML="(You must type it.)";
        return;
    }else{
        document.getElementById("wordCHK").innerHTML="&nsbp";
    }
    var isirr=document.getElementById("isirr").checked;
    if(isirr){
        var SPaT=document.getElementById("SPaT").value;
        var PP=document.getElementById("PP").value;
        var SPrT=document.getElementById("SPrT").value;
        if(!SPaT){
            document.getElementById("SPaTCHK").innerHTML="(You must type it.)";
            return;
        }else{
            document.getElementById("SPaTCHK").innerHTML="&nsbp";
        }
        if(!SPrT){
            document.getElementById("SPrTCHK").innerHTML="(You must type it.)";
            return;
        }else{
            document.getElementById("SPrTCHK").innerHTML="&nsbp";
        }
        if(!PP){
            document.getElementById("PPCHK").innerHTML="(You must type it.)";
            return;
        }else{
            document.getElementById("PPCHK").innerHTML="&nsbp";
        }
        RunoutIRR(word,SPaT,PP,SPrT);
        return;
    }
    Runout(word);
}