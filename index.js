let screen = document.getElementById('screen');
// let result = document.getElementById('result');
const buttons = document.querySelectorAll("#buttons button");



for (const button of buttons) {
	button.addEventListener('click', function(e) {
			e.preventDefault();
			
			if (e.target.dataset.key == 'equal') {
				screen.textContent = eval(screen.textContent);
				
				if (screen.textContent.length > 8) {
					screen.textContent = eval(screen.textContent).toFixed(8);
				}
				} else if (e.target.dataset.key == 'reset') {
					screen.textContent = '';
				} else if (e.target.dataset.key == 'clear') {
					let clear = screen.textContent.split('');
					clear.pop()
					screen.textContent = clear.join('');
				} else {
					screen.textContent = screen.textContent + e.target.dataset.key;
				}   
	});
}



document.addEventListener('keydown', (event) => {
    var keyValue = event.key;
    var codeValue = event.code;
  
    console.log(keyValue);
    console.log(codeValue);
  }, false);