// Hexagram
// Copyright (C) 2020  Oleg Petrenko
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation, version 3 of the License.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

const header =
`// Hexagram
// Copyright (C) 2020  Oleg Petrenko
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation, version 3 of the License.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

import TdClient, { TdObject } from 'tdweb'

`

const fs = require('fs')
const path = require('path')
console.log('start...')

const lines = fs.readFileSync('./hexagram-react/td_api.tl.txt').toString()
	.split('\r').join('')
	.split('  ').join(' ')
	.split('\t').join(' ')
	.split('\n')
	// Empty
	.filter(line => line.trim().length > 0)
	// Default types
	.filter(line => !line.startsWith('double ?'))
	.filter(line => !line.startsWith('string ?'))
	.filter(line => !line.startsWith('int32 ='))
	.filter(line => !line.startsWith('int53 ='))
	.filter(line => !line.startsWith('int64 ='))
	.filter(line => !line.startsWith('bytes ='))
	.filter(line => !line.startsWith('boolFalse ='))
	.filter(line => !line.startsWith('boolTrue ='))
	.filter(line => !line.startsWith('vector {'))

console.log(lines.length, 'lines')

const out = ['// TDLib']
let enums = []
let typesAll = []
let enumName = null

function toTitleCase(named) {
	return named[0].toUpperCase() + named.substr(1)
}

function toCamelCase(named) {
	return named[0].toLowerCase() + named.substr(1)
}

function toType(typea) {
	if (typea == 'string')           return `string`;
	if (typea == 'Bool')             return `boolean`
	if (typea == 'int32')            return `number`
	if (typea == 'int53')            return `number`
	if (typea == 'int64')            return `string`
	if (typea == 'bytes')            return `Uint8Array`
	if (typea == 'vector<int32>')    return `ReadonlyArray<number>`
	if (typea == 'vector<int53>')    return `ReadonlyArray<number>`
	if (typea == 'vector<int64>')    return `ReadonlyArray<string>`
	if (typea == 'vector<string>')   return `ReadonlyArray<string>`
	if (typea == 'vector<bytes>')   return `ReadonlyArray<Uint8Array>`
	if (typea == 'double')           return `number`
	if (typea.startsWith('vector<vector<')) return 'ReadonlyArray<ReadonlyArray<TL' + toTitleCase(typea.split('<')[2].split('>')[0]) + '>>'
	if (typea.startsWith('vector<')) return 'ReadonlyArray<TL' + toTitleCase(typea.split('<')[1].split('>')[0]) + '>'
	return 'TL' + toTitleCase(typea)
}

// Objects
while (lines.length > 0) {
	const line = lines.shift()
	if (line == '---functions---') break
	if (line.startsWith('//')) continue

	let lined = line.split(' = ')
	let params = lined[0].split(' ')
	let typed = lined[1].replace(';', '')

	if (enumName != null && enumName != typed) {
		if (enums.length > 1) out.push('export type TL' + enumName + ' = ' + enums.join(' | '))
		enumName = null
		enums = []
	}

	enumName = typed
	let named = params.shift()
	let namedTitle = toTitleCase(named)
	enums.push('TL' + namedTitle)

	typesAll.push(named)
	out.push(`export interface TL${namedTitle} extends TLObject {`)
	out.push(`\treadonly "@type": "${named}"`)

	for (const param of params) {
		const namea = param.split(':')[0]
		const typea = param.split(':')[1]
		let arg = `\treadonly ${namea}: `
		arg += toType(typea)
		out.push(arg)
	}

	out.push(`}`)
	out.push(`export function ${named}(object: TLObject): TL${namedTitle} { return object as TL${namedTitle} }`)

	if(!typed) {console.log(line);break;}

	if (line.startsWith('//@description ')) {
		out.push(line.substring())
	}

	// TODO ; may be null
}

// Functions

out.push(`export class TD {
	public readonly client: TdClient
	public constructor(client: TdClient) {
		this.client = client
	}`)

while (lines.length > 0) {
	const line = lines.shift()

	if (line.startsWith('//')) continue

	let lined = line.split(' = ')
	let params = lined[0].split(' ')
	let typed = lined[1].replace(';', '')
	let named = params.shift()

	let args = []
	for (const param of params) {
		const namea = param.split(':')[0]
		const typea = param.split(':')[1]
		let arg = `${namea}: `
		arg += toType(typea)
		args.push(arg)
	}

	let namedTitle = toTitleCase(typed)
	out.push(`\n\tpublic async ${named}(${args.join(', ')}): Promise<TL${typed}> {`)

	out.push(`\t\treturn (await this.client.send({`)
	out.push(`\t\t\t"@type": "${named}",`)
	for (const param of params) {
		const namea = param.split(':')[0]
		out.push(`\t\t\t"${namea}": ${namea},`)
	}
	out.push(`\t\t} as any as TdObject)) as any as TL${namedTitle}`)
	out.push(`\t}`)
}

out.push(`}\n`)

out.unshift('}')
out.unshift(`	readonly "@type": "${typesAll.join('" |\n\t"')}"`)
out.unshift('export interface TLObject {')

fs.writeFileSync('./hexagram-react/src/tdlib/tdapi.ts', header + out.join('\n'))
console.log('done.')
