var TheQuastionNumberForArray = Math.round(Math.random()*(Questionsmain.length)-0.5)
var TheQuastionNumberForUser = TheQuastionNumberForArray + 1
var quastion = Questionsmain[TheQuastionNumberForArray]
document.getElementById("quastion").innerHTML = quastion
document.getElementById("lebal2").innerHTML = lableII
document.getElementById("title").innerHTML = "En:" + lableII
document.getElementById("UsersAn").value=""
function showed(){
	var UsersBack=document.getElementById("UsersAn").value
	if(UsersBack==Answersmain[TheQuastionNumberForArray]){
		document.getElementById("Istrue").innerHTML="RIGHT"
	}else{
		document.getElementById("Istrue").innerHTML="WRONG"
		document.getElementById("Answer").innerHTML=Answersmain[TheQuastionNumberForArray]
		}
}