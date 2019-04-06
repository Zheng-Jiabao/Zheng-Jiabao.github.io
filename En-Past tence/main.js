var TheQuastionNumberForArray = Math.round(Math.random()*(Questionsmain.length)-0.5)
var TheQuastionNumberForUser = TheQuastionNumberForArray + 1
var quastion = Questionsmain[TheQuastionNumberForArray]
document.getElementById("quastion").innerHTML = quastion
document.getElementById("lebal2").innerHTML = lableII
document.getElementById("title").innerHTML = "En:" + lableII
document.getElementById("UsersAn").value=""
function turnlocal(loadbool){
if(loadbool==1){
window.location.reload()
}else{
window.location.href=window.location.href+","+Answersmain[TheQuastionNumberForArray]
}
}
function showed(){
	var UsersBack=document.getElementById("UsersAn").value
	if(UsersBack==Answersmain[TheQuastionNumberForArray]){
		document.getElementById("Istrue").innerHTML="RIGHT"
setTimeout(1000,turnlocal(1))
	}else{
		document.getElementById("Istrue").innerHTML="WRONG"
		document.getElementById("Answer").innerHTML=Answersmain[TheQuastionNumberForArray]
		setTimeout(1000,turnlocal(0))
		}
}
