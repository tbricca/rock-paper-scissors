
var radio1=document.getElementById ("rockRadio")
var radio2=document.getElementById ("paperRadio")
var radio3=document.getElementById ("scissorRadio")
var notificationUpdate = document.getElementById ("notificationCenter")
var playerChoice = ""

$('#rockRadio').click(function(){
	$("#rockRadio").is(':checked');
	$("#the-rock").fadeIn();
	$("#paper").css("display","none");
	$("#scissor").css("display","none");
	$("#notificationCenter").text("Click Submit to Face Your Destiny");

	playerChoice=$("#the-rock");
});

$('#paperRadio').click(function(){
	$("#paper").fadeIn();
	$("#the-rock").css("display","none");
	$("#scissor").css("display","none");
	$("#notificationCenter").text("Click Submit to Face Your Destiny");

	playerChoice=$("#paper");
});

$('#scissorRadio').click(function(){
	$("#scissor").fadeIn();
	$("#the-rock").css("display","none");
	$("#paper").css("display","none");
	$("#notificationCenter").text("Click Submit to Face Your Destiny");

	playerChoice=$("#scissor");
});

var randomNumber = 0;
$("#submit").click(function(){
	$("#three").fadeIn(500).fadeOut(500, function() {
		$("#two").fadeIn(500).fadeOut(500, function() {
			$("#one").fadeIn(500).fadeOut(500);
		});	
	});
	$(".p1-image").css("display","none");
	$('#submit').attr('disabled','disabled');
	randomNumber = (Math.floor(Math.random() * 3) + 1);
	setTimeout (function(){
		computerChoice();
		determineWinner();
	}, 3500);
	setTimeout (function (){
		automaticRefresh ();
	}, 7000);
});	

var computerChoice = function() {
	if (randomNumber === 1) {
		$("#the-rock2").fadeIn();
		$("#paper2").css("display","none");
		$("#scissor2").css("display","none");
		playerChoice.fadeIn();
	}
	else if (randomNumber === 2) {
		$("#paper2").fadeIn();
		$("#the-rock2").css("display","none");
		$("#scissor2").css("display","none");
		playerChoice.fadeIn();
	}
	else if (randomNumber === 3) {
		$("#scissor2").fadeIn();
		$("#the-rock2").css("display","none");
		$("#paper2").css("display","none");
		playerChoice.fadeIn();

	}
};

var p1Win = function () {
	$('#p1Score').text(Number($('#p1Score').text())+1);
}
var compWin = function () {
	$('#p2Score').text(Number($('#p2Score').text())+1);
}

determineWinner = function () { 
	if (randomNumber === 1 && radio1.checked){
		$("#notificationCenter").text("Tie Game!");
	}
	else if (randomNumber === 1 && radio2.checked){
		$("#notificationCenter").text("Player 1 Wins!");
		p1Win();
	}
	else if (randomNumber === 1 && radio3.checked){
		$("#notificationCenter").text("Computer Wins!");
		compWin();
	}
	else if (randomNumber === 2 && radio1.checked){
		$("#notificationCenter").text("Computer Wins!");
		compWin();
	}
	else if (randomNumber === 2 && radio2.checked){
		$("#notificationCenter").text("Tie Game!");
	}
	else if (randomNumber === 2 && radio3.checked){
		$("#notificationCenter").text("Player 1 Wins!");
		p1Win();
	}
	else if (randomNumber === 3 && radio1.checked){
		$("#notificationCenter").text("Player 1 Wins!");
		p1Win();
	}
	else if (randomNumber === 3 && radio2.checked){
		$("#notificationCenter").text("Computer Wins!");
		compWin();
	}
	else if (randomNumber === 3 && radio3.checked){
		$("#notificationCenter").text("Tie Game!");
	}
}

automaticRefresh = function () { 
	$("#the-rock").css("display","none");
	$("#paper").css("display","none");
	$("#scissor").css("display","none");
	$("#the-rock2").css("display","none");
	$("#paper2").css("display","none");
	$("#scissor2").css("display","none");
	$("#notificationCenter").text("Player 1 Select Your Weapon");
	$('#rockRadio').removeAttr("checked");
	$('#paperRadio').removeAttr("checked");
	$('#scissorRadio').removeAttr("checked");
	$('#submit').removeAttr('disabled');
}

$("#reset").click(function(){
	automaticRefresh ();
	$('#p1Score').text(Number($('p1Score').text())*0);
	$('#p2Score').text(Number($('p2Score').text())*0);
})
