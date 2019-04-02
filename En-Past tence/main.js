var TheQuastionNumberForArray = Math.round(Math.random()*(Questionsmain.length)-0.5)
var TheQuastionNumberForUser = TheQuastionNumberForArray + 1
document.getElementById("WhatIsTheQuastionNumber").innerHTML = TheQuastionNumberForUser
var quastion = Questionsmain[TheQuastionNumberForArray]
document.getElementById("quastion").innerHTML = quastion
document.getElementById("lebal2").innerHTML = lableII
document.getElementById("title").innerHTML = "Ó¢ÓïÌýÐ´:" + lableII
function SeeAnswer() {
var answer = Answersmain[TheQuastionNumberForArray]
document.getElementById("Answer").innerHTML = answer
}
function HideAnswer(){
var answer = ""
document.getElementById("Answer").innerHTML = answer
}
