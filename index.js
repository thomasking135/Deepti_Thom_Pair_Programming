// document.getElementById('result').value += 0;
const operator = ['/', '*', '.', '+', '-'];

function show(value) {
  const showScreen = document.getElementById('result');
  const showScreenSize = showScreen.value.length;
  if (showScreen.value[0] === '0') {
    showScreen.value = '';
  } else if (operator.includes(showScreen.value[showScreenSize - 1]) && operator.includes(value)) {
    return;
  }
  // console.log(operator.includes(showScreen.value[showScreenSize - 1]));
  console.log(showScreen.value[showScreenSize - 1]);
  showScreen.value += value;
  // showScreen.value += value;
}

function result() {
  let showValue = document.getElementById('result').value;
  let result = eval(showValue);
  document.getElementById('result').value = result;
}
const buttons = document.querySelectorAll('.buttons');

for (const button of buttons) {
  if (button.id === 'clear') {
    button.addEventListener('click', function () {
      document.getElementById('result').value = '0';
    });
  } else if (button.id === 'equals') {
    button.addEventListener('click', function () {
      result();
    });
  } else {
    button.addEventListener('click', function () {
      show(button.innerHTML);
    });
  }
}
