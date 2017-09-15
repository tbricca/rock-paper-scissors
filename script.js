console.log('Hello frontend');

var notificationUpdate = document.getElementById ("notificationCenter")

// Select your weapon and image appears 

$('#rockRadio').click(function(){
	console.log ('click happened');
	$("#rockRadio").is(':checked');
	$("#the-rock").fadeIn();
	$("#paper").css("display","none");
	$("#scissor").css("display","none");
	$("#notificationCenter").text("Click Submit to Play Your Move");
});

$('#paperRadio').click(function(){
	console.log ('click happened');
	$("#paper").fadeIn();
	$("#the-rock").css("display","none");
	$("#scissor").css("display","none");
	$("#notificationCenter").text("Click Submit to Play Your Move");
});

$('#scissorRadio').click(function(){
	$("#scissor").fadeIn();
	$("#the-rock").css("display","none");
	$("#paper").css("display","none");
	$("#notificationCenter").text("Click Submit to Play Your Move");
});


var randomNumber = 0;
$("#submit").click(function(){
	$("#three").fadeIn(500).fadeOut(500, function() {
		$("#two").fadeIn(500).fadeOut(500, function() {
			$("#one").fadeIn(500).fadeOut(500);
		});	
	});
	
	
	// $("#fight").fadeIn(4000).delay(1000).fadeOut(10);

	$('#submit').attr('disabled','disabled');
	
	randomNumber = (Math.floor(Math.random() * 3) + 1);
	console.log ('math happened ' + randomNumber);
	setTimeout (function(){
		computerChoice();
		determineWinner();
	}, 3500);
	setTimeout (function (){
		automaticRefresh ();
	}, 6000);
});	


var computerChoice = function() {
	console.log ("computer is here");
	if (randomNumber === 1) {
		$("#the-rock2").fadeIn();
		$("#paper2").css("display","none");
		$("#scissor2").css("display","none");
	}
	else if (randomNumber === 2) {
		$("#paper2").fadeIn();
		$("#the-rock2").css("display","none");
		$("#scissor2").css("display","none");
	}
	else if (randomNumber === 3) {
		$("#scissor2").fadeIn();
		$("#the-rock2").css("display","none");
		$("#paper2").css("display","none");
	}
};
var radio1=document.getElementById ("rockRadio")
var radio2=document.getElementById ("paperRadio")
var radio3=document.getElementById ("scissorRadio")

var p1Win = function () {
	$('#p1Score').text(Number($('#p1Score').text())+1);
	console.log ('p1score update');
}

var compWin = function () {
	$('#p2Score').text(Number($('p2Score').text())+1);
}

determineWinner = function () { 
	if (randomNumber === 1 && radio1.checked){
		console.log ('tie game');
		$("#notificationCenter").text("Tie Game!");
	}
	else if (randomNumber === 1 && radio2.checked){
		console.log ('p1 wins');
		$("#notificationCenter").text("Player 1 Wins!");
		p1Win();
	}
	else if (randomNumber === 1 && radio3.checked){
		console.log ('comp wins');
		$("#notificationCenter").text("Computer Wins!");
		compWin();
	}
	if (randomNumber === 2 && radio1.checked){
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
	if (randomNumber === 3 && radio1.checked){
		$("#notificationCenter").text("Computer Wins!");
		compWin();
	}
	else if (randomNumber === 3 && radio2.checked){
		$("#notificationCenter").text("Player 1 Wins!");
		p1Win();
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

/*(function($) {
    var speed = 300;
    var first = 0;
    var pause = 3000;

    function tick() {
        first = $('ul#ticker li:first').html();
        $('ul#ticker li:first').animate({
            height: 0
        }, speed).hide('medium', function() {
            $(this).remove();
            last = '<li>' + first + '</li>';
            $('ul#ticker').append(last);
        });
    }
    $('ul#ticker').click(function() {
        tick();
        return false;
    });
    setInterval(tick, pause);
})*/

/*var winnerNotification = function () {
        $('#notificationCenter').
    };*/


/*var checkForWinner = function () {
	if $('#rockRadio').selected(&& )
}

$('#scissorRadio').click(function(){

For tomorrow: 

- create countdown timer once submit button is hit and random number generator begins 

- create a checkForWinner function to be able to plug it in after submit is clicked 

- have it display on the board when computer wins, p1 wins or when its a tie */
//$("#submit").click(function(){*/
// outcomes 
// rock>scissor>paper>rock -- can i set a value 

/*setTimeout(function(),{3000});*/


