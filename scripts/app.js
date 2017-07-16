var firstSentence = 'You pack a few items and you set out at first light to take a boat down the missouri river.  The river is calm and all is going well.  Suddenly your boat starts to pitch and you hit some rapids.  You are overturned and you fall into the river.  You manage to swim to shore but your boat drifts down river.  Do you follow the river in hopes of finding your boat or do you walk back home to take your horse instead?';
var secondSentence = 'You hop on your horse and head out in the plains.  The days are long and the nights are longer.  Finally, you come across a homestead but it looks abdondoned.  There is a river behind the house.  You go to get your horse but it wandered off.  Do you walk down river or do you find your horse and continue ride on with your horse?';
var thirdSentence = 'You start walking down river and you come across a trader.  Good news!  He is going to show you to the next town, but for a fee, your gun. Do you walk on or give up your gun?';
var fourthSentence = 'You walk back home but now four days have past, it looks like it is going to start storming.  Do you leave or try to survive at home throught winter?';
var fifthSentence = 'You walk on by the trader and behold!  You come across the village!  You will survive!';
var sixthSentence = 'Walk onward to the unknown';


window.onload = function(event) {

  var nameInput = document.getElementById('first_name');
  var nameBtn = document.getElementById('name_btn');
  var firstChoice = document.getElementById('choice-one'); 
  var secondChoice = document.getElementById('choice-two');
  var thirdChoice = document.getElementById('choice-three'); 
  var fourthChoice = document.getElementById('choice-four');
  var fifthChoice = document.getElementById('choice-five'); 
  var sixthChoice = document.getElementById('choice-six');

  firstChoice.onclick = function(event) {
  	createRow(firstSentence);
  	document.getElementById('first-step').style.display = 'none';
  }

  secondChoice.onclick = function(event) {
  	createRow(secondSentence);
  	document.getElementById('first-step').style.display = 'none';
  }

  thirdChoice.onclick = function(event) {
    createRow(thirdSentence);
    document.getElementById('second-step').style.display = 'none';
  }

  fourthChoice.onclick = function(event) {
    createRow(fourthSentence);
    document.getElementById('second-step').style.display = 'none';
  }

  fifthChoice.onclick = function(event) {
    createRow(fifthSentence);
    document.getElementById('third-step').style.display = 'none';
  }

  sixthChoice.onclick = function(event) {
    createRow(sixthSentence);
    document.getElementById('third-step').style.display = 'none';
  }


  nameBtn.onclick = function(event) {
    // console.log(event);
    console.log(nameInput.value);
    createRow('Welcome aboard, ' + nameInput.value);
  }

  console.log(nameInput, nameBtn);

}

// this function creates and adds rows to our app
function createRow(words) {
  console.log(words);
  // we need a new div
  var row = document.createElement('div');
  var col = document.createElement('div');
  var p = document.createElement('p');
  p.innerHTML = words;
  row.append(col);
  row.className = 'row';
  col.className = 'col s12';
  col.append(p);
  console.log(row);
  // append the whole thing to app
  var app = document.getElementById('app');
  app.append(row);
}



// }