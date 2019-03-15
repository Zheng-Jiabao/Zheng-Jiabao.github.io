// JavaScript Document

var URLforScr=window.location.search;
URLforScr=URLforScr.slice(4)
//---------------------------------------------------------------------------------------------------
//修改此处文本
if(URLforScr=="1"){

	var AllQs=["怎样爱护自己的身体?","我们如何养护精神?","什么是挫折?","如何正确面对挫折?","如何战胜挫折?","增强生命韧性的方法有哪些?","什么是有意义的生命?(生命的追问)","探索生命的意义:","人们对待生活有什么不同的态度?(贫乏与充盈)","我们为什么要彼此关切?","我们怎样关切他人?","如何看待生命的平凡与伟大?"]
	var AllAs=["①守护生命首先要关注自己的身体<br/>②<strong>关心身体的状况,养成健康的生活方式</strong>,是一种对生命的负责任的态度。<br/>③<strong>珍视自己的肉体生命,关注内在感受<br/>④增强安全意识、自我保护意识,提高安全防能力,掌握一些基本的自教自护方法。</strong>","①精神风貌反映着我们的生命状态,守护生命需要关注并养护我们的精神。<br/>②守住自己的心灵,追求真善美<br/>③守住精神家园，发扬民族精神","在我们怀揣美好的愿望、目标、期待去努力的程中,难免会遇到一些阻碍、失利乃至失败。这些阻碍、失利和失败,就是人们常说的挫折。","①面对挫折,我们需要及时调整自己,正确看待挫折。<br/>②生活中的挫折是我们生命成长的一部分。得意时,挫折会使我们更清醒,避免盲目乐观、精神懈怠;失意时,挫折会使我们获得更加丰富的生活经验。","①面对挫折,我们需要发现、挖掘自己的生命量。我们每个人的生命都蕴含一定的承受力、自我调节和自我修复的能力。<br/>②面对挫折,发掘自身的生命力量,我们可以逐渐培养自己面对困难的勇气和坚强的意志。<br/>③发掘自身的力量并不排斥借助外力。我们在坚持目标和不断努力的道路上,学会与他人建立联系,向他人寻求帮助,获得他人的支持和鼓励,有助于增强我们的生命力量。","①欣赏、培养幽默感<br/>②和自己信任的人谈一谈。<br/>③考虑并接受最糟糕的结果。<br/>④关心、帮助他人。<br/>⑤培养某方面的兴趣。","①能够活出自己的人生,实现自我价值<br/>②在看到别人的需要时付出自己的爱心,无论事情大小,都能承担起自己的责任<br/>③将个人追求建立在人类共同需要的基础上。","①探索生命意义,是人类生命的原动力之一。只有人类才可能驾驭自己的生活,选择自己的人生道路<br/>②生命是独特的,生命意义是具体的。每个人的生活不尽相同,我们都是在自己的生活经历中一点一点地建构自己,形成人们所说的“我的人生”<br/>③生命的意义需要自己发现和创造","①人们对待生活的不同态度,会影响生命的质量。有的人把自己封闭起来,不愿也不善于感受生活中的美好,不敢也无力去面对生活的困境与难题,狭小的世界命的生长;有的人缺乏生活目标,无所事事,在时光流逝中生命日益空虚。<br/>②生命是一个逐渐丰富的过程。","①人与人在相互依存和彼此关切中感受温暖,传递温暖。所有的冷漠由,然而,没有人愿意遭遇到冷漠。生命拒绝冷漠。<br/>②我们不仅要关注自身的发展,而且要关切其他的生命,设身处地地思考并善待他人。","用真诚、热情、给予去感动、改变他人,消融冷漠,共同营造一个互信、友善和谐的社会","①每个人都有自己独特的使命。<br/>②伟大在于创造和贡献。在历史上,那些被我们认为是伟大的人物,并不是因为他们生而伟大,而是因为他们运用自身的品德、才智和劳动,创造出比自己有限的生命更长久的、不平凡的社会价值,为我们留下了宝贵的物质财富和精神财富,影响着一代又一代的人。<br/>③生命虽然平凡,却也时时创造伟大。当我们将个体生命和他人的、集体的、民族的、国家的甚至人类的命运联系在一起时,生命便会从平凡中闪耀出伟大。"]
}

//....至此
//-----------------------------------------------------------------------------------------------------------
//Main

var Num=Math.round(Math.random()*AllQs.length);
var Q=AllQs[Num],A=AllAs[Num];
function Show(){
	document.getElementById("Quastion").innerHTML=Q
	document.getElementById("Answer").innerHTML=A
}
function Hide(){
	document.getElementById("Answer").innerHTML="&nbsp;"
}
