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

import TdClient, { TdObject } from 'tdweb'

// TDLib
export interface TLError {
	readonly "@type": "error"
	readonly code: number
	readonly message: string
}
export interface TLOk {
	readonly "@type": "ok"
}
export interface TLTdlibParameters {
	readonly "@type": "tdlibParameters"
	readonly use_test_dc: boolean
	readonly database_directory: string
	readonly files_directory: string
	readonly use_file_database: boolean
	readonly use_chat_info_database: boolean
	readonly use_message_database: boolean
	readonly use_secret_chats: boolean
	readonly api_id: number
	readonly api_hash: string
	readonly system_language_code: string
	readonly device_model: string
	readonly system_version: string
	readonly application_version: string
	readonly enable_storage_optimizer: boolean
	readonly ignore_file_names: boolean
}
export interface TLAuthenticationCodeTypeTelegramMessage {
	readonly "@type": "authenticationCodeTypeTelegramMessage"
	readonly length: number
}
export interface TLAuthenticationCodeTypeSms {
	readonly "@type": "authenticationCodeTypeSms"
	readonly length: number
}
export interface TLAuthenticationCodeTypeCall {
	readonly "@type": "authenticationCodeTypeCall"
	readonly length: number
}
export interface TLAuthenticationCodeTypeFlashCall {
	readonly "@type": "authenticationCodeTypeFlashCall"
	readonly pattern: string
}
export type TLAuthenticationCodeType = TLAuthenticationCodeTypeTelegramMessage | TLAuthenticationCodeTypeSms | TLAuthenticationCodeTypeCall | TLAuthenticationCodeTypeFlashCall
export interface TLAuthenticationCodeInfo {
	readonly "@type": "authenticationCodeInfo"
	readonly phone_number: string
	readonly type: TLAuthenticationCodeType
	readonly next_type: TLAuthenticationCodeType
	readonly timeout: number
}
export interface TLEmailAddressAuthenticationCodeInfo {
	readonly "@type": "emailAddressAuthenticationCodeInfo"
	readonly email_address_pattern: string
	readonly length: number
}
export interface TLTextEntity {
	readonly "@type": "textEntity"
	readonly offset: number
	readonly length: number
	readonly type: TLTextEntityType
}
export interface TLTextEntities {
	readonly "@type": "textEntities"
	readonly entities: ReadonlyArray<TLTextEntity>
}
export interface TLFormattedText {
	readonly "@type": "formattedText"
	readonly text: string
	readonly entities: ReadonlyArray<TLTextEntity>
}
export interface TLTermsOfService {
	readonly "@type": "termsOfService"
	readonly text: TLFormattedText
	readonly min_user_age: number
	readonly show_popup: boolean
}
export interface TLAuthorizationStateWaitTdlibParameters {
	readonly "@type": "authorizationStateWaitTdlibParameters"
}
export interface TLAuthorizationStateWaitEncryptionKey {
	readonly "@type": "authorizationStateWaitEncryptionKey"
	readonly is_encrypted: boolean
}
export interface TLAuthorizationStateWaitPhoneNumber {
	readonly "@type": "authorizationStateWaitPhoneNumber"
}
export interface TLAuthorizationStateWaitCode {
	readonly "@type": "authorizationStateWaitCode"
	readonly code_info: TLAuthenticationCodeInfo
}
export interface TLAuthorizationStateWaitOtherDeviceConfirmation {
	readonly "@type": "authorizationStateWaitOtherDeviceConfirmation"
	readonly link: string
}
export interface TLAuthorizationStateWaitRegistration {
	readonly "@type": "authorizationStateWaitRegistration"
	readonly terms_of_service: TLTermsOfService
}
export interface TLAuthorizationStateWaitPassword {
	readonly "@type": "authorizationStateWaitPassword"
	readonly password_hint: string
	readonly has_recovery_email_address: boolean
	readonly recovery_email_address_pattern: string
}
export interface TLAuthorizationStateReady {
	readonly "@type": "authorizationStateReady"
}
export interface TLAuthorizationStateLoggingOut {
	readonly "@type": "authorizationStateLoggingOut"
}
export interface TLAuthorizationStateClosing {
	readonly "@type": "authorizationStateClosing"
}
export interface TLAuthorizationStateClosed {
	readonly "@type": "authorizationStateClosed"
}
export type TLAuthorizationState = TLAuthorizationStateWaitTdlibParameters | TLAuthorizationStateWaitEncryptionKey | TLAuthorizationStateWaitPhoneNumber | TLAuthorizationStateWaitCode | TLAuthorizationStateWaitOtherDeviceConfirmation | TLAuthorizationStateWaitRegistration | TLAuthorizationStateWaitPassword | TLAuthorizationStateReady | TLAuthorizationStateLoggingOut | TLAuthorizationStateClosing | TLAuthorizationStateClosed
export interface TLPasswordState {
	readonly "@type": "passwordState"
	readonly has_password: boolean
	readonly password_hint: string
	readonly has_recovery_email_address: boolean
	readonly has_passport_data: boolean
	readonly recovery_email_address_code_info: TLEmailAddressAuthenticationCodeInfo
}
export interface TLRecoveryEmailAddress {
	readonly "@type": "recoveryEmailAddress"
	readonly recovery_email_address: string
}
export interface TLTemporaryPasswordState {
	readonly "@type": "temporaryPasswordState"
	readonly has_password: boolean
	readonly valid_for: number
}
export interface TLLocalFile {
	readonly "@type": "localFile"
	readonly path: string
	readonly can_be_downloaded: boolean
	readonly can_be_deleted: boolean
	readonly is_downloading_active: boolean
	readonly is_downloading_completed: boolean
	readonly download_offset: number
	readonly downloaded_prefix_size: number
	readonly downloaded_size: number
}
export interface TLRemoteFile {
	readonly "@type": "remoteFile"
	readonly id: string
	readonly unique_id: string
	readonly is_uploading_active: boolean
	readonly is_uploading_completed: boolean
	readonly uploaded_size: number
}
export interface TLFile {
	readonly "@type": "file"
	readonly id: number
	readonly size: number
	readonly expected_size: number
	readonly local: TLLocalFile
	readonly remote: TLRemoteFile
}
export interface TLInputFileId {
	readonly "@type": "inputFileId"
	readonly id: number
}
export interface TLInputFileRemote {
	readonly "@type": "inputFileRemote"
	readonly id: string
}
export interface TLInputFileLocal {
	readonly "@type": "inputFileLocal"
	readonly path: string
}
export interface TLInputFileGenerated {
	readonly "@type": "inputFileGenerated"
	readonly original_path: string
	readonly conversion: string
	readonly expected_size: number
}
export type TLInputFile = TLInputFileId | TLInputFileRemote | TLInputFileLocal | TLInputFileGenerated
export interface TLPhotoSize {
	readonly "@type": "photoSize"
	readonly type: string
	readonly photo: TLFile
	readonly width: number
	readonly height: number
	readonly progressive_sizes: ReadonlyArray<number>
}
export interface TLMinithumbnail {
	readonly "@type": "minithumbnail"
	readonly width: number
	readonly height: number
	readonly data: Uint8Array
}
export interface TLThumbnailFormatJpeg {
	readonly "@type": "thumbnailFormatJpeg"
}
export interface TLThumbnailFormatPng {
	readonly "@type": "thumbnailFormatPng"
}
export interface TLThumbnailFormatWebp {
	readonly "@type": "thumbnailFormatWebp"
}
export interface TLThumbnailFormatGif {
	readonly "@type": "thumbnailFormatGif"
}
export interface TLThumbnailFormatTgs {
	readonly "@type": "thumbnailFormatTgs"
}
export interface TLThumbnailFormatMpeg4 {
	readonly "@type": "thumbnailFormatMpeg4"
}
export type TLThumbnailFormat = TLThumbnailFormatJpeg | TLThumbnailFormatPng | TLThumbnailFormatWebp | TLThumbnailFormatGif | TLThumbnailFormatTgs | TLThumbnailFormatMpeg4
export interface TLThumbnail {
	readonly "@type": "thumbnail"
	readonly format: TLThumbnailFormat
	readonly width: number
	readonly height: number
	readonly file: TLFile
}
export interface TLMaskPointForehead {
	readonly "@type": "maskPointForehead"
}
export interface TLMaskPointEyes {
	readonly "@type": "maskPointEyes"
}
export interface TLMaskPointMouth {
	readonly "@type": "maskPointMouth"
}
export interface TLMaskPointChin {
	readonly "@type": "maskPointChin"
}
export type TLMaskPoint = TLMaskPointForehead | TLMaskPointEyes | TLMaskPointMouth | TLMaskPointChin
export interface TLMaskPosition {
	readonly "@type": "maskPosition"
	readonly point: TLMaskPoint
	readonly x_shift: number
	readonly y_shift: number
	readonly scale: number
}
export interface TLPollOption {
	readonly "@type": "pollOption"
	readonly text: string
	readonly voter_count: number
	readonly vote_percentage: number
	readonly is_chosen: boolean
	readonly is_being_chosen: boolean
}
export interface TLPollTypeRegular {
	readonly "@type": "pollTypeRegular"
	readonly allow_multiple_answers: boolean
}
export interface TLPollTypeQuiz {
	readonly "@type": "pollTypeQuiz"
	readonly correct_option_id: number
	readonly explanation: TLFormattedText
}
export type TLPollType = TLPollTypeRegular | TLPollTypeQuiz
export interface TLAnimation {
	readonly "@type": "animation"
	readonly duration: number
	readonly width: number
	readonly height: number
	readonly file_name: string
	readonly mime_type: string
	readonly has_stickers: boolean
	readonly minithumbnail: TLMinithumbnail
	readonly thumbnail: TLThumbnail
	readonly animation: TLFile
}
export interface TLAudio {
	readonly "@type": "audio"
	readonly duration: number
	readonly title: string
	readonly performer: string
	readonly file_name: string
	readonly mime_type: string
	readonly album_cover_minithumbnail: TLMinithumbnail
	readonly album_cover_thumbnail: TLThumbnail
	readonly audio: TLFile
}
export interface TLDocument {
	readonly "@type": "document"
	readonly file_name: string
	readonly mime_type: string
	readonly minithumbnail: TLMinithumbnail
	readonly thumbnail: TLThumbnail
	readonly document: TLFile
}
export interface TLPhoto {
	readonly "@type": "photo"
	readonly has_stickers: boolean
	readonly minithumbnail: TLMinithumbnail
	readonly sizes: ReadonlyArray<TLPhotoSize>
}
export interface TLSticker {
	readonly "@type": "sticker"
	readonly set_id: string
	readonly width: number
	readonly height: number
	readonly emoji: string
	readonly is_animated: boolean
	readonly is_mask: boolean
	readonly mask_position: TLMaskPosition
	readonly thumbnail: TLThumbnail
	readonly sticker: TLFile
}
export interface TLVideo {
	readonly "@type": "video"
	readonly duration: number
	readonly width: number
	readonly height: number
	readonly file_name: string
	readonly mime_type: string
	readonly has_stickers: boolean
	readonly supports_streaming: boolean
	readonly minithumbnail: TLMinithumbnail
	readonly thumbnail: TLThumbnail
	readonly video: TLFile
}
export interface TLVideoNote {
	readonly "@type": "videoNote"
	readonly duration: number
	readonly length: number
	readonly minithumbnail: TLMinithumbnail
	readonly thumbnail: TLThumbnail
	readonly video: TLFile
}
export interface TLVoiceNote {
	readonly "@type": "voiceNote"
	readonly duration: number
	readonly waveform: Uint8Array
	readonly mime_type: string
	readonly voice: TLFile
}
export interface TLContact {
	readonly "@type": "contact"
	readonly phone_number: string
	readonly first_name: string
	readonly last_name: string
	readonly vcard: string
	readonly user_id: number
}
export interface TLLocation {
	readonly "@type": "location"
	readonly latitude: number
	readonly longitude: number
	readonly horizontal_accuracy: number
}
export interface TLVenue {
	readonly "@type": "venue"
	readonly location: TLLocation
	readonly title: string
	readonly address: string
	readonly provider: string
	readonly id: string
	readonly type: string
}
export interface TLGame {
	readonly "@type": "game"
	readonly id: string
	readonly short_name: string
	readonly title: string
	readonly text: TLFormattedText
	readonly description: string
	readonly photo: TLPhoto
	readonly animation: TLAnimation
}
export interface TLPoll {
	readonly "@type": "poll"
	readonly id: string
	readonly question: string
	readonly options: ReadonlyArray<TLPollOption>
	readonly total_voter_count: number
	readonly recent_voter_user_ids: ReadonlyArray<number>
	readonly is_anonymous: boolean
	readonly type: TLPollType
	readonly open_period: number
	readonly close_date: number
	readonly is_closed: boolean
}
export interface TLProfilePhoto {
	readonly "@type": "profilePhoto"
	readonly id: string
	readonly small: TLFile
	readonly big: TLFile
	readonly has_animation: boolean
}
export interface TLChatPhotoInfo {
	readonly "@type": "chatPhotoInfo"
	readonly small: TLFile
	readonly big: TLFile
	readonly has_animation: boolean
}
export interface TLUserTypeRegular {
	readonly "@type": "userTypeRegular"
}
export interface TLUserTypeDeleted {
	readonly "@type": "userTypeDeleted"
}
export interface TLUserTypeBot {
	readonly "@type": "userTypeBot"
	readonly can_join_groups: boolean
	readonly can_read_all_group_messages: boolean
	readonly is_inline: boolean
	readonly inline_query_placeholder: string
	readonly need_location: boolean
}
export interface TLUserTypeUnknown {
	readonly "@type": "userTypeUnknown"
}
export type TLUserType = TLUserTypeRegular | TLUserTypeDeleted | TLUserTypeBot | TLUserTypeUnknown
export interface TLBotCommand {
	readonly "@type": "botCommand"
	readonly command: string
	readonly description: string
}
export interface TLBotInfo {
	readonly "@type": "botInfo"
	readonly description: string
	readonly commands: ReadonlyArray<TLBotCommand>
}
export interface TLChatLocation {
	readonly "@type": "chatLocation"
	readonly location: TLLocation
	readonly address: string
}
export interface TLAnimatedChatPhoto {
	readonly "@type": "animatedChatPhoto"
	readonly length: number
	readonly file: TLFile
	readonly main_frame_timestamp: number
}
export interface TLChatPhoto {
	readonly "@type": "chatPhoto"
	readonly id: string
	readonly added_date: number
	readonly minithumbnail: TLMinithumbnail
	readonly sizes: ReadonlyArray<TLPhotoSize>
	readonly animation: TLAnimatedChatPhoto
}
export interface TLChatPhotos {
	readonly "@type": "chatPhotos"
	readonly total_count: number
	readonly photos: ReadonlyArray<TLChatPhoto>
}
export interface TLInputChatPhotoPrevious {
	readonly "@type": "inputChatPhotoPrevious"
	readonly chat_photo_id: string
}
export interface TLInputChatPhotoStatic {
	readonly "@type": "inputChatPhotoStatic"
	readonly photo: TLInputFile
}
export interface TLInputChatPhotoAnimation {
	readonly "@type": "inputChatPhotoAnimation"
	readonly animation: TLInputFile
	readonly main_frame_timestamp: number
}
export type TLInputChatPhoto = TLInputChatPhotoPrevious | TLInputChatPhotoStatic | TLInputChatPhotoAnimation
export interface TLUser {
	readonly "@type": "user"
	readonly id: number
	readonly first_name: string
	readonly last_name: string
	readonly username: string
	readonly phone_number: string
	readonly status: TLUserStatus
	readonly profile_photo: TLProfilePhoto
	readonly is_contact: boolean
	readonly is_mutual_contact: boolean
	readonly is_verified: boolean
	readonly is_support: boolean
	readonly restriction_reason: string
	readonly is_scam: boolean
	readonly have_access: boolean
	readonly type: TLUserType
	readonly language_code: string
}
export interface TLUserFullInfo {
	readonly "@type": "userFullInfo"
	readonly photo: TLChatPhoto
	readonly is_blocked: boolean
	readonly can_be_called: boolean
	readonly supports_video_calls: boolean
	readonly has_private_calls: boolean
	readonly need_phone_number_privacy_exception: boolean
	readonly bio: string
	readonly share_text: string
	readonly group_in_common_count: number
	readonly bot_info: TLBotInfo
}
export interface TLUsers {
	readonly "@type": "users"
	readonly total_count: number
	readonly user_ids: ReadonlyArray<number>
}
export interface TLChatAdministrator {
	readonly "@type": "chatAdministrator"
	readonly user_id: number
	readonly custom_title: string
	readonly is_owner: boolean
}
export interface TLChatAdministrators {
	readonly "@type": "chatAdministrators"
	readonly administrators: ReadonlyArray<TLChatAdministrator>
}
export interface TLChatPermissions {
	readonly "@type": "chatPermissions"
	readonly can_send_messages: boolean
	readonly can_send_media_messages: boolean
	readonly can_send_polls: boolean
	readonly can_send_other_messages: boolean
	readonly can_add_web_page_previews: boolean
	readonly can_change_info: boolean
	readonly can_invite_users: boolean
	readonly can_pin_messages: boolean
}
export interface TLChatMemberStatusCreator {
	readonly "@type": "chatMemberStatusCreator"
	readonly custom_title: string
	readonly is_anonymous: boolean
	readonly is_member: boolean
}
export interface TLChatMemberStatusAdministrator {
	readonly "@type": "chatMemberStatusAdministrator"
	readonly custom_title: string
	readonly can_be_edited: boolean
	readonly can_change_info: boolean
	readonly can_post_messages: boolean
	readonly can_edit_messages: boolean
	readonly can_delete_messages: boolean
	readonly can_invite_users: boolean
	readonly can_restrict_members: boolean
	readonly can_pin_messages: boolean
	readonly can_promote_members: boolean
	readonly is_anonymous: boolean
}
export interface TLChatMemberStatusMember {
	readonly "@type": "chatMemberStatusMember"
}
export interface TLChatMemberStatusRestricted {
	readonly "@type": "chatMemberStatusRestricted"
	readonly is_member: boolean
	readonly restricted_until_date: number
	readonly permissions: TLChatPermissions
}
export interface TLChatMemberStatusLeft {
	readonly "@type": "chatMemberStatusLeft"
}
export interface TLChatMemberStatusBanned {
	readonly "@type": "chatMemberStatusBanned"
	readonly banned_until_date: number
}
export type TLChatMemberStatus = TLChatMemberStatusCreator | TLChatMemberStatusAdministrator | TLChatMemberStatusMember | TLChatMemberStatusRestricted | TLChatMemberStatusLeft | TLChatMemberStatusBanned
export interface TLChatMember {
	readonly "@type": "chatMember"
	readonly user_id: number
	readonly inviter_user_id: number
	readonly joined_chat_date: number
	readonly status: TLChatMemberStatus
	readonly bot_info: TLBotInfo
}
export interface TLChatMembers {
	readonly "@type": "chatMembers"
	readonly total_count: number
	readonly members: ReadonlyArray<TLChatMember>
}
export interface TLChatMembersFilterContacts {
	readonly "@type": "chatMembersFilterContacts"
}
export interface TLChatMembersFilterAdministrators {
	readonly "@type": "chatMembersFilterAdministrators"
}
export interface TLChatMembersFilterMembers {
	readonly "@type": "chatMembersFilterMembers"
}
export interface TLChatMembersFilterMention {
	readonly "@type": "chatMembersFilterMention"
	readonly message_thread_id: number
}
export interface TLChatMembersFilterRestricted {
	readonly "@type": "chatMembersFilterRestricted"
}
export interface TLChatMembersFilterBanned {
	readonly "@type": "chatMembersFilterBanned"
}
export interface TLChatMembersFilterBots {
	readonly "@type": "chatMembersFilterBots"
}
export type TLChatMembersFilter = TLChatMembersFilterContacts | TLChatMembersFilterAdministrators | TLChatMembersFilterMembers | TLChatMembersFilterMention | TLChatMembersFilterRestricted | TLChatMembersFilterBanned | TLChatMembersFilterBots
export interface TLSupergroupMembersFilterRecent {
	readonly "@type": "supergroupMembersFilterRecent"
}
export interface TLSupergroupMembersFilterContacts {
	readonly "@type": "supergroupMembersFilterContacts"
	readonly query: string
}
export interface TLSupergroupMembersFilterAdministrators {
	readonly "@type": "supergroupMembersFilterAdministrators"
}
export interface TLSupergroupMembersFilterSearch {
	readonly "@type": "supergroupMembersFilterSearch"
	readonly query: string
}
export interface TLSupergroupMembersFilterRestricted {
	readonly "@type": "supergroupMembersFilterRestricted"
	readonly query: string
}
export interface TLSupergroupMembersFilterBanned {
	readonly "@type": "supergroupMembersFilterBanned"
	readonly query: string
}
export interface TLSupergroupMembersFilterMention {
	readonly "@type": "supergroupMembersFilterMention"
	readonly query: string
	readonly message_thread_id: number
}
export interface TLSupergroupMembersFilterBots {
	readonly "@type": "supergroupMembersFilterBots"
}
export type TLSupergroupMembersFilter = TLSupergroupMembersFilterRecent | TLSupergroupMembersFilterContacts | TLSupergroupMembersFilterAdministrators | TLSupergroupMembersFilterSearch | TLSupergroupMembersFilterRestricted | TLSupergroupMembersFilterBanned | TLSupergroupMembersFilterMention | TLSupergroupMembersFilterBots
export interface TLBasicGroup {
	readonly "@type": "basicGroup"
	readonly id: number
	readonly member_count: number
	readonly status: TLChatMemberStatus
	readonly is_active: boolean
	readonly upgraded_to_supergroup_id: number
}
export interface TLBasicGroupFullInfo {
	readonly "@type": "basicGroupFullInfo"
	readonly photo: TLChatPhoto
	readonly description: string
	readonly creator_user_id: number
	readonly members: ReadonlyArray<TLChatMember>
	readonly invite_link: string
}
export interface TLSupergroup {
	readonly "@type": "supergroup"
	readonly id: number
	readonly username: string
	readonly date: number
	readonly status: TLChatMemberStatus
	readonly member_count: number
	readonly has_linked_chat: boolean
	readonly has_location: boolean
	readonly sign_messages: boolean
	readonly is_slow_mode_enabled: boolean
	readonly is_channel: boolean
	readonly is_verified: boolean
	readonly restriction_reason: string
	readonly is_scam: boolean
}
export interface TLSupergroupFullInfo {
	readonly "@type": "supergroupFullInfo"
	readonly photo: TLChatPhoto
	readonly description: string
	readonly member_count: number
	readonly administrator_count: number
	readonly restricted_count: number
	readonly banned_count: number
	readonly linked_chat_id: number
	readonly slow_mode_delay: number
	readonly slow_mode_delay_expires_in: number
	readonly can_get_members: boolean
	readonly can_set_username: boolean
	readonly can_set_sticker_set: boolean
	readonly can_set_location: boolean
	readonly can_get_statistics: boolean
	readonly is_all_history_available: boolean
	readonly sticker_set_id: string
	readonly location: TLChatLocation
	readonly invite_link: string
	readonly upgraded_from_basic_group_id: number
	readonly upgraded_from_max_message_id: number
}
export interface TLSecretChatStatePending {
	readonly "@type": "secretChatStatePending"
}
export interface TLSecretChatStateReady {
	readonly "@type": "secretChatStateReady"
}
export interface TLSecretChatStateClosed {
	readonly "@type": "secretChatStateClosed"
}
export type TLSecretChatState = TLSecretChatStatePending | TLSecretChatStateReady | TLSecretChatStateClosed
export interface TLSecretChat {
	readonly "@type": "secretChat"
	readonly id: number
	readonly user_id: number
	readonly state: TLSecretChatState
	readonly is_outbound: boolean
	readonly ttl: number
	readonly key_hash: Uint8Array
	readonly layer: number
}
export interface TLMessageSenderUser {
	readonly "@type": "messageSenderUser"
	readonly user_id: number
}
export interface TLMessageSenderChat {
	readonly "@type": "messageSenderChat"
	readonly chat_id: number
}
export type TLMessageSender = TLMessageSenderUser | TLMessageSenderChat
export interface TLMessageSenders {
	readonly "@type": "messageSenders"
	readonly total_count: number
	readonly senders: ReadonlyArray<TLMessageSender>
}
export interface TLMessageForwardOriginUser {
	readonly "@type": "messageForwardOriginUser"
	readonly sender_user_id: number
}
export interface TLMessageForwardOriginChat {
	readonly "@type": "messageForwardOriginChat"
	readonly sender_chat_id: number
	readonly author_signature: string
}
export interface TLMessageForwardOriginHiddenUser {
	readonly "@type": "messageForwardOriginHiddenUser"
	readonly sender_name: string
}
export interface TLMessageForwardOriginChannel {
	readonly "@type": "messageForwardOriginChannel"
	readonly chat_id: number
	readonly message_id: number
	readonly author_signature: string
}
export type TLMessageForwardOrigin = TLMessageForwardOriginUser | TLMessageForwardOriginChat | TLMessageForwardOriginHiddenUser | TLMessageForwardOriginChannel
export interface TLMessageForwardInfo {
	readonly "@type": "messageForwardInfo"
	readonly origin: TLMessageForwardOrigin
	readonly date: number
	readonly public_service_announcement_type: string
	readonly from_chat_id: number
	readonly from_message_id: number
}
export interface TLMessageReplyInfo {
	readonly "@type": "messageReplyInfo"
	readonly reply_count: number
	readonly recent_repliers: ReadonlyArray<TLMessageSender>
	readonly last_read_inbox_message_id: number
	readonly last_read_outbox_message_id: number
	readonly last_message_id: number
}
export interface TLMessageInteractionInfo {
	readonly "@type": "messageInteractionInfo"
	readonly view_count: number
	readonly forward_count: number
	readonly reply_info: TLMessageReplyInfo
}
export interface TLMessageSendingStatePending {
	readonly "@type": "messageSendingStatePending"
}
export interface TLMessageSendingStateFailed {
	readonly "@type": "messageSendingStateFailed"
	readonly error_code: number
	readonly error_message: string
	readonly can_retry: boolean
	readonly retry_after: number
}
export type TLMessageSendingState = TLMessageSendingStatePending | TLMessageSendingStateFailed
export interface TLMessage {
	readonly "@type": "message"
	readonly id: number
	readonly sender: TLMessageSender
	readonly chat_id: number
	readonly sending_state: TLMessageSendingState
	readonly scheduling_state: TLMessageSchedulingState
	readonly is_outgoing: boolean
	readonly is_pinned: boolean
	readonly can_be_edited: boolean
	readonly can_be_forwarded: boolean
	readonly can_be_deleted_only_for_self: boolean
	readonly can_be_deleted_for_all_users: boolean
	readonly can_get_statistics: boolean
	readonly can_get_message_thread: boolean
	readonly is_channel_post: boolean
	readonly contains_unread_mention: boolean
	readonly date: number
	readonly edit_date: number
	readonly forward_info: TLMessageForwardInfo
	readonly interaction_info: TLMessageInteractionInfo
	readonly reply_in_chat_id: number
	readonly reply_to_message_id: number
	readonly message_thread_id: number
	readonly ttl: number
	readonly ttl_expires_in: number
	readonly via_bot_user_id: number
	readonly author_signature: string
	readonly media_album_id: string
	readonly restriction_reason: string
	readonly content: TLMessageContent
	readonly reply_markup: TLReplyMarkup
}
export interface TLMessages {
	readonly "@type": "messages"
	readonly total_count: number
	readonly messages: ReadonlyArray<TLMessage>
}
export interface TLFoundMessages {
	readonly "@type": "foundMessages"
	readonly total_count: number
	readonly messages: ReadonlyArray<TLMessage>
	readonly next_offset: string
}
export interface TLNotificationSettingsScopePrivateChats {
	readonly "@type": "notificationSettingsScopePrivateChats"
}
export interface TLNotificationSettingsScopeGroupChats {
	readonly "@type": "notificationSettingsScopeGroupChats"
}
export interface TLNotificationSettingsScopeChannelChats {
	readonly "@type": "notificationSettingsScopeChannelChats"
}
export type TLNotificationSettingsScope = TLNotificationSettingsScopePrivateChats | TLNotificationSettingsScopeGroupChats | TLNotificationSettingsScopeChannelChats
export interface TLChatNotificationSettings {
	readonly "@type": "chatNotificationSettings"
	readonly use_default_mute_for: boolean
	readonly mute_for: number
	readonly use_default_sound: boolean
	readonly sound: string
	readonly use_default_show_preview: boolean
	readonly show_preview: boolean
	readonly use_default_disable_pinned_message_notifications: boolean
	readonly disable_pinned_message_notifications: boolean
	readonly use_default_disable_mention_notifications: boolean
	readonly disable_mention_notifications: boolean
}
export interface TLScopeNotificationSettings {
	readonly "@type": "scopeNotificationSettings"
	readonly mute_for: number
	readonly sound: string
	readonly show_preview: boolean
	readonly disable_pinned_message_notifications: boolean
	readonly disable_mention_notifications: boolean
}
export interface TLDraftMessage {
	readonly "@type": "draftMessage"
	readonly reply_to_message_id: number
	readonly date: number
	readonly input_message_text: TLInputMessageContent
}
export interface TLChatTypePrivate {
	readonly "@type": "chatTypePrivate"
	readonly user_id: number
}
export interface TLChatTypeBasicGroup {
	readonly "@type": "chatTypeBasicGroup"
	readonly basic_group_id: number
}
export interface TLChatTypeSupergroup {
	readonly "@type": "chatTypeSupergroup"
	readonly supergroup_id: number
	readonly is_channel: boolean
}
export interface TLChatTypeSecret {
	readonly "@type": "chatTypeSecret"
	readonly secret_chat_id: number
	readonly user_id: number
}
export type TLChatType = TLChatTypePrivate | TLChatTypeBasicGroup | TLChatTypeSupergroup | TLChatTypeSecret
export interface TLChatFilter {
	readonly "@type": "chatFilter"
	readonly title: string
	readonly icon_name: string
	readonly pinned_chat_ids: ReadonlyArray<number>
	readonly included_chat_ids: ReadonlyArray<number>
	readonly excluded_chat_ids: ReadonlyArray<number>
	readonly exclude_muted: boolean
	readonly exclude_read: boolean
	readonly exclude_archived: boolean
	readonly include_contacts: boolean
	readonly include_non_contacts: boolean
	readonly include_bots: boolean
	readonly include_groups: boolean
	readonly include_channels: boolean
}
export interface TLChatFilterInfo {
	readonly "@type": "chatFilterInfo"
	readonly id: number
	readonly title: string
	readonly icon_name: string
}
export interface TLRecommendedChatFilter {
	readonly "@type": "recommendedChatFilter"
	readonly filter: TLChatFilter
	readonly description: string
}
export interface TLRecommendedChatFilters {
	readonly "@type": "recommendedChatFilters"
	readonly chat_filters: ReadonlyArray<TLRecommendedChatFilter>
}
export interface TLChatListMain {
	readonly "@type": "chatListMain"
}
export interface TLChatListArchive {
	readonly "@type": "chatListArchive"
}
export interface TLChatListFilter {
	readonly "@type": "chatListFilter"
	readonly chat_filter_id: number
}
export type TLChatList = TLChatListMain | TLChatListArchive | TLChatListFilter
export interface TLChatLists {
	readonly "@type": "chatLists"
	readonly chat_lists: ReadonlyArray<TLChatList>
}
export interface TLChatSourceMtprotoProxy {
	readonly "@type": "chatSourceMtprotoProxy"
}
export interface TLChatSourcePublicServiceAnnouncement {
	readonly "@type": "chatSourcePublicServiceAnnouncement"
	readonly type: string
	readonly text: string
}
export type TLChatSource = TLChatSourceMtprotoProxy | TLChatSourcePublicServiceAnnouncement
export interface TLChatPosition {
	readonly "@type": "chatPosition"
	readonly list: TLChatList
	readonly order: string
	readonly is_pinned: boolean
	readonly source: TLChatSource
}
export interface TLChat {
	readonly "@type": "chat"
	readonly id: number
	readonly type: TLChatType
	readonly title: string
	readonly photo: TLChatPhotoInfo
	readonly permissions: TLChatPermissions
	readonly last_message: TLMessage
	readonly positions: ReadonlyArray<TLChatPosition>
	readonly is_marked_as_unread: boolean
	readonly is_blocked: boolean
	readonly has_scheduled_messages: boolean
	readonly can_be_deleted_only_for_self: boolean
	readonly can_be_deleted_for_all_users: boolean
	readonly can_be_reported: boolean
	readonly default_disable_notification: boolean
	readonly unread_count: number
	readonly last_read_inbox_message_id: number
	readonly last_read_outbox_message_id: number
	readonly unread_mention_count: number
	readonly notification_settings: TLChatNotificationSettings
	readonly action_bar: TLChatActionBar
	readonly reply_markup_message_id: number
	readonly draft_message: TLDraftMessage
	readonly client_data: string
}
export interface TLChats {
	readonly "@type": "chats"
	readonly total_count: number
	readonly chat_ids: ReadonlyArray<number>
}
export interface TLChatNearby {
	readonly "@type": "chatNearby"
	readonly chat_id: number
	readonly distance: number
}
export interface TLChatsNearby {
	readonly "@type": "chatsNearby"
	readonly users_nearby: ReadonlyArray<TLChatNearby>
	readonly supergroups_nearby: ReadonlyArray<TLChatNearby>
}
export interface TLChatInviteLink {
	readonly "@type": "chatInviteLink"
	readonly invite_link: string
}
export interface TLChatInviteLinkInfo {
	readonly "@type": "chatInviteLinkInfo"
	readonly chat_id: number
	readonly accessible_for: number
	readonly type: TLChatType
	readonly title: string
	readonly photo: TLChatPhotoInfo
	readonly member_count: number
	readonly member_user_ids: ReadonlyArray<number>
	readonly is_public: boolean
}
export interface TLPublicChatTypeHasUsername {
	readonly "@type": "publicChatTypeHasUsername"
}
export interface TLPublicChatTypeIsLocationBased {
	readonly "@type": "publicChatTypeIsLocationBased"
}
export type TLPublicChatType = TLPublicChatTypeHasUsername | TLPublicChatTypeIsLocationBased
export interface TLChatActionBarReportSpam {
	readonly "@type": "chatActionBarReportSpam"
	readonly can_unarchive: boolean
}
export interface TLChatActionBarReportUnrelatedLocation {
	readonly "@type": "chatActionBarReportUnrelatedLocation"
}
export interface TLChatActionBarReportAddBlock {
	readonly "@type": "chatActionBarReportAddBlock"
	readonly can_unarchive: boolean
	readonly distance: number
}
export interface TLChatActionBarAddContact {
	readonly "@type": "chatActionBarAddContact"
}
export interface TLChatActionBarSharePhoneNumber {
	readonly "@type": "chatActionBarSharePhoneNumber"
}
export type TLChatActionBar = TLChatActionBarReportSpam | TLChatActionBarReportUnrelatedLocation | TLChatActionBarReportAddBlock | TLChatActionBarAddContact | TLChatActionBarSharePhoneNumber
export interface TLKeyboardButtonTypeText {
	readonly "@type": "keyboardButtonTypeText"
}
export interface TLKeyboardButtonTypeRequestPhoneNumber {
	readonly "@type": "keyboardButtonTypeRequestPhoneNumber"
}
export interface TLKeyboardButtonTypeRequestLocation {
	readonly "@type": "keyboardButtonTypeRequestLocation"
}
export interface TLKeyboardButtonTypeRequestPoll {
	readonly "@type": "keyboardButtonTypeRequestPoll"
	readonly force_regular: boolean
	readonly force_quiz: boolean
}
export type TLKeyboardButtonType = TLKeyboardButtonTypeText | TLKeyboardButtonTypeRequestPhoneNumber | TLKeyboardButtonTypeRequestLocation | TLKeyboardButtonTypeRequestPoll
export interface TLKeyboardButton {
	readonly "@type": "keyboardButton"
	readonly text: string
	readonly type: TLKeyboardButtonType
}
export interface TLInlineKeyboardButtonTypeUrl {
	readonly "@type": "inlineKeyboardButtonTypeUrl"
	readonly url: string
}
export interface TLInlineKeyboardButtonTypeLoginUrl {
	readonly "@type": "inlineKeyboardButtonTypeLoginUrl"
	readonly url: string
	readonly id: number
	readonly forward_text: string
}
export interface TLInlineKeyboardButtonTypeCallback {
	readonly "@type": "inlineKeyboardButtonTypeCallback"
	readonly data: Uint8Array
}
export interface TLInlineKeyboardButtonTypeCallbackWithPassword {
	readonly "@type": "inlineKeyboardButtonTypeCallbackWithPassword"
	readonly data: Uint8Array
}
export interface TLInlineKeyboardButtonTypeCallbackGame {
	readonly "@type": "inlineKeyboardButtonTypeCallbackGame"
}
export interface TLInlineKeyboardButtonTypeSwitchInline {
	readonly "@type": "inlineKeyboardButtonTypeSwitchInline"
	readonly query: string
	readonly in_current_chat: boolean
}
export interface TLInlineKeyboardButtonTypeBuy {
	readonly "@type": "inlineKeyboardButtonTypeBuy"
}
export type TLInlineKeyboardButtonType = TLInlineKeyboardButtonTypeUrl | TLInlineKeyboardButtonTypeLoginUrl | TLInlineKeyboardButtonTypeCallback | TLInlineKeyboardButtonTypeCallbackWithPassword | TLInlineKeyboardButtonTypeCallbackGame | TLInlineKeyboardButtonTypeSwitchInline | TLInlineKeyboardButtonTypeBuy
export interface TLInlineKeyboardButton {
	readonly "@type": "inlineKeyboardButton"
	readonly text: string
	readonly type: TLInlineKeyboardButtonType
}
export interface TLReplyMarkupRemoveKeyboard {
	readonly "@type": "replyMarkupRemoveKeyboard"
	readonly is_personal: boolean
}
export interface TLReplyMarkupForceReply {
	readonly "@type": "replyMarkupForceReply"
	readonly is_personal: boolean
}
export interface TLReplyMarkupShowKeyboard {
	readonly "@type": "replyMarkupShowKeyboard"
	readonly rows: ReadonlyArray<ReadonlyArray<TLKeyboardButton>>
	readonly resize_keyboard: boolean
	readonly one_time: boolean
	readonly is_personal: boolean
}
export interface TLReplyMarkupInlineKeyboard {
	readonly "@type": "replyMarkupInlineKeyboard"
	readonly rows: ReadonlyArray<ReadonlyArray<TLInlineKeyboardButton>>
}
export type TLReplyMarkup = TLReplyMarkupRemoveKeyboard | TLReplyMarkupForceReply | TLReplyMarkupShowKeyboard | TLReplyMarkupInlineKeyboard
export interface TLLoginUrlInfoOpen {
	readonly "@type": "loginUrlInfoOpen"
	readonly url: string
	readonly skip_confirm: boolean
}
export interface TLLoginUrlInfoRequestConfirmation {
	readonly "@type": "loginUrlInfoRequestConfirmation"
	readonly url: string
	readonly domain: string
	readonly bot_user_id: number
	readonly request_write_access: boolean
}
export type TLLoginUrlInfo = TLLoginUrlInfoOpen | TLLoginUrlInfoRequestConfirmation
export interface TLMessageThreadInfo {
	readonly "@type": "messageThreadInfo"
	readonly chat_id: number
	readonly message_thread_id: number
	readonly reply_info: TLMessageReplyInfo
	readonly messages: ReadonlyArray<TLMessage>
	readonly draft_message: TLDraftMessage
}
export interface TLRichTextPlain {
	readonly "@type": "richTextPlain"
	readonly text: string
}
export interface TLRichTextBold {
	readonly "@type": "richTextBold"
	readonly text: TLRichText
}
export interface TLRichTextItalic {
	readonly "@type": "richTextItalic"
	readonly text: TLRichText
}
export interface TLRichTextUnderline {
	readonly "@type": "richTextUnderline"
	readonly text: TLRichText
}
export interface TLRichTextStrikethrough {
	readonly "@type": "richTextStrikethrough"
	readonly text: TLRichText
}
export interface TLRichTextFixed {
	readonly "@type": "richTextFixed"
	readonly text: TLRichText
}
export interface TLRichTextUrl {
	readonly "@type": "richTextUrl"
	readonly text: TLRichText
	readonly url: string
	readonly is_cached: boolean
}
export interface TLRichTextEmailAddress {
	readonly "@type": "richTextEmailAddress"
	readonly text: TLRichText
	readonly email_address: string
}
export interface TLRichTextSubscript {
	readonly "@type": "richTextSubscript"
	readonly text: TLRichText
}
export interface TLRichTextSuperscript {
	readonly "@type": "richTextSuperscript"
	readonly text: TLRichText
}
export interface TLRichTextMarked {
	readonly "@type": "richTextMarked"
	readonly text: TLRichText
}
export interface TLRichTextPhoneNumber {
	readonly "@type": "richTextPhoneNumber"
	readonly text: TLRichText
	readonly phone_number: string
}
export interface TLRichTextIcon {
	readonly "@type": "richTextIcon"
	readonly document: TLDocument
	readonly width: number
	readonly height: number
}
export interface TLRichTextReference {
	readonly "@type": "richTextReference"
	readonly text: TLRichText
	readonly reference_text: TLRichText
	readonly url: string
}
export interface TLRichTextAnchor {
	readonly "@type": "richTextAnchor"
	readonly name: string
}
export interface TLRichTextAnchorLink {
	readonly "@type": "richTextAnchorLink"
	readonly text: TLRichText
	readonly name: string
	readonly url: string
}
export interface TLRichTexts {
	readonly "@type": "richTexts"
	readonly texts: ReadonlyArray<TLRichText>
}
export type TLRichText = TLRichTextPlain | TLRichTextBold | TLRichTextItalic | TLRichTextUnderline | TLRichTextStrikethrough | TLRichTextFixed | TLRichTextUrl | TLRichTextEmailAddress | TLRichTextSubscript | TLRichTextSuperscript | TLRichTextMarked | TLRichTextPhoneNumber | TLRichTextIcon | TLRichTextReference | TLRichTextAnchor | TLRichTextAnchorLink | TLRichTexts
export interface TLPageBlockCaption {
	readonly "@type": "pageBlockCaption"
	readonly text: TLRichText
	readonly credit: TLRichText
}
export interface TLPageBlockListItem {
	readonly "@type": "pageBlockListItem"
	readonly label: string
	readonly page_blocks: ReadonlyArray<TLPageBlock>
}
export interface TLPageBlockHorizontalAlignmentLeft {
	readonly "@type": "pageBlockHorizontalAlignmentLeft"
}
export interface TLPageBlockHorizontalAlignmentCenter {
	readonly "@type": "pageBlockHorizontalAlignmentCenter"
}
export interface TLPageBlockHorizontalAlignmentRight {
	readonly "@type": "pageBlockHorizontalAlignmentRight"
}
export type TLPageBlockHorizontalAlignment = TLPageBlockHorizontalAlignmentLeft | TLPageBlockHorizontalAlignmentCenter | TLPageBlockHorizontalAlignmentRight
export interface TLPageBlockVerticalAlignmentTop {
	readonly "@type": "pageBlockVerticalAlignmentTop"
}
export interface TLPageBlockVerticalAlignmentMiddle {
	readonly "@type": "pageBlockVerticalAlignmentMiddle"
}
export interface TLPageBlockVerticalAlignmentBottom {
	readonly "@type": "pageBlockVerticalAlignmentBottom"
}
export type TLPageBlockVerticalAlignment = TLPageBlockVerticalAlignmentTop | TLPageBlockVerticalAlignmentMiddle | TLPageBlockVerticalAlignmentBottom
export interface TLPageBlockTableCell {
	readonly "@type": "pageBlockTableCell"
	readonly text: TLRichText
	readonly is_header: boolean
	readonly colspan: number
	readonly rowspan: number
	readonly align: TLPageBlockHorizontalAlignment
	readonly valign: TLPageBlockVerticalAlignment
}
export interface TLPageBlockRelatedArticle {
	readonly "@type": "pageBlockRelatedArticle"
	readonly url: string
	readonly title: string
	readonly description: string
	readonly photo: TLPhoto
	readonly author: string
	readonly publish_date: number
}
export interface TLPageBlockTitle {
	readonly "@type": "pageBlockTitle"
	readonly title: TLRichText
}
export interface TLPageBlockSubtitle {
	readonly "@type": "pageBlockSubtitle"
	readonly subtitle: TLRichText
}
export interface TLPageBlockAuthorDate {
	readonly "@type": "pageBlockAuthorDate"
	readonly author: TLRichText
	readonly publish_date: number
}
export interface TLPageBlockHeader {
	readonly "@type": "pageBlockHeader"
	readonly header: TLRichText
}
export interface TLPageBlockSubheader {
	readonly "@type": "pageBlockSubheader"
	readonly subheader: TLRichText
}
export interface TLPageBlockKicker {
	readonly "@type": "pageBlockKicker"
	readonly kicker: TLRichText
}
export interface TLPageBlockParagraph {
	readonly "@type": "pageBlockParagraph"
	readonly text: TLRichText
}
export interface TLPageBlockPreformatted {
	readonly "@type": "pageBlockPreformatted"
	readonly text: TLRichText
	readonly language: string
}
export interface TLPageBlockFooter {
	readonly "@type": "pageBlockFooter"
	readonly footer: TLRichText
}
export interface TLPageBlockDivider {
	readonly "@type": "pageBlockDivider"
}
export interface TLPageBlockAnchor {
	readonly "@type": "pageBlockAnchor"
	readonly name: string
}
export interface TLPageBlockList {
	readonly "@type": "pageBlockList"
	readonly items: ReadonlyArray<TLPageBlockListItem>
}
export interface TLPageBlockBlockQuote {
	readonly "@type": "pageBlockBlockQuote"
	readonly text: TLRichText
	readonly credit: TLRichText
}
export interface TLPageBlockPullQuote {
	readonly "@type": "pageBlockPullQuote"
	readonly text: TLRichText
	readonly credit: TLRichText
}
export interface TLPageBlockAnimation {
	readonly "@type": "pageBlockAnimation"
	readonly animation: TLAnimation
	readonly caption: TLPageBlockCaption
	readonly need_autoplay: boolean
}
export interface TLPageBlockAudio {
	readonly "@type": "pageBlockAudio"
	readonly audio: TLAudio
	readonly caption: TLPageBlockCaption
}
export interface TLPageBlockPhoto {
	readonly "@type": "pageBlockPhoto"
	readonly photo: TLPhoto
	readonly caption: TLPageBlockCaption
	readonly url: string
}
export interface TLPageBlockVideo {
	readonly "@type": "pageBlockVideo"
	readonly video: TLVideo
	readonly caption: TLPageBlockCaption
	readonly need_autoplay: boolean
	readonly is_looped: boolean
}
export interface TLPageBlockVoiceNote {
	readonly "@type": "pageBlockVoiceNote"
	readonly voice_note: TLVoiceNote
	readonly caption: TLPageBlockCaption
}
export interface TLPageBlockCover {
	readonly "@type": "pageBlockCover"
	readonly cover: TLPageBlock
}
export interface TLPageBlockEmbedded {
	readonly "@type": "pageBlockEmbedded"
	readonly url: string
	readonly html: string
	readonly poster_photo: TLPhoto
	readonly width: number
	readonly height: number
	readonly caption: TLPageBlockCaption
	readonly is_full_width: boolean
	readonly allow_scrolling: boolean
}
export interface TLPageBlockEmbeddedPost {
	readonly "@type": "pageBlockEmbeddedPost"
	readonly url: string
	readonly author: string
	readonly author_photo: TLPhoto
	readonly date: number
	readonly page_blocks: ReadonlyArray<TLPageBlock>
	readonly caption: TLPageBlockCaption
}
export interface TLPageBlockCollage {
	readonly "@type": "pageBlockCollage"
	readonly page_blocks: ReadonlyArray<TLPageBlock>
	readonly caption: TLPageBlockCaption
}
export interface TLPageBlockSlideshow {
	readonly "@type": "pageBlockSlideshow"
	readonly page_blocks: ReadonlyArray<TLPageBlock>
	readonly caption: TLPageBlockCaption
}
export interface TLPageBlockChatLink {
	readonly "@type": "pageBlockChatLink"
	readonly title: string
	readonly photo: TLChatPhotoInfo
	readonly username: string
}
export interface TLPageBlockTable {
	readonly "@type": "pageBlockTable"
	readonly caption: TLRichText
	readonly cells: ReadonlyArray<ReadonlyArray<TLPageBlockTableCell>>
	readonly is_bordered: boolean
	readonly is_striped: boolean
}
export interface TLPageBlockDetails {
	readonly "@type": "pageBlockDetails"
	readonly header: TLRichText
	readonly page_blocks: ReadonlyArray<TLPageBlock>
	readonly is_open: boolean
}
export interface TLPageBlockRelatedArticles {
	readonly "@type": "pageBlockRelatedArticles"
	readonly header: TLRichText
	readonly articles: ReadonlyArray<TLPageBlockRelatedArticle>
}
export interface TLPageBlockMap {
	readonly "@type": "pageBlockMap"
	readonly location: TLLocation
	readonly zoom: number
	readonly width: number
	readonly height: number
	readonly caption: TLPageBlockCaption
}
export type TLPageBlock = TLPageBlockTitle | TLPageBlockSubtitle | TLPageBlockAuthorDate | TLPageBlockHeader | TLPageBlockSubheader | TLPageBlockKicker | TLPageBlockParagraph | TLPageBlockPreformatted | TLPageBlockFooter | TLPageBlockDivider | TLPageBlockAnchor | TLPageBlockList | TLPageBlockBlockQuote | TLPageBlockPullQuote | TLPageBlockAnimation | TLPageBlockAudio | TLPageBlockPhoto | TLPageBlockVideo | TLPageBlockVoiceNote | TLPageBlockCover | TLPageBlockEmbedded | TLPageBlockEmbeddedPost | TLPageBlockCollage | TLPageBlockSlideshow | TLPageBlockChatLink | TLPageBlockTable | TLPageBlockDetails | TLPageBlockRelatedArticles | TLPageBlockMap
export interface TLWebPageInstantView {
	readonly "@type": "webPageInstantView"
	readonly page_blocks: ReadonlyArray<TLPageBlock>
	readonly view_count: number
	readonly version: number
	readonly is_rtl: boolean
	readonly is_full: boolean
}
export interface TLWebPage {
	readonly "@type": "webPage"
	readonly url: string
	readonly display_url: string
	readonly type: string
	readonly site_name: string
	readonly title: string
	readonly description: TLFormattedText
	readonly photo: TLPhoto
	readonly embed_url: string
	readonly embed_type: string
	readonly embed_width: number
	readonly embed_height: number
	readonly duration: number
	readonly author: string
	readonly animation: TLAnimation
	readonly audio: TLAudio
	readonly document: TLDocument
	readonly sticker: TLSticker
	readonly video: TLVideo
	readonly video_note: TLVideoNote
	readonly voice_note: TLVoiceNote
	readonly instant_view_version: number
}
export interface TLCountryInfo {
	readonly "@type": "countryInfo"
	readonly country_code: string
	readonly name: string
	readonly english_name: string
	readonly is_hidden: boolean
	readonly calling_codes: ReadonlyArray<string>
}
export interface TLCountries {
	readonly "@type": "countries"
	readonly countries: ReadonlyArray<TLCountryInfo>
}
export interface TLPhoneNumberInfo {
	readonly "@type": "phoneNumberInfo"
	readonly country: TLCountryInfo
	readonly country_calling_code: string
	readonly formatted_phone_number: string
}
export interface TLBankCardActionOpenUrl {
	readonly "@type": "bankCardActionOpenUrl"
	readonly text: string
	readonly url: string
}
export interface TLBankCardInfo {
	readonly "@type": "bankCardInfo"
	readonly title: string
	readonly actions: ReadonlyArray<TLBankCardActionOpenUrl>
}
export interface TLAddress {
	readonly "@type": "address"
	readonly country_code: string
	readonly state: string
	readonly city: string
	readonly street_line1: string
	readonly street_line2: string
	readonly postal_code: string
}
export interface TLLabeledPricePart {
	readonly "@type": "labeledPricePart"
	readonly label: string
	readonly amount: number
}
export interface TLInvoice {
	readonly "@type": "invoice"
	readonly currency: string
	readonly price_parts: ReadonlyArray<TLLabeledPricePart>
	readonly is_test: boolean
	readonly need_name: boolean
	readonly need_phone_number: boolean
	readonly need_email_address: boolean
	readonly need_shipping_address: boolean
	readonly send_phone_number_to_provider: boolean
	readonly send_email_address_to_provider: boolean
	readonly is_flexible: boolean
}
export interface TLOrderInfo {
	readonly "@type": "orderInfo"
	readonly name: string
	readonly phone_number: string
	readonly email_address: string
	readonly shipping_address: TLAddress
}
export interface TLShippingOption {
	readonly "@type": "shippingOption"
	readonly id: string
	readonly title: string
	readonly price_parts: ReadonlyArray<TLLabeledPricePart>
}
export interface TLSavedCredentials {
	readonly "@type": "savedCredentials"
	readonly id: string
	readonly title: string
}
export interface TLInputCredentialsSaved {
	readonly "@type": "inputCredentialsSaved"
	readonly saved_credentials_id: string
}
export interface TLInputCredentialsNew {
	readonly "@type": "inputCredentialsNew"
	readonly data: string
	readonly allow_save: boolean
}
export interface TLInputCredentialsAndroidPay {
	readonly "@type": "inputCredentialsAndroidPay"
	readonly data: string
}
export interface TLInputCredentialsApplePay {
	readonly "@type": "inputCredentialsApplePay"
	readonly data: string
}
export type TLInputCredentials = TLInputCredentialsSaved | TLInputCredentialsNew | TLInputCredentialsAndroidPay | TLInputCredentialsApplePay
export interface TLPaymentsProviderStripe {
	readonly "@type": "paymentsProviderStripe"
	readonly publishable_key: string
	readonly need_country: boolean
	readonly need_postal_code: boolean
	readonly need_cardholder_name: boolean
}
export interface TLPaymentForm {
	readonly "@type": "paymentForm"
	readonly invoice: TLInvoice
	readonly url: string
	readonly payments_provider: TLPaymentsProviderStripe
	readonly saved_order_info: TLOrderInfo
	readonly saved_credentials: TLSavedCredentials
	readonly can_save_credentials: boolean
	readonly need_password: boolean
}
export interface TLValidatedOrderInfo {
	readonly "@type": "validatedOrderInfo"
	readonly order_info_id: string
	readonly shipping_options: ReadonlyArray<TLShippingOption>
}
export interface TLPaymentResult {
	readonly "@type": "paymentResult"
	readonly success: boolean
	readonly verification_url: string
}
export interface TLPaymentReceipt {
	readonly "@type": "paymentReceipt"
	readonly date: number
	readonly payments_provider_user_id: number
	readonly invoice: TLInvoice
	readonly order_info: TLOrderInfo
	readonly shipping_option: TLShippingOption
	readonly credentials_title: string
}
export interface TLDatedFile {
	readonly "@type": "datedFile"
	readonly file: TLFile
	readonly date: number
}
export interface TLPassportElementTypePersonalDetails {
	readonly "@type": "passportElementTypePersonalDetails"
}
export interface TLPassportElementTypePassport {
	readonly "@type": "passportElementTypePassport"
}
export interface TLPassportElementTypeDriverLicense {
	readonly "@type": "passportElementTypeDriverLicense"
}
export interface TLPassportElementTypeIdentityCard {
	readonly "@type": "passportElementTypeIdentityCard"
}
export interface TLPassportElementTypeInternalPassport {
	readonly "@type": "passportElementTypeInternalPassport"
}
export interface TLPassportElementTypeAddress {
	readonly "@type": "passportElementTypeAddress"
}
export interface TLPassportElementTypeUtilityBill {
	readonly "@type": "passportElementTypeUtilityBill"
}
export interface TLPassportElementTypeBankStatement {
	readonly "@type": "passportElementTypeBankStatement"
}
export interface TLPassportElementTypeRentalAgreement {
	readonly "@type": "passportElementTypeRentalAgreement"
}
export interface TLPassportElementTypePassportRegistration {
	readonly "@type": "passportElementTypePassportRegistration"
}
export interface TLPassportElementTypeTemporaryRegistration {
	readonly "@type": "passportElementTypeTemporaryRegistration"
}
export interface TLPassportElementTypePhoneNumber {
	readonly "@type": "passportElementTypePhoneNumber"
}
export interface TLPassportElementTypeEmailAddress {
	readonly "@type": "passportElementTypeEmailAddress"
}
export type TLPassportElementType = TLPassportElementTypePersonalDetails | TLPassportElementTypePassport | TLPassportElementTypeDriverLicense | TLPassportElementTypeIdentityCard | TLPassportElementTypeInternalPassport | TLPassportElementTypeAddress | TLPassportElementTypeUtilityBill | TLPassportElementTypeBankStatement | TLPassportElementTypeRentalAgreement | TLPassportElementTypePassportRegistration | TLPassportElementTypeTemporaryRegistration | TLPassportElementTypePhoneNumber | TLPassportElementTypeEmailAddress
export interface TLDate {
	readonly "@type": "date"
	readonly day: number
	readonly month: number
	readonly year: number
}
export interface TLPersonalDetails {
	readonly "@type": "personalDetails"
	readonly first_name: string
	readonly middle_name: string
	readonly last_name: string
	readonly native_first_name: string
	readonly native_middle_name: string
	readonly native_last_name: string
	readonly birthdate: TLDate
	readonly gender: string
	readonly country_code: string
	readonly residence_country_code: string
}
export interface TLIdentityDocument {
	readonly "@type": "identityDocument"
	readonly number: string
	readonly expiry_date: TLDate
	readonly front_side: TLDatedFile
	readonly reverse_side: TLDatedFile
	readonly selfie: TLDatedFile
	readonly translation: ReadonlyArray<TLDatedFile>
}
export interface TLInputIdentityDocument {
	readonly "@type": "inputIdentityDocument"
	readonly number: string
	readonly expiry_date: TLDate
	readonly front_side: TLInputFile
	readonly reverse_side: TLInputFile
	readonly selfie: TLInputFile
	readonly translation: ReadonlyArray<TLInputFile>
}
export interface TLPersonalDocument {
	readonly "@type": "personalDocument"
	readonly files: ReadonlyArray<TLDatedFile>
	readonly translation: ReadonlyArray<TLDatedFile>
}
export interface TLInputPersonalDocument {
	readonly "@type": "inputPersonalDocument"
	readonly files: ReadonlyArray<TLInputFile>
	readonly translation: ReadonlyArray<TLInputFile>
}
export interface TLPassportElementPersonalDetails {
	readonly "@type": "passportElementPersonalDetails"
	readonly personal_details: TLPersonalDetails
}
export interface TLPassportElementPassport {
	readonly "@type": "passportElementPassport"
	readonly passport: TLIdentityDocument
}
export interface TLPassportElementDriverLicense {
	readonly "@type": "passportElementDriverLicense"
	readonly driver_license: TLIdentityDocument
}
export interface TLPassportElementIdentityCard {
	readonly "@type": "passportElementIdentityCard"
	readonly identity_card: TLIdentityDocument
}
export interface TLPassportElementInternalPassport {
	readonly "@type": "passportElementInternalPassport"
	readonly internal_passport: TLIdentityDocument
}
export interface TLPassportElementAddress {
	readonly "@type": "passportElementAddress"
	readonly address: TLAddress
}
export interface TLPassportElementUtilityBill {
	readonly "@type": "passportElementUtilityBill"
	readonly utility_bill: TLPersonalDocument
}
export interface TLPassportElementBankStatement {
	readonly "@type": "passportElementBankStatement"
	readonly bank_statement: TLPersonalDocument
}
export interface TLPassportElementRentalAgreement {
	readonly "@type": "passportElementRentalAgreement"
	readonly rental_agreement: TLPersonalDocument
}
export interface TLPassportElementPassportRegistration {
	readonly "@type": "passportElementPassportRegistration"
	readonly passport_registration: TLPersonalDocument
}
export interface TLPassportElementTemporaryRegistration {
	readonly "@type": "passportElementTemporaryRegistration"
	readonly temporary_registration: TLPersonalDocument
}
export interface TLPassportElementPhoneNumber {
	readonly "@type": "passportElementPhoneNumber"
	readonly phone_number: string
}
export interface TLPassportElementEmailAddress {
	readonly "@type": "passportElementEmailAddress"
	readonly email_address: string
}
export type TLPassportElement = TLPassportElementPersonalDetails | TLPassportElementPassport | TLPassportElementDriverLicense | TLPassportElementIdentityCard | TLPassportElementInternalPassport | TLPassportElementAddress | TLPassportElementUtilityBill | TLPassportElementBankStatement | TLPassportElementRentalAgreement | TLPassportElementPassportRegistration | TLPassportElementTemporaryRegistration | TLPassportElementPhoneNumber | TLPassportElementEmailAddress
export interface TLInputPassportElementPersonalDetails {
	readonly "@type": "inputPassportElementPersonalDetails"
	readonly personal_details: TLPersonalDetails
}
export interface TLInputPassportElementPassport {
	readonly "@type": "inputPassportElementPassport"
	readonly passport: TLInputIdentityDocument
}
export interface TLInputPassportElementDriverLicense {
	readonly "@type": "inputPassportElementDriverLicense"
	readonly driver_license: TLInputIdentityDocument
}
export interface TLInputPassportElementIdentityCard {
	readonly "@type": "inputPassportElementIdentityCard"
	readonly identity_card: TLInputIdentityDocument
}
export interface TLInputPassportElementInternalPassport {
	readonly "@type": "inputPassportElementInternalPassport"
	readonly internal_passport: TLInputIdentityDocument
}
export interface TLInputPassportElementAddress {
	readonly "@type": "inputPassportElementAddress"
	readonly address: TLAddress
}
export interface TLInputPassportElementUtilityBill {
	readonly "@type": "inputPassportElementUtilityBill"
	readonly utility_bill: TLInputPersonalDocument
}
export interface TLInputPassportElementBankStatement {
	readonly "@type": "inputPassportElementBankStatement"
	readonly bank_statement: TLInputPersonalDocument
}
export interface TLInputPassportElementRentalAgreement {
	readonly "@type": "inputPassportElementRentalAgreement"
	readonly rental_agreement: TLInputPersonalDocument
}
export interface TLInputPassportElementPassportRegistration {
	readonly "@type": "inputPassportElementPassportRegistration"
	readonly passport_registration: TLInputPersonalDocument
}
export interface TLInputPassportElementTemporaryRegistration {
	readonly "@type": "inputPassportElementTemporaryRegistration"
	readonly temporary_registration: TLInputPersonalDocument
}
export interface TLInputPassportElementPhoneNumber {
	readonly "@type": "inputPassportElementPhoneNumber"
	readonly phone_number: string
}
export interface TLInputPassportElementEmailAddress {
	readonly "@type": "inputPassportElementEmailAddress"
	readonly email_address: string
}
export type TLInputPassportElement = TLInputPassportElementPersonalDetails | TLInputPassportElementPassport | TLInputPassportElementDriverLicense | TLInputPassportElementIdentityCard | TLInputPassportElementInternalPassport | TLInputPassportElementAddress | TLInputPassportElementUtilityBill | TLInputPassportElementBankStatement | TLInputPassportElementRentalAgreement | TLInputPassportElementPassportRegistration | TLInputPassportElementTemporaryRegistration | TLInputPassportElementPhoneNumber | TLInputPassportElementEmailAddress
export interface TLPassportElements {
	readonly "@type": "passportElements"
	readonly elements: ReadonlyArray<TLPassportElement>
}
export interface TLPassportElementErrorSourceUnspecified {
	readonly "@type": "passportElementErrorSourceUnspecified"
}
export interface TLPassportElementErrorSourceDataField {
	readonly "@type": "passportElementErrorSourceDataField"
	readonly field_name: string
}
export interface TLPassportElementErrorSourceFrontSide {
	readonly "@type": "passportElementErrorSourceFrontSide"
}
export interface TLPassportElementErrorSourceReverseSide {
	readonly "@type": "passportElementErrorSourceReverseSide"
}
export interface TLPassportElementErrorSourceSelfie {
	readonly "@type": "passportElementErrorSourceSelfie"
}
export interface TLPassportElementErrorSourceTranslationFile {
	readonly "@type": "passportElementErrorSourceTranslationFile"
	readonly file_index: number
}
export interface TLPassportElementErrorSourceTranslationFiles {
	readonly "@type": "passportElementErrorSourceTranslationFiles"
}
export interface TLPassportElementErrorSourceFile {
	readonly "@type": "passportElementErrorSourceFile"
	readonly file_index: number
}
export interface TLPassportElementErrorSourceFiles {
	readonly "@type": "passportElementErrorSourceFiles"
}
export type TLPassportElementErrorSource = TLPassportElementErrorSourceUnspecified | TLPassportElementErrorSourceDataField | TLPassportElementErrorSourceFrontSide | TLPassportElementErrorSourceReverseSide | TLPassportElementErrorSourceSelfie | TLPassportElementErrorSourceTranslationFile | TLPassportElementErrorSourceTranslationFiles | TLPassportElementErrorSourceFile | TLPassportElementErrorSourceFiles
export interface TLPassportElementError {
	readonly "@type": "passportElementError"
	readonly type: TLPassportElementType
	readonly message: string
	readonly source: TLPassportElementErrorSource
}
export interface TLPassportSuitableElement {
	readonly "@type": "passportSuitableElement"
	readonly type: TLPassportElementType
	readonly is_selfie_required: boolean
	readonly is_translation_required: boolean
	readonly is_native_name_required: boolean
}
export interface TLPassportRequiredElement {
	readonly "@type": "passportRequiredElement"
	readonly suitable_elements: ReadonlyArray<TLPassportSuitableElement>
}
export interface TLPassportAuthorizationForm {
	readonly "@type": "passportAuthorizationForm"
	readonly id: number
	readonly required_elements: ReadonlyArray<TLPassportRequiredElement>
	readonly privacy_policy_url: string
}
export interface TLPassportElementsWithErrors {
	readonly "@type": "passportElementsWithErrors"
	readonly elements: ReadonlyArray<TLPassportElement>
	readonly errors: ReadonlyArray<TLPassportElementError>
}
export interface TLEncryptedCredentials {
	readonly "@type": "encryptedCredentials"
	readonly data: Uint8Array
	readonly hash: Uint8Array
	readonly secret: Uint8Array
}
export interface TLEncryptedPassportElement {
	readonly "@type": "encryptedPassportElement"
	readonly type: TLPassportElementType
	readonly data: Uint8Array
	readonly front_side: TLDatedFile
	readonly reverse_side: TLDatedFile
	readonly selfie: TLDatedFile
	readonly translation: ReadonlyArray<TLDatedFile>
	readonly files: ReadonlyArray<TLDatedFile>
	readonly value: string
	readonly hash: string
}
export interface TLInputPassportElementErrorSourceUnspecified {
	readonly "@type": "inputPassportElementErrorSourceUnspecified"
	readonly element_hash: Uint8Array
}
export interface TLInputPassportElementErrorSourceDataField {
	readonly "@type": "inputPassportElementErrorSourceDataField"
	readonly field_name: string
	readonly data_hash: Uint8Array
}
export interface TLInputPassportElementErrorSourceFrontSide {
	readonly "@type": "inputPassportElementErrorSourceFrontSide"
	readonly file_hash: Uint8Array
}
export interface TLInputPassportElementErrorSourceReverseSide {
	readonly "@type": "inputPassportElementErrorSourceReverseSide"
	readonly file_hash: Uint8Array
}
export interface TLInputPassportElementErrorSourceSelfie {
	readonly "@type": "inputPassportElementErrorSourceSelfie"
	readonly file_hash: Uint8Array
}
export interface TLInputPassportElementErrorSourceTranslationFile {
	readonly "@type": "inputPassportElementErrorSourceTranslationFile"
	readonly file_hash: Uint8Array
}
export interface TLInputPassportElementErrorSourceTranslationFiles {
	readonly "@type": "inputPassportElementErrorSourceTranslationFiles"
	readonly file_hashes: ReadonlyArray<Uint8Array>
}
export interface TLInputPassportElementErrorSourceFile {
	readonly "@type": "inputPassportElementErrorSourceFile"
	readonly file_hash: Uint8Array
}
export interface TLInputPassportElementErrorSourceFiles {
	readonly "@type": "inputPassportElementErrorSourceFiles"
	readonly file_hashes: ReadonlyArray<Uint8Array>
}
export type TLInputPassportElementErrorSource = TLInputPassportElementErrorSourceUnspecified | TLInputPassportElementErrorSourceDataField | TLInputPassportElementErrorSourceFrontSide | TLInputPassportElementErrorSourceReverseSide | TLInputPassportElementErrorSourceSelfie | TLInputPassportElementErrorSourceTranslationFile | TLInputPassportElementErrorSourceTranslationFiles | TLInputPassportElementErrorSourceFile | TLInputPassportElementErrorSourceFiles
export interface TLInputPassportElementError {
	readonly "@type": "inputPassportElementError"
	readonly type: TLPassportElementType
	readonly message: string
	readonly source: TLInputPassportElementErrorSource
}
export interface TLMessageText {
	readonly "@type": "messageText"
	readonly text: TLFormattedText
	readonly web_page: TLWebPage
}
export interface TLMessageAnimation {
	readonly "@type": "messageAnimation"
	readonly animation: TLAnimation
	readonly caption: TLFormattedText
	readonly is_secret: boolean
}
export interface TLMessageAudio {
	readonly "@type": "messageAudio"
	readonly audio: TLAudio
	readonly caption: TLFormattedText
}
export interface TLMessageDocument {
	readonly "@type": "messageDocument"
	readonly document: TLDocument
	readonly caption: TLFormattedText
}
export interface TLMessagePhoto {
	readonly "@type": "messagePhoto"
	readonly photo: TLPhoto
	readonly caption: TLFormattedText
	readonly is_secret: boolean
}
export interface TLMessageExpiredPhoto {
	readonly "@type": "messageExpiredPhoto"
}
export interface TLMessageSticker {
	readonly "@type": "messageSticker"
	readonly sticker: TLSticker
}
export interface TLMessageVideo {
	readonly "@type": "messageVideo"
	readonly video: TLVideo
	readonly caption: TLFormattedText
	readonly is_secret: boolean
}
export interface TLMessageExpiredVideo {
	readonly "@type": "messageExpiredVideo"
}
export interface TLMessageVideoNote {
	readonly "@type": "messageVideoNote"
	readonly video_note: TLVideoNote
	readonly is_viewed: boolean
	readonly is_secret: boolean
}
export interface TLMessageVoiceNote {
	readonly "@type": "messageVoiceNote"
	readonly voice_note: TLVoiceNote
	readonly caption: TLFormattedText
	readonly is_listened: boolean
}
export interface TLMessageLocation {
	readonly "@type": "messageLocation"
	readonly location: TLLocation
	readonly live_period: number
	readonly expires_in: number
	readonly heading: number
	readonly proximity_alert_radius: number
}
export interface TLMessageVenue {
	readonly "@type": "messageVenue"
	readonly venue: TLVenue
}
export interface TLMessageContact {
	readonly "@type": "messageContact"
	readonly contact: TLContact
}
export interface TLMessageDice {
	readonly "@type": "messageDice"
	readonly initial_state: TLDiceStickers
	readonly final_state: TLDiceStickers
	readonly emoji: string
	readonly value: number
	readonly success_animation_frame_number: number
}
export interface TLMessageGame {
	readonly "@type": "messageGame"
	readonly game: TLGame
}
export interface TLMessagePoll {
	readonly "@type": "messagePoll"
	readonly poll: TLPoll
}
export interface TLMessageInvoice {
	readonly "@type": "messageInvoice"
	readonly title: string
	readonly description: string
	readonly photo: TLPhoto
	readonly currency: string
	readonly total_amount: number
	readonly start_parameter: string
	readonly is_test: boolean
	readonly need_shipping_address: boolean
	readonly receipt_message_id: number
}
export interface TLMessageCall {
	readonly "@type": "messageCall"
	readonly is_video: boolean
	readonly discard_reason: TLCallDiscardReason
	readonly duration: number
}
export interface TLMessageBasicGroupChatCreate {
	readonly "@type": "messageBasicGroupChatCreate"
	readonly title: string
	readonly member_user_ids: ReadonlyArray<number>
}
export interface TLMessageSupergroupChatCreate {
	readonly "@type": "messageSupergroupChatCreate"
	readonly title: string
}
export interface TLMessageChatChangeTitle {
	readonly "@type": "messageChatChangeTitle"
	readonly title: string
}
export interface TLMessageChatChangePhoto {
	readonly "@type": "messageChatChangePhoto"
	readonly photo: TLChatPhoto
}
export interface TLMessageChatDeletePhoto {
	readonly "@type": "messageChatDeletePhoto"
}
export interface TLMessageChatAddMembers {
	readonly "@type": "messageChatAddMembers"
	readonly member_user_ids: ReadonlyArray<number>
}
export interface TLMessageChatJoinByLink {
	readonly "@type": "messageChatJoinByLink"
}
export interface TLMessageChatDeleteMember {
	readonly "@type": "messageChatDeleteMember"
	readonly user_id: number
}
export interface TLMessageChatUpgradeTo {
	readonly "@type": "messageChatUpgradeTo"
	readonly supergroup_id: number
}
export interface TLMessageChatUpgradeFrom {
	readonly "@type": "messageChatUpgradeFrom"
	readonly title: string
	readonly basic_group_id: number
}
export interface TLMessagePinMessage {
	readonly "@type": "messagePinMessage"
	readonly message_id: number
}
export interface TLMessageScreenshotTaken {
	readonly "@type": "messageScreenshotTaken"
}
export interface TLMessageChatSetTtl {
	readonly "@type": "messageChatSetTtl"
	readonly ttl: number
}
export interface TLMessageCustomServiceAction {
	readonly "@type": "messageCustomServiceAction"
	readonly text: string
}
export interface TLMessageGameScore {
	readonly "@type": "messageGameScore"
	readonly game_message_id: number
	readonly game_id: string
	readonly score: number
}
export interface TLMessagePaymentSuccessful {
	readonly "@type": "messagePaymentSuccessful"
	readonly invoice_message_id: number
	readonly currency: string
	readonly total_amount: number
}
export interface TLMessagePaymentSuccessfulBot {
	readonly "@type": "messagePaymentSuccessfulBot"
	readonly invoice_message_id: number
	readonly currency: string
	readonly total_amount: number
	readonly invoice_payload: Uint8Array
	readonly shipping_option_id: string
	readonly order_info: TLOrderInfo
	readonly telegram_payment_charge_id: string
	readonly provider_payment_charge_id: string
}
export interface TLMessageContactRegistered {
	readonly "@type": "messageContactRegistered"
}
export interface TLMessageWebsiteConnected {
	readonly "@type": "messageWebsiteConnected"
	readonly domain_name: string
}
export interface TLMessagePassportDataSent {
	readonly "@type": "messagePassportDataSent"
	readonly types: ReadonlyArray<TLPassportElementType>
}
export interface TLMessagePassportDataReceived {
	readonly "@type": "messagePassportDataReceived"
	readonly elements: ReadonlyArray<TLEncryptedPassportElement>
	readonly credentials: TLEncryptedCredentials
}
export interface TLMessageProximityAlertTriggered {
	readonly "@type": "messageProximityAlertTriggered"
	readonly approacher: TLMessageSender
	readonly observer: TLMessageSender
	readonly distance: number
}
export interface TLMessageUnsupported {
	readonly "@type": "messageUnsupported"
}
export type TLMessageContent = TLMessageText | TLMessageAnimation | TLMessageAudio | TLMessageDocument | TLMessagePhoto | TLMessageExpiredPhoto | TLMessageSticker | TLMessageVideo | TLMessageExpiredVideo | TLMessageVideoNote | TLMessageVoiceNote | TLMessageLocation | TLMessageVenue | TLMessageContact | TLMessageDice | TLMessageGame | TLMessagePoll | TLMessageInvoice | TLMessageCall | TLMessageBasicGroupChatCreate | TLMessageSupergroupChatCreate | TLMessageChatChangeTitle | TLMessageChatChangePhoto | TLMessageChatDeletePhoto | TLMessageChatAddMembers | TLMessageChatJoinByLink | TLMessageChatDeleteMember | TLMessageChatUpgradeTo | TLMessageChatUpgradeFrom | TLMessagePinMessage | TLMessageScreenshotTaken | TLMessageChatSetTtl | TLMessageCustomServiceAction | TLMessageGameScore | TLMessagePaymentSuccessful | TLMessagePaymentSuccessfulBot | TLMessageContactRegistered | TLMessageWebsiteConnected | TLMessagePassportDataSent | TLMessagePassportDataReceived | TLMessageProximityAlertTriggered | TLMessageUnsupported
export interface TLTextEntityTypeMention {
	readonly "@type": "textEntityTypeMention"
}
export interface TLTextEntityTypeHashtag {
	readonly "@type": "textEntityTypeHashtag"
}
export interface TLTextEntityTypeCashtag {
	readonly "@type": "textEntityTypeCashtag"
}
export interface TLTextEntityTypeBotCommand {
	readonly "@type": "textEntityTypeBotCommand"
}
export interface TLTextEntityTypeUrl {
	readonly "@type": "textEntityTypeUrl"
}
export interface TLTextEntityTypeEmailAddress {
	readonly "@type": "textEntityTypeEmailAddress"
}
export interface TLTextEntityTypePhoneNumber {
	readonly "@type": "textEntityTypePhoneNumber"
}
export interface TLTextEntityTypeBankCardNumber {
	readonly "@type": "textEntityTypeBankCardNumber"
}
export interface TLTextEntityTypeBold {
	readonly "@type": "textEntityTypeBold"
}
export interface TLTextEntityTypeItalic {
	readonly "@type": "textEntityTypeItalic"
}
export interface TLTextEntityTypeUnderline {
	readonly "@type": "textEntityTypeUnderline"
}
export interface TLTextEntityTypeStrikethrough {
	readonly "@type": "textEntityTypeStrikethrough"
}
export interface TLTextEntityTypeCode {
	readonly "@type": "textEntityTypeCode"
}
export interface TLTextEntityTypePre {
	readonly "@type": "textEntityTypePre"
}
export interface TLTextEntityTypePreCode {
	readonly "@type": "textEntityTypePreCode"
	readonly language: string
}
export interface TLTextEntityTypeTextUrl {
	readonly "@type": "textEntityTypeTextUrl"
	readonly url: string
}
export interface TLTextEntityTypeMentionName {
	readonly "@type": "textEntityTypeMentionName"
	readonly user_id: number
}
export type TLTextEntityType = TLTextEntityTypeMention | TLTextEntityTypeHashtag | TLTextEntityTypeCashtag | TLTextEntityTypeBotCommand | TLTextEntityTypeUrl | TLTextEntityTypeEmailAddress | TLTextEntityTypePhoneNumber | TLTextEntityTypeBankCardNumber | TLTextEntityTypeBold | TLTextEntityTypeItalic | TLTextEntityTypeUnderline | TLTextEntityTypeStrikethrough | TLTextEntityTypeCode | TLTextEntityTypePre | TLTextEntityTypePreCode | TLTextEntityTypeTextUrl | TLTextEntityTypeMentionName
export interface TLInputThumbnail {
	readonly "@type": "inputThumbnail"
	readonly thumbnail: TLInputFile
	readonly width: number
	readonly height: number
}
export interface TLMessageSchedulingStateSendAtDate {
	readonly "@type": "messageSchedulingStateSendAtDate"
	readonly send_date: number
}
export interface TLMessageSchedulingStateSendWhenOnline {
	readonly "@type": "messageSchedulingStateSendWhenOnline"
}
export type TLMessageSchedulingState = TLMessageSchedulingStateSendAtDate | TLMessageSchedulingStateSendWhenOnline
export interface TLMessageSendOptions {
	readonly "@type": "messageSendOptions"
	readonly disable_notification: boolean
	readonly from_background: boolean
	readonly scheduling_state: TLMessageSchedulingState
}
export interface TLMessageCopyOptions {
	readonly "@type": "messageCopyOptions"
	readonly send_copy: boolean
	readonly replace_caption: boolean
	readonly new_caption: TLFormattedText
}
export interface TLInputMessageText {
	readonly "@type": "inputMessageText"
	readonly text: TLFormattedText
	readonly disable_web_page_preview: boolean
	readonly clear_draft: boolean
}
export interface TLInputMessageAnimation {
	readonly "@type": "inputMessageAnimation"
	readonly animation: TLInputFile
	readonly thumbnail: TLInputThumbnail
	readonly added_sticker_file_ids: ReadonlyArray<number>
	readonly duration: number
	readonly width: number
	readonly height: number
	readonly caption: TLFormattedText
}
export interface TLInputMessageAudio {
	readonly "@type": "inputMessageAudio"
	readonly audio: TLInputFile
	readonly album_cover_thumbnail: TLInputThumbnail
	readonly duration: number
	readonly title: string
	readonly performer: string
	readonly caption: TLFormattedText
}
export interface TLInputMessageDocument {
	readonly "@type": "inputMessageDocument"
	readonly document: TLInputFile
	readonly thumbnail: TLInputThumbnail
	readonly disable_content_type_detection: boolean
	readonly caption: TLFormattedText
}
export interface TLInputMessagePhoto {
	readonly "@type": "inputMessagePhoto"
	readonly photo: TLInputFile
	readonly thumbnail: TLInputThumbnail
	readonly added_sticker_file_ids: ReadonlyArray<number>
	readonly width: number
	readonly height: number
	readonly caption: TLFormattedText
	readonly ttl: number
}
export interface TLInputMessageSticker {
	readonly "@type": "inputMessageSticker"
	readonly sticker: TLInputFile
	readonly thumbnail: TLInputThumbnail
	readonly width: number
	readonly height: number
}
export interface TLInputMessageVideo {
	readonly "@type": "inputMessageVideo"
	readonly video: TLInputFile
	readonly thumbnail: TLInputThumbnail
	readonly added_sticker_file_ids: ReadonlyArray<number>
	readonly duration: number
	readonly width: number
	readonly height: number
	readonly supports_streaming: boolean
	readonly caption: TLFormattedText
	readonly ttl: number
}
export interface TLInputMessageVideoNote {
	readonly "@type": "inputMessageVideoNote"
	readonly video_note: TLInputFile
	readonly thumbnail: TLInputThumbnail
	readonly duration: number
	readonly length: number
}
export interface TLInputMessageVoiceNote {
	readonly "@type": "inputMessageVoiceNote"
	readonly voice_note: TLInputFile
	readonly duration: number
	readonly waveform: Uint8Array
	readonly caption: TLFormattedText
}
export interface TLInputMessageLocation {
	readonly "@type": "inputMessageLocation"
	readonly location: TLLocation
	readonly live_period: number
	readonly heading: number
	readonly proximity_alert_radius: number
}
export interface TLInputMessageVenue {
	readonly "@type": "inputMessageVenue"
	readonly venue: TLVenue
}
export interface TLInputMessageContact {
	readonly "@type": "inputMessageContact"
	readonly contact: TLContact
}
export interface TLInputMessageDice {
	readonly "@type": "inputMessageDice"
	readonly emoji: string
	readonly clear_draft: boolean
}
export interface TLInputMessageGame {
	readonly "@type": "inputMessageGame"
	readonly bot_user_id: number
	readonly game_short_name: string
}
export interface TLInputMessageInvoice {
	readonly "@type": "inputMessageInvoice"
	readonly invoice: TLInvoice
	readonly title: string
	readonly description: string
	readonly photo_url: string
	readonly photo_size: number
	readonly photo_width: number
	readonly photo_height: number
	readonly payload: Uint8Array
	readonly provider_token: string
	readonly provider_data: string
	readonly start_parameter: string
}
export interface TLInputMessagePoll {
	readonly "@type": "inputMessagePoll"
	readonly question: string
	readonly options: ReadonlyArray<string>
	readonly is_anonymous: boolean
	readonly type: TLPollType
	readonly open_period: number
	readonly close_date: number
	readonly is_closed: boolean
}
export interface TLInputMessageForwarded {
	readonly "@type": "inputMessageForwarded"
	readonly from_chat_id: number
	readonly message_id: number
	readonly in_game_share: boolean
	readonly copy_options: TLMessageCopyOptions
}
export type TLInputMessageContent = TLInputMessageText | TLInputMessageAnimation | TLInputMessageAudio | TLInputMessageDocument | TLInputMessagePhoto | TLInputMessageSticker | TLInputMessageVideo | TLInputMessageVideoNote | TLInputMessageVoiceNote | TLInputMessageLocation | TLInputMessageVenue | TLInputMessageContact | TLInputMessageDice | TLInputMessageGame | TLInputMessageInvoice | TLInputMessagePoll | TLInputMessageForwarded
export interface TLSearchMessagesFilterEmpty {
	readonly "@type": "searchMessagesFilterEmpty"
}
export interface TLSearchMessagesFilterAnimation {
	readonly "@type": "searchMessagesFilterAnimation"
}
export interface TLSearchMessagesFilterAudio {
	readonly "@type": "searchMessagesFilterAudio"
}
export interface TLSearchMessagesFilterDocument {
	readonly "@type": "searchMessagesFilterDocument"
}
export interface TLSearchMessagesFilterPhoto {
	readonly "@type": "searchMessagesFilterPhoto"
}
export interface TLSearchMessagesFilterVideo {
	readonly "@type": "searchMessagesFilterVideo"
}
export interface TLSearchMessagesFilterVoiceNote {
	readonly "@type": "searchMessagesFilterVoiceNote"
}
export interface TLSearchMessagesFilterPhotoAndVideo {
	readonly "@type": "searchMessagesFilterPhotoAndVideo"
}
export interface TLSearchMessagesFilterUrl {
	readonly "@type": "searchMessagesFilterUrl"
}
export interface TLSearchMessagesFilterChatPhoto {
	readonly "@type": "searchMessagesFilterChatPhoto"
}
export interface TLSearchMessagesFilterCall {
	readonly "@type": "searchMessagesFilterCall"
}
export interface TLSearchMessagesFilterMissedCall {
	readonly "@type": "searchMessagesFilterMissedCall"
}
export interface TLSearchMessagesFilterVideoNote {
	readonly "@type": "searchMessagesFilterVideoNote"
}
export interface TLSearchMessagesFilterVoiceAndVideoNote {
	readonly "@type": "searchMessagesFilterVoiceAndVideoNote"
}
export interface TLSearchMessagesFilterMention {
	readonly "@type": "searchMessagesFilterMention"
}
export interface TLSearchMessagesFilterUnreadMention {
	readonly "@type": "searchMessagesFilterUnreadMention"
}
export interface TLSearchMessagesFilterFailedToSend {
	readonly "@type": "searchMessagesFilterFailedToSend"
}
export interface TLSearchMessagesFilterPinned {
	readonly "@type": "searchMessagesFilterPinned"
}
export type TLSearchMessagesFilter = TLSearchMessagesFilterEmpty | TLSearchMessagesFilterAnimation | TLSearchMessagesFilterAudio | TLSearchMessagesFilterDocument | TLSearchMessagesFilterPhoto | TLSearchMessagesFilterVideo | TLSearchMessagesFilterVoiceNote | TLSearchMessagesFilterPhotoAndVideo | TLSearchMessagesFilterUrl | TLSearchMessagesFilterChatPhoto | TLSearchMessagesFilterCall | TLSearchMessagesFilterMissedCall | TLSearchMessagesFilterVideoNote | TLSearchMessagesFilterVoiceAndVideoNote | TLSearchMessagesFilterMention | TLSearchMessagesFilterUnreadMention | TLSearchMessagesFilterFailedToSend | TLSearchMessagesFilterPinned
export interface TLChatActionTyping {
	readonly "@type": "chatActionTyping"
}
export interface TLChatActionRecordingVideo {
	readonly "@type": "chatActionRecordingVideo"
}
export interface TLChatActionUploadingVideo {
	readonly "@type": "chatActionUploadingVideo"
	readonly progress: number
}
export interface TLChatActionRecordingVoiceNote {
	readonly "@type": "chatActionRecordingVoiceNote"
}
export interface TLChatActionUploadingVoiceNote {
	readonly "@type": "chatActionUploadingVoiceNote"
	readonly progress: number
}
export interface TLChatActionUploadingPhoto {
	readonly "@type": "chatActionUploadingPhoto"
	readonly progress: number
}
export interface TLChatActionUploadingDocument {
	readonly "@type": "chatActionUploadingDocument"
	readonly progress: number
}
export interface TLChatActionChoosingLocation {
	readonly "@type": "chatActionChoosingLocation"
}
export interface TLChatActionChoosingContact {
	readonly "@type": "chatActionChoosingContact"
}
export interface TLChatActionStartPlayingGame {
	readonly "@type": "chatActionStartPlayingGame"
}
export interface TLChatActionRecordingVideoNote {
	readonly "@type": "chatActionRecordingVideoNote"
}
export interface TLChatActionUploadingVideoNote {
	readonly "@type": "chatActionUploadingVideoNote"
	readonly progress: number
}
export interface TLChatActionCancel {
	readonly "@type": "chatActionCancel"
}
export type TLChatAction = TLChatActionTyping | TLChatActionRecordingVideo | TLChatActionUploadingVideo | TLChatActionRecordingVoiceNote | TLChatActionUploadingVoiceNote | TLChatActionUploadingPhoto | TLChatActionUploadingDocument | TLChatActionChoosingLocation | TLChatActionChoosingContact | TLChatActionStartPlayingGame | TLChatActionRecordingVideoNote | TLChatActionUploadingVideoNote | TLChatActionCancel
export interface TLUserStatusEmpty {
	readonly "@type": "userStatusEmpty"
}
export interface TLUserStatusOnline {
	readonly "@type": "userStatusOnline"
	readonly expires: number
}
export interface TLUserStatusOffline {
	readonly "@type": "userStatusOffline"
	readonly was_online: number
}
export interface TLUserStatusRecently {
	readonly "@type": "userStatusRecently"
}
export interface TLUserStatusLastWeek {
	readonly "@type": "userStatusLastWeek"
}
export interface TLUserStatusLastMonth {
	readonly "@type": "userStatusLastMonth"
}
export type TLUserStatus = TLUserStatusEmpty | TLUserStatusOnline | TLUserStatusOffline | TLUserStatusRecently | TLUserStatusLastWeek | TLUserStatusLastMonth
export interface TLStickers {
	readonly "@type": "stickers"
	readonly stickers: ReadonlyArray<TLSticker>
}
export interface TLEmojis {
	readonly "@type": "emojis"
	readonly emojis: ReadonlyArray<string>
}
export interface TLStickerSet {
	readonly "@type": "stickerSet"
	readonly id: string
	readonly title: string
	readonly name: string
	readonly thumbnail: TLThumbnail
	readonly is_installed: boolean
	readonly is_archived: boolean
	readonly is_official: boolean
	readonly is_animated: boolean
	readonly is_masks: boolean
	readonly is_viewed: boolean
	readonly stickers: ReadonlyArray<TLSticker>
	readonly emojis: ReadonlyArray<TLEmojis>
}
export interface TLStickerSetInfo {
	readonly "@type": "stickerSetInfo"
	readonly id: string
	readonly title: string
	readonly name: string
	readonly thumbnail: TLThumbnail
	readonly is_installed: boolean
	readonly is_archived: boolean
	readonly is_official: boolean
	readonly is_animated: boolean
	readonly is_masks: boolean
	readonly is_viewed: boolean
	readonly size: number
	readonly covers: ReadonlyArray<TLSticker>
}
export interface TLStickerSets {
	readonly "@type": "stickerSets"
	readonly total_count: number
	readonly sets: ReadonlyArray<TLStickerSetInfo>
}
export interface TLCallDiscardReasonEmpty {
	readonly "@type": "callDiscardReasonEmpty"
}
export interface TLCallDiscardReasonMissed {
	readonly "@type": "callDiscardReasonMissed"
}
export interface TLCallDiscardReasonDeclined {
	readonly "@type": "callDiscardReasonDeclined"
}
export interface TLCallDiscardReasonDisconnected {
	readonly "@type": "callDiscardReasonDisconnected"
}
export interface TLCallDiscardReasonHungUp {
	readonly "@type": "callDiscardReasonHungUp"
}
export type TLCallDiscardReason = TLCallDiscardReasonEmpty | TLCallDiscardReasonMissed | TLCallDiscardReasonDeclined | TLCallDiscardReasonDisconnected | TLCallDiscardReasonHungUp
export interface TLCallProtocol {
	readonly "@type": "callProtocol"
	readonly udp_p2p: boolean
	readonly udp_reflector: boolean
	readonly min_layer: number
	readonly max_layer: number
	readonly library_versions: ReadonlyArray<string>
}
export interface TLCallServerTypeTelegramReflector {
	readonly "@type": "callServerTypeTelegramReflector"
	readonly peer_tag: Uint8Array
}
export interface TLCallServerTypeWebrtc {
	readonly "@type": "callServerTypeWebrtc"
	readonly username: string
	readonly password: string
	readonly supports_turn: boolean
	readonly supports_stun: boolean
}
export type TLCallServerType = TLCallServerTypeTelegramReflector | TLCallServerTypeWebrtc
export interface TLCallServer {
	readonly "@type": "callServer"
	readonly id: string
	readonly ip_address: string
	readonly ipv6_address: string
	readonly port: number
	readonly type: TLCallServerType
}
export interface TLCallId {
	readonly "@type": "callId"
	readonly id: number
}
export interface TLCallStatePending {
	readonly "@type": "callStatePending"
	readonly is_created: boolean
	readonly is_received: boolean
}
export interface TLCallStateExchangingKeys {
	readonly "@type": "callStateExchangingKeys"
}
export interface TLCallStateReady {
	readonly "@type": "callStateReady"
	readonly protocol: TLCallProtocol
	readonly servers: ReadonlyArray<TLCallServer>
	readonly config: string
	readonly encryption_key: Uint8Array
	readonly emojis: ReadonlyArray<string>
	readonly allow_p2p: boolean
}
export interface TLCallStateHangingUp {
	readonly "@type": "callStateHangingUp"
}
export interface TLCallStateDiscarded {
	readonly "@type": "callStateDiscarded"
	readonly reason: TLCallDiscardReason
	readonly need_rating: boolean
	readonly need_debug_information: boolean
}
export interface TLCallStateError {
	readonly "@type": "callStateError"
	readonly error: TLError
}
export type TLCallState = TLCallStatePending | TLCallStateExchangingKeys | TLCallStateReady | TLCallStateHangingUp | TLCallStateDiscarded | TLCallStateError
export interface TLCallProblemEcho {
	readonly "@type": "callProblemEcho"
}
export interface TLCallProblemNoise {
	readonly "@type": "callProblemNoise"
}
export interface TLCallProblemInterruptions {
	readonly "@type": "callProblemInterruptions"
}
export interface TLCallProblemDistortedSpeech {
	readonly "@type": "callProblemDistortedSpeech"
}
export interface TLCallProblemSilentLocal {
	readonly "@type": "callProblemSilentLocal"
}
export interface TLCallProblemSilentRemote {
	readonly "@type": "callProblemSilentRemote"
}
export interface TLCallProblemDropped {
	readonly "@type": "callProblemDropped"
}
export interface TLCallProblemDistortedVideo {
	readonly "@type": "callProblemDistortedVideo"
}
export interface TLCallProblemPixelatedVideo {
	readonly "@type": "callProblemPixelatedVideo"
}
export type TLCallProblem = TLCallProblemEcho | TLCallProblemNoise | TLCallProblemInterruptions | TLCallProblemDistortedSpeech | TLCallProblemSilentLocal | TLCallProblemSilentRemote | TLCallProblemDropped | TLCallProblemDistortedVideo | TLCallProblemPixelatedVideo
export interface TLCall {
	readonly "@type": "call"
	readonly id: number
	readonly user_id: number
	readonly is_outgoing: boolean
	readonly is_video: boolean
	readonly state: TLCallState
}
export interface TLPhoneNumberAuthenticationSettings {
	readonly "@type": "phoneNumberAuthenticationSettings"
	readonly allow_flash_call: boolean
	readonly is_current_phone_number: boolean
	readonly allow_sms_retriever_api: boolean
}
export interface TLAnimations {
	readonly "@type": "animations"
	readonly animations: ReadonlyArray<TLAnimation>
}
export interface TLDiceStickersRegular {
	readonly "@type": "diceStickersRegular"
	readonly sticker: TLSticker
}
export interface TLDiceStickersSlotMachine {
	readonly "@type": "diceStickersSlotMachine"
	readonly background: TLSticker
	readonly lever: TLSticker
	readonly left_reel: TLSticker
	readonly center_reel: TLSticker
	readonly right_reel: TLSticker
}
export type TLDiceStickers = TLDiceStickersRegular | TLDiceStickersSlotMachine
export interface TLImportedContacts {
	readonly "@type": "importedContacts"
	readonly user_ids: ReadonlyArray<number>
	readonly importer_count: ReadonlyArray<number>
}
export interface TLHttpUrl {
	readonly "@type": "httpUrl"
	readonly url: string
}
export interface TLInputInlineQueryResultAnimation {
	readonly "@type": "inputInlineQueryResultAnimation"
	readonly id: string
	readonly title: string
	readonly thumbnail_url: string
	readonly thumbnail_mime_type: string
	readonly video_url: string
	readonly video_mime_type: string
	readonly video_duration: number
	readonly video_width: number
	readonly video_height: number
	readonly reply_markup: TLReplyMarkup
	readonly input_message_content: TLInputMessageContent
}
export interface TLInputInlineQueryResultArticle {
	readonly "@type": "inputInlineQueryResultArticle"
	readonly id: string
	readonly url: string
	readonly hide_url: boolean
	readonly title: string
	readonly description: string
	readonly thumbnail_url: string
	readonly thumbnail_width: number
	readonly thumbnail_height: number
	readonly reply_markup: TLReplyMarkup
	readonly input_message_content: TLInputMessageContent
}
export interface TLInputInlineQueryResultAudio {
	readonly "@type": "inputInlineQueryResultAudio"
	readonly id: string
	readonly title: string
	readonly performer: string
	readonly audio_url: string
	readonly audio_duration: number
	readonly reply_markup: TLReplyMarkup
	readonly input_message_content: TLInputMessageContent
}
export interface TLInputInlineQueryResultContact {
	readonly "@type": "inputInlineQueryResultContact"
	readonly id: string
	readonly contact: TLContact
	readonly thumbnail_url: string
	readonly thumbnail_width: number
	readonly thumbnail_height: number
	readonly reply_markup: TLReplyMarkup
	readonly input_message_content: TLInputMessageContent
}
export interface TLInputInlineQueryResultDocument {
	readonly "@type": "inputInlineQueryResultDocument"
	readonly id: string
	readonly title: string
	readonly description: string
	readonly document_url: string
	readonly mime_type: string
	readonly thumbnail_url: string
	readonly thumbnail_width: number
	readonly thumbnail_height: number
	readonly reply_markup: TLReplyMarkup
	readonly input_message_content: TLInputMessageContent
}
export interface TLInputInlineQueryResultGame {
	readonly "@type": "inputInlineQueryResultGame"
	readonly id: string
	readonly game_short_name: string
	readonly reply_markup: TLReplyMarkup
}
export interface TLInputInlineQueryResultLocation {
	readonly "@type": "inputInlineQueryResultLocation"
	readonly id: string
	readonly location: TLLocation
	readonly live_period: number
	readonly title: string
	readonly thumbnail_url: string
	readonly thumbnail_width: number
	readonly thumbnail_height: number
	readonly reply_markup: TLReplyMarkup
	readonly input_message_content: TLInputMessageContent
}
export interface TLInputInlineQueryResultPhoto {
	readonly "@type": "inputInlineQueryResultPhoto"
	readonly id: string
	readonly title: string
	readonly description: string
	readonly thumbnail_url: string
	readonly photo_url: string
	readonly photo_width: number
	readonly photo_height: number
	readonly reply_markup: TLReplyMarkup
	readonly input_message_content: TLInputMessageContent
}
export interface TLInputInlineQueryResultSticker {
	readonly "@type": "inputInlineQueryResultSticker"
	readonly id: string
	readonly thumbnail_url: string
	readonly sticker_url: string
	readonly sticker_width: number
	readonly sticker_height: number
	readonly reply_markup: TLReplyMarkup
	readonly input_message_content: TLInputMessageContent
}
export interface TLInputInlineQueryResultVenue {
	readonly "@type": "inputInlineQueryResultVenue"
	readonly id: string
	readonly venue: TLVenue
	readonly thumbnail_url: string
	readonly thumbnail_width: number
	readonly thumbnail_height: number
	readonly reply_markup: TLReplyMarkup
	readonly input_message_content: TLInputMessageContent
}
export interface TLInputInlineQueryResultVideo {
	readonly "@type": "inputInlineQueryResultVideo"
	readonly id: string
	readonly title: string
	readonly description: string
	readonly thumbnail_url: string
	readonly video_url: string
	readonly mime_type: string
	readonly video_width: number
	readonly video_height: number
	readonly video_duration: number
	readonly reply_markup: TLReplyMarkup
	readonly input_message_content: TLInputMessageContent
}
export interface TLInputInlineQueryResultVoiceNote {
	readonly "@type": "inputInlineQueryResultVoiceNote"
	readonly id: string
	readonly title: string
	readonly voice_note_url: string
	readonly voice_note_duration: number
	readonly reply_markup: TLReplyMarkup
	readonly input_message_content: TLInputMessageContent
}
export type TLInputInlineQueryResult = TLInputInlineQueryResultAnimation | TLInputInlineQueryResultArticle | TLInputInlineQueryResultAudio | TLInputInlineQueryResultContact | TLInputInlineQueryResultDocument | TLInputInlineQueryResultGame | TLInputInlineQueryResultLocation | TLInputInlineQueryResultPhoto | TLInputInlineQueryResultSticker | TLInputInlineQueryResultVenue | TLInputInlineQueryResultVideo | TLInputInlineQueryResultVoiceNote
export interface TLInlineQueryResultArticle {
	readonly "@type": "inlineQueryResultArticle"
	readonly id: string
	readonly url: string
	readonly hide_url: boolean
	readonly title: string
	readonly description: string
	readonly thumbnail: TLThumbnail
}
export interface TLInlineQueryResultContact {
	readonly "@type": "inlineQueryResultContact"
	readonly id: string
	readonly contact: TLContact
	readonly thumbnail: TLThumbnail
}
export interface TLInlineQueryResultLocation {
	readonly "@type": "inlineQueryResultLocation"
	readonly id: string
	readonly location: TLLocation
	readonly title: string
	readonly thumbnail: TLThumbnail
}
export interface TLInlineQueryResultVenue {
	readonly "@type": "inlineQueryResultVenue"
	readonly id: string
	readonly venue: TLVenue
	readonly thumbnail: TLThumbnail
}
export interface TLInlineQueryResultGame {
	readonly "@type": "inlineQueryResultGame"
	readonly id: string
	readonly game: TLGame
}
export interface TLInlineQueryResultAnimation {
	readonly "@type": "inlineQueryResultAnimation"
	readonly id: string
	readonly animation: TLAnimation
	readonly title: string
}
export interface TLInlineQueryResultAudio {
	readonly "@type": "inlineQueryResultAudio"
	readonly id: string
	readonly audio: TLAudio
}
export interface TLInlineQueryResultDocument {
	readonly "@type": "inlineQueryResultDocument"
	readonly id: string
	readonly document: TLDocument
	readonly title: string
	readonly description: string
}
export interface TLInlineQueryResultPhoto {
	readonly "@type": "inlineQueryResultPhoto"
	readonly id: string
	readonly photo: TLPhoto
	readonly title: string
	readonly description: string
}
export interface TLInlineQueryResultSticker {
	readonly "@type": "inlineQueryResultSticker"
	readonly id: string
	readonly sticker: TLSticker
}
export interface TLInlineQueryResultVideo {
	readonly "@type": "inlineQueryResultVideo"
	readonly id: string
	readonly video: TLVideo
	readonly title: string
	readonly description: string
}
export interface TLInlineQueryResultVoiceNote {
	readonly "@type": "inlineQueryResultVoiceNote"
	readonly id: string
	readonly voice_note: TLVoiceNote
	readonly title: string
}
export type TLInlineQueryResult = TLInlineQueryResultArticle | TLInlineQueryResultContact | TLInlineQueryResultLocation | TLInlineQueryResultVenue | TLInlineQueryResultGame | TLInlineQueryResultAnimation | TLInlineQueryResultAudio | TLInlineQueryResultDocument | TLInlineQueryResultPhoto | TLInlineQueryResultSticker | TLInlineQueryResultVideo | TLInlineQueryResultVoiceNote
export interface TLInlineQueryResults {
	readonly "@type": "inlineQueryResults"
	readonly inline_query_id: string
	readonly next_offset: string
	readonly results: ReadonlyArray<TLInlineQueryResult>
	readonly switch_pm_text: string
	readonly switch_pm_parameter: string
}
export interface TLCallbackQueryPayloadData {
	readonly "@type": "callbackQueryPayloadData"
	readonly data: Uint8Array
}
export interface TLCallbackQueryPayloadDataWithPassword {
	readonly "@type": "callbackQueryPayloadDataWithPassword"
	readonly password: string
	readonly data: Uint8Array
}
export interface TLCallbackQueryPayloadGame {
	readonly "@type": "callbackQueryPayloadGame"
	readonly game_short_name: string
}
export type TLCallbackQueryPayload = TLCallbackQueryPayloadData | TLCallbackQueryPayloadDataWithPassword | TLCallbackQueryPayloadGame
export interface TLCallbackQueryAnswer {
	readonly "@type": "callbackQueryAnswer"
	readonly text: string
	readonly show_alert: boolean
	readonly url: string
}
export interface TLCustomRequestResult {
	readonly "@type": "customRequestResult"
	readonly result: string
}
export interface TLGameHighScore {
	readonly "@type": "gameHighScore"
	readonly position: number
	readonly user_id: number
	readonly score: number
}
export interface TLGameHighScores {
	readonly "@type": "gameHighScores"
	readonly scores: ReadonlyArray<TLGameHighScore>
}
export interface TLChatEventMessageEdited {
	readonly "@type": "chatEventMessageEdited"
	readonly old_message: TLMessage
	readonly new_message: TLMessage
}
export interface TLChatEventMessageDeleted {
	readonly "@type": "chatEventMessageDeleted"
	readonly message: TLMessage
}
export interface TLChatEventPollStopped {
	readonly "@type": "chatEventPollStopped"
	readonly message: TLMessage
}
export interface TLChatEventMessagePinned {
	readonly "@type": "chatEventMessagePinned"
	readonly message: TLMessage
}
export interface TLChatEventMessageUnpinned {
	readonly "@type": "chatEventMessageUnpinned"
	readonly message: TLMessage
}
export interface TLChatEventMemberJoined {
	readonly "@type": "chatEventMemberJoined"
}
export interface TLChatEventMemberLeft {
	readonly "@type": "chatEventMemberLeft"
}
export interface TLChatEventMemberInvited {
	readonly "@type": "chatEventMemberInvited"
	readonly user_id: number
	readonly status: TLChatMemberStatus
}
export interface TLChatEventMemberPromoted {
	readonly "@type": "chatEventMemberPromoted"
	readonly user_id: number
	readonly old_status: TLChatMemberStatus
	readonly new_status: TLChatMemberStatus
}
export interface TLChatEventMemberRestricted {
	readonly "@type": "chatEventMemberRestricted"
	readonly user_id: number
	readonly old_status: TLChatMemberStatus
	readonly new_status: TLChatMemberStatus
}
export interface TLChatEventTitleChanged {
	readonly "@type": "chatEventTitleChanged"
	readonly old_title: string
	readonly new_title: string
}
export interface TLChatEventPermissionsChanged {
	readonly "@type": "chatEventPermissionsChanged"
	readonly old_permissions: TLChatPermissions
	readonly new_permissions: TLChatPermissions
}
export interface TLChatEventDescriptionChanged {
	readonly "@type": "chatEventDescriptionChanged"
	readonly old_description: string
	readonly new_description: string
}
export interface TLChatEventUsernameChanged {
	readonly "@type": "chatEventUsernameChanged"
	readonly old_username: string
	readonly new_username: string
}
export interface TLChatEventPhotoChanged {
	readonly "@type": "chatEventPhotoChanged"
	readonly old_photo: TLChatPhoto
	readonly new_photo: TLChatPhoto
}
export interface TLChatEventInvitesToggled {
	readonly "@type": "chatEventInvitesToggled"
	readonly can_invite_users: boolean
}
export interface TLChatEventLinkedChatChanged {
	readonly "@type": "chatEventLinkedChatChanged"
	readonly old_linked_chat_id: number
	readonly new_linked_chat_id: number
}
export interface TLChatEventSlowModeDelayChanged {
	readonly "@type": "chatEventSlowModeDelayChanged"
	readonly old_slow_mode_delay: number
	readonly new_slow_mode_delay: number
}
export interface TLChatEventSignMessagesToggled {
	readonly "@type": "chatEventSignMessagesToggled"
	readonly sign_messages: boolean
}
export interface TLChatEventStickerSetChanged {
	readonly "@type": "chatEventStickerSetChanged"
	readonly old_sticker_set_id: string
	readonly new_sticker_set_id: string
}
export interface TLChatEventLocationChanged {
	readonly "@type": "chatEventLocationChanged"
	readonly old_location: TLChatLocation
	readonly new_location: TLChatLocation
}
export interface TLChatEventIsAllHistoryAvailableToggled {
	readonly "@type": "chatEventIsAllHistoryAvailableToggled"
	readonly is_all_history_available: boolean
}
export type TLChatEventAction = TLChatEventMessageEdited | TLChatEventMessageDeleted | TLChatEventPollStopped | TLChatEventMessagePinned | TLChatEventMessageUnpinned | TLChatEventMemberJoined | TLChatEventMemberLeft | TLChatEventMemberInvited | TLChatEventMemberPromoted | TLChatEventMemberRestricted | TLChatEventTitleChanged | TLChatEventPermissionsChanged | TLChatEventDescriptionChanged | TLChatEventUsernameChanged | TLChatEventPhotoChanged | TLChatEventInvitesToggled | TLChatEventLinkedChatChanged | TLChatEventSlowModeDelayChanged | TLChatEventSignMessagesToggled | TLChatEventStickerSetChanged | TLChatEventLocationChanged | TLChatEventIsAllHistoryAvailableToggled
export interface TLChatEvent {
	readonly "@type": "chatEvent"
	readonly id: string
	readonly date: number
	readonly user_id: number
	readonly action: TLChatEventAction
}
export interface TLChatEvents {
	readonly "@type": "chatEvents"
	readonly events: ReadonlyArray<TLChatEvent>
}
export interface TLChatEventLogFilters {
	readonly "@type": "chatEventLogFilters"
	readonly message_edits: boolean
	readonly message_deletions: boolean
	readonly message_pins: boolean
	readonly member_joins: boolean
	readonly member_leaves: boolean
	readonly member_invites: boolean
	readonly member_promotions: boolean
	readonly member_restrictions: boolean
	readonly info_changes: boolean
	readonly setting_changes: boolean
}
export interface TLLanguagePackStringValueOrdinary {
	readonly "@type": "languagePackStringValueOrdinary"
	readonly value: string
}
export interface TLLanguagePackStringValuePluralized {
	readonly "@type": "languagePackStringValuePluralized"
	readonly zero_value: string
	readonly one_value: string
	readonly two_value: string
	readonly few_value: string
	readonly many_value: string
	readonly other_value: string
}
export interface TLLanguagePackStringValueDeleted {
	readonly "@type": "languagePackStringValueDeleted"
}
export type TLLanguagePackStringValue = TLLanguagePackStringValueOrdinary | TLLanguagePackStringValuePluralized | TLLanguagePackStringValueDeleted
export interface TLLanguagePackString {
	readonly "@type": "languagePackString"
	readonly key: string
	readonly value: TLLanguagePackStringValue
}
export interface TLLanguagePackStrings {
	readonly "@type": "languagePackStrings"
	readonly strings: ReadonlyArray<TLLanguagePackString>
}
export interface TLLanguagePackInfo {
	readonly "@type": "languagePackInfo"
	readonly id: string
	readonly base_language_pack_id: string
	readonly name: string
	readonly native_name: string
	readonly plural_code: string
	readonly is_official: boolean
	readonly is_rtl: boolean
	readonly is_beta: boolean
	readonly is_installed: boolean
	readonly total_string_count: number
	readonly translated_string_count: number
	readonly local_string_count: number
	readonly translation_url: string
}
export interface TLLocalizationTargetInfo {
	readonly "@type": "localizationTargetInfo"
	readonly language_packs: ReadonlyArray<TLLanguagePackInfo>
}
export interface TLDeviceTokenFirebaseCloudMessaging {
	readonly "@type": "deviceTokenFirebaseCloudMessaging"
	readonly token: string
	readonly encrypt: boolean
}
export interface TLDeviceTokenApplePush {
	readonly "@type": "deviceTokenApplePush"
	readonly device_token: string
	readonly is_app_sandbox: boolean
}
export interface TLDeviceTokenApplePushVoIP {
	readonly "@type": "deviceTokenApplePushVoIP"
	readonly device_token: string
	readonly is_app_sandbox: boolean
	readonly encrypt: boolean
}
export interface TLDeviceTokenWindowsPush {
	readonly "@type": "deviceTokenWindowsPush"
	readonly access_token: string
}
export interface TLDeviceTokenMicrosoftPush {
	readonly "@type": "deviceTokenMicrosoftPush"
	readonly channel_uri: string
}
export interface TLDeviceTokenMicrosoftPushVoIP {
	readonly "@type": "deviceTokenMicrosoftPushVoIP"
	readonly channel_uri: string
}
export interface TLDeviceTokenWebPush {
	readonly "@type": "deviceTokenWebPush"
	readonly endpoint: string
	readonly p256dh_base64url: string
	readonly auth_base64url: string
}
export interface TLDeviceTokenSimplePush {
	readonly "@type": "deviceTokenSimplePush"
	readonly endpoint: string
}
export interface TLDeviceTokenUbuntuPush {
	readonly "@type": "deviceTokenUbuntuPush"
	readonly token: string
}
export interface TLDeviceTokenBlackBerryPush {
	readonly "@type": "deviceTokenBlackBerryPush"
	readonly token: string
}
export interface TLDeviceTokenTizenPush {
	readonly "@type": "deviceTokenTizenPush"
	readonly reg_id: string
}
export type TLDeviceToken = TLDeviceTokenFirebaseCloudMessaging | TLDeviceTokenApplePush | TLDeviceTokenApplePushVoIP | TLDeviceTokenWindowsPush | TLDeviceTokenMicrosoftPush | TLDeviceTokenMicrosoftPushVoIP | TLDeviceTokenWebPush | TLDeviceTokenSimplePush | TLDeviceTokenUbuntuPush | TLDeviceTokenBlackBerryPush | TLDeviceTokenTizenPush
export interface TLPushReceiverId {
	readonly "@type": "pushReceiverId"
	readonly id: string
}
export interface TLBackgroundFillSolid {
	readonly "@type": "backgroundFillSolid"
	readonly color: number
}
export interface TLBackgroundFillGradient {
	readonly "@type": "backgroundFillGradient"
	readonly top_color: number
	readonly bottom_color: number
	readonly rotation_angle: number
}
export type TLBackgroundFill = TLBackgroundFillSolid | TLBackgroundFillGradient
export interface TLBackgroundTypeWallpaper {
	readonly "@type": "backgroundTypeWallpaper"
	readonly is_blurred: boolean
	readonly is_moving: boolean
}
export interface TLBackgroundTypePattern {
	readonly "@type": "backgroundTypePattern"
	readonly fill: TLBackgroundFill
	readonly intensity: number
	readonly is_moving: boolean
}
export interface TLBackgroundTypeFill {
	readonly "@type": "backgroundTypeFill"
	readonly fill: TLBackgroundFill
}
export type TLBackgroundType = TLBackgroundTypeWallpaper | TLBackgroundTypePattern | TLBackgroundTypeFill
export interface TLBackground {
	readonly "@type": "background"
	readonly id: string
	readonly is_default: boolean
	readonly is_dark: boolean
	readonly name: string
	readonly document: TLDocument
	readonly type: TLBackgroundType
}
export interface TLBackgrounds {
	readonly "@type": "backgrounds"
	readonly backgrounds: ReadonlyArray<TLBackground>
}
export interface TLInputBackgroundLocal {
	readonly "@type": "inputBackgroundLocal"
	readonly background: TLInputFile
}
export interface TLInputBackgroundRemote {
	readonly "@type": "inputBackgroundRemote"
	readonly background_id: string
}
export type TLInputBackground = TLInputBackgroundLocal | TLInputBackgroundRemote
export interface TLHashtags {
	readonly "@type": "hashtags"
	readonly hashtags: ReadonlyArray<string>
}
export interface TLCanTransferOwnershipResultOk {
	readonly "@type": "canTransferOwnershipResultOk"
}
export interface TLCanTransferOwnershipResultPasswordNeeded {
	readonly "@type": "canTransferOwnershipResultPasswordNeeded"
}
export interface TLCanTransferOwnershipResultPasswordTooFresh {
	readonly "@type": "canTransferOwnershipResultPasswordTooFresh"
	readonly retry_after: number
}
export interface TLCanTransferOwnershipResultSessionTooFresh {
	readonly "@type": "canTransferOwnershipResultSessionTooFresh"
	readonly retry_after: number
}
export type TLCanTransferOwnershipResult = TLCanTransferOwnershipResultOk | TLCanTransferOwnershipResultPasswordNeeded | TLCanTransferOwnershipResultPasswordTooFresh | TLCanTransferOwnershipResultSessionTooFresh
export interface TLCheckChatUsernameResultOk {
	readonly "@type": "checkChatUsernameResultOk"
}
export interface TLCheckChatUsernameResultUsernameInvalid {
	readonly "@type": "checkChatUsernameResultUsernameInvalid"
}
export interface TLCheckChatUsernameResultUsernameOccupied {
	readonly "@type": "checkChatUsernameResultUsernameOccupied"
}
export interface TLCheckChatUsernameResultPublicChatsTooMuch {
	readonly "@type": "checkChatUsernameResultPublicChatsTooMuch"
}
export interface TLCheckChatUsernameResultPublicGroupsUnavailable {
	readonly "@type": "checkChatUsernameResultPublicGroupsUnavailable"
}
export type TLCheckChatUsernameResult = TLCheckChatUsernameResultOk | TLCheckChatUsernameResultUsernameInvalid | TLCheckChatUsernameResultUsernameOccupied | TLCheckChatUsernameResultPublicChatsTooMuch | TLCheckChatUsernameResultPublicGroupsUnavailable
export interface TLPushMessageContentHidden {
	readonly "@type": "pushMessageContentHidden"
	readonly is_pinned: boolean
}
export interface TLPushMessageContentAnimation {
	readonly "@type": "pushMessageContentAnimation"
	readonly animation: TLAnimation
	readonly caption: string
	readonly is_pinned: boolean
}
export interface TLPushMessageContentAudio {
	readonly "@type": "pushMessageContentAudio"
	readonly audio: TLAudio
	readonly is_pinned: boolean
}
export interface TLPushMessageContentContact {
	readonly "@type": "pushMessageContentContact"
	readonly name: string
	readonly is_pinned: boolean
}
export interface TLPushMessageContentContactRegistered {
	readonly "@type": "pushMessageContentContactRegistered"
}
export interface TLPushMessageContentDocument {
	readonly "@type": "pushMessageContentDocument"
	readonly document: TLDocument
	readonly is_pinned: boolean
}
export interface TLPushMessageContentGame {
	readonly "@type": "pushMessageContentGame"
	readonly title: string
	readonly is_pinned: boolean
}
export interface TLPushMessageContentGameScore {
	readonly "@type": "pushMessageContentGameScore"
	readonly title: string
	readonly score: number
	readonly is_pinned: boolean
}
export interface TLPushMessageContentInvoice {
	readonly "@type": "pushMessageContentInvoice"
	readonly price: string
	readonly is_pinned: boolean
}
export interface TLPushMessageContentLocation {
	readonly "@type": "pushMessageContentLocation"
	readonly is_live: boolean
	readonly is_pinned: boolean
}
export interface TLPushMessageContentPhoto {
	readonly "@type": "pushMessageContentPhoto"
	readonly photo: TLPhoto
	readonly caption: string
	readonly is_secret: boolean
	readonly is_pinned: boolean
}
export interface TLPushMessageContentPoll {
	readonly "@type": "pushMessageContentPoll"
	readonly question: string
	readonly is_regular: boolean
	readonly is_pinned: boolean
}
export interface TLPushMessageContentScreenshotTaken {
	readonly "@type": "pushMessageContentScreenshotTaken"
}
export interface TLPushMessageContentSticker {
	readonly "@type": "pushMessageContentSticker"
	readonly sticker: TLSticker
	readonly emoji: string
	readonly is_pinned: boolean
}
export interface TLPushMessageContentText {
	readonly "@type": "pushMessageContentText"
	readonly text: string
	readonly is_pinned: boolean
}
export interface TLPushMessageContentVideo {
	readonly "@type": "pushMessageContentVideo"
	readonly video: TLVideo
	readonly caption: string
	readonly is_secret: boolean
	readonly is_pinned: boolean
}
export interface TLPushMessageContentVideoNote {
	readonly "@type": "pushMessageContentVideoNote"
	readonly video_note: TLVideoNote
	readonly is_pinned: boolean
}
export interface TLPushMessageContentVoiceNote {
	readonly "@type": "pushMessageContentVoiceNote"
	readonly voice_note: TLVoiceNote
	readonly is_pinned: boolean
}
export interface TLPushMessageContentBasicGroupChatCreate {
	readonly "@type": "pushMessageContentBasicGroupChatCreate"
}
export interface TLPushMessageContentChatAddMembers {
	readonly "@type": "pushMessageContentChatAddMembers"
	readonly member_name: string
	readonly is_current_user: boolean
	readonly is_returned: boolean
}
export interface TLPushMessageContentChatChangePhoto {
	readonly "@type": "pushMessageContentChatChangePhoto"
}
export interface TLPushMessageContentChatChangeTitle {
	readonly "@type": "pushMessageContentChatChangeTitle"
	readonly title: string
}
export interface TLPushMessageContentChatDeleteMember {
	readonly "@type": "pushMessageContentChatDeleteMember"
	readonly member_name: string
	readonly is_current_user: boolean
	readonly is_left: boolean
}
export interface TLPushMessageContentChatJoinByLink {
	readonly "@type": "pushMessageContentChatJoinByLink"
}
export interface TLPushMessageContentMessageForwards {
	readonly "@type": "pushMessageContentMessageForwards"
	readonly total_count: number
}
export interface TLPushMessageContentMediaAlbum {
	readonly "@type": "pushMessageContentMediaAlbum"
	readonly total_count: number
	readonly has_photos: boolean
	readonly has_videos: boolean
	readonly has_audios: boolean
	readonly has_documents: boolean
}
export type TLPushMessageContent = TLPushMessageContentHidden | TLPushMessageContentAnimation | TLPushMessageContentAudio | TLPushMessageContentContact | TLPushMessageContentContactRegistered | TLPushMessageContentDocument | TLPushMessageContentGame | TLPushMessageContentGameScore | TLPushMessageContentInvoice | TLPushMessageContentLocation | TLPushMessageContentPhoto | TLPushMessageContentPoll | TLPushMessageContentScreenshotTaken | TLPushMessageContentSticker | TLPushMessageContentText | TLPushMessageContentVideo | TLPushMessageContentVideoNote | TLPushMessageContentVoiceNote | TLPushMessageContentBasicGroupChatCreate | TLPushMessageContentChatAddMembers | TLPushMessageContentChatChangePhoto | TLPushMessageContentChatChangeTitle | TLPushMessageContentChatDeleteMember | TLPushMessageContentChatJoinByLink | TLPushMessageContentMessageForwards | TLPushMessageContentMediaAlbum
export interface TLNotificationTypeNewMessage {
	readonly "@type": "notificationTypeNewMessage"
	readonly message: TLMessage
}
export interface TLNotificationTypeNewSecretChat {
	readonly "@type": "notificationTypeNewSecretChat"
}
export interface TLNotificationTypeNewCall {
	readonly "@type": "notificationTypeNewCall"
	readonly call_id: number
}
export interface TLNotificationTypeNewPushMessage {
	readonly "@type": "notificationTypeNewPushMessage"
	readonly message_id: number
	readonly sender: TLMessageSender
	readonly sender_name: string
	readonly is_outgoing: boolean
	readonly content: TLPushMessageContent
}
export type TLNotificationType = TLNotificationTypeNewMessage | TLNotificationTypeNewSecretChat | TLNotificationTypeNewCall | TLNotificationTypeNewPushMessage
export interface TLNotificationGroupTypeMessages {
	readonly "@type": "notificationGroupTypeMessages"
}
export interface TLNotificationGroupTypeMentions {
	readonly "@type": "notificationGroupTypeMentions"
}
export interface TLNotificationGroupTypeSecretChat {
	readonly "@type": "notificationGroupTypeSecretChat"
}
export interface TLNotificationGroupTypeCalls {
	readonly "@type": "notificationGroupTypeCalls"
}
export type TLNotificationGroupType = TLNotificationGroupTypeMessages | TLNotificationGroupTypeMentions | TLNotificationGroupTypeSecretChat | TLNotificationGroupTypeCalls
export interface TLNotification {
	readonly "@type": "notification"
	readonly id: number
	readonly date: number
	readonly is_silent: boolean
	readonly type: TLNotificationType
}
export interface TLNotificationGroup {
	readonly "@type": "notificationGroup"
	readonly id: number
	readonly type: TLNotificationGroupType
	readonly chat_id: number
	readonly total_count: number
	readonly notifications: ReadonlyArray<TLNotification>
}
export interface TLOptionValueBoolean {
	readonly "@type": "optionValueBoolean"
	readonly value: boolean
}
export interface TLOptionValueEmpty {
	readonly "@type": "optionValueEmpty"
}
export interface TLOptionValueInteger {
	readonly "@type": "optionValueInteger"
	readonly value: string
}
export interface TLOptionValueString {
	readonly "@type": "optionValueString"
	readonly value: string
}
export type TLOptionValue = TLOptionValueBoolean | TLOptionValueEmpty | TLOptionValueInteger | TLOptionValueString
export interface TLJsonObjectMember {
	readonly "@type": "jsonObjectMember"
	readonly key: string
	readonly value: TLJsonValue
}
export interface TLJsonValueNull {
	readonly "@type": "jsonValueNull"
}
export interface TLJsonValueBoolean {
	readonly "@type": "jsonValueBoolean"
	readonly value: boolean
}
export interface TLJsonValueNumber {
	readonly "@type": "jsonValueNumber"
	readonly value: number
}
export interface TLJsonValueString {
	readonly "@type": "jsonValueString"
	readonly value: string
}
export interface TLJsonValueArray {
	readonly "@type": "jsonValueArray"
	readonly values: ReadonlyArray<TLJsonValue>
}
export interface TLJsonValueObject {
	readonly "@type": "jsonValueObject"
	readonly members: ReadonlyArray<TLJsonObjectMember>
}
export type TLJsonValue = TLJsonValueNull | TLJsonValueBoolean | TLJsonValueNumber | TLJsonValueString | TLJsonValueArray | TLJsonValueObject
export interface TLUserPrivacySettingRuleAllowAll {
	readonly "@type": "userPrivacySettingRuleAllowAll"
}
export interface TLUserPrivacySettingRuleAllowContacts {
	readonly "@type": "userPrivacySettingRuleAllowContacts"
}
export interface TLUserPrivacySettingRuleAllowUsers {
	readonly "@type": "userPrivacySettingRuleAllowUsers"
	readonly user_ids: ReadonlyArray<number>
}
export interface TLUserPrivacySettingRuleAllowChatMembers {
	readonly "@type": "userPrivacySettingRuleAllowChatMembers"
	readonly chat_ids: ReadonlyArray<number>
}
export interface TLUserPrivacySettingRuleRestrictAll {
	readonly "@type": "userPrivacySettingRuleRestrictAll"
}
export interface TLUserPrivacySettingRuleRestrictContacts {
	readonly "@type": "userPrivacySettingRuleRestrictContacts"
}
export interface TLUserPrivacySettingRuleRestrictUsers {
	readonly "@type": "userPrivacySettingRuleRestrictUsers"
	readonly user_ids: ReadonlyArray<number>
}
export interface TLUserPrivacySettingRuleRestrictChatMembers {
	readonly "@type": "userPrivacySettingRuleRestrictChatMembers"
	readonly chat_ids: ReadonlyArray<number>
}
export type TLUserPrivacySettingRule = TLUserPrivacySettingRuleAllowAll | TLUserPrivacySettingRuleAllowContacts | TLUserPrivacySettingRuleAllowUsers | TLUserPrivacySettingRuleAllowChatMembers | TLUserPrivacySettingRuleRestrictAll | TLUserPrivacySettingRuleRestrictContacts | TLUserPrivacySettingRuleRestrictUsers | TLUserPrivacySettingRuleRestrictChatMembers
export interface TLUserPrivacySettingRules {
	readonly "@type": "userPrivacySettingRules"
	readonly rules: ReadonlyArray<TLUserPrivacySettingRule>
}
export interface TLUserPrivacySettingShowStatus {
	readonly "@type": "userPrivacySettingShowStatus"
}
export interface TLUserPrivacySettingShowProfilePhoto {
	readonly "@type": "userPrivacySettingShowProfilePhoto"
}
export interface TLUserPrivacySettingShowLinkInForwardedMessages {
	readonly "@type": "userPrivacySettingShowLinkInForwardedMessages"
}
export interface TLUserPrivacySettingShowPhoneNumber {
	readonly "@type": "userPrivacySettingShowPhoneNumber"
}
export interface TLUserPrivacySettingAllowChatInvites {
	readonly "@type": "userPrivacySettingAllowChatInvites"
}
export interface TLUserPrivacySettingAllowCalls {
	readonly "@type": "userPrivacySettingAllowCalls"
}
export interface TLUserPrivacySettingAllowPeerToPeerCalls {
	readonly "@type": "userPrivacySettingAllowPeerToPeerCalls"
}
export interface TLUserPrivacySettingAllowFindingByPhoneNumber {
	readonly "@type": "userPrivacySettingAllowFindingByPhoneNumber"
}
export type TLUserPrivacySetting = TLUserPrivacySettingShowStatus | TLUserPrivacySettingShowProfilePhoto | TLUserPrivacySettingShowLinkInForwardedMessages | TLUserPrivacySettingShowPhoneNumber | TLUserPrivacySettingAllowChatInvites | TLUserPrivacySettingAllowCalls | TLUserPrivacySettingAllowPeerToPeerCalls | TLUserPrivacySettingAllowFindingByPhoneNumber
export interface TLAccountTtl {
	readonly "@type": "accountTtl"
	readonly days: number
}
export interface TLSession {
	readonly "@type": "session"
	readonly id: string
	readonly is_current: boolean
	readonly is_password_pending: boolean
	readonly api_id: number
	readonly application_name: string
	readonly application_version: string
	readonly is_official_application: boolean
	readonly device_model: string
	readonly platform: string
	readonly system_version: string
	readonly log_in_date: number
	readonly last_active_date: number
	readonly ip: string
	readonly country: string
	readonly region: string
}
export interface TLSessions {
	readonly "@type": "sessions"
	readonly sessions: ReadonlyArray<TLSession>
}
export interface TLConnectedWebsite {
	readonly "@type": "connectedWebsite"
	readonly id: string
	readonly domain_name: string
	readonly bot_user_id: number
	readonly browser: string
	readonly platform: string
	readonly log_in_date: number
	readonly last_active_date: number
	readonly ip: string
	readonly location: string
}
export interface TLConnectedWebsites {
	readonly "@type": "connectedWebsites"
	readonly websites: ReadonlyArray<TLConnectedWebsite>
}
export interface TLChatReportReasonSpam {
	readonly "@type": "chatReportReasonSpam"
}
export interface TLChatReportReasonViolence {
	readonly "@type": "chatReportReasonViolence"
}
export interface TLChatReportReasonPornography {
	readonly "@type": "chatReportReasonPornography"
}
export interface TLChatReportReasonChildAbuse {
	readonly "@type": "chatReportReasonChildAbuse"
}
export interface TLChatReportReasonCopyright {
	readonly "@type": "chatReportReasonCopyright"
}
export interface TLChatReportReasonUnrelatedLocation {
	readonly "@type": "chatReportReasonUnrelatedLocation"
}
export interface TLChatReportReasonCustom {
	readonly "@type": "chatReportReasonCustom"
	readonly text: string
}
export type TLChatReportReason = TLChatReportReasonSpam | TLChatReportReasonViolence | TLChatReportReasonPornography | TLChatReportReasonChildAbuse | TLChatReportReasonCopyright | TLChatReportReasonUnrelatedLocation | TLChatReportReasonCustom
export interface TLMessageLink {
	readonly "@type": "messageLink"
	readonly link: string
	readonly is_public: boolean
}
export interface TLMessageLinkInfo {
	readonly "@type": "messageLinkInfo"
	readonly is_public: boolean
	readonly chat_id: number
	readonly message: TLMessage
	readonly for_album: boolean
	readonly for_comment: boolean
}
export interface TLFilePart {
	readonly "@type": "filePart"
	readonly data: Uint8Array
}
export interface TLFileTypeNone {
	readonly "@type": "fileTypeNone"
}
export interface TLFileTypeAnimation {
	readonly "@type": "fileTypeAnimation"
}
export interface TLFileTypeAudio {
	readonly "@type": "fileTypeAudio"
}
export interface TLFileTypeDocument {
	readonly "@type": "fileTypeDocument"
}
export interface TLFileTypePhoto {
	readonly "@type": "fileTypePhoto"
}
export interface TLFileTypeProfilePhoto {
	readonly "@type": "fileTypeProfilePhoto"
}
export interface TLFileTypeSecret {
	readonly "@type": "fileTypeSecret"
}
export interface TLFileTypeSecretThumbnail {
	readonly "@type": "fileTypeSecretThumbnail"
}
export interface TLFileTypeSecure {
	readonly "@type": "fileTypeSecure"
}
export interface TLFileTypeSticker {
	readonly "@type": "fileTypeSticker"
}
export interface TLFileTypeThumbnail {
	readonly "@type": "fileTypeThumbnail"
}
export interface TLFileTypeUnknown {
	readonly "@type": "fileTypeUnknown"
}
export interface TLFileTypeVideo {
	readonly "@type": "fileTypeVideo"
}
export interface TLFileTypeVideoNote {
	readonly "@type": "fileTypeVideoNote"
}
export interface TLFileTypeVoiceNote {
	readonly "@type": "fileTypeVoiceNote"
}
export interface TLFileTypeWallpaper {
	readonly "@type": "fileTypeWallpaper"
}
export type TLFileType = TLFileTypeNone | TLFileTypeAnimation | TLFileTypeAudio | TLFileTypeDocument | TLFileTypePhoto | TLFileTypeProfilePhoto | TLFileTypeSecret | TLFileTypeSecretThumbnail | TLFileTypeSecure | TLFileTypeSticker | TLFileTypeThumbnail | TLFileTypeUnknown | TLFileTypeVideo | TLFileTypeVideoNote | TLFileTypeVoiceNote | TLFileTypeWallpaper
export interface TLStorageStatisticsByFileType {
	readonly "@type": "storageStatisticsByFileType"
	readonly file_type: TLFileType
	readonly size: number
	readonly count: number
}
export interface TLStorageStatisticsByChat {
	readonly "@type": "storageStatisticsByChat"
	readonly chat_id: number
	readonly size: number
	readonly count: number
	readonly by_file_type: ReadonlyArray<TLStorageStatisticsByFileType>
}
export interface TLStorageStatistics {
	readonly "@type": "storageStatistics"
	readonly size: number
	readonly count: number
	readonly by_chat: ReadonlyArray<TLStorageStatisticsByChat>
}
export interface TLStorageStatisticsFast {
	readonly "@type": "storageStatisticsFast"
	readonly files_size: number
	readonly file_count: number
	readonly database_size: number
	readonly language_pack_database_size: number
	readonly log_size: number
}
export interface TLDatabaseStatistics {
	readonly "@type": "databaseStatistics"
	readonly statistics: string
}
export interface TLNetworkTypeNone {
	readonly "@type": "networkTypeNone"
}
export interface TLNetworkTypeMobile {
	readonly "@type": "networkTypeMobile"
}
export interface TLNetworkTypeMobileRoaming {
	readonly "@type": "networkTypeMobileRoaming"
}
export interface TLNetworkTypeWiFi {
	readonly "@type": "networkTypeWiFi"
}
export interface TLNetworkTypeOther {
	readonly "@type": "networkTypeOther"
}
export type TLNetworkType = TLNetworkTypeNone | TLNetworkTypeMobile | TLNetworkTypeMobileRoaming | TLNetworkTypeWiFi | TLNetworkTypeOther
export interface TLNetworkStatisticsEntryFile {
	readonly "@type": "networkStatisticsEntryFile"
	readonly file_type: TLFileType
	readonly network_type: TLNetworkType
	readonly sent_bytes: number
	readonly received_bytes: number
}
export interface TLNetworkStatisticsEntryCall {
	readonly "@type": "networkStatisticsEntryCall"
	readonly network_type: TLNetworkType
	readonly sent_bytes: number
	readonly received_bytes: number
	readonly duration: number
}
export type TLNetworkStatisticsEntry = TLNetworkStatisticsEntryFile | TLNetworkStatisticsEntryCall
export interface TLNetworkStatistics {
	readonly "@type": "networkStatistics"
	readonly since_date: number
	readonly entries: ReadonlyArray<TLNetworkStatisticsEntry>
}
export interface TLAutoDownloadSettings {
	readonly "@type": "autoDownloadSettings"
	readonly is_auto_download_enabled: boolean
	readonly max_photo_file_size: number
	readonly max_video_file_size: number
	readonly max_other_file_size: number
	readonly video_upload_bitrate: number
	readonly preload_large_videos: boolean
	readonly preload_next_audio: boolean
	readonly use_less_data_for_calls: boolean
}
export interface TLAutoDownloadSettingsPresets {
	readonly "@type": "autoDownloadSettingsPresets"
	readonly low: TLAutoDownloadSettings
	readonly medium: TLAutoDownloadSettings
	readonly high: TLAutoDownloadSettings
}
export interface TLConnectionStateWaitingForNetwork {
	readonly "@type": "connectionStateWaitingForNetwork"
}
export interface TLConnectionStateConnectingToProxy {
	readonly "@type": "connectionStateConnectingToProxy"
}
export interface TLConnectionStateConnecting {
	readonly "@type": "connectionStateConnecting"
}
export interface TLConnectionStateUpdating {
	readonly "@type": "connectionStateUpdating"
}
export interface TLConnectionStateReady {
	readonly "@type": "connectionStateReady"
}
export type TLConnectionState = TLConnectionStateWaitingForNetwork | TLConnectionStateConnectingToProxy | TLConnectionStateConnecting | TLConnectionStateUpdating | TLConnectionStateReady
export interface TLTopChatCategoryUsers {
	readonly "@type": "topChatCategoryUsers"
}
export interface TLTopChatCategoryBots {
	readonly "@type": "topChatCategoryBots"
}
export interface TLTopChatCategoryGroups {
	readonly "@type": "topChatCategoryGroups"
}
export interface TLTopChatCategoryChannels {
	readonly "@type": "topChatCategoryChannels"
}
export interface TLTopChatCategoryInlineBots {
	readonly "@type": "topChatCategoryInlineBots"
}
export interface TLTopChatCategoryCalls {
	readonly "@type": "topChatCategoryCalls"
}
export interface TLTopChatCategoryForwardChats {
	readonly "@type": "topChatCategoryForwardChats"
}
export type TLTopChatCategory = TLTopChatCategoryUsers | TLTopChatCategoryBots | TLTopChatCategoryGroups | TLTopChatCategoryChannels | TLTopChatCategoryInlineBots | TLTopChatCategoryCalls | TLTopChatCategoryForwardChats
export interface TLTMeUrlTypeUser {
	readonly "@type": "tMeUrlTypeUser"
	readonly user_id: number
}
export interface TLTMeUrlTypeSupergroup {
	readonly "@type": "tMeUrlTypeSupergroup"
	readonly supergroup_id: number
}
export interface TLTMeUrlTypeChatInvite {
	readonly "@type": "tMeUrlTypeChatInvite"
	readonly info: TLChatInviteLinkInfo
}
export interface TLTMeUrlTypeStickerSet {
	readonly "@type": "tMeUrlTypeStickerSet"
	readonly sticker_set_id: string
}
export type TLTMeUrlType = TLTMeUrlTypeUser | TLTMeUrlTypeSupergroup | TLTMeUrlTypeChatInvite | TLTMeUrlTypeStickerSet
export interface TLTMeUrl {
	readonly "@type": "tMeUrl"
	readonly url: string
	readonly type: TLTMeUrlType
}
export interface TLTMeUrls {
	readonly "@type": "tMeUrls"
	readonly urls: ReadonlyArray<TLTMeUrl>
}
export interface TLSuggestedActionEnableArchiveAndMuteNewChats {
	readonly "@type": "suggestedActionEnableArchiveAndMuteNewChats"
}
export interface TLSuggestedActionCheckPhoneNumber {
	readonly "@type": "suggestedActionCheckPhoneNumber"
}
export type TLSuggestedAction = TLSuggestedActionEnableArchiveAndMuteNewChats | TLSuggestedActionCheckPhoneNumber
export interface TLCount {
	readonly "@type": "count"
	readonly count: number
}
export interface TLText {
	readonly "@type": "text"
	readonly text: string
}
export interface TLSeconds {
	readonly "@type": "seconds"
	readonly seconds: number
}
export interface TLDeepLinkInfo {
	readonly "@type": "deepLinkInfo"
	readonly text: TLFormattedText
	readonly need_update_application: boolean
}
export interface TLTextParseModeMarkdown {
	readonly "@type": "textParseModeMarkdown"
	readonly version: number
}
export interface TLTextParseModeHTML {
	readonly "@type": "textParseModeHTML"
}
export type TLTextParseMode = TLTextParseModeMarkdown | TLTextParseModeHTML
export interface TLProxyTypeSocks5 {
	readonly "@type": "proxyTypeSocks5"
	readonly username: string
	readonly password: string
}
export interface TLProxyTypeHttp {
	readonly "@type": "proxyTypeHttp"
	readonly username: string
	readonly password: string
	readonly http_only: boolean
}
export interface TLProxyTypeMtproto {
	readonly "@type": "proxyTypeMtproto"
	readonly secret: string
}
export type TLProxyType = TLProxyTypeSocks5 | TLProxyTypeHttp | TLProxyTypeMtproto
export interface TLProxy {
	readonly "@type": "proxy"
	readonly id: number
	readonly server: string
	readonly port: number
	readonly last_used_date: number
	readonly is_enabled: boolean
	readonly type: TLProxyType
}
export interface TLProxies {
	readonly "@type": "proxies"
	readonly proxies: ReadonlyArray<TLProxy>
}
export interface TLInputStickerStatic {
	readonly "@type": "inputStickerStatic"
	readonly sticker: TLInputFile
	readonly emojis: string
	readonly mask_position: TLMaskPosition
}
export interface TLInputStickerAnimated {
	readonly "@type": "inputStickerAnimated"
	readonly sticker: TLInputFile
	readonly emojis: string
}
export type TLInputSticker = TLInputStickerStatic | TLInputStickerAnimated
export interface TLDateRange {
	readonly "@type": "dateRange"
	readonly start_date: number
	readonly end_date: number
}
export interface TLStatisticsValue {
	readonly "@type": "statisticsValue"
	readonly value: number
	readonly previous_value: number
	readonly growth_rate_percentage: number
}
export interface TLStatisticsGraphData {
	readonly "@type": "statisticsGraphData"
	readonly json_data: string
	readonly zoom_token: string
}
export interface TLStatisticsGraphAsync {
	readonly "@type": "statisticsGraphAsync"
	readonly token: string
}
export interface TLStatisticsGraphError {
	readonly "@type": "statisticsGraphError"
	readonly error_message: string
}
export type TLStatisticsGraph = TLStatisticsGraphData | TLStatisticsGraphAsync | TLStatisticsGraphError
export interface TLChatStatisticsMessageInteractionInfo {
	readonly "@type": "chatStatisticsMessageInteractionInfo"
	readonly message_id: number
	readonly view_count: number
	readonly forward_count: number
}
export interface TLChatStatisticsMessageSenderInfo {
	readonly "@type": "chatStatisticsMessageSenderInfo"
	readonly user_id: number
	readonly sent_message_count: number
	readonly average_character_count: number
}
export interface TLChatStatisticsAdministratorActionsInfo {
	readonly "@type": "chatStatisticsAdministratorActionsInfo"
	readonly user_id: number
	readonly deleted_message_count: number
	readonly banned_user_count: number
	readonly restricted_user_count: number
}
export interface TLChatStatisticsInviterInfo {
	readonly "@type": "chatStatisticsInviterInfo"
	readonly user_id: number
	readonly added_member_count: number
}
export interface TLChatStatisticsSupergroup {
	readonly "@type": "chatStatisticsSupergroup"
	readonly period: TLDateRange
	readonly member_count: TLStatisticsValue
	readonly message_count: TLStatisticsValue
	readonly viewer_count: TLStatisticsValue
	readonly sender_count: TLStatisticsValue
	readonly member_count_graph: TLStatisticsGraph
	readonly join_graph: TLStatisticsGraph
	readonly join_by_source_graph: TLStatisticsGraph
	readonly language_graph: TLStatisticsGraph
	readonly message_content_graph: TLStatisticsGraph
	readonly action_graph: TLStatisticsGraph
	readonly day_graph: TLStatisticsGraph
	readonly week_graph: TLStatisticsGraph
	readonly top_senders: ReadonlyArray<TLChatStatisticsMessageSenderInfo>
	readonly top_administrators: ReadonlyArray<TLChatStatisticsAdministratorActionsInfo>
	readonly top_inviters: ReadonlyArray<TLChatStatisticsInviterInfo>
}
export interface TLChatStatisticsChannel {
	readonly "@type": "chatStatisticsChannel"
	readonly period: TLDateRange
	readonly member_count: TLStatisticsValue
	readonly mean_view_count: TLStatisticsValue
	readonly mean_share_count: TLStatisticsValue
	readonly enabled_notifications_percentage: number
	readonly member_count_graph: TLStatisticsGraph
	readonly join_graph: TLStatisticsGraph
	readonly mute_graph: TLStatisticsGraph
	readonly view_count_by_hour_graph: TLStatisticsGraph
	readonly view_count_by_source_graph: TLStatisticsGraph
	readonly join_by_source_graph: TLStatisticsGraph
	readonly language_graph: TLStatisticsGraph
	readonly message_interaction_graph: TLStatisticsGraph
	readonly instant_view_interaction_graph: TLStatisticsGraph
	readonly recent_message_interactions: ReadonlyArray<TLChatStatisticsMessageInteractionInfo>
}
export type TLChatStatistics = TLChatStatisticsSupergroup | TLChatStatisticsChannel
export interface TLMessageStatistics {
	readonly "@type": "messageStatistics"
	readonly message_interaction_graph: TLStatisticsGraph
}
export interface TLUpdateAuthorizationState {
	readonly "@type": "updateAuthorizationState"
	readonly authorization_state: TLAuthorizationState
}
export interface TLUpdateNewMessage {
	readonly "@type": "updateNewMessage"
	readonly message: TLMessage
}
export interface TLUpdateMessageSendAcknowledged {
	readonly "@type": "updateMessageSendAcknowledged"
	readonly chat_id: number
	readonly message_id: number
}
export interface TLUpdateMessageSendSucceeded {
	readonly "@type": "updateMessageSendSucceeded"
	readonly message: TLMessage
	readonly old_message_id: number
}
export interface TLUpdateMessageSendFailed {
	readonly "@type": "updateMessageSendFailed"
	readonly message: TLMessage
	readonly old_message_id: number
	readonly error_code: number
	readonly error_message: string
}
export interface TLUpdateMessageContent {
	readonly "@type": "updateMessageContent"
	readonly chat_id: number
	readonly message_id: number
	readonly new_content: TLMessageContent
}
export interface TLUpdateMessageEdited {
	readonly "@type": "updateMessageEdited"
	readonly chat_id: number
	readonly message_id: number
	readonly edit_date: number
	readonly reply_markup: TLReplyMarkup
}
export interface TLUpdateMessageIsPinned {
	readonly "@type": "updateMessageIsPinned"
	readonly chat_id: number
	readonly message_id: number
	readonly is_pinned: boolean
}
export interface TLUpdateMessageInteractionInfo {
	readonly "@type": "updateMessageInteractionInfo"
	readonly chat_id: number
	readonly message_id: number
	readonly interaction_info: TLMessageInteractionInfo
}
export interface TLUpdateMessageContentOpened {
	readonly "@type": "updateMessageContentOpened"
	readonly chat_id: number
	readonly message_id: number
}
export interface TLUpdateMessageMentionRead {
	readonly "@type": "updateMessageMentionRead"
	readonly chat_id: number
	readonly message_id: number
	readonly unread_mention_count: number
}
export interface TLUpdateMessageLiveLocationViewed {
	readonly "@type": "updateMessageLiveLocationViewed"
	readonly chat_id: number
	readonly message_id: number
}
export interface TLUpdateNewChat {
	readonly "@type": "updateNewChat"
	readonly chat: TLChat
}
export interface TLUpdateChatTitle {
	readonly "@type": "updateChatTitle"
	readonly chat_id: number
	readonly title: string
}
export interface TLUpdateChatPhoto {
	readonly "@type": "updateChatPhoto"
	readonly chat_id: number
	readonly photo: TLChatPhotoInfo
}
export interface TLUpdateChatPermissions {
	readonly "@type": "updateChatPermissions"
	readonly chat_id: number
	readonly permissions: TLChatPermissions
}
export interface TLUpdateChatLastMessage {
	readonly "@type": "updateChatLastMessage"
	readonly chat_id: number
	readonly last_message: TLMessage
	readonly positions: ReadonlyArray<TLChatPosition>
}
export interface TLUpdateChatPosition {
	readonly "@type": "updateChatPosition"
	readonly chat_id: number
	readonly position: TLChatPosition
}
export interface TLUpdateChatIsMarkedAsUnread {
	readonly "@type": "updateChatIsMarkedAsUnread"
	readonly chat_id: number
	readonly is_marked_as_unread: boolean
}
export interface TLUpdateChatIsBlocked {
	readonly "@type": "updateChatIsBlocked"
	readonly chat_id: number
	readonly is_blocked: boolean
}
export interface TLUpdateChatHasScheduledMessages {
	readonly "@type": "updateChatHasScheduledMessages"
	readonly chat_id: number
	readonly has_scheduled_messages: boolean
}
export interface TLUpdateChatDefaultDisableNotification {
	readonly "@type": "updateChatDefaultDisableNotification"
	readonly chat_id: number
	readonly default_disable_notification: boolean
}
export interface TLUpdateChatReadInbox {
	readonly "@type": "updateChatReadInbox"
	readonly chat_id: number
	readonly last_read_inbox_message_id: number
	readonly unread_count: number
}
export interface TLUpdateChatReadOutbox {
	readonly "@type": "updateChatReadOutbox"
	readonly chat_id: number
	readonly last_read_outbox_message_id: number
}
export interface TLUpdateChatUnreadMentionCount {
	readonly "@type": "updateChatUnreadMentionCount"
	readonly chat_id: number
	readonly unread_mention_count: number
}
export interface TLUpdateChatNotificationSettings {
	readonly "@type": "updateChatNotificationSettings"
	readonly chat_id: number
	readonly notification_settings: TLChatNotificationSettings
}
export interface TLUpdateScopeNotificationSettings {
	readonly "@type": "updateScopeNotificationSettings"
	readonly scope: TLNotificationSettingsScope
	readonly notification_settings: TLScopeNotificationSettings
}
export interface TLUpdateChatActionBar {
	readonly "@type": "updateChatActionBar"
	readonly chat_id: number
	readonly action_bar: TLChatActionBar
}
export interface TLUpdateChatReplyMarkup {
	readonly "@type": "updateChatReplyMarkup"
	readonly chat_id: number
	readonly reply_markup_message_id: number
}
export interface TLUpdateChatDraftMessage {
	readonly "@type": "updateChatDraftMessage"
	readonly chat_id: number
	readonly draft_message: TLDraftMessage
	readonly positions: ReadonlyArray<TLChatPosition>
}
export interface TLUpdateChatFilters {
	readonly "@type": "updateChatFilters"
	readonly chat_filters: ReadonlyArray<TLChatFilterInfo>
}
export interface TLUpdateChatOnlineMemberCount {
	readonly "@type": "updateChatOnlineMemberCount"
	readonly chat_id: number
	readonly online_member_count: number
}
export interface TLUpdateNotification {
	readonly "@type": "updateNotification"
	readonly notification_group_id: number
	readonly notification: TLNotification
}
export interface TLUpdateNotificationGroup {
	readonly "@type": "updateNotificationGroup"
	readonly notification_group_id: number
	readonly type: TLNotificationGroupType
	readonly chat_id: number
	readonly notification_settings_chat_id: number
	readonly is_silent: boolean
	readonly total_count: number
	readonly added_notifications: ReadonlyArray<TLNotification>
	readonly removed_notification_ids: ReadonlyArray<number>
}
export interface TLUpdateActiveNotifications {
	readonly "@type": "updateActiveNotifications"
	readonly groups: ReadonlyArray<TLNotificationGroup>
}
export interface TLUpdateHavePendingNotifications {
	readonly "@type": "updateHavePendingNotifications"
	readonly have_delayed_notifications: boolean
	readonly have_unreceived_notifications: boolean
}
export interface TLUpdateDeleteMessages {
	readonly "@type": "updateDeleteMessages"
	readonly chat_id: number
	readonly message_ids: ReadonlyArray<number>
	readonly is_permanent: boolean
	readonly from_cache: boolean
}
export interface TLUpdateUserChatAction {
	readonly "@type": "updateUserChatAction"
	readonly chat_id: number
	readonly message_thread_id: number
	readonly user_id: number
	readonly action: TLChatAction
}
export interface TLUpdateUserStatus {
	readonly "@type": "updateUserStatus"
	readonly user_id: number
	readonly status: TLUserStatus
}
export interface TLUpdateUser {
	readonly "@type": "updateUser"
	readonly user: TLUser
}
export interface TLUpdateBasicGroup {
	readonly "@type": "updateBasicGroup"
	readonly basic_group: TLBasicGroup
}
export interface TLUpdateSupergroup {
	readonly "@type": "updateSupergroup"
	readonly supergroup: TLSupergroup
}
export interface TLUpdateSecretChat {
	readonly "@type": "updateSecretChat"
	readonly secret_chat: TLSecretChat
}
export interface TLUpdateUserFullInfo {
	readonly "@type": "updateUserFullInfo"
	readonly user_id: number
	readonly user_full_info: TLUserFullInfo
}
export interface TLUpdateBasicGroupFullInfo {
	readonly "@type": "updateBasicGroupFullInfo"
	readonly basic_group_id: number
	readonly basic_group_full_info: TLBasicGroupFullInfo
}
export interface TLUpdateSupergroupFullInfo {
	readonly "@type": "updateSupergroupFullInfo"
	readonly supergroup_id: number
	readonly supergroup_full_info: TLSupergroupFullInfo
}
export interface TLUpdateServiceNotification {
	readonly "@type": "updateServiceNotification"
	readonly type: string
	readonly content: TLMessageContent
}
export interface TLUpdateFile {
	readonly "@type": "updateFile"
	readonly file: TLFile
}
export interface TLUpdateFileGenerationStart {
	readonly "@type": "updateFileGenerationStart"
	readonly generation_id: string
	readonly original_path: string
	readonly destination_path: string
	readonly conversion: string
}
export interface TLUpdateFileGenerationStop {
	readonly "@type": "updateFileGenerationStop"
	readonly generation_id: string
}
export interface TLUpdateCall {
	readonly "@type": "updateCall"
	readonly call: TLCall
}
export interface TLUpdateNewCallSignalingData {
	readonly "@type": "updateNewCallSignalingData"
	readonly call_id: number
	readonly data: Uint8Array
}
export interface TLUpdateUserPrivacySettingRules {
	readonly "@type": "updateUserPrivacySettingRules"
	readonly setting: TLUserPrivacySetting
	readonly rules: TLUserPrivacySettingRules
}
export interface TLUpdateUnreadMessageCount {
	readonly "@type": "updateUnreadMessageCount"
	readonly chat_list: TLChatList
	readonly unread_count: number
	readonly unread_unmuted_count: number
}
export interface TLUpdateUnreadChatCount {
	readonly "@type": "updateUnreadChatCount"
	readonly chat_list: TLChatList
	readonly total_count: number
	readonly unread_count: number
	readonly unread_unmuted_count: number
	readonly marked_as_unread_count: number
	readonly marked_as_unread_unmuted_count: number
}
export interface TLUpdateOption {
	readonly "@type": "updateOption"
	readonly name: string
	readonly value: TLOptionValue
}
export interface TLUpdateStickerSet {
	readonly "@type": "updateStickerSet"
	readonly sticker_set: TLStickerSet
}
export interface TLUpdateInstalledStickerSets {
	readonly "@type": "updateInstalledStickerSets"
	readonly is_masks: boolean
	readonly sticker_set_ids: ReadonlyArray<string>
}
export interface TLUpdateTrendingStickerSets {
	readonly "@type": "updateTrendingStickerSets"
	readonly sticker_sets: TLStickerSets
}
export interface TLUpdateRecentStickers {
	readonly "@type": "updateRecentStickers"
	readonly is_attached: boolean
	readonly sticker_ids: ReadonlyArray<number>
}
export interface TLUpdateFavoriteStickers {
	readonly "@type": "updateFavoriteStickers"
	readonly sticker_ids: ReadonlyArray<number>
}
export interface TLUpdateSavedAnimations {
	readonly "@type": "updateSavedAnimations"
	readonly animation_ids: ReadonlyArray<number>
}
export interface TLUpdateSelectedBackground {
	readonly "@type": "updateSelectedBackground"
	readonly for_dark_theme: boolean
	readonly background: TLBackground
}
export interface TLUpdateLanguagePackStrings {
	readonly "@type": "updateLanguagePackStrings"
	readonly localization_target: string
	readonly language_pack_id: string
	readonly strings: ReadonlyArray<TLLanguagePackString>
}
export interface TLUpdateConnectionState {
	readonly "@type": "updateConnectionState"
	readonly state: TLConnectionState
}
export interface TLUpdateTermsOfService {
	readonly "@type": "updateTermsOfService"
	readonly terms_of_service_id: string
	readonly terms_of_service: TLTermsOfService
}
export interface TLUpdateUsersNearby {
	readonly "@type": "updateUsersNearby"
	readonly users_nearby: ReadonlyArray<TLChatNearby>
}
export interface TLUpdateDiceEmojis {
	readonly "@type": "updateDiceEmojis"
	readonly emojis: ReadonlyArray<string>
}
export interface TLUpdateAnimationSearchParameters {
	readonly "@type": "updateAnimationSearchParameters"
	readonly provider: string
	readonly emojis: ReadonlyArray<string>
}
export interface TLUpdateSuggestedActions {
	readonly "@type": "updateSuggestedActions"
	readonly added_actions: ReadonlyArray<TLSuggestedAction>
	readonly removed_actions: ReadonlyArray<TLSuggestedAction>
}
export interface TLUpdateNewInlineQuery {
	readonly "@type": "updateNewInlineQuery"
	readonly id: string
	readonly sender_user_id: number
	readonly user_location: TLLocation
	readonly query: string
	readonly offset: string
}
export interface TLUpdateNewChosenInlineResult {
	readonly "@type": "updateNewChosenInlineResult"
	readonly sender_user_id: number
	readonly user_location: TLLocation
	readonly query: string
	readonly result_id: string
	readonly inline_message_id: string
}
export interface TLUpdateNewCallbackQuery {
	readonly "@type": "updateNewCallbackQuery"
	readonly id: string
	readonly sender_user_id: number
	readonly chat_id: number
	readonly message_id: number
	readonly chat_instance: string
	readonly payload: TLCallbackQueryPayload
}
export interface TLUpdateNewInlineCallbackQuery {
	readonly "@type": "updateNewInlineCallbackQuery"
	readonly id: string
	readonly sender_user_id: number
	readonly inline_message_id: string
	readonly chat_instance: string
	readonly payload: TLCallbackQueryPayload
}
export interface TLUpdateNewShippingQuery {
	readonly "@type": "updateNewShippingQuery"
	readonly id: string
	readonly sender_user_id: number
	readonly invoice_payload: string
	readonly shipping_address: TLAddress
}
export interface TLUpdateNewPreCheckoutQuery {
	readonly "@type": "updateNewPreCheckoutQuery"
	readonly id: string
	readonly sender_user_id: number
	readonly currency: string
	readonly total_amount: number
	readonly invoice_payload: Uint8Array
	readonly shipping_option_id: string
	readonly order_info: TLOrderInfo
}
export interface TLUpdateNewCustomEvent {
	readonly "@type": "updateNewCustomEvent"
	readonly event: string
}
export interface TLUpdateNewCustomQuery {
	readonly "@type": "updateNewCustomQuery"
	readonly id: string
	readonly data: string
	readonly timeout: number
}
export interface TLUpdatePoll {
	readonly "@type": "updatePoll"
	readonly poll: TLPoll
}
export interface TLUpdatePollAnswer {
	readonly "@type": "updatePollAnswer"
	readonly poll_id: string
	readonly user_id: number
	readonly option_ids: ReadonlyArray<number>
}
export type TLUpdate = TLUpdateAuthorizationState | TLUpdateNewMessage | TLUpdateMessageSendAcknowledged | TLUpdateMessageSendSucceeded | TLUpdateMessageSendFailed | TLUpdateMessageContent | TLUpdateMessageEdited | TLUpdateMessageIsPinned | TLUpdateMessageInteractionInfo | TLUpdateMessageContentOpened | TLUpdateMessageMentionRead | TLUpdateMessageLiveLocationViewed | TLUpdateNewChat | TLUpdateChatTitle | TLUpdateChatPhoto | TLUpdateChatPermissions | TLUpdateChatLastMessage | TLUpdateChatPosition | TLUpdateChatIsMarkedAsUnread | TLUpdateChatIsBlocked | TLUpdateChatHasScheduledMessages | TLUpdateChatDefaultDisableNotification | TLUpdateChatReadInbox | TLUpdateChatReadOutbox | TLUpdateChatUnreadMentionCount | TLUpdateChatNotificationSettings | TLUpdateScopeNotificationSettings | TLUpdateChatActionBar | TLUpdateChatReplyMarkup | TLUpdateChatDraftMessage | TLUpdateChatFilters | TLUpdateChatOnlineMemberCount | TLUpdateNotification | TLUpdateNotificationGroup | TLUpdateActiveNotifications | TLUpdateHavePendingNotifications | TLUpdateDeleteMessages | TLUpdateUserChatAction | TLUpdateUserStatus | TLUpdateUser | TLUpdateBasicGroup | TLUpdateSupergroup | TLUpdateSecretChat | TLUpdateUserFullInfo | TLUpdateBasicGroupFullInfo | TLUpdateSupergroupFullInfo | TLUpdateServiceNotification | TLUpdateFile | TLUpdateFileGenerationStart | TLUpdateFileGenerationStop | TLUpdateCall | TLUpdateNewCallSignalingData | TLUpdateUserPrivacySettingRules | TLUpdateUnreadMessageCount | TLUpdateUnreadChatCount | TLUpdateOption | TLUpdateStickerSet | TLUpdateInstalledStickerSets | TLUpdateTrendingStickerSets | TLUpdateRecentStickers | TLUpdateFavoriteStickers | TLUpdateSavedAnimations | TLUpdateSelectedBackground | TLUpdateLanguagePackStrings | TLUpdateConnectionState | TLUpdateTermsOfService | TLUpdateUsersNearby | TLUpdateDiceEmojis | TLUpdateAnimationSearchParameters | TLUpdateSuggestedActions | TLUpdateNewInlineQuery | TLUpdateNewChosenInlineResult | TLUpdateNewCallbackQuery | TLUpdateNewInlineCallbackQuery | TLUpdateNewShippingQuery | TLUpdateNewPreCheckoutQuery | TLUpdateNewCustomEvent | TLUpdateNewCustomQuery | TLUpdatePoll | TLUpdatePollAnswer
export interface TLUpdates {
	readonly "@type": "updates"
	readonly updates: ReadonlyArray<TLUpdate>
}
export interface TLLogStreamDefault {
	readonly "@type": "logStreamDefault"
}
export interface TLLogStreamFile {
	readonly "@type": "logStreamFile"
	readonly path: string
	readonly max_file_size: number
	readonly redirect_stderr: boolean
}
export interface TLLogStreamEmpty {
	readonly "@type": "logStreamEmpty"
}
export type TLLogStream = TLLogStreamDefault | TLLogStreamFile | TLLogStreamEmpty
export interface TLLogVerbosityLevel {
	readonly "@type": "logVerbosityLevel"
	readonly verbosity_level: number
}
export interface TLLogTags {
	readonly "@type": "logTags"
	readonly tags: ReadonlyArray<string>
}
export interface TLTestInt {
	readonly "@type": "testInt"
	readonly value: number
}
export interface TLTestString {
	readonly "@type": "testString"
	readonly value: string
}
export interface TLTestBytes {
	readonly "@type": "testBytes"
	readonly value: Uint8Array
}
export interface TLTestVectorInt {
	readonly "@type": "testVectorInt"
	readonly value: ReadonlyArray<number>
}
export interface TLTestVectorIntObject {
	readonly "@type": "testVectorIntObject"
	readonly value: ReadonlyArray<TLTestInt>
}
export interface TLTestVectorString {
	readonly "@type": "testVectorString"
	readonly value: ReadonlyArray<string>
}
export interface TLTestVectorStringObject {
	readonly "@type": "testVectorStringObject"
	readonly value: ReadonlyArray<TLTestString>
}
export class TD {
	public readonly client: TdClient
	public constructor(client: TdClient) {
		this.client = client
	}

	public async getAuthorizationState(): Promise<TLAuthorizationState> {
		return (await this.client.send({
			"@type": "getAuthorizationState",
		} as any as TdObject)) as any as TLAuthorizationState
	}

	public async setTdlibParameters(parameters: TLTdlibParameters): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setTdlibParameters",
			parameters: parameters,
		} as any as TdObject)) as any as TLOk
	}

	public async checkDatabaseEncryptionKey(encryption_key: Uint8Array): Promise<TLOk> {
		return (await this.client.send({
			"@type": "checkDatabaseEncryptionKey",
			encryption_key: encryption_key,
		} as any as TdObject)) as any as TLOk
	}

	public async setAuthenticationPhoneNumber(phone_number: string, settings: TLPhoneNumberAuthenticationSettings): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setAuthenticationPhoneNumber",
			phone_number: phone_number,
			settings: settings,
		} as any as TdObject)) as any as TLOk
	}

	public async resendAuthenticationCode(): Promise<TLOk> {
		return (await this.client.send({
			"@type": "resendAuthenticationCode",
		} as any as TdObject)) as any as TLOk
	}

	public async checkAuthenticationCode(code: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "checkAuthenticationCode",
			code: code,
		} as any as TdObject)) as any as TLOk
	}

	public async requestQrCodeAuthentication(other_user_ids: ReadonlyArray<number>): Promise<TLOk> {
		return (await this.client.send({
			"@type": "requestQrCodeAuthentication",
			other_user_ids: other_user_ids,
		} as any as TdObject)) as any as TLOk
	}

	public async registerUser(first_name: string, last_name: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "registerUser",
			first_name: first_name,
			last_name: last_name,
		} as any as TdObject)) as any as TLOk
	}

	public async checkAuthenticationPassword(password: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "checkAuthenticationPassword",
			password: password,
		} as any as TdObject)) as any as TLOk
	}

	public async requestAuthenticationPasswordRecovery(): Promise<TLOk> {
		return (await this.client.send({
			"@type": "requestAuthenticationPasswordRecovery",
		} as any as TdObject)) as any as TLOk
	}

	public async recoverAuthenticationPassword(recovery_code: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "recoverAuthenticationPassword",
			recovery_code: recovery_code,
		} as any as TdObject)) as any as TLOk
	}

	public async checkAuthenticationBotToken(token: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "checkAuthenticationBotToken",
			token: token,
		} as any as TdObject)) as any as TLOk
	}

	public async logOut(): Promise<TLOk> {
		return (await this.client.send({
			"@type": "logOut",
		} as any as TdObject)) as any as TLOk
	}

	public async close(): Promise<TLOk> {
		return (await this.client.send({
			"@type": "close",
		} as any as TdObject)) as any as TLOk
	}

	public async destroy(): Promise<TLOk> {
		return (await this.client.send({
			"@type": "destroy",
		} as any as TdObject)) as any as TLOk
	}

	public async confirmQrCodeAuthentication(link: string): Promise<TLSession> {
		return (await this.client.send({
			"@type": "confirmQrCodeAuthentication",
			link: link,
		} as any as TdObject)) as any as TLSession
	}

	public async getCurrentState(): Promise<TLUpdates> {
		return (await this.client.send({
			"@type": "getCurrentState",
		} as any as TdObject)) as any as TLUpdates
	}

	public async setDatabaseEncryptionKey(new_encryption_key: Uint8Array): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setDatabaseEncryptionKey",
			new_encryption_key: new_encryption_key,
		} as any as TdObject)) as any as TLOk
	}

	public async getPasswordState(): Promise<TLPasswordState> {
		return (await this.client.send({
			"@type": "getPasswordState",
		} as any as TdObject)) as any as TLPasswordState
	}

	public async setPassword(old_password: string, new_password: string, new_hint: string, set_recovery_email_address: boolean, new_recovery_email_address: string): Promise<TLPasswordState> {
		return (await this.client.send({
			"@type": "setPassword",
			old_password: old_password,
			new_password: new_password,
			new_hint: new_hint,
			set_recovery_email_address: set_recovery_email_address,
			new_recovery_email_address: new_recovery_email_address,
		} as any as TdObject)) as any as TLPasswordState
	}

	public async getRecoveryEmailAddress(password: string): Promise<TLRecoveryEmailAddress> {
		return (await this.client.send({
			"@type": "getRecoveryEmailAddress",
			password: password,
		} as any as TdObject)) as any as TLRecoveryEmailAddress
	}

	public async setRecoveryEmailAddress(password: string, new_recovery_email_address: string): Promise<TLPasswordState> {
		return (await this.client.send({
			"@type": "setRecoveryEmailAddress",
			password: password,
			new_recovery_email_address: new_recovery_email_address,
		} as any as TdObject)) as any as TLPasswordState
	}

	public async checkRecoveryEmailAddressCode(code: string): Promise<TLPasswordState> {
		return (await this.client.send({
			"@type": "checkRecoveryEmailAddressCode",
			code: code,
		} as any as TdObject)) as any as TLPasswordState
	}

	public async resendRecoveryEmailAddressCode(): Promise<TLPasswordState> {
		return (await this.client.send({
			"@type": "resendRecoveryEmailAddressCode",
		} as any as TdObject)) as any as TLPasswordState
	}

	public async requestPasswordRecovery(): Promise<TLEmailAddressAuthenticationCodeInfo> {
		return (await this.client.send({
			"@type": "requestPasswordRecovery",
		} as any as TdObject)) as any as TLEmailAddressAuthenticationCodeInfo
	}

	public async recoverPassword(recovery_code: string): Promise<TLPasswordState> {
		return (await this.client.send({
			"@type": "recoverPassword",
			recovery_code: recovery_code,
		} as any as TdObject)) as any as TLPasswordState
	}

	public async createTemporaryPassword(password: string, valid_for: number): Promise<TLTemporaryPasswordState> {
		return (await this.client.send({
			"@type": "createTemporaryPassword",
			password: password,
			valid_for: valid_for,
		} as any as TdObject)) as any as TLTemporaryPasswordState
	}

	public async getTemporaryPasswordState(): Promise<TLTemporaryPasswordState> {
		return (await this.client.send({
			"@type": "getTemporaryPasswordState",
		} as any as TdObject)) as any as TLTemporaryPasswordState
	}

	public async getMe(): Promise<TLUser> {
		return (await this.client.send({
			"@type": "getMe",
		} as any as TdObject)) as any as TLUser
	}

	public async getUser(user_id: number): Promise<TLUser> {
		return (await this.client.send({
			"@type": "getUser",
			user_id: user_id,
		} as any as TdObject)) as any as TLUser
	}

	public async getUserFullInfo(user_id: number): Promise<TLUserFullInfo> {
		return (await this.client.send({
			"@type": "getUserFullInfo",
			user_id: user_id,
		} as any as TdObject)) as any as TLUserFullInfo
	}

	public async getBasicGroup(basic_group_id: number): Promise<TLBasicGroup> {
		return (await this.client.send({
			"@type": "getBasicGroup",
			basic_group_id: basic_group_id,
		} as any as TdObject)) as any as TLBasicGroup
	}

	public async getBasicGroupFullInfo(basic_group_id: number): Promise<TLBasicGroupFullInfo> {
		return (await this.client.send({
			"@type": "getBasicGroupFullInfo",
			basic_group_id: basic_group_id,
		} as any as TdObject)) as any as TLBasicGroupFullInfo
	}

	public async getSupergroup(supergroup_id: number): Promise<TLSupergroup> {
		return (await this.client.send({
			"@type": "getSupergroup",
			supergroup_id: supergroup_id,
		} as any as TdObject)) as any as TLSupergroup
	}

	public async getSupergroupFullInfo(supergroup_id: number): Promise<TLSupergroupFullInfo> {
		return (await this.client.send({
			"@type": "getSupergroupFullInfo",
			supergroup_id: supergroup_id,
		} as any as TdObject)) as any as TLSupergroupFullInfo
	}

	public async getSecretChat(secret_chat_id: number): Promise<TLSecretChat> {
		return (await this.client.send({
			"@type": "getSecretChat",
			secret_chat_id: secret_chat_id,
		} as any as TdObject)) as any as TLSecretChat
	}

	public async getChat(chat_id: number): Promise<TLChat> {
		return (await this.client.send({
			"@type": "getChat",
			chat_id: chat_id,
		} as any as TdObject)) as any as TLChat
	}

	public async getMessage(chat_id: number, message_id: number): Promise<TLMessage> {
		return (await this.client.send({
			"@type": "getMessage",
			chat_id: chat_id,
			message_id: message_id,
		} as any as TdObject)) as any as TLMessage
	}

	public async getMessageLocally(chat_id: number, message_id: number): Promise<TLMessage> {
		return (await this.client.send({
			"@type": "getMessageLocally",
			chat_id: chat_id,
			message_id: message_id,
		} as any as TdObject)) as any as TLMessage
	}

	public async getRepliedMessage(chat_id: number, message_id: number): Promise<TLMessage> {
		return (await this.client.send({
			"@type": "getRepliedMessage",
			chat_id: chat_id,
			message_id: message_id,
		} as any as TdObject)) as any as TLMessage
	}

	public async getChatPinnedMessage(chat_id: number): Promise<TLMessage> {
		return (await this.client.send({
			"@type": "getChatPinnedMessage",
			chat_id: chat_id,
		} as any as TdObject)) as any as TLMessage
	}

	public async getCallbackQueryMessage(chat_id: number, message_id: number, callback_query_id: string): Promise<TLMessage> {
		return (await this.client.send({
			"@type": "getCallbackQueryMessage",
			chat_id: chat_id,
			message_id: message_id,
			callback_query_id: callback_query_id,
		} as any as TdObject)) as any as TLMessage
	}

	public async getMessages(chat_id: number, message_ids: ReadonlyArray<number>): Promise<TLMessages> {
		return (await this.client.send({
			"@type": "getMessages",
			chat_id: chat_id,
			message_ids: message_ids,
		} as any as TdObject)) as any as TLMessages
	}

	public async getMessageThread(chat_id: number, message_id: number): Promise<TLMessageThreadInfo> {
		return (await this.client.send({
			"@type": "getMessageThread",
			chat_id: chat_id,
			message_id: message_id,
		} as any as TdObject)) as any as TLMessageThreadInfo
	}

	public async getFile(file_id: number): Promise<TLFile> {
		return (await this.client.send({
			"@type": "getFile",
			file_id: file_id,
		} as any as TdObject)) as any as TLFile
	}

	public async getRemoteFile(remote_file_id: string, file_type: TLFileType): Promise<TLFile> {
		return (await this.client.send({
			"@type": "getRemoteFile",
			remote_file_id: remote_file_id,
			file_type: file_type,
		} as any as TdObject)) as any as TLFile
	}

	public async getChats(chat_list: TLChatList, offset_order: string, offset_chat_id: number, limit: number): Promise<TLChats> {
		return (await this.client.send({
			"@type": "getChats",
			chat_list: chat_list,
			offset_order: offset_order,
			offset_chat_id: offset_chat_id,
			limit: limit,
		} as any as TdObject)) as any as TLChats
	}

	public async searchPublicChat(username: string): Promise<TLChat> {
		return (await this.client.send({
			"@type": "searchPublicChat",
			username: username,
		} as any as TdObject)) as any as TLChat
	}

	public async searchPublicChats(query: string): Promise<TLChats> {
		return (await this.client.send({
			"@type": "searchPublicChats",
			query: query,
		} as any as TdObject)) as any as TLChats
	}

	public async searchChats(query: string, limit: number): Promise<TLChats> {
		return (await this.client.send({
			"@type": "searchChats",
			query: query,
			limit: limit,
		} as any as TdObject)) as any as TLChats
	}

	public async searchChatsOnServer(query: string, limit: number): Promise<TLChats> {
		return (await this.client.send({
			"@type": "searchChatsOnServer",
			query: query,
			limit: limit,
		} as any as TdObject)) as any as TLChats
	}

	public async searchChatsNearby(location: TLLocation): Promise<TLChatsNearby> {
		return (await this.client.send({
			"@type": "searchChatsNearby",
			location: location,
		} as any as TdObject)) as any as TLChatsNearby
	}

	public async getTopChats(category: TLTopChatCategory, limit: number): Promise<TLChats> {
		return (await this.client.send({
			"@type": "getTopChats",
			category: category,
			limit: limit,
		} as any as TdObject)) as any as TLChats
	}

	public async removeTopChat(category: TLTopChatCategory, chat_id: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "removeTopChat",
			category: category,
			chat_id: chat_id,
		} as any as TdObject)) as any as TLOk
	}

	public async addRecentlyFoundChat(chat_id: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "addRecentlyFoundChat",
			chat_id: chat_id,
		} as any as TdObject)) as any as TLOk
	}

	public async removeRecentlyFoundChat(chat_id: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "removeRecentlyFoundChat",
			chat_id: chat_id,
		} as any as TdObject)) as any as TLOk
	}

	public async clearRecentlyFoundChats(): Promise<TLOk> {
		return (await this.client.send({
			"@type": "clearRecentlyFoundChats",
		} as any as TdObject)) as any as TLOk
	}

	public async checkChatUsername(chat_id: number, username: string): Promise<TLCheckChatUsernameResult> {
		return (await this.client.send({
			"@type": "checkChatUsername",
			chat_id: chat_id,
			username: username,
		} as any as TdObject)) as any as TLCheckChatUsernameResult
	}

	public async getCreatedPublicChats(type: TLPublicChatType): Promise<TLChats> {
		return (await this.client.send({
			"@type": "getCreatedPublicChats",
			type: type,
		} as any as TdObject)) as any as TLChats
	}

	public async checkCreatedPublicChatsLimit(type: TLPublicChatType): Promise<TLOk> {
		return (await this.client.send({
			"@type": "checkCreatedPublicChatsLimit",
			type: type,
		} as any as TdObject)) as any as TLOk
	}

	public async getSuitableDiscussionChats(): Promise<TLChats> {
		return (await this.client.send({
			"@type": "getSuitableDiscussionChats",
		} as any as TdObject)) as any as TLChats
	}

	public async getInactiveSupergroupChats(): Promise<TLChats> {
		return (await this.client.send({
			"@type": "getInactiveSupergroupChats",
		} as any as TdObject)) as any as TLChats
	}

	public async getGroupsInCommon(user_id: number, offset_chat_id: number, limit: number): Promise<TLChats> {
		return (await this.client.send({
			"@type": "getGroupsInCommon",
			user_id: user_id,
			offset_chat_id: offset_chat_id,
			limit: limit,
		} as any as TdObject)) as any as TLChats
	}

	public async getChatHistory(chat_id: number, from_message_id: number, offset: number, limit: number, only_local: boolean): Promise<TLMessages> {
		return (await this.client.send({
			"@type": "getChatHistory",
			chat_id: chat_id,
			from_message_id: from_message_id,
			offset: offset,
			limit: limit,
			only_local: only_local,
		} as any as TdObject)) as any as TLMessages
	}

	public async getMessageThreadHistory(chat_id: number, message_id: number, from_message_id: number, offset: number, limit: number): Promise<TLMessages> {
		return (await this.client.send({
			"@type": "getMessageThreadHistory",
			chat_id: chat_id,
			message_id: message_id,
			from_message_id: from_message_id,
			offset: offset,
			limit: limit,
		} as any as TdObject)) as any as TLMessages
	}

	public async deleteChatHistory(chat_id: number, remove_from_chat_list: boolean, revoke: boolean): Promise<TLOk> {
		return (await this.client.send({
			"@type": "deleteChatHistory",
			chat_id: chat_id,
			remove_from_chat_list: remove_from_chat_list,
			revoke: revoke,
		} as any as TdObject)) as any as TLOk
	}

	public async searchChatMessages(chat_id: number, query: string, sender: TLMessageSender, from_message_id: number, offset: number, limit: number, filter: TLSearchMessagesFilter, message_thread_id: number): Promise<TLMessages> {
		return (await this.client.send({
			"@type": "searchChatMessages",
			chat_id: chat_id,
			query: query,
			sender: sender,
			from_message_id: from_message_id,
			offset: offset,
			limit: limit,
			filter: filter,
			message_thread_id: message_thread_id,
		} as any as TdObject)) as any as TLMessages
	}

	public async searchMessages(chat_list: TLChatList, query: string, offset_date: number, offset_chat_id: number, offset_message_id: number, limit: number, filter: TLSearchMessagesFilter, min_date: number, max_date: number): Promise<TLMessages> {
		return (await this.client.send({
			"@type": "searchMessages",
			chat_list: chat_list,
			query: query,
			offset_date: offset_date,
			offset_chat_id: offset_chat_id,
			offset_message_id: offset_message_id,
			limit: limit,
			filter: filter,
			min_date: min_date,
			max_date: max_date,
		} as any as TdObject)) as any as TLMessages
	}

	public async searchSecretMessages(chat_id: number, query: string, offset: string, limit: number, filter: TLSearchMessagesFilter): Promise<TLFoundMessages> {
		return (await this.client.send({
			"@type": "searchSecretMessages",
			chat_id: chat_id,
			query: query,
			offset: offset,
			limit: limit,
			filter: filter,
		} as any as TdObject)) as any as TLFoundMessages
	}

	public async searchCallMessages(from_message_id: number, limit: number, only_missed: boolean): Promise<TLMessages> {
		return (await this.client.send({
			"@type": "searchCallMessages",
			from_message_id: from_message_id,
			limit: limit,
			only_missed: only_missed,
		} as any as TdObject)) as any as TLMessages
	}

	public async searchChatRecentLocationMessages(chat_id: number, limit: number): Promise<TLMessages> {
		return (await this.client.send({
			"@type": "searchChatRecentLocationMessages",
			chat_id: chat_id,
			limit: limit,
		} as any as TdObject)) as any as TLMessages
	}

	public async getActiveLiveLocationMessages(): Promise<TLMessages> {
		return (await this.client.send({
			"@type": "getActiveLiveLocationMessages",
		} as any as TdObject)) as any as TLMessages
	}

	public async getChatMessageByDate(chat_id: number, date: number): Promise<TLMessage> {
		return (await this.client.send({
			"@type": "getChatMessageByDate",
			chat_id: chat_id,
			date: date,
		} as any as TdObject)) as any as TLMessage
	}

	public async getChatMessageCount(chat_id: number, filter: TLSearchMessagesFilter, return_local: boolean): Promise<TLCount> {
		return (await this.client.send({
			"@type": "getChatMessageCount",
			chat_id: chat_id,
			filter: filter,
			return_local: return_local,
		} as any as TdObject)) as any as TLCount
	}

	public async getChatScheduledMessages(chat_id: number): Promise<TLMessages> {
		return (await this.client.send({
			"@type": "getChatScheduledMessages",
			chat_id: chat_id,
		} as any as TdObject)) as any as TLMessages
	}

	public async getMessagePublicForwards(chat_id: number, message_id: number, offset: string, limit: number): Promise<TLFoundMessages> {
		return (await this.client.send({
			"@type": "getMessagePublicForwards",
			chat_id: chat_id,
			message_id: message_id,
			offset: offset,
			limit: limit,
		} as any as TdObject)) as any as TLFoundMessages
	}

	public async removeNotification(notification_group_id: number, notification_id: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "removeNotification",
			notification_group_id: notification_group_id,
			notification_id: notification_id,
		} as any as TdObject)) as any as TLOk
	}

	public async removeNotificationGroup(notification_group_id: number, max_notification_id: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "removeNotificationGroup",
			notification_group_id: notification_group_id,
			max_notification_id: max_notification_id,
		} as any as TdObject)) as any as TLOk
	}

	public async getMessageLink(chat_id: number, message_id: number, for_album: boolean, for_comment: boolean): Promise<TLMessageLink> {
		return (await this.client.send({
			"@type": "getMessageLink",
			chat_id: chat_id,
			message_id: message_id,
			for_album: for_album,
			for_comment: for_comment,
		} as any as TdObject)) as any as TLMessageLink
	}

	public async getMessageEmbeddingCode(chat_id: number, message_id: number, for_album: boolean): Promise<TLText> {
		return (await this.client.send({
			"@type": "getMessageEmbeddingCode",
			chat_id: chat_id,
			message_id: message_id,
			for_album: for_album,
		} as any as TdObject)) as any as TLText
	}

	public async getMessageLinkInfo(url: string): Promise<TLMessageLinkInfo> {
		return (await this.client.send({
			"@type": "getMessageLinkInfo",
			url: url,
		} as any as TdObject)) as any as TLMessageLinkInfo
	}

	public async sendMessage(chat_id: number, message_thread_id: number, reply_to_message_id: number, options: TLMessageSendOptions, reply_markup: TLReplyMarkup, input_message_content: TLInputMessageContent): Promise<TLMessage> {
		return (await this.client.send({
			"@type": "sendMessage",
			chat_id: chat_id,
			message_thread_id: message_thread_id,
			reply_to_message_id: reply_to_message_id,
			options: options,
			reply_markup: reply_markup,
			input_message_content: input_message_content,
		} as any as TdObject)) as any as TLMessage
	}

	public async sendMessageAlbum(chat_id: number, message_thread_id: number, reply_to_message_id: number, options: TLMessageSendOptions, input_message_contents: ReadonlyArray<TLInputMessageContent>): Promise<TLMessages> {
		return (await this.client.send({
			"@type": "sendMessageAlbum",
			chat_id: chat_id,
			message_thread_id: message_thread_id,
			reply_to_message_id: reply_to_message_id,
			options: options,
			input_message_contents: input_message_contents,
		} as any as TdObject)) as any as TLMessages
	}

	public async sendBotStartMessage(bot_user_id: number, chat_id: number, parameter: string): Promise<TLMessage> {
		return (await this.client.send({
			"@type": "sendBotStartMessage",
			bot_user_id: bot_user_id,
			chat_id: chat_id,
			parameter: parameter,
		} as any as TdObject)) as any as TLMessage
	}

	public async sendInlineQueryResultMessage(chat_id: number, message_thread_id: number, reply_to_message_id: number, options: TLMessageSendOptions, query_id: string, result_id: string, hide_via_bot: boolean): Promise<TLMessage> {
		return (await this.client.send({
			"@type": "sendInlineQueryResultMessage",
			chat_id: chat_id,
			message_thread_id: message_thread_id,
			reply_to_message_id: reply_to_message_id,
			options: options,
			query_id: query_id,
			result_id: result_id,
			hide_via_bot: hide_via_bot,
		} as any as TdObject)) as any as TLMessage
	}

	public async forwardMessages(chat_id: number, from_chat_id: number, message_ids: ReadonlyArray<number>, options: TLMessageSendOptions, send_copy: boolean, remove_caption: boolean): Promise<TLMessages> {
		return (await this.client.send({
			"@type": "forwardMessages",
			chat_id: chat_id,
			from_chat_id: from_chat_id,
			message_ids: message_ids,
			options: options,
			send_copy: send_copy,
			remove_caption: remove_caption,
		} as any as TdObject)) as any as TLMessages
	}

	public async resendMessages(chat_id: number, message_ids: ReadonlyArray<number>): Promise<TLMessages> {
		return (await this.client.send({
			"@type": "resendMessages",
			chat_id: chat_id,
			message_ids: message_ids,
		} as any as TdObject)) as any as TLMessages
	}

	public async sendChatSetTtlMessage(chat_id: number, ttl: number): Promise<TLMessage> {
		return (await this.client.send({
			"@type": "sendChatSetTtlMessage",
			chat_id: chat_id,
			ttl: ttl,
		} as any as TdObject)) as any as TLMessage
	}

	public async sendChatScreenshotTakenNotification(chat_id: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "sendChatScreenshotTakenNotification",
			chat_id: chat_id,
		} as any as TdObject)) as any as TLOk
	}

	public async addLocalMessage(chat_id: number, sender: TLMessageSender, reply_to_message_id: number, disable_notification: boolean, input_message_content: TLInputMessageContent): Promise<TLMessage> {
		return (await this.client.send({
			"@type": "addLocalMessage",
			chat_id: chat_id,
			sender: sender,
			reply_to_message_id: reply_to_message_id,
			disable_notification: disable_notification,
			input_message_content: input_message_content,
		} as any as TdObject)) as any as TLMessage
	}

	public async deleteMessages(chat_id: number, message_ids: ReadonlyArray<number>, revoke: boolean): Promise<TLOk> {
		return (await this.client.send({
			"@type": "deleteMessages",
			chat_id: chat_id,
			message_ids: message_ids,
			revoke: revoke,
		} as any as TdObject)) as any as TLOk
	}

	public async deleteChatMessagesFromUser(chat_id: number, user_id: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "deleteChatMessagesFromUser",
			chat_id: chat_id,
			user_id: user_id,
		} as any as TdObject)) as any as TLOk
	}

	public async editMessageText(chat_id: number, message_id: number, reply_markup: TLReplyMarkup, input_message_content: TLInputMessageContent): Promise<TLMessage> {
		return (await this.client.send({
			"@type": "editMessageText",
			chat_id: chat_id,
			message_id: message_id,
			reply_markup: reply_markup,
			input_message_content: input_message_content,
		} as any as TdObject)) as any as TLMessage
	}

	public async editMessageLiveLocation(chat_id: number, message_id: number, reply_markup: TLReplyMarkup, location: TLLocation, heading: number, proximity_alert_radius: number): Promise<TLMessage> {
		return (await this.client.send({
			"@type": "editMessageLiveLocation",
			chat_id: chat_id,
			message_id: message_id,
			reply_markup: reply_markup,
			location: location,
			heading: heading,
			proximity_alert_radius: proximity_alert_radius,
		} as any as TdObject)) as any as TLMessage
	}

	public async editMessageMedia(chat_id: number, message_id: number, reply_markup: TLReplyMarkup, input_message_content: TLInputMessageContent): Promise<TLMessage> {
		return (await this.client.send({
			"@type": "editMessageMedia",
			chat_id: chat_id,
			message_id: message_id,
			reply_markup: reply_markup,
			input_message_content: input_message_content,
		} as any as TdObject)) as any as TLMessage
	}

	public async editMessageCaption(chat_id: number, message_id: number, reply_markup: TLReplyMarkup, caption: TLFormattedText): Promise<TLMessage> {
		return (await this.client.send({
			"@type": "editMessageCaption",
			chat_id: chat_id,
			message_id: message_id,
			reply_markup: reply_markup,
			caption: caption,
		} as any as TdObject)) as any as TLMessage
	}

	public async editMessageReplyMarkup(chat_id: number, message_id: number, reply_markup: TLReplyMarkup): Promise<TLMessage> {
		return (await this.client.send({
			"@type": "editMessageReplyMarkup",
			chat_id: chat_id,
			message_id: message_id,
			reply_markup: reply_markup,
		} as any as TdObject)) as any as TLMessage
	}

	public async editInlineMessageText(inline_message_id: string, reply_markup: TLReplyMarkup, input_message_content: TLInputMessageContent): Promise<TLOk> {
		return (await this.client.send({
			"@type": "editInlineMessageText",
			inline_message_id: inline_message_id,
			reply_markup: reply_markup,
			input_message_content: input_message_content,
		} as any as TdObject)) as any as TLOk
	}

	public async editInlineMessageLiveLocation(inline_message_id: string, reply_markup: TLReplyMarkup, location: TLLocation, heading: number, proximity_alert_radius: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "editInlineMessageLiveLocation",
			inline_message_id: inline_message_id,
			reply_markup: reply_markup,
			location: location,
			heading: heading,
			proximity_alert_radius: proximity_alert_radius,
		} as any as TdObject)) as any as TLOk
	}

	public async editInlineMessageMedia(inline_message_id: string, reply_markup: TLReplyMarkup, input_message_content: TLInputMessageContent): Promise<TLOk> {
		return (await this.client.send({
			"@type": "editInlineMessageMedia",
			inline_message_id: inline_message_id,
			reply_markup: reply_markup,
			input_message_content: input_message_content,
		} as any as TdObject)) as any as TLOk
	}

	public async editInlineMessageCaption(inline_message_id: string, reply_markup: TLReplyMarkup, caption: TLFormattedText): Promise<TLOk> {
		return (await this.client.send({
			"@type": "editInlineMessageCaption",
			inline_message_id: inline_message_id,
			reply_markup: reply_markup,
			caption: caption,
		} as any as TdObject)) as any as TLOk
	}

	public async editInlineMessageReplyMarkup(inline_message_id: string, reply_markup: TLReplyMarkup): Promise<TLOk> {
		return (await this.client.send({
			"@type": "editInlineMessageReplyMarkup",
			inline_message_id: inline_message_id,
			reply_markup: reply_markup,
		} as any as TdObject)) as any as TLOk
	}

	public async editMessageSchedulingState(chat_id: number, message_id: number, scheduling_state: TLMessageSchedulingState): Promise<TLOk> {
		return (await this.client.send({
			"@type": "editMessageSchedulingState",
			chat_id: chat_id,
			message_id: message_id,
			scheduling_state: scheduling_state,
		} as any as TdObject)) as any as TLOk
	}

	public async getTextEntities(text: string): Promise<TLTextEntities> {
		return (await this.client.send({
			"@type": "getTextEntities",
			text: text,
		} as any as TdObject)) as any as TLTextEntities
	}

	public async parseTextEntities(text: string, parse_mode: TLTextParseMode): Promise<TLFormattedText> {
		return (await this.client.send({
			"@type": "parseTextEntities",
			text: text,
			parse_mode: parse_mode,
		} as any as TdObject)) as any as TLFormattedText
	}

	public async parseMarkdown(text: TLFormattedText): Promise<TLFormattedText> {
		return (await this.client.send({
			"@type": "parseMarkdown",
			text: text,
		} as any as TdObject)) as any as TLFormattedText
	}

	public async getMarkdownText(text: TLFormattedText): Promise<TLFormattedText> {
		return (await this.client.send({
			"@type": "getMarkdownText",
			text: text,
		} as any as TdObject)) as any as TLFormattedText
	}

	public async getFileMimeType(file_name: string): Promise<TLText> {
		return (await this.client.send({
			"@type": "getFileMimeType",
			file_name: file_name,
		} as any as TdObject)) as any as TLText
	}

	public async getFileExtension(mime_type: string): Promise<TLText> {
		return (await this.client.send({
			"@type": "getFileExtension",
			mime_type: mime_type,
		} as any as TdObject)) as any as TLText
	}

	public async cleanFileName(file_name: string): Promise<TLText> {
		return (await this.client.send({
			"@type": "cleanFileName",
			file_name: file_name,
		} as any as TdObject)) as any as TLText
	}

	public async getLanguagePackString(language_pack_database_path: string, localization_target: string, language_pack_id: string, key: string): Promise<TLLanguagePackStringValue> {
		return (await this.client.send({
			"@type": "getLanguagePackString",
			language_pack_database_path: language_pack_database_path,
			localization_target: localization_target,
			language_pack_id: language_pack_id,
			key: key,
		} as any as TdObject)) as any as TLLanguagePackStringValue
	}

	public async getJsonValue(json: string): Promise<TLJsonValue> {
		return (await this.client.send({
			"@type": "getJsonValue",
			json: json,
		} as any as TdObject)) as any as TLJsonValue
	}

	public async getJsonString(json_value: TLJsonValue): Promise<TLText> {
		return (await this.client.send({
			"@type": "getJsonString",
			json_value: json_value,
		} as any as TdObject)) as any as TLText
	}

	public async setPollAnswer(chat_id: number, message_id: number, option_ids: ReadonlyArray<number>): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setPollAnswer",
			chat_id: chat_id,
			message_id: message_id,
			option_ids: option_ids,
		} as any as TdObject)) as any as TLOk
	}

	public async getPollVoters(chat_id: number, message_id: number, option_id: number, offset: number, limit: number): Promise<TLUsers> {
		return (await this.client.send({
			"@type": "getPollVoters",
			chat_id: chat_id,
			message_id: message_id,
			option_id: option_id,
			offset: offset,
			limit: limit,
		} as any as TdObject)) as any as TLUsers
	}

	public async stopPoll(chat_id: number, message_id: number, reply_markup: TLReplyMarkup): Promise<TLOk> {
		return (await this.client.send({
			"@type": "stopPoll",
			chat_id: chat_id,
			message_id: message_id,
			reply_markup: reply_markup,
		} as any as TdObject)) as any as TLOk
	}

	public async hideSuggestedAction(action: TLSuggestedAction): Promise<TLOk> {
		return (await this.client.send({
			"@type": "hideSuggestedAction",
			action: action,
		} as any as TdObject)) as any as TLOk
	}

	public async getLoginUrlInfo(chat_id: number, message_id: number, button_id: number): Promise<TLLoginUrlInfo> {
		return (await this.client.send({
			"@type": "getLoginUrlInfo",
			chat_id: chat_id,
			message_id: message_id,
			button_id: button_id,
		} as any as TdObject)) as any as TLLoginUrlInfo
	}

	public async getLoginUrl(chat_id: number, message_id: number, button_id: number, allow_write_access: boolean): Promise<TLHttpUrl> {
		return (await this.client.send({
			"@type": "getLoginUrl",
			chat_id: chat_id,
			message_id: message_id,
			button_id: button_id,
			allow_write_access: allow_write_access,
		} as any as TdObject)) as any as TLHttpUrl
	}

	public async getInlineQueryResults(bot_user_id: number, chat_id: number, user_location: TLLocation, query: string, offset: string): Promise<TLInlineQueryResults> {
		return (await this.client.send({
			"@type": "getInlineQueryResults",
			bot_user_id: bot_user_id,
			chat_id: chat_id,
			user_location: user_location,
			query: query,
			offset: offset,
		} as any as TdObject)) as any as TLInlineQueryResults
	}

	public async answerInlineQuery(inline_query_id: string, is_personal: boolean, results: ReadonlyArray<TLInputInlineQueryResult>, cache_time: number, next_offset: string, switch_pm_text: string, switch_pm_parameter: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "answerInlineQuery",
			inline_query_id: inline_query_id,
			is_personal: is_personal,
			results: results,
			cache_time: cache_time,
			next_offset: next_offset,
			switch_pm_text: switch_pm_text,
			switch_pm_parameter: switch_pm_parameter,
		} as any as TdObject)) as any as TLOk
	}

	public async getCallbackQueryAnswer(chat_id: number, message_id: number, payload: TLCallbackQueryPayload): Promise<TLCallbackQueryAnswer> {
		return (await this.client.send({
			"@type": "getCallbackQueryAnswer",
			chat_id: chat_id,
			message_id: message_id,
			payload: payload,
		} as any as TdObject)) as any as TLCallbackQueryAnswer
	}

	public async answerCallbackQuery(callback_query_id: string, text: string, show_alert: boolean, url: string, cache_time: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "answerCallbackQuery",
			callback_query_id: callback_query_id,
			text: text,
			show_alert: show_alert,
			url: url,
			cache_time: cache_time,
		} as any as TdObject)) as any as TLOk
	}

	public async answerShippingQuery(shipping_query_id: string, shipping_options: ReadonlyArray<TLShippingOption>, error_message: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "answerShippingQuery",
			shipping_query_id: shipping_query_id,
			shipping_options: shipping_options,
			error_message: error_message,
		} as any as TdObject)) as any as TLOk
	}

	public async answerPreCheckoutQuery(pre_checkout_query_id: string, error_message: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "answerPreCheckoutQuery",
			pre_checkout_query_id: pre_checkout_query_id,
			error_message: error_message,
		} as any as TdObject)) as any as TLOk
	}

	public async setGameScore(chat_id: number, message_id: number, edit_message: boolean, user_id: number, score: number, force: boolean): Promise<TLMessage> {
		return (await this.client.send({
			"@type": "setGameScore",
			chat_id: chat_id,
			message_id: message_id,
			edit_message: edit_message,
			user_id: user_id,
			score: score,
			force: force,
		} as any as TdObject)) as any as TLMessage
	}

	public async setInlineGameScore(inline_message_id: string, edit_message: boolean, user_id: number, score: number, force: boolean): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setInlineGameScore",
			inline_message_id: inline_message_id,
			edit_message: edit_message,
			user_id: user_id,
			score: score,
			force: force,
		} as any as TdObject)) as any as TLOk
	}

	public async getGameHighScores(chat_id: number, message_id: number, user_id: number): Promise<TLGameHighScores> {
		return (await this.client.send({
			"@type": "getGameHighScores",
			chat_id: chat_id,
			message_id: message_id,
			user_id: user_id,
		} as any as TdObject)) as any as TLGameHighScores
	}

	public async getInlineGameHighScores(inline_message_id: string, user_id: number): Promise<TLGameHighScores> {
		return (await this.client.send({
			"@type": "getInlineGameHighScores",
			inline_message_id: inline_message_id,
			user_id: user_id,
		} as any as TdObject)) as any as TLGameHighScores
	}

	public async deleteChatReplyMarkup(chat_id: number, message_id: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "deleteChatReplyMarkup",
			chat_id: chat_id,
			message_id: message_id,
		} as any as TdObject)) as any as TLOk
	}

	public async sendChatAction(chat_id: number, message_thread_id: number, action: TLChatAction): Promise<TLOk> {
		return (await this.client.send({
			"@type": "sendChatAction",
			chat_id: chat_id,
			message_thread_id: message_thread_id,
			action: action,
		} as any as TdObject)) as any as TLOk
	}

	public async openChat(chat_id: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "openChat",
			chat_id: chat_id,
		} as any as TdObject)) as any as TLOk
	}

	public async closeChat(chat_id: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "closeChat",
			chat_id: chat_id,
		} as any as TdObject)) as any as TLOk
	}

	public async viewMessages(chat_id: number, message_thread_id: number, message_ids: ReadonlyArray<number>, force_read: boolean): Promise<TLOk> {
		return (await this.client.send({
			"@type": "viewMessages",
			chat_id: chat_id,
			message_thread_id: message_thread_id,
			message_ids: message_ids,
			force_read: force_read,
		} as any as TdObject)) as any as TLOk
	}

	public async openMessageContent(chat_id: number, message_id: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "openMessageContent",
			chat_id: chat_id,
			message_id: message_id,
		} as any as TdObject)) as any as TLOk
	}

	public async readAllChatMentions(chat_id: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "readAllChatMentions",
			chat_id: chat_id,
		} as any as TdObject)) as any as TLOk
	}

	public async createPrivateChat(user_id: number, force: boolean): Promise<TLChat> {
		return (await this.client.send({
			"@type": "createPrivateChat",
			user_id: user_id,
			force: force,
		} as any as TdObject)) as any as TLChat
	}

	public async createBasicGroupChat(basic_group_id: number, force: boolean): Promise<TLChat> {
		return (await this.client.send({
			"@type": "createBasicGroupChat",
			basic_group_id: basic_group_id,
			force: force,
		} as any as TdObject)) as any as TLChat
	}

	public async createSupergroupChat(supergroup_id: number, force: boolean): Promise<TLChat> {
		return (await this.client.send({
			"@type": "createSupergroupChat",
			supergroup_id: supergroup_id,
			force: force,
		} as any as TdObject)) as any as TLChat
	}

	public async createSecretChat(secret_chat_id: number): Promise<TLChat> {
		return (await this.client.send({
			"@type": "createSecretChat",
			secret_chat_id: secret_chat_id,
		} as any as TdObject)) as any as TLChat
	}

	public async createNewBasicGroupChat(user_ids: ReadonlyArray<number>, title: string): Promise<TLChat> {
		return (await this.client.send({
			"@type": "createNewBasicGroupChat",
			user_ids: user_ids,
			title: title,
		} as any as TdObject)) as any as TLChat
	}

	public async createNewSupergroupChat(title: string, is_channel: boolean, description: string, location: TLChatLocation): Promise<TLChat> {
		return (await this.client.send({
			"@type": "createNewSupergroupChat",
			title: title,
			is_channel: is_channel,
			description: description,
			location: location,
		} as any as TdObject)) as any as TLChat
	}

	public async createNewSecretChat(user_id: number): Promise<TLChat> {
		return (await this.client.send({
			"@type": "createNewSecretChat",
			user_id: user_id,
		} as any as TdObject)) as any as TLChat
	}

	public async upgradeBasicGroupChatToSupergroupChat(chat_id: number): Promise<TLChat> {
		return (await this.client.send({
			"@type": "upgradeBasicGroupChatToSupergroupChat",
			chat_id: chat_id,
		} as any as TdObject)) as any as TLChat
	}

	public async getChatListsToAddChat(chat_id: number): Promise<TLChatLists> {
		return (await this.client.send({
			"@type": "getChatListsToAddChat",
			chat_id: chat_id,
		} as any as TdObject)) as any as TLChatLists
	}

	public async addChatToList(chat_id: number, chat_list: TLChatList): Promise<TLOk> {
		return (await this.client.send({
			"@type": "addChatToList",
			chat_id: chat_id,
			chat_list: chat_list,
		} as any as TdObject)) as any as TLOk
	}

	public async getChatFilter(chat_filter_id: number): Promise<TLChatFilter> {
		return (await this.client.send({
			"@type": "getChatFilter",
			chat_filter_id: chat_filter_id,
		} as any as TdObject)) as any as TLChatFilter
	}

	public async createChatFilter(filter: TLChatFilter): Promise<TLChatFilterInfo> {
		return (await this.client.send({
			"@type": "createChatFilter",
			filter: filter,
		} as any as TdObject)) as any as TLChatFilterInfo
	}

	public async editChatFilter(chat_filter_id: number, filter: TLChatFilter): Promise<TLChatFilterInfo> {
		return (await this.client.send({
			"@type": "editChatFilter",
			chat_filter_id: chat_filter_id,
			filter: filter,
		} as any as TdObject)) as any as TLChatFilterInfo
	}

	public async deleteChatFilter(chat_filter_id: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "deleteChatFilter",
			chat_filter_id: chat_filter_id,
		} as any as TdObject)) as any as TLOk
	}

	public async reorderChatFilters(chat_filter_ids: ReadonlyArray<number>): Promise<TLOk> {
		return (await this.client.send({
			"@type": "reorderChatFilters",
			chat_filter_ids: chat_filter_ids,
		} as any as TdObject)) as any as TLOk
	}

	public async getRecommendedChatFilters(): Promise<TLRecommendedChatFilters> {
		return (await this.client.send({
			"@type": "getRecommendedChatFilters",
		} as any as TdObject)) as any as TLRecommendedChatFilters
	}

	public async getChatFilterDefaultIconName(filter: TLChatFilter): Promise<TLText> {
		return (await this.client.send({
			"@type": "getChatFilterDefaultIconName",
			filter: filter,
		} as any as TdObject)) as any as TLText
	}

	public async setChatTitle(chat_id: number, title: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setChatTitle",
			chat_id: chat_id,
			title: title,
		} as any as TdObject)) as any as TLOk
	}

	public async setChatPhoto(chat_id: number, photo: TLInputChatPhoto): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setChatPhoto",
			chat_id: chat_id,
			photo: photo,
		} as any as TdObject)) as any as TLOk
	}

	public async setChatPermissions(chat_id: number, permissions: TLChatPermissions): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setChatPermissions",
			chat_id: chat_id,
			permissions: permissions,
		} as any as TdObject)) as any as TLOk
	}

	public async setChatDraftMessage(chat_id: number, message_thread_id: number, draft_message: TLDraftMessage): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setChatDraftMessage",
			chat_id: chat_id,
			message_thread_id: message_thread_id,
			draft_message: draft_message,
		} as any as TdObject)) as any as TLOk
	}

	public async setChatNotificationSettings(chat_id: number, notification_settings: TLChatNotificationSettings): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setChatNotificationSettings",
			chat_id: chat_id,
			notification_settings: notification_settings,
		} as any as TdObject)) as any as TLOk
	}

	public async toggleChatIsMarkedAsUnread(chat_id: number, is_marked_as_unread: boolean): Promise<TLOk> {
		return (await this.client.send({
			"@type": "toggleChatIsMarkedAsUnread",
			chat_id: chat_id,
			is_marked_as_unread: is_marked_as_unread,
		} as any as TdObject)) as any as TLOk
	}

	public async toggleChatDefaultDisableNotification(chat_id: number, default_disable_notification: boolean): Promise<TLOk> {
		return (await this.client.send({
			"@type": "toggleChatDefaultDisableNotification",
			chat_id: chat_id,
			default_disable_notification: default_disable_notification,
		} as any as TdObject)) as any as TLOk
	}

	public async setChatClientData(chat_id: number, client_data: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setChatClientData",
			chat_id: chat_id,
			client_data: client_data,
		} as any as TdObject)) as any as TLOk
	}

	public async setChatDescription(chat_id: number, description: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setChatDescription",
			chat_id: chat_id,
			description: description,
		} as any as TdObject)) as any as TLOk
	}

	public async setChatDiscussionGroup(chat_id: number, discussion_chat_id: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setChatDiscussionGroup",
			chat_id: chat_id,
			discussion_chat_id: discussion_chat_id,
		} as any as TdObject)) as any as TLOk
	}

	public async setChatLocation(chat_id: number, location: TLChatLocation): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setChatLocation",
			chat_id: chat_id,
			location: location,
		} as any as TdObject)) as any as TLOk
	}

	public async setChatSlowModeDelay(chat_id: number, slow_mode_delay: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setChatSlowModeDelay",
			chat_id: chat_id,
			slow_mode_delay: slow_mode_delay,
		} as any as TdObject)) as any as TLOk
	}

	public async pinChatMessage(chat_id: number, message_id: number, disable_notification: boolean, only_for_self: boolean): Promise<TLOk> {
		return (await this.client.send({
			"@type": "pinChatMessage",
			chat_id: chat_id,
			message_id: message_id,
			disable_notification: disable_notification,
			only_for_self: only_for_self,
		} as any as TdObject)) as any as TLOk
	}

	public async unpinChatMessage(chat_id: number, message_id: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "unpinChatMessage",
			chat_id: chat_id,
			message_id: message_id,
		} as any as TdObject)) as any as TLOk
	}

	public async unpinAllChatMessages(chat_id: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "unpinAllChatMessages",
			chat_id: chat_id,
		} as any as TdObject)) as any as TLOk
	}

	public async joinChat(chat_id: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "joinChat",
			chat_id: chat_id,
		} as any as TdObject)) as any as TLOk
	}

	public async leaveChat(chat_id: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "leaveChat",
			chat_id: chat_id,
		} as any as TdObject)) as any as TLOk
	}

	public async addChatMember(chat_id: number, user_id: number, forward_limit: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "addChatMember",
			chat_id: chat_id,
			user_id: user_id,
			forward_limit: forward_limit,
		} as any as TdObject)) as any as TLOk
	}

	public async addChatMembers(chat_id: number, user_ids: ReadonlyArray<number>): Promise<TLOk> {
		return (await this.client.send({
			"@type": "addChatMembers",
			chat_id: chat_id,
			user_ids: user_ids,
		} as any as TdObject)) as any as TLOk
	}

	public async setChatMemberStatus(chat_id: number, user_id: number, status: TLChatMemberStatus): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setChatMemberStatus",
			chat_id: chat_id,
			user_id: user_id,
			status: status,
		} as any as TdObject)) as any as TLOk
	}

	public async canTransferOwnership(): Promise<TLCanTransferOwnershipResult> {
		return (await this.client.send({
			"@type": "canTransferOwnership",
		} as any as TdObject)) as any as TLCanTransferOwnershipResult
	}

	public async transferChatOwnership(chat_id: number, user_id: number, password: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "transferChatOwnership",
			chat_id: chat_id,
			user_id: user_id,
			password: password,
		} as any as TdObject)) as any as TLOk
	}

	public async getChatMember(chat_id: number, user_id: number): Promise<TLChatMember> {
		return (await this.client.send({
			"@type": "getChatMember",
			chat_id: chat_id,
			user_id: user_id,
		} as any as TdObject)) as any as TLChatMember
	}

	public async searchChatMembers(chat_id: number, query: string, limit: number, filter: TLChatMembersFilter): Promise<TLChatMembers> {
		return (await this.client.send({
			"@type": "searchChatMembers",
			chat_id: chat_id,
			query: query,
			limit: limit,
			filter: filter,
		} as any as TdObject)) as any as TLChatMembers
	}

	public async getChatAdministrators(chat_id: number): Promise<TLChatAdministrators> {
		return (await this.client.send({
			"@type": "getChatAdministrators",
			chat_id: chat_id,
		} as any as TdObject)) as any as TLChatAdministrators
	}

	public async clearAllDraftMessages(exclude_secret_chats: boolean): Promise<TLOk> {
		return (await this.client.send({
			"@type": "clearAllDraftMessages",
			exclude_secret_chats: exclude_secret_chats,
		} as any as TdObject)) as any as TLOk
	}

	public async getChatNotificationSettingsExceptions(scope: TLNotificationSettingsScope, compare_sound: boolean): Promise<TLChats> {
		return (await this.client.send({
			"@type": "getChatNotificationSettingsExceptions",
			scope: scope,
			compare_sound: compare_sound,
		} as any as TdObject)) as any as TLChats
	}

	public async getScopeNotificationSettings(scope: TLNotificationSettingsScope): Promise<TLScopeNotificationSettings> {
		return (await this.client.send({
			"@type": "getScopeNotificationSettings",
			scope: scope,
		} as any as TdObject)) as any as TLScopeNotificationSettings
	}

	public async setScopeNotificationSettings(scope: TLNotificationSettingsScope, notification_settings: TLScopeNotificationSettings): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setScopeNotificationSettings",
			scope: scope,
			notification_settings: notification_settings,
		} as any as TdObject)) as any as TLOk
	}

	public async resetAllNotificationSettings(): Promise<TLOk> {
		return (await this.client.send({
			"@type": "resetAllNotificationSettings",
		} as any as TdObject)) as any as TLOk
	}

	public async toggleChatIsPinned(chat_list: TLChatList, chat_id: number, is_pinned: boolean): Promise<TLOk> {
		return (await this.client.send({
			"@type": "toggleChatIsPinned",
			chat_list: chat_list,
			chat_id: chat_id,
			is_pinned: is_pinned,
		} as any as TdObject)) as any as TLOk
	}

	public async setPinnedChats(chat_list: TLChatList, chat_ids: ReadonlyArray<number>): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setPinnedChats",
			chat_list: chat_list,
			chat_ids: chat_ids,
		} as any as TdObject)) as any as TLOk
	}

	public async downloadFile(file_id: number, priority: number, offset: number, limit: number, synchronous: boolean): Promise<TLFile> {
		return (await this.client.send({
			"@type": "downloadFile",
			file_id: file_id,
			priority: priority,
			offset: offset,
			limit: limit,
			synchronous: synchronous,
		} as any as TdObject)) as any as TLFile
	}

	public async getFileDownloadedPrefixSize(file_id: number, offset: number): Promise<TLCount> {
		return (await this.client.send({
			"@type": "getFileDownloadedPrefixSize",
			file_id: file_id,
			offset: offset,
		} as any as TdObject)) as any as TLCount
	}

	public async cancelDownloadFile(file_id: number, only_if_pending: boolean): Promise<TLOk> {
		return (await this.client.send({
			"@type": "cancelDownloadFile",
			file_id: file_id,
			only_if_pending: only_if_pending,
		} as any as TdObject)) as any as TLOk
	}

	public async uploadFile(file: TLInputFile, file_type: TLFileType, priority: number): Promise<TLFile> {
		return (await this.client.send({
			"@type": "uploadFile",
			file: file,
			file_type: file_type,
			priority: priority,
		} as any as TdObject)) as any as TLFile
	}

	public async cancelUploadFile(file_id: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "cancelUploadFile",
			file_id: file_id,
		} as any as TdObject)) as any as TLOk
	}

	public async writeGeneratedFilePart(generation_id: string, offset: number, data: Uint8Array): Promise<TLOk> {
		return (await this.client.send({
			"@type": "writeGeneratedFilePart",
			generation_id: generation_id,
			offset: offset,
			data: data,
		} as any as TdObject)) as any as TLOk
	}

	public async setFileGenerationProgress(generation_id: string, expected_size: number, local_prefix_size: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setFileGenerationProgress",
			generation_id: generation_id,
			expected_size: expected_size,
			local_prefix_size: local_prefix_size,
		} as any as TdObject)) as any as TLOk
	}

	public async finishFileGeneration(generation_id: string, error: TLError): Promise<TLOk> {
		return (await this.client.send({
			"@type": "finishFileGeneration",
			generation_id: generation_id,
			error: error,
		} as any as TdObject)) as any as TLOk
	}

	public async readFilePart(file_id: number, offset: number, count: number): Promise<TLFilePart> {
		return (await this.client.send({
			"@type": "readFilePart",
			file_id: file_id,
			offset: offset,
			count: count,
		} as any as TdObject)) as any as TLFilePart
	}

	public async deleteFile(file_id: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "deleteFile",
			file_id: file_id,
		} as any as TdObject)) as any as TLOk
	}

	public async generateChatInviteLink(chat_id: number): Promise<TLChatInviteLink> {
		return (await this.client.send({
			"@type": "generateChatInviteLink",
			chat_id: chat_id,
		} as any as TdObject)) as any as TLChatInviteLink
	}

	public async checkChatInviteLink(invite_link: string): Promise<TLChatInviteLinkInfo> {
		return (await this.client.send({
			"@type": "checkChatInviteLink",
			invite_link: invite_link,
		} as any as TdObject)) as any as TLChatInviteLinkInfo
	}

	public async joinChatByInviteLink(invite_link: string): Promise<TLChat> {
		return (await this.client.send({
			"@type": "joinChatByInviteLink",
			invite_link: invite_link,
		} as any as TdObject)) as any as TLChat
	}

	public async createCall(user_id: number, protocol: TLCallProtocol, is_video: boolean): Promise<TLCallId> {
		return (await this.client.send({
			"@type": "createCall",
			user_id: user_id,
			protocol: protocol,
			is_video: is_video,
		} as any as TdObject)) as any as TLCallId
	}

	public async acceptCall(call_id: number, protocol: TLCallProtocol): Promise<TLOk> {
		return (await this.client.send({
			"@type": "acceptCall",
			call_id: call_id,
			protocol: protocol,
		} as any as TdObject)) as any as TLOk
	}

	public async sendCallSignalingData(call_id: number, data: Uint8Array): Promise<TLOk> {
		return (await this.client.send({
			"@type": "sendCallSignalingData",
			call_id: call_id,
			data: data,
		} as any as TdObject)) as any as TLOk
	}

	public async discardCall(call_id: number, is_disconnected: boolean, duration: number, is_video: boolean, connection_id: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "discardCall",
			call_id: call_id,
			is_disconnected: is_disconnected,
			duration: duration,
			is_video: is_video,
			connection_id: connection_id,
		} as any as TdObject)) as any as TLOk
	}

	public async sendCallRating(call_id: number, rating: number, comment: string, problems: ReadonlyArray<TLCallProblem>): Promise<TLOk> {
		return (await this.client.send({
			"@type": "sendCallRating",
			call_id: call_id,
			rating: rating,
			comment: comment,
			problems: problems,
		} as any as TdObject)) as any as TLOk
	}

	public async sendCallDebugInformation(call_id: number, debug_information: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "sendCallDebugInformation",
			call_id: call_id,
			debug_information: debug_information,
		} as any as TdObject)) as any as TLOk
	}

	public async toggleMessageSenderIsBlocked(sender: TLMessageSender, is_blocked: boolean): Promise<TLOk> {
		return (await this.client.send({
			"@type": "toggleMessageSenderIsBlocked",
			sender: sender,
			is_blocked: is_blocked,
		} as any as TdObject)) as any as TLOk
	}

	public async blockMessageSenderFromReplies(message_id: number, delete_message: boolean, delete_all_messages: boolean, report_spam: boolean): Promise<TLOk> {
		return (await this.client.send({
			"@type": "blockMessageSenderFromReplies",
			message_id: message_id,
			delete_message: delete_message,
			delete_all_messages: delete_all_messages,
			report_spam: report_spam,
		} as any as TdObject)) as any as TLOk
	}

	public async getBlockedMessageSenders(offset: number, limit: number): Promise<TLMessageSenders> {
		return (await this.client.send({
			"@type": "getBlockedMessageSenders",
			offset: offset,
			limit: limit,
		} as any as TdObject)) as any as TLMessageSenders
	}

	public async addContact(contact: TLContact, share_phone_number: boolean): Promise<TLOk> {
		return (await this.client.send({
			"@type": "addContact",
			contact: contact,
			share_phone_number: share_phone_number,
		} as any as TdObject)) as any as TLOk
	}

	public async importContacts(contacts: ReadonlyArray<TLContact>): Promise<TLImportedContacts> {
		return (await this.client.send({
			"@type": "importContacts",
			contacts: contacts,
		} as any as TdObject)) as any as TLImportedContacts
	}

	public async getContacts(): Promise<TLUsers> {
		return (await this.client.send({
			"@type": "getContacts",
		} as any as TdObject)) as any as TLUsers
	}

	public async searchContacts(query: string, limit: number): Promise<TLUsers> {
		return (await this.client.send({
			"@type": "searchContacts",
			query: query,
			limit: limit,
		} as any as TdObject)) as any as TLUsers
	}

	public async removeContacts(user_ids: ReadonlyArray<number>): Promise<TLOk> {
		return (await this.client.send({
			"@type": "removeContacts",
			user_ids: user_ids,
		} as any as TdObject)) as any as TLOk
	}

	public async getImportedContactCount(): Promise<TLCount> {
		return (await this.client.send({
			"@type": "getImportedContactCount",
		} as any as TdObject)) as any as TLCount
	}

	public async changeImportedContacts(contacts: ReadonlyArray<TLContact>): Promise<TLImportedContacts> {
		return (await this.client.send({
			"@type": "changeImportedContacts",
			contacts: contacts,
		} as any as TdObject)) as any as TLImportedContacts
	}

	public async clearImportedContacts(): Promise<TLOk> {
		return (await this.client.send({
			"@type": "clearImportedContacts",
		} as any as TdObject)) as any as TLOk
	}

	public async sharePhoneNumber(user_id: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "sharePhoneNumber",
			user_id: user_id,
		} as any as TdObject)) as any as TLOk
	}

	public async getUserProfilePhotos(user_id: number, offset: number, limit: number): Promise<TLChatPhotos> {
		return (await this.client.send({
			"@type": "getUserProfilePhotos",
			user_id: user_id,
			offset: offset,
			limit: limit,
		} as any as TdObject)) as any as TLChatPhotos
	}

	public async getStickers(emoji: string, limit: number): Promise<TLStickers> {
		return (await this.client.send({
			"@type": "getStickers",
			emoji: emoji,
			limit: limit,
		} as any as TdObject)) as any as TLStickers
	}

	public async searchStickers(emoji: string, limit: number): Promise<TLStickers> {
		return (await this.client.send({
			"@type": "searchStickers",
			emoji: emoji,
			limit: limit,
		} as any as TdObject)) as any as TLStickers
	}

	public async getInstalledStickerSets(is_masks: boolean): Promise<TLStickerSets> {
		return (await this.client.send({
			"@type": "getInstalledStickerSets",
			is_masks: is_masks,
		} as any as TdObject)) as any as TLStickerSets
	}

	public async getArchivedStickerSets(is_masks: boolean, offset_sticker_set_id: string, limit: number): Promise<TLStickerSets> {
		return (await this.client.send({
			"@type": "getArchivedStickerSets",
			is_masks: is_masks,
			offset_sticker_set_id: offset_sticker_set_id,
			limit: limit,
		} as any as TdObject)) as any as TLStickerSets
	}

	public async getTrendingStickerSets(offset: number, limit: number): Promise<TLStickerSets> {
		return (await this.client.send({
			"@type": "getTrendingStickerSets",
			offset: offset,
			limit: limit,
		} as any as TdObject)) as any as TLStickerSets
	}

	public async getAttachedStickerSets(file_id: number): Promise<TLStickerSets> {
		return (await this.client.send({
			"@type": "getAttachedStickerSets",
			file_id: file_id,
		} as any as TdObject)) as any as TLStickerSets
	}

	public async getStickerSet(set_id: string): Promise<TLStickerSet> {
		return (await this.client.send({
			"@type": "getStickerSet",
			set_id: set_id,
		} as any as TdObject)) as any as TLStickerSet
	}

	public async searchStickerSet(name: string): Promise<TLStickerSet> {
		return (await this.client.send({
			"@type": "searchStickerSet",
			name: name,
		} as any as TdObject)) as any as TLStickerSet
	}

	public async searchInstalledStickerSets(is_masks: boolean, query: string, limit: number): Promise<TLStickerSets> {
		return (await this.client.send({
			"@type": "searchInstalledStickerSets",
			is_masks: is_masks,
			query: query,
			limit: limit,
		} as any as TdObject)) as any as TLStickerSets
	}

	public async searchStickerSets(query: string): Promise<TLStickerSets> {
		return (await this.client.send({
			"@type": "searchStickerSets",
			query: query,
		} as any as TdObject)) as any as TLStickerSets
	}

	public async changeStickerSet(set_id: string, is_installed: boolean, is_archived: boolean): Promise<TLOk> {
		return (await this.client.send({
			"@type": "changeStickerSet",
			set_id: set_id,
			is_installed: is_installed,
			is_archived: is_archived,
		} as any as TdObject)) as any as TLOk
	}

	public async viewTrendingStickerSets(sticker_set_ids: ReadonlyArray<string>): Promise<TLOk> {
		return (await this.client.send({
			"@type": "viewTrendingStickerSets",
			sticker_set_ids: sticker_set_ids,
		} as any as TdObject)) as any as TLOk
	}

	public async reorderInstalledStickerSets(is_masks: boolean, sticker_set_ids: ReadonlyArray<string>): Promise<TLOk> {
		return (await this.client.send({
			"@type": "reorderInstalledStickerSets",
			is_masks: is_masks,
			sticker_set_ids: sticker_set_ids,
		} as any as TdObject)) as any as TLOk
	}

	public async getRecentStickers(is_attached: boolean): Promise<TLStickers> {
		return (await this.client.send({
			"@type": "getRecentStickers",
			is_attached: is_attached,
		} as any as TdObject)) as any as TLStickers
	}

	public async addRecentSticker(is_attached: boolean, sticker: TLInputFile): Promise<TLStickers> {
		return (await this.client.send({
			"@type": "addRecentSticker",
			is_attached: is_attached,
			sticker: sticker,
		} as any as TdObject)) as any as TLStickers
	}

	public async removeRecentSticker(is_attached: boolean, sticker: TLInputFile): Promise<TLOk> {
		return (await this.client.send({
			"@type": "removeRecentSticker",
			is_attached: is_attached,
			sticker: sticker,
		} as any as TdObject)) as any as TLOk
	}

	public async clearRecentStickers(is_attached: boolean): Promise<TLOk> {
		return (await this.client.send({
			"@type": "clearRecentStickers",
			is_attached: is_attached,
		} as any as TdObject)) as any as TLOk
	}

	public async getFavoriteStickers(): Promise<TLStickers> {
		return (await this.client.send({
			"@type": "getFavoriteStickers",
		} as any as TdObject)) as any as TLStickers
	}

	public async addFavoriteSticker(sticker: TLInputFile): Promise<TLOk> {
		return (await this.client.send({
			"@type": "addFavoriteSticker",
			sticker: sticker,
		} as any as TdObject)) as any as TLOk
	}

	public async removeFavoriteSticker(sticker: TLInputFile): Promise<TLOk> {
		return (await this.client.send({
			"@type": "removeFavoriteSticker",
			sticker: sticker,
		} as any as TdObject)) as any as TLOk
	}

	public async getStickerEmojis(sticker: TLInputFile): Promise<TLEmojis> {
		return (await this.client.send({
			"@type": "getStickerEmojis",
			sticker: sticker,
		} as any as TdObject)) as any as TLEmojis
	}

	public async searchEmojis(text: string, exact_match: boolean, input_language_codes: ReadonlyArray<string>): Promise<TLEmojis> {
		return (await this.client.send({
			"@type": "searchEmojis",
			text: text,
			exact_match: exact_match,
			input_language_codes: input_language_codes,
		} as any as TdObject)) as any as TLEmojis
	}

	public async getEmojiSuggestionsUrl(language_code: string): Promise<TLHttpUrl> {
		return (await this.client.send({
			"@type": "getEmojiSuggestionsUrl",
			language_code: language_code,
		} as any as TdObject)) as any as TLHttpUrl
	}

	public async getSavedAnimations(): Promise<TLAnimations> {
		return (await this.client.send({
			"@type": "getSavedAnimations",
		} as any as TdObject)) as any as TLAnimations
	}

	public async addSavedAnimation(animation: TLInputFile): Promise<TLOk> {
		return (await this.client.send({
			"@type": "addSavedAnimation",
			animation: animation,
		} as any as TdObject)) as any as TLOk
	}

	public async removeSavedAnimation(animation: TLInputFile): Promise<TLOk> {
		return (await this.client.send({
			"@type": "removeSavedAnimation",
			animation: animation,
		} as any as TdObject)) as any as TLOk
	}

	public async getRecentInlineBots(): Promise<TLUsers> {
		return (await this.client.send({
			"@type": "getRecentInlineBots",
		} as any as TdObject)) as any as TLUsers
	}

	public async searchHashtags(prefix: string, limit: number): Promise<TLHashtags> {
		return (await this.client.send({
			"@type": "searchHashtags",
			prefix: prefix,
			limit: limit,
		} as any as TdObject)) as any as TLHashtags
	}

	public async removeRecentHashtag(hashtag: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "removeRecentHashtag",
			hashtag: hashtag,
		} as any as TdObject)) as any as TLOk
	}

	public async getWebPagePreview(text: TLFormattedText): Promise<TLWebPage> {
		return (await this.client.send({
			"@type": "getWebPagePreview",
			text: text,
		} as any as TdObject)) as any as TLWebPage
	}

	public async getWebPageInstantView(url: string, force_full: boolean): Promise<TLWebPageInstantView> {
		return (await this.client.send({
			"@type": "getWebPageInstantView",
			url: url,
			force_full: force_full,
		} as any as TdObject)) as any as TLWebPageInstantView
	}

	public async setProfilePhoto(photo: TLInputChatPhoto): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setProfilePhoto",
			photo: photo,
		} as any as TdObject)) as any as TLOk
	}

	public async deleteProfilePhoto(profile_photo_id: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "deleteProfilePhoto",
			profile_photo_id: profile_photo_id,
		} as any as TdObject)) as any as TLOk
	}

	public async setName(first_name: string, last_name: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setName",
			first_name: first_name,
			last_name: last_name,
		} as any as TdObject)) as any as TLOk
	}

	public async setBio(bio: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setBio",
			bio: bio,
		} as any as TdObject)) as any as TLOk
	}

	public async setUsername(username: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setUsername",
			username: username,
		} as any as TdObject)) as any as TLOk
	}

	public async setLocation(location: TLLocation): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setLocation",
			location: location,
		} as any as TdObject)) as any as TLOk
	}

	public async changePhoneNumber(phone_number: string, settings: TLPhoneNumberAuthenticationSettings): Promise<TLAuthenticationCodeInfo> {
		return (await this.client.send({
			"@type": "changePhoneNumber",
			phone_number: phone_number,
			settings: settings,
		} as any as TdObject)) as any as TLAuthenticationCodeInfo
	}

	public async resendChangePhoneNumberCode(): Promise<TLAuthenticationCodeInfo> {
		return (await this.client.send({
			"@type": "resendChangePhoneNumberCode",
		} as any as TdObject)) as any as TLAuthenticationCodeInfo
	}

	public async checkChangePhoneNumberCode(code: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "checkChangePhoneNumberCode",
			code: code,
		} as any as TdObject)) as any as TLOk
	}

	public async setCommands(commands: ReadonlyArray<TLBotCommand>): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setCommands",
			commands: commands,
		} as any as TdObject)) as any as TLOk
	}

	public async getActiveSessions(): Promise<TLSessions> {
		return (await this.client.send({
			"@type": "getActiveSessions",
		} as any as TdObject)) as any as TLSessions
	}

	public async terminateSession(session_id: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "terminateSession",
			session_id: session_id,
		} as any as TdObject)) as any as TLOk
	}

	public async terminateAllOtherSessions(): Promise<TLOk> {
		return (await this.client.send({
			"@type": "terminateAllOtherSessions",
		} as any as TdObject)) as any as TLOk
	}

	public async getConnectedWebsites(): Promise<TLConnectedWebsites> {
		return (await this.client.send({
			"@type": "getConnectedWebsites",
		} as any as TdObject)) as any as TLConnectedWebsites
	}

	public async disconnectWebsite(website_id: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "disconnectWebsite",
			website_id: website_id,
		} as any as TdObject)) as any as TLOk
	}

	public async disconnectAllWebsites(): Promise<TLOk> {
		return (await this.client.send({
			"@type": "disconnectAllWebsites",
		} as any as TdObject)) as any as TLOk
	}

	public async setSupergroupUsername(supergroup_id: number, username: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setSupergroupUsername",
			supergroup_id: supergroup_id,
			username: username,
		} as any as TdObject)) as any as TLOk
	}

	public async setSupergroupStickerSet(supergroup_id: number, sticker_set_id: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setSupergroupStickerSet",
			supergroup_id: supergroup_id,
			sticker_set_id: sticker_set_id,
		} as any as TdObject)) as any as TLOk
	}

	public async toggleSupergroupSignMessages(supergroup_id: number, sign_messages: boolean): Promise<TLOk> {
		return (await this.client.send({
			"@type": "toggleSupergroupSignMessages",
			supergroup_id: supergroup_id,
			sign_messages: sign_messages,
		} as any as TdObject)) as any as TLOk
	}

	public async toggleSupergroupIsAllHistoryAvailable(supergroup_id: number, is_all_history_available: boolean): Promise<TLOk> {
		return (await this.client.send({
			"@type": "toggleSupergroupIsAllHistoryAvailable",
			supergroup_id: supergroup_id,
			is_all_history_available: is_all_history_available,
		} as any as TdObject)) as any as TLOk
	}

	public async reportSupergroupSpam(supergroup_id: number, user_id: number, message_ids: ReadonlyArray<number>): Promise<TLOk> {
		return (await this.client.send({
			"@type": "reportSupergroupSpam",
			supergroup_id: supergroup_id,
			user_id: user_id,
			message_ids: message_ids,
		} as any as TdObject)) as any as TLOk
	}

	public async getSupergroupMembers(supergroup_id: number, filter: TLSupergroupMembersFilter, offset: number, limit: number): Promise<TLChatMembers> {
		return (await this.client.send({
			"@type": "getSupergroupMembers",
			supergroup_id: supergroup_id,
			filter: filter,
			offset: offset,
			limit: limit,
		} as any as TdObject)) as any as TLChatMembers
	}

	public async deleteSupergroup(supergroup_id: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "deleteSupergroup",
			supergroup_id: supergroup_id,
		} as any as TdObject)) as any as TLOk
	}

	public async closeSecretChat(secret_chat_id: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "closeSecretChat",
			secret_chat_id: secret_chat_id,
		} as any as TdObject)) as any as TLOk
	}

	public async getChatEventLog(chat_id: number, query: string, from_event_id: string, limit: number, filters: TLChatEventLogFilters, user_ids: ReadonlyArray<number>): Promise<TLChatEvents> {
		return (await this.client.send({
			"@type": "getChatEventLog",
			chat_id: chat_id,
			query: query,
			from_event_id: from_event_id,
			limit: limit,
			filters: filters,
			user_ids: user_ids,
		} as any as TdObject)) as any as TLChatEvents
	}

	public async getPaymentForm(chat_id: number, message_id: number): Promise<TLPaymentForm> {
		return (await this.client.send({
			"@type": "getPaymentForm",
			chat_id: chat_id,
			message_id: message_id,
		} as any as TdObject)) as any as TLPaymentForm
	}

	public async validateOrderInfo(chat_id: number, message_id: number, order_info: TLOrderInfo, allow_save: boolean): Promise<TLValidatedOrderInfo> {
		return (await this.client.send({
			"@type": "validateOrderInfo",
			chat_id: chat_id,
			message_id: message_id,
			order_info: order_info,
			allow_save: allow_save,
		} as any as TdObject)) as any as TLValidatedOrderInfo
	}

	public async sendPaymentForm(chat_id: number, message_id: number, order_info_id: string, shipping_option_id: string, credentials: TLInputCredentials): Promise<TLPaymentResult> {
		return (await this.client.send({
			"@type": "sendPaymentForm",
			chat_id: chat_id,
			message_id: message_id,
			order_info_id: order_info_id,
			shipping_option_id: shipping_option_id,
			credentials: credentials,
		} as any as TdObject)) as any as TLPaymentResult
	}

	public async getPaymentReceipt(chat_id: number, message_id: number): Promise<TLPaymentReceipt> {
		return (await this.client.send({
			"@type": "getPaymentReceipt",
			chat_id: chat_id,
			message_id: message_id,
		} as any as TdObject)) as any as TLPaymentReceipt
	}

	public async getSavedOrderInfo(): Promise<TLOrderInfo> {
		return (await this.client.send({
			"@type": "getSavedOrderInfo",
		} as any as TdObject)) as any as TLOrderInfo
	}

	public async deleteSavedOrderInfo(): Promise<TLOk> {
		return (await this.client.send({
			"@type": "deleteSavedOrderInfo",
		} as any as TdObject)) as any as TLOk
	}

	public async deleteSavedCredentials(): Promise<TLOk> {
		return (await this.client.send({
			"@type": "deleteSavedCredentials",
		} as any as TdObject)) as any as TLOk
	}

	public async getSupportUser(): Promise<TLUser> {
		return (await this.client.send({
			"@type": "getSupportUser",
		} as any as TdObject)) as any as TLUser
	}

	public async getBackgrounds(for_dark_theme: boolean): Promise<TLBackgrounds> {
		return (await this.client.send({
			"@type": "getBackgrounds",
			for_dark_theme: for_dark_theme,
		} as any as TdObject)) as any as TLBackgrounds
	}

	public async getBackgroundUrl(name: string, type: TLBackgroundType): Promise<TLHttpUrl> {
		return (await this.client.send({
			"@type": "getBackgroundUrl",
			name: name,
			type: type,
		} as any as TdObject)) as any as TLHttpUrl
	}

	public async searchBackground(name: string): Promise<TLBackground> {
		return (await this.client.send({
			"@type": "searchBackground",
			name: name,
		} as any as TdObject)) as any as TLBackground
	}

	public async setBackground(background: TLInputBackground, type: TLBackgroundType, for_dark_theme: boolean): Promise<TLBackground> {
		return (await this.client.send({
			"@type": "setBackground",
			background: background,
			type: type,
			for_dark_theme: for_dark_theme,
		} as any as TdObject)) as any as TLBackground
	}

	public async removeBackground(background_id: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "removeBackground",
			background_id: background_id,
		} as any as TdObject)) as any as TLOk
	}

	public async resetBackgrounds(): Promise<TLOk> {
		return (await this.client.send({
			"@type": "resetBackgrounds",
		} as any as TdObject)) as any as TLOk
	}

	public async getLocalizationTargetInfo(only_local: boolean): Promise<TLLocalizationTargetInfo> {
		return (await this.client.send({
			"@type": "getLocalizationTargetInfo",
			only_local: only_local,
		} as any as TdObject)) as any as TLLocalizationTargetInfo
	}

	public async getLanguagePackInfo(language_pack_id: string): Promise<TLLanguagePackInfo> {
		return (await this.client.send({
			"@type": "getLanguagePackInfo",
			language_pack_id: language_pack_id,
		} as any as TdObject)) as any as TLLanguagePackInfo
	}

	public async getLanguagePackStrings(language_pack_id: string, keys: ReadonlyArray<string>): Promise<TLLanguagePackStrings> {
		return (await this.client.send({
			"@type": "getLanguagePackStrings",
			language_pack_id: language_pack_id,
			keys: keys,
		} as any as TdObject)) as any as TLLanguagePackStrings
	}

	public async synchronizeLanguagePack(language_pack_id: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "synchronizeLanguagePack",
			language_pack_id: language_pack_id,
		} as any as TdObject)) as any as TLOk
	}

	public async addCustomServerLanguagePack(language_pack_id: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "addCustomServerLanguagePack",
			language_pack_id: language_pack_id,
		} as any as TdObject)) as any as TLOk
	}

	public async setCustomLanguagePack(info: TLLanguagePackInfo, strings: ReadonlyArray<TLLanguagePackString>): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setCustomLanguagePack",
			info: info,
			strings: strings,
		} as any as TdObject)) as any as TLOk
	}

	public async editCustomLanguagePackInfo(info: TLLanguagePackInfo): Promise<TLOk> {
		return (await this.client.send({
			"@type": "editCustomLanguagePackInfo",
			info: info,
		} as any as TdObject)) as any as TLOk
	}

	public async setCustomLanguagePackString(language_pack_id: string, new_string: TLLanguagePackString): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setCustomLanguagePackString",
			language_pack_id: language_pack_id,
			new_string: new_string,
		} as any as TdObject)) as any as TLOk
	}

	public async deleteLanguagePack(language_pack_id: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "deleteLanguagePack",
			language_pack_id: language_pack_id,
		} as any as TdObject)) as any as TLOk
	}

	public async registerDevice(device_token: TLDeviceToken, other_user_ids: ReadonlyArray<number>): Promise<TLPushReceiverId> {
		return (await this.client.send({
			"@type": "registerDevice",
			device_token: device_token,
			other_user_ids: other_user_ids,
		} as any as TdObject)) as any as TLPushReceiverId
	}

	public async processPushNotification(payload: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "processPushNotification",
			payload: payload,
		} as any as TdObject)) as any as TLOk
	}

	public async getPushReceiverId(payload: string): Promise<TLPushReceiverId> {
		return (await this.client.send({
			"@type": "getPushReceiverId",
			payload: payload,
		} as any as TdObject)) as any as TLPushReceiverId
	}

	public async getRecentlyVisitedTMeUrls(referrer: string): Promise<TLTMeUrls> {
		return (await this.client.send({
			"@type": "getRecentlyVisitedTMeUrls",
			referrer: referrer,
		} as any as TdObject)) as any as TLTMeUrls
	}

	public async setUserPrivacySettingRules(setting: TLUserPrivacySetting, rules: TLUserPrivacySettingRules): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setUserPrivacySettingRules",
			setting: setting,
			rules: rules,
		} as any as TdObject)) as any as TLOk
	}

	public async getUserPrivacySettingRules(setting: TLUserPrivacySetting): Promise<TLUserPrivacySettingRules> {
		return (await this.client.send({
			"@type": "getUserPrivacySettingRules",
			setting: setting,
		} as any as TdObject)) as any as TLUserPrivacySettingRules
	}

	public async getOption(name: string): Promise<TLOptionValue> {
		return (await this.client.send({
			"@type": "getOption",
			name: name,
		} as any as TdObject)) as any as TLOptionValue
	}

	public async setOption(name: string, value: TLOptionValue): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setOption",
			name: name,
			value: value,
		} as any as TdObject)) as any as TLOk
	}

	public async setAccountTtl(ttl: TLAccountTtl): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setAccountTtl",
			ttl: ttl,
		} as any as TdObject)) as any as TLOk
	}

	public async getAccountTtl(): Promise<TLAccountTtl> {
		return (await this.client.send({
			"@type": "getAccountTtl",
		} as any as TdObject)) as any as TLAccountTtl
	}

	public async deleteAccount(reason: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "deleteAccount",
			reason: reason,
		} as any as TdObject)) as any as TLOk
	}

	public async removeChatActionBar(chat_id: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "removeChatActionBar",
			chat_id: chat_id,
		} as any as TdObject)) as any as TLOk
	}

	public async reportChat(chat_id: number, reason: TLChatReportReason, message_ids: ReadonlyArray<number>): Promise<TLOk> {
		return (await this.client.send({
			"@type": "reportChat",
			chat_id: chat_id,
			reason: reason,
			message_ids: message_ids,
		} as any as TdObject)) as any as TLOk
	}

	public async getChatStatisticsUrl(chat_id: number, parameters: string, is_dark: boolean): Promise<TLHttpUrl> {
		return (await this.client.send({
			"@type": "getChatStatisticsUrl",
			chat_id: chat_id,
			parameters: parameters,
			is_dark: is_dark,
		} as any as TdObject)) as any as TLHttpUrl
	}

	public async getChatStatistics(chat_id: number, is_dark: boolean): Promise<TLChatStatistics> {
		return (await this.client.send({
			"@type": "getChatStatistics",
			chat_id: chat_id,
			is_dark: is_dark,
		} as any as TdObject)) as any as TLChatStatistics
	}

	public async getMessageStatistics(chat_id: number, message_id: number, is_dark: boolean): Promise<TLMessageStatistics> {
		return (await this.client.send({
			"@type": "getMessageStatistics",
			chat_id: chat_id,
			message_id: message_id,
			is_dark: is_dark,
		} as any as TdObject)) as any as TLMessageStatistics
	}

	public async getStatisticsGraph(chat_id: number, token: string, x: number): Promise<TLStatisticsGraph> {
		return (await this.client.send({
			"@type": "getStatisticsGraph",
			chat_id: chat_id,
			token: token,
			x: x,
		} as any as TdObject)) as any as TLStatisticsGraph
	}

	public async getStorageStatistics(chat_limit: number): Promise<TLStorageStatistics> {
		return (await this.client.send({
			"@type": "getStorageStatistics",
			chat_limit: chat_limit,
		} as any as TdObject)) as any as TLStorageStatistics
	}

	public async getStorageStatisticsFast(): Promise<TLStorageStatisticsFast> {
		return (await this.client.send({
			"@type": "getStorageStatisticsFast",
		} as any as TdObject)) as any as TLStorageStatisticsFast
	}

	public async getDatabaseStatistics(): Promise<TLDatabaseStatistics> {
		return (await this.client.send({
			"@type": "getDatabaseStatistics",
		} as any as TdObject)) as any as TLDatabaseStatistics
	}

	public async optimizeStorage(size: number, ttl: number, count: number, immunity_delay: number, file_types: ReadonlyArray<TLFileType>, chat_ids: ReadonlyArray<number>, exclude_chat_ids: ReadonlyArray<number>, return_deleted_file_statistics: boolean, chat_limit: number): Promise<TLStorageStatistics> {
		return (await this.client.send({
			"@type": "optimizeStorage",
			size: size,
			ttl: ttl,
			count: count,
			immunity_delay: immunity_delay,
			file_types: file_types,
			chat_ids: chat_ids,
			exclude_chat_ids: exclude_chat_ids,
			return_deleted_file_statistics: return_deleted_file_statistics,
			chat_limit: chat_limit,
		} as any as TdObject)) as any as TLStorageStatistics
	}

	public async setNetworkType(type: TLNetworkType): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setNetworkType",
			type: type,
		} as any as TdObject)) as any as TLOk
	}

	public async getNetworkStatistics(only_current: boolean): Promise<TLNetworkStatistics> {
		return (await this.client.send({
			"@type": "getNetworkStatistics",
			only_current: only_current,
		} as any as TdObject)) as any as TLNetworkStatistics
	}

	public async addNetworkStatistics(entry: TLNetworkStatisticsEntry): Promise<TLOk> {
		return (await this.client.send({
			"@type": "addNetworkStatistics",
			entry: entry,
		} as any as TdObject)) as any as TLOk
	}

	public async resetNetworkStatistics(): Promise<TLOk> {
		return (await this.client.send({
			"@type": "resetNetworkStatistics",
		} as any as TdObject)) as any as TLOk
	}

	public async getAutoDownloadSettingsPresets(): Promise<TLAutoDownloadSettingsPresets> {
		return (await this.client.send({
			"@type": "getAutoDownloadSettingsPresets",
		} as any as TdObject)) as any as TLAutoDownloadSettingsPresets
	}

	public async setAutoDownloadSettings(settings: TLAutoDownloadSettings, type: TLNetworkType): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setAutoDownloadSettings",
			settings: settings,
			type: type,
		} as any as TdObject)) as any as TLOk
	}

	public async getBankCardInfo(bank_card_number: string): Promise<TLBankCardInfo> {
		return (await this.client.send({
			"@type": "getBankCardInfo",
			bank_card_number: bank_card_number,
		} as any as TdObject)) as any as TLBankCardInfo
	}

	public async getPassportElement(type: TLPassportElementType, password: string): Promise<TLPassportElement> {
		return (await this.client.send({
			"@type": "getPassportElement",
			type: type,
			password: password,
		} as any as TdObject)) as any as TLPassportElement
	}

	public async getAllPassportElements(password: string): Promise<TLPassportElements> {
		return (await this.client.send({
			"@type": "getAllPassportElements",
			password: password,
		} as any as TdObject)) as any as TLPassportElements
	}

	public async setPassportElement(element: TLInputPassportElement, password: string): Promise<TLPassportElement> {
		return (await this.client.send({
			"@type": "setPassportElement",
			element: element,
			password: password,
		} as any as TdObject)) as any as TLPassportElement
	}

	public async deletePassportElement(type: TLPassportElementType): Promise<TLOk> {
		return (await this.client.send({
			"@type": "deletePassportElement",
			type: type,
		} as any as TdObject)) as any as TLOk
	}

	public async setPassportElementErrors(user_id: number, errors: ReadonlyArray<TLInputPassportElementError>): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setPassportElementErrors",
			user_id: user_id,
			errors: errors,
		} as any as TdObject)) as any as TLOk
	}

	public async getPreferredCountryLanguage(country_code: string): Promise<TLText> {
		return (await this.client.send({
			"@type": "getPreferredCountryLanguage",
			country_code: country_code,
		} as any as TdObject)) as any as TLText
	}

	public async sendPhoneNumberVerificationCode(phone_number: string, settings: TLPhoneNumberAuthenticationSettings): Promise<TLAuthenticationCodeInfo> {
		return (await this.client.send({
			"@type": "sendPhoneNumberVerificationCode",
			phone_number: phone_number,
			settings: settings,
		} as any as TdObject)) as any as TLAuthenticationCodeInfo
	}

	public async resendPhoneNumberVerificationCode(): Promise<TLAuthenticationCodeInfo> {
		return (await this.client.send({
			"@type": "resendPhoneNumberVerificationCode",
		} as any as TdObject)) as any as TLAuthenticationCodeInfo
	}

	public async checkPhoneNumberVerificationCode(code: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "checkPhoneNumberVerificationCode",
			code: code,
		} as any as TdObject)) as any as TLOk
	}

	public async sendEmailAddressVerificationCode(email_address: string): Promise<TLEmailAddressAuthenticationCodeInfo> {
		return (await this.client.send({
			"@type": "sendEmailAddressVerificationCode",
			email_address: email_address,
		} as any as TdObject)) as any as TLEmailAddressAuthenticationCodeInfo
	}

	public async resendEmailAddressVerificationCode(): Promise<TLEmailAddressAuthenticationCodeInfo> {
		return (await this.client.send({
			"@type": "resendEmailAddressVerificationCode",
		} as any as TdObject)) as any as TLEmailAddressAuthenticationCodeInfo
	}

	public async checkEmailAddressVerificationCode(code: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "checkEmailAddressVerificationCode",
			code: code,
		} as any as TdObject)) as any as TLOk
	}

	public async getPassportAuthorizationForm(bot_user_id: number, scope: string, public_key: string, nonce: string): Promise<TLPassportAuthorizationForm> {
		return (await this.client.send({
			"@type": "getPassportAuthorizationForm",
			bot_user_id: bot_user_id,
			scope: scope,
			public_key: public_key,
			nonce: nonce,
		} as any as TdObject)) as any as TLPassportAuthorizationForm
	}

	public async getPassportAuthorizationFormAvailableElements(autorization_form_id: number, password: string): Promise<TLPassportElementsWithErrors> {
		return (await this.client.send({
			"@type": "getPassportAuthorizationFormAvailableElements",
			autorization_form_id: autorization_form_id,
			password: password,
		} as any as TdObject)) as any as TLPassportElementsWithErrors
	}

	public async sendPassportAuthorizationForm(autorization_form_id: number, types: ReadonlyArray<TLPassportElementType>): Promise<TLOk> {
		return (await this.client.send({
			"@type": "sendPassportAuthorizationForm",
			autorization_form_id: autorization_form_id,
			types: types,
		} as any as TdObject)) as any as TLOk
	}

	public async sendPhoneNumberConfirmationCode(hash: string, phone_number: string, settings: TLPhoneNumberAuthenticationSettings): Promise<TLAuthenticationCodeInfo> {
		return (await this.client.send({
			"@type": "sendPhoneNumberConfirmationCode",
			hash: hash,
			phone_number: phone_number,
			settings: settings,
		} as any as TdObject)) as any as TLAuthenticationCodeInfo
	}

	public async resendPhoneNumberConfirmationCode(): Promise<TLAuthenticationCodeInfo> {
		return (await this.client.send({
			"@type": "resendPhoneNumberConfirmationCode",
		} as any as TdObject)) as any as TLAuthenticationCodeInfo
	}

	public async checkPhoneNumberConfirmationCode(code: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "checkPhoneNumberConfirmationCode",
			code: code,
		} as any as TdObject)) as any as TLOk
	}

	public async setBotUpdatesStatus(pending_update_count: number, error_message: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setBotUpdatesStatus",
			pending_update_count: pending_update_count,
			error_message: error_message,
		} as any as TdObject)) as any as TLOk
	}

	public async uploadStickerFile(user_id: number, png_sticker: TLInputFile): Promise<TLFile> {
		return (await this.client.send({
			"@type": "uploadStickerFile",
			user_id: user_id,
			png_sticker: png_sticker,
		} as any as TdObject)) as any as TLFile
	}

	public async createNewStickerSet(user_id: number, title: string, name: string, is_masks: boolean, stickers: ReadonlyArray<TLInputSticker>): Promise<TLStickerSet> {
		return (await this.client.send({
			"@type": "createNewStickerSet",
			user_id: user_id,
			title: title,
			name: name,
			is_masks: is_masks,
			stickers: stickers,
		} as any as TdObject)) as any as TLStickerSet
	}

	public async addStickerToSet(user_id: number, name: string, sticker: TLInputSticker): Promise<TLStickerSet> {
		return (await this.client.send({
			"@type": "addStickerToSet",
			user_id: user_id,
			name: name,
			sticker: sticker,
		} as any as TdObject)) as any as TLStickerSet
	}

	public async setStickerSetThumbnail(user_id: number, name: string, thumbnail: TLInputFile): Promise<TLStickerSet> {
		return (await this.client.send({
			"@type": "setStickerSetThumbnail",
			user_id: user_id,
			name: name,
			thumbnail: thumbnail,
		} as any as TdObject)) as any as TLStickerSet
	}

	public async setStickerPositionInSet(sticker: TLInputFile, position: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setStickerPositionInSet",
			sticker: sticker,
			position: position,
		} as any as TdObject)) as any as TLOk
	}

	public async removeStickerFromSet(sticker: TLInputFile): Promise<TLOk> {
		return (await this.client.send({
			"@type": "removeStickerFromSet",
			sticker: sticker,
		} as any as TdObject)) as any as TLOk
	}

	public async getMapThumbnailFile(location: TLLocation, zoom: number, width: number, height: number, scale: number, chat_id: number): Promise<TLFile> {
		return (await this.client.send({
			"@type": "getMapThumbnailFile",
			location: location,
			zoom: zoom,
			width: width,
			height: height,
			scale: scale,
			chat_id: chat_id,
		} as any as TdObject)) as any as TLFile
	}

	public async acceptTermsOfService(terms_of_service_id: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "acceptTermsOfService",
			terms_of_service_id: terms_of_service_id,
		} as any as TdObject)) as any as TLOk
	}

	public async sendCustomRequest(method: string, parameters: string): Promise<TLCustomRequestResult> {
		return (await this.client.send({
			"@type": "sendCustomRequest",
			method: method,
			parameters: parameters,
		} as any as TdObject)) as any as TLCustomRequestResult
	}

	public async answerCustomQuery(custom_query_id: string, data: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "answerCustomQuery",
			custom_query_id: custom_query_id,
			data: data,
		} as any as TdObject)) as any as TLOk
	}

	public async setAlarm(seconds: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setAlarm",
			seconds: seconds,
		} as any as TdObject)) as any as TLOk
	}

	public async getCountries(): Promise<TLCountries> {
		return (await this.client.send({
			"@type": "getCountries",
		} as any as TdObject)) as any as TLCountries
	}

	public async getCountryCode(): Promise<TLText> {
		return (await this.client.send({
			"@type": "getCountryCode",
		} as any as TdObject)) as any as TLText
	}

	public async getPhoneNumberInfo(phone_number_prefix: string): Promise<TLPhoneNumberInfo> {
		return (await this.client.send({
			"@type": "getPhoneNumberInfo",
			phone_number_prefix: phone_number_prefix,
		} as any as TdObject)) as any as TLPhoneNumberInfo
	}

	public async getInviteText(): Promise<TLText> {
		return (await this.client.send({
			"@type": "getInviteText",
		} as any as TdObject)) as any as TLText
	}

	public async getDeepLinkInfo(link: string): Promise<TLDeepLinkInfo> {
		return (await this.client.send({
			"@type": "getDeepLinkInfo",
			link: link,
		} as any as TdObject)) as any as TLDeepLinkInfo
	}

	public async getApplicationConfig(): Promise<TLJsonValue> {
		return (await this.client.send({
			"@type": "getApplicationConfig",
		} as any as TdObject)) as any as TLJsonValue
	}

	public async saveApplicationLogEvent(type: string, chat_id: number, data: TLJsonValue): Promise<TLOk> {
		return (await this.client.send({
			"@type": "saveApplicationLogEvent",
			type: type,
			chat_id: chat_id,
			data: data,
		} as any as TdObject)) as any as TLOk
	}

	public async addProxy(server: string, port: number, enable: boolean, type: TLProxyType): Promise<TLProxy> {
		return (await this.client.send({
			"@type": "addProxy",
			server: server,
			port: port,
			enable: enable,
			type: type,
		} as any as TdObject)) as any as TLProxy
	}

	public async editProxy(proxy_id: number, server: string, port: number, enable: boolean, type: TLProxyType): Promise<TLProxy> {
		return (await this.client.send({
			"@type": "editProxy",
			proxy_id: proxy_id,
			server: server,
			port: port,
			enable: enable,
			type: type,
		} as any as TdObject)) as any as TLProxy
	}

	public async enableProxy(proxy_id: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "enableProxy",
			proxy_id: proxy_id,
		} as any as TdObject)) as any as TLOk
	}

	public async disableProxy(): Promise<TLOk> {
		return (await this.client.send({
			"@type": "disableProxy",
		} as any as TdObject)) as any as TLOk
	}

	public async removeProxy(proxy_id: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "removeProxy",
			proxy_id: proxy_id,
		} as any as TdObject)) as any as TLOk
	}

	public async getProxies(): Promise<TLProxies> {
		return (await this.client.send({
			"@type": "getProxies",
		} as any as TdObject)) as any as TLProxies
	}

	public async getProxyLink(proxy_id: number): Promise<TLText> {
		return (await this.client.send({
			"@type": "getProxyLink",
			proxy_id: proxy_id,
		} as any as TdObject)) as any as TLText
	}

	public async pingProxy(proxy_id: number): Promise<TLSeconds> {
		return (await this.client.send({
			"@type": "pingProxy",
			proxy_id: proxy_id,
		} as any as TdObject)) as any as TLSeconds
	}

	public async setLogStream(log_stream: TLLogStream): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setLogStream",
			log_stream: log_stream,
		} as any as TdObject)) as any as TLOk
	}

	public async getLogStream(): Promise<TLLogStream> {
		return (await this.client.send({
			"@type": "getLogStream",
		} as any as TdObject)) as any as TLLogStream
	}

	public async setLogVerbosityLevel(new_verbosity_level: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setLogVerbosityLevel",
			new_verbosity_level: new_verbosity_level,
		} as any as TdObject)) as any as TLOk
	}

	public async getLogVerbosityLevel(): Promise<TLLogVerbosityLevel> {
		return (await this.client.send({
			"@type": "getLogVerbosityLevel",
		} as any as TdObject)) as any as TLLogVerbosityLevel
	}

	public async getLogTags(): Promise<TLLogTags> {
		return (await this.client.send({
			"@type": "getLogTags",
		} as any as TdObject)) as any as TLLogTags
	}

	public async setLogTagVerbosityLevel(tag: string, new_verbosity_level: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setLogTagVerbosityLevel",
			tag: tag,
			new_verbosity_level: new_verbosity_level,
		} as any as TdObject)) as any as TLOk
	}

	public async getLogTagVerbosityLevel(tag: string): Promise<TLLogVerbosityLevel> {
		return (await this.client.send({
			"@type": "getLogTagVerbosityLevel",
			tag: tag,
		} as any as TdObject)) as any as TLLogVerbosityLevel
	}

	public async addLogMessage(verbosity_level: number, text: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "addLogMessage",
			verbosity_level: verbosity_level,
			text: text,
		} as any as TdObject)) as any as TLOk
	}

	public async testCallEmpty(): Promise<TLOk> {
		return (await this.client.send({
			"@type": "testCallEmpty",
		} as any as TdObject)) as any as TLOk
	}

	public async testCallString(x: string): Promise<TLTestString> {
		return (await this.client.send({
			"@type": "testCallString",
			x: x,
		} as any as TdObject)) as any as TLTestString
	}

	public async testCallBytes(x: Uint8Array): Promise<TLTestBytes> {
		return (await this.client.send({
			"@type": "testCallBytes",
			x: x,
		} as any as TdObject)) as any as TLTestBytes
	}

	public async testCallVectorInt(x: ReadonlyArray<number>): Promise<TLTestVectorInt> {
		return (await this.client.send({
			"@type": "testCallVectorInt",
			x: x,
		} as any as TdObject)) as any as TLTestVectorInt
	}

	public async testCallVectorIntObject(x: ReadonlyArray<TLTestInt>): Promise<TLTestVectorIntObject> {
		return (await this.client.send({
			"@type": "testCallVectorIntObject",
			x: x,
		} as any as TdObject)) as any as TLTestVectorIntObject
	}

	public async testCallVectorString(x: ReadonlyArray<string>): Promise<TLTestVectorString> {
		return (await this.client.send({
			"@type": "testCallVectorString",
			x: x,
		} as any as TdObject)) as any as TLTestVectorString
	}

	public async testCallVectorStringObject(x: ReadonlyArray<TLTestString>): Promise<TLTestVectorStringObject> {
		return (await this.client.send({
			"@type": "testCallVectorStringObject",
			x: x,
		} as any as TdObject)) as any as TLTestVectorStringObject
	}

	public async testSquareInt(x: number): Promise<TLTestInt> {
		return (await this.client.send({
			"@type": "testSquareInt",
			x: x,
		} as any as TdObject)) as any as TLTestInt
	}

	public async testNetwork(): Promise<TLOk> {
		return (await this.client.send({
			"@type": "testNetwork",
		} as any as TdObject)) as any as TLOk
	}

	public async testProxy(server: string, port: number, type: TLProxyType, dc_id: number, timeout: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "testProxy",
			server: server,
			port: port,
			type: type,
			dc_id: dc_id,
			timeout: timeout,
		} as any as TdObject)) as any as TLOk
	}

	public async testGetDifference(): Promise<TLOk> {
		return (await this.client.send({
			"@type": "testGetDifference",
		} as any as TdObject)) as any as TLOk
	}

	public async testUseUpdate(): Promise<TLUpdate> {
		return (await this.client.send({
			"@type": "testUseUpdate",
		} as any as TdObject)) as any as TLUpdate
	}

	public async testReturnError(error: TLError): Promise<TLError> {
		return (await this.client.send({
			"@type": "testReturnError",
			error: error,
		} as any as TdObject)) as any as TLError
	}
}

export type TLObject = TLError
                       | TLOk
                       | TLTdlibParameters
                       | TLAuthenticationCodeTypeTelegramMessage
                       | TLAuthenticationCodeTypeSms
                       | TLAuthenticationCodeTypeCall
                       | TLAuthenticationCodeTypeFlashCall
                       | TLAuthenticationCodeInfo
                       | TLEmailAddressAuthenticationCodeInfo
                       | TLTextEntity
                       | TLTextEntities
                       | TLFormattedText
                       | TLTermsOfService
                       | TLAuthorizationStateWaitTdlibParameters
                       | TLAuthorizationStateWaitEncryptionKey
                       | TLAuthorizationStateWaitPhoneNumber
                       | TLAuthorizationStateWaitCode
                       | TLAuthorizationStateWaitOtherDeviceConfirmation
                       | TLAuthorizationStateWaitRegistration
                       | TLAuthorizationStateWaitPassword
                       | TLAuthorizationStateReady
                       | TLAuthorizationStateLoggingOut
                       | TLAuthorizationStateClosing
                       | TLAuthorizationStateClosed
                       | TLPasswordState
                       | TLRecoveryEmailAddress
                       | TLTemporaryPasswordState
                       | TLLocalFile
                       | TLRemoteFile
                       | TLFile
                       | TLInputFileId
                       | TLInputFileRemote
                       | TLInputFileLocal
                       | TLInputFileGenerated
                       | TLPhotoSize
                       | TLMinithumbnail
                       | TLThumbnailFormatJpeg
                       | TLThumbnailFormatPng
                       | TLThumbnailFormatWebp
                       | TLThumbnailFormatGif
                       | TLThumbnailFormatTgs
                       | TLThumbnailFormatMpeg4
                       | TLThumbnail
                       | TLMaskPointForehead
                       | TLMaskPointEyes
                       | TLMaskPointMouth
                       | TLMaskPointChin
                       | TLMaskPosition
                       | TLPollOption
                       | TLPollTypeRegular
                       | TLPollTypeQuiz
                       | TLAnimation
                       | TLAudio
                       | TLDocument
                       | TLPhoto
                       | TLSticker
                       | TLVideo
                       | TLVideoNote
                       | TLVoiceNote
                       | TLContact
                       | TLLocation
                       | TLVenue
                       | TLGame
                       | TLPoll
                       | TLProfilePhoto
                       | TLChatPhotoInfo
                       | TLUserTypeRegular
                       | TLUserTypeDeleted
                       | TLUserTypeBot
                       | TLUserTypeUnknown
                       | TLBotCommand
                       | TLBotInfo
                       | TLChatLocation
                       | TLAnimatedChatPhoto
                       | TLChatPhoto
                       | TLChatPhotos
                       | TLInputChatPhotoPrevious
                       | TLInputChatPhotoStatic
                       | TLInputChatPhotoAnimation
                       | TLUser
                       | TLUserFullInfo
                       | TLUsers
                       | TLChatAdministrator
                       | TLChatAdministrators
                       | TLChatPermissions
                       | TLChatMemberStatusCreator
                       | TLChatMemberStatusAdministrator
                       | TLChatMemberStatusMember
                       | TLChatMemberStatusRestricted
                       | TLChatMemberStatusLeft
                       | TLChatMemberStatusBanned
                       | TLChatMember
                       | TLChatMembers
                       | TLChatMembersFilterContacts
                       | TLChatMembersFilterAdministrators
                       | TLChatMembersFilterMembers
                       | TLChatMembersFilterMention
                       | TLChatMembersFilterRestricted
                       | TLChatMembersFilterBanned
                       | TLChatMembersFilterBots
                       | TLSupergroupMembersFilterRecent
                       | TLSupergroupMembersFilterContacts
                       | TLSupergroupMembersFilterAdministrators
                       | TLSupergroupMembersFilterSearch
                       | TLSupergroupMembersFilterRestricted
                       | TLSupergroupMembersFilterBanned
                       | TLSupergroupMembersFilterMention
                       | TLSupergroupMembersFilterBots
                       | TLBasicGroup
                       | TLBasicGroupFullInfo
                       | TLSupergroup
                       | TLSupergroupFullInfo
                       | TLSecretChatStatePending
                       | TLSecretChatStateReady
                       | TLSecretChatStateClosed
                       | TLSecretChat
                       | TLMessageSenderUser
                       | TLMessageSenderChat
                       | TLMessageSenders
                       | TLMessageForwardOriginUser
                       | TLMessageForwardOriginChat
                       | TLMessageForwardOriginHiddenUser
                       | TLMessageForwardOriginChannel
                       | TLMessageForwardInfo
                       | TLMessageReplyInfo
                       | TLMessageInteractionInfo
                       | TLMessageSendingStatePending
                       | TLMessageSendingStateFailed
                       | TLMessage
                       | TLMessages
                       | TLFoundMessages
                       | TLNotificationSettingsScopePrivateChats
                       | TLNotificationSettingsScopeGroupChats
                       | TLNotificationSettingsScopeChannelChats
                       | TLChatNotificationSettings
                       | TLScopeNotificationSettings
                       | TLDraftMessage
                       | TLChatTypePrivate
                       | TLChatTypeBasicGroup
                       | TLChatTypeSupergroup
                       | TLChatTypeSecret
                       | TLChatFilter
                       | TLChatFilterInfo
                       | TLRecommendedChatFilter
                       | TLRecommendedChatFilters
                       | TLChatListMain
                       | TLChatListArchive
                       | TLChatListFilter
                       | TLChatLists
                       | TLChatSourceMtprotoProxy
                       | TLChatSourcePublicServiceAnnouncement
                       | TLChatPosition
                       | TLChat
                       | TLChats
                       | TLChatNearby
                       | TLChatsNearby
                       | TLChatInviteLink
                       | TLChatInviteLinkInfo
                       | TLPublicChatTypeHasUsername
                       | TLPublicChatTypeIsLocationBased
                       | TLChatActionBarReportSpam
                       | TLChatActionBarReportUnrelatedLocation
                       | TLChatActionBarReportAddBlock
                       | TLChatActionBarAddContact
                       | TLChatActionBarSharePhoneNumber
                       | TLKeyboardButtonTypeText
                       | TLKeyboardButtonTypeRequestPhoneNumber
                       | TLKeyboardButtonTypeRequestLocation
                       | TLKeyboardButtonTypeRequestPoll
                       | TLKeyboardButton
                       | TLInlineKeyboardButtonTypeUrl
                       | TLInlineKeyboardButtonTypeLoginUrl
                       | TLInlineKeyboardButtonTypeCallback
                       | TLInlineKeyboardButtonTypeCallbackWithPassword
                       | TLInlineKeyboardButtonTypeCallbackGame
                       | TLInlineKeyboardButtonTypeSwitchInline
                       | TLInlineKeyboardButtonTypeBuy
                       | TLInlineKeyboardButton
                       | TLReplyMarkupRemoveKeyboard
                       | TLReplyMarkupForceReply
                       | TLReplyMarkupShowKeyboard
                       | TLReplyMarkupInlineKeyboard
                       | TLLoginUrlInfoOpen
                       | TLLoginUrlInfoRequestConfirmation
                       | TLMessageThreadInfo
                       | TLRichTextPlain
                       | TLRichTextBold
                       | TLRichTextItalic
                       | TLRichTextUnderline
                       | TLRichTextStrikethrough
                       | TLRichTextFixed
                       | TLRichTextUrl
                       | TLRichTextEmailAddress
                       | TLRichTextSubscript
                       | TLRichTextSuperscript
                       | TLRichTextMarked
                       | TLRichTextPhoneNumber
                       | TLRichTextIcon
                       | TLRichTextReference
                       | TLRichTextAnchor
                       | TLRichTextAnchorLink
                       | TLRichTexts
                       | TLPageBlockCaption
                       | TLPageBlockListItem
                       | TLPageBlockHorizontalAlignmentLeft
                       | TLPageBlockHorizontalAlignmentCenter
                       | TLPageBlockHorizontalAlignmentRight
                       | TLPageBlockVerticalAlignmentTop
                       | TLPageBlockVerticalAlignmentMiddle
                       | TLPageBlockVerticalAlignmentBottom
                       | TLPageBlockTableCell
                       | TLPageBlockRelatedArticle
                       | TLPageBlockTitle
                       | TLPageBlockSubtitle
                       | TLPageBlockAuthorDate
                       | TLPageBlockHeader
                       | TLPageBlockSubheader
                       | TLPageBlockKicker
                       | TLPageBlockParagraph
                       | TLPageBlockPreformatted
                       | TLPageBlockFooter
                       | TLPageBlockDivider
                       | TLPageBlockAnchor
                       | TLPageBlockList
                       | TLPageBlockBlockQuote
                       | TLPageBlockPullQuote
                       | TLPageBlockAnimation
                       | TLPageBlockAudio
                       | TLPageBlockPhoto
                       | TLPageBlockVideo
                       | TLPageBlockVoiceNote
                       | TLPageBlockCover
                       | TLPageBlockEmbedded
                       | TLPageBlockEmbeddedPost
                       | TLPageBlockCollage
                       | TLPageBlockSlideshow
                       | TLPageBlockChatLink
                       | TLPageBlockTable
                       | TLPageBlockDetails
                       | TLPageBlockRelatedArticles
                       | TLPageBlockMap
                       | TLWebPageInstantView
                       | TLWebPage
                       | TLCountryInfo
                       | TLCountries
                       | TLPhoneNumberInfo
                       | TLBankCardActionOpenUrl
                       | TLBankCardInfo
                       | TLAddress
                       | TLLabeledPricePart
                       | TLInvoice
                       | TLOrderInfo
                       | TLShippingOption
                       | TLSavedCredentials
                       | TLInputCredentialsSaved
                       | TLInputCredentialsNew
                       | TLInputCredentialsAndroidPay
                       | TLInputCredentialsApplePay
                       | TLPaymentsProviderStripe
                       | TLPaymentForm
                       | TLValidatedOrderInfo
                       | TLPaymentResult
                       | TLPaymentReceipt
                       | TLDatedFile
                       | TLPassportElementTypePersonalDetails
                       | TLPassportElementTypePassport
                       | TLPassportElementTypeDriverLicense
                       | TLPassportElementTypeIdentityCard
                       | TLPassportElementTypeInternalPassport
                       | TLPassportElementTypeAddress
                       | TLPassportElementTypeUtilityBill
                       | TLPassportElementTypeBankStatement
                       | TLPassportElementTypeRentalAgreement
                       | TLPassportElementTypePassportRegistration
                       | TLPassportElementTypeTemporaryRegistration
                       | TLPassportElementTypePhoneNumber
                       | TLPassportElementTypeEmailAddress
                       | TLDate
                       | TLPersonalDetails
                       | TLIdentityDocument
                       | TLInputIdentityDocument
                       | TLPersonalDocument
                       | TLInputPersonalDocument
                       | TLPassportElementPersonalDetails
                       | TLPassportElementPassport
                       | TLPassportElementDriverLicense
                       | TLPassportElementIdentityCard
                       | TLPassportElementInternalPassport
                       | TLPassportElementAddress
                       | TLPassportElementUtilityBill
                       | TLPassportElementBankStatement
                       | TLPassportElementRentalAgreement
                       | TLPassportElementPassportRegistration
                       | TLPassportElementTemporaryRegistration
                       | TLPassportElementPhoneNumber
                       | TLPassportElementEmailAddress
                       | TLInputPassportElementPersonalDetails
                       | TLInputPassportElementPassport
                       | TLInputPassportElementDriverLicense
                       | TLInputPassportElementIdentityCard
                       | TLInputPassportElementInternalPassport
                       | TLInputPassportElementAddress
                       | TLInputPassportElementUtilityBill
                       | TLInputPassportElementBankStatement
                       | TLInputPassportElementRentalAgreement
                       | TLInputPassportElementPassportRegistration
                       | TLInputPassportElementTemporaryRegistration
                       | TLInputPassportElementPhoneNumber
                       | TLInputPassportElementEmailAddress
                       | TLPassportElements
                       | TLPassportElementErrorSourceUnspecified
                       | TLPassportElementErrorSourceDataField
                       | TLPassportElementErrorSourceFrontSide
                       | TLPassportElementErrorSourceReverseSide
                       | TLPassportElementErrorSourceSelfie
                       | TLPassportElementErrorSourceTranslationFile
                       | TLPassportElementErrorSourceTranslationFiles
                       | TLPassportElementErrorSourceFile
                       | TLPassportElementErrorSourceFiles
                       | TLPassportElementError
                       | TLPassportSuitableElement
                       | TLPassportRequiredElement
                       | TLPassportAuthorizationForm
                       | TLPassportElementsWithErrors
                       | TLEncryptedCredentials
                       | TLEncryptedPassportElement
                       | TLInputPassportElementErrorSourceUnspecified
                       | TLInputPassportElementErrorSourceDataField
                       | TLInputPassportElementErrorSourceFrontSide
                       | TLInputPassportElementErrorSourceReverseSide
                       | TLInputPassportElementErrorSourceSelfie
                       | TLInputPassportElementErrorSourceTranslationFile
                       | TLInputPassportElementErrorSourceTranslationFiles
                       | TLInputPassportElementErrorSourceFile
                       | TLInputPassportElementErrorSourceFiles
                       | TLInputPassportElementError
                       | TLMessageText
                       | TLMessageAnimation
                       | TLMessageAudio
                       | TLMessageDocument
                       | TLMessagePhoto
                       | TLMessageExpiredPhoto
                       | TLMessageSticker
                       | TLMessageVideo
                       | TLMessageExpiredVideo
                       | TLMessageVideoNote
                       | TLMessageVoiceNote
                       | TLMessageLocation
                       | TLMessageVenue
                       | TLMessageContact
                       | TLMessageDice
                       | TLMessageGame
                       | TLMessagePoll
                       | TLMessageInvoice
                       | TLMessageCall
                       | TLMessageBasicGroupChatCreate
                       | TLMessageSupergroupChatCreate
                       | TLMessageChatChangeTitle
                       | TLMessageChatChangePhoto
                       | TLMessageChatDeletePhoto
                       | TLMessageChatAddMembers
                       | TLMessageChatJoinByLink
                       | TLMessageChatDeleteMember
                       | TLMessageChatUpgradeTo
                       | TLMessageChatUpgradeFrom
                       | TLMessagePinMessage
                       | TLMessageScreenshotTaken
                       | TLMessageChatSetTtl
                       | TLMessageCustomServiceAction
                       | TLMessageGameScore
                       | TLMessagePaymentSuccessful
                       | TLMessagePaymentSuccessfulBot
                       | TLMessageContactRegistered
                       | TLMessageWebsiteConnected
                       | TLMessagePassportDataSent
                       | TLMessagePassportDataReceived
                       | TLMessageProximityAlertTriggered
                       | TLMessageUnsupported
                       | TLTextEntityTypeMention
                       | TLTextEntityTypeHashtag
                       | TLTextEntityTypeCashtag
                       | TLTextEntityTypeBotCommand
                       | TLTextEntityTypeUrl
                       | TLTextEntityTypeEmailAddress
                       | TLTextEntityTypePhoneNumber
                       | TLTextEntityTypeBankCardNumber
                       | TLTextEntityTypeBold
                       | TLTextEntityTypeItalic
                       | TLTextEntityTypeUnderline
                       | TLTextEntityTypeStrikethrough
                       | TLTextEntityTypeCode
                       | TLTextEntityTypePre
                       | TLTextEntityTypePreCode
                       | TLTextEntityTypeTextUrl
                       | TLTextEntityTypeMentionName
                       | TLInputThumbnail
                       | TLMessageSchedulingStateSendAtDate
                       | TLMessageSchedulingStateSendWhenOnline
                       | TLMessageSendOptions
                       | TLMessageCopyOptions
                       | TLInputMessageText
                       | TLInputMessageAnimation
                       | TLInputMessageAudio
                       | TLInputMessageDocument
                       | TLInputMessagePhoto
                       | TLInputMessageSticker
                       | TLInputMessageVideo
                       | TLInputMessageVideoNote
                       | TLInputMessageVoiceNote
                       | TLInputMessageLocation
                       | TLInputMessageVenue
                       | TLInputMessageContact
                       | TLInputMessageDice
                       | TLInputMessageGame
                       | TLInputMessageInvoice
                       | TLInputMessagePoll
                       | TLInputMessageForwarded
                       | TLSearchMessagesFilterEmpty
                       | TLSearchMessagesFilterAnimation
                       | TLSearchMessagesFilterAudio
                       | TLSearchMessagesFilterDocument
                       | TLSearchMessagesFilterPhoto
                       | TLSearchMessagesFilterVideo
                       | TLSearchMessagesFilterVoiceNote
                       | TLSearchMessagesFilterPhotoAndVideo
                       | TLSearchMessagesFilterUrl
                       | TLSearchMessagesFilterChatPhoto
                       | TLSearchMessagesFilterCall
                       | TLSearchMessagesFilterMissedCall
                       | TLSearchMessagesFilterVideoNote
                       | TLSearchMessagesFilterVoiceAndVideoNote
                       | TLSearchMessagesFilterMention
                       | TLSearchMessagesFilterUnreadMention
                       | TLSearchMessagesFilterFailedToSend
                       | TLSearchMessagesFilterPinned
                       | TLChatActionTyping
                       | TLChatActionRecordingVideo
                       | TLChatActionUploadingVideo
                       | TLChatActionRecordingVoiceNote
                       | TLChatActionUploadingVoiceNote
                       | TLChatActionUploadingPhoto
                       | TLChatActionUploadingDocument
                       | TLChatActionChoosingLocation
                       | TLChatActionChoosingContact
                       | TLChatActionStartPlayingGame
                       | TLChatActionRecordingVideoNote
                       | TLChatActionUploadingVideoNote
                       | TLChatActionCancel
                       | TLUserStatusEmpty
                       | TLUserStatusOnline
                       | TLUserStatusOffline
                       | TLUserStatusRecently
                       | TLUserStatusLastWeek
                       | TLUserStatusLastMonth
                       | TLStickers
                       | TLEmojis
                       | TLStickerSet
                       | TLStickerSetInfo
                       | TLStickerSets
                       | TLCallDiscardReasonEmpty
                       | TLCallDiscardReasonMissed
                       | TLCallDiscardReasonDeclined
                       | TLCallDiscardReasonDisconnected
                       | TLCallDiscardReasonHungUp
                       | TLCallProtocol
                       | TLCallServerTypeTelegramReflector
                       | TLCallServerTypeWebrtc
                       | TLCallServer
                       | TLCallId
                       | TLCallStatePending
                       | TLCallStateExchangingKeys
                       | TLCallStateReady
                       | TLCallStateHangingUp
                       | TLCallStateDiscarded
                       | TLCallStateError
                       | TLCallProblemEcho
                       | TLCallProblemNoise
                       | TLCallProblemInterruptions
                       | TLCallProblemDistortedSpeech
                       | TLCallProblemSilentLocal
                       | TLCallProblemSilentRemote
                       | TLCallProblemDropped
                       | TLCallProblemDistortedVideo
                       | TLCallProblemPixelatedVideo
                       | TLCall
                       | TLPhoneNumberAuthenticationSettings
                       | TLAnimations
                       | TLDiceStickersRegular
                       | TLDiceStickersSlotMachine
                       | TLImportedContacts
                       | TLHttpUrl
                       | TLInputInlineQueryResultAnimation
                       | TLInputInlineQueryResultArticle
                       | TLInputInlineQueryResultAudio
                       | TLInputInlineQueryResultContact
                       | TLInputInlineQueryResultDocument
                       | TLInputInlineQueryResultGame
                       | TLInputInlineQueryResultLocation
                       | TLInputInlineQueryResultPhoto
                       | TLInputInlineQueryResultSticker
                       | TLInputInlineQueryResultVenue
                       | TLInputInlineQueryResultVideo
                       | TLInputInlineQueryResultVoiceNote
                       | TLInlineQueryResultArticle
                       | TLInlineQueryResultContact
                       | TLInlineQueryResultLocation
                       | TLInlineQueryResultVenue
                       | TLInlineQueryResultGame
                       | TLInlineQueryResultAnimation
                       | TLInlineQueryResultAudio
                       | TLInlineQueryResultDocument
                       | TLInlineQueryResultPhoto
                       | TLInlineQueryResultSticker
                       | TLInlineQueryResultVideo
                       | TLInlineQueryResultVoiceNote
                       | TLInlineQueryResults
                       | TLCallbackQueryPayloadData
                       | TLCallbackQueryPayloadDataWithPassword
                       | TLCallbackQueryPayloadGame
                       | TLCallbackQueryAnswer
                       | TLCustomRequestResult
                       | TLGameHighScore
                       | TLGameHighScores
                       | TLChatEventMessageEdited
                       | TLChatEventMessageDeleted
                       | TLChatEventPollStopped
                       | TLChatEventMessagePinned
                       | TLChatEventMessageUnpinned
                       | TLChatEventMemberJoined
                       | TLChatEventMemberLeft
                       | TLChatEventMemberInvited
                       | TLChatEventMemberPromoted
                       | TLChatEventMemberRestricted
                       | TLChatEventTitleChanged
                       | TLChatEventPermissionsChanged
                       | TLChatEventDescriptionChanged
                       | TLChatEventUsernameChanged
                       | TLChatEventPhotoChanged
                       | TLChatEventInvitesToggled
                       | TLChatEventLinkedChatChanged
                       | TLChatEventSlowModeDelayChanged
                       | TLChatEventSignMessagesToggled
                       | TLChatEventStickerSetChanged
                       | TLChatEventLocationChanged
                       | TLChatEventIsAllHistoryAvailableToggled
                       | TLChatEvent
                       | TLChatEvents
                       | TLChatEventLogFilters
                       | TLLanguagePackStringValueOrdinary
                       | TLLanguagePackStringValuePluralized
                       | TLLanguagePackStringValueDeleted
                       | TLLanguagePackString
                       | TLLanguagePackStrings
                       | TLLanguagePackInfo
                       | TLLocalizationTargetInfo
                       | TLDeviceTokenFirebaseCloudMessaging
                       | TLDeviceTokenApplePush
                       | TLDeviceTokenApplePushVoIP
                       | TLDeviceTokenWindowsPush
                       | TLDeviceTokenMicrosoftPush
                       | TLDeviceTokenMicrosoftPushVoIP
                       | TLDeviceTokenWebPush
                       | TLDeviceTokenSimplePush
                       | TLDeviceTokenUbuntuPush
                       | TLDeviceTokenBlackBerryPush
                       | TLDeviceTokenTizenPush
                       | TLPushReceiverId
                       | TLBackgroundFillSolid
                       | TLBackgroundFillGradient
                       | TLBackgroundTypeWallpaper
                       | TLBackgroundTypePattern
                       | TLBackgroundTypeFill
                       | TLBackground
                       | TLBackgrounds
                       | TLInputBackgroundLocal
                       | TLInputBackgroundRemote
                       | TLHashtags
                       | TLCanTransferOwnershipResultOk
                       | TLCanTransferOwnershipResultPasswordNeeded
                       | TLCanTransferOwnershipResultPasswordTooFresh
                       | TLCanTransferOwnershipResultSessionTooFresh
                       | TLCheckChatUsernameResultOk
                       | TLCheckChatUsernameResultUsernameInvalid
                       | TLCheckChatUsernameResultUsernameOccupied
                       | TLCheckChatUsernameResultPublicChatsTooMuch
                       | TLCheckChatUsernameResultPublicGroupsUnavailable
                       | TLPushMessageContentHidden
                       | TLPushMessageContentAnimation
                       | TLPushMessageContentAudio
                       | TLPushMessageContentContact
                       | TLPushMessageContentContactRegistered
                       | TLPushMessageContentDocument
                       | TLPushMessageContentGame
                       | TLPushMessageContentGameScore
                       | TLPushMessageContentInvoice
                       | TLPushMessageContentLocation
                       | TLPushMessageContentPhoto
                       | TLPushMessageContentPoll
                       | TLPushMessageContentScreenshotTaken
                       | TLPushMessageContentSticker
                       | TLPushMessageContentText
                       | TLPushMessageContentVideo
                       | TLPushMessageContentVideoNote
                       | TLPushMessageContentVoiceNote
                       | TLPushMessageContentBasicGroupChatCreate
                       | TLPushMessageContentChatAddMembers
                       | TLPushMessageContentChatChangePhoto
                       | TLPushMessageContentChatChangeTitle
                       | TLPushMessageContentChatDeleteMember
                       | TLPushMessageContentChatJoinByLink
                       | TLPushMessageContentMessageForwards
                       | TLPushMessageContentMediaAlbum
                       | TLNotificationTypeNewMessage
                       | TLNotificationTypeNewSecretChat
                       | TLNotificationTypeNewCall
                       | TLNotificationTypeNewPushMessage
                       | TLNotificationGroupTypeMessages
                       | TLNotificationGroupTypeMentions
                       | TLNotificationGroupTypeSecretChat
                       | TLNotificationGroupTypeCalls
                       | TLNotification
                       | TLNotificationGroup
                       | TLOptionValueBoolean
                       | TLOptionValueEmpty
                       | TLOptionValueInteger
                       | TLOptionValueString
                       | TLJsonObjectMember
                       | TLJsonValueNull
                       | TLJsonValueBoolean
                       | TLJsonValueNumber
                       | TLJsonValueString
                       | TLJsonValueArray
                       | TLJsonValueObject
                       | TLUserPrivacySettingRuleAllowAll
                       | TLUserPrivacySettingRuleAllowContacts
                       | TLUserPrivacySettingRuleAllowUsers
                       | TLUserPrivacySettingRuleAllowChatMembers
                       | TLUserPrivacySettingRuleRestrictAll
                       | TLUserPrivacySettingRuleRestrictContacts
                       | TLUserPrivacySettingRuleRestrictUsers
                       | TLUserPrivacySettingRuleRestrictChatMembers
                       | TLUserPrivacySettingRules
                       | TLUserPrivacySettingShowStatus
                       | TLUserPrivacySettingShowProfilePhoto
                       | TLUserPrivacySettingShowLinkInForwardedMessages
                       | TLUserPrivacySettingShowPhoneNumber
                       | TLUserPrivacySettingAllowChatInvites
                       | TLUserPrivacySettingAllowCalls
                       | TLUserPrivacySettingAllowPeerToPeerCalls
                       | TLUserPrivacySettingAllowFindingByPhoneNumber
                       | TLAccountTtl
                       | TLSession
                       | TLSessions
                       | TLConnectedWebsite
                       | TLConnectedWebsites
                       | TLChatReportReasonSpam
                       | TLChatReportReasonViolence
                       | TLChatReportReasonPornography
                       | TLChatReportReasonChildAbuse
                       | TLChatReportReasonCopyright
                       | TLChatReportReasonUnrelatedLocation
                       | TLChatReportReasonCustom
                       | TLMessageLink
                       | TLMessageLinkInfo
                       | TLFilePart
                       | TLFileTypeNone
                       | TLFileTypeAnimation
                       | TLFileTypeAudio
                       | TLFileTypeDocument
                       | TLFileTypePhoto
                       | TLFileTypeProfilePhoto
                       | TLFileTypeSecret
                       | TLFileTypeSecretThumbnail
                       | TLFileTypeSecure
                       | TLFileTypeSticker
                       | TLFileTypeThumbnail
                       | TLFileTypeUnknown
                       | TLFileTypeVideo
                       | TLFileTypeVideoNote
                       | TLFileTypeVoiceNote
                       | TLFileTypeWallpaper
                       | TLStorageStatisticsByFileType
                       | TLStorageStatisticsByChat
                       | TLStorageStatistics
                       | TLStorageStatisticsFast
                       | TLDatabaseStatistics
                       | TLNetworkTypeNone
                       | TLNetworkTypeMobile
                       | TLNetworkTypeMobileRoaming
                       | TLNetworkTypeWiFi
                       | TLNetworkTypeOther
                       | TLNetworkStatisticsEntryFile
                       | TLNetworkStatisticsEntryCall
                       | TLNetworkStatistics
                       | TLAutoDownloadSettings
                       | TLAutoDownloadSettingsPresets
                       | TLConnectionStateWaitingForNetwork
                       | TLConnectionStateConnectingToProxy
                       | TLConnectionStateConnecting
                       | TLConnectionStateUpdating
                       | TLConnectionStateReady
                       | TLTopChatCategoryUsers
                       | TLTopChatCategoryBots
                       | TLTopChatCategoryGroups
                       | TLTopChatCategoryChannels
                       | TLTopChatCategoryInlineBots
                       | TLTopChatCategoryCalls
                       | TLTopChatCategoryForwardChats
                       | TLTMeUrlTypeUser
                       | TLTMeUrlTypeSupergroup
                       | TLTMeUrlTypeChatInvite
                       | TLTMeUrlTypeStickerSet
                       | TLTMeUrl
                       | TLTMeUrls
                       | TLSuggestedActionEnableArchiveAndMuteNewChats
                       | TLSuggestedActionCheckPhoneNumber
                       | TLCount
                       | TLText
                       | TLSeconds
                       | TLDeepLinkInfo
                       | TLTextParseModeMarkdown
                       | TLTextParseModeHTML
                       | TLProxyTypeSocks5
                       | TLProxyTypeHttp
                       | TLProxyTypeMtproto
                       | TLProxy
                       | TLProxies
                       | TLInputStickerStatic
                       | TLInputStickerAnimated
                       | TLDateRange
                       | TLStatisticsValue
                       | TLStatisticsGraphData
                       | TLStatisticsGraphAsync
                       | TLStatisticsGraphError
                       | TLChatStatisticsMessageInteractionInfo
                       | TLChatStatisticsMessageSenderInfo
                       | TLChatStatisticsAdministratorActionsInfo
                       | TLChatStatisticsInviterInfo
                       | TLChatStatisticsSupergroup
                       | TLChatStatisticsChannel
                       | TLMessageStatistics
                       | TLUpdateAuthorizationState
                       | TLUpdateNewMessage
                       | TLUpdateMessageSendAcknowledged
                       | TLUpdateMessageSendSucceeded
                       | TLUpdateMessageSendFailed
                       | TLUpdateMessageContent
                       | TLUpdateMessageEdited
                       | TLUpdateMessageIsPinned
                       | TLUpdateMessageInteractionInfo
                       | TLUpdateMessageContentOpened
                       | TLUpdateMessageMentionRead
                       | TLUpdateMessageLiveLocationViewed
                       | TLUpdateNewChat
                       | TLUpdateChatTitle
                       | TLUpdateChatPhoto
                       | TLUpdateChatPermissions
                       | TLUpdateChatLastMessage
                       | TLUpdateChatPosition
                       | TLUpdateChatIsMarkedAsUnread
                       | TLUpdateChatIsBlocked
                       | TLUpdateChatHasScheduledMessages
                       | TLUpdateChatDefaultDisableNotification
                       | TLUpdateChatReadInbox
                       | TLUpdateChatReadOutbox
                       | TLUpdateChatUnreadMentionCount
                       | TLUpdateChatNotificationSettings
                       | TLUpdateScopeNotificationSettings
                       | TLUpdateChatActionBar
                       | TLUpdateChatReplyMarkup
                       | TLUpdateChatDraftMessage
                       | TLUpdateChatFilters
                       | TLUpdateChatOnlineMemberCount
                       | TLUpdateNotification
                       | TLUpdateNotificationGroup
                       | TLUpdateActiveNotifications
                       | TLUpdateHavePendingNotifications
                       | TLUpdateDeleteMessages
                       | TLUpdateUserChatAction
                       | TLUpdateUserStatus
                       | TLUpdateUser
                       | TLUpdateBasicGroup
                       | TLUpdateSupergroup
                       | TLUpdateSecretChat
                       | TLUpdateUserFullInfo
                       | TLUpdateBasicGroupFullInfo
                       | TLUpdateSupergroupFullInfo
                       | TLUpdateServiceNotification
                       | TLUpdateFile
                       | TLUpdateFileGenerationStart
                       | TLUpdateFileGenerationStop
                       | TLUpdateCall
                       | TLUpdateNewCallSignalingData
                       | TLUpdateUserPrivacySettingRules
                       | TLUpdateUnreadMessageCount
                       | TLUpdateUnreadChatCount
                       | TLUpdateOption
                       | TLUpdateStickerSet
                       | TLUpdateInstalledStickerSets
                       | TLUpdateTrendingStickerSets
                       | TLUpdateRecentStickers
                       | TLUpdateFavoriteStickers
                       | TLUpdateSavedAnimations
                       | TLUpdateSelectedBackground
                       | TLUpdateLanguagePackStrings
                       | TLUpdateConnectionState
                       | TLUpdateTermsOfService
                       | TLUpdateUsersNearby
                       | TLUpdateDiceEmojis
                       | TLUpdateAnimationSearchParameters
                       | TLUpdateSuggestedActions
                       | TLUpdateNewInlineQuery
                       | TLUpdateNewChosenInlineResult
                       | TLUpdateNewCallbackQuery
                       | TLUpdateNewInlineCallbackQuery
                       | TLUpdateNewShippingQuery
                       | TLUpdateNewPreCheckoutQuery
                       | TLUpdateNewCustomEvent
                       | TLUpdateNewCustomQuery
                       | TLUpdatePoll
                       | TLUpdatePollAnswer
                       | TLUpdates
                       | TLLogStreamDefault
                       | TLLogStreamFile
                       | TLLogStreamEmpty
                       | TLLogVerbosityLevel
                       | TLLogTags
                       | TLTestInt
                       | TLTestString
                       | TLTestBytes
                       | TLTestVectorInt
                       | TLTestVectorIntObject
                       | TLTestVectorString
                       | TLTestVectorStringObject
