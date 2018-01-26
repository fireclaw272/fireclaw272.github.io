window.onload = function (){
	var randomCoin = Math.floor(Math.random()*12);
	console.log(randomCoin);
	var coins = [];
	for(var i = 0; i<11; i++){
		if(i == randomCoin){
			var heavyOrLight = Math.floor(Math.random()*2);
			if(heavyOrLight == 0){
				coins.push({
					weight:0.5,
				})
				console.log("lighter");
			}
			else{
				coins.push({
					weight:1.5,
				})
				console.log("heavier");
			}
		}
		coins.push({
			weight:1,
		})
	}
	console.log(coins);
	
	var leftBank = [false,false,false,false,false,false,false,false,false,false,false,false];
	var rightBank = [false,false,false,false,false,false,false,false,false,false,false,false];
	var leftSideBank = document.getElementById("leftSideBank");
	var rightSideBank = document.getElementById("rightSideBank");
	
	var selectedCoin;
	function press(event){//if event.button = 0 then left click , if = 2 then right click
		selectedCoin = this.innerHTML
		if(selectedCoin.length == 9){
			selectedCoin = this.innerHTML.slice(3,5);
		}
		else{
			selectedCoin = this.innerHTML.slice(3,4);
		}
		console.log(selectedCoin);
		
		if(event.button == 0 && this.style.color == "blue"){
				return
		}
		if(event.button == 2 && this.style.color == "red"){
				return
		}
		while (leftSideBank.childElementCount > 1) {
			  leftSideBank.removeChild(leftSideBank.lastChild);
		}
		
		while (rightSideBank.childElementCount > 1) {
			  rightSideBank.removeChild(rightSideBank.lastChild);
		}
		
		if(event.button == 0){
			if(this.style.color == "blue"){
				return
			}
			this.style.color = "blue";
			leftBank[selectedCoin-1] = true;
			
			/*while (leftSideBank.hasChildNodes()) {
			  leftSideBank.removeChild(leftSideBank.lastChild);
			}*/
			
			for(var i = 0; i<12; i++){
				if(leftBank[i]){
					rightBank[i] = false;		
					var paragraph = document.createElement("p");
					var text = document.createTextNode(i+1);
					paragraph.appendChild(text)
					paragraph.classList.add("coin","selected");
					document.getElementById('leftSideBank').appendChild(paragraph);
					
				}
				
				if(rightBank[i]){
					var paragraph = document.createElement("p");
					var text = document.createTextNode(i+1);
					paragraph.appendChild(text)
					paragraph.classList.add("coin","selected");
					document.getElementById('rightSideBank').appendChild(paragraph);
					leftBank[i] = false;
				}
			}
			console.log(leftBank);
			
		}
		else if(event.button == 2){
			if(this.style.color == "red"){
				return
			}
			this.style.color = "red";
			rightBank[selectedCoin-1] = true;
			
			/*while (rightSideBank.hasChildNodes()) {
			  rightSideBank.removeChild(rightSideBank.lastChild);
			}*/
			
			for(var i = 0; i<12; i++){
				if(rightBank[i]){
					var paragraph = document.createElement("p");
					var text = document.createTextNode(i+1);
					paragraph.appendChild(text)
					paragraph.classList.add("coin","selected");
					document.getElementById('rightSideBank').appendChild(paragraph);
					leftBank[i] = false;
				}
				
				if(leftBank[i]){
					rightBank[i] = false;		
					var paragraph = document.createElement("p");
					var text = document.createTextNode(i+1);
					paragraph.appendChild(text)
					paragraph.classList.add("coin","selected");
					document.getElementById('leftSideBank').appendChild(paragraph);
					
				}
			}
			console.log(leftBank);
		}
	};
	document.getElementById('coin1').addEventListener('mousedown', press);
	document.getElementById('coin2').addEventListener('mousedown', press);
	document.getElementById('coin3').addEventListener('mousedown', press);
	document.getElementById('coin4').addEventListener('mousedown', press);
	document.getElementById('coin5').addEventListener('mousedown', press);
	document.getElementById('coin6').addEventListener('mousedown', press);
	document.getElementById('coin7').addEventListener('mousedown', press);
	document.getElementById('coin8').addEventListener('mousedown', press);
	document.getElementById('coin9').addEventListener('mousedown', press);
	document.getElementById('coin10').addEventListener('mousedown', press);
	document.getElementById('coin11').addEventListener('mousedown', press);
	document.getElementById('coin12').addEventListener('mousedown', press);
	
	document.addEventListener('contextmenu', event => event.preventDefault());
	//--------------------------------------------------- reset button
	
	var reset = document.getElementById('reset');
	
	function resetBanks(){
		var coinStyle = document.getElementsByClassName('coin');
		for(var i = 0; i<12; i++){
			coinStyle[i].style.color = "black";
			leftBank[i] = false;
			rightBank[i] = false;
		}
		while (leftSideBank.childElementCount > 1) {
			  leftSideBank.removeChild(leftSideBank.lastChild);
		}
		
		while (rightSideBank.childElementCount > 1) {
			  rightSideBank.removeChild(rightSideBank.lastChild);
		}
		
	}
	reset.addEventListener('click', resetBanks);
	
	//-------------------------------------------------------- weigh button
	
	var weigh = document.getElementById('weigh');
	
	function weighCoins() {
		var leftWeight = 0;
		var rightWeight = 0;
		for(var i =0; i<12;i++){
			if(leftBank[i]){
				leftWeight += coins[i].weight;
				console.log(leftWeight);
			}
			if(rightBank[i]){
				rightWeight += coins[i].weight;
				console.log(rightWeight);
			}
		}
		
		var leftIcon = document.getElementById('leftIcon');
		var rightIcon = document.getElementById('rightIcon');
		if(leftWeight == rightWeight){
			leftIcon.src = "images/equalSign.png";
			rightIcon.src = "images/equalSign.png";
		}
		else if(leftWeight < rightWeight){
			leftIcon.src = "images/upArrow.png";
			rightIcon.src = "images/downArrow.png";
		}
		else{
			leftIcon.src = "images/downArrow.png";
			rightIcon.src = "images/upArrow.png";
		}
		
		resetBanks();
	}
	
	weigh.addEventListener('click', weighCoins);
	
	//------------------------------------------------------------ Guess Coin
	
	var answer = document.getElementById('answer');
	
	function promptAnswer(){
		var response = prompt("Which coin is different? (Enter number from 1 to 12)");
		if(isNaN(response) || response > 12 || response <1){
			alert("You did not input a valid answer");
			return;
		}
		if(response == randomCoin + 1){
			alert("You are correct!")
		}
		else{
			alert("Sorry, your choice was incorrect.")
		}
	}
	
	answer.addEventListener('click', promptAnswer);
	
	
	
	
	
	
	
	
	
	
}