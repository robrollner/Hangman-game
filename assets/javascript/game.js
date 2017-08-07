window.onload = function() {

	var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
        console.log(letters);

    var word ; 				//selected word
    var guess ; 			//guess
    var playerGuess = [ ]; 	//stored guesses

    //Create letter buttons
    var button = function(){
    	letterButtons = document.getElementById('#ltrBtn');
    	letters = document.createElement('div');

    	for (var i = 0; i < letters.length; i++) {
			letters.id = 'letters';
			list = document.createElement('button');
			list.id = 'letter';
    		list.innerHTML[i];
    		check();
    		letterButtons.appendChild(letters);
    		letters.appendChild(list);
    	}
    };
    //create guesses
    result = function () {
    	wordHolder = document.getElementById('hold');
    	correct = document.createElement('ul'); // confrim it works then change to div

    	for (var i = 0; i < word.length; i++) {
    			correct.setAttribute('id', 'my-word');
    			guess = document.createElement('li');
    			guess.setAttribute('class', 'guess');
    			if (word[i] === " ") {
    				guess.innerHTML = " ";
    				space = 1;
    			} else {
    				guess.innerHTML = '_';
    			}
    			playerGuess.push(guess);
    			wordHolder.appendChild(correct);
    			correct.appendChild(guess);
    		}	
    }

    //player lives
    // comments = function () {
    // 	showLives.innerHTML = "You have " + lives + " lives";
    // 	if (lives < 1) {
    // 		showLives.innerHTML = "Game Over";
    // 	}
    // 	for (var i = 0; i < playerGuess.length; i++){
    // 		if (counter + space === playerGuess.length) {
    // 			showLives.innerHTML = "You Win!";
    // 			console.log(showLives);
    // 		}
    // 	}
    // };

    	//Animate Hangman
    	var animate = function () {
    		var drawME = lives ;
    		drawArray[drawME]();
    	}

    	//Hangman

    	canvas = function () {
    		myStickman = document.getElementById('#pictureBox');
    		context = myStickman.getContext('2d');
    		context.beginPath();
    		context.strokeStyle = '#efefef';
    		context.lineWidth = 2;
    	};

    		head = function() {
    		myStickman = document.getElementByid('#pictureBox');
    		context = myStickman.getContext('2d');
    		context.beginPath();
    		context.arc(60, 25, 10, 0, Math.PI*2, true);
    		context.stroke();
		}

		draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
			context.moveTo($pathFromx, $pathFromy);
			context.lineTo($pathTox, $pathToy);
			context.stroke();
		}

		frame1 = function(){
			draw(0, 150, 150, 150);
		};
		
		frame2 = function(){
			draw(10, 0, 10, 600);
		};
		
		frame3 = function(){
			draw(0, 5, 70, 5);
		};
		
		frame4 = function(){
			draw(60, 5, 60, 15);
		};
		
		torso = function(){
			draw(60, 36, 60, 70);
		};
		
		rightArm = function(){
			draw(60, 46, 100, 50);
		};
		
		leftArm = function(){
			draw(60, 46, 20, 50);
		};
		
		rightLeg = function(){
			draw(60, 70, 100, 100);
		};
		
		leftLeg = function(){
			draw(60, 70, 20, 100);
		};

		drawArray = [rightLeg, leftLeg, rightArm, leftArm, torso, head, frame4, frame3, frame2, frame1];

		//OnClick Function
	check = function () {
		list.onclick = function() {
			var playerChoice = (this.innerHTML);
			this.onclick = null;
			for (var i = 0; i < word.length; i++) {
				if (word[i] === playerChoice) {
					playerGuess[i].innerHTML = playerChoice;
					counter += 1;	
				}
			}

			var x = (word.indexOf(playerChoice));
			if (x === -1) {
				lives -=1;
				comments();
				animate();
			} else{
				comments();
			}
		}
	}

		play = function () {
			modernRockBands = ['radiohead', 'nirvana', 'weezer',
			'phish', 'fray', 'beatles', 'kinks',
			'monkees', 'who', 'wings', 'cream',
 			'antibalas', 'soundgarden', 'beck',
 			'cure', 'devotchka', 'david bowie', 'rolling stones'];

 			word = modernRockBands[Math.floor(Math.random() * modernRockBands.length)];
 			button(); 

 			playerGuess = [ ];
 			lives = 10;
 			counter = 0;
 			space = 0;
 			result();
 			//comments();
 			canvas();
		}

		play();

 document.getElementById('reset').onclick = function() {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    showClue.innerHTML = "";
    context.clearRect(0, 0, 400, 400);
    play();
  }
};
// 	var modernRockBands = ['radiohead', 'nirvana', 'weezer',
// 						'phish', 'fray', 'beatles', 'kinks',
// 						'monkees', 'who', 'wings', 'cream',
// 						'antibalas', 'soundgarden', 'beck',
// 						'cure', 'devotchka', 'david bowie', 'rolling stones'];

// 		console.log(modernRockBands);
// // getElementByid('#classRockBands').on("click", )



// var answer = modernRockBands[Math.floor(Math.random()*modernRockBands.length)];
// 	console.log(answer);
// var playerChances = 7;
// 	console.log(playerChances);

// var answerBand = [];
// for (var i = 0; i < answer.length; i++) {
// 	function answer() {
// 		document.getElementByid('classRockBands').innerHTML = answer;
// 		answerBand[i] = "_ ";
// 	}
// };

// var remainingLetters = answer.length;
// 	console.log(remainingLetters);

// while (remainingLetters > 0) {

// }


