const Nav = {
    render: function(args) {
        this.validate(args)

        const classNav  = args.classNav || ''

        return `
			<ul class="${classNav}">
				${this.fragmentlist(args.data)}
			</ul>
		`
    },
    validate: function(dataObj) {
        if (dataObj === undefined || dataObj === null || dataObj !== "object") {
            return false
        } else if (dataObj.data === '') {
            return false
        }
    },
	fragmentlist: function(data) {
		let fragmentList = '', i = 0

		for(i = 0; i < data.length; i++) {
			let dataItem = data[i],
			dataClass	= dataItem.class || '',
			dataLabel	= dataItem.label || ''

			if(dataItem.link !== '') {
				dataLabel = `<a href='${dataItem.link}'>${dataLabel}</a>`
			}

			fragmentList += `
				<li class='${dataClass}'>${dataLabel}</li>
			`
		}

		return fragmentList
	}
}

export default Nav