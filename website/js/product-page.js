$(function() {
	setListener();
	init();
});

// 治疗 product-diagnose
// 诊断 product-treat
// 辅助 product-assist

var init = function(){
	// 初始化轮播
	$("#myCarousel").carousel('cycle');
}
var setListener = function() {
	$(".product-assortment-all").click(function() {
		$(".product-row .col-sm-6").show();
	});
	$(".product-assortment-diagnose").click(function() {
		$(".product-row .col-sm-6").hide();
		$(".product-diagnose").show();
	});
	$(".product-assortment-treat").click(function() {
		$(".product-row .col-sm-6").hide();
		$(".product-treat").show();
	});
	$(".product-assortment-assist").click(function() {
		$(".product-row .col-sm-6").hide();
		$(".product-assist").show();
	});
	$(".fnirsDetails").click(function(){
		var image1 = "fnirs.jpg";
		var txet = "近红外脑功能成像系统（fNIRS）";
		var text1 = "近红外脑功能成像系统（fNIRS）是公司自主研发的核心专利产品，也是中国首台自主知识产权的近红外脑功能成像系统。";
		var text2 = "该产品利用功能性近红外光谱技术，准确探测脑皮层氧合血红蛋白和脱氧血红蛋白的浓度变化，实现非侵入性地检测脑血容量，基于神经血管耦合机制，有效反映出大脑的活动状态。";
		var text3 = "可用于脑功能的检测诊断、评估及高级脑功能的研究。";
		details(image1,txet,text1,text2,text3);
	});
	$(".robotDetails").click(function(){
		var image1 = "robot.jpg";
		var txet = "磁刺激智能机器人（Aim. Robot）";
		var text1 = "资联虹康公司控股的锐宝虹康公司自主研发的重点产品，定义了磁刺激的新未来。";
		var text2 = "该智能机器人是一款磁刺激辅助产品，通过空间定位算法，能有效提高磁刺激靶点的精准性。";
		var text3 = "可用于TMS临床精准重复、智能跟随治疗，确保TMS技术治疗效果。此外，该技术还可以作为康复机器人和手术机器人的技术平台。";
		details(image1,txet,text1,text2,text3);
	});
	$(".neuroaimDetails").click(function(){
		var image1 = "neuroaim.jpg";
		var txet = "光学导航系统（Neuroaim）";
		var text1 = "联合德国知名导航软件设计商ANT公司专为中国市场联合定制设计的一款导航设备。";
		var text2 = "该产品利用物理光学测量方法，重建高精度3D头模，快速实现TMS精准、重复刺激。";
		var text3 = "";
		details(image1,txet,text1,text2,text3);
	});	
	$(".tdcsDetails").click(function(){
		var image1 = "tdcs.jpg";
		var txet = "微电流刺激仪";
		var text1 = "资联虹康公司旗下控股的亿迈科技公司的核心专利产品。";
		var text2 = "该产品利用恒定、低强度的电流调制大脑皮层神经元活动的技术，实现大脑的非侵入性治疗。";
		var text3 = "可应用于失眠、抑郁、焦虑等症状的改善治疗。也可以用于相关领域的临床科研。";
		details(image1,txet,text1,text2,text3);
	});
	$(".ctDetails").click(function(){
		var txet = "精神心理智能测评系统(心理CT)";
		var text1 = "资联虹康公司在国际著名的心理测验量表“明尼苏达多项人格调查问卷（MMPI）”的基础上研究开发的软件产品。";
		var text2 = "该产品通过人机（电脑）对话来较全面反应人心理健康和心理素质状态。";
		var text3 = "可广泛应用于精神卫生、心身医学、心理咨询、学业咨询、职业咨询、婚姻咨询、犯罪心理、特殊人员选拔等诸多领域的心理测查与分析。";
		noneImgDetails(txet,text1,text2,text3);
	});
	$(".hulubaoDetails").click(function(){
		var image1 = "hulubao.jpg";
		var txet = "呼噜宝（睡眠治疗仪）";
		var text1 = "资联虹康公司旗下控股的呼噜科技公司是以睡眠健康为核心内容的专业性的网络运营商。";
		var text2 = "呼噜宝是一款独家专利的睡眠治疗产品。";
		var text3 = "该产品通过低频电流刺激，促进神经递质的分泌和传递，从而改善患者的睡眠质量。";
		details(image1,txet,text1,text2,text3);
	});
}

//带图产品详情
var  details = function(image1,txet,text1,text2,text3){
	var text = "<div class='product-details'><img id='closeBtn' src='img/close.png' /><img src='img/"+ image1 +"'/><h3>"+txet+"</h3><p>" + text1 + "</p><p>"+ text2 + "</p><p>" + text3 +"</p></div>";
	$("body").append(text);
	$("#closeBtn").click(function(){
		$(".product-details").remove();
	});
}

//无图产品详情
var  noneImgDetails = function(txet,text1,text2,text3){
	var text = "<div class='none-details'><img id='closeBtn' src='img/close.png' /><h3>"+txet+"</h3><p>" + text1 + "</p><p>"+ text2 + "</p><p>" + text3 +"</p></div>";
	$("body").append(text);
	$("#closeBtn").click(function(){
		$(".none-details").remove();
	});
}
