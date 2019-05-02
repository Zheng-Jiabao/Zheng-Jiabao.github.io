// JavaScript Document
$("#BARorLINE").hide(0);
$("#BarChooseWhichTask").hide(0);
$("#BarMain").hide(0);

$("#BARorLINE").show(0);
$("#chooseBAR").click(function(){
	 $("#BarChooseWhichTask").show(0);
	 $("#BARorLINE").hide(0);
	 $("#howmanytasks").text(TasksWeA.length);
	 for (var i=0; i<TasksWeA.length; i++){
		 $("#BarChooseWhichTaskList").html($("#BarChooseWhichTaskList").html()+"<li>"+TasksWeA[i]+"</li>");
		 $("ol li:eq("+i+")").click(
			function(){
				BarMaker(i);
				}
			);
		 }
	 })
function BarMaker(whichtast){
	$("#BarChooseWhichTask").hide(0);
	$("#BarMain").show(0);
	$("#TaskName").text(TasksWeA[whichtast])
	}