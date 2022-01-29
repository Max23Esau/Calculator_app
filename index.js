let screen = document.getElementById('screen');
const buttons = document.querySelectorAll("#buttons button");
let teclas = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', '+', '-', '/', '*', '=', 'Backspace', 'Enter', ' ' ]

function operacion(argument){
	let button = argument;

	if (button === 'x') {
		button = '*'
	}

	if (button == '=') {
		screen.textContent = eval(screen.textContent);
		if (screen.textContent.length > 8) {
			screen.textContent = eval(screen.textContent).toFixed(8);
		}
	} else if (button == 'reset' || button == ' ') {
		screen.textContent = '0';
	} else if (button == 'del') {
		let clear = screen.textContent.split('');
		clear.pop()
		screen.textContent = clear.join('');
	} else {
		screen.textContent = screen.textContent + button;
	}   
}


for (const btn of buttons) {
	btn.onclick = function() {
		operacion(btn.textContent)
	};
} 

document.addEventListener('keydown', (event) => {
	let keyValue = event.key;
	if(teclas.includes(keyValue)){	
		if (keyValue === 'Enter') {
			keyValue = '='
		} else if (keyValue === 'Backspace') {
			keyValue = 'del'
		}
		operacion(keyValue)
	}
	
});