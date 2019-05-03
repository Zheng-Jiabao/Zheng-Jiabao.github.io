// JavaScript Document
var app=new Vue({
	el:"#app",
	data:{
		willshow:{
			BARorLINE:true,
			BarChooseWhichTask:false,
			BarMain:false
		},
		TaskNumber:0,
		TaskNames:[
			{Name:"First Month Task"},
			{Name:"Mid-Team Task"}
		],
		getScore:[
				  
				  ]
	},
	methods:{
		toBarMain:function(whichTask){
			this.willshow.BarMain=true;
			this.willshow.BarChooseWhichTask=false;
			}
	}
})
app.TaskNumber=app.TaskNames.length
app.willshow.BARorLINE=true;
app.willshow.BarChooseWhichTask=false;
app.willshow.BarMain=false;
$("#chooseBAR").click(function(){
			app.willshow.BARorLINE=false;
			app.willshow.BarChooseWhichTask=true;	
							   })





function BarMaker(whichtast){
	$("#BarChooseWhichTask").hide(0);
	$("#BarMain").show(0);
	$("#TaskName").text(TasksWeA[whichtast])
	}