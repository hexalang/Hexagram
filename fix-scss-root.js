const fs = require('fs')
const path = "docs/static/css/"

fs.readdir(path, function(err, items) {
	console.log(items)

	for (var i = 0; i < items.length; i++) {
		const item = items[i]
		if (item.endsWith('.css')) {
			console.log(item)
			console.log('Fixing root...')
			let file = fs.readFileSync(path + item).toString()
			file = file.split(' url(/').join(' url(../../')
			file = file.split(':url(/').join(':url(../../')
			fs.writeFileSync(path + item, file)
		}
	}
})
