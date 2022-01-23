let screen = document.getElementById('screen');
let result = document.getElementById('result');
const buttons = document.querySelectorAll("#buttons button");

for (const button of buttons) {
  button.addEventListener('click', function(e) {
      e.preventDefault();
      
      console.log(e.target.dataset);
      
      if (e.target.dataset.key == 'equal') {
          result.textContent = eval(screen.textContent);
          if (result.textContent.length > 8) {
              result.textContent = eval(screen.textContent).toFixed(8);
          }
      } else if (e.target.dataset.key == 'clear') {
          screen.textContent = '';
          result.textContent = '';
      } else {
          screen.textContent = screen.textContent + e.target.dataset.key;
      }   
  });
}