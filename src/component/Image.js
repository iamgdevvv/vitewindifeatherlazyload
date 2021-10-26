const Image = {
	render: function(args) {
		this.validate(args)

		const src           = args.src || ''
		const alt           = args.alt || ''
		const link			= args.link || ''
		const classImg      = args.class || ''
		const classwrapper  = args.classwrapper || ''

		let elImg = `<img data-src="${src}" alt="${alt}" class="lazy ${classImg}" />`

		if(link !== '') {
			elImg = `<a href='${link}'>${elImg}</a>`
		}

		return `
			<figure class="image-wrapper ${classwrapper}">
				${elImg}
			</figure>
		`
	},
	validate: function(dataObj) {
		if (dataObj === undefined || dataObj === null || dataObj !== "object") {
			return false
		} else if (dataObj.src === '' || dataObj.src === undefined) {
			return false
		}
	}
}

export default Image