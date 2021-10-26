import './style/main.css'

const leMain = `
	<main id='site-main' class='site-main'>
		<div class='container'>
            Hello World
		</div>
	</main;
`

document.getElementById("site").insertAdjacentHTML('beforeend', leMain)