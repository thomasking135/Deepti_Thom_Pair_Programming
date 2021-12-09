//This file will contain our JS functions

//It might be a link to something we are passionate about

//Or it might be a button that performs an operation, i.e. performing a task
function picture(){ 
    var pic = "assets/granFun.jpg"
    document.getElementById('fun').src = pic.replace('90x90', '225x225');
    document.getElementById('fun').style.display='block';

    }

    var entries = [];
var total = 0;

var temp = '';
$("button").on('click', function() {
 	var val = $(this).text();

  // Got a number, add to temp
  if (!isNaN(val) || val === '.') {
    temp += val;
    $("#answer").val(temp.substring(0,10));
    
  // Got some symbol other than equals, add temp to our entries
  // then add our current symbol and clear temp
  } else if (val === 'AC') {
    entries = [];
    temp = '';
    total = 0;
    $("#answer").val('')

  // Clear last entry
  } else if (val === 'CE') {
    temp = '';
    $("#answer").val('')
    
  // Change multiply symbol to work with eval
  } else if (val === 'x') {
    entries.push(temp);
    entries.push('*');
    temp = '';
    
  // Change divide symbol to work with eval
  } else if (val === '÷') {
    entries.push(temp);
    entries.push('/');
    temp = '';

  // Got the equals sign, perform calculation
  } else if (val === '=') {
  	entries.push(temp);

    var nt = Number(entries[0]);                // assumes user always keys in a number first. Tested out the app and it's not happy if you key in NaN first
    for (var i = 1; i < entries.length; i++) {
      var nextNum = Number(entries[i+1])
      var symbol = entries[i];
      
      if (symbol === '+') { nt += nextNum; } 
      else if (symbol === '-') { nt -= nextNum; } 
      else if (symbol === '*') { nt *= nextNum; } 
      else if (symbol === '/') { nt /= nextNum; }
      
      i++;
    }
    
    // Swap the '-' symbol so text input handles it correctly
    if (nt < 0) {
      nt = Math.abs(nt) + '-';
    }
    
    $("#answer").val(nt);                       // shows results
		entries = [];
    temp = '';
    
  // Push number
  } else {
    entries.push(temp);
    entries.push(val);
    temp = '';
  }
});