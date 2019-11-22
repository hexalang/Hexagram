;
(function() {
	"use strict"

	console.log('|')
	console.log('| Welcome to the beautiful Hexagram app!')
	console.log('|')


	//	var data = '424D5E070000000000003E00000028000000EF...';
	//	//data = '001010101000102006840016000280001000020000102000000040012B0012B000000000000000000C8961E0C8961E7C8961E48C8961EA7C8961EE4C8961EFBC8961EFBC8961EE4C8961EA8C8961E48C8961E7C8961E000000000C8961E0C8961E0C8961E18C8961E92C8961EEEC8961EFFC8961EFFC8961EFFC8961EFFC8961EFFC8961EFFC8961EEEC9971F92CA982018C9971F0C8961F0C8961E0C8961E18C8961EB0C8961EFFC8961EFFC8961EFFC8961EFFC8961EFFC8961EFFC8961DFFC8961DFFC9971FFFCA9820FFCC9921B0CD9B2318CD9A230C8961E6C8961E92C8961EFFC8961EFFC8961EFFC8961EFFC8961DFFC8961DFFC8961DFFCC9C2AFFCFA132FFCC9921FFCD9A23FFCE9B23FFCF9C2592D19F276C8961E49C8961EEDC8961EFFC8961EFFC8961EFFC99823FFD3AE5DFFCD9F35FFD2A841FFEEDDB6FFEAD5A3FFCE9C25FFCF9C25FFD09D26FFD19E27EDD29F2849C8961EA7C8961EFFC8961EFFC9971FFFC9961DFFCFA137FFE2CDAAFFE4D0A9FFF5ECD5FFFFFFFFFFF5EBD2FFD3A434FFD19E26FFD2A028FFD3A129FFD4A12AA7C8961EE3C9971FFFCA9820FFCA981FFFCD9C26FFDAB769FFEBDBC8FFF8F2EAFFFEFBF8FFFEFCF8FFFAF4E7FFDAB04CFFD3A027FFD5A22AFFD6A32BFFD7A42CE3CA9820FBCB9921FFCC9A22FFDBB661FFEFDDB6FFF8EFDFFFF3E9DCFFF0E4D5FFF9F3EAFFFDF9F3FFFCF8F1FFE2BE6CFFD5A228FFD7A42DFFD8A52EFFD9A62EFBCC9A22FBCD9B23FFCE9C24FFD7AC47FFE7CB8CFFF4E6C7FFFBF4E9FFF8F1E8FFF3E9DCFFF8F1E7FFFDF9F3FFEACE90FFD8A42BFFD9A62FFFDBA730FFDBA831FBCF9C25E3D09D25FFD19E26FFD19E25FFD29F26FFD7A738FFE1BC66FFEED8A6FFF7ECD6FFF7EFE4FFFBF6F1FFF1DEB3FFDBA934FFDCA831FFDDA932FFDEAA33E3D19E27A7D29F28FFD3A029FFD4A12AFFD5A22BFFD6A32BFFD7A32AFFD8A62FFFDFB24BFFE9C982FFF4E3C0FFF4E4C1FFDFAF3FFFDEAA33FFDFAB34FFE0AC35A7D3A12949D4A12AEDD5A22BFFD6A32CFFD7A42DFFD8A52EFFD9A62FFFDAA730FFDBA72FFFDCA82FFFDFAE3DFFE3B750FFE0AD38FFE1AD35FFE1AD36EDE2AE3749D4A12A6D7A42C92D8A52DFFD9A62EFFDAA62FFFDBA730FFDCA831FFDDA932FFDEAA33FFDFAB34FFE0AC34FFE1AC34FFE2AE36FFE2AE37FFE2AE3792E2AE376D9A52E0D9A52E18DAA72FB0DBA830FFDCA931FFDDAA32FFDEAA33FFDFAB34FFE0AC35FFE1AD36FFE2AE37FFE2AE37FFE2AE37FFE2AE37B1E2AE3718E2AE370DCA9320DCA9310DCA83118DDAA3292DEAB34EEE0AC35FFE1AD36FFE1AD36FFE2AE37FFE2AE37FFE2AE37FFE2AE37EFE2AE3792E2AE3718E2AE370E3AD37000000000DFAB340DFAB347E0AC3548E1AD36A7E2AE37E4E2AE37FBE2AE37FBE2AE37E4E2AE37A8E2AE3749E2AE377E2AE37000000000E0700C030080100000000000000000000000000000000000000000080100C0300E0700'
	//	data = [0,0,1,0,1,0,16,16,0,0,1,0,32,0,104,4,0,0,22,0,0,0,40,0,0,0,16,0,0,0,32,0,0,0,1,0,32,0,0,0,0,0,0,4,0,0,18,11,0,0,18,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,200,150,30,0,200,150,30,7,200,150,30,72,200,150,30,167,200,150,30,228,200,150,30,251,200,150,30,251,200,150,30,228,200,150,30,168,200,150,30,72,200,150,30,7,200,150,30,0,0,0,0,0,0,0,0,0,200,150,30,0,200,150,30,0,200,150,30,24,200,150,30,146,200,150,30,238,200,150,30,255,200,150,30,255,200,150,30,255,200,150,30,255,200,150,30,255,200,150,30,255,200,150,30,238,201,151,31,146,202,152,32,24,201,151,31,0,200,150,31,0,200,150,30,0,200,150,30,24,200,150,30,176,200,150,30,255,200,150,30,255,200,150,30,255,200,150,30,255,200,150,30,255,200,150,30,255,200,150,29,255,200,150,29,255,201,151,31,255,202,152,32,255,204,153,33,176,205,155,35,24,205,154,35,0,200,150,30,6,200,150,30,146,200,150,30,255,200,150,30,255,200,150,30,255,200,150,30,255,200,150,29,255,200,150,29,255,200,150,29,255,204,156,42,255,207,161,50,255,204,153,33,255,205,154,35,255,206,155,35,255,207,156,37,146,209,159,39,6,200,150,30,73,200,150,30,237,200,150,30,255,200,150,30,255,200,150,30,255,201,152,35,255,211,174,93,255,205,159,53,255,210,168,65,255,238,221,182,255,234,213,163,255,206,156,37,255,207,156,37,255,208,157,38,255,209,158,39,237,210,159,40,73,200,150,30,167,200,150,30,255,200,150,30,255,201,151,31,255,201,150,29,255,207,161,55,255,226,205,170,255,228,208,169,255,245,236,213,255,255,255,255,255,245,235,210,255,211,164,52,255,209,158,38,255,210,160,40,255,211,161,41,255,212,161,42,167,200,150,30,227,201,151,31,255,202,152,32,255,202,152,31,255,205,156,38,255,218,183,105,255,235,219,200,255,248,242,234,255,254,251,248,255,254,252,248,255,250,244,231,255,218,176,76,255,211,160,39,255,213,162,42,255,214,163,43,255,215,164,44,227,202,152,32,251,203,153,33,255,204,154,34,255,219,182,97,255,239,221,182,255,248,239,223,255,243,233,220,255,240,228,213,255,249,243,234,255,253,249,243,255,252,248,241,255,226,190,108,255,213,162,40,255,215,164,45,255,216,165,46,255,217,166,46,251,204,154,34,251,205,155,35,255,206,156,36,255,215,172,71,255,231,203,140,255,244,230,199,255,251,244,233,255,248,241,232,255,243,233,220,255,248,241,231,255,253,249,243,255,234,206,144,255,216,164,43,255,217,166,47,255,219,167,48,255,219,168,49,251,207,156,37,227,208,157,37,255,209,158,38,255,209,158,37,255,210,159,38,255,215,167,56,255,225,188,102,255,238,216,166,255,247,236,214,255,247,239,228,255,251,246,241,255,241,222,179,255,219,169,52,255,220,168,49,255,221,169,50,255,222,170,51,227,209,158,39,167,210,159,40,255,211,160,41,255,212,161,42,255,213,162,43,255,214,163,43,255,215,163,42,255,216,166,47,255,223,178,75,255,233,201,130,255,244,227,192,255,244,228,193,255,223,175,63,255,222,170,51,255,223,171,52,255,224,172,53,167,211,161,41,73,212,161,42,237,213,162,43,255,214,163,44,255,215,164,45,255,216,165,46,255,217,166,47,255,218,167,48,255,219,167,47,255,220,168,47,255,223,174,61,255,227,183,80,255,224,173,56,255,225,173,53,255,225,173,54,237,226,174,55,73,212,161,42,6,215,164,44,146,216,165,45,255,217,166,46,255,218,166,47,255,219,167,48,255,220,168,49,255,221,169,50,255,222,170,51,255,223,171,52,255,224,172,52,255,225,172,52,255,226,174,54,255,226,174,55,255,226,174,55,146,226,174,55,6,217,165,46,0,217,165,46,24,218,167,47,176,219,168,48,255,220,169,49,255,221,170,50,255,222,170,51,255,223,171,52,255,224,172,53,255,225,173,54,255,226,174,55,255,226,174,55,255,226,174,55,255,226,174,55,177,226,174,55,24,226,174,55,0,220,169,50,0,220,169,49,0,220,168,49,24,221,170,50,146,222,171,52,238,224,172,53,255,225,173,54,255,225,173,54,255,226,174,55,255,226,174,55,255,226,174,55,255,226,174,55,239,226,174,55,146,226,174,55,24,226,174,55,0,227,173,55,0,0,0,0,0,0,0,0,0,223,171,52,0,223,171,52,7,224,172,53,72,225,173,54,167,226,174,55,228,226,174,55,251,226,174,55,251,226,174,55,228,226,174,55,168,226,174,55,73,226,174,55,7,226,174,55,0,0,0,0,0,0,0,0,0,224,7,0,0,192,3,0,0,128,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,128,1,0,0,192,3,0,0,224,7,0,0]
	//
	//	// Convert the string to bytes
	//	var bytes = new Uint8Array(data.length / 2);
	//	bytes = new Uint8Array(data.length);
	//
	//	//for (var i = 0; i < data.length; i += 2) {
	//	//    bytes[i / 2] = parseInt(data.substring(i, i + 2), /* base = */ 16);
	//	//}
	//
	//	for (var i = 0; i < data.length; i += 1) {
	//	    bytes[i] = data[i]
	//	}
	//
	//	// Make a Blob from the bytes
	//	var blob = new Blob([bytes], {type: 'image/x-icon'});
	//
	//	// Use createObjectURL to make a URL for the blob
	//	var url = '' + URL.createObjectURL(blob);
	//
	//	var image = new Image();
	//	image.src = url
	//	document.body.appendChild(image);
	//
	//	var image = document.createElement('img')
	//	image.src = url
	//	document.body.appendChild(image);
	//
	//	//localStorage.setItem(prefix + 'dc4_server_salt', localStorage.getItem('dc4_server_salt'))
	//	//localStorage.setItem(prefix + 'dc2_auth_key', localStorage.getItem('dc2_auth_key'))
	//	//localStorage.setItem(prefix + 'tgme_sync', localStorage.getItem('tgme_sync'))
	//	//localStorage.setItem(prefix + 'server_time_offset', localStorage.getItem('server_time_offset'))
	//	//localStorage.setItem(prefix + 'dc2_server_salt', localStorage.getItem('dc2_server_salt'))
	//	//localStorage.setItem(prefix + 'user_auth', localStorage.getItem('user_auth'))
	//	//localStorage.setItem(prefix + 'xt_instance', localStorage.getItem('xt_instance'))
	//	//localStorage.setItem(prefix + 'dc', localStorage.getItem('dc'))
	//	//localStorage.setItem(prefix + 'dc4_auth_key', localStorage.getItem('dc4_auth_key'))
	//
	//	return ;

	// MTPROTO helpers

	const day = (60 * 60 * 24 * 1000)
	const week = day * 7
	const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

	const cache_user = new Map()
	const cache_chat = new Map()
	const cache_userFull = new Map()
	const cache_blobUrl = new Map()
	const blobs = [] // Avoid GC

	let me = null

	function getFullUser(user, callback) {
		let cache = cache_userFull.get(user.id)
		if (cache) return callback(cache)

		telegram.run('users.getFullUser', {
			id: {
				_: 'inputUser',
				user_id: user.id,
				access_hash: user.access_hash || 0
			}
		}).then(function(userInfoFull) {
			console.log('users.getFullUser', userInfoFull)
			cache_userFull.set(userInfoFull.user.id, userInfoFull)
			cache_user.set(userInfoFull.user.id, userInfoFull.user)
			callback(userInfoFull)
		})
	}

	function getUser(id) {
		let cache = cache_user.get(id)
		if (cache) return cache

		console.warn('getUser == null', id)
		return null
	}

	function getFullUser_inputUserSelf(callback) {
		telegram.run('users.getFullUser', { id: { _: 'inputUserSelf' } }).then(function(userInfoFull) {
			console.log('users.getFullUser', userInfoFull)
			cache_userFull.set(userInfoFull.user.id, userInfoFull)
			cache_user.set(userInfoFull.user.id, userInfoFull.user)
			callback(userInfoFull)
		})
	}

	async function getUserPhotoBlobURL(user, small) {
		if (!user || !user.photo || user.photo._ == "chatPhotoEmpty") return 'data/logo.svg'

		var photo = small ?
			user.photo.photo_small :
			user.photo.photo_big;

		const hash =
			photo.volume_id +
			'inputPeerPhotoFileLocation' +
			photo.local_id +
			small +
			user.id

		if (cache_blobUrl.get(hash)) console.warn('cache_blobUrl success')
		if (!cache_blobUrl.get(hash)) console.warn('cache_blobUrl non-success')
		if (cache_blobUrl.get(hash)) return cache_blobUrl.get(hash)

		let location = {
			_: 'inputPeerPhotoFileLocation',
			big: !small,
			peer: {
				_: ({
					'user': 'inputPeerUser',
					'channel': 'inputPeerChannel',
					'chatForbidden': 'inputPeerChat',
					'chat': 'inputPeerChat',
				})[user._],
				//'inputPeerUser',
				channel_id: user.id,
				user_id: user.id,
				chat_id: user.id,
				access_hash: user.access_hash || 0
			},
			volume_id: photo.volume_id,
			local_id: photo.local_id
		}

		var params = {
			dcID: user.photo.dc_id,
			fileDownload: true,
			singleInRequest: window.safari !== undefined,
			createNetworker: true
		};

		//params.dcID = 1 + ((Math.random()*4)|0)

		console.log('params', params)

		//let api = telegram

		//const dcs = [1, 2, 3, 4, 5, user.photo.dc_id]
		//while (dcs.length > 0) {
		//let tryAgain = true
		//while (tryAgain) {
		try {
			console.warn('trying 2 dc', params.dcID)
			//params.dcID = dcs.pop()
			let result = await telegram.run('upload.getFile', {
				location: location,
				offset: 0,
				precise: false,
				limit: 1024 * 1024
				//limit: 524288
			}, params)

			let blob = new Blob([result.bytes], { type: 'image/jpeg' })
			blobs.push(blob)
			let url = URL.createObjectURL(blob)
			cache_blobUrl.set(hash, url)
			return url
		} catch (e) {
			console.warn('trying next dc, instead of', params.dcID, e)
			console.warn('help.getConfig', await telegram.run('help.getConfig', {}))

			//try {
			//	let result = await telegram1dc.run('upload.getFile', {
			//		location: location,
			//		offset: 0,
			//		precise: false,
			//		limit: 1024 * 1024
			//		//limit: 524288
			//	}, params)
			//
			//	let blob = new Blob([result.bytes], { type: 'image/jpeg' })
			//	blobs.push(blob)
			//	let url = URL.createObjectURL(blob)
			//	cache_blobUrl.set(hash, url)
			//	return url
			//} catch (e) {
			//	console.warn('alternative 1 dc failed too', params.dcID, e)
			//}

			//	//location.peer._ = 'inputPeerChat'
			//	let newDC = params.dcID
			//	if (e.type == "FILE_MIGRATE_1") {newDC = 1; api = telegram1dc; }
			//	if (e.type == "FILE_MIGRATE_2") {newDC = 2; }
			//	if (e.type == "FILE_MIGRATE_3") {newDC = 3; }
			//	if (e.type == "FILE_MIGRATE_4") {newDC = 4; }
			//	if (e.type == "FILE_MIGRATE_5") {newDC = 5; }
			//	tryAgain = newDC != params.dcID
			//	params.dcID = newDC

		}
		//}

		//	return MtpApiManager.invokeApi('upload.getFile', {
		//		location: location,
		//		offset: 0,
		//		precise: false,
		//		limit: 524288
		//	}, params).then(function(result) {
		//		switch (type) {
		//			case 'byteArray':
		//				return result.bytes;
		//			case 'base64':
		//				return "data:image/jpeg;base64," + btoa(String.fromCharCode.apply(null, result.bytes));
		//			case 'blob':
		//				return new Blob([result.bytes], { type: 'image/jpeg' });
		//			default:
		//				return result.bytes;
		//		}
		//	});

		return 'data/logo.svg'
	}

	// HTML helpers

	function innerTextAll(id, text) {
		for (let node of document.querySelectorAll(id)) {
			node.innerText = text
		}
	}

	function srcTextAll(id, src) {
		for (let node of document.querySelectorAll(id)) {
			node.src = src
		}
	}

	function hideAll(id) {
		for (let node of document.querySelectorAll(id)) {
			node.classList.add("hidden")
		}
	}

	function showAll(id) {
		for (let node of document.querySelectorAll(id)) {
			node.classList.remove("hidden")
		}
	}

	function nameOf(peer) {
		if (peer == null) {
			console.warn('nameOf peer == null')
			return "User"
		}
		if (peer._ == "channel") return peer.title
		if (peer._ == "chat") return peer.title
		if (peer._ == "chatForbidden") return peer.title
		if (peer._ == "user") {
			if (peer.pFlags && peer.pFlags.deleted) return 'Deleted Account'
			return ((peer.first_name || '') + ' ' + (peer.last_name || '')).trim()
		}

		console.warn('peer._', peer._)
		return ''
	}

	function formatPhone(phone) {
		phone = '' + phone
		phone = phone[0] + ' ' + phone.substr(1)
		if (phone.indexOf('+') == -1) phone = '+' + phone
		return phone
	}

	async function ready() {
		document.querySelector('#loading').classList.add("hidden")
		document.querySelector('#login').classList.add("hidden")
		document.querySelector('#all').classList.remove("hidden")

		let historyNode = document.querySelector('#center-history')
		let historyCurrent = document.querySelector('#center-history-demo')
		let roomCurrent = -1

		document.querySelector('#contenteditable-message').onkeyup = async function(e) {
			console.log(e)
			// TODO handle shift+enter
			if (roomCurrent == -1) return;
			if (e.key == "Enter") {
				const room = rooms.get(roomCurrent)
				const peer = room.peer
				const randomID = [nextRandomInt(0xFFFFFFFF), nextRandomInt(0xFFFFFFFF)]
				let text = document.querySelector('#contenteditable-message').innerText.trim()
				if (text == '') return;
				console.log('Sending', text, 'to', peer)
				document.querySelector('#contenteditable-message').innerText = ''
				//const inputPeer = {
				//	_: ({
				//		'peerUser': 'inputPeerUser',
				//		'peerChannel': 'inputPeerChannel',
				//		'peerChat': 'inputPeerChat',
				//	})[peer._],
				//	user_id: peer.user_id,
				//	access_hash: room.access_hash,
				//	channel_id: peer.channel_id,
				//	chat_id: peer.chat_id,
				//}

				let inputPeer = {}

				if (peer._ == "peerUser") {
					inputPeer._ = 'inputPeerUser'
					inputPeer.user_id = peer.user_id
					inputPeer.access_hash = room.access_hash
				}
				if (peer._ == "peerChannel") {
					inputPeer._ = 'inputPeerChannel'
					inputPeer.channel_id = peer.channel_id
					inputPeer.access_hash = room.access_hash
				}
				if (peer._ == "peerChat") {
					inputPeer._ = 'inputPeerChat'
					inputPeer.chat_id = peer.chat_id
				}

				const query = {
					flags: 0,
					no_webpage: false,
					silent: false,
					//background	flags.6?true	Send this message as background message
					clear_draft: true,
					peer: inputPeer,
					reply_to_msg_id: 0,
					message: text,
					random_id: randomID,
					//reply_markup: null,
					entities: [],
					//schedule_date
				}

				console.warn('messages.sendMessage', query)
				telegram.run('messages.sendMessage', query)
			}
		}

		// TODO detect Save Messages
		telegram.getUserInfo().then(function(user) {
			me = user
			console.log('getUserInfo', user)
			if (!user.id) {
				// TODO login screen
			} else {
				innerTextAll('#user-full-name-current', nameOf(user))
				innerTextAll('#user-username-current', user.username)
				if (user.username == null) hideAll('#user-username-current-block')
				if (user.username != null) showAll('#user-username-current-block')

				innerTextAll('#user-phone-current', formatPhone(user.phone))
				if (user.phone == null) hideAll('#user-phone-current-block')
				if (user.phone != null) showAll('#user-phone-current-block')

				hideAll('#user-bio-current-block')
				// TODO @autoAwait
				// TODO @autoAsync

				async function loadAva(img, peerUser) {
					srcTextAll(img, await getUserPhotoBlobURL(peerUser, true))
				}

				loadAva('#user-picture-current', user)

				fillDialogs()

				telegram.run('users.getFullUser', { id: { _: 'inputUserSelf' } }).then(function(userInfoFull) {
					console.log('users.getFullUser', userInfoFull)
					cache_userFull.set(me.id, userInfoFull)
					cache_user.set(me.id, userInfoFull.user)
					showUserInfo(me)
				})
			}
		});

		function messageText(message) {
			let who = "User"
			let user = getUser(message.from_id) || cache_chat.get(message.to_id.channel_id || message.to_id.chat_id)

			if (!user) console.warn('!user', message)
			if (user) who = nameOf(user)

			if (message._ == "message") {

			}

			if (message._ == "messageService") {
				if (message.action._ == "messageActionPinMessage") {
					return who + ' pinned a message'
					// TODO return who + 'pinned «Hexa is a high l...»'
				}

				if (message.action._ == "messageActionChatMigrateTo") {
					return who + ' upgraded the group to a supergroup'
				}
			}

			if (message._ == "message" && message.media && message.media._ == "messageMediaPhoto") {
				if (message.message != "") return "Photo, " + message.message
				return "Photo"
			}

			if (message._ == "message" && message.media && message.media._ == "messageMediaDocument") {
				let name = "Document"
				if (message.media.document && message.media.document.attributes && message.media.document.attributes[0]) {
					if (message.media.document.attributes[0]._ == "documentAttributeFilename")
						name = message.media.document.attributes[0].file_name
				}
				if (message.message != "") return name + ", " + message.message
				return name
			}

			if (message._ == "message") {
				return message.message
			}

			if (message._ == "messageService" && message.action._ == "messageActionContactSignUp") {
				return who + " joined Telegram"
			}

			if (message._ == "messageService" && message.action._ == "messageActionChatJoinedByLink") {
				return who + " joined the group via invite link"
			}

			if (message._ == "messageService" && message.action._ == "messageActionHistoryClear") {
				return "History was cleared"
			}

			console.warn('message._', message)
			return ''
		}

		const rooms = new Map()

		function showRoom(id) {
			const room = rooms.get(id)
			console.log('showRoom', id, room)
			roomCurrent = id

			if (room.peer.user_id) showUserInfo(cache_user.get(room.peer.user_id))
			else showChatInfo(room.peer.channel_id || room.peer.chat_id)

			if (room.historyCurrent) {
				historyNode.removeChild(historyCurrent)
				historyCurrent = room.historyCurrent
				historyNode.appendChild(historyCurrent)
				// TODO scroll to bottom
				// TODO scroll restore
				return
			}

			telegram.getHistory({
				id: room.peer.user_id || room.peer.channel_id || room.peer.chat_id,
				type: room.peer._ == "peerUser" ? 'user' : 'chat'
			}).then(function(result) {
				console.log('telegram.getHistory room', room.peer, result)

				// Update cache
				for (let user of result.users) {
					cache_user.set(user.id, user)
				}

				for (let chat of result.chats) {
					cache_chat.set(chat.id, chat)
				}

				// TODO cache messages?

				// Render
				historyNode.removeChild(historyCurrent)
				let html = []

				const now = new Date()
				for (let message of result.messages) {
					let text = messageText(message)
					let time = ''
					let date = new Date(message.date * 1000)
					let diff = now.getTime() - date.getTime()
					if (diff >= week) {
						time = date.toLocaleDateString(navigator.language, {
							dateStyle: 'short'
						});
					} else if (diff >= day) {
						time = days[date.getDay()]
					} else {
						time = date.toLocaleTimeString(navigator.language, {
							hour: '2-digit',
							minute: '2-digit'
						});
					}
					html.unshift(`
						<div style="margin-left: 100px; margin-right: 25px;padding: 4px; margin-bottom: 8px; border-radius: 10px;overflow: hidden;background-color: #EEFFDE;box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.2);">${
								text
							}<div>
								<span>${time}</span>
							</div>
						</div>`)
				}

				// TODO upper center
				// TODO bottom center
				// TODO right info

				historyCurrent = document.createElement('div')
				historyCurrent.style.position = "relative"
				historyCurrent.style.overflowY = "scroll"
				historyCurrent.style.paddingTop = "8px"
				historyCurrent.style.height = "100%"
				historyCurrent.innerHTML = html.join('')
				historyNode.appendChild(historyCurrent)
				room.historyCurrent = historyCurrent

				// TODO just call showRoom(id) again
			})
		}

		function showUserInfo(user) {
			console.log('showUserInfo', user)
			getFullUser(user, function(userInfoFull) {
				console.log('showUserInfo userInfoFull', userInfoFull)

				hideAll('#user-bio-current-block')
				if (userInfoFull.about && userInfoFull.about.trim() != "") {
					innerTextAll('#user-bio-current', userInfoFull.about)
					showAll('#user-bio-current-block')
				}

				let user = userInfoFull.user
				innerTextAll('#user-phone-current', formatPhone(user.phone))
				if (user.phone == null) hideAll('#user-phone-current-block')
				if (user.phone != null) showAll('#user-phone-current-block')

				innerTextAll('#user-full-name-current', nameOf(user))
				innerTextAll('#user-username-current', user.username)
				if (user.username == null) hideAll('#user-username-current-block')
				if (user.username != null) showAll('#user-username-current-block')

				async function loadAva(img, peerUser) {
					srcTextAll(img, await getUserPhotoBlobURL(peerUser, true))
				}

				loadAva('#user-picture-current', user)

				innerTextAll('#online-current', 'online')
			})
		}

		function showChatInfo(id) {
			let chat = cache_chat.get(id)
			innerTextAll('#online-current', '')
			console.log('showChatInfo', chat)
			srcTextAll('#user-picture-current', "data/logo.svg")

			hideAll('#user-bio-current-block')
			hideAll('#user-phone-current-block')
			hideAll('#user-username-current-block')

			innerTextAll('#user-full-name-current', chat.title)

			async function loadAva(img, peerUser) {
				srcTextAll(img, await getUserPhotoBlobURL(peerUser, true))
			}

			loadAva('#user-picture-current', chat)
		}

		function fillDialogs() {
			let roomID = 0

			telegram.getDialogs().then(function(dialogs) {
				console.log('dialogs', dialogs)
				let roomsNode = document.querySelector('#room-chats')

				for (let user of dialogs.result.users) {
					cache_user.set(user.id, user)
				}

				for (let chat of dialogs.result.chats) {
					cache_chat.set(chat.id, chat)
				}

				function addRoom(title, text, time, room) {
					let html =
						`<div class="roomChat" id="room-${room}">
							<div class="roomChatWrap">
								<div class="roomChatImage">
									<img class="circle" src="data/logo.svg" id="room-img-${room}" width="54px" height="54px">
								</div>
								<div class="roomChatBlock">
									<div class="normal roomChatUser black bold">${title}
										<div class="normal roomChatDate">
											<img class="" src="data/icons/2checks_2x.png" style="" width="19px" height="14px"> ${time}</div>
									</div>
									<div class="room-message-bottom">
										<div class="normal roomChatText">${text}</div>
										<!--<div class="normal pinned pinned-green">0</div>-->
									</div>
								</div>
							</div>
						</div>`

					const div = document.createElement('div')
					div.innerHTML = html
					roomsNode.appendChild(div)
					document.querySelector('#room-' + room).onclick = function() {
						showRoom(room)
					}
				}

				const now = new Date()

				for (let room of dialogs.result.dialogs) {
					let text = null
					let peer = room.peer.user_id || room.peer.channel_id || room.peer.chat_id
					if (peer == null) console.warn('peer == null', room)
					let time = ''
					for (let message of dialogs.result.messages) {
						if (
							(room.peer.chat_id && (room.peer.chat_id == message.to_id.chat_id)) ||
							(room.peer.channel_id && (room.peer.channel_id == message.to_id.channel_id)) ||
							(room.peer.user_id && (room.peer.user_id == message.to_id.user_id)) ||
							(room.peer.user_id && (room.peer.user_id == message.from_id && message.to_id._ == "peerUser"))
						) {
							text = messageText(message)
							let date = new Date(message.date * 1000)
							let diff = now.getTime() - date.getTime()
							if (diff >= week) {
								time = date.toLocaleDateString(navigator.language, {
									dateStyle: 'short'
								});
							} else if (diff >= day) {
								time = days[date.getDay()]
							} else {
								time = date.toLocaleTimeString(navigator.language, {
									hour: '2-digit',
									minute: '2-digit'
								});
							}
							if (message.from_id == me.id && message._ != "messageService") text = 'You: ' + text
							break
						}
					}

					if (room.draft && room.draft._ == "draftMessage") {
						text = 'Draft: ' + room.draft.message
					}

					let title = ''
					let peerFull = null
					for (let user of dialogs.result.users) {
						if (user.id == peer) {
							title = nameOf(user)
							peerFull = user
						}
					}
					for (let chat of dialogs.result.chats) {
						if (chat.id == peer) {
							title = nameOf(chat)
							peerFull = chat
						}
						// TODO static analysis
						/*
						if (chat.id == peer) {
							title = nameOf(chat)
							peerFull = chat
						}

						if (chat.id == peer) title = nameOf(chat)
						peerFull = chat // always happens!
						*/
					}
					if (text == null) console.warn('text == null', room)

					rooms.set(roomID, {
						access_hash: peerFull ? peerFull.access_hash : undefined,
						peer: room.peer
					})
					addRoom(title, text || '', time, roomID)

					roomID++
				}

				// Avatars
				async function loadAvas() {
					let roomID = 0
					while (roomID < dialogs.result.dialogs.length) {
						let img = "#room-img-" + roomID
						let room = dialogs.result.dialogs[roomID]
						roomID++

						let peer = room.peer.user_id || room.peer.channel_id || room.peer.chat_id
						let peerUser = null
						for (let user of dialogs.result.users) {
							if (user.id == peer) {
								peerUser = user
							}
						}

						for (let user of dialogs.result.chats) {
							if (user.id == peer) {
								peerUser = user
							}
						}

						console.log('Avatars', roomID, img, peerUser)
						if (peerUser && peerUser.photo) console.log('Avatars peerUser.photo.dc_id', peerUser.photo.dc_id)
						try {
							if (peerUser) srcTextAll(img, await getUserPhotoBlobURL(peerUser, true))
						} catch (e) {
							console.warn(e, peerUser.photo.dc_id)
						}
					}
				}

				loadAvas()

				if (false) { // Avatars TODO DELETE
					let roomID = 0

					async function loadNext() {
						console.log('Avatars loadNext', roomID, dialogs.result.dialogs.length)
						if (roomID >= dialogs.result.dialogs.length) return;
						let img = "#room-img-" + roomID
						let room = dialogs.result.dialogs[roomID]
						roomID++

						let peer = room.peer.user_id || room.peer.channel_id
						let peerUser = null
						for (let user of dialogs.result.users) {
							if (user.id == peer) {
								peerUser = user
							}
						}

						if (peerUser) srcTextAll(img, await getUserPhotoBlobURL(peerUser, true))

						if (false && peerUser && peerUser.photo) {
							telegram.getUserPhoto('base64', 'small', peerUser, peerUser.photo.dc_id).then(function(base64) {
								if (base64) srcTextAll(img, base64)
								// TODO else
								console.log('Avatars loadNext success', roomID, img)
								loadNext()
							}, function(err) {
								console.warn('Avatars loadNext fail', roomID, img, err)
								if (err.type.startsWith("FILE_MIGRATE_")) {
									let dc = 1
									if (err.type == "FILE_MIGRATE_1") dc = 1
									if (err.type == "FILE_MIGRATE_2") dc = 2
									if (err.type == "FILE_MIGRATE_3") dc = 3
									if (err.type == "FILE_MIGRATE_4") dc = 4
									if (err.type == "FILE_MIGRATE_5") dc = 5

									telegram.getUserPhoto('base64', 'small', peerUser, dc).then(function(base64) {
										if (base64) srcTextAll(img, base64)
										console.log('Avatars loadNext success FILE_MIGRATE_1', roomID, img)
										loadNext()
									}, function(err) {
										console.warn('Avatars loadNext fail FILE_MIGRATE_1', roomID, img, err)
										loadNext()
									})
								} else loadNext()
							})
						} else loadNext();
					}

					loadNext()
				}

				showRoom(0)
			})
		}
	}

	console.log(localStorage.getItem(prefix + 'user_auth'))
	if (localStorage.getItem(prefix + 'user_auth') != null) {
		console.log('Logged in! Showing chat interface!')
		ready()
	} else {
		console.log('Not logged in! Showing login interface!')
		window.ready = ready
		login()
	}

	async function updateHandle(update) {
		if (update._ == "updateUserStatus") {
			// TODO
			return
		}

		if (update._ == "updateReadChannelOutbox") {
			// TODO
			return
		}

		if (update._ == "updateNewChannelMessage") {

			return
		}

		console.error('updateHandle._', update._, update)
	}

	telegram.subscribe('Update', function(message) {
		if (message._ == "msgs_ack") return;
		if (message._ == "msg_container") return;
		console.log('Update', message);
		if (message._ == "updateShort") {
			updateHandle(message.update)
			return
		}
		if (message._ == "updates") {
			const users = message.users || []
			const chats = message.chats || []
			const updates = message.updates || []

			for (let user of users) {
				cache_user.set(user.id, user)
			}

			for (let chat of chats) {
				cache_chat.set(chat.id, chat)
			}

			for (let update of updates) {
				updateHandle(update)
			}

			return
		}
		console.error('Update._', message._, message)
	});
})();
