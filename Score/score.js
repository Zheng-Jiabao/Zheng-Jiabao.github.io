// JavaScript Document
var app=new Vue({
	el:"#app",
	data:{
		willshow:{
			BARorLINE:true,
			BarChooseWhichTask:false,
		},
		TaskNumber:0,
		TaskNames:[
			{Name:"First Month Task"},
			{Name:"Mid-Team Task"}
		]
	},
	methods:{

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

