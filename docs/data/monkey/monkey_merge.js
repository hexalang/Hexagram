// Merge all monkey animations to save on HTTP requests and performance

var pako = require('./pako_deflate.min.js')
var fs = require('fs')

var monkeys = [
	'TwoFactorSetupMonkeyClose',
	'TwoFactorSetupMonkeyCloseAndPeek',
	'TwoFactorSetupMonkeyPeek',
	'TwoFactorSetupMonkeyIdle',
	'TwoFactorSetupMonkeyCloseAndPeekToIdle',
	'TwoFactorSetupMonkeyTracking'
]

var inputs = [];
var pos = [];
var sizes = [];
var offset = 0;
for (let monkey of monkeys) {
	var buf = fs.readFileSync(monkey + '.json')
	inputs.push(buf)
	pos.push(offset)
	sizes.push(buf.length)
	offset += buf.length
}

var input = Buffer.concat(inputs)
var result = pako.deflate(input);

console.log('input:', input.length, 'result:', result.length)
console.log('offsets:', pos)
console.log('sizes:', sizes)
fs.writeFileSync('monkey.tgss', result)
