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

import * as TL from '../../tdlib/tdapi'
import { nameToInitials } from '../../utils/UserInfo'
import './MessageTypes.scss'
import { inflate } from 'pako'
import Lottie from 'react-lottie'

const dateTemp = new Date()
const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' } as const

export const LottieSticker = memo(function LottieSticker({time, state, downloadFile, sticker}: any) {
	const file: TL.TLFile = sticker

	const srcAva: string | null = state.fileURL[file.id]

	if (srcAva == null) downloadFile(file, true)

	const filePart = fileParts.get(file.id)
	const animationData: ArrayBuffer = filePart? inflate(filePart) : null as unknown as ArrayBuffer

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData ? JSON.parse(new TextDecoder("utf-8").decode(animationData)) : {},
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice'
		}
	}

	return <div className="stickerMy">
		{
			srcAva == null ?
				<div className="webp" style={{ backgroundImage: 'url(blur.png)' }}>{' '}</div>
				:
				<div className="webp"><Lottie options={defaultOptions} height={256} width={256} /></div>
		}
		<div className="time">{time}</div>
	</div>
})

export function CenterSystemMessage({ text }: { text: string }) {
	return <div className="centerSystemMessage">
		<div>{text}</div>
	</div>
}

function CenterSystemMessageGroupPic({ src }: { src: string }) {
	return <div className="centerSystemMessageGroupPic">
		<div style={{ backgroundImage: 'url(' + src + ')' }}>{' '}</div>
	</div>
}

export function StickerMy({time, state, downloadFile, sticker}: any) {
	const file: TL.TLFile = sticker

	const srcAva: string | null = state.fileURL[file.id]

	if (srcAva == null) downloadFile(file)

	return <div className="stickerMy">
		<div className="webp" style={{ backgroundImage: 'url(' + (srcAva || 'blur.png') + ')' }}>{' '}</div>
		<div className="time">{time}</div>
	</div>
}

export const MessageMy = memo(function MessageMy({text, time, date, reactions}: {text: any, time: string, date: number, reactions?: any[]}) {
	dateTemp.setTime(date * 1000)
	const timeTitle = dateTemp.toLocaleString(navigator.language, dateOptions)
	return <div className="messageMy">
		{text}
		<div className="text">&nbsp;&nbsp;&nbsp;</div>
		{reactions}
		<div className="time" title={timeTitle}>{time}</div>
	</div>
})

export const MessageTheirs = memo(function MessageTheirs({text, time, date, author, avatar, views, reactions}: any) {
	dateTemp.setTime(date * 1000)
	const timeTitle = dateTemp.toLocaleString(navigator.language, dateOptions)
	return <div>
		{null && avatar && <img className="messageAvatar" src={avatar} alt="Avatar" />}
		<div className="messageTheirs">
			{author && <div className="author">{author}</div>}
			{text}
			{false && <div className="text">{text}</div>}
			<div key="text" className="text">&nbsp;&nbsp;&nbsp;</div>
			<div key="right" className="right">
				{reactions}
				<div className="time" title={timeTitle}>{time}</div>
				{views && <div className="views" title={views + ' views'}>{views}</div>}
			</div>
		</div>
	</div>
})

export const MessageSameSender = memo(function MessageSameSender({children}: any) {
	return <div className="messageSameSender">
		{children}
	</div>
})

export const MessageSameSenderTheirs = memo(function MessageSameSenderTheirs({children, state, senderUserId, saveFileUrl, downloadFile}: any) {
	const user = state.users[senderUserId]
	const chat = state.chats[state.currentChatId]

	const srcAva: string | null =
		(user && user.photo && state.fileURL[user.photo.small.id])
		(chat && chat.photo && state.fileURL[chat.photo.small.id])
		user ?
			:

		if (srcAva == null && user && user.photo) downloadFile(user.photo.small.id)
		if (srcAva == null && chat && chat.photo) downloadFile(chat.photo.small.id)

	let name: string =
		user ?
			(user && (user.firstName + ' ' + user.lastName).trim())
			:
			(chat ? (chat.title).trim() : '??')

	if (
		user &&
		user.type['@type'] === 'userTypeDeleted'
	) name = 'Deleted Account'

	return <div className="messageSameSenderTheirs" key={senderUserId}>
		{srcAva != null && <img className="messageAvatar" src={srcAva || 'blur.jpg'} key={senderUserId} alt="Avatar" />}
		{srcAva == null && <span className="messageAvatarPlaceholder" key={senderUserId}>{nameToInitials(name)}</span>}
		{children}
	</div>
})

export function MessagePhotoTheirs({sized, downloadFile, text, time, date, author, views}: any) {
	const file: TL.TLFile = sized
	const fileURL = useSelector((state: State) => state.fileURL[file.id])

	const srcAva: string | null = fileURL // state.fileURL[file.id]

	if (srcAva == null) downloadFile(file)

	dateTemp.setTime(date * 1000)
	const timeTitle = dateTemp.toLocaleString(navigator.language, dateOptions)

	return <div>
		<div className={text.length !== 0 ? "messageTheirs messageTheirsPhoto" : "messageTheirs messageTheirsPhoto messageTheirsPhotoNoCaption"}>
			{author && <div className="author">{author}</div>}
			<div className="messagePhoto"><img className="" src={srcAva || 'blur.jpg'} alt="Avatar" /></div>
			{text}
			<div className="text">&nbsp;&nbsp;&nbsp;</div>
			<div className="right">
				<div className="time" title={timeTitle}>{time}</div>
				{views && <div className="views" title={views + ' views'}>{views}</div>}
			</div>
		</div>
	</div>
}

export function StickerOnMessage({state, sticker, downloadFile, pos, senderName}: any) {
	const file: TL.TLFile = sticker

	const srcAva: string | null = state.fileURL[file.id]
	if (srcAva == null) downloadFile(file)
}
	return <img src={srcAva || 'blur.png'} className="stickerOnMessage" title={`${senderName} reacted with sticker`} alt="Sticker" />
