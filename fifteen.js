window.onload = Start;
this.unsolved = [];
this.solved = [];
this.shuffled = false;
this.match = false;

function Start(){
	this.puzzle = document.getElementById("puzzlearea");
	this.pieces = puzzle.getElementsByTagName("div");
	for (i=0; i<pieces.length; i++){
		pieces[i].className = "puzzlepiece";
	}
	this.blankarea = document.createElement("div");
	blankarea.id = "blank"
	puzzle.appendChild(blankarea);
	this.puzzlepieces = puzzle.getElementsByTagName("div");
	UnShuffled();
	this.shuffler = document.getElementById("shufflebutton");
	shuffler.onclick = Shuffled; //click shuffle button to shuffle puzzle
	for (i=0; i < puzzlepieces.length; i++){
		unsolved.push(new Object(puzzlepieces[i]));
		solved.push(new Object(puzzlepieces[i]));
	}
}

function UnShuffled(){
	setBoard(puzzlepieces);
	puzzlepieces[0].style.backgroundPosition = "0px 0px";
	puzzlepieces[1].style.backgroundPosition = "-96px 0px";
	puzzlepieces[2].style.backgroundPosition = "-192px 0px";
	puzzlepieces[3].style.backgroundPosition = "-288px 0px";
	puzzlepieces[4].style.backgroundPosition = "0px 288px";
	puzzlepieces[5].style.backgroundPosition = "-96px 288px";
	puzzlepieces[6].style.backgroundPosition = "-192px 288px";
	puzzlepieces[7].style.backgroundPosition = "-288px 288px";
	puzzlepieces[8].style.backgroundPosition = "0px 192px";
	puzzlepieces[9].style.backgroundPosition = "-96px 192px";
	puzzlepieces[10].style.backgroundPosition = "-192px 192px";
	puzzlepieces[11].style.backgroundPosition = "-288px 192px";
	puzzlepieces[12].style.backgroundPosition = "0px 96px";
	puzzlepieces[13].style.backgroundPosition = "-96px 96px";
	puzzlepieces[14].style.backgroundPosition = "-192px 96px";
}

function setBoard(array){
	i=0; //changing value of left
	j=0; //changes value of bottom
	p=0; //puzzle counter
	while(p<array.length){
		array[p].style.bottom = (300-j) + "px";
		array[p].style.left = i + "px";
		i=i+100;
		p++;
		if(i>=400){
			i=0;
			j=j+100; //change the position of bottom
		}}
}

function ReadyToPlay(){
	match = checkWinner();
	if (match === false){
		tile = this;//unsolved[position];
		alert("showing tile " +tile);
		//match = checkWinner();
		TileMove(tile);
	}}
		
function Shuffled(){
	unsolved.sort(randOrder);
	var nSum = 0;

	for(var i=0; i<unsolved.length; i++){
		for (var j=i; j<unsolved.length; j++){
			if(unsolved[j] < unsolved[i]){
				nSum++;}}}
	if (Math.floor(nSum/2) != nSum/2){
		needSwap = true;	// puzzle is not solvable make one more swap of values
		for (var i = 0; (i < unsolved.length) && needSwap; i++) {
			for (var j = i; j<unsolved.length && needSwap; j++) {
				if (unsolved[j] > unsolved[i]){
					temp=unsolved[j];
					unsolved[j]=unsolved[i];
					unsolved[i]=temp; 
					needSwap=false;}
			}}}
	shuffled = true;
	setBoard(unsolved);  //set the board with the unsorted tiles
	for (i=0; i < unsolved.length; i++){
		unsolved[i].onclick = ReadyToPlay;
		}
}

function randOrder(){
   return 0.5 - Math.random();
}

function TileMove(tile){
	this.blank = document.getElementById("blank");
	alert("tile " + tile.style.bottom)
	alert("blank top is "+blank.style.bottom);
	if((parseInt(tile.style.bottom)-100) === (parseInt(blank.style.bottom))){
		Movable(tile);
		tile.onclick = TileDown(tile);
	}else if((parseInt(tile.style.bottom)+100) === (parseInt(blank.style.bottom))){
		Movable(tile);
		tile.onclick = TileUp(tile);
	}else if((parseInt(tile.style.left)-100) === (parseInt(blank.style.left))){
		Movable(tile)
		tile.onclick = TileRight(tile);
	}else if((parseInt(tile.style.left)+100) === (parseInt(blank.style.left))){
		Movable(tile)
		tile.onclick = TileLeft(tile);		
	}
}

function Movable(tile){
	tile.className = "movablepiece";
}

function TileDown(tile){ //moves tile down
	tile.style.bottom = (parseInt(tile.style.bottom) - 100) +"px";
	blank.style.bottom = (parseInt(blank.style.bottom) + 100) +"px";
}

function TileUp(tile){ //moves tile up
	tile.style.bottom = (parseInt(tile.style.bottom) + 100) +"px";
	blank.style.bottom = (parseInt(blank.style.bottom) - 100) +"px";
}

function TileLeft(tile, blank){ //moves tile left
	tile.style.left = (parseInt(tile.style.left) - 100) +"px";
	blank.style.left = (parseInt(blank.style.left) + 100) +"px";
}

function TileRight(tile){ //moves tile right
	tile.style.left = (parseInt(tile.style.left) + 100) +"px";
	blank.style.left = (parseInt(blank.style.left) - 100) +"px";
}

function checkWinner(){
	i=0;
	while(i< unsolved.length){
	//for(var i=0; i<=unsolved.length; i++){
		alert("enter the loop, checking " + unsolved[i] +" and "+solved[i])
		if(unsolved[i]!== solved[i]){
			alert("they are not equal")
			return false;
			break;
		}
	return true;     //game won
	alert('puzzle complete!');
	//var winner = document.getElementById("puzzlearea");
	//puzzle.style.backgroundImage = "url(https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTro_my883-cb88z7-3TJ9rPUwOGCA8OvSmeY6CF13nG-JiB7E-wA)";
	}}
