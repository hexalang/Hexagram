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
import { state } from '../../mobx/store'
import { inflate } from 'pako'
import Lottie from 'react-lottie'
import { observer } from "mobx-react-lite"
import { Var } from 'react'
import styled, { css } from 'styled-components'

const dateTemp = new Date()
const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' } as const

const StickerMyStyled = styled.div<{
}>`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	margin-top: 8px;
	margin-bottom: 4px;
	margin-right: 16px;
	position: relative;

	& div.webp {
		display: flex;
		width: 256px;
		height: 256px;
		background-color: transparent;
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
		cursor: pointer;
		// Buggy:
		//--fallback: url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7);
		//background-image: var(--pic, --fallback);
		background-image: url('data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7');
		transition: background-image 0.333s ease-in-out;
	}

	& div.time {
		position: absolute;
		pointer-events: none;
		font-size: 11pt;
		color: white;
		border-radius: 10px;
		height: 22px;
		background-color: rgba(0, 0, 0, 0.2);
		width: auto;
		bottom: 0px;
		right: 0px;
		padding-bottom: 20px;
		padding-top: 4px;
		padding-left: 7px;
		padding-right: 7px;

		display: none;
		backdrop-filter: blur(10px);
	}

	&:hover div.time {
		display: block;
	}
`

export const LottieSticker = observer(({
	time,
	sticker
}: {
	sticker: TL.TLFile,
	time: string
}) => {
	const file: TL.TLFile = sticker

	const srcAva: string | null = state.fileURL(file)

	if (srcAva == null) state.downloadFile(file, true)

	const filePart = state.fileParts(file)
	const animationData: ArrayBuffer = filePart ? inflate(filePart) : null as unknown as ArrayBuffer

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData ? JSON.parse(new TextDecoder("utf-8").decode(animationData)) : {},
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice'
		}
	}

	return (
		<StickerMyStyled>
			{
				srcAva == null ?
					<div className="webp" style={{ backgroundImage: 'url(blur.png)' }}>{' '}</div>
					:
					<div className="webp"><Lottie options={defaultOptions} height={256} width={256} /></div>
			}
			<div className="time">{time}</div>
		</StickerMyStyled>
	)
})

const CenterSystemMessageStyled = styled.div<{
}>`
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin-top: 8px;
	margin-bottom: 4px;

	& div {
		display: flex;
		color: white;
		font-size: 10.5pt;
		background-color: rgba(0, 0, 0, 0.2);
		border-radius: 12px;
		padding: 4px 12px;
		backdrop-filter: blur(10px);
	}
`

export const CenterSystemMessage = observer(({ text }: { text: string }) => {
	return (
		<CenterSystemMessageStyled>
			<div>{text}</div>
		</CenterSystemMessageStyled>
	)
})

const CenterSystemMessageGroupPicStyled = styled.div<{
}>`
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin-top: 8px;
	margin-bottom: 4px;

	& div {
		display: flex;
		width: 100px;
		height: 100px;
		border-radius: 100%;
		background-size: contain;
		background-color: transparent;
		background-repeat: no-repeat;
		background-position: center;
		cursor: pointer;
		background-image: var(--pic);
	}
`

const CenterSystemMessageGroupPic = ({ src }: { src: string }) => {
	return (
			<div style={{ backgroundImage: 'url(' + src + ')' }}>{' '}</div>
		<CenterSystemMessageGroupPicStyled>
		</CenterSystemMessageGroupPicStyled>
	)
}

export const StickerMy = observer(({
	time, sticker }: {
		sticker: TL.TLFile, time: string
	}) => {
	const file: TL.TLFile = sticker

	const srcAva: string | null = state.fileURL(file)

	if (srcAva == null) state.downloadFile(file, true)

	return (
		<StickerMyStyled>
			<div className="webp" style={{ backgroundImage: 'url(' + (srcAva || 'blur.png') + ')' } as Var}>{' '}</div>
			<div className="time">{time}</div>
		</StickerMyStyled>
	)
})

const MessageMyStyled = styled.div<{
}>`
	display: flex;
	background-color: #effdde;
	border-radius: 6px;
	max-width: 430px;
	min-height: 33px;
	padding: 11px;
	flex-shrink: 0;
	flex-direction: row;
	flex-wrap: wrap;
	flex-grow: 1;
	position: relative;
	box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);

	& div.time {
		display: flex;
		font-size: 11pt;
		color: #6cc264;
		white-space: nowrap;
		align-self: flex-end;
		flex-grow: 0;
		margin-left: auto;
	}

	& div.text {
		font-size: 11pt;
		display: flex;
		color: black;
		white-space: normal;
		cursor: text;
		white-space: normal;
		flex-grow: 1;
		height: auto;
		word-break: break-word;
		text-align: left;
	}
`

export const MessageMy = observer(({
	text, time, date, reactions
}: {
	// TODO use props. and interfaces
	text: any, time: string, date: number, reactions?: any[]
}) => {
	dateTemp.setTime(date * 1000)
	const timeTitle = dateTemp.toLocaleString(navigator.language, dateOptions)
	return (
		<MessageMyStyled>
			{text}
			<div key="nbsp" className="text">&nbsp;&nbsp;&nbsp;</div>
			{reactions}
			<div key="time" className="time" title={timeTitle}>{time}</div>
		</MessageMyStyled>
	)
})

const MessageAvatar = styled.img<{
}>`
	width: 33px;
	height: 33px;
	border-radius: 100%;
	position: absolute;
	left: 13px;
	top: calc(100% - 34px);
	cursor: pointer;
`

const MessageTheirsStyled = styled.div<{
}>`
	display: flex;
	background-color: white;
	border-radius: 6px;
	max-width: 430px;
	min-height: 33px;
	padding: 11px;
	flex-shrink: 0;
	flex-direction: row;
	flex-wrap: wrap;
	flex-grow: 1;
	position: relative;
	box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);

	& div.right {
		display: flex;
		align-self: flex-end;
		margin-left: auto;
	}

	& div.time {
		display: flex;
		font-size: 11pt;
		color: #a0acb6;
		white-space: nowrap;
		flex-grow: 0;
		margin-left: auto;
	}

	& div.views {
		display: flex;
		font-size: 11pt;
		color: #a0acb6;
		white-space: nowrap;
		flex-grow: 0;
		margin-left: auto;
	}

	& div.author {
		flex-basis: 100%;
		text-align: left;
		font-size: 11pt;
		color: #16b4ef;
		cursor: pointer;
	}

	& div.text {
		font-size: 11pt;
		display: flex;
		color: black;
		white-space: normal;
		cursor: text;
		white-space: normal;
		flex-grow: 1;
		height: auto;
		word-break: break-word;
		text-align: left;
	}

	& div.textLine {
		flex-basis: 100%;
	}
`

export const MessageTheirs = observer(({
	text, time, date, author, avatar, views, reactions
}: {
	text: React.ReactNode, time: string, date: number, author: string | null, avatar?: string, views?: React.ReactNode, reactions: React.ReactNode
}) => {
	dateTemp.setTime(date * 1000)
	const timeTitle = dateTemp.toLocaleString(navigator.language, dateOptions)
	return (
		<div>
			{null && avatar && <MessageAvatar src={avatar} alt="Avatar" />}
			<MessageTheirsStyled>
				{author && <div className="author">{author}</div>}
				{text}
				{false && <div className="text">{text}</div>}
				<div key="text" className="text">&nbsp;&nbsp;&nbsp;</div>
				<div key="right" className="right">
					{reactions}
					<div className="time" title={timeTitle}>{time}</div>
					{views && <div className="views" title={views + ' views'}>{views}</div>}
				</div>
			</MessageTheirsStyled>
		</div>
	)
})

const MessageSameSenderStyled = styled.div<{
}>`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	margin-bottom: 10px;

	> div {
		margin-top: 1px;
		margin-bottom: 2px;
		margin-right: 16px;
	}
`

export const MessageSameSender = observer(({ children }: any) => {
	return (
		<MessageSameSenderStyled>
			{children}
		</MessageSameSenderStyled>
	)
})

const MessageSameSenderTheirsStyled = styled.div<{
}>`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-bottom: 10px;
	position: relative;

	& > div {
		margin-top: 1px;
		margin-bottom: 2px;
		margin-left: 55px;
	}
`

const MessageAvatarPlaceholder = styled.span<{
}>`
	width: 33px;
	height: 33px;
	border-radius: 100%;
	position: absolute;
	left: 13px;
	top: calc(100% - 34px);
	display: block;
	font-size: 13px;
	background-color: #7bc862;
	display: flex;
	justify-content: center;
	flex-direction: column;
	color: white;
	flex-shrink: 0;
	cursor: pointer;
`

export const MessageSameSenderTheirs = observer(({ children, senderUserId }: {
	senderUserId: number, children: React.ReactNode
}) => {
	const user = state.users.get(senderUserId)
	const chat = state.chats.get(state.currentChatId)

	const srcAva =
		user ?
			(user && user.photo && state.fileURL(user.photo.small))
			:
			(chat && chat.photo && state.fileURL(chat.photo.small))

	// TODO mobx
	if (srcAva == null && user && user.photo) state.downloadFile(user.photo.small, true)
	if (srcAva == null && chat && chat.photo) state.downloadFile(chat.photo.small, true)

	let name: string =
		user ?
			(user && (user.firstName + ' ' + user.lastName).trim())
			:
			(chat ? (chat.meta.title).trim() : '??')

	if (
		user &&
		user.type['@type'] === 'userTypeDeleted'
	) name = 'Deleted Account'

	return (
		<MessageSameSenderTheirsStyled key={senderUserId}>
			{srcAva != null && <MessageAvatar src={srcAva || 'blur.jpg'} key={senderUserId} alt="Avatar" />}
			{srcAva == null && <MessageAvatarPlaceholder key={senderUserId}>{nameToInitials(name)}</MessageAvatarPlaceholder>}
			{children}
		</MessageSameSenderTheirsStyled>
	)
})

const MessagePhoto = styled.div<{
}>`
	flex-basis: 100%;
	max-width: 430px;
	max-height: 240px;

	background-image: url(bg_initial.jpg);
	background-repeat: repeat;

	& img {
		height: auto;
		width: auto;
		max-width: 430px;
		max-height: 240px;
	}
`

const MessagePhotoTheirsStyled = styled(MessageTheirsStyled) <{
	readonly noCaption: boolean
}>`
	padding-right: 0px;
	padding-left: 0px;
	padding-top: 0px;
	position: relative;

	& .author {
		padding: 8px;
		padding-left: 14px;
	}

	& .right {
		padding-right: 8px;
		padding-top: 8px;
	}
	& .text {
		padding-left: 8px;
		padding-top: 8px;
	}

	${({ noCaption }) => noCaption && css`
		padding: 0px;

		& .right {
			position: absolute;
			bottom: 10px;
			right: 10px;
			visibility: hidden;

			& .time {
				color: white !important;
				background-color: rgba(0, 0, 0, 0.2);
				border-radius: 8px;
				padding-bottom: 3px;
				padding-top: 4px;
				padding-left: 7px;
				padding-right: 7px;
			}
		}

		&:hover .right {
			visibility: visible;
		}

		& .text {
			display: none !important;
		}
	`}
`

export const MessagePhotoTheirs = observer(({ sized, text, time, date, author, views }: {
	sized: TL.TLFile, text: React.ReactNode[], time: string | null, date: number, author: string | null, views?: string
}) => {
	const file: TL.TLFile = sized
	const fileURL = state.fileURL(file)

	const srcAva: string | null = fileURL // state.fileURL[file.id]

	if (srcAva == null) state.downloadFile(file, true)

	dateTemp.setTime(date * 1000)
	const timeTitle = dateTemp.toLocaleString(navigator.language, dateOptions)

	return (
		<div>
			<MessagePhotoTheirsStyled noCaption={text.length === 0}>
				{author && <div className="author">{author}</div>}
				<MessagePhoto><img className="" src={srcAva || 'blur.jpg'} alt="Avatar" /></MessagePhoto>
				{text}
				<div className="text">&nbsp;&nbsp;&nbsp;</div>
				<div className="right">
					<div className="time" title={timeTitle}>{time}</div>
					{views && <div className="views" title={views + ' views'}>{views}</div>}
				</div>
			</MessagePhotoTheirsStyled>
		</div>
	)
})

const StickerOnMessageImage = styled.img<{
}>`
	width: 28px;
	height: 28px;
	cursor: pointer; // TODO open sticker pack on click
	// TODO RMB to show reaction message itself
	border-radius: 100%;
	// TODO baseline: -10px;
	// TODO line-height: -10px;
`

export const StickerOnMessage = observer(({ sticker, senderName }: {
	senderName: string, sticker: TL.TLFile
}) => {
	const srcAva: string | null = state.fileURL(sticker)
	if (srcAva == null) state.downloadFile(sticker, true)
	// TODO click on reaction
	return <StickerOnMessageImage src={srcAva || 'blur.png'} className="stickerOnMessage" title={`${senderName} reacted with sticker`} alt="Sticker" />
})
