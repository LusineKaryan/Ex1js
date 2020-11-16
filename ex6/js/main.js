const button = document.getElementById('button');
const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'rebeccapurple', 'violet'];

function changeBackground(){
	document.body.style.background = rainbow[Math.floor(7 * Math.random())];
	
}

button.addEventListener('click', changeBackground);