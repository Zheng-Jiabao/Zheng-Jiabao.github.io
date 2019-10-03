var version="0";

function Runout(){
    
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
        var SPT=document.getElementById("SPT").value;
        var PP=document.getElementById("PP").value;
        if(!SPT){
            document.getElementById("SPTCHK").innerHTML="(You must type it.)";
            return;
        }else{
            document.getElementById("SPTCHK").innerHTML="&nsbp";
        }
        if(!PP){
            document.getElementById("PPCHK").innerHTML="(You must type it.)";
            return;
        }else{
            document.getElementById("PPCHK").innerHTML="&nsbp";
        }
        RunoutIRR(word,SPT,PP);
        return;
    }
    Runout(word);
}