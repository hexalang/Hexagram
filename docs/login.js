;

function login() {
	document.querySelector('#loading').classList.add("hidden")
	document.querySelector('#all').classList.add("hidden")
	document.querySelector('#login').classList.remove("hidden")

	var countries = [
		// No emojis yet
		//["AB", "Abkhazia", "+7 840"],
		["AF", "Afghanistan", "+93"],
		["AX", "Åland Islands", "+358 18"],
		["AL", "Albania", "+355"],
		["DZ", "Algeria", "+213"],
		["AS", "American Samoa", "+1 684"],
		["AD", "Andorra", "+376"],
		["AO", "Angola", "+244"],
		["AI", "Anguilla", "+1 264"],
		["AG", "Antigua & Barbuda", "+1 268"],
		["AR", "Argentina", "+54"],
		["AM", "Armenia", "+374"],
		["AW", "Aruba", "+297"],
		["SH", "Ascension", "+247"],
		["AU", "Australia", "+61"],
		["AU", "Australian External Territories", "+672"],
		["AT", "Austria", "+43"],
		["AZ", "Azerbaijan", "+994"],
		["BS", "Bahamas", "+1 242"],
		["BH", "Bahrain", "+973"],
		["BD", "Bangladesh", "+880"],
		["BB", "Barbados", "+1 246"],
		["AG", "Barbuda", "+1 268"],
		["BY", "Belarus", "+375"],
		["BE", "Belgium", "+32"],
		["BZ", "Belize", "+501"],
		["BJ", "Benin", "+229"],
		["BM", "Bermuda", "+1 441"],
		["BT", "Bhutan", "+975"],
		["BO", "Bolivia", "+591"],
		["BQ", "Caribbean Netherlands", "+599 7"],
		["BA", "Bosnia & Herzegovina", "+387"],
		["BW", "Botswana", "+267"],
		["BR", "Brazil", "+55"],
		["IO", "British Indian Ocean Territory", "+246"],
		["VG", "British Virgin Islands", "+1 284"],
		["BN", "Brunei", "+673"],
		["BG", "Bulgaria", "+359"],
		["BF", "Burkina Faso", "+226"],
		["MY", "Myanmar (Burma)", "+95"],
		["BI", "Burundi", "+257"],
		["KH", "Cambodia", "+855"],
		["CM", "Cameroon", "+237"],
		["CA", "Canada", "+1"],
		["CV", "Cape Verde", "+238"],
		["KY", "Cayman Islands", "+1 345"],
		["CF", "Central African Republic", "+236"],
		["TD", "Chad", "+235"],
		["CL", "Chile", "+56"],
		["CN", "China", "+86"],
		["CX", "Christmas Island", "+61"],
		["CC", "Cocos (Keeling) Islands", "+61"],
		["CO", "Colombia", "+57"],
		["KM", "Comoros", "+269"],
		["CG", "Congo - Brazzaville", "+242"],
		["CD", "Congo - Kinshasa", "+243"],
		["CK", "Cook Islands", "+682"],
		["CR", "Costa Rica", "+506"],
		["CI", "Côte d’Ivoire", "+225"],
		["HR", "Croatia", "+385"],
		["CU", "Cuba", "+53"],
		["CW", "Curaçao", "+599 9"],
		["CY", "Cyprus", "+357"],
		["CZ", "Czech Republic", "+420"],
		["DK", "Denmark", "+45"],
		["DG", "Diego Garcia", "+246"],
		["DJ", "Djibouti", "+253"],
		["DM", "Dominica", "+1 767"],
		["DO", "Dominican Republic", "+1 809"],
		["TL", "Timor-Leste", "+670"],
		["EC", "Ecuador", "+593"],
		["EG", "Egypt", "+20"],
		["SV", "El Salvador", "+503"],
		["GQ", "Equatorial Guinea", "+240"],
		["ER", "Eritrea", "+291"],
		["EE", "Estonia", "+372"],
		["ET", "Ethiopia", "+251"],
		["FK", "Falkland Islands", "+500"],
		["FO", "Faroe Islands", "+298"],
		["FJ", "Fiji", "+679"],
		["FI", "Finland", "+358"],
		["FR", "France", "+33"],
		["GF", "French Guiana", "+594"],
		["PF", "French Polynesia", "+689"],
		["GA", "Gabon", "+241"],
		["GM", "Gambia", "+220"],
		["GE", "Georgia", "+995"],
		["DE", "Germany", "+49"],
		["GH", "Ghana", "+233"],
		["GI", "Gibraltar", "+350"],
		["GR", "Greece", "+30"],
		["GL", "Greenland", "+299"],
		["GD", "Grenada", "+1 473"],
		["GP", "Guadeloupe", "+590"],
		["GU", "Guam", "+1 671"],
		["GT", "Guatemala", "+502"],
		["GG", "Guernsey", "+44"],
		["GN", "Guinea", "+224"],
		["GW", "Guinea-Bissau", "+245"],
		["GY", "Guyana", "+592"],
		["HT", "Haiti", "+509"],
		["HN", "Honduras", "+504"],
		["HK", "Hong Kong SAR China", "+852"],
		["HU", "Hungary", "+36"],
		["IS", "Iceland", "+354"],
		["IN", "India", "+91"],
		["ID", "Indonesia", "+62"],
		["IR", "Iran", "+98"],
		["IQ", "Iraq", "+964"],
		["IE", "Ireland", "+353"],
		["IL", "Israel", "+972"],
		["IT", "Italy", "+39"],
		["JM", "Jamaica", "+1 876"],
		["SJ", "Svalbard & Jan Mayen", "+47 79"],
		["JP", "Japan", "+81"],
		["JE", "Jersey", "+44"],
		["JO", "Jordan", "+962"],
		["KZ", "Kazakhstan", "+7 7"],
		["KE", "Kenya", "+254"],
		["KI", "Kiribati", "+686"],
		["KP", "North Korea", "+850"],
		["KR", "South Korea", "+82"],
		["KW", "Kuwait", "+965"],
		["KG", "Kyrgyzstan", "+996"],
		["LA", "Laos", "+856"],
		["LV", "Latvia", "+371"],
		["LB", "Lebanon", "+961"],
		["LS", "Lesotho", "+266"],
		["LR", "Liberia", "+231"],
		["LY", "Libya", "+218"],
		["LI", "Liechtenstein", "+423"],
		["LT", "Lithuania", "+370"],
		["LU", "Luxembourg", "+352"],
		["MO", "Macau SAR China", "+853"],
		["MK", "Macedonia", "+389"],
		["MG", "Madagascar", "+261"],
		["MW", "Malawi", "+265"],
		["MY", "Malaysia", "+60"],
		["MV", "Maldives", "+960"],
		["ML", "Mali", "+223"],
		["MT", "Malta", "+356"],
		["MH", "Marshall Islands", "+692"],
		["MQ", "Martinique", "+596"],
		["MR", "Mauritania", "+222"],
		["MU", "Mauritius", "+230"],
		["YT", "Mayotte", "+262"],
		["MX", "Mexico", "+52"],
		["FM", "Micronesia", "+691"],
		["MD", "Moldova", "+373"],
		["MC", "Monaco", "+377"],
		["MN", "Mongolia", "+976"],
		["ME", "Montenegro", "+382"],
		["MS", "Montserrat", "+1 664"],
		["MA", "Morocco", "+212"],
		["MZ", "Mozambique", "+258"],
		["NA", "Namibia", "+264"],
		["NR", "Nauru", "+674"],
		["NP", "Nepal", "+977"],
		["NL", "Netherlands", "+31"],
		["NC", "New Caledonia", "+687"],
		["NZ", "New Zealand", "+64"],
		["NI", "Nicaragua", "+505"],
		["NE", "Niger", "+227"],
		["NG", "Nigeria", "+234"],
		["NU", "Niue", "+683"],
		["NF", "Norfolk Island", "+672"],
		["MP", "Northern Mariana Islands", "+1 670"],
		["NO", "Norway", "+47"],
		["OM", "Oman", "+968"],
		["PK", "Pakistan", "+92"],
		["PW", "Palau", "+680"],
		["PS", "Palestinian Territories", "+970"],
		["PA", "Panama", "+507"],
		["PG", "Papua New Guinea", "+675"],
		["PY", "Paraguay", "+595"],
		["PE", "Peru", "+51"],
		["PH", "Philippines", "+63"],
		["PN", "Pitcairn Islands", "+64"],
		["PL", "Poland", "+48"],
		["PT", "Portugal", "+351"],
		["PR", "Puerto Rico", "+1 787"],
		["QA", "Qatar", "+974"],
		["RE", "Réunion", "+262"],
		["RO", "Romania", "+40"],
		["RU", "Russia", "+7"],
		["RW", "Rwanda", "+250"],
		["BL", "St. Barthélemy", "+590"],
		["SH", "St. Helena", "+290"],
		["KN", "St. Kitts & Nevis", "+1 869"],
		["LC", "St. Lucia", "+1 758"],
		["MF", "St. Martin (France)", "+590"],
		["PM", "St. Pierre and Miquelon", "+508"],
		["VC", "St. Vincent and the Grenadines", "+1 784"],
		["WS", "Samoa", "+685"],
		["SM", "San Marino", "+378"],
		["ST", "São Tomé & Príncipe", "+239"],
		["SA", "Saudi Arabia", "+966"],
		["SN", "Senegal", "+221"],
		["RS", "Serbia", "+381"],
		["SC", "Seychelles", "+248"],
		["SL", "Sierra Leone", "+232"],
		["SG", "Singapore", "+65"],
		["BQ", "Sint Eustatius", "+599 3"],
		["SX", "Sint Maarten", "+1 721"],
		["SK", "Slovakia", "+421"],
		["SI", "Slovenia", "+386"],
		["SB", "Solomon Islands", "+677"],
		["SO", "Somalia", "+252"],
		["ZA", "South Africa", "+27"],
		["GS", "South Georgia & South Sandwich Islands", "+500"],
		["SS", "South Sudan", "+211"],
		["ES", "Spain", "+34"],
		["LK", "Sri Lanka", "+94"],
		["SD", "Sudan", "+249"],
		["SR", "Suriname", "+597"],
		["SJ", "Svalbard", "+47 79"],
		["SZ", "Swaziland", "+268"],
		["SE", "Sweden", "+46"],
		["CH", "Switzerland", "+41"],
		["SY", "Syria", "+963"],
		["TW", "Taiwan", "+886"],
		["TJ", "Tajikistan", "+992"],
		["TZ", "Tanzania", "+255"],
		["TH", "Thailand", "+66"],
		["TG", "Togo", "+228"],
		["TK", "Tokelau", "+690"],
		["TO", "Tonga", "+676"],
		["TT", "Trinidad & Tobago", "+1 868"],
		["TN", "Tunisia", "+216"],
		["TR", "Turkey", "+90"],
		["TM", "Turkmenistan", "+993"],
		["TC", "Turks & Caicos Islands", "+1 649"],
		["TV", "Tuvalu", "+688"],
		["UG", "Uganda", "+256"],
		["UA", "Ukraine", "+380"],
		["AE", "United Arab Emirates", "+971"],
		["UK", "United Kingdom", "+44"],
		["US", "United States", "+1"],
		["UY", "Uruguay", "+598"],
		["VI", "U.S. Virgin Islands", "+1 340"],
		["UZ", "Uzbekistan", "+998"],
		["VU", "Vanuatu", "+678"],
		["VE", "Venezuela", "+58"],
		["VA", "Vatican City", "+39 06 698"],
		["VN", "Vietnam", "+84"],
		["WF", "Wallis & Futuna", "+681"],
		["YE", "Yemen", "+967"],
		["ZM", "Zambia", "+260"],
		["ZW", "Zimbabwe", "+263"]
	]

	var clist = []
	for (const c of countries) {
		clist.push('<div class="login-description black login-country rp" id="login-country-' + c[0] + '">')
		clist.push('<span style="margin-left: 16px;margin-top: 5px;float: left;margin-right: 32px;">')
		clist.push(unicodeEmoji(countryEmoji(c[0].toUpperCase())))
		clist.push('</span>')
		clist.push(c[1])
		clist.push('<span class="login-country-code">' + c[2].replace(' ', '') + '</span>')
		clist.push('</div>')
	}

	document.querySelector('#login-countries').innerHTML = clist.join('')

	for (const c of countries) {
		document.querySelector('#login-country-' + c[0]).onmouseover = function() {
			document.querySelector('#country').placeholder = c[1]
		}

		document.querySelector('#login-country-' + c[0]).onclick = function() {
			document.querySelector('#country').value = c[1]
			document.querySelector('#country').placeholder = "Country"
			if (document.querySelector('#phone').value.trim().length == 0 || document.querySelector('#phone').value == "+")
				document.querySelector('#phone').value = c[2]
			document.querySelector('#phone').focus()
			showCountryList = false
			countryList()
		}
	}

	let showCountryList = false

	function countryList() {
		if (showCountryList) {
			document.querySelector('#login-country-show-list').src = "data/icons/up_2x.png"
			document.querySelector('#login-country-list').classList.remove("hidden")
		}
		if (!showCountryList) {
			document.querySelector('#login-country-show-list').src = "data/icons/down_2x.png"
			document.querySelector('#login-country-list').classList.add("hidden")
			document.querySelector('#country').placeholder = "Country"
		}
	}

	document.querySelector('#login-country-show-list').onclick = function() {
		showCountryList = !showCountryList
		countryList()
		document.querySelector('#country').focus()
	}

	document.querySelector('#country').onkeyup = function(e) {
		document.querySelector('#login-countries-block').classList.remove("login-input-invalid")
		if (e.code == 27 || e.keyCode == 27) {
			showCountryList = false
			countryList()
		} else {
			showCountryList = true
			countryList()
		}
		for (const c of countries) {
			if (c[1].toLowerCase().indexOf(document.querySelector('#country').value.trim().toLowerCase()) == 0) {
				let pos = document.querySelector('#login-country-' + c[0]).offsetTop
				document.querySelector('#login-countries').scrollTop = pos
				//document.querySelector('#login-country-' + c[1].toLowerCase()).scrollIntoView();
			}
		}
	}

	let keep = true
	document.querySelector('#login-keep').onclick = function() {
		keep = !keep
		if (keep) document.querySelector('#login-keep').src = "data/icons/checkboxon_2x.png"
		if (!keep) document.querySelector('#login-keep').src = "data/icons/checkboxempty_2x.png"
	}

	document.querySelector('#login-screen-phone-wait').classList.add("hidden")

	document.querySelector('#login-screen-phone-next').onclick = function() {
		let ok = (function() {
			let countryName = document.querySelector('#country').value.trim().toLowerCase()
			if (countryName == "") {
				document.querySelector('#login-countries-block').classList.add("login-input-invalid")
				return false
			}

			for (let country of countries)
				if (country[1].toLowerCase().indexOf(countryName) == 0) {
					return true
				}
			document.querySelector('#login-countries-block').classList.add("login-input-invalid")
			return false
		})();

		if (!ok) return;
		let phone = document.querySelector('#phone').value.trim()

		if (phone.length < 5)
			return document.querySelector('#login-phone-block').classList.add("login-input-invalid")

		document.querySelector('#login-screen-phone-next').classList.add("hidden")
		document.querySelector('#login-screen-phone-wait').classList.remove("hidden")

		sendPhone(phone)
	}

	const allowed = '+1234567890 '
	document.querySelector('#phone').onkeyup = function(e) {
		document.querySelector('#login-phone-block').classList.remove("login-input-invalid")
		console.log(e)
		if (e.key != "Backspace" && allowed.indexOf(e.key) == -1) return false
	}

	document.querySelector('#phone').onkeydown = function(e) {
		console.log(e)
		if (e.ctrlKey) return true
		if (e.key != "Backspace" && allowed.indexOf(e.key) == -1) return false
	}

	document.querySelector('#country').focus()

	function screenPhone(fail) {
		document.querySelector('#login-sign-in').classList.remove("hidden")
		document.querySelector('#login-sms').classList.add("hidden")
		document.querySelector('#login-password').classList.add("hidden")
		document.querySelector('#login-name').classList.add("hidden")

		document.querySelector('#login-screen-phone-next').classList.remove("hidden")
		document.querySelector('#login-screen-phone-wait').classList.add("hidden")

		if (fail) document.querySelector('#login-phone-block').classList.add("login-input-invalid")
	}

	const allowedCode = '1234567890'
	document.querySelector('#code').onkeydown = function(e) {
		//let code = document.querySelector('#code').value.trim()
		if (e.ctrlKey) return true
		if (e.key != "Backspace" && allowedCode.indexOf(e.key) == -1) return false
		document.querySelector('#login-code-block').classList.remove("login-input-invalid")
	}

	document.querySelector('#code').onkeyup = function(e) {
		let code = document.querySelector('#code').value.trim()
		if (code.length > 5) return document.querySelector('#login-code-block').classList.add("login-input-invalid")
		if (code.length == 5) {
			sendCode(code)
		}
	}

	document.querySelector('#login-screen-code-phone').onclick = screenPhone

	function screenCode(phone, fail) {
		document.querySelector('#login-sign-in').classList.add("hidden")
		document.querySelector('#login-sms').classList.remove("hidden")

		if (phone) document.querySelector('#login-screen-code-phone').innerText = phone

		if (fail) document.querySelector('#login-code-block').classList.add("login-input-invalid")
	}

	document.querySelector('#password').onkeydown = function(e) {
		document.querySelector('#login-password-block').classList.remove("login-input-invalid")
	}

	document.querySelector('#login-screen-password-next').onclick = function() {
		document.querySelector('#login-screen-password-next').classList.add("hidden")
		document.querySelector('#login-screen-password-wait').classList.remove("hidden")
		document.querySelector('#login-password-block').classList.remove("login-input-invalid")
		sendPassword(document.querySelector('#password').value.trim())
	}

	function screenPassword(fail) {
		document.querySelector('#login-password').classList.remove("hidden")
		document.querySelector('#login-sign-in').classList.add("hidden")
		document.querySelector('#login-name').classList.add("hidden")
		document.querySelector('#login-sms').classList.add("hidden")

		document.querySelector('#login-screen-password-next').classList.remove("hidden")
		document.querySelector('#login-screen-password-wait').classList.add("hidden")

		if (fail) document.querySelector('#login-password-block').classList.add("login-input-invalid")
	}

	document.querySelector('#name').onkeydown = function(e) {
		document.querySelector('#login-name-block').classList.remove("login-input-invalid")
	}

	document.querySelector('#login-screen-name-next').onclick = function() {
		let name = document.querySelector('#name').value.trim()
		let surname = document.querySelector('#surname').value.trim() || 'Contest'

		if (name == "") {
			document.querySelector('#login-name-block').classList.add("login-input-invalid")
			return
		}

		sendName(name, surname)
		document.querySelector('#login-screen-name-next').classList.add("hidden")
		document.querySelector('#login-screen-name-wait').classList.remove("hidden")
	}

	document.querySelector('#login-name-photo').onclick = function() {
		var input = document.createElement('input');
		input.type = 'file';

		input.onchange = function (e) {
			// getting a hold of the file reference
			var file = e.target.files[0];

			// setting up the reader
			var reader = new FileReader();
			reader.readAsDataURL(file); // this is reading as data url

			// here we tell the reader what to do when it's done reading...
			reader.onload = function (readerEvent) {
				var content = readerEvent.target.result; // this is the content!
				document.querySelector('#login-name-photo').style.backgroundImage = 'url(' + content + ')';
				document.querySelector('#login-name-photo-img').classList.add("hidden")
			}
		}

		input.click();
	}

	function screenName(fail) {
		document.querySelector('#login-name').classList.remove("hidden")
		document.querySelector('#login-sign-in').classList.add("hidden")
		document.querySelector('#login-password').classList.add("hidden")
		document.querySelector('#login-sms').classList.add("hidden")

		document.querySelector('#login-screen-name-next').classList.remove("hidden")
		document.querySelector('#login-screen-name-wait').classList.add("hidden")

		if (fail) document.querySelector('#login-name-block').classList.add("login-input-invalid")
	}

	telegram.subscribe('Login', function(message) {
		console.log('Login', message);
	});

	screenPhone(false)

	// MTPROTO
	var phone_code_hash
	var phone_number
	var phone_code

	function sendPhone(phone) {
		phone_number = phone
		telegram.sendCode(phone).then(function(result) {
			console.log('sendCode result', result)
			phone_code_hash = result.phone_code_hash
			screenCode(phone, false)
		}, function(err) {
			console.log('sendCode err', err)
			screenPhone(true)
		});
	}

	function sendCode(phoneCode) {
		phone_code = phoneCode
		telegram.signIn(phone_number, phone_code_hash, phone_code).then(function(result) {
			console.log('signIn result', result)
			setTimeout(function() {
				window.ready()
			}, 1000);
		}, function(err) {
			console.log('signIn err', err)
			if (err.type == "SESSION_PASSWORD_NEEDED") screenPassword(false)
			if (err.type == "PHONE_NUMBER_UNOCCUPIED") screenName()
			else screenCode(false, true)
		});
	}

	function sendPassword(code) {
		setTimeout(function() {
			screenPassword(true)
		}, 1000);
	}

	function sendName(name, surname) {
		telegram.signUp(phone_number, phone_code_hash, phone_code, name, surname).then(function(result) {
			console.log('signUp err', result)
			setTimeout(function() {
				window.ready()
			}, 1000);
		}, function(err) {
			console.log('signUp err', err)
			screenName(true)
		});
	}

	// Monkey :)

	const xhr = new XMLHttpRequest()
	xhr.open('GET', 'monkey.tgss', true)
	xhr.responseType = 'arraybuffer'
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			//try {
			//	// Attempt to convert it to JSON as is:
			//
			//	// @ts-ignore
			//	//const data = String.fromCharCode.apply(null, new Uint8Array(xhr.response))
			//	//return resolve(JSON.parse(data))
			//
			//	var data = new Uint8Array(xhr.response)
			//
			//} catch (err) {
			// Attempt to ungzip response and convert to JSON:
			//try {
			//	/const data = pako.inflate(xhr.response, { to: 'string' })
			//	/return resolve(JSON.parse(data))
			//} catch (err) {
			//	return reject(err)
			//}
			//}
			monkeyLoaded(xhr.response)
		}
	}
	xhr.send(null)

	function monkeyLoaded(response) {
		console.log(response, typeof(response))
		const data = pako.inflate(xhr.response)
		console.log(data, typeof(data))

		function tgs(offset, size) {
			//return {}//JSON.parse(data.subarray(offset, size)))
			var a = data.subarray(offset, offset + size)
			var b = []
			for (var i = 0; i < a.byteLength; i++) {
				b.push(String.fromCharCode(a[i]))
			}
			//console.log(b.join(''))
			return JSON.parse(b.join(''))
		}
		var TwoFactorSetupMonkeyClose = tgs(0, 330128)
		var TwoFactorSetupMonkeyCloseAndPeek = tgs(330128, 228533)
		var TwoFactorSetupMonkeyPeek = tgs(558661, 160219)
		var TwoFactorSetupMonkeyIdle = tgs(718880, 72927)
		var TwoFactorSetupMonkeyCloseAndPeekToIdle = tgs(791807, 228354)
		var TwoFactorSetupMonkeyTracking = tgs(1020161, 80487)
		//console.log(TwoFactorSetupMonkeyClose)
		//console.log(TwoFactorSetupMonkeyTracking)
		//console.log(JSON.parse(TwoFactorSetupMonkeyClose))
		//offsets: [ 0, 330128, 558661, 718880, 791807, 1020161 ]
		//sizes: [ 330128, 228533, 160219, 72927, 228354, 80487 ]

		function play(tgs, id) {
			lottie.loadAnimation({
				container: document.querySelector(id), // the dom element that will contain the animation
				//renderer: 'svg',
				loop: true,
				autoplay: true,
				animationData: tgs
				//path: 'data.json' // the path to the animation json
			})
		}

		var monkeyPassword = play(TwoFactorSetupMonkeyIdle, "#login-monkey-password")
		var monkeySms = play(TwoFactorSetupMonkeyIdle, "#login-monkey-sms")
	}
};
