import Image from '../component/Image'

import './style/header.css'

const dataLogo = {
	classwrapper: 'site-logo',
	src: '/images/logo-white-site.svg',
	alt: 'Logo Site'
}

const elHeader = `
	<header id='site-header' class='site-header'>
		<div class='container'>
			<a href='/' class='site-branding'>${Image.render(dataLogo)}<span>Site</span></a>
			<button class='site-search'>
				<i data-feather='search'></i>
			</button>
		</div>
	</header;
`

document.getElementById("site").insertAdjacentHTML('beforeend', elHeader)