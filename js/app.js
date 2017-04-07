// wait for the DOM to finish loading
$(document).ready(function() {

// Alternating turns

function playerTurn(){
	let turn = true;
		// If turn is true, player 1 goes
	if(turn){
  		console.log('Ready Player One');
  		}
  	  	// If false, player 2 goes
  		else{
  		console.log('Ready Player Two');
  		}
  		// Alternate turn, toggle turn to false if true, turn false to true
  	turn = !turn;
}

// Calling playerTurn
playerTurn();

// Click Events
  	$('.col').on('click', playerOne); 

  	function playerOne() {
		$('#a').text('O');
	}

	$('.col').on('click', playerTwo); 

  	function playerTwo () {
		$('#b').text('X');
	}


// Logic - Player One Win Scenarios

function pOneWin(){
  	if($('#a').text() === 'O' && $('#b').text() === 'O' && $('#c').text() === 'O'){
  		console.log('Player 1 Wins');
  	}
  	else if($('#d').text() === 'O' && $('#e').text() === 'O' && $('#f').text() === 'O'){
  		console.log('Player 1 Wins');
  	}
  	else if($('#g').text() === 'O' && $('#h').text() === 'O' && $('#i').text() === 'O'){
  		console.log('Player 1 Wins');
  	}
  	else if($('#a').text() === 'O' && $('#d').text() === 'O' && $('#g').text() === 'O'){
  		console.log('Player 1 Wins');
  	}
  	else if($('#b').text() === 'O' && $('#e').text() === 'O' && $('#h').text() === 'O'){
  		console.log('Player 1 Wins');
  	}
  	else if($('#c').text() === 'O' && $('#f').text() === 'O' && $('#i').text() === 'O'){
  		console.log('Player 1 Wins');
  	}
  	else if($('#a').text() === 'O' && $('#e').text() === 'O' && $('#i').text() === 'O'){
  		console.log('Player 1 Wins');
  	}
  	else if($('#c').text() === 'O' && $('#e').text() === 'O' && $('#g').text() === 'O'){
  		console.log('Player 1 Wins');
  	}

}// Logic - Player One Win Scenarios

function pTwoWin(){
  	if($('#a').text() === 'X' && $('#b').text() === 'X' && $('#c').text() === 'X'){
  		console.log('Player 1 Wins');
  	}
  	else if($('#d').text() === 'X' && $('#e').text() === 'X' && $('#f').text() === 'X'){
  		console.log('Player 1 Wins');
  	}
  	else if($('#g').text() === 'X' && $('#h').text() === 'X' && $('#i').text() === 'X'){
  		console.log('Player 1 Wins');
  	}
  	else if($('#a').text() === 'X' && $('#d').text() === 'X' && $('#g').text() === 'X'){
  		console.log('Player 1 Wins');
  	}
  	else if($('#b').text() === 'X' && $('#e').text() === 'X' && $('#h').text() === 'X'){
  		console.log('Player 1 Wins');
  	}
  	else if($('#c').text() === 'X' && $('#f').text() === 'X' && $('#i').text() === 'X'){
  		console.log('Player 1 Wins');
  	}
  	else if($('#a').text() === 'X' && $('#e').text() === 'X' && $('#i').text() === 'X'){
  		console.log('Player 1 Wins');
  	}
  	else if($('#c').text() === 'X' && $('#e').text() === 'X' && $('#g').text() === 'X'){
  		console.log('Player 1 Wins');
  	}
}







});
