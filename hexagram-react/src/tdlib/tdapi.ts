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

export interface TLObject {
	readonly "@type": "error" |
	"ok" |
	"tdlibParameters" |
	"authenticationCodeTypeTelegramMessage" |
	"authenticationCodeTypeSms" |
	"authenticationCodeTypeCall" |
	"authenticationCodeTypeFlashCall" |
	"authenticationCodeInfo" |
	"emailAddressAuthenticationCodeInfo" |
	"textEntity" |
	"textEntities" |
	"formattedText" |
	"termsOfService" |
	"authorizationStateWaitTdlibParameters" |
	"authorizationStateWaitEncryptionKey" |
	"authorizationStateWaitPhoneNumber" |
	"authorizationStateWaitCode" |
	"authorizationStateWaitOtherDeviceConfirmation" |
	"authorizationStateWaitRegistration" |
	"authorizationStateWaitPassword" |
	"authorizationStateReady" |
	"authorizationStateLoggingOut" |
	"authorizationStateClosing" |
	"authorizationStateClosed" |
	"passwordState" |
	"recoveryEmailAddress" |
	"temporaryPasswordState" |
	"localFile" |
	"remoteFile" |
	"file" |
	"inputFileId" |
	"inputFileRemote" |
	"inputFileLocal" |
	"inputFileGenerated" |
	"photoSize" |
	"minithumbnail" |
	"thumbnailFormatJpeg" |
	"thumbnailFormatPng" |
	"thumbnailFormatWebp" |
	"thumbnailFormatGif" |
	"thumbnailFormatTgs" |
	"thumbnailFormatMpeg4" |
	"thumbnail" |
	"maskPointForehead" |
	"maskPointEyes" |
	"maskPointMouth" |
	"maskPointChin" |
	"maskPosition" |
	"pollOption" |
	"pollTypeRegular" |
	"pollTypeQuiz" |
	"animation" |
	"audio" |
	"document" |
	"photo" |
	"sticker" |
	"video" |
	"videoNote" |
	"voiceNote" |
	"contact" |
	"location" |
	"venue" |
	"game" |
	"poll" |
	"profilePhoto" |
	"chatPhotoInfo" |
	"userTypeRegular" |
	"userTypeDeleted" |
	"userTypeBot" |
	"userTypeUnknown" |
	"botCommand" |
	"botInfo" |
	"chatLocation" |
	"animatedChatPhoto" |
	"chatPhoto" |
	"chatPhotos" |
	"inputChatPhotoPrevious" |
	"inputChatPhotoStatic" |
	"inputChatPhotoAnimation" |
	"user" |
	"userFullInfo" |
	"users" |
	"chatAdministrator" |
	"chatAdministrators" |
	"chatPermissions" |
	"chatMemberStatusCreator" |
	"chatMemberStatusAdministrator" |
	"chatMemberStatusMember" |
	"chatMemberStatusRestricted" |
	"chatMemberStatusLeft" |
	"chatMemberStatusBanned" |
	"chatMember" |
	"chatMembers" |
	"chatMembersFilterContacts" |
	"chatMembersFilterAdministrators" |
	"chatMembersFilterMembers" |
	"chatMembersFilterMention" |
	"chatMembersFilterRestricted" |
	"chatMembersFilterBanned" |
	"chatMembersFilterBots" |
	"supergroupMembersFilterRecent" |
	"supergroupMembersFilterContacts" |
	"supergroupMembersFilterAdministrators" |
	"supergroupMembersFilterSearch" |
	"supergroupMembersFilterRestricted" |
	"supergroupMembersFilterBanned" |
	"supergroupMembersFilterMention" |
	"supergroupMembersFilterBots" |
	"basicGroup" |
	"basicGroupFullInfo" |
	"supergroup" |
	"supergroupFullInfo" |
	"secretChatStatePending" |
	"secretChatStateReady" |
	"secretChatStateClosed" |
	"secretChat" |
	"messageSenderUser" |
	"messageSenderChat" |
	"messageSenders" |
	"messageForwardOriginUser" |
	"messageForwardOriginChat" |
	"messageForwardOriginHiddenUser" |
	"messageForwardOriginChannel" |
	"messageForwardInfo" |
	"messageReplyInfo" |
	"messageInteractionInfo" |
	"messageSendingStatePending" |
	"messageSendingStateFailed" |
	"message" |
	"messages" |
	"foundMessages" |
	"notificationSettingsScopePrivateChats" |
	"notificationSettingsScopeGroupChats" |
	"notificationSettingsScopeChannelChats" |
	"chatNotificationSettings" |
	"scopeNotificationSettings" |
	"draftMessage" |
	"chatTypePrivate" |
	"chatTypeBasicGroup" |
	"chatTypeSupergroup" |
	"chatTypeSecret" |
	"chatFilter" |
	"chatFilterInfo" |
	"recommendedChatFilter" |
	"recommendedChatFilters" |
	"chatListMain" |
	"chatListArchive" |
	"chatListFilter" |
	"chatLists" |
	"chatSourceMtprotoProxy" |
	"chatSourcePublicServiceAnnouncement" |
	"chatPosition" |
	"chat" |
	"chats" |
	"chatNearby" |
	"chatsNearby" |
	"chatInviteLink" |
	"chatInviteLinkInfo" |
	"publicChatTypeHasUsername" |
	"publicChatTypeIsLocationBased" |
	"chatActionBarReportSpam" |
	"chatActionBarReportUnrelatedLocation" |
	"chatActionBarReportAddBlock" |
	"chatActionBarAddContact" |
	"chatActionBarSharePhoneNumber" |
	"keyboardButtonTypeText" |
	"keyboardButtonTypeRequestPhoneNumber" |
	"keyboardButtonTypeRequestLocation" |
	"keyboardButtonTypeRequestPoll" |
	"keyboardButton" |
	"inlineKeyboardButtonTypeUrl" |
	"inlineKeyboardButtonTypeLoginUrl" |
	"inlineKeyboardButtonTypeCallback" |
	"inlineKeyboardButtonTypeCallbackWithPassword" |
	"inlineKeyboardButtonTypeCallbackGame" |
	"inlineKeyboardButtonTypeSwitchInline" |
	"inlineKeyboardButtonTypeBuy" |
	"inlineKeyboardButton" |
	"replyMarkupRemoveKeyboard" |
	"replyMarkupForceReply" |
	"replyMarkupShowKeyboard" |
	"replyMarkupInlineKeyboard" |
	"loginUrlInfoOpen" |
	"loginUrlInfoRequestConfirmation" |
	"messageThreadInfo" |
	"richTextPlain" |
	"richTextBold" |
	"richTextItalic" |
	"richTextUnderline" |
	"richTextStrikethrough" |
	"richTextFixed" |
	"richTextUrl" |
	"richTextEmailAddress" |
	"richTextSubscript" |
	"richTextSuperscript" |
	"richTextMarked" |
	"richTextPhoneNumber" |
	"richTextIcon" |
	"richTextReference" |
	"richTextAnchor" |
	"richTextAnchorLink" |
	"richTexts" |
	"pageBlockCaption" |
	"pageBlockListItem" |
	"pageBlockHorizontalAlignmentLeft" |
	"pageBlockHorizontalAlignmentCenter" |
	"pageBlockHorizontalAlignmentRight" |
	"pageBlockVerticalAlignmentTop" |
	"pageBlockVerticalAlignmentMiddle" |
	"pageBlockVerticalAlignmentBottom" |
	"pageBlockTableCell" |
	"pageBlockRelatedArticle" |
	"pageBlockTitle" |
	"pageBlockSubtitle" |
	"pageBlockAuthorDate" |
	"pageBlockHeader" |
	"pageBlockSubheader" |
	"pageBlockKicker" |
	"pageBlockParagraph" |
	"pageBlockPreformatted" |
	"pageBlockFooter" |
	"pageBlockDivider" |
	"pageBlockAnchor" |
	"pageBlockList" |
	"pageBlockBlockQuote" |
	"pageBlockPullQuote" |
	"pageBlockAnimation" |
	"pageBlockAudio" |
	"pageBlockPhoto" |
	"pageBlockVideo" |
	"pageBlockVoiceNote" |
	"pageBlockCover" |
	"pageBlockEmbedded" |
	"pageBlockEmbeddedPost" |
	"pageBlockCollage" |
	"pageBlockSlideshow" |
	"pageBlockChatLink" |
	"pageBlockTable" |
	"pageBlockDetails" |
	"pageBlockRelatedArticles" |
	"pageBlockMap" |
	"webPageInstantView" |
	"webPage" |
	"countryInfo" |
	"countries" |
	"phoneNumberInfo" |
	"bankCardActionOpenUrl" |
	"bankCardInfo" |
	"address" |
	"labeledPricePart" |
	"invoice" |
	"orderInfo" |
	"shippingOption" |
	"savedCredentials" |
	"inputCredentialsSaved" |
	"inputCredentialsNew" |
	"inputCredentialsAndroidPay" |
	"inputCredentialsApplePay" |
	"paymentsProviderStripe" |
	"paymentForm" |
	"validatedOrderInfo" |
	"paymentResult" |
	"paymentReceipt" |
	"datedFile" |
	"passportElementTypePersonalDetails" |
	"passportElementTypePassport" |
	"passportElementTypeDriverLicense" |
	"passportElementTypeIdentityCard" |
	"passportElementTypeInternalPassport" |
	"passportElementTypeAddress" |
	"passportElementTypeUtilityBill" |
	"passportElementTypeBankStatement" |
	"passportElementTypeRentalAgreement" |
	"passportElementTypePassportRegistration" |
	"passportElementTypeTemporaryRegistration" |
	"passportElementTypePhoneNumber" |
	"passportElementTypeEmailAddress" |
	"date" |
	"personalDetails" |
	"identityDocument" |
	"inputIdentityDocument" |
	"personalDocument" |
	"inputPersonalDocument" |
	"passportElementPersonalDetails" |
	"passportElementPassport" |
	"passportElementDriverLicense" |
	"passportElementIdentityCard" |
	"passportElementInternalPassport" |
	"passportElementAddress" |
	"passportElementUtilityBill" |
	"passportElementBankStatement" |
	"passportElementRentalAgreement" |
	"passportElementPassportRegistration" |
	"passportElementTemporaryRegistration" |
	"passportElementPhoneNumber" |
	"passportElementEmailAddress" |
	"inputPassportElementPersonalDetails" |
	"inputPassportElementPassport" |
	"inputPassportElementDriverLicense" |
	"inputPassportElementIdentityCard" |
	"inputPassportElementInternalPassport" |
	"inputPassportElementAddress" |
	"inputPassportElementUtilityBill" |
	"inputPassportElementBankStatement" |
	"inputPassportElementRentalAgreement" |
	"inputPassportElementPassportRegistration" |
	"inputPassportElementTemporaryRegistration" |
	"inputPassportElementPhoneNumber" |
	"inputPassportElementEmailAddress" |
	"passportElements" |
	"passportElementErrorSourceUnspecified" |
	"passportElementErrorSourceDataField" |
	"passportElementErrorSourceFrontSide" |
	"passportElementErrorSourceReverseSide" |
	"passportElementErrorSourceSelfie" |
	"passportElementErrorSourceTranslationFile" |
	"passportElementErrorSourceTranslationFiles" |
	"passportElementErrorSourceFile" |
	"passportElementErrorSourceFiles" |
	"passportElementError" |
	"passportSuitableElement" |
	"passportRequiredElement" |
	"passportAuthorizationForm" |
	"passportElementsWithErrors" |
	"encryptedCredentials" |
	"encryptedPassportElement" |
	"inputPassportElementErrorSourceUnspecified" |
	"inputPassportElementErrorSourceDataField" |
	"inputPassportElementErrorSourceFrontSide" |
	"inputPassportElementErrorSourceReverseSide" |
	"inputPassportElementErrorSourceSelfie" |
	"inputPassportElementErrorSourceTranslationFile" |
	"inputPassportElementErrorSourceTranslationFiles" |
	"inputPassportElementErrorSourceFile" |
	"inputPassportElementErrorSourceFiles" |
	"inputPassportElementError" |
	"messageText" |
	"messageAnimation" |
	"messageAudio" |
	"messageDocument" |
	"messagePhoto" |
	"messageExpiredPhoto" |
	"messageSticker" |
	"messageVideo" |
	"messageExpiredVideo" |
	"messageVideoNote" |
	"messageVoiceNote" |
	"messageLocation" |
	"messageVenue" |
	"messageContact" |
	"messageDice" |
	"messageGame" |
	"messagePoll" |
	"messageInvoice" |
	"messageCall" |
	"messageBasicGroupChatCreate" |
	"messageSupergroupChatCreate" |
	"messageChatChangeTitle" |
	"messageChatChangePhoto" |
	"messageChatDeletePhoto" |
	"messageChatAddMembers" |
	"messageChatJoinByLink" |
	"messageChatDeleteMember" |
	"messageChatUpgradeTo" |
	"messageChatUpgradeFrom" |
	"messagePinMessage" |
	"messageScreenshotTaken" |
	"messageChatSetTtl" |
	"messageCustomServiceAction" |
	"messageGameScore" |
	"messagePaymentSuccessful" |
	"messagePaymentSuccessfulBot" |
	"messageContactRegistered" |
	"messageWebsiteConnected" |
	"messagePassportDataSent" |
	"messagePassportDataReceived" |
	"messageProximityAlertTriggered" |
	"messageUnsupported" |
	"textEntityTypeMention" |
	"textEntityTypeHashtag" |
	"textEntityTypeCashtag" |
	"textEntityTypeBotCommand" |
	"textEntityTypeUrl" |
	"textEntityTypeEmailAddress" |
	"textEntityTypePhoneNumber" |
	"textEntityTypeBankCardNumber" |
	"textEntityTypeBold" |
	"textEntityTypeItalic" |
	"textEntityTypeUnderline" |
	"textEntityTypeStrikethrough" |
	"textEntityTypeCode" |
	"textEntityTypePre" |
	"textEntityTypePreCode" |
	"textEntityTypeTextUrl" |
	"textEntityTypeMentionName" |
	"inputThumbnail" |
	"messageSchedulingStateSendAtDate" |
	"messageSchedulingStateSendWhenOnline" |
	"messageSendOptions" |
	"messageCopyOptions" |
	"inputMessageText" |
	"inputMessageAnimation" |
	"inputMessageAudio" |
	"inputMessageDocument" |
	"inputMessagePhoto" |
	"inputMessageSticker" |
	"inputMessageVideo" |
	"inputMessageVideoNote" |
	"inputMessageVoiceNote" |
	"inputMessageLocation" |
	"inputMessageVenue" |
	"inputMessageContact" |
	"inputMessageDice" |
	"inputMessageGame" |
	"inputMessageInvoice" |
	"inputMessagePoll" |
	"inputMessageForwarded" |
	"searchMessagesFilterEmpty" |
	"searchMessagesFilterAnimation" |
	"searchMessagesFilterAudio" |
	"searchMessagesFilterDocument" |
	"searchMessagesFilterPhoto" |
	"searchMessagesFilterVideo" |
	"searchMessagesFilterVoiceNote" |
	"searchMessagesFilterPhotoAndVideo" |
	"searchMessagesFilterUrl" |
	"searchMessagesFilterChatPhoto" |
	"searchMessagesFilterCall" |
	"searchMessagesFilterMissedCall" |
	"searchMessagesFilterVideoNote" |
	"searchMessagesFilterVoiceAndVideoNote" |
	"searchMessagesFilterMention" |
	"searchMessagesFilterUnreadMention" |
	"searchMessagesFilterFailedToSend" |
	"searchMessagesFilterPinned" |
	"chatActionTyping" |
	"chatActionRecordingVideo" |
	"chatActionUploadingVideo" |
	"chatActionRecordingVoiceNote" |
	"chatActionUploadingVoiceNote" |
	"chatActionUploadingPhoto" |
	"chatActionUploadingDocument" |
	"chatActionChoosingLocation" |
	"chatActionChoosingContact" |
	"chatActionStartPlayingGame" |
	"chatActionRecordingVideoNote" |
	"chatActionUploadingVideoNote" |
	"chatActionCancel" |
	"userStatusEmpty" |
	"userStatusOnline" |
	"userStatusOffline" |
	"userStatusRecently" |
	"userStatusLastWeek" |
	"userStatusLastMonth" |
	"stickers" |
	"emojis" |
	"stickerSet" |
	"stickerSetInfo" |
	"stickerSets" |
	"callDiscardReasonEmpty" |
	"callDiscardReasonMissed" |
	"callDiscardReasonDeclined" |
	"callDiscardReasonDisconnected" |
	"callDiscardReasonHungUp" |
	"callProtocol" |
	"callServerTypeTelegramReflector" |
	"callServerTypeWebrtc" |
	"callServer" |
	"callId" |
	"callStatePending" |
	"callStateExchangingKeys" |
	"callStateReady" |
	"callStateHangingUp" |
	"callStateDiscarded" |
	"callStateError" |
	"callProblemEcho" |
	"callProblemNoise" |
	"callProblemInterruptions" |
	"callProblemDistortedSpeech" |
	"callProblemSilentLocal" |
	"callProblemSilentRemote" |
	"callProblemDropped" |
	"callProblemDistortedVideo" |
	"callProblemPixelatedVideo" |
	"call" |
	"phoneNumberAuthenticationSettings" |
	"animations" |
	"diceStickersRegular" |
	"diceStickersSlotMachine" |
	"importedContacts" |
	"httpUrl" |
	"inputInlineQueryResultAnimation" |
	"inputInlineQueryResultArticle" |
	"inputInlineQueryResultAudio" |
	"inputInlineQueryResultContact" |
	"inputInlineQueryResultDocument" |
	"inputInlineQueryResultGame" |
	"inputInlineQueryResultLocation" |
	"inputInlineQueryResultPhoto" |
	"inputInlineQueryResultSticker" |
	"inputInlineQueryResultVenue" |
	"inputInlineQueryResultVideo" |
	"inputInlineQueryResultVoiceNote" |
	"inlineQueryResultArticle" |
	"inlineQueryResultContact" |
	"inlineQueryResultLocation" |
	"inlineQueryResultVenue" |
	"inlineQueryResultGame" |
	"inlineQueryResultAnimation" |
	"inlineQueryResultAudio" |
	"inlineQueryResultDocument" |
	"inlineQueryResultPhoto" |
	"inlineQueryResultSticker" |
	"inlineQueryResultVideo" |
	"inlineQueryResultVoiceNote" |
	"inlineQueryResults" |
	"callbackQueryPayloadData" |
	"callbackQueryPayloadDataWithPassword" |
	"callbackQueryPayloadGame" |
	"callbackQueryAnswer" |
	"customRequestResult" |
	"gameHighScore" |
	"gameHighScores" |
	"chatEventMessageEdited" |
	"chatEventMessageDeleted" |
	"chatEventPollStopped" |
	"chatEventMessagePinned" |
	"chatEventMessageUnpinned" |
	"chatEventMemberJoined" |
	"chatEventMemberLeft" |
	"chatEventMemberInvited" |
	"chatEventMemberPromoted" |
	"chatEventMemberRestricted" |
	"chatEventTitleChanged" |
	"chatEventPermissionsChanged" |
	"chatEventDescriptionChanged" |
	"chatEventUsernameChanged" |
	"chatEventPhotoChanged" |
	"chatEventInvitesToggled" |
	"chatEventLinkedChatChanged" |
	"chatEventSlowModeDelayChanged" |
	"chatEventSignMessagesToggled" |
	"chatEventStickerSetChanged" |
	"chatEventLocationChanged" |
	"chatEventIsAllHistoryAvailableToggled" |
	"chatEvent" |
	"chatEvents" |
	"chatEventLogFilters" |
	"languagePackStringValueOrdinary" |
	"languagePackStringValuePluralized" |
	"languagePackStringValueDeleted" |
	"languagePackString" |
	"languagePackStrings" |
	"languagePackInfo" |
	"localizationTargetInfo" |
	"deviceTokenFirebaseCloudMessaging" |
	"deviceTokenApplePush" |
	"deviceTokenApplePushVoIP" |
	"deviceTokenWindowsPush" |
	"deviceTokenMicrosoftPush" |
	"deviceTokenMicrosoftPushVoIP" |
	"deviceTokenWebPush" |
	"deviceTokenSimplePush" |
	"deviceTokenUbuntuPush" |
	"deviceTokenBlackBerryPush" |
	"deviceTokenTizenPush" |
	"pushReceiverId" |
	"backgroundFillSolid" |
	"backgroundFillGradient" |
	"backgroundTypeWallpaper" |
	"backgroundTypePattern" |
	"backgroundTypeFill" |
	"background" |
	"backgrounds" |
	"inputBackgroundLocal" |
	"inputBackgroundRemote" |
	"hashtags" |
	"canTransferOwnershipResultOk" |
	"canTransferOwnershipResultPasswordNeeded" |
	"canTransferOwnershipResultPasswordTooFresh" |
	"canTransferOwnershipResultSessionTooFresh" |
	"checkChatUsernameResultOk" |
	"checkChatUsernameResultUsernameInvalid" |
	"checkChatUsernameResultUsernameOccupied" |
	"checkChatUsernameResultPublicChatsTooMuch" |
	"checkChatUsernameResultPublicGroupsUnavailable" |
	"pushMessageContentHidden" |
	"pushMessageContentAnimation" |
	"pushMessageContentAudio" |
	"pushMessageContentContact" |
	"pushMessageContentContactRegistered" |
	"pushMessageContentDocument" |
	"pushMessageContentGame" |
	"pushMessageContentGameScore" |
	"pushMessageContentInvoice" |
	"pushMessageContentLocation" |
	"pushMessageContentPhoto" |
	"pushMessageContentPoll" |
	"pushMessageContentScreenshotTaken" |
	"pushMessageContentSticker" |
	"pushMessageContentText" |
	"pushMessageContentVideo" |
	"pushMessageContentVideoNote" |
	"pushMessageContentVoiceNote" |
	"pushMessageContentBasicGroupChatCreate" |
	"pushMessageContentChatAddMembers" |
	"pushMessageContentChatChangePhoto" |
	"pushMessageContentChatChangeTitle" |
	"pushMessageContentChatDeleteMember" |
	"pushMessageContentChatJoinByLink" |
	"pushMessageContentMessageForwards" |
	"pushMessageContentMediaAlbum" |
	"notificationTypeNewMessage" |
	"notificationTypeNewSecretChat" |
	"notificationTypeNewCall" |
	"notificationTypeNewPushMessage" |
	"notificationGroupTypeMessages" |
	"notificationGroupTypeMentions" |
	"notificationGroupTypeSecretChat" |
	"notificationGroupTypeCalls" |
	"notification" |
	"notificationGroup" |
	"optionValueBoolean" |
	"optionValueEmpty" |
	"optionValueInteger" |
	"optionValueString" |
	"jsonObjectMember" |
	"jsonValueNull" |
	"jsonValueBoolean" |
	"jsonValueNumber" |
	"jsonValueString" |
	"jsonValueArray" |
	"jsonValueObject" |
	"userPrivacySettingRuleAllowAll" |
	"userPrivacySettingRuleAllowContacts" |
	"userPrivacySettingRuleAllowUsers" |
	"userPrivacySettingRuleAllowChatMembers" |
	"userPrivacySettingRuleRestrictAll" |
	"userPrivacySettingRuleRestrictContacts" |
	"userPrivacySettingRuleRestrictUsers" |
	"userPrivacySettingRuleRestrictChatMembers" |
	"userPrivacySettingRules" |
	"userPrivacySettingShowStatus" |
	"userPrivacySettingShowProfilePhoto" |
	"userPrivacySettingShowLinkInForwardedMessages" |
	"userPrivacySettingShowPhoneNumber" |
	"userPrivacySettingAllowChatInvites" |
	"userPrivacySettingAllowCalls" |
	"userPrivacySettingAllowPeerToPeerCalls" |
	"userPrivacySettingAllowFindingByPhoneNumber" |
	"accountTtl" |
	"session" |
	"sessions" |
	"connectedWebsite" |
	"connectedWebsites" |
	"chatReportReasonSpam" |
	"chatReportReasonViolence" |
	"chatReportReasonPornography" |
	"chatReportReasonChildAbuse" |
	"chatReportReasonCopyright" |
	"chatReportReasonUnrelatedLocation" |
	"chatReportReasonCustom" |
	"messageLink" |
	"messageLinkInfo" |
	"filePart" |
	"fileTypeNone" |
	"fileTypeAnimation" |
	"fileTypeAudio" |
	"fileTypeDocument" |
	"fileTypePhoto" |
	"fileTypeProfilePhoto" |
	"fileTypeSecret" |
	"fileTypeSecretThumbnail" |
	"fileTypeSecure" |
	"fileTypeSticker" |
	"fileTypeThumbnail" |
	"fileTypeUnknown" |
	"fileTypeVideo" |
	"fileTypeVideoNote" |
	"fileTypeVoiceNote" |
	"fileTypeWallpaper" |
	"storageStatisticsByFileType" |
	"storageStatisticsByChat" |
	"storageStatistics" |
	"storageStatisticsFast" |
	"databaseStatistics" |
	"networkTypeNone" |
	"networkTypeMobile" |
	"networkTypeMobileRoaming" |
	"networkTypeWiFi" |
	"networkTypeOther" |
	"networkStatisticsEntryFile" |
	"networkStatisticsEntryCall" |
	"networkStatistics" |
	"autoDownloadSettings" |
	"autoDownloadSettingsPresets" |
	"connectionStateWaitingForNetwork" |
	"connectionStateConnectingToProxy" |
	"connectionStateConnecting" |
	"connectionStateUpdating" |
	"connectionStateReady" |
	"topChatCategoryUsers" |
	"topChatCategoryBots" |
	"topChatCategoryGroups" |
	"topChatCategoryChannels" |
	"topChatCategoryInlineBots" |
	"topChatCategoryCalls" |
	"topChatCategoryForwardChats" |
	"tMeUrlTypeUser" |
	"tMeUrlTypeSupergroup" |
	"tMeUrlTypeChatInvite" |
	"tMeUrlTypeStickerSet" |
	"tMeUrl" |
	"tMeUrls" |
	"suggestedActionEnableArchiveAndMuteNewChats" |
	"suggestedActionCheckPhoneNumber" |
	"count" |
	"text" |
	"seconds" |
	"deepLinkInfo" |
	"textParseModeMarkdown" |
	"textParseModeHTML" |
	"proxyTypeSocks5" |
	"proxyTypeHttp" |
	"proxyTypeMtproto" |
	"proxy" |
	"proxies" |
	"inputStickerStatic" |
	"inputStickerAnimated" |
	"dateRange" |
	"statisticsValue" |
	"statisticsGraphData" |
	"statisticsGraphAsync" |
	"statisticsGraphError" |
	"chatStatisticsMessageInteractionInfo" |
	"chatStatisticsMessageSenderInfo" |
	"chatStatisticsAdministratorActionsInfo" |
	"chatStatisticsInviterInfo" |
	"chatStatisticsSupergroup" |
	"chatStatisticsChannel" |
	"messageStatistics" |
	"updateAuthorizationState" |
	"updateNewMessage" |
	"updateMessageSendAcknowledged" |
	"updateMessageSendSucceeded" |
	"updateMessageSendFailed" |
	"updateMessageContent" |
	"updateMessageEdited" |
	"updateMessageIsPinned" |
	"updateMessageInteractionInfo" |
	"updateMessageContentOpened" |
	"updateMessageMentionRead" |
	"updateMessageLiveLocationViewed" |
	"updateNewChat" |
	"updateChatTitle" |
	"updateChatPhoto" |
	"updateChatPermissions" |
	"updateChatLastMessage" |
	"updateChatPosition" |
	"updateChatIsMarkedAsUnread" |
	"updateChatIsBlocked" |
	"updateChatHasScheduledMessages" |
	"updateChatDefaultDisableNotification" |
	"updateChatReadInbox" |
	"updateChatReadOutbox" |
	"updateChatUnreadMentionCount" |
	"updateChatNotificationSettings" |
	"updateScopeNotificationSettings" |
	"updateChatActionBar" |
	"updateChatReplyMarkup" |
	"updateChatDraftMessage" |
	"updateChatFilters" |
	"updateChatOnlineMemberCount" |
	"updateNotification" |
	"updateNotificationGroup" |
	"updateActiveNotifications" |
	"updateHavePendingNotifications" |
	"updateDeleteMessages" |
	"updateUserChatAction" |
	"updateUserStatus" |
	"updateUser" |
	"updateBasicGroup" |
	"updateSupergroup" |
	"updateSecretChat" |
	"updateUserFullInfo" |
	"updateBasicGroupFullInfo" |
	"updateSupergroupFullInfo" |
	"updateServiceNotification" |
	"updateFile" |
	"updateFileGenerationStart" |
	"updateFileGenerationStop" |
	"updateCall" |
	"updateNewCallSignalingData" |
	"updateUserPrivacySettingRules" |
	"updateUnreadMessageCount" |
	"updateUnreadChatCount" |
	"updateOption" |
	"updateStickerSet" |
	"updateInstalledStickerSets" |
	"updateTrendingStickerSets" |
	"updateRecentStickers" |
	"updateFavoriteStickers" |
	"updateSavedAnimations" |
	"updateSelectedBackground" |
	"updateLanguagePackStrings" |
	"updateConnectionState" |
	"updateTermsOfService" |
	"updateUsersNearby" |
	"updateDiceEmojis" |
	"updateAnimationSearchParameters" |
	"updateSuggestedActions" |
	"updateNewInlineQuery" |
	"updateNewChosenInlineResult" |
	"updateNewCallbackQuery" |
	"updateNewInlineCallbackQuery" |
	"updateNewShippingQuery" |
	"updateNewPreCheckoutQuery" |
	"updateNewCustomEvent" |
	"updateNewCustomQuery" |
	"updatePoll" |
	"updatePollAnswer" |
	"updates" |
	"logStreamDefault" |
	"logStreamFile" |
	"logStreamEmpty" |
	"logVerbosityLevel" |
	"logTags" |
	"testInt" |
	"testString" |
	"testBytes" |
	"testVectorInt" |
	"testVectorIntObject" |
	"testVectorString" |
	"testVectorStringObject"
}
// TDLib
export interface TLError extends TLObject {
	readonly "@type": "error"
	readonly code: number
	readonly message: string
}
export function error(object: TLObject): TLError { return object as TLError }
export interface TLOk extends TLObject {
	readonly "@type": "ok"
}
export function ok(object: TLObject): TLOk { return object as TLOk }
export interface TLTdlibParameters extends TLObject {
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
export function tdlibParameters(object: TLObject): TLTdlibParameters { return object as TLTdlibParameters }
export interface TLAuthenticationCodeTypeTelegramMessage extends TLObject {
	readonly "@type": "authenticationCodeTypeTelegramMessage"
	readonly length: number
}
export function authenticationCodeTypeTelegramMessage(object: TLObject): TLAuthenticationCodeTypeTelegramMessage { return object as TLAuthenticationCodeTypeTelegramMessage }
export interface TLAuthenticationCodeTypeSms extends TLObject {
	readonly "@type": "authenticationCodeTypeSms"
	readonly length: number
}
export function authenticationCodeTypeSms(object: TLObject): TLAuthenticationCodeTypeSms { return object as TLAuthenticationCodeTypeSms }
export interface TLAuthenticationCodeTypeCall extends TLObject {
	readonly "@type": "authenticationCodeTypeCall"
	readonly length: number
}
export function authenticationCodeTypeCall(object: TLObject): TLAuthenticationCodeTypeCall { return object as TLAuthenticationCodeTypeCall }
export interface TLAuthenticationCodeTypeFlashCall extends TLObject {
	readonly "@type": "authenticationCodeTypeFlashCall"
	readonly pattern: string
}
export function authenticationCodeTypeFlashCall(object: TLObject): TLAuthenticationCodeTypeFlashCall { return object as TLAuthenticationCodeTypeFlashCall }
export type TLAuthenticationCodeType = TLAuthenticationCodeTypeTelegramMessage | TLAuthenticationCodeTypeSms | TLAuthenticationCodeTypeCall | TLAuthenticationCodeTypeFlashCall
export interface TLAuthenticationCodeInfo extends TLObject {
	readonly "@type": "authenticationCodeInfo"
	readonly phone_number: string
	readonly type: TLAuthenticationCodeType
	readonly next_type: TLAuthenticationCodeType
	readonly timeout: number
}
export function authenticationCodeInfo(object: TLObject): TLAuthenticationCodeInfo { return object as TLAuthenticationCodeInfo }
export interface TLEmailAddressAuthenticationCodeInfo extends TLObject {
	readonly "@type": "emailAddressAuthenticationCodeInfo"
	readonly email_address_pattern: string
	readonly length: number
}
export function emailAddressAuthenticationCodeInfo(object: TLObject): TLEmailAddressAuthenticationCodeInfo { return object as TLEmailAddressAuthenticationCodeInfo }
export interface TLTextEntity extends TLObject {
	readonly "@type": "textEntity"
	readonly offset: number
	readonly length: number
	readonly type: TLTextEntityType
}
export function textEntity(object: TLObject): TLTextEntity { return object as TLTextEntity }
export interface TLTextEntities extends TLObject {
	readonly "@type": "textEntities"
	readonly entities: ReadonlyArray<TLTextEntity>
}
export function textEntities(object: TLObject): TLTextEntities { return object as TLTextEntities }
export interface TLFormattedText extends TLObject {
	readonly "@type": "formattedText"
	readonly text: string
	readonly entities: ReadonlyArray<TLTextEntity>
}
export function formattedText(object: TLObject): TLFormattedText { return object as TLFormattedText }
export interface TLTermsOfService extends TLObject {
	readonly "@type": "termsOfService"
	readonly text: TLFormattedText
	readonly min_user_age: number
	readonly show_popup: boolean
}
export function termsOfService(object: TLObject): TLTermsOfService { return object as TLTermsOfService }
export interface TLAuthorizationStateWaitTdlibParameters extends TLObject {
	readonly "@type": "authorizationStateWaitTdlibParameters"
}
export function authorizationStateWaitTdlibParameters(object: TLObject): TLAuthorizationStateWaitTdlibParameters { return object as TLAuthorizationStateWaitTdlibParameters }
export interface TLAuthorizationStateWaitEncryptionKey extends TLObject {
	readonly "@type": "authorizationStateWaitEncryptionKey"
	readonly is_encrypted: boolean
}
export function authorizationStateWaitEncryptionKey(object: TLObject): TLAuthorizationStateWaitEncryptionKey { return object as TLAuthorizationStateWaitEncryptionKey }
export interface TLAuthorizationStateWaitPhoneNumber extends TLObject {
	readonly "@type": "authorizationStateWaitPhoneNumber"
}
export function authorizationStateWaitPhoneNumber(object: TLObject): TLAuthorizationStateWaitPhoneNumber { return object as TLAuthorizationStateWaitPhoneNumber }
export interface TLAuthorizationStateWaitCode extends TLObject {
	readonly "@type": "authorizationStateWaitCode"
	readonly code_info: TLAuthenticationCodeInfo
}
export function authorizationStateWaitCode(object: TLObject): TLAuthorizationStateWaitCode { return object as TLAuthorizationStateWaitCode }
export interface TLAuthorizationStateWaitOtherDeviceConfirmation extends TLObject {
	readonly "@type": "authorizationStateWaitOtherDeviceConfirmation"
	readonly link: string
}
export function authorizationStateWaitOtherDeviceConfirmation(object: TLObject): TLAuthorizationStateWaitOtherDeviceConfirmation { return object as TLAuthorizationStateWaitOtherDeviceConfirmation }
export interface TLAuthorizationStateWaitRegistration extends TLObject {
	readonly "@type": "authorizationStateWaitRegistration"
	readonly terms_of_service: TLTermsOfService
}
export function authorizationStateWaitRegistration(object: TLObject): TLAuthorizationStateWaitRegistration { return object as TLAuthorizationStateWaitRegistration }
export interface TLAuthorizationStateWaitPassword extends TLObject {
	readonly "@type": "authorizationStateWaitPassword"
	readonly password_hint: string
	readonly has_recovery_email_address: boolean
	readonly recovery_email_address_pattern: string
}
export function authorizationStateWaitPassword(object: TLObject): TLAuthorizationStateWaitPassword { return object as TLAuthorizationStateWaitPassword }
export interface TLAuthorizationStateReady extends TLObject {
	readonly "@type": "authorizationStateReady"
}
export function authorizationStateReady(object: TLObject): TLAuthorizationStateReady { return object as TLAuthorizationStateReady }
export interface TLAuthorizationStateLoggingOut extends TLObject {
	readonly "@type": "authorizationStateLoggingOut"
}
export function authorizationStateLoggingOut(object: TLObject): TLAuthorizationStateLoggingOut { return object as TLAuthorizationStateLoggingOut }
export interface TLAuthorizationStateClosing extends TLObject {
	readonly "@type": "authorizationStateClosing"
}
export function authorizationStateClosing(object: TLObject): TLAuthorizationStateClosing { return object as TLAuthorizationStateClosing }
export interface TLAuthorizationStateClosed extends TLObject {
	readonly "@type": "authorizationStateClosed"
}
export function authorizationStateClosed(object: TLObject): TLAuthorizationStateClosed { return object as TLAuthorizationStateClosed }
export type TLAuthorizationState = TLAuthorizationStateWaitTdlibParameters | TLAuthorizationStateWaitEncryptionKey | TLAuthorizationStateWaitPhoneNumber | TLAuthorizationStateWaitCode | TLAuthorizationStateWaitOtherDeviceConfirmation | TLAuthorizationStateWaitRegistration | TLAuthorizationStateWaitPassword | TLAuthorizationStateReady | TLAuthorizationStateLoggingOut | TLAuthorizationStateClosing | TLAuthorizationStateClosed
export interface TLPasswordState extends TLObject {
	readonly "@type": "passwordState"
	readonly has_password: boolean
	readonly password_hint: string
	readonly has_recovery_email_address: boolean
	readonly has_passport_data: boolean
	readonly recovery_email_address_code_info: TLEmailAddressAuthenticationCodeInfo
}
export function passwordState(object: TLObject): TLPasswordState { return object as TLPasswordState }
export interface TLRecoveryEmailAddress extends TLObject {
	readonly "@type": "recoveryEmailAddress"
	readonly recovery_email_address: string
}
export function recoveryEmailAddress(object: TLObject): TLRecoveryEmailAddress { return object as TLRecoveryEmailAddress }
export interface TLTemporaryPasswordState extends TLObject {
	readonly "@type": "temporaryPasswordState"
	readonly has_password: boolean
	readonly valid_for: number
}
export function temporaryPasswordState(object: TLObject): TLTemporaryPasswordState { return object as TLTemporaryPasswordState }
export interface TLLocalFile extends TLObject {
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
export function localFile(object: TLObject): TLLocalFile { return object as TLLocalFile }
export interface TLRemoteFile extends TLObject {
	readonly "@type": "remoteFile"
	readonly id: string
	readonly unique_id: string
	readonly is_uploading_active: boolean
	readonly is_uploading_completed: boolean
	readonly uploaded_size: number
}
export function remoteFile(object: TLObject): TLRemoteFile { return object as TLRemoteFile }
export interface TLFile extends TLObject {
	readonly "@type": "file"
	readonly id: number
	readonly size: number
	readonly expected_size: number
	readonly local: TLLocalFile
	readonly remote: TLRemoteFile
}
export function file(object: TLObject): TLFile { return object as TLFile }
export interface TLInputFileId extends TLObject {
	readonly "@type": "inputFileId"
	readonly id: number
}
export function inputFileId(object: TLObject): TLInputFileId { return object as TLInputFileId }
export interface TLInputFileRemote extends TLObject {
	readonly "@type": "inputFileRemote"
	readonly id: string
}
export function inputFileRemote(object: TLObject): TLInputFileRemote { return object as TLInputFileRemote }
export interface TLInputFileLocal extends TLObject {
	readonly "@type": "inputFileLocal"
	readonly path: string
}
export function inputFileLocal(object: TLObject): TLInputFileLocal { return object as TLInputFileLocal }
export interface TLInputFileGenerated extends TLObject {
	readonly "@type": "inputFileGenerated"
	readonly original_path: string
	readonly conversion: string
	readonly expected_size: number
}
export function inputFileGenerated(object: TLObject): TLInputFileGenerated { return object as TLInputFileGenerated }
export type TLInputFile = TLInputFileId | TLInputFileRemote | TLInputFileLocal | TLInputFileGenerated
export interface TLPhotoSize extends TLObject {
	readonly "@type": "photoSize"
	readonly type: string
	readonly photo: TLFile
	readonly width: number
	readonly height: number
	readonly progressive_sizes: ReadonlyArray<number>
}
export function photoSize(object: TLObject): TLPhotoSize { return object as TLPhotoSize }
export interface TLMinithumbnail extends TLObject {
	readonly "@type": "minithumbnail"
	readonly width: number
	readonly height: number
	readonly data: Uint8Array
}
export function minithumbnail(object: TLObject): TLMinithumbnail { return object as TLMinithumbnail }
export interface TLThumbnailFormatJpeg extends TLObject {
	readonly "@type": "thumbnailFormatJpeg"
}
export function thumbnailFormatJpeg(object: TLObject): TLThumbnailFormatJpeg { return object as TLThumbnailFormatJpeg }
export interface TLThumbnailFormatPng extends TLObject {
	readonly "@type": "thumbnailFormatPng"
}
export function thumbnailFormatPng(object: TLObject): TLThumbnailFormatPng { return object as TLThumbnailFormatPng }
export interface TLThumbnailFormatWebp extends TLObject {
	readonly "@type": "thumbnailFormatWebp"
}
export function thumbnailFormatWebp(object: TLObject): TLThumbnailFormatWebp { return object as TLThumbnailFormatWebp }
export interface TLThumbnailFormatGif extends TLObject {
	readonly "@type": "thumbnailFormatGif"
}
export function thumbnailFormatGif(object: TLObject): TLThumbnailFormatGif { return object as TLThumbnailFormatGif }
export interface TLThumbnailFormatTgs extends TLObject {
	readonly "@type": "thumbnailFormatTgs"
}
export function thumbnailFormatTgs(object: TLObject): TLThumbnailFormatTgs { return object as TLThumbnailFormatTgs }
export interface TLThumbnailFormatMpeg4 extends TLObject {
	readonly "@type": "thumbnailFormatMpeg4"
}
export function thumbnailFormatMpeg4(object: TLObject): TLThumbnailFormatMpeg4 { return object as TLThumbnailFormatMpeg4 }
export type TLThumbnailFormat = TLThumbnailFormatJpeg | TLThumbnailFormatPng | TLThumbnailFormatWebp | TLThumbnailFormatGif | TLThumbnailFormatTgs | TLThumbnailFormatMpeg4
export interface TLThumbnail extends TLObject {
	readonly "@type": "thumbnail"
	readonly format: TLThumbnailFormat
	readonly width: number
	readonly height: number
	readonly file: TLFile
}
export function thumbnail(object: TLObject): TLThumbnail { return object as TLThumbnail }
export interface TLMaskPointForehead extends TLObject {
	readonly "@type": "maskPointForehead"
}
export function maskPointForehead(object: TLObject): TLMaskPointForehead { return object as TLMaskPointForehead }
export interface TLMaskPointEyes extends TLObject {
	readonly "@type": "maskPointEyes"
}
export function maskPointEyes(object: TLObject): TLMaskPointEyes { return object as TLMaskPointEyes }
export interface TLMaskPointMouth extends TLObject {
	readonly "@type": "maskPointMouth"
}
export function maskPointMouth(object: TLObject): TLMaskPointMouth { return object as TLMaskPointMouth }
export interface TLMaskPointChin extends TLObject {
	readonly "@type": "maskPointChin"
}
export function maskPointChin(object: TLObject): TLMaskPointChin { return object as TLMaskPointChin }
export type TLMaskPoint = TLMaskPointForehead | TLMaskPointEyes | TLMaskPointMouth | TLMaskPointChin
export interface TLMaskPosition extends TLObject {
	readonly "@type": "maskPosition"
	readonly point: TLMaskPoint
	readonly x_shift: number
	readonly y_shift: number
	readonly scale: number
}
export function maskPosition(object: TLObject): TLMaskPosition { return object as TLMaskPosition }
export interface TLPollOption extends TLObject {
	readonly "@type": "pollOption"
	readonly text: string
	readonly voter_count: number
	readonly vote_percentage: number
	readonly is_chosen: boolean
	readonly is_being_chosen: boolean
}
export function pollOption(object: TLObject): TLPollOption { return object as TLPollOption }
export interface TLPollTypeRegular extends TLObject {
	readonly "@type": "pollTypeRegular"
	readonly allow_multiple_answers: boolean
}
export function pollTypeRegular(object: TLObject): TLPollTypeRegular { return object as TLPollTypeRegular }
export interface TLPollTypeQuiz extends TLObject {
	readonly "@type": "pollTypeQuiz"
	readonly correct_option_id: number
	readonly explanation: TLFormattedText
}
export function pollTypeQuiz(object: TLObject): TLPollTypeQuiz { return object as TLPollTypeQuiz }
export type TLPollType = TLPollTypeRegular | TLPollTypeQuiz
export interface TLAnimation extends TLObject {
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
export function animation(object: TLObject): TLAnimation { return object as TLAnimation }
export interface TLAudio extends TLObject {
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
export function audio(object: TLObject): TLAudio { return object as TLAudio }
export interface TLDocument extends TLObject {
	readonly "@type": "document"
	readonly file_name: string
	readonly mime_type: string
	readonly minithumbnail: TLMinithumbnail
	readonly thumbnail: TLThumbnail
	readonly document: TLFile
}
export function document(object: TLObject): TLDocument { return object as TLDocument }
export interface TLPhoto extends TLObject {
	readonly "@type": "photo"
	readonly has_stickers: boolean
	readonly minithumbnail: TLMinithumbnail
	readonly sizes: ReadonlyArray<TLPhotoSize>
}
export function photo(object: TLObject): TLPhoto { return object as TLPhoto }
export interface TLSticker extends TLObject {
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
export function sticker(object: TLObject): TLSticker { return object as TLSticker }
export interface TLVideo extends TLObject {
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
export function video(object: TLObject): TLVideo { return object as TLVideo }
export interface TLVideoNote extends TLObject {
	readonly "@type": "videoNote"
	readonly duration: number
	readonly length: number
	readonly minithumbnail: TLMinithumbnail
	readonly thumbnail: TLThumbnail
	readonly video: TLFile
}
export function videoNote(object: TLObject): TLVideoNote { return object as TLVideoNote }
export interface TLVoiceNote extends TLObject {
	readonly "@type": "voiceNote"
	readonly duration: number
	readonly waveform: Uint8Array
	readonly mime_type: string
	readonly voice: TLFile
}
export function voiceNote(object: TLObject): TLVoiceNote { return object as TLVoiceNote }
export interface TLContact extends TLObject {
	readonly "@type": "contact"
	readonly phone_number: string
	readonly first_name: string
	readonly last_name: string
	readonly vcard: string
	readonly user_id: number
}
export function contact(object: TLObject): TLContact { return object as TLContact }
export interface TLLocation extends TLObject {
	readonly "@type": "location"
	readonly latitude: number
	readonly longitude: number
	readonly horizontal_accuracy: number
}
export function location(object: TLObject): TLLocation { return object as TLLocation }
export interface TLVenue extends TLObject {
	readonly "@type": "venue"
	readonly location: TLLocation
	readonly title: string
	readonly address: string
	readonly provider: string
	readonly id: string
	readonly type: string
}
export function venue(object: TLObject): TLVenue { return object as TLVenue }
export interface TLGame extends TLObject {
	readonly "@type": "game"
	readonly id: string
	readonly short_name: string
	readonly title: string
	readonly text: TLFormattedText
	readonly description: string
	readonly photo: TLPhoto
	readonly animation: TLAnimation
}
export function game(object: TLObject): TLGame { return object as TLGame }
export interface TLPoll extends TLObject {
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
export function poll(object: TLObject): TLPoll { return object as TLPoll }
export interface TLProfilePhoto extends TLObject {
	readonly "@type": "profilePhoto"
	readonly id: string
	readonly small: TLFile
	readonly big: TLFile
	readonly has_animation: boolean
}
export function profilePhoto(object: TLObject): TLProfilePhoto { return object as TLProfilePhoto }
export interface TLChatPhotoInfo extends TLObject {
	readonly "@type": "chatPhotoInfo"
	readonly small: TLFile
	readonly big: TLFile
	readonly has_animation: boolean
}
export function chatPhotoInfo(object: TLObject): TLChatPhotoInfo { return object as TLChatPhotoInfo }
export interface TLUserTypeRegular extends TLObject {
	readonly "@type": "userTypeRegular"
}
export function userTypeRegular(object: TLObject): TLUserTypeRegular { return object as TLUserTypeRegular }
export interface TLUserTypeDeleted extends TLObject {
	readonly "@type": "userTypeDeleted"
}
export function userTypeDeleted(object: TLObject): TLUserTypeDeleted { return object as TLUserTypeDeleted }
export interface TLUserTypeBot extends TLObject {
	readonly "@type": "userTypeBot"
	readonly can_join_groups: boolean
	readonly can_read_all_group_messages: boolean
	readonly is_inline: boolean
	readonly inline_query_placeholder: string
	readonly need_location: boolean
}
export function userTypeBot(object: TLObject): TLUserTypeBot { return object as TLUserTypeBot }
export interface TLUserTypeUnknown extends TLObject {
	readonly "@type": "userTypeUnknown"
}
export function userTypeUnknown(object: TLObject): TLUserTypeUnknown { return object as TLUserTypeUnknown }
export type TLUserType = TLUserTypeRegular | TLUserTypeDeleted | TLUserTypeBot | TLUserTypeUnknown
export interface TLBotCommand extends TLObject {
	readonly "@type": "botCommand"
	readonly command: string
	readonly description: string
}
export function botCommand(object: TLObject): TLBotCommand { return object as TLBotCommand }
export interface TLBotInfo extends TLObject {
	readonly "@type": "botInfo"
	readonly description: string
	readonly commands: ReadonlyArray<TLBotCommand>
}
export function botInfo(object: TLObject): TLBotInfo { return object as TLBotInfo }
export interface TLChatLocation extends TLObject {
	readonly "@type": "chatLocation"
	readonly location: TLLocation
	readonly address: string
}
export function chatLocation(object: TLObject): TLChatLocation { return object as TLChatLocation }
export interface TLAnimatedChatPhoto extends TLObject {
	readonly "@type": "animatedChatPhoto"
	readonly length: number
	readonly file: TLFile
	readonly main_frame_timestamp: number
}
export function animatedChatPhoto(object: TLObject): TLAnimatedChatPhoto { return object as TLAnimatedChatPhoto }
export interface TLChatPhoto extends TLObject {
	readonly "@type": "chatPhoto"
	readonly id: string
	readonly added_date: number
	readonly minithumbnail: TLMinithumbnail
	readonly sizes: ReadonlyArray<TLPhotoSize>
	readonly animation: TLAnimatedChatPhoto
}
export function chatPhoto(object: TLObject): TLChatPhoto { return object as TLChatPhoto }
export interface TLChatPhotos extends TLObject {
	readonly "@type": "chatPhotos"
	readonly total_count: number
	readonly photos: ReadonlyArray<TLChatPhoto>
}
export function chatPhotos(object: TLObject): TLChatPhotos { return object as TLChatPhotos }
export interface TLInputChatPhotoPrevious extends TLObject {
	readonly "@type": "inputChatPhotoPrevious"
	readonly chat_photo_id: string
}
export function inputChatPhotoPrevious(object: TLObject): TLInputChatPhotoPrevious { return object as TLInputChatPhotoPrevious }
export interface TLInputChatPhotoStatic extends TLObject {
	readonly "@type": "inputChatPhotoStatic"
	readonly photo: TLInputFile
}
export function inputChatPhotoStatic(object: TLObject): TLInputChatPhotoStatic { return object as TLInputChatPhotoStatic }
export interface TLInputChatPhotoAnimation extends TLObject {
	readonly "@type": "inputChatPhotoAnimation"
	readonly animation: TLInputFile
	readonly main_frame_timestamp: number
}
export function inputChatPhotoAnimation(object: TLObject): TLInputChatPhotoAnimation { return object as TLInputChatPhotoAnimation }
export type TLInputChatPhoto = TLInputChatPhotoPrevious | TLInputChatPhotoStatic | TLInputChatPhotoAnimation
export interface TLUser extends TLObject {
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
export function user(object: TLObject): TLUser { return object as TLUser }
export interface TLUserFullInfo extends TLObject {
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
export function userFullInfo(object: TLObject): TLUserFullInfo { return object as TLUserFullInfo }
export interface TLUsers extends TLObject {
	readonly "@type": "users"
	readonly total_count: number
	readonly user_ids: ReadonlyArray<number>
}
export function users(object: TLObject): TLUsers { return object as TLUsers }
export interface TLChatAdministrator extends TLObject {
	readonly "@type": "chatAdministrator"
	readonly user_id: number
	readonly custom_title: string
	readonly is_owner: boolean
}
export function chatAdministrator(object: TLObject): TLChatAdministrator { return object as TLChatAdministrator }
export interface TLChatAdministrators extends TLObject {
	readonly "@type": "chatAdministrators"
	readonly administrators: ReadonlyArray<TLChatAdministrator>
}
export function chatAdministrators(object: TLObject): TLChatAdministrators { return object as TLChatAdministrators }
export interface TLChatPermissions extends TLObject {
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
export function chatPermissions(object: TLObject): TLChatPermissions { return object as TLChatPermissions }
export interface TLChatMemberStatusCreator extends TLObject {
	readonly "@type": "chatMemberStatusCreator"
	readonly custom_title: string
	readonly is_anonymous: boolean
	readonly is_member: boolean
}
export function chatMemberStatusCreator(object: TLObject): TLChatMemberStatusCreator { return object as TLChatMemberStatusCreator }
export interface TLChatMemberStatusAdministrator extends TLObject {
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
export function chatMemberStatusAdministrator(object: TLObject): TLChatMemberStatusAdministrator { return object as TLChatMemberStatusAdministrator }
export interface TLChatMemberStatusMember extends TLObject {
	readonly "@type": "chatMemberStatusMember"
}
export function chatMemberStatusMember(object: TLObject): TLChatMemberStatusMember { return object as TLChatMemberStatusMember }
export interface TLChatMemberStatusRestricted extends TLObject {
	readonly "@type": "chatMemberStatusRestricted"
	readonly is_member: boolean
	readonly restricted_until_date: number
	readonly permissions: TLChatPermissions
}
export function chatMemberStatusRestricted(object: TLObject): TLChatMemberStatusRestricted { return object as TLChatMemberStatusRestricted }
export interface TLChatMemberStatusLeft extends TLObject {
	readonly "@type": "chatMemberStatusLeft"
}
export function chatMemberStatusLeft(object: TLObject): TLChatMemberStatusLeft { return object as TLChatMemberStatusLeft }
export interface TLChatMemberStatusBanned extends TLObject {
	readonly "@type": "chatMemberStatusBanned"
	readonly banned_until_date: number
}
export function chatMemberStatusBanned(object: TLObject): TLChatMemberStatusBanned { return object as TLChatMemberStatusBanned }
export type TLChatMemberStatus = TLChatMemberStatusCreator | TLChatMemberStatusAdministrator | TLChatMemberStatusMember | TLChatMemberStatusRestricted | TLChatMemberStatusLeft | TLChatMemberStatusBanned
export interface TLChatMember extends TLObject {
	readonly "@type": "chatMember"
	readonly user_id: number
	readonly inviter_user_id: number
	readonly joined_chat_date: number
	readonly status: TLChatMemberStatus
	readonly bot_info: TLBotInfo
}
export function chatMember(object: TLObject): TLChatMember { return object as TLChatMember }
export interface TLChatMembers extends TLObject {
	readonly "@type": "chatMembers"
	readonly total_count: number
	readonly members: ReadonlyArray<TLChatMember>
}
export function chatMembers(object: TLObject): TLChatMembers { return object as TLChatMembers }
export interface TLChatMembersFilterContacts extends TLObject {
	readonly "@type": "chatMembersFilterContacts"
}
export function chatMembersFilterContacts(object: TLObject): TLChatMembersFilterContacts { return object as TLChatMembersFilterContacts }
export interface TLChatMembersFilterAdministrators extends TLObject {
	readonly "@type": "chatMembersFilterAdministrators"
}
export function chatMembersFilterAdministrators(object: TLObject): TLChatMembersFilterAdministrators { return object as TLChatMembersFilterAdministrators }
export interface TLChatMembersFilterMembers extends TLObject {
	readonly "@type": "chatMembersFilterMembers"
}
export function chatMembersFilterMembers(object: TLObject): TLChatMembersFilterMembers { return object as TLChatMembersFilterMembers }
export interface TLChatMembersFilterMention extends TLObject {
	readonly "@type": "chatMembersFilterMention"
	readonly message_thread_id: number
}
export function chatMembersFilterMention(object: TLObject): TLChatMembersFilterMention { return object as TLChatMembersFilterMention }
export interface TLChatMembersFilterRestricted extends TLObject {
	readonly "@type": "chatMembersFilterRestricted"
}
export function chatMembersFilterRestricted(object: TLObject): TLChatMembersFilterRestricted { return object as TLChatMembersFilterRestricted }
export interface TLChatMembersFilterBanned extends TLObject {
	readonly "@type": "chatMembersFilterBanned"
}
export function chatMembersFilterBanned(object: TLObject): TLChatMembersFilterBanned { return object as TLChatMembersFilterBanned }
export interface TLChatMembersFilterBots extends TLObject {
	readonly "@type": "chatMembersFilterBots"
}
export function chatMembersFilterBots(object: TLObject): TLChatMembersFilterBots { return object as TLChatMembersFilterBots }
export type TLChatMembersFilter = TLChatMembersFilterContacts | TLChatMembersFilterAdministrators | TLChatMembersFilterMembers | TLChatMembersFilterMention | TLChatMembersFilterRestricted | TLChatMembersFilterBanned | TLChatMembersFilterBots
export interface TLSupergroupMembersFilterRecent extends TLObject {
	readonly "@type": "supergroupMembersFilterRecent"
}
export function supergroupMembersFilterRecent(object: TLObject): TLSupergroupMembersFilterRecent { return object as TLSupergroupMembersFilterRecent }
export interface TLSupergroupMembersFilterContacts extends TLObject {
	readonly "@type": "supergroupMembersFilterContacts"
	readonly query: string
}
export function supergroupMembersFilterContacts(object: TLObject): TLSupergroupMembersFilterContacts { return object as TLSupergroupMembersFilterContacts }
export interface TLSupergroupMembersFilterAdministrators extends TLObject {
	readonly "@type": "supergroupMembersFilterAdministrators"
}
export function supergroupMembersFilterAdministrators(object: TLObject): TLSupergroupMembersFilterAdministrators { return object as TLSupergroupMembersFilterAdministrators }
export interface TLSupergroupMembersFilterSearch extends TLObject {
	readonly "@type": "supergroupMembersFilterSearch"
	readonly query: string
}
export function supergroupMembersFilterSearch(object: TLObject): TLSupergroupMembersFilterSearch { return object as TLSupergroupMembersFilterSearch }
export interface TLSupergroupMembersFilterRestricted extends TLObject {
	readonly "@type": "supergroupMembersFilterRestricted"
	readonly query: string
}
export function supergroupMembersFilterRestricted(object: TLObject): TLSupergroupMembersFilterRestricted { return object as TLSupergroupMembersFilterRestricted }
export interface TLSupergroupMembersFilterBanned extends TLObject {
	readonly "@type": "supergroupMembersFilterBanned"
	readonly query: string
}
export function supergroupMembersFilterBanned(object: TLObject): TLSupergroupMembersFilterBanned { return object as TLSupergroupMembersFilterBanned }
export interface TLSupergroupMembersFilterMention extends TLObject {
	readonly "@type": "supergroupMembersFilterMention"
	readonly query: string
	readonly message_thread_id: number
}
export function supergroupMembersFilterMention(object: TLObject): TLSupergroupMembersFilterMention { return object as TLSupergroupMembersFilterMention }
export interface TLSupergroupMembersFilterBots extends TLObject {
	readonly "@type": "supergroupMembersFilterBots"
}
export function supergroupMembersFilterBots(object: TLObject): TLSupergroupMembersFilterBots { return object as TLSupergroupMembersFilterBots }
export type TLSupergroupMembersFilter = TLSupergroupMembersFilterRecent | TLSupergroupMembersFilterContacts | TLSupergroupMembersFilterAdministrators | TLSupergroupMembersFilterSearch | TLSupergroupMembersFilterRestricted | TLSupergroupMembersFilterBanned | TLSupergroupMembersFilterMention | TLSupergroupMembersFilterBots
export interface TLBasicGroup extends TLObject {
	readonly "@type": "basicGroup"
	readonly id: number
	readonly member_count: number
	readonly status: TLChatMemberStatus
	readonly is_active: boolean
	readonly upgraded_to_supergroup_id: number
}
export function basicGroup(object: TLObject): TLBasicGroup { return object as TLBasicGroup }
export interface TLBasicGroupFullInfo extends TLObject {
	readonly "@type": "basicGroupFullInfo"
	readonly photo: TLChatPhoto
	readonly description: string
	readonly creator_user_id: number
	readonly members: ReadonlyArray<TLChatMember>
	readonly invite_link: string
}
export function basicGroupFullInfo(object: TLObject): TLBasicGroupFullInfo { return object as TLBasicGroupFullInfo }
export interface TLSupergroup extends TLObject {
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
export function supergroup(object: TLObject): TLSupergroup { return object as TLSupergroup }
export interface TLSupergroupFullInfo extends TLObject {
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
export function supergroupFullInfo(object: TLObject): TLSupergroupFullInfo { return object as TLSupergroupFullInfo }
export interface TLSecretChatStatePending extends TLObject {
	readonly "@type": "secretChatStatePending"
}
export function secretChatStatePending(object: TLObject): TLSecretChatStatePending { return object as TLSecretChatStatePending }
export interface TLSecretChatStateReady extends TLObject {
	readonly "@type": "secretChatStateReady"
}
export function secretChatStateReady(object: TLObject): TLSecretChatStateReady { return object as TLSecretChatStateReady }
export interface TLSecretChatStateClosed extends TLObject {
	readonly "@type": "secretChatStateClosed"
}
export function secretChatStateClosed(object: TLObject): TLSecretChatStateClosed { return object as TLSecretChatStateClosed }
export type TLSecretChatState = TLSecretChatStatePending | TLSecretChatStateReady | TLSecretChatStateClosed
export interface TLSecretChat extends TLObject {
	readonly "@type": "secretChat"
	readonly id: number
	readonly user_id: number
	readonly state: TLSecretChatState
	readonly is_outbound: boolean
	readonly ttl: number
	readonly key_hash: Uint8Array
	readonly layer: number
}
export function secretChat(object: TLObject): TLSecretChat { return object as TLSecretChat }
export interface TLMessageSenderUser extends TLObject {
	readonly "@type": "messageSenderUser"
	readonly user_id: number
}
export function messageSenderUser(object: TLObject): TLMessageSenderUser { return object as TLMessageSenderUser }
export interface TLMessageSenderChat extends TLObject {
	readonly "@type": "messageSenderChat"
	readonly chat_id: number
}
export function messageSenderChat(object: TLObject): TLMessageSenderChat { return object as TLMessageSenderChat }
export type TLMessageSender = TLMessageSenderUser | TLMessageSenderChat
export interface TLMessageSenders extends TLObject {
	readonly "@type": "messageSenders"
	readonly total_count: number
	readonly senders: ReadonlyArray<TLMessageSender>
}
export function messageSenders(object: TLObject): TLMessageSenders { return object as TLMessageSenders }
export interface TLMessageForwardOriginUser extends TLObject {
	readonly "@type": "messageForwardOriginUser"
	readonly sender_user_id: number
}
export function messageForwardOriginUser(object: TLObject): TLMessageForwardOriginUser { return object as TLMessageForwardOriginUser }
export interface TLMessageForwardOriginChat extends TLObject {
	readonly "@type": "messageForwardOriginChat"
	readonly sender_chat_id: number
	readonly author_signature: string
}
export function messageForwardOriginChat(object: TLObject): TLMessageForwardOriginChat { return object as TLMessageForwardOriginChat }
export interface TLMessageForwardOriginHiddenUser extends TLObject {
	readonly "@type": "messageForwardOriginHiddenUser"
	readonly sender_name: string
}
export function messageForwardOriginHiddenUser(object: TLObject): TLMessageForwardOriginHiddenUser { return object as TLMessageForwardOriginHiddenUser }
export interface TLMessageForwardOriginChannel extends TLObject {
	readonly "@type": "messageForwardOriginChannel"
	readonly chat_id: number
	readonly message_id: number
	readonly author_signature: string
}
export function messageForwardOriginChannel(object: TLObject): TLMessageForwardOriginChannel { return object as TLMessageForwardOriginChannel }
export type TLMessageForwardOrigin = TLMessageForwardOriginUser | TLMessageForwardOriginChat | TLMessageForwardOriginHiddenUser | TLMessageForwardOriginChannel
export interface TLMessageForwardInfo extends TLObject {
	readonly "@type": "messageForwardInfo"
	readonly origin: TLMessageForwardOrigin
	readonly date: number
	readonly public_service_announcement_type: string
	readonly from_chat_id: number
	readonly from_message_id: number
}
export function messageForwardInfo(object: TLObject): TLMessageForwardInfo { return object as TLMessageForwardInfo }
export interface TLMessageReplyInfo extends TLObject {
	readonly "@type": "messageReplyInfo"
	readonly reply_count: number
	readonly recent_repliers: ReadonlyArray<TLMessageSender>
	readonly last_read_inbox_message_id: number
	readonly last_read_outbox_message_id: number
	readonly last_message_id: number
}
export function messageReplyInfo(object: TLObject): TLMessageReplyInfo { return object as TLMessageReplyInfo }
export interface TLMessageInteractionInfo extends TLObject {
	readonly "@type": "messageInteractionInfo"
	readonly view_count: number
	readonly forward_count: number
	readonly reply_info: TLMessageReplyInfo
}
export function messageInteractionInfo(object: TLObject): TLMessageInteractionInfo { return object as TLMessageInteractionInfo }
export interface TLMessageSendingStatePending extends TLObject {
	readonly "@type": "messageSendingStatePending"
}
export function messageSendingStatePending(object: TLObject): TLMessageSendingStatePending { return object as TLMessageSendingStatePending }
export interface TLMessageSendingStateFailed extends TLObject {
	readonly "@type": "messageSendingStateFailed"
	readonly error_code: number
	readonly error_message: string
	readonly can_retry: boolean
	readonly retry_after: number
}
export function messageSendingStateFailed(object: TLObject): TLMessageSendingStateFailed { return object as TLMessageSendingStateFailed }
export type TLMessageSendingState = TLMessageSendingStatePending | TLMessageSendingStateFailed
export interface TLMessage extends TLObject {
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
export function message(object: TLObject): TLMessage { return object as TLMessage }
export interface TLMessages extends TLObject {
	readonly "@type": "messages"
	readonly total_count: number
	readonly messages: ReadonlyArray<TLMessage>
}
export function messages(object: TLObject): TLMessages { return object as TLMessages }
export interface TLFoundMessages extends TLObject {
	readonly "@type": "foundMessages"
	readonly total_count: number
	readonly messages: ReadonlyArray<TLMessage>
	readonly next_offset: string
}
export function foundMessages(object: TLObject): TLFoundMessages { return object as TLFoundMessages }
export interface TLNotificationSettingsScopePrivateChats extends TLObject {
	readonly "@type": "notificationSettingsScopePrivateChats"
}
export function notificationSettingsScopePrivateChats(object: TLObject): TLNotificationSettingsScopePrivateChats { return object as TLNotificationSettingsScopePrivateChats }
export interface TLNotificationSettingsScopeGroupChats extends TLObject {
	readonly "@type": "notificationSettingsScopeGroupChats"
}
export function notificationSettingsScopeGroupChats(object: TLObject): TLNotificationSettingsScopeGroupChats { return object as TLNotificationSettingsScopeGroupChats }
export interface TLNotificationSettingsScopeChannelChats extends TLObject {
	readonly "@type": "notificationSettingsScopeChannelChats"
}
export function notificationSettingsScopeChannelChats(object: TLObject): TLNotificationSettingsScopeChannelChats { return object as TLNotificationSettingsScopeChannelChats }
export type TLNotificationSettingsScope = TLNotificationSettingsScopePrivateChats | TLNotificationSettingsScopeGroupChats | TLNotificationSettingsScopeChannelChats
export interface TLChatNotificationSettings extends TLObject {
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
export function chatNotificationSettings(object: TLObject): TLChatNotificationSettings { return object as TLChatNotificationSettings }
export interface TLScopeNotificationSettings extends TLObject {
	readonly "@type": "scopeNotificationSettings"
	readonly mute_for: number
	readonly sound: string
	readonly show_preview: boolean
	readonly disable_pinned_message_notifications: boolean
	readonly disable_mention_notifications: boolean
}
export function scopeNotificationSettings(object: TLObject): TLScopeNotificationSettings { return object as TLScopeNotificationSettings }
export interface TLDraftMessage extends TLObject {
	readonly "@type": "draftMessage"
	readonly reply_to_message_id: number
	readonly date: number
	readonly input_message_text: TLInputMessageContent
}
export function draftMessage(object: TLObject): TLDraftMessage { return object as TLDraftMessage }
export interface TLChatTypePrivate extends TLObject {
	readonly "@type": "chatTypePrivate"
	readonly user_id: number
}
export function chatTypePrivate(object: TLObject): TLChatTypePrivate { return object as TLChatTypePrivate }
export interface TLChatTypeBasicGroup extends TLObject {
	readonly "@type": "chatTypeBasicGroup"
	readonly basic_group_id: number
}
export function chatTypeBasicGroup(object: TLObject): TLChatTypeBasicGroup { return object as TLChatTypeBasicGroup }
export interface TLChatTypeSupergroup extends TLObject {
	readonly "@type": "chatTypeSupergroup"
	readonly supergroup_id: number
	readonly is_channel: boolean
}
export function chatTypeSupergroup(object: TLObject): TLChatTypeSupergroup { return object as TLChatTypeSupergroup }
export interface TLChatTypeSecret extends TLObject {
	readonly "@type": "chatTypeSecret"
	readonly secret_chat_id: number
	readonly user_id: number
}
export function chatTypeSecret(object: TLObject): TLChatTypeSecret { return object as TLChatTypeSecret }
export type TLChatType = TLChatTypePrivate | TLChatTypeBasicGroup | TLChatTypeSupergroup | TLChatTypeSecret
export interface TLChatFilter extends TLObject {
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
export function chatFilter(object: TLObject): TLChatFilter { return object as TLChatFilter }
export interface TLChatFilterInfo extends TLObject {
	readonly "@type": "chatFilterInfo"
	readonly id: number
	readonly title: string
	readonly icon_name: string
}
export function chatFilterInfo(object: TLObject): TLChatFilterInfo { return object as TLChatFilterInfo }
export interface TLRecommendedChatFilter extends TLObject {
	readonly "@type": "recommendedChatFilter"
	readonly filter: TLChatFilter
	readonly description: string
}
export function recommendedChatFilter(object: TLObject): TLRecommendedChatFilter { return object as TLRecommendedChatFilter }
export interface TLRecommendedChatFilters extends TLObject {
	readonly "@type": "recommendedChatFilters"
	readonly chat_filters: ReadonlyArray<TLRecommendedChatFilter>
}
export function recommendedChatFilters(object: TLObject): TLRecommendedChatFilters { return object as TLRecommendedChatFilters }
export interface TLChatListMain extends TLObject {
	readonly "@type": "chatListMain"
}
export function chatListMain(object: TLObject): TLChatListMain { return object as TLChatListMain }
export interface TLChatListArchive extends TLObject {
	readonly "@type": "chatListArchive"
}
export function chatListArchive(object: TLObject): TLChatListArchive { return object as TLChatListArchive }
export interface TLChatListFilter extends TLObject {
	readonly "@type": "chatListFilter"
	readonly chat_filter_id: number
}
export function chatListFilter(object: TLObject): TLChatListFilter { return object as TLChatListFilter }
export type TLChatList = TLChatListMain | TLChatListArchive | TLChatListFilter
export interface TLChatLists extends TLObject {
	readonly "@type": "chatLists"
	readonly chat_lists: ReadonlyArray<TLChatList>
}
export function chatLists(object: TLObject): TLChatLists { return object as TLChatLists }
export interface TLChatSourceMtprotoProxy extends TLObject {
	readonly "@type": "chatSourceMtprotoProxy"
}
export function chatSourceMtprotoProxy(object: TLObject): TLChatSourceMtprotoProxy { return object as TLChatSourceMtprotoProxy }
export interface TLChatSourcePublicServiceAnnouncement extends TLObject {
	readonly "@type": "chatSourcePublicServiceAnnouncement"
	readonly type: string
	readonly text: string
}
export function chatSourcePublicServiceAnnouncement(object: TLObject): TLChatSourcePublicServiceAnnouncement { return object as TLChatSourcePublicServiceAnnouncement }
export type TLChatSource = TLChatSourceMtprotoProxy | TLChatSourcePublicServiceAnnouncement
export interface TLChatPosition extends TLObject {
	readonly "@type": "chatPosition"
	readonly list: TLChatList
	readonly order: string
	readonly is_pinned: boolean
	readonly source: TLChatSource
}
export function chatPosition(object: TLObject): TLChatPosition { return object as TLChatPosition }
export interface TLChat extends TLObject {
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
export function chat(object: TLObject): TLChat { return object as TLChat }
export interface TLChats extends TLObject {
	readonly "@type": "chats"
	readonly total_count: number
	readonly chat_ids: ReadonlyArray<number>
}
export function chats(object: TLObject): TLChats { return object as TLChats }
export interface TLChatNearby extends TLObject {
	readonly "@type": "chatNearby"
	readonly chat_id: number
	readonly distance: number
}
export function chatNearby(object: TLObject): TLChatNearby { return object as TLChatNearby }
export interface TLChatsNearby extends TLObject {
	readonly "@type": "chatsNearby"
	readonly users_nearby: ReadonlyArray<TLChatNearby>
	readonly supergroups_nearby: ReadonlyArray<TLChatNearby>
}
export function chatsNearby(object: TLObject): TLChatsNearby { return object as TLChatsNearby }
export interface TLChatInviteLink extends TLObject {
	readonly "@type": "chatInviteLink"
	readonly invite_link: string
}
export function chatInviteLink(object: TLObject): TLChatInviteLink { return object as TLChatInviteLink }
export interface TLChatInviteLinkInfo extends TLObject {
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
export function chatInviteLinkInfo(object: TLObject): TLChatInviteLinkInfo { return object as TLChatInviteLinkInfo }
export interface TLPublicChatTypeHasUsername extends TLObject {
	readonly "@type": "publicChatTypeHasUsername"
}
export function publicChatTypeHasUsername(object: TLObject): TLPublicChatTypeHasUsername { return object as TLPublicChatTypeHasUsername }
export interface TLPublicChatTypeIsLocationBased extends TLObject {
	readonly "@type": "publicChatTypeIsLocationBased"
}
export function publicChatTypeIsLocationBased(object: TLObject): TLPublicChatTypeIsLocationBased { return object as TLPublicChatTypeIsLocationBased }
export type TLPublicChatType = TLPublicChatTypeHasUsername | TLPublicChatTypeIsLocationBased
export interface TLChatActionBarReportSpam extends TLObject {
	readonly "@type": "chatActionBarReportSpam"
	readonly can_unarchive: boolean
}
export function chatActionBarReportSpam(object: TLObject): TLChatActionBarReportSpam { return object as TLChatActionBarReportSpam }
export interface TLChatActionBarReportUnrelatedLocation extends TLObject {
	readonly "@type": "chatActionBarReportUnrelatedLocation"
}
export function chatActionBarReportUnrelatedLocation(object: TLObject): TLChatActionBarReportUnrelatedLocation { return object as TLChatActionBarReportUnrelatedLocation }
export interface TLChatActionBarReportAddBlock extends TLObject {
	readonly "@type": "chatActionBarReportAddBlock"
	readonly can_unarchive: boolean
	readonly distance: number
}
export function chatActionBarReportAddBlock(object: TLObject): TLChatActionBarReportAddBlock { return object as TLChatActionBarReportAddBlock }
export interface TLChatActionBarAddContact extends TLObject {
	readonly "@type": "chatActionBarAddContact"
}
export function chatActionBarAddContact(object: TLObject): TLChatActionBarAddContact { return object as TLChatActionBarAddContact }
export interface TLChatActionBarSharePhoneNumber extends TLObject {
	readonly "@type": "chatActionBarSharePhoneNumber"
}
export function chatActionBarSharePhoneNumber(object: TLObject): TLChatActionBarSharePhoneNumber { return object as TLChatActionBarSharePhoneNumber }
export type TLChatActionBar = TLChatActionBarReportSpam | TLChatActionBarReportUnrelatedLocation | TLChatActionBarReportAddBlock | TLChatActionBarAddContact | TLChatActionBarSharePhoneNumber
export interface TLKeyboardButtonTypeText extends TLObject {
	readonly "@type": "keyboardButtonTypeText"
}
export function keyboardButtonTypeText(object: TLObject): TLKeyboardButtonTypeText { return object as TLKeyboardButtonTypeText }
export interface TLKeyboardButtonTypeRequestPhoneNumber extends TLObject {
	readonly "@type": "keyboardButtonTypeRequestPhoneNumber"
}
export function keyboardButtonTypeRequestPhoneNumber(object: TLObject): TLKeyboardButtonTypeRequestPhoneNumber { return object as TLKeyboardButtonTypeRequestPhoneNumber }
export interface TLKeyboardButtonTypeRequestLocation extends TLObject {
	readonly "@type": "keyboardButtonTypeRequestLocation"
}
export function keyboardButtonTypeRequestLocation(object: TLObject): TLKeyboardButtonTypeRequestLocation { return object as TLKeyboardButtonTypeRequestLocation }
export interface TLKeyboardButtonTypeRequestPoll extends TLObject {
	readonly "@type": "keyboardButtonTypeRequestPoll"
	readonly force_regular: boolean
	readonly force_quiz: boolean
}
export function keyboardButtonTypeRequestPoll(object: TLObject): TLKeyboardButtonTypeRequestPoll { return object as TLKeyboardButtonTypeRequestPoll }
export type TLKeyboardButtonType = TLKeyboardButtonTypeText | TLKeyboardButtonTypeRequestPhoneNumber | TLKeyboardButtonTypeRequestLocation | TLKeyboardButtonTypeRequestPoll
export interface TLKeyboardButton extends TLObject {
	readonly "@type": "keyboardButton"
	readonly text: string
	readonly type: TLKeyboardButtonType
}
export function keyboardButton(object: TLObject): TLKeyboardButton { return object as TLKeyboardButton }
export interface TLInlineKeyboardButtonTypeUrl extends TLObject {
	readonly "@type": "inlineKeyboardButtonTypeUrl"
	readonly url: string
}
export function inlineKeyboardButtonTypeUrl(object: TLObject): TLInlineKeyboardButtonTypeUrl { return object as TLInlineKeyboardButtonTypeUrl }
export interface TLInlineKeyboardButtonTypeLoginUrl extends TLObject {
	readonly "@type": "inlineKeyboardButtonTypeLoginUrl"
	readonly url: string
	readonly id: number
	readonly forward_text: string
}
export function inlineKeyboardButtonTypeLoginUrl(object: TLObject): TLInlineKeyboardButtonTypeLoginUrl { return object as TLInlineKeyboardButtonTypeLoginUrl }
export interface TLInlineKeyboardButtonTypeCallback extends TLObject {
	readonly "@type": "inlineKeyboardButtonTypeCallback"
	readonly data: Uint8Array
}
export function inlineKeyboardButtonTypeCallback(object: TLObject): TLInlineKeyboardButtonTypeCallback { return object as TLInlineKeyboardButtonTypeCallback }
export interface TLInlineKeyboardButtonTypeCallbackWithPassword extends TLObject {
	readonly "@type": "inlineKeyboardButtonTypeCallbackWithPassword"
	readonly data: Uint8Array
}
export function inlineKeyboardButtonTypeCallbackWithPassword(object: TLObject): TLInlineKeyboardButtonTypeCallbackWithPassword { return object as TLInlineKeyboardButtonTypeCallbackWithPassword }
export interface TLInlineKeyboardButtonTypeCallbackGame extends TLObject {
	readonly "@type": "inlineKeyboardButtonTypeCallbackGame"
}
export function inlineKeyboardButtonTypeCallbackGame(object: TLObject): TLInlineKeyboardButtonTypeCallbackGame { return object as TLInlineKeyboardButtonTypeCallbackGame }
export interface TLInlineKeyboardButtonTypeSwitchInline extends TLObject {
	readonly "@type": "inlineKeyboardButtonTypeSwitchInline"
	readonly query: string
	readonly in_current_chat: boolean
}
export function inlineKeyboardButtonTypeSwitchInline(object: TLObject): TLInlineKeyboardButtonTypeSwitchInline { return object as TLInlineKeyboardButtonTypeSwitchInline }
export interface TLInlineKeyboardButtonTypeBuy extends TLObject {
	readonly "@type": "inlineKeyboardButtonTypeBuy"
}
export function inlineKeyboardButtonTypeBuy(object: TLObject): TLInlineKeyboardButtonTypeBuy { return object as TLInlineKeyboardButtonTypeBuy }
export type TLInlineKeyboardButtonType = TLInlineKeyboardButtonTypeUrl | TLInlineKeyboardButtonTypeLoginUrl | TLInlineKeyboardButtonTypeCallback | TLInlineKeyboardButtonTypeCallbackWithPassword | TLInlineKeyboardButtonTypeCallbackGame | TLInlineKeyboardButtonTypeSwitchInline | TLInlineKeyboardButtonTypeBuy
export interface TLInlineKeyboardButton extends TLObject {
	readonly "@type": "inlineKeyboardButton"
	readonly text: string
	readonly type: TLInlineKeyboardButtonType
}
export function inlineKeyboardButton(object: TLObject): TLInlineKeyboardButton { return object as TLInlineKeyboardButton }
export interface TLReplyMarkupRemoveKeyboard extends TLObject {
	readonly "@type": "replyMarkupRemoveKeyboard"
	readonly is_personal: boolean
}
export function replyMarkupRemoveKeyboard(object: TLObject): TLReplyMarkupRemoveKeyboard { return object as TLReplyMarkupRemoveKeyboard }
export interface TLReplyMarkupForceReply extends TLObject {
	readonly "@type": "replyMarkupForceReply"
	readonly is_personal: boolean
}
export function replyMarkupForceReply(object: TLObject): TLReplyMarkupForceReply { return object as TLReplyMarkupForceReply }
export interface TLReplyMarkupShowKeyboard extends TLObject {
	readonly "@type": "replyMarkupShowKeyboard"
	readonly rows: ReadonlyArray<ReadonlyArray<TLKeyboardButton>>
	readonly resize_keyboard: boolean
	readonly one_time: boolean
	readonly is_personal: boolean
}
export function replyMarkupShowKeyboard(object: TLObject): TLReplyMarkupShowKeyboard { return object as TLReplyMarkupShowKeyboard }
export interface TLReplyMarkupInlineKeyboard extends TLObject {
	readonly "@type": "replyMarkupInlineKeyboard"
	readonly rows: ReadonlyArray<ReadonlyArray<TLInlineKeyboardButton>>
}
export function replyMarkupInlineKeyboard(object: TLObject): TLReplyMarkupInlineKeyboard { return object as TLReplyMarkupInlineKeyboard }
export type TLReplyMarkup = TLReplyMarkupRemoveKeyboard | TLReplyMarkupForceReply | TLReplyMarkupShowKeyboard | TLReplyMarkupInlineKeyboard
export interface TLLoginUrlInfoOpen extends TLObject {
	readonly "@type": "loginUrlInfoOpen"
	readonly url: string
	readonly skip_confirm: boolean
}
export function loginUrlInfoOpen(object: TLObject): TLLoginUrlInfoOpen { return object as TLLoginUrlInfoOpen }
export interface TLLoginUrlInfoRequestConfirmation extends TLObject {
	readonly "@type": "loginUrlInfoRequestConfirmation"
	readonly url: string
	readonly domain: string
	readonly bot_user_id: number
	readonly request_write_access: boolean
}
export function loginUrlInfoRequestConfirmation(object: TLObject): TLLoginUrlInfoRequestConfirmation { return object as TLLoginUrlInfoRequestConfirmation }
export type TLLoginUrlInfo = TLLoginUrlInfoOpen | TLLoginUrlInfoRequestConfirmation
export interface TLMessageThreadInfo extends TLObject {
	readonly "@type": "messageThreadInfo"
	readonly chat_id: number
	readonly message_thread_id: number
	readonly reply_info: TLMessageReplyInfo
	readonly messages: ReadonlyArray<TLMessage>
	readonly draft_message: TLDraftMessage
}
export function messageThreadInfo(object: TLObject): TLMessageThreadInfo { return object as TLMessageThreadInfo }
export interface TLRichTextPlain extends TLObject {
	readonly "@type": "richTextPlain"
	readonly text: string
}
export function richTextPlain(object: TLObject): TLRichTextPlain { return object as TLRichTextPlain }
export interface TLRichTextBold extends TLObject {
	readonly "@type": "richTextBold"
	readonly text: TLRichText
}
export function richTextBold(object: TLObject): TLRichTextBold { return object as TLRichTextBold }
export interface TLRichTextItalic extends TLObject {
	readonly "@type": "richTextItalic"
	readonly text: TLRichText
}
export function richTextItalic(object: TLObject): TLRichTextItalic { return object as TLRichTextItalic }
export interface TLRichTextUnderline extends TLObject {
	readonly "@type": "richTextUnderline"
	readonly text: TLRichText
}
export function richTextUnderline(object: TLObject): TLRichTextUnderline { return object as TLRichTextUnderline }
export interface TLRichTextStrikethrough extends TLObject {
	readonly "@type": "richTextStrikethrough"
	readonly text: TLRichText
}
export function richTextStrikethrough(object: TLObject): TLRichTextStrikethrough { return object as TLRichTextStrikethrough }
export interface TLRichTextFixed extends TLObject {
	readonly "@type": "richTextFixed"
	readonly text: TLRichText
}
export function richTextFixed(object: TLObject): TLRichTextFixed { return object as TLRichTextFixed }
export interface TLRichTextUrl extends TLObject {
	readonly "@type": "richTextUrl"
	readonly text: TLRichText
	readonly url: string
	readonly is_cached: boolean
}
export function richTextUrl(object: TLObject): TLRichTextUrl { return object as TLRichTextUrl }
export interface TLRichTextEmailAddress extends TLObject {
	readonly "@type": "richTextEmailAddress"
	readonly text: TLRichText
	readonly email_address: string
}
export function richTextEmailAddress(object: TLObject): TLRichTextEmailAddress { return object as TLRichTextEmailAddress }
export interface TLRichTextSubscript extends TLObject {
	readonly "@type": "richTextSubscript"
	readonly text: TLRichText
}
export function richTextSubscript(object: TLObject): TLRichTextSubscript { return object as TLRichTextSubscript }
export interface TLRichTextSuperscript extends TLObject {
	readonly "@type": "richTextSuperscript"
	readonly text: TLRichText
}
export function richTextSuperscript(object: TLObject): TLRichTextSuperscript { return object as TLRichTextSuperscript }
export interface TLRichTextMarked extends TLObject {
	readonly "@type": "richTextMarked"
	readonly text: TLRichText
}
export function richTextMarked(object: TLObject): TLRichTextMarked { return object as TLRichTextMarked }
export interface TLRichTextPhoneNumber extends TLObject {
	readonly "@type": "richTextPhoneNumber"
	readonly text: TLRichText
	readonly phone_number: string
}
export function richTextPhoneNumber(object: TLObject): TLRichTextPhoneNumber { return object as TLRichTextPhoneNumber }
export interface TLRichTextIcon extends TLObject {
	readonly "@type": "richTextIcon"
	readonly document: TLDocument
	readonly width: number
	readonly height: number
}
export function richTextIcon(object: TLObject): TLRichTextIcon { return object as TLRichTextIcon }
export interface TLRichTextReference extends TLObject {
	readonly "@type": "richTextReference"
	readonly text: TLRichText
	readonly reference_text: TLRichText
	readonly url: string
}
export function richTextReference(object: TLObject): TLRichTextReference { return object as TLRichTextReference }
export interface TLRichTextAnchor extends TLObject {
	readonly "@type": "richTextAnchor"
	readonly name: string
}
export function richTextAnchor(object: TLObject): TLRichTextAnchor { return object as TLRichTextAnchor }
export interface TLRichTextAnchorLink extends TLObject {
	readonly "@type": "richTextAnchorLink"
	readonly text: TLRichText
	readonly name: string
	readonly url: string
}
export function richTextAnchorLink(object: TLObject): TLRichTextAnchorLink { return object as TLRichTextAnchorLink }
export interface TLRichTexts extends TLObject {
	readonly "@type": "richTexts"
	readonly texts: ReadonlyArray<TLRichText>
}
export function richTexts(object: TLObject): TLRichTexts { return object as TLRichTexts }
export type TLRichText = TLRichTextPlain | TLRichTextBold | TLRichTextItalic | TLRichTextUnderline | TLRichTextStrikethrough | TLRichTextFixed | TLRichTextUrl | TLRichTextEmailAddress | TLRichTextSubscript | TLRichTextSuperscript | TLRichTextMarked | TLRichTextPhoneNumber | TLRichTextIcon | TLRichTextReference | TLRichTextAnchor | TLRichTextAnchorLink | TLRichTexts
export interface TLPageBlockCaption extends TLObject {
	readonly "@type": "pageBlockCaption"
	readonly text: TLRichText
	readonly credit: TLRichText
}
export function pageBlockCaption(object: TLObject): TLPageBlockCaption { return object as TLPageBlockCaption }
export interface TLPageBlockListItem extends TLObject {
	readonly "@type": "pageBlockListItem"
	readonly label: string
	readonly page_blocks: ReadonlyArray<TLPageBlock>
}
export function pageBlockListItem(object: TLObject): TLPageBlockListItem { return object as TLPageBlockListItem }
export interface TLPageBlockHorizontalAlignmentLeft extends TLObject {
	readonly "@type": "pageBlockHorizontalAlignmentLeft"
}
export function pageBlockHorizontalAlignmentLeft(object: TLObject): TLPageBlockHorizontalAlignmentLeft { return object as TLPageBlockHorizontalAlignmentLeft }
export interface TLPageBlockHorizontalAlignmentCenter extends TLObject {
	readonly "@type": "pageBlockHorizontalAlignmentCenter"
}
export function pageBlockHorizontalAlignmentCenter(object: TLObject): TLPageBlockHorizontalAlignmentCenter { return object as TLPageBlockHorizontalAlignmentCenter }
export interface TLPageBlockHorizontalAlignmentRight extends TLObject {
	readonly "@type": "pageBlockHorizontalAlignmentRight"
}
export function pageBlockHorizontalAlignmentRight(object: TLObject): TLPageBlockHorizontalAlignmentRight { return object as TLPageBlockHorizontalAlignmentRight }
export type TLPageBlockHorizontalAlignment = TLPageBlockHorizontalAlignmentLeft | TLPageBlockHorizontalAlignmentCenter | TLPageBlockHorizontalAlignmentRight
export interface TLPageBlockVerticalAlignmentTop extends TLObject {
	readonly "@type": "pageBlockVerticalAlignmentTop"
}
export function pageBlockVerticalAlignmentTop(object: TLObject): TLPageBlockVerticalAlignmentTop { return object as TLPageBlockVerticalAlignmentTop }
export interface TLPageBlockVerticalAlignmentMiddle extends TLObject {
	readonly "@type": "pageBlockVerticalAlignmentMiddle"
}
export function pageBlockVerticalAlignmentMiddle(object: TLObject): TLPageBlockVerticalAlignmentMiddle { return object as TLPageBlockVerticalAlignmentMiddle }
export interface TLPageBlockVerticalAlignmentBottom extends TLObject {
	readonly "@type": "pageBlockVerticalAlignmentBottom"
}
export function pageBlockVerticalAlignmentBottom(object: TLObject): TLPageBlockVerticalAlignmentBottom { return object as TLPageBlockVerticalAlignmentBottom }
export type TLPageBlockVerticalAlignment = TLPageBlockVerticalAlignmentTop | TLPageBlockVerticalAlignmentMiddle | TLPageBlockVerticalAlignmentBottom
export interface TLPageBlockTableCell extends TLObject {
	readonly "@type": "pageBlockTableCell"
	readonly text: TLRichText
	readonly is_header: boolean
	readonly colspan: number
	readonly rowspan: number
	readonly align: TLPageBlockHorizontalAlignment
	readonly valign: TLPageBlockVerticalAlignment
}
export function pageBlockTableCell(object: TLObject): TLPageBlockTableCell { return object as TLPageBlockTableCell }
export interface TLPageBlockRelatedArticle extends TLObject {
	readonly "@type": "pageBlockRelatedArticle"
	readonly url: string
	readonly title: string
	readonly description: string
	readonly photo: TLPhoto
	readonly author: string
	readonly publish_date: number
}
export function pageBlockRelatedArticle(object: TLObject): TLPageBlockRelatedArticle { return object as TLPageBlockRelatedArticle }
export interface TLPageBlockTitle extends TLObject {
	readonly "@type": "pageBlockTitle"
	readonly title: TLRichText
}
export function pageBlockTitle(object: TLObject): TLPageBlockTitle { return object as TLPageBlockTitle }
export interface TLPageBlockSubtitle extends TLObject {
	readonly "@type": "pageBlockSubtitle"
	readonly subtitle: TLRichText
}
export function pageBlockSubtitle(object: TLObject): TLPageBlockSubtitle { return object as TLPageBlockSubtitle }
export interface TLPageBlockAuthorDate extends TLObject {
	readonly "@type": "pageBlockAuthorDate"
	readonly author: TLRichText
	readonly publish_date: number
}
export function pageBlockAuthorDate(object: TLObject): TLPageBlockAuthorDate { return object as TLPageBlockAuthorDate }
export interface TLPageBlockHeader extends TLObject {
	readonly "@type": "pageBlockHeader"
	readonly header: TLRichText
}
export function pageBlockHeader(object: TLObject): TLPageBlockHeader { return object as TLPageBlockHeader }
export interface TLPageBlockSubheader extends TLObject {
	readonly "@type": "pageBlockSubheader"
	readonly subheader: TLRichText
}
export function pageBlockSubheader(object: TLObject): TLPageBlockSubheader { return object as TLPageBlockSubheader }
export interface TLPageBlockKicker extends TLObject {
	readonly "@type": "pageBlockKicker"
	readonly kicker: TLRichText
}
export function pageBlockKicker(object: TLObject): TLPageBlockKicker { return object as TLPageBlockKicker }
export interface TLPageBlockParagraph extends TLObject {
	readonly "@type": "pageBlockParagraph"
	readonly text: TLRichText
}
export function pageBlockParagraph(object: TLObject): TLPageBlockParagraph { return object as TLPageBlockParagraph }
export interface TLPageBlockPreformatted extends TLObject {
	readonly "@type": "pageBlockPreformatted"
	readonly text: TLRichText
	readonly language: string
}
export function pageBlockPreformatted(object: TLObject): TLPageBlockPreformatted { return object as TLPageBlockPreformatted }
export interface TLPageBlockFooter extends TLObject {
	readonly "@type": "pageBlockFooter"
	readonly footer: TLRichText
}
export function pageBlockFooter(object: TLObject): TLPageBlockFooter { return object as TLPageBlockFooter }
export interface TLPageBlockDivider extends TLObject {
	readonly "@type": "pageBlockDivider"
}
export function pageBlockDivider(object: TLObject): TLPageBlockDivider { return object as TLPageBlockDivider }
export interface TLPageBlockAnchor extends TLObject {
	readonly "@type": "pageBlockAnchor"
	readonly name: string
}
export function pageBlockAnchor(object: TLObject): TLPageBlockAnchor { return object as TLPageBlockAnchor }
export interface TLPageBlockList extends TLObject {
	readonly "@type": "pageBlockList"
	readonly items: ReadonlyArray<TLPageBlockListItem>
}
export function pageBlockList(object: TLObject): TLPageBlockList { return object as TLPageBlockList }
export interface TLPageBlockBlockQuote extends TLObject {
	readonly "@type": "pageBlockBlockQuote"
	readonly text: TLRichText
	readonly credit: TLRichText
}
export function pageBlockBlockQuote(object: TLObject): TLPageBlockBlockQuote { return object as TLPageBlockBlockQuote }
export interface TLPageBlockPullQuote extends TLObject {
	readonly "@type": "pageBlockPullQuote"
	readonly text: TLRichText
	readonly credit: TLRichText
}
export function pageBlockPullQuote(object: TLObject): TLPageBlockPullQuote { return object as TLPageBlockPullQuote }
export interface TLPageBlockAnimation extends TLObject {
	readonly "@type": "pageBlockAnimation"
	readonly animation: TLAnimation
	readonly caption: TLPageBlockCaption
	readonly need_autoplay: boolean
}
export function pageBlockAnimation(object: TLObject): TLPageBlockAnimation { return object as TLPageBlockAnimation }
export interface TLPageBlockAudio extends TLObject {
	readonly "@type": "pageBlockAudio"
	readonly audio: TLAudio
	readonly caption: TLPageBlockCaption
}
export function pageBlockAudio(object: TLObject): TLPageBlockAudio { return object as TLPageBlockAudio }
export interface TLPageBlockPhoto extends TLObject {
	readonly "@type": "pageBlockPhoto"
	readonly photo: TLPhoto
	readonly caption: TLPageBlockCaption
	readonly url: string
}
export function pageBlockPhoto(object: TLObject): TLPageBlockPhoto { return object as TLPageBlockPhoto }
export interface TLPageBlockVideo extends TLObject {
	readonly "@type": "pageBlockVideo"
	readonly video: TLVideo
	readonly caption: TLPageBlockCaption
	readonly need_autoplay: boolean
	readonly is_looped: boolean
}
export function pageBlockVideo(object: TLObject): TLPageBlockVideo { return object as TLPageBlockVideo }
export interface TLPageBlockVoiceNote extends TLObject {
	readonly "@type": "pageBlockVoiceNote"
	readonly voice_note: TLVoiceNote
	readonly caption: TLPageBlockCaption
}
export function pageBlockVoiceNote(object: TLObject): TLPageBlockVoiceNote { return object as TLPageBlockVoiceNote }
export interface TLPageBlockCover extends TLObject {
	readonly "@type": "pageBlockCover"
	readonly cover: TLPageBlock
}
export function pageBlockCover(object: TLObject): TLPageBlockCover { return object as TLPageBlockCover }
export interface TLPageBlockEmbedded extends TLObject {
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
export function pageBlockEmbedded(object: TLObject): TLPageBlockEmbedded { return object as TLPageBlockEmbedded }
export interface TLPageBlockEmbeddedPost extends TLObject {
	readonly "@type": "pageBlockEmbeddedPost"
	readonly url: string
	readonly author: string
	readonly author_photo: TLPhoto
	readonly date: number
	readonly page_blocks: ReadonlyArray<TLPageBlock>
	readonly caption: TLPageBlockCaption
}
export function pageBlockEmbeddedPost(object: TLObject): TLPageBlockEmbeddedPost { return object as TLPageBlockEmbeddedPost }
export interface TLPageBlockCollage extends TLObject {
	readonly "@type": "pageBlockCollage"
	readonly page_blocks: ReadonlyArray<TLPageBlock>
	readonly caption: TLPageBlockCaption
}
export function pageBlockCollage(object: TLObject): TLPageBlockCollage { return object as TLPageBlockCollage }
export interface TLPageBlockSlideshow extends TLObject {
	readonly "@type": "pageBlockSlideshow"
	readonly page_blocks: ReadonlyArray<TLPageBlock>
	readonly caption: TLPageBlockCaption
}
export function pageBlockSlideshow(object: TLObject): TLPageBlockSlideshow { return object as TLPageBlockSlideshow }
export interface TLPageBlockChatLink extends TLObject {
	readonly "@type": "pageBlockChatLink"
	readonly title: string
	readonly photo: TLChatPhotoInfo
	readonly username: string
}
export function pageBlockChatLink(object: TLObject): TLPageBlockChatLink { return object as TLPageBlockChatLink }
export interface TLPageBlockTable extends TLObject {
	readonly "@type": "pageBlockTable"
	readonly caption: TLRichText
	readonly cells: ReadonlyArray<ReadonlyArray<TLPageBlockTableCell>>
	readonly is_bordered: boolean
	readonly is_striped: boolean
}
export function pageBlockTable(object: TLObject): TLPageBlockTable { return object as TLPageBlockTable }
export interface TLPageBlockDetails extends TLObject {
	readonly "@type": "pageBlockDetails"
	readonly header: TLRichText
	readonly page_blocks: ReadonlyArray<TLPageBlock>
	readonly is_open: boolean
}
export function pageBlockDetails(object: TLObject): TLPageBlockDetails { return object as TLPageBlockDetails }
export interface TLPageBlockRelatedArticles extends TLObject {
	readonly "@type": "pageBlockRelatedArticles"
	readonly header: TLRichText
	readonly articles: ReadonlyArray<TLPageBlockRelatedArticle>
}
export function pageBlockRelatedArticles(object: TLObject): TLPageBlockRelatedArticles { return object as TLPageBlockRelatedArticles }
export interface TLPageBlockMap extends TLObject {
	readonly "@type": "pageBlockMap"
	readonly location: TLLocation
	readonly zoom: number
	readonly width: number
	readonly height: number
	readonly caption: TLPageBlockCaption
}
export function pageBlockMap(object: TLObject): TLPageBlockMap { return object as TLPageBlockMap }
export type TLPageBlock = TLPageBlockTitle | TLPageBlockSubtitle | TLPageBlockAuthorDate | TLPageBlockHeader | TLPageBlockSubheader | TLPageBlockKicker | TLPageBlockParagraph | TLPageBlockPreformatted | TLPageBlockFooter | TLPageBlockDivider | TLPageBlockAnchor | TLPageBlockList | TLPageBlockBlockQuote | TLPageBlockPullQuote | TLPageBlockAnimation | TLPageBlockAudio | TLPageBlockPhoto | TLPageBlockVideo | TLPageBlockVoiceNote | TLPageBlockCover | TLPageBlockEmbedded | TLPageBlockEmbeddedPost | TLPageBlockCollage | TLPageBlockSlideshow | TLPageBlockChatLink | TLPageBlockTable | TLPageBlockDetails | TLPageBlockRelatedArticles | TLPageBlockMap
export interface TLWebPageInstantView extends TLObject {
	readonly "@type": "webPageInstantView"
	readonly page_blocks: ReadonlyArray<TLPageBlock>
	readonly view_count: number
	readonly version: number
	readonly is_rtl: boolean
	readonly is_full: boolean
}
export function webPageInstantView(object: TLObject): TLWebPageInstantView { return object as TLWebPageInstantView }
export interface TLWebPage extends TLObject {
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
export function webPage(object: TLObject): TLWebPage { return object as TLWebPage }
export interface TLCountryInfo extends TLObject {
	readonly "@type": "countryInfo"
	readonly country_code: string
	readonly name: string
	readonly english_name: string
	readonly is_hidden: boolean
	readonly calling_codes: ReadonlyArray<string>
}
export function countryInfo(object: TLObject): TLCountryInfo { return object as TLCountryInfo }
export interface TLCountries extends TLObject {
	readonly "@type": "countries"
	readonly countries: ReadonlyArray<TLCountryInfo>
}
export function countries(object: TLObject): TLCountries { return object as TLCountries }
export interface TLPhoneNumberInfo extends TLObject {
	readonly "@type": "phoneNumberInfo"
	readonly country: TLCountryInfo
	readonly country_calling_code: string
	readonly formatted_phone_number: string
}
export function phoneNumberInfo(object: TLObject): TLPhoneNumberInfo { return object as TLPhoneNumberInfo }
export interface TLBankCardActionOpenUrl extends TLObject {
	readonly "@type": "bankCardActionOpenUrl"
	readonly text: string
	readonly url: string
}
export function bankCardActionOpenUrl(object: TLObject): TLBankCardActionOpenUrl { return object as TLBankCardActionOpenUrl }
export interface TLBankCardInfo extends TLObject {
	readonly "@type": "bankCardInfo"
	readonly title: string
	readonly actions: ReadonlyArray<TLBankCardActionOpenUrl>
}
export function bankCardInfo(object: TLObject): TLBankCardInfo { return object as TLBankCardInfo }
export interface TLAddress extends TLObject {
	readonly "@type": "address"
	readonly country_code: string
	readonly state: string
	readonly city: string
	readonly street_line1: string
	readonly street_line2: string
	readonly postal_code: string
}
export function address(object: TLObject): TLAddress { return object as TLAddress }
export interface TLLabeledPricePart extends TLObject {
	readonly "@type": "labeledPricePart"
	readonly label: string
	readonly amount: number
}
export function labeledPricePart(object: TLObject): TLLabeledPricePart { return object as TLLabeledPricePart }
export interface TLInvoice extends TLObject {
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
export function invoice(object: TLObject): TLInvoice { return object as TLInvoice }
export interface TLOrderInfo extends TLObject {
	readonly "@type": "orderInfo"
	readonly name: string
	readonly phone_number: string
	readonly email_address: string
	readonly shipping_address: TLAddress
}
export function orderInfo(object: TLObject): TLOrderInfo { return object as TLOrderInfo }
export interface TLShippingOption extends TLObject {
	readonly "@type": "shippingOption"
	readonly id: string
	readonly title: string
	readonly price_parts: ReadonlyArray<TLLabeledPricePart>
}
export function shippingOption(object: TLObject): TLShippingOption { return object as TLShippingOption }
export interface TLSavedCredentials extends TLObject {
	readonly "@type": "savedCredentials"
	readonly id: string
	readonly title: string
}
export function savedCredentials(object: TLObject): TLSavedCredentials { return object as TLSavedCredentials }
export interface TLInputCredentialsSaved extends TLObject {
	readonly "@type": "inputCredentialsSaved"
	readonly saved_credentials_id: string
}
export function inputCredentialsSaved(object: TLObject): TLInputCredentialsSaved { return object as TLInputCredentialsSaved }
export interface TLInputCredentialsNew extends TLObject {
	readonly "@type": "inputCredentialsNew"
	readonly data: string
	readonly allow_save: boolean
}
export function inputCredentialsNew(object: TLObject): TLInputCredentialsNew { return object as TLInputCredentialsNew }
export interface TLInputCredentialsAndroidPay extends TLObject {
	readonly "@type": "inputCredentialsAndroidPay"
	readonly data: string
}
export function inputCredentialsAndroidPay(object: TLObject): TLInputCredentialsAndroidPay { return object as TLInputCredentialsAndroidPay }
export interface TLInputCredentialsApplePay extends TLObject {
	readonly "@type": "inputCredentialsApplePay"
	readonly data: string
}
export function inputCredentialsApplePay(object: TLObject): TLInputCredentialsApplePay { return object as TLInputCredentialsApplePay }
export type TLInputCredentials = TLInputCredentialsSaved | TLInputCredentialsNew | TLInputCredentialsAndroidPay | TLInputCredentialsApplePay
export interface TLPaymentsProviderStripe extends TLObject {
	readonly "@type": "paymentsProviderStripe"
	readonly publishable_key: string
	readonly need_country: boolean
	readonly need_postal_code: boolean
	readonly need_cardholder_name: boolean
}
export function paymentsProviderStripe(object: TLObject): TLPaymentsProviderStripe { return object as TLPaymentsProviderStripe }
export interface TLPaymentForm extends TLObject {
	readonly "@type": "paymentForm"
	readonly invoice: TLInvoice
	readonly url: string
	readonly payments_provider: TLPaymentsProviderStripe
	readonly saved_order_info: TLOrderInfo
	readonly saved_credentials: TLSavedCredentials
	readonly can_save_credentials: boolean
	readonly need_password: boolean
}
export function paymentForm(object: TLObject): TLPaymentForm { return object as TLPaymentForm }
export interface TLValidatedOrderInfo extends TLObject {
	readonly "@type": "validatedOrderInfo"
	readonly order_info_id: string
	readonly shipping_options: ReadonlyArray<TLShippingOption>
}
export function validatedOrderInfo(object: TLObject): TLValidatedOrderInfo { return object as TLValidatedOrderInfo }
export interface TLPaymentResult extends TLObject {
	readonly "@type": "paymentResult"
	readonly success: boolean
	readonly verification_url: string
}
export function paymentResult(object: TLObject): TLPaymentResult { return object as TLPaymentResult }
export interface TLPaymentReceipt extends TLObject {
	readonly "@type": "paymentReceipt"
	readonly date: number
	readonly payments_provider_user_id: number
	readonly invoice: TLInvoice
	readonly order_info: TLOrderInfo
	readonly shipping_option: TLShippingOption
	readonly credentials_title: string
}
export function paymentReceipt(object: TLObject): TLPaymentReceipt { return object as TLPaymentReceipt }
export interface TLDatedFile extends TLObject {
	readonly "@type": "datedFile"
	readonly file: TLFile
	readonly date: number
}
export function datedFile(object: TLObject): TLDatedFile { return object as TLDatedFile }
export interface TLPassportElementTypePersonalDetails extends TLObject {
	readonly "@type": "passportElementTypePersonalDetails"
}
export function passportElementTypePersonalDetails(object: TLObject): TLPassportElementTypePersonalDetails { return object as TLPassportElementTypePersonalDetails }
export interface TLPassportElementTypePassport extends TLObject {
	readonly "@type": "passportElementTypePassport"
}
export function passportElementTypePassport(object: TLObject): TLPassportElementTypePassport { return object as TLPassportElementTypePassport }
export interface TLPassportElementTypeDriverLicense extends TLObject {
	readonly "@type": "passportElementTypeDriverLicense"
}
export function passportElementTypeDriverLicense(object: TLObject): TLPassportElementTypeDriverLicense { return object as TLPassportElementTypeDriverLicense }
export interface TLPassportElementTypeIdentityCard extends TLObject {
	readonly "@type": "passportElementTypeIdentityCard"
}
export function passportElementTypeIdentityCard(object: TLObject): TLPassportElementTypeIdentityCard { return object as TLPassportElementTypeIdentityCard }
export interface TLPassportElementTypeInternalPassport extends TLObject {
	readonly "@type": "passportElementTypeInternalPassport"
}
export function passportElementTypeInternalPassport(object: TLObject): TLPassportElementTypeInternalPassport { return object as TLPassportElementTypeInternalPassport }
export interface TLPassportElementTypeAddress extends TLObject {
	readonly "@type": "passportElementTypeAddress"
}
export function passportElementTypeAddress(object: TLObject): TLPassportElementTypeAddress { return object as TLPassportElementTypeAddress }
export interface TLPassportElementTypeUtilityBill extends TLObject {
	readonly "@type": "passportElementTypeUtilityBill"
}
export function passportElementTypeUtilityBill(object: TLObject): TLPassportElementTypeUtilityBill { return object as TLPassportElementTypeUtilityBill }
export interface TLPassportElementTypeBankStatement extends TLObject {
	readonly "@type": "passportElementTypeBankStatement"
}
export function passportElementTypeBankStatement(object: TLObject): TLPassportElementTypeBankStatement { return object as TLPassportElementTypeBankStatement }
export interface TLPassportElementTypeRentalAgreement extends TLObject {
	readonly "@type": "passportElementTypeRentalAgreement"
}
export function passportElementTypeRentalAgreement(object: TLObject): TLPassportElementTypeRentalAgreement { return object as TLPassportElementTypeRentalAgreement }
export interface TLPassportElementTypePassportRegistration extends TLObject {
	readonly "@type": "passportElementTypePassportRegistration"
}
export function passportElementTypePassportRegistration(object: TLObject): TLPassportElementTypePassportRegistration { return object as TLPassportElementTypePassportRegistration }
export interface TLPassportElementTypeTemporaryRegistration extends TLObject {
	readonly "@type": "passportElementTypeTemporaryRegistration"
}
export function passportElementTypeTemporaryRegistration(object: TLObject): TLPassportElementTypeTemporaryRegistration { return object as TLPassportElementTypeTemporaryRegistration }
export interface TLPassportElementTypePhoneNumber extends TLObject {
	readonly "@type": "passportElementTypePhoneNumber"
}
export function passportElementTypePhoneNumber(object: TLObject): TLPassportElementTypePhoneNumber { return object as TLPassportElementTypePhoneNumber }
export interface TLPassportElementTypeEmailAddress extends TLObject {
	readonly "@type": "passportElementTypeEmailAddress"
}
export function passportElementTypeEmailAddress(object: TLObject): TLPassportElementTypeEmailAddress { return object as TLPassportElementTypeEmailAddress }
export type TLPassportElementType = TLPassportElementTypePersonalDetails | TLPassportElementTypePassport | TLPassportElementTypeDriverLicense | TLPassportElementTypeIdentityCard | TLPassportElementTypeInternalPassport | TLPassportElementTypeAddress | TLPassportElementTypeUtilityBill | TLPassportElementTypeBankStatement | TLPassportElementTypeRentalAgreement | TLPassportElementTypePassportRegistration | TLPassportElementTypeTemporaryRegistration | TLPassportElementTypePhoneNumber | TLPassportElementTypeEmailAddress
export interface TLDate extends TLObject {
	readonly "@type": "date"
	readonly day: number
	readonly month: number
	readonly year: number
}
export function date(object: TLObject): TLDate { return object as TLDate }
export interface TLPersonalDetails extends TLObject {
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
export function personalDetails(object: TLObject): TLPersonalDetails { return object as TLPersonalDetails }
export interface TLIdentityDocument extends TLObject {
	readonly "@type": "identityDocument"
	readonly number: string
	readonly expiry_date: TLDate
	readonly front_side: TLDatedFile
	readonly reverse_side: TLDatedFile
	readonly selfie: TLDatedFile
	readonly translation: ReadonlyArray<TLDatedFile>
}
export function identityDocument(object: TLObject): TLIdentityDocument { return object as TLIdentityDocument }
export interface TLInputIdentityDocument extends TLObject {
	readonly "@type": "inputIdentityDocument"
	readonly number: string
	readonly expiry_date: TLDate
	readonly front_side: TLInputFile
	readonly reverse_side: TLInputFile
	readonly selfie: TLInputFile
	readonly translation: ReadonlyArray<TLInputFile>
}
export function inputIdentityDocument(object: TLObject): TLInputIdentityDocument { return object as TLInputIdentityDocument }
export interface TLPersonalDocument extends TLObject {
	readonly "@type": "personalDocument"
	readonly files: ReadonlyArray<TLDatedFile>
	readonly translation: ReadonlyArray<TLDatedFile>
}
export function personalDocument(object: TLObject): TLPersonalDocument { return object as TLPersonalDocument }
export interface TLInputPersonalDocument extends TLObject {
	readonly "@type": "inputPersonalDocument"
	readonly files: ReadonlyArray<TLInputFile>
	readonly translation: ReadonlyArray<TLInputFile>
}
export function inputPersonalDocument(object: TLObject): TLInputPersonalDocument { return object as TLInputPersonalDocument }
export interface TLPassportElementPersonalDetails extends TLObject {
	readonly "@type": "passportElementPersonalDetails"
	readonly personal_details: TLPersonalDetails
}
export function passportElementPersonalDetails(object: TLObject): TLPassportElementPersonalDetails { return object as TLPassportElementPersonalDetails }
export interface TLPassportElementPassport extends TLObject {
	readonly "@type": "passportElementPassport"
	readonly passport: TLIdentityDocument
}
export function passportElementPassport(object: TLObject): TLPassportElementPassport { return object as TLPassportElementPassport }
export interface TLPassportElementDriverLicense extends TLObject {
	readonly "@type": "passportElementDriverLicense"
	readonly driver_license: TLIdentityDocument
}
export function passportElementDriverLicense(object: TLObject): TLPassportElementDriverLicense { return object as TLPassportElementDriverLicense }
export interface TLPassportElementIdentityCard extends TLObject {
	readonly "@type": "passportElementIdentityCard"
	readonly identity_card: TLIdentityDocument
}
export function passportElementIdentityCard(object: TLObject): TLPassportElementIdentityCard { return object as TLPassportElementIdentityCard }
export interface TLPassportElementInternalPassport extends TLObject {
	readonly "@type": "passportElementInternalPassport"
	readonly internal_passport: TLIdentityDocument
}
export function passportElementInternalPassport(object: TLObject): TLPassportElementInternalPassport { return object as TLPassportElementInternalPassport }
export interface TLPassportElementAddress extends TLObject {
	readonly "@type": "passportElementAddress"
	readonly address: TLAddress
}
export function passportElementAddress(object: TLObject): TLPassportElementAddress { return object as TLPassportElementAddress }
export interface TLPassportElementUtilityBill extends TLObject {
	readonly "@type": "passportElementUtilityBill"
	readonly utility_bill: TLPersonalDocument
}
export function passportElementUtilityBill(object: TLObject): TLPassportElementUtilityBill { return object as TLPassportElementUtilityBill }
export interface TLPassportElementBankStatement extends TLObject {
	readonly "@type": "passportElementBankStatement"
	readonly bank_statement: TLPersonalDocument
}
export function passportElementBankStatement(object: TLObject): TLPassportElementBankStatement { return object as TLPassportElementBankStatement }
export interface TLPassportElementRentalAgreement extends TLObject {
	readonly "@type": "passportElementRentalAgreement"
	readonly rental_agreement: TLPersonalDocument
}
export function passportElementRentalAgreement(object: TLObject): TLPassportElementRentalAgreement { return object as TLPassportElementRentalAgreement }
export interface TLPassportElementPassportRegistration extends TLObject {
	readonly "@type": "passportElementPassportRegistration"
	readonly passport_registration: TLPersonalDocument
}
export function passportElementPassportRegistration(object: TLObject): TLPassportElementPassportRegistration { return object as TLPassportElementPassportRegistration }
export interface TLPassportElementTemporaryRegistration extends TLObject {
	readonly "@type": "passportElementTemporaryRegistration"
	readonly temporary_registration: TLPersonalDocument
}
export function passportElementTemporaryRegistration(object: TLObject): TLPassportElementTemporaryRegistration { return object as TLPassportElementTemporaryRegistration }
export interface TLPassportElementPhoneNumber extends TLObject {
	readonly "@type": "passportElementPhoneNumber"
	readonly phone_number: string
}
export function passportElementPhoneNumber(object: TLObject): TLPassportElementPhoneNumber { return object as TLPassportElementPhoneNumber }
export interface TLPassportElementEmailAddress extends TLObject {
	readonly "@type": "passportElementEmailAddress"
	readonly email_address: string
}
export function passportElementEmailAddress(object: TLObject): TLPassportElementEmailAddress { return object as TLPassportElementEmailAddress }
export type TLPassportElement = TLPassportElementPersonalDetails | TLPassportElementPassport | TLPassportElementDriverLicense | TLPassportElementIdentityCard | TLPassportElementInternalPassport | TLPassportElementAddress | TLPassportElementUtilityBill | TLPassportElementBankStatement | TLPassportElementRentalAgreement | TLPassportElementPassportRegistration | TLPassportElementTemporaryRegistration | TLPassportElementPhoneNumber | TLPassportElementEmailAddress
export interface TLInputPassportElementPersonalDetails extends TLObject {
	readonly "@type": "inputPassportElementPersonalDetails"
	readonly personal_details: TLPersonalDetails
}
export function inputPassportElementPersonalDetails(object: TLObject): TLInputPassportElementPersonalDetails { return object as TLInputPassportElementPersonalDetails }
export interface TLInputPassportElementPassport extends TLObject {
	readonly "@type": "inputPassportElementPassport"
	readonly passport: TLInputIdentityDocument
}
export function inputPassportElementPassport(object: TLObject): TLInputPassportElementPassport { return object as TLInputPassportElementPassport }
export interface TLInputPassportElementDriverLicense extends TLObject {
	readonly "@type": "inputPassportElementDriverLicense"
	readonly driver_license: TLInputIdentityDocument
}
export function inputPassportElementDriverLicense(object: TLObject): TLInputPassportElementDriverLicense { return object as TLInputPassportElementDriverLicense }
export interface TLInputPassportElementIdentityCard extends TLObject {
	readonly "@type": "inputPassportElementIdentityCard"
	readonly identity_card: TLInputIdentityDocument
}
export function inputPassportElementIdentityCard(object: TLObject): TLInputPassportElementIdentityCard { return object as TLInputPassportElementIdentityCard }
export interface TLInputPassportElementInternalPassport extends TLObject {
	readonly "@type": "inputPassportElementInternalPassport"
	readonly internal_passport: TLInputIdentityDocument
}
export function inputPassportElementInternalPassport(object: TLObject): TLInputPassportElementInternalPassport { return object as TLInputPassportElementInternalPassport }
export interface TLInputPassportElementAddress extends TLObject {
	readonly "@type": "inputPassportElementAddress"
	readonly address: TLAddress
}
export function inputPassportElementAddress(object: TLObject): TLInputPassportElementAddress { return object as TLInputPassportElementAddress }
export interface TLInputPassportElementUtilityBill extends TLObject {
	readonly "@type": "inputPassportElementUtilityBill"
	readonly utility_bill: TLInputPersonalDocument
}
export function inputPassportElementUtilityBill(object: TLObject): TLInputPassportElementUtilityBill { return object as TLInputPassportElementUtilityBill }
export interface TLInputPassportElementBankStatement extends TLObject {
	readonly "@type": "inputPassportElementBankStatement"
	readonly bank_statement: TLInputPersonalDocument
}
export function inputPassportElementBankStatement(object: TLObject): TLInputPassportElementBankStatement { return object as TLInputPassportElementBankStatement }
export interface TLInputPassportElementRentalAgreement extends TLObject {
	readonly "@type": "inputPassportElementRentalAgreement"
	readonly rental_agreement: TLInputPersonalDocument
}
export function inputPassportElementRentalAgreement(object: TLObject): TLInputPassportElementRentalAgreement { return object as TLInputPassportElementRentalAgreement }
export interface TLInputPassportElementPassportRegistration extends TLObject {
	readonly "@type": "inputPassportElementPassportRegistration"
	readonly passport_registration: TLInputPersonalDocument
}
export function inputPassportElementPassportRegistration(object: TLObject): TLInputPassportElementPassportRegistration { return object as TLInputPassportElementPassportRegistration }
export interface TLInputPassportElementTemporaryRegistration extends TLObject {
	readonly "@type": "inputPassportElementTemporaryRegistration"
	readonly temporary_registration: TLInputPersonalDocument
}
export function inputPassportElementTemporaryRegistration(object: TLObject): TLInputPassportElementTemporaryRegistration { return object as TLInputPassportElementTemporaryRegistration }
export interface TLInputPassportElementPhoneNumber extends TLObject {
	readonly "@type": "inputPassportElementPhoneNumber"
	readonly phone_number: string
}
export function inputPassportElementPhoneNumber(object: TLObject): TLInputPassportElementPhoneNumber { return object as TLInputPassportElementPhoneNumber }
export interface TLInputPassportElementEmailAddress extends TLObject {
	readonly "@type": "inputPassportElementEmailAddress"
	readonly email_address: string
}
export function inputPassportElementEmailAddress(object: TLObject): TLInputPassportElementEmailAddress { return object as TLInputPassportElementEmailAddress }
export type TLInputPassportElement = TLInputPassportElementPersonalDetails | TLInputPassportElementPassport | TLInputPassportElementDriverLicense | TLInputPassportElementIdentityCard | TLInputPassportElementInternalPassport | TLInputPassportElementAddress | TLInputPassportElementUtilityBill | TLInputPassportElementBankStatement | TLInputPassportElementRentalAgreement | TLInputPassportElementPassportRegistration | TLInputPassportElementTemporaryRegistration | TLInputPassportElementPhoneNumber | TLInputPassportElementEmailAddress
export interface TLPassportElements extends TLObject {
	readonly "@type": "passportElements"
	readonly elements: ReadonlyArray<TLPassportElement>
}
export function passportElements(object: TLObject): TLPassportElements { return object as TLPassportElements }
export interface TLPassportElementErrorSourceUnspecified extends TLObject {
	readonly "@type": "passportElementErrorSourceUnspecified"
}
export function passportElementErrorSourceUnspecified(object: TLObject): TLPassportElementErrorSourceUnspecified { return object as TLPassportElementErrorSourceUnspecified }
export interface TLPassportElementErrorSourceDataField extends TLObject {
	readonly "@type": "passportElementErrorSourceDataField"
	readonly field_name: string
}
export function passportElementErrorSourceDataField(object: TLObject): TLPassportElementErrorSourceDataField { return object as TLPassportElementErrorSourceDataField }
export interface TLPassportElementErrorSourceFrontSide extends TLObject {
	readonly "@type": "passportElementErrorSourceFrontSide"
}
export function passportElementErrorSourceFrontSide(object: TLObject): TLPassportElementErrorSourceFrontSide { return object as TLPassportElementErrorSourceFrontSide }
export interface TLPassportElementErrorSourceReverseSide extends TLObject {
	readonly "@type": "passportElementErrorSourceReverseSide"
}
export function passportElementErrorSourceReverseSide(object: TLObject): TLPassportElementErrorSourceReverseSide { return object as TLPassportElementErrorSourceReverseSide }
export interface TLPassportElementErrorSourceSelfie extends TLObject {
	readonly "@type": "passportElementErrorSourceSelfie"
}
export function passportElementErrorSourceSelfie(object: TLObject): TLPassportElementErrorSourceSelfie { return object as TLPassportElementErrorSourceSelfie }
export interface TLPassportElementErrorSourceTranslationFile extends TLObject {
	readonly "@type": "passportElementErrorSourceTranslationFile"
	readonly file_index: number
}
export function passportElementErrorSourceTranslationFile(object: TLObject): TLPassportElementErrorSourceTranslationFile { return object as TLPassportElementErrorSourceTranslationFile }
export interface TLPassportElementErrorSourceTranslationFiles extends TLObject {
	readonly "@type": "passportElementErrorSourceTranslationFiles"
}
export function passportElementErrorSourceTranslationFiles(object: TLObject): TLPassportElementErrorSourceTranslationFiles { return object as TLPassportElementErrorSourceTranslationFiles }
export interface TLPassportElementErrorSourceFile extends TLObject {
	readonly "@type": "passportElementErrorSourceFile"
	readonly file_index: number
}
export function passportElementErrorSourceFile(object: TLObject): TLPassportElementErrorSourceFile { return object as TLPassportElementErrorSourceFile }
export interface TLPassportElementErrorSourceFiles extends TLObject {
	readonly "@type": "passportElementErrorSourceFiles"
}
export function passportElementErrorSourceFiles(object: TLObject): TLPassportElementErrorSourceFiles { return object as TLPassportElementErrorSourceFiles }
export type TLPassportElementErrorSource = TLPassportElementErrorSourceUnspecified | TLPassportElementErrorSourceDataField | TLPassportElementErrorSourceFrontSide | TLPassportElementErrorSourceReverseSide | TLPassportElementErrorSourceSelfie | TLPassportElementErrorSourceTranslationFile | TLPassportElementErrorSourceTranslationFiles | TLPassportElementErrorSourceFile | TLPassportElementErrorSourceFiles
export interface TLPassportElementError extends TLObject {
	readonly "@type": "passportElementError"
	readonly type: TLPassportElementType
	readonly message: string
	readonly source: TLPassportElementErrorSource
}
export function passportElementError(object: TLObject): TLPassportElementError { return object as TLPassportElementError }
export interface TLPassportSuitableElement extends TLObject {
	readonly "@type": "passportSuitableElement"
	readonly type: TLPassportElementType
	readonly is_selfie_required: boolean
	readonly is_translation_required: boolean
	readonly is_native_name_required: boolean
}
export function passportSuitableElement(object: TLObject): TLPassportSuitableElement { return object as TLPassportSuitableElement }
export interface TLPassportRequiredElement extends TLObject {
	readonly "@type": "passportRequiredElement"
	readonly suitable_elements: ReadonlyArray<TLPassportSuitableElement>
}
export function passportRequiredElement(object: TLObject): TLPassportRequiredElement { return object as TLPassportRequiredElement }
export interface TLPassportAuthorizationForm extends TLObject {
	readonly "@type": "passportAuthorizationForm"
	readonly id: number
	readonly required_elements: ReadonlyArray<TLPassportRequiredElement>
	readonly privacy_policy_url: string
}
export function passportAuthorizationForm(object: TLObject): TLPassportAuthorizationForm { return object as TLPassportAuthorizationForm }
export interface TLPassportElementsWithErrors extends TLObject {
	readonly "@type": "passportElementsWithErrors"
	readonly elements: ReadonlyArray<TLPassportElement>
	readonly errors: ReadonlyArray<TLPassportElementError>
}
export function passportElementsWithErrors(object: TLObject): TLPassportElementsWithErrors { return object as TLPassportElementsWithErrors }
export interface TLEncryptedCredentials extends TLObject {
	readonly "@type": "encryptedCredentials"
	readonly data: Uint8Array
	readonly hash: Uint8Array
	readonly secret: Uint8Array
}
export function encryptedCredentials(object: TLObject): TLEncryptedCredentials { return object as TLEncryptedCredentials }
export interface TLEncryptedPassportElement extends TLObject {
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
export function encryptedPassportElement(object: TLObject): TLEncryptedPassportElement { return object as TLEncryptedPassportElement }
export interface TLInputPassportElementErrorSourceUnspecified extends TLObject {
	readonly "@type": "inputPassportElementErrorSourceUnspecified"
	readonly element_hash: Uint8Array
}
export function inputPassportElementErrorSourceUnspecified(object: TLObject): TLInputPassportElementErrorSourceUnspecified { return object as TLInputPassportElementErrorSourceUnspecified }
export interface TLInputPassportElementErrorSourceDataField extends TLObject {
	readonly "@type": "inputPassportElementErrorSourceDataField"
	readonly field_name: string
	readonly data_hash: Uint8Array
}
export function inputPassportElementErrorSourceDataField(object: TLObject): TLInputPassportElementErrorSourceDataField { return object as TLInputPassportElementErrorSourceDataField }
export interface TLInputPassportElementErrorSourceFrontSide extends TLObject {
	readonly "@type": "inputPassportElementErrorSourceFrontSide"
	readonly file_hash: Uint8Array
}
export function inputPassportElementErrorSourceFrontSide(object: TLObject): TLInputPassportElementErrorSourceFrontSide { return object as TLInputPassportElementErrorSourceFrontSide }
export interface TLInputPassportElementErrorSourceReverseSide extends TLObject {
	readonly "@type": "inputPassportElementErrorSourceReverseSide"
	readonly file_hash: Uint8Array
}
export function inputPassportElementErrorSourceReverseSide(object: TLObject): TLInputPassportElementErrorSourceReverseSide { return object as TLInputPassportElementErrorSourceReverseSide }
export interface TLInputPassportElementErrorSourceSelfie extends TLObject {
	readonly "@type": "inputPassportElementErrorSourceSelfie"
	readonly file_hash: Uint8Array
}
export function inputPassportElementErrorSourceSelfie(object: TLObject): TLInputPassportElementErrorSourceSelfie { return object as TLInputPassportElementErrorSourceSelfie }
export interface TLInputPassportElementErrorSourceTranslationFile extends TLObject {
	readonly "@type": "inputPassportElementErrorSourceTranslationFile"
	readonly file_hash: Uint8Array
}
export function inputPassportElementErrorSourceTranslationFile(object: TLObject): TLInputPassportElementErrorSourceTranslationFile { return object as TLInputPassportElementErrorSourceTranslationFile }
export interface TLInputPassportElementErrorSourceTranslationFiles extends TLObject {
	readonly "@type": "inputPassportElementErrorSourceTranslationFiles"
	readonly file_hashes: ReadonlyArray<Uint8Array>
}
export function inputPassportElementErrorSourceTranslationFiles(object: TLObject): TLInputPassportElementErrorSourceTranslationFiles { return object as TLInputPassportElementErrorSourceTranslationFiles }
export interface TLInputPassportElementErrorSourceFile extends TLObject {
	readonly "@type": "inputPassportElementErrorSourceFile"
	readonly file_hash: Uint8Array
}
export function inputPassportElementErrorSourceFile(object: TLObject): TLInputPassportElementErrorSourceFile { return object as TLInputPassportElementErrorSourceFile }
export interface TLInputPassportElementErrorSourceFiles extends TLObject {
	readonly "@type": "inputPassportElementErrorSourceFiles"
	readonly file_hashes: ReadonlyArray<Uint8Array>
}
export function inputPassportElementErrorSourceFiles(object: TLObject): TLInputPassportElementErrorSourceFiles { return object as TLInputPassportElementErrorSourceFiles }
export type TLInputPassportElementErrorSource = TLInputPassportElementErrorSourceUnspecified | TLInputPassportElementErrorSourceDataField | TLInputPassportElementErrorSourceFrontSide | TLInputPassportElementErrorSourceReverseSide | TLInputPassportElementErrorSourceSelfie | TLInputPassportElementErrorSourceTranslationFile | TLInputPassportElementErrorSourceTranslationFiles | TLInputPassportElementErrorSourceFile | TLInputPassportElementErrorSourceFiles
export interface TLInputPassportElementError extends TLObject {
	readonly "@type": "inputPassportElementError"
	readonly type: TLPassportElementType
	readonly message: string
	readonly source: TLInputPassportElementErrorSource
}
export function inputPassportElementError(object: TLObject): TLInputPassportElementError { return object as TLInputPassportElementError }
export interface TLMessageText extends TLObject {
	readonly "@type": "messageText"
	readonly text: TLFormattedText
	readonly web_page: TLWebPage
}
export function messageText(object: TLObject): TLMessageText { return object as TLMessageText }
export interface TLMessageAnimation extends TLObject {
	readonly "@type": "messageAnimation"
	readonly animation: TLAnimation
	readonly caption: TLFormattedText
	readonly is_secret: boolean
}
export function messageAnimation(object: TLObject): TLMessageAnimation { return object as TLMessageAnimation }
export interface TLMessageAudio extends TLObject {
	readonly "@type": "messageAudio"
	readonly audio: TLAudio
	readonly caption: TLFormattedText
}
export function messageAudio(object: TLObject): TLMessageAudio { return object as TLMessageAudio }
export interface TLMessageDocument extends TLObject {
	readonly "@type": "messageDocument"
	readonly document: TLDocument
	readonly caption: TLFormattedText
}
export function messageDocument(object: TLObject): TLMessageDocument { return object as TLMessageDocument }
export interface TLMessagePhoto extends TLObject {
	readonly "@type": "messagePhoto"
	readonly photo: TLPhoto
	readonly caption: TLFormattedText
	readonly is_secret: boolean
}
export function messagePhoto(object: TLObject): TLMessagePhoto { return object as TLMessagePhoto }
export interface TLMessageExpiredPhoto extends TLObject {
	readonly "@type": "messageExpiredPhoto"
}
export function messageExpiredPhoto(object: TLObject): TLMessageExpiredPhoto { return object as TLMessageExpiredPhoto }
export interface TLMessageSticker extends TLObject {
	readonly "@type": "messageSticker"
	readonly sticker: TLSticker
}
export function messageSticker(object: TLObject): TLMessageSticker { return object as TLMessageSticker }
export interface TLMessageVideo extends TLObject {
	readonly "@type": "messageVideo"
	readonly video: TLVideo
	readonly caption: TLFormattedText
	readonly is_secret: boolean
}
export function messageVideo(object: TLObject): TLMessageVideo { return object as TLMessageVideo }
export interface TLMessageExpiredVideo extends TLObject {
	readonly "@type": "messageExpiredVideo"
}
export function messageExpiredVideo(object: TLObject): TLMessageExpiredVideo { return object as TLMessageExpiredVideo }
export interface TLMessageVideoNote extends TLObject {
	readonly "@type": "messageVideoNote"
	readonly video_note: TLVideoNote
	readonly is_viewed: boolean
	readonly is_secret: boolean
}
export function messageVideoNote(object: TLObject): TLMessageVideoNote { return object as TLMessageVideoNote }
export interface TLMessageVoiceNote extends TLObject {
	readonly "@type": "messageVoiceNote"
	readonly voice_note: TLVoiceNote
	readonly caption: TLFormattedText
	readonly is_listened: boolean
}
export function messageVoiceNote(object: TLObject): TLMessageVoiceNote { return object as TLMessageVoiceNote }
export interface TLMessageLocation extends TLObject {
	readonly "@type": "messageLocation"
	readonly location: TLLocation
	readonly live_period: number
	readonly expires_in: number
	readonly heading: number
	readonly proximity_alert_radius: number
}
export function messageLocation(object: TLObject): TLMessageLocation { return object as TLMessageLocation }
export interface TLMessageVenue extends TLObject {
	readonly "@type": "messageVenue"
	readonly venue: TLVenue
}
export function messageVenue(object: TLObject): TLMessageVenue { return object as TLMessageVenue }
export interface TLMessageContact extends TLObject {
	readonly "@type": "messageContact"
	readonly contact: TLContact
}
export function messageContact(object: TLObject): TLMessageContact { return object as TLMessageContact }
export interface TLMessageDice extends TLObject {
	readonly "@type": "messageDice"
	readonly initial_state: TLDiceStickers
	readonly final_state: TLDiceStickers
	readonly emoji: string
	readonly value: number
	readonly success_animation_frame_number: number
}
export function messageDice(object: TLObject): TLMessageDice { return object as TLMessageDice }
export interface TLMessageGame extends TLObject {
	readonly "@type": "messageGame"
	readonly game: TLGame
}
export function messageGame(object: TLObject): TLMessageGame { return object as TLMessageGame }
export interface TLMessagePoll extends TLObject {
	readonly "@type": "messagePoll"
	readonly poll: TLPoll
}
export function messagePoll(object: TLObject): TLMessagePoll { return object as TLMessagePoll }
export interface TLMessageInvoice extends TLObject {
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
export function messageInvoice(object: TLObject): TLMessageInvoice { return object as TLMessageInvoice }
export interface TLMessageCall extends TLObject {
	readonly "@type": "messageCall"
	readonly is_video: boolean
	readonly discard_reason: TLCallDiscardReason
	readonly duration: number
}
export function messageCall(object: TLObject): TLMessageCall { return object as TLMessageCall }
export interface TLMessageBasicGroupChatCreate extends TLObject {
	readonly "@type": "messageBasicGroupChatCreate"
	readonly title: string
	readonly member_user_ids: ReadonlyArray<number>
}
export function messageBasicGroupChatCreate(object: TLObject): TLMessageBasicGroupChatCreate { return object as TLMessageBasicGroupChatCreate }
export interface TLMessageSupergroupChatCreate extends TLObject {
	readonly "@type": "messageSupergroupChatCreate"
	readonly title: string
}
export function messageSupergroupChatCreate(object: TLObject): TLMessageSupergroupChatCreate { return object as TLMessageSupergroupChatCreate }
export interface TLMessageChatChangeTitle extends TLObject {
	readonly "@type": "messageChatChangeTitle"
	readonly title: string
}
export function messageChatChangeTitle(object: TLObject): TLMessageChatChangeTitle { return object as TLMessageChatChangeTitle }
export interface TLMessageChatChangePhoto extends TLObject {
	readonly "@type": "messageChatChangePhoto"
	readonly photo: TLChatPhoto
}
export function messageChatChangePhoto(object: TLObject): TLMessageChatChangePhoto { return object as TLMessageChatChangePhoto }
export interface TLMessageChatDeletePhoto extends TLObject {
	readonly "@type": "messageChatDeletePhoto"
}
export function messageChatDeletePhoto(object: TLObject): TLMessageChatDeletePhoto { return object as TLMessageChatDeletePhoto }
export interface TLMessageChatAddMembers extends TLObject {
	readonly "@type": "messageChatAddMembers"
	readonly member_user_ids: ReadonlyArray<number>
}
export function messageChatAddMembers(object: TLObject): TLMessageChatAddMembers { return object as TLMessageChatAddMembers }
export interface TLMessageChatJoinByLink extends TLObject {
	readonly "@type": "messageChatJoinByLink"
}
export function messageChatJoinByLink(object: TLObject): TLMessageChatJoinByLink { return object as TLMessageChatJoinByLink }
export interface TLMessageChatDeleteMember extends TLObject {
	readonly "@type": "messageChatDeleteMember"
	readonly user_id: number
}
export function messageChatDeleteMember(object: TLObject): TLMessageChatDeleteMember { return object as TLMessageChatDeleteMember }
export interface TLMessageChatUpgradeTo extends TLObject {
	readonly "@type": "messageChatUpgradeTo"
	readonly supergroup_id: number
}
export function messageChatUpgradeTo(object: TLObject): TLMessageChatUpgradeTo { return object as TLMessageChatUpgradeTo }
export interface TLMessageChatUpgradeFrom extends TLObject {
	readonly "@type": "messageChatUpgradeFrom"
	readonly title: string
	readonly basic_group_id: number
}
export function messageChatUpgradeFrom(object: TLObject): TLMessageChatUpgradeFrom { return object as TLMessageChatUpgradeFrom }
export interface TLMessagePinMessage extends TLObject {
	readonly "@type": "messagePinMessage"
	readonly message_id: number
}
export function messagePinMessage(object: TLObject): TLMessagePinMessage { return object as TLMessagePinMessage }
export interface TLMessageScreenshotTaken extends TLObject {
	readonly "@type": "messageScreenshotTaken"
}
export function messageScreenshotTaken(object: TLObject): TLMessageScreenshotTaken { return object as TLMessageScreenshotTaken }
export interface TLMessageChatSetTtl extends TLObject {
	readonly "@type": "messageChatSetTtl"
	readonly ttl: number
}
export function messageChatSetTtl(object: TLObject): TLMessageChatSetTtl { return object as TLMessageChatSetTtl }
export interface TLMessageCustomServiceAction extends TLObject {
	readonly "@type": "messageCustomServiceAction"
	readonly text: string
}
export function messageCustomServiceAction(object: TLObject): TLMessageCustomServiceAction { return object as TLMessageCustomServiceAction }
export interface TLMessageGameScore extends TLObject {
	readonly "@type": "messageGameScore"
	readonly game_message_id: number
	readonly game_id: string
	readonly score: number
}
export function messageGameScore(object: TLObject): TLMessageGameScore { return object as TLMessageGameScore }
export interface TLMessagePaymentSuccessful extends TLObject {
	readonly "@type": "messagePaymentSuccessful"
	readonly invoice_message_id: number
	readonly currency: string
	readonly total_amount: number
}
export function messagePaymentSuccessful(object: TLObject): TLMessagePaymentSuccessful { return object as TLMessagePaymentSuccessful }
export interface TLMessagePaymentSuccessfulBot extends TLObject {
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
export function messagePaymentSuccessfulBot(object: TLObject): TLMessagePaymentSuccessfulBot { return object as TLMessagePaymentSuccessfulBot }
export interface TLMessageContactRegistered extends TLObject {
	readonly "@type": "messageContactRegistered"
}
export function messageContactRegistered(object: TLObject): TLMessageContactRegistered { return object as TLMessageContactRegistered }
export interface TLMessageWebsiteConnected extends TLObject {
	readonly "@type": "messageWebsiteConnected"
	readonly domain_name: string
}
export function messageWebsiteConnected(object: TLObject): TLMessageWebsiteConnected { return object as TLMessageWebsiteConnected }
export interface TLMessagePassportDataSent extends TLObject {
	readonly "@type": "messagePassportDataSent"
	readonly types: ReadonlyArray<TLPassportElementType>
}
export function messagePassportDataSent(object: TLObject): TLMessagePassportDataSent { return object as TLMessagePassportDataSent }
export interface TLMessagePassportDataReceived extends TLObject {
	readonly "@type": "messagePassportDataReceived"
	readonly elements: ReadonlyArray<TLEncryptedPassportElement>
	readonly credentials: TLEncryptedCredentials
}
export function messagePassportDataReceived(object: TLObject): TLMessagePassportDataReceived { return object as TLMessagePassportDataReceived }
export interface TLMessageProximityAlertTriggered extends TLObject {
	readonly "@type": "messageProximityAlertTriggered"
	readonly approacher: TLMessageSender
	readonly observer: TLMessageSender
	readonly distance: number
}
export function messageProximityAlertTriggered(object: TLObject): TLMessageProximityAlertTriggered { return object as TLMessageProximityAlertTriggered }
export interface TLMessageUnsupported extends TLObject {
	readonly "@type": "messageUnsupported"
}
export function messageUnsupported(object: TLObject): TLMessageUnsupported { return object as TLMessageUnsupported }
export type TLMessageContent = TLMessageText | TLMessageAnimation | TLMessageAudio | TLMessageDocument | TLMessagePhoto | TLMessageExpiredPhoto | TLMessageSticker | TLMessageVideo | TLMessageExpiredVideo | TLMessageVideoNote | TLMessageVoiceNote | TLMessageLocation | TLMessageVenue | TLMessageContact | TLMessageDice | TLMessageGame | TLMessagePoll | TLMessageInvoice | TLMessageCall | TLMessageBasicGroupChatCreate | TLMessageSupergroupChatCreate | TLMessageChatChangeTitle | TLMessageChatChangePhoto | TLMessageChatDeletePhoto | TLMessageChatAddMembers | TLMessageChatJoinByLink | TLMessageChatDeleteMember | TLMessageChatUpgradeTo | TLMessageChatUpgradeFrom | TLMessagePinMessage | TLMessageScreenshotTaken | TLMessageChatSetTtl | TLMessageCustomServiceAction | TLMessageGameScore | TLMessagePaymentSuccessful | TLMessagePaymentSuccessfulBot | TLMessageContactRegistered | TLMessageWebsiteConnected | TLMessagePassportDataSent | TLMessagePassportDataReceived | TLMessageProximityAlertTriggered | TLMessageUnsupported
export interface TLTextEntityTypeMention extends TLObject {
	readonly "@type": "textEntityTypeMention"
}
export function textEntityTypeMention(object: TLObject): TLTextEntityTypeMention { return object as TLTextEntityTypeMention }
export interface TLTextEntityTypeHashtag extends TLObject {
	readonly "@type": "textEntityTypeHashtag"
}
export function textEntityTypeHashtag(object: TLObject): TLTextEntityTypeHashtag { return object as TLTextEntityTypeHashtag }
export interface TLTextEntityTypeCashtag extends TLObject {
	readonly "@type": "textEntityTypeCashtag"
}
export function textEntityTypeCashtag(object: TLObject): TLTextEntityTypeCashtag { return object as TLTextEntityTypeCashtag }
export interface TLTextEntityTypeBotCommand extends TLObject {
	readonly "@type": "textEntityTypeBotCommand"
}
export function textEntityTypeBotCommand(object: TLObject): TLTextEntityTypeBotCommand { return object as TLTextEntityTypeBotCommand }
export interface TLTextEntityTypeUrl extends TLObject {
	readonly "@type": "textEntityTypeUrl"
}
export function textEntityTypeUrl(object: TLObject): TLTextEntityTypeUrl { return object as TLTextEntityTypeUrl }
export interface TLTextEntityTypeEmailAddress extends TLObject {
	readonly "@type": "textEntityTypeEmailAddress"
}
export function textEntityTypeEmailAddress(object: TLObject): TLTextEntityTypeEmailAddress { return object as TLTextEntityTypeEmailAddress }
export interface TLTextEntityTypePhoneNumber extends TLObject {
	readonly "@type": "textEntityTypePhoneNumber"
}
export function textEntityTypePhoneNumber(object: TLObject): TLTextEntityTypePhoneNumber { return object as TLTextEntityTypePhoneNumber }
export interface TLTextEntityTypeBankCardNumber extends TLObject {
	readonly "@type": "textEntityTypeBankCardNumber"
}
export function textEntityTypeBankCardNumber(object: TLObject): TLTextEntityTypeBankCardNumber { return object as TLTextEntityTypeBankCardNumber }
export interface TLTextEntityTypeBold extends TLObject {
	readonly "@type": "textEntityTypeBold"
}
export function textEntityTypeBold(object: TLObject): TLTextEntityTypeBold { return object as TLTextEntityTypeBold }
export interface TLTextEntityTypeItalic extends TLObject {
	readonly "@type": "textEntityTypeItalic"
}
export function textEntityTypeItalic(object: TLObject): TLTextEntityTypeItalic { return object as TLTextEntityTypeItalic }
export interface TLTextEntityTypeUnderline extends TLObject {
	readonly "@type": "textEntityTypeUnderline"
}
export function textEntityTypeUnderline(object: TLObject): TLTextEntityTypeUnderline { return object as TLTextEntityTypeUnderline }
export interface TLTextEntityTypeStrikethrough extends TLObject {
	readonly "@type": "textEntityTypeStrikethrough"
}
export function textEntityTypeStrikethrough(object: TLObject): TLTextEntityTypeStrikethrough { return object as TLTextEntityTypeStrikethrough }
export interface TLTextEntityTypeCode extends TLObject {
	readonly "@type": "textEntityTypeCode"
}
export function textEntityTypeCode(object: TLObject): TLTextEntityTypeCode { return object as TLTextEntityTypeCode }
export interface TLTextEntityTypePre extends TLObject {
	readonly "@type": "textEntityTypePre"
}
export function textEntityTypePre(object: TLObject): TLTextEntityTypePre { return object as TLTextEntityTypePre }
export interface TLTextEntityTypePreCode extends TLObject {
	readonly "@type": "textEntityTypePreCode"
	readonly language: string
}
export function textEntityTypePreCode(object: TLObject): TLTextEntityTypePreCode { return object as TLTextEntityTypePreCode }
export interface TLTextEntityTypeTextUrl extends TLObject {
	readonly "@type": "textEntityTypeTextUrl"
	readonly url: string
}
export function textEntityTypeTextUrl(object: TLObject): TLTextEntityTypeTextUrl { return object as TLTextEntityTypeTextUrl }
export interface TLTextEntityTypeMentionName extends TLObject {
	readonly "@type": "textEntityTypeMentionName"
	readonly user_id: number
}
export function textEntityTypeMentionName(object: TLObject): TLTextEntityTypeMentionName { return object as TLTextEntityTypeMentionName }
export type TLTextEntityType = TLTextEntityTypeMention | TLTextEntityTypeHashtag | TLTextEntityTypeCashtag | TLTextEntityTypeBotCommand | TLTextEntityTypeUrl | TLTextEntityTypeEmailAddress | TLTextEntityTypePhoneNumber | TLTextEntityTypeBankCardNumber | TLTextEntityTypeBold | TLTextEntityTypeItalic | TLTextEntityTypeUnderline | TLTextEntityTypeStrikethrough | TLTextEntityTypeCode | TLTextEntityTypePre | TLTextEntityTypePreCode | TLTextEntityTypeTextUrl | TLTextEntityTypeMentionName
export interface TLInputThumbnail extends TLObject {
	readonly "@type": "inputThumbnail"
	readonly thumbnail: TLInputFile
	readonly width: number
	readonly height: number
}
export function inputThumbnail(object: TLObject): TLInputThumbnail { return object as TLInputThumbnail }
export interface TLMessageSchedulingStateSendAtDate extends TLObject {
	readonly "@type": "messageSchedulingStateSendAtDate"
	readonly send_date: number
}
export function messageSchedulingStateSendAtDate(object: TLObject): TLMessageSchedulingStateSendAtDate { return object as TLMessageSchedulingStateSendAtDate }
export interface TLMessageSchedulingStateSendWhenOnline extends TLObject {
	readonly "@type": "messageSchedulingStateSendWhenOnline"
}
export function messageSchedulingStateSendWhenOnline(object: TLObject): TLMessageSchedulingStateSendWhenOnline { return object as TLMessageSchedulingStateSendWhenOnline }
export type TLMessageSchedulingState = TLMessageSchedulingStateSendAtDate | TLMessageSchedulingStateSendWhenOnline
export interface TLMessageSendOptions extends TLObject {
	readonly "@type": "messageSendOptions"
	readonly disable_notification: boolean
	readonly from_background: boolean
	readonly scheduling_state: TLMessageSchedulingState
}
export function messageSendOptions(object: TLObject): TLMessageSendOptions { return object as TLMessageSendOptions }
export interface TLMessageCopyOptions extends TLObject {
	readonly "@type": "messageCopyOptions"
	readonly send_copy: boolean
	readonly replace_caption: boolean
	readonly new_caption: TLFormattedText
}
export function messageCopyOptions(object: TLObject): TLMessageCopyOptions { return object as TLMessageCopyOptions }
export interface TLInputMessageText extends TLObject {
	readonly "@type": "inputMessageText"
	readonly text: TLFormattedText
	readonly disable_web_page_preview: boolean
	readonly clear_draft: boolean
}
export function inputMessageText(object: TLObject): TLInputMessageText { return object as TLInputMessageText }
export interface TLInputMessageAnimation extends TLObject {
	readonly "@type": "inputMessageAnimation"
	readonly animation: TLInputFile
	readonly thumbnail: TLInputThumbnail
	readonly added_sticker_file_ids: ReadonlyArray<number>
	readonly duration: number
	readonly width: number
	readonly height: number
	readonly caption: TLFormattedText
}
export function inputMessageAnimation(object: TLObject): TLInputMessageAnimation { return object as TLInputMessageAnimation }
export interface TLInputMessageAudio extends TLObject {
	readonly "@type": "inputMessageAudio"
	readonly audio: TLInputFile
	readonly album_cover_thumbnail: TLInputThumbnail
	readonly duration: number
	readonly title: string
	readonly performer: string
	readonly caption: TLFormattedText
}
export function inputMessageAudio(object: TLObject): TLInputMessageAudio { return object as TLInputMessageAudio }
export interface TLInputMessageDocument extends TLObject {
	readonly "@type": "inputMessageDocument"
	readonly document: TLInputFile
	readonly thumbnail: TLInputThumbnail
	readonly disable_content_type_detection: boolean
	readonly caption: TLFormattedText
}
export function inputMessageDocument(object: TLObject): TLInputMessageDocument { return object as TLInputMessageDocument }
export interface TLInputMessagePhoto extends TLObject {
	readonly "@type": "inputMessagePhoto"
	readonly photo: TLInputFile
	readonly thumbnail: TLInputThumbnail
	readonly added_sticker_file_ids: ReadonlyArray<number>
	readonly width: number
	readonly height: number
	readonly caption: TLFormattedText
	readonly ttl: number
}
export function inputMessagePhoto(object: TLObject): TLInputMessagePhoto { return object as TLInputMessagePhoto }
export interface TLInputMessageSticker extends TLObject {
	readonly "@type": "inputMessageSticker"
	readonly sticker: TLInputFile
	readonly thumbnail: TLInputThumbnail
	readonly width: number
	readonly height: number
}
export function inputMessageSticker(object: TLObject): TLInputMessageSticker { return object as TLInputMessageSticker }
export interface TLInputMessageVideo extends TLObject {
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
export function inputMessageVideo(object: TLObject): TLInputMessageVideo { return object as TLInputMessageVideo }
export interface TLInputMessageVideoNote extends TLObject {
	readonly "@type": "inputMessageVideoNote"
	readonly video_note: TLInputFile
	readonly thumbnail: TLInputThumbnail
	readonly duration: number
	readonly length: number
}
export function inputMessageVideoNote(object: TLObject): TLInputMessageVideoNote { return object as TLInputMessageVideoNote }
export interface TLInputMessageVoiceNote extends TLObject {
	readonly "@type": "inputMessageVoiceNote"
	readonly voice_note: TLInputFile
	readonly duration: number
	readonly waveform: Uint8Array
	readonly caption: TLFormattedText
}
export function inputMessageVoiceNote(object: TLObject): TLInputMessageVoiceNote { return object as TLInputMessageVoiceNote }
export interface TLInputMessageLocation extends TLObject {
	readonly "@type": "inputMessageLocation"
	readonly location: TLLocation
	readonly live_period: number
	readonly heading: number
	readonly proximity_alert_radius: number
}
export function inputMessageLocation(object: TLObject): TLInputMessageLocation { return object as TLInputMessageLocation }
export interface TLInputMessageVenue extends TLObject {
	readonly "@type": "inputMessageVenue"
	readonly venue: TLVenue
}
export function inputMessageVenue(object: TLObject): TLInputMessageVenue { return object as TLInputMessageVenue }
export interface TLInputMessageContact extends TLObject {
	readonly "@type": "inputMessageContact"
	readonly contact: TLContact
}
export function inputMessageContact(object: TLObject): TLInputMessageContact { return object as TLInputMessageContact }
export interface TLInputMessageDice extends TLObject {
	readonly "@type": "inputMessageDice"
	readonly emoji: string
	readonly clear_draft: boolean
}
export function inputMessageDice(object: TLObject): TLInputMessageDice { return object as TLInputMessageDice }
export interface TLInputMessageGame extends TLObject {
	readonly "@type": "inputMessageGame"
	readonly bot_user_id: number
	readonly game_short_name: string
}
export function inputMessageGame(object: TLObject): TLInputMessageGame { return object as TLInputMessageGame }
export interface TLInputMessageInvoice extends TLObject {
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
export function inputMessageInvoice(object: TLObject): TLInputMessageInvoice { return object as TLInputMessageInvoice }
export interface TLInputMessagePoll extends TLObject {
	readonly "@type": "inputMessagePoll"
	readonly question: string
	readonly options: ReadonlyArray<string>
	readonly is_anonymous: boolean
	readonly type: TLPollType
	readonly open_period: number
	readonly close_date: number
	readonly is_closed: boolean
}
export function inputMessagePoll(object: TLObject): TLInputMessagePoll { return object as TLInputMessagePoll }
export interface TLInputMessageForwarded extends TLObject {
	readonly "@type": "inputMessageForwarded"
	readonly from_chat_id: number
	readonly message_id: number
	readonly in_game_share: boolean
	readonly copy_options: TLMessageCopyOptions
}
export function inputMessageForwarded(object: TLObject): TLInputMessageForwarded { return object as TLInputMessageForwarded }
export type TLInputMessageContent = TLInputMessageText | TLInputMessageAnimation | TLInputMessageAudio | TLInputMessageDocument | TLInputMessagePhoto | TLInputMessageSticker | TLInputMessageVideo | TLInputMessageVideoNote | TLInputMessageVoiceNote | TLInputMessageLocation | TLInputMessageVenue | TLInputMessageContact | TLInputMessageDice | TLInputMessageGame | TLInputMessageInvoice | TLInputMessagePoll | TLInputMessageForwarded
export interface TLSearchMessagesFilterEmpty extends TLObject {
	readonly "@type": "searchMessagesFilterEmpty"
}
export function searchMessagesFilterEmpty(object: TLObject): TLSearchMessagesFilterEmpty { return object as TLSearchMessagesFilterEmpty }
export interface TLSearchMessagesFilterAnimation extends TLObject {
	readonly "@type": "searchMessagesFilterAnimation"
}
export function searchMessagesFilterAnimation(object: TLObject): TLSearchMessagesFilterAnimation { return object as TLSearchMessagesFilterAnimation }
export interface TLSearchMessagesFilterAudio extends TLObject {
	readonly "@type": "searchMessagesFilterAudio"
}
export function searchMessagesFilterAudio(object: TLObject): TLSearchMessagesFilterAudio { return object as TLSearchMessagesFilterAudio }
export interface TLSearchMessagesFilterDocument extends TLObject {
	readonly "@type": "searchMessagesFilterDocument"
}
export function searchMessagesFilterDocument(object: TLObject): TLSearchMessagesFilterDocument { return object as TLSearchMessagesFilterDocument }
export interface TLSearchMessagesFilterPhoto extends TLObject {
	readonly "@type": "searchMessagesFilterPhoto"
}
export function searchMessagesFilterPhoto(object: TLObject): TLSearchMessagesFilterPhoto { return object as TLSearchMessagesFilterPhoto }
export interface TLSearchMessagesFilterVideo extends TLObject {
	readonly "@type": "searchMessagesFilterVideo"
}
export function searchMessagesFilterVideo(object: TLObject): TLSearchMessagesFilterVideo { return object as TLSearchMessagesFilterVideo }
export interface TLSearchMessagesFilterVoiceNote extends TLObject {
	readonly "@type": "searchMessagesFilterVoiceNote"
}
export function searchMessagesFilterVoiceNote(object: TLObject): TLSearchMessagesFilterVoiceNote { return object as TLSearchMessagesFilterVoiceNote }
export interface TLSearchMessagesFilterPhotoAndVideo extends TLObject {
	readonly "@type": "searchMessagesFilterPhotoAndVideo"
}
export function searchMessagesFilterPhotoAndVideo(object: TLObject): TLSearchMessagesFilterPhotoAndVideo { return object as TLSearchMessagesFilterPhotoAndVideo }
export interface TLSearchMessagesFilterUrl extends TLObject {
	readonly "@type": "searchMessagesFilterUrl"
}
export function searchMessagesFilterUrl(object: TLObject): TLSearchMessagesFilterUrl { return object as TLSearchMessagesFilterUrl }
export interface TLSearchMessagesFilterChatPhoto extends TLObject {
	readonly "@type": "searchMessagesFilterChatPhoto"
}
export function searchMessagesFilterChatPhoto(object: TLObject): TLSearchMessagesFilterChatPhoto { return object as TLSearchMessagesFilterChatPhoto }
export interface TLSearchMessagesFilterCall extends TLObject {
	readonly "@type": "searchMessagesFilterCall"
}
export function searchMessagesFilterCall(object: TLObject): TLSearchMessagesFilterCall { return object as TLSearchMessagesFilterCall }
export interface TLSearchMessagesFilterMissedCall extends TLObject {
	readonly "@type": "searchMessagesFilterMissedCall"
}
export function searchMessagesFilterMissedCall(object: TLObject): TLSearchMessagesFilterMissedCall { return object as TLSearchMessagesFilterMissedCall }
export interface TLSearchMessagesFilterVideoNote extends TLObject {
	readonly "@type": "searchMessagesFilterVideoNote"
}
export function searchMessagesFilterVideoNote(object: TLObject): TLSearchMessagesFilterVideoNote { return object as TLSearchMessagesFilterVideoNote }
export interface TLSearchMessagesFilterVoiceAndVideoNote extends TLObject {
	readonly "@type": "searchMessagesFilterVoiceAndVideoNote"
}
export function searchMessagesFilterVoiceAndVideoNote(object: TLObject): TLSearchMessagesFilterVoiceAndVideoNote { return object as TLSearchMessagesFilterVoiceAndVideoNote }
export interface TLSearchMessagesFilterMention extends TLObject {
	readonly "@type": "searchMessagesFilterMention"
}
export function searchMessagesFilterMention(object: TLObject): TLSearchMessagesFilterMention { return object as TLSearchMessagesFilterMention }
export interface TLSearchMessagesFilterUnreadMention extends TLObject {
	readonly "@type": "searchMessagesFilterUnreadMention"
}
export function searchMessagesFilterUnreadMention(object: TLObject): TLSearchMessagesFilterUnreadMention { return object as TLSearchMessagesFilterUnreadMention }
export interface TLSearchMessagesFilterFailedToSend extends TLObject {
	readonly "@type": "searchMessagesFilterFailedToSend"
}
export function searchMessagesFilterFailedToSend(object: TLObject): TLSearchMessagesFilterFailedToSend { return object as TLSearchMessagesFilterFailedToSend }
export interface TLSearchMessagesFilterPinned extends TLObject {
	readonly "@type": "searchMessagesFilterPinned"
}
export function searchMessagesFilterPinned(object: TLObject): TLSearchMessagesFilterPinned { return object as TLSearchMessagesFilterPinned }
export type TLSearchMessagesFilter = TLSearchMessagesFilterEmpty | TLSearchMessagesFilterAnimation | TLSearchMessagesFilterAudio | TLSearchMessagesFilterDocument | TLSearchMessagesFilterPhoto | TLSearchMessagesFilterVideo | TLSearchMessagesFilterVoiceNote | TLSearchMessagesFilterPhotoAndVideo | TLSearchMessagesFilterUrl | TLSearchMessagesFilterChatPhoto | TLSearchMessagesFilterCall | TLSearchMessagesFilterMissedCall | TLSearchMessagesFilterVideoNote | TLSearchMessagesFilterVoiceAndVideoNote | TLSearchMessagesFilterMention | TLSearchMessagesFilterUnreadMention | TLSearchMessagesFilterFailedToSend | TLSearchMessagesFilterPinned
export interface TLChatActionTyping extends TLObject {
	readonly "@type": "chatActionTyping"
}
export function chatActionTyping(object: TLObject): TLChatActionTyping { return object as TLChatActionTyping }
export interface TLChatActionRecordingVideo extends TLObject {
	readonly "@type": "chatActionRecordingVideo"
}
export function chatActionRecordingVideo(object: TLObject): TLChatActionRecordingVideo { return object as TLChatActionRecordingVideo }
export interface TLChatActionUploadingVideo extends TLObject {
	readonly "@type": "chatActionUploadingVideo"
	readonly progress: number
}
export function chatActionUploadingVideo(object: TLObject): TLChatActionUploadingVideo { return object as TLChatActionUploadingVideo }
export interface TLChatActionRecordingVoiceNote extends TLObject {
	readonly "@type": "chatActionRecordingVoiceNote"
}
export function chatActionRecordingVoiceNote(object: TLObject): TLChatActionRecordingVoiceNote { return object as TLChatActionRecordingVoiceNote }
export interface TLChatActionUploadingVoiceNote extends TLObject {
	readonly "@type": "chatActionUploadingVoiceNote"
	readonly progress: number
}
export function chatActionUploadingVoiceNote(object: TLObject): TLChatActionUploadingVoiceNote { return object as TLChatActionUploadingVoiceNote }
export interface TLChatActionUploadingPhoto extends TLObject {
	readonly "@type": "chatActionUploadingPhoto"
	readonly progress: number
}
export function chatActionUploadingPhoto(object: TLObject): TLChatActionUploadingPhoto { return object as TLChatActionUploadingPhoto }
export interface TLChatActionUploadingDocument extends TLObject {
	readonly "@type": "chatActionUploadingDocument"
	readonly progress: number
}
export function chatActionUploadingDocument(object: TLObject): TLChatActionUploadingDocument { return object as TLChatActionUploadingDocument }
export interface TLChatActionChoosingLocation extends TLObject {
	readonly "@type": "chatActionChoosingLocation"
}
export function chatActionChoosingLocation(object: TLObject): TLChatActionChoosingLocation { return object as TLChatActionChoosingLocation }
export interface TLChatActionChoosingContact extends TLObject {
	readonly "@type": "chatActionChoosingContact"
}
export function chatActionChoosingContact(object: TLObject): TLChatActionChoosingContact { return object as TLChatActionChoosingContact }
export interface TLChatActionStartPlayingGame extends TLObject {
	readonly "@type": "chatActionStartPlayingGame"
}
export function chatActionStartPlayingGame(object: TLObject): TLChatActionStartPlayingGame { return object as TLChatActionStartPlayingGame }
export interface TLChatActionRecordingVideoNote extends TLObject {
	readonly "@type": "chatActionRecordingVideoNote"
}
export function chatActionRecordingVideoNote(object: TLObject): TLChatActionRecordingVideoNote { return object as TLChatActionRecordingVideoNote }
export interface TLChatActionUploadingVideoNote extends TLObject {
	readonly "@type": "chatActionUploadingVideoNote"
	readonly progress: number
}
export function chatActionUploadingVideoNote(object: TLObject): TLChatActionUploadingVideoNote { return object as TLChatActionUploadingVideoNote }
export interface TLChatActionCancel extends TLObject {
	readonly "@type": "chatActionCancel"
}
export function chatActionCancel(object: TLObject): TLChatActionCancel { return object as TLChatActionCancel }
export type TLChatAction = TLChatActionTyping | TLChatActionRecordingVideo | TLChatActionUploadingVideo | TLChatActionRecordingVoiceNote | TLChatActionUploadingVoiceNote | TLChatActionUploadingPhoto | TLChatActionUploadingDocument | TLChatActionChoosingLocation | TLChatActionChoosingContact | TLChatActionStartPlayingGame | TLChatActionRecordingVideoNote | TLChatActionUploadingVideoNote | TLChatActionCancel
export interface TLUserStatusEmpty extends TLObject {
	readonly "@type": "userStatusEmpty"
}
export function userStatusEmpty(object: TLObject): TLUserStatusEmpty { return object as TLUserStatusEmpty }
export interface TLUserStatusOnline extends TLObject {
	readonly "@type": "userStatusOnline"
	readonly expires: number
}
export function userStatusOnline(object: TLObject): TLUserStatusOnline { return object as TLUserStatusOnline }
export interface TLUserStatusOffline extends TLObject {
	readonly "@type": "userStatusOffline"
	readonly was_online: number
}
export function userStatusOffline(object: TLObject): TLUserStatusOffline { return object as TLUserStatusOffline }
export interface TLUserStatusRecently extends TLObject {
	readonly "@type": "userStatusRecently"
}
export function userStatusRecently(object: TLObject): TLUserStatusRecently { return object as TLUserStatusRecently }
export interface TLUserStatusLastWeek extends TLObject {
	readonly "@type": "userStatusLastWeek"
}
export function userStatusLastWeek(object: TLObject): TLUserStatusLastWeek { return object as TLUserStatusLastWeek }
export interface TLUserStatusLastMonth extends TLObject {
	readonly "@type": "userStatusLastMonth"
}
export function userStatusLastMonth(object: TLObject): TLUserStatusLastMonth { return object as TLUserStatusLastMonth }
export type TLUserStatus = TLUserStatusEmpty | TLUserStatusOnline | TLUserStatusOffline | TLUserStatusRecently | TLUserStatusLastWeek | TLUserStatusLastMonth
export interface TLStickers extends TLObject {
	readonly "@type": "stickers"
	readonly stickers: ReadonlyArray<TLSticker>
}
export function stickers(object: TLObject): TLStickers { return object as TLStickers }
export interface TLEmojis extends TLObject {
	readonly "@type": "emojis"
	readonly emojis: ReadonlyArray<string>
}
export function emojis(object: TLObject): TLEmojis { return object as TLEmojis }
export interface TLStickerSet extends TLObject {
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
export function stickerSet(object: TLObject): TLStickerSet { return object as TLStickerSet }
export interface TLStickerSetInfo extends TLObject {
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
export function stickerSetInfo(object: TLObject): TLStickerSetInfo { return object as TLStickerSetInfo }
export interface TLStickerSets extends TLObject {
	readonly "@type": "stickerSets"
	readonly total_count: number
	readonly sets: ReadonlyArray<TLStickerSetInfo>
}
export function stickerSets(object: TLObject): TLStickerSets { return object as TLStickerSets }
export interface TLCallDiscardReasonEmpty extends TLObject {
	readonly "@type": "callDiscardReasonEmpty"
}
export function callDiscardReasonEmpty(object: TLObject): TLCallDiscardReasonEmpty { return object as TLCallDiscardReasonEmpty }
export interface TLCallDiscardReasonMissed extends TLObject {
	readonly "@type": "callDiscardReasonMissed"
}
export function callDiscardReasonMissed(object: TLObject): TLCallDiscardReasonMissed { return object as TLCallDiscardReasonMissed }
export interface TLCallDiscardReasonDeclined extends TLObject {
	readonly "@type": "callDiscardReasonDeclined"
}
export function callDiscardReasonDeclined(object: TLObject): TLCallDiscardReasonDeclined { return object as TLCallDiscardReasonDeclined }
export interface TLCallDiscardReasonDisconnected extends TLObject {
	readonly "@type": "callDiscardReasonDisconnected"
}
export function callDiscardReasonDisconnected(object: TLObject): TLCallDiscardReasonDisconnected { return object as TLCallDiscardReasonDisconnected }
export interface TLCallDiscardReasonHungUp extends TLObject {
	readonly "@type": "callDiscardReasonHungUp"
}
export function callDiscardReasonHungUp(object: TLObject): TLCallDiscardReasonHungUp { return object as TLCallDiscardReasonHungUp }
export type TLCallDiscardReason = TLCallDiscardReasonEmpty | TLCallDiscardReasonMissed | TLCallDiscardReasonDeclined | TLCallDiscardReasonDisconnected | TLCallDiscardReasonHungUp
export interface TLCallProtocol extends TLObject {
	readonly "@type": "callProtocol"
	readonly udp_p2p: boolean
	readonly udp_reflector: boolean
	readonly min_layer: number
	readonly max_layer: number
	readonly library_versions: ReadonlyArray<string>
}
export function callProtocol(object: TLObject): TLCallProtocol { return object as TLCallProtocol }
export interface TLCallServerTypeTelegramReflector extends TLObject {
	readonly "@type": "callServerTypeTelegramReflector"
	readonly peer_tag: Uint8Array
}
export function callServerTypeTelegramReflector(object: TLObject): TLCallServerTypeTelegramReflector { return object as TLCallServerTypeTelegramReflector }
export interface TLCallServerTypeWebrtc extends TLObject {
	readonly "@type": "callServerTypeWebrtc"
	readonly username: string
	readonly password: string
	readonly supports_turn: boolean
	readonly supports_stun: boolean
}
export function callServerTypeWebrtc(object: TLObject): TLCallServerTypeWebrtc { return object as TLCallServerTypeWebrtc }
export type TLCallServerType = TLCallServerTypeTelegramReflector | TLCallServerTypeWebrtc
export interface TLCallServer extends TLObject {
	readonly "@type": "callServer"
	readonly id: string
	readonly ip_address: string
	readonly ipv6_address: string
	readonly port: number
	readonly type: TLCallServerType
}
export function callServer(object: TLObject): TLCallServer { return object as TLCallServer }
export interface TLCallId extends TLObject {
	readonly "@type": "callId"
	readonly id: number
}
export function callId(object: TLObject): TLCallId { return object as TLCallId }
export interface TLCallStatePending extends TLObject {
	readonly "@type": "callStatePending"
	readonly is_created: boolean
	readonly is_received: boolean
}
export function callStatePending(object: TLObject): TLCallStatePending { return object as TLCallStatePending }
export interface TLCallStateExchangingKeys extends TLObject {
	readonly "@type": "callStateExchangingKeys"
}
export function callStateExchangingKeys(object: TLObject): TLCallStateExchangingKeys { return object as TLCallStateExchangingKeys }
export interface TLCallStateReady extends TLObject {
	readonly "@type": "callStateReady"
	readonly protocol: TLCallProtocol
	readonly servers: ReadonlyArray<TLCallServer>
	readonly config: string
	readonly encryption_key: Uint8Array
	readonly emojis: ReadonlyArray<string>
	readonly allow_p2p: boolean
}
export function callStateReady(object: TLObject): TLCallStateReady { return object as TLCallStateReady }
export interface TLCallStateHangingUp extends TLObject {
	readonly "@type": "callStateHangingUp"
}
export function callStateHangingUp(object: TLObject): TLCallStateHangingUp { return object as TLCallStateHangingUp }
export interface TLCallStateDiscarded extends TLObject {
	readonly "@type": "callStateDiscarded"
	readonly reason: TLCallDiscardReason
	readonly need_rating: boolean
	readonly need_debug_information: boolean
}
export function callStateDiscarded(object: TLObject): TLCallStateDiscarded { return object as TLCallStateDiscarded }
export interface TLCallStateError extends TLObject {
	readonly "@type": "callStateError"
	readonly error: TLError
}
export function callStateError(object: TLObject): TLCallStateError { return object as TLCallStateError }
export type TLCallState = TLCallStatePending | TLCallStateExchangingKeys | TLCallStateReady | TLCallStateHangingUp | TLCallStateDiscarded | TLCallStateError
export interface TLCallProblemEcho extends TLObject {
	readonly "@type": "callProblemEcho"
}
export function callProblemEcho(object: TLObject): TLCallProblemEcho { return object as TLCallProblemEcho }
export interface TLCallProblemNoise extends TLObject {
	readonly "@type": "callProblemNoise"
}
export function callProblemNoise(object: TLObject): TLCallProblemNoise { return object as TLCallProblemNoise }
export interface TLCallProblemInterruptions extends TLObject {
	readonly "@type": "callProblemInterruptions"
}
export function callProblemInterruptions(object: TLObject): TLCallProblemInterruptions { return object as TLCallProblemInterruptions }
export interface TLCallProblemDistortedSpeech extends TLObject {
	readonly "@type": "callProblemDistortedSpeech"
}
export function callProblemDistortedSpeech(object: TLObject): TLCallProblemDistortedSpeech { return object as TLCallProblemDistortedSpeech }
export interface TLCallProblemSilentLocal extends TLObject {
	readonly "@type": "callProblemSilentLocal"
}
export function callProblemSilentLocal(object: TLObject): TLCallProblemSilentLocal { return object as TLCallProblemSilentLocal }
export interface TLCallProblemSilentRemote extends TLObject {
	readonly "@type": "callProblemSilentRemote"
}
export function callProblemSilentRemote(object: TLObject): TLCallProblemSilentRemote { return object as TLCallProblemSilentRemote }
export interface TLCallProblemDropped extends TLObject {
	readonly "@type": "callProblemDropped"
}
export function callProblemDropped(object: TLObject): TLCallProblemDropped { return object as TLCallProblemDropped }
export interface TLCallProblemDistortedVideo extends TLObject {
	readonly "@type": "callProblemDistortedVideo"
}
export function callProblemDistortedVideo(object: TLObject): TLCallProblemDistortedVideo { return object as TLCallProblemDistortedVideo }
export interface TLCallProblemPixelatedVideo extends TLObject {
	readonly "@type": "callProblemPixelatedVideo"
}
export function callProblemPixelatedVideo(object: TLObject): TLCallProblemPixelatedVideo { return object as TLCallProblemPixelatedVideo }
export type TLCallProblem = TLCallProblemEcho | TLCallProblemNoise | TLCallProblemInterruptions | TLCallProblemDistortedSpeech | TLCallProblemSilentLocal | TLCallProblemSilentRemote | TLCallProblemDropped | TLCallProblemDistortedVideo | TLCallProblemPixelatedVideo
export interface TLCall extends TLObject {
	readonly "@type": "call"
	readonly id: number
	readonly user_id: number
	readonly is_outgoing: boolean
	readonly is_video: boolean
	readonly state: TLCallState
}
export function call(object: TLObject): TLCall { return object as TLCall }
export interface TLPhoneNumberAuthenticationSettings extends TLObject {
	readonly "@type": "phoneNumberAuthenticationSettings"
	readonly allow_flash_call: boolean
	readonly is_current_phone_number: boolean
	readonly allow_sms_retriever_api: boolean
}
export function phoneNumberAuthenticationSettings(object: TLObject): TLPhoneNumberAuthenticationSettings { return object as TLPhoneNumberAuthenticationSettings }
export interface TLAnimations extends TLObject {
	readonly "@type": "animations"
	readonly animations: ReadonlyArray<TLAnimation>
}
export function animations(object: TLObject): TLAnimations { return object as TLAnimations }
export interface TLDiceStickersRegular extends TLObject {
	readonly "@type": "diceStickersRegular"
	readonly sticker: TLSticker
}
export function diceStickersRegular(object: TLObject): TLDiceStickersRegular { return object as TLDiceStickersRegular }
export interface TLDiceStickersSlotMachine extends TLObject {
	readonly "@type": "diceStickersSlotMachine"
	readonly background: TLSticker
	readonly lever: TLSticker
	readonly left_reel: TLSticker
	readonly center_reel: TLSticker
	readonly right_reel: TLSticker
}
export function diceStickersSlotMachine(object: TLObject): TLDiceStickersSlotMachine { return object as TLDiceStickersSlotMachine }
export type TLDiceStickers = TLDiceStickersRegular | TLDiceStickersSlotMachine
export interface TLImportedContacts extends TLObject {
	readonly "@type": "importedContacts"
	readonly user_ids: ReadonlyArray<number>
	readonly importer_count: ReadonlyArray<number>
}
export function importedContacts(object: TLObject): TLImportedContacts { return object as TLImportedContacts }
export interface TLHttpUrl extends TLObject {
	readonly "@type": "httpUrl"
	readonly url: string
}
export function httpUrl(object: TLObject): TLHttpUrl { return object as TLHttpUrl }
export interface TLInputInlineQueryResultAnimation extends TLObject {
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
export function inputInlineQueryResultAnimation(object: TLObject): TLInputInlineQueryResultAnimation { return object as TLInputInlineQueryResultAnimation }
export interface TLInputInlineQueryResultArticle extends TLObject {
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
export function inputInlineQueryResultArticle(object: TLObject): TLInputInlineQueryResultArticle { return object as TLInputInlineQueryResultArticle }
export interface TLInputInlineQueryResultAudio extends TLObject {
	readonly "@type": "inputInlineQueryResultAudio"
	readonly id: string
	readonly title: string
	readonly performer: string
	readonly audio_url: string
	readonly audio_duration: number
	readonly reply_markup: TLReplyMarkup
	readonly input_message_content: TLInputMessageContent
}
export function inputInlineQueryResultAudio(object: TLObject): TLInputInlineQueryResultAudio { return object as TLInputInlineQueryResultAudio }
export interface TLInputInlineQueryResultContact extends TLObject {
	readonly "@type": "inputInlineQueryResultContact"
	readonly id: string
	readonly contact: TLContact
	readonly thumbnail_url: string
	readonly thumbnail_width: number
	readonly thumbnail_height: number
	readonly reply_markup: TLReplyMarkup
	readonly input_message_content: TLInputMessageContent
}
export function inputInlineQueryResultContact(object: TLObject): TLInputInlineQueryResultContact { return object as TLInputInlineQueryResultContact }
export interface TLInputInlineQueryResultDocument extends TLObject {
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
export function inputInlineQueryResultDocument(object: TLObject): TLInputInlineQueryResultDocument { return object as TLInputInlineQueryResultDocument }
export interface TLInputInlineQueryResultGame extends TLObject {
	readonly "@type": "inputInlineQueryResultGame"
	readonly id: string
	readonly game_short_name: string
	readonly reply_markup: TLReplyMarkup
}
export function inputInlineQueryResultGame(object: TLObject): TLInputInlineQueryResultGame { return object as TLInputInlineQueryResultGame }
export interface TLInputInlineQueryResultLocation extends TLObject {
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
export function inputInlineQueryResultLocation(object: TLObject): TLInputInlineQueryResultLocation { return object as TLInputInlineQueryResultLocation }
export interface TLInputInlineQueryResultPhoto extends TLObject {
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
export function inputInlineQueryResultPhoto(object: TLObject): TLInputInlineQueryResultPhoto { return object as TLInputInlineQueryResultPhoto }
export interface TLInputInlineQueryResultSticker extends TLObject {
	readonly "@type": "inputInlineQueryResultSticker"
	readonly id: string
	readonly thumbnail_url: string
	readonly sticker_url: string
	readonly sticker_width: number
	readonly sticker_height: number
	readonly reply_markup: TLReplyMarkup
	readonly input_message_content: TLInputMessageContent
}
export function inputInlineQueryResultSticker(object: TLObject): TLInputInlineQueryResultSticker { return object as TLInputInlineQueryResultSticker }
export interface TLInputInlineQueryResultVenue extends TLObject {
	readonly "@type": "inputInlineQueryResultVenue"
	readonly id: string
	readonly venue: TLVenue
	readonly thumbnail_url: string
	readonly thumbnail_width: number
	readonly thumbnail_height: number
	readonly reply_markup: TLReplyMarkup
	readonly input_message_content: TLInputMessageContent
}
export function inputInlineQueryResultVenue(object: TLObject): TLInputInlineQueryResultVenue { return object as TLInputInlineQueryResultVenue }
export interface TLInputInlineQueryResultVideo extends TLObject {
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
export function inputInlineQueryResultVideo(object: TLObject): TLInputInlineQueryResultVideo { return object as TLInputInlineQueryResultVideo }
export interface TLInputInlineQueryResultVoiceNote extends TLObject {
	readonly "@type": "inputInlineQueryResultVoiceNote"
	readonly id: string
	readonly title: string
	readonly voice_note_url: string
	readonly voice_note_duration: number
	readonly reply_markup: TLReplyMarkup
	readonly input_message_content: TLInputMessageContent
}
export function inputInlineQueryResultVoiceNote(object: TLObject): TLInputInlineQueryResultVoiceNote { return object as TLInputInlineQueryResultVoiceNote }
export type TLInputInlineQueryResult = TLInputInlineQueryResultAnimation | TLInputInlineQueryResultArticle | TLInputInlineQueryResultAudio | TLInputInlineQueryResultContact | TLInputInlineQueryResultDocument | TLInputInlineQueryResultGame | TLInputInlineQueryResultLocation | TLInputInlineQueryResultPhoto | TLInputInlineQueryResultSticker | TLInputInlineQueryResultVenue | TLInputInlineQueryResultVideo | TLInputInlineQueryResultVoiceNote
export interface TLInlineQueryResultArticle extends TLObject {
	readonly "@type": "inlineQueryResultArticle"
	readonly id: string
	readonly url: string
	readonly hide_url: boolean
	readonly title: string
	readonly description: string
	readonly thumbnail: TLThumbnail
}
export function inlineQueryResultArticle(object: TLObject): TLInlineQueryResultArticle { return object as TLInlineQueryResultArticle }
export interface TLInlineQueryResultContact extends TLObject {
	readonly "@type": "inlineQueryResultContact"
	readonly id: string
	readonly contact: TLContact
	readonly thumbnail: TLThumbnail
}
export function inlineQueryResultContact(object: TLObject): TLInlineQueryResultContact { return object as TLInlineQueryResultContact }
export interface TLInlineQueryResultLocation extends TLObject {
	readonly "@type": "inlineQueryResultLocation"
	readonly id: string
	readonly location: TLLocation
	readonly title: string
	readonly thumbnail: TLThumbnail
}
export function inlineQueryResultLocation(object: TLObject): TLInlineQueryResultLocation { return object as TLInlineQueryResultLocation }
export interface TLInlineQueryResultVenue extends TLObject {
	readonly "@type": "inlineQueryResultVenue"
	readonly id: string
	readonly venue: TLVenue
	readonly thumbnail: TLThumbnail
}
export function inlineQueryResultVenue(object: TLObject): TLInlineQueryResultVenue { return object as TLInlineQueryResultVenue }
export interface TLInlineQueryResultGame extends TLObject {
	readonly "@type": "inlineQueryResultGame"
	readonly id: string
	readonly game: TLGame
}
export function inlineQueryResultGame(object: TLObject): TLInlineQueryResultGame { return object as TLInlineQueryResultGame }
export interface TLInlineQueryResultAnimation extends TLObject {
	readonly "@type": "inlineQueryResultAnimation"
	readonly id: string
	readonly animation: TLAnimation
	readonly title: string
}
export function inlineQueryResultAnimation(object: TLObject): TLInlineQueryResultAnimation { return object as TLInlineQueryResultAnimation }
export interface TLInlineQueryResultAudio extends TLObject {
	readonly "@type": "inlineQueryResultAudio"
	readonly id: string
	readonly audio: TLAudio
}
export function inlineQueryResultAudio(object: TLObject): TLInlineQueryResultAudio { return object as TLInlineQueryResultAudio }
export interface TLInlineQueryResultDocument extends TLObject {
	readonly "@type": "inlineQueryResultDocument"
	readonly id: string
	readonly document: TLDocument
	readonly title: string
	readonly description: string
}
export function inlineQueryResultDocument(object: TLObject): TLInlineQueryResultDocument { return object as TLInlineQueryResultDocument }
export interface TLInlineQueryResultPhoto extends TLObject {
	readonly "@type": "inlineQueryResultPhoto"
	readonly id: string
	readonly photo: TLPhoto
	readonly title: string
	readonly description: string
}
export function inlineQueryResultPhoto(object: TLObject): TLInlineQueryResultPhoto { return object as TLInlineQueryResultPhoto }
export interface TLInlineQueryResultSticker extends TLObject {
	readonly "@type": "inlineQueryResultSticker"
	readonly id: string
	readonly sticker: TLSticker
}
export function inlineQueryResultSticker(object: TLObject): TLInlineQueryResultSticker { return object as TLInlineQueryResultSticker }
export interface TLInlineQueryResultVideo extends TLObject {
	readonly "@type": "inlineQueryResultVideo"
	readonly id: string
	readonly video: TLVideo
	readonly title: string
	readonly description: string
}
export function inlineQueryResultVideo(object: TLObject): TLInlineQueryResultVideo { return object as TLInlineQueryResultVideo }
export interface TLInlineQueryResultVoiceNote extends TLObject {
	readonly "@type": "inlineQueryResultVoiceNote"
	readonly id: string
	readonly voice_note: TLVoiceNote
	readonly title: string
}
export function inlineQueryResultVoiceNote(object: TLObject): TLInlineQueryResultVoiceNote { return object as TLInlineQueryResultVoiceNote }
export type TLInlineQueryResult = TLInlineQueryResultArticle | TLInlineQueryResultContact | TLInlineQueryResultLocation | TLInlineQueryResultVenue | TLInlineQueryResultGame | TLInlineQueryResultAnimation | TLInlineQueryResultAudio | TLInlineQueryResultDocument | TLInlineQueryResultPhoto | TLInlineQueryResultSticker | TLInlineQueryResultVideo | TLInlineQueryResultVoiceNote
export interface TLInlineQueryResults extends TLObject {
	readonly "@type": "inlineQueryResults"
	readonly inline_query_id: string
	readonly next_offset: string
	readonly results: ReadonlyArray<TLInlineQueryResult>
	readonly switch_pm_text: string
	readonly switch_pm_parameter: string
}
export function inlineQueryResults(object: TLObject): TLInlineQueryResults { return object as TLInlineQueryResults }
export interface TLCallbackQueryPayloadData extends TLObject {
	readonly "@type": "callbackQueryPayloadData"
	readonly data: Uint8Array
}
export function callbackQueryPayloadData(object: TLObject): TLCallbackQueryPayloadData { return object as TLCallbackQueryPayloadData }
export interface TLCallbackQueryPayloadDataWithPassword extends TLObject {
	readonly "@type": "callbackQueryPayloadDataWithPassword"
	readonly password: string
	readonly data: Uint8Array
}
export function callbackQueryPayloadDataWithPassword(object: TLObject): TLCallbackQueryPayloadDataWithPassword { return object as TLCallbackQueryPayloadDataWithPassword }
export interface TLCallbackQueryPayloadGame extends TLObject {
	readonly "@type": "callbackQueryPayloadGame"
	readonly game_short_name: string
}
export function callbackQueryPayloadGame(object: TLObject): TLCallbackQueryPayloadGame { return object as TLCallbackQueryPayloadGame }
export type TLCallbackQueryPayload = TLCallbackQueryPayloadData | TLCallbackQueryPayloadDataWithPassword | TLCallbackQueryPayloadGame
export interface TLCallbackQueryAnswer extends TLObject {
	readonly "@type": "callbackQueryAnswer"
	readonly text: string
	readonly show_alert: boolean
	readonly url: string
}
export function callbackQueryAnswer(object: TLObject): TLCallbackQueryAnswer { return object as TLCallbackQueryAnswer }
export interface TLCustomRequestResult extends TLObject {
	readonly "@type": "customRequestResult"
	readonly result: string
}
export function customRequestResult(object: TLObject): TLCustomRequestResult { return object as TLCustomRequestResult }
export interface TLGameHighScore extends TLObject {
	readonly "@type": "gameHighScore"
	readonly position: number
	readonly user_id: number
	readonly score: number
}
export function gameHighScore(object: TLObject): TLGameHighScore { return object as TLGameHighScore }
export interface TLGameHighScores extends TLObject {
	readonly "@type": "gameHighScores"
	readonly scores: ReadonlyArray<TLGameHighScore>
}
export function gameHighScores(object: TLObject): TLGameHighScores { return object as TLGameHighScores }
export interface TLChatEventMessageEdited extends TLObject {
	readonly "@type": "chatEventMessageEdited"
	readonly old_message: TLMessage
	readonly new_message: TLMessage
}
export function chatEventMessageEdited(object: TLObject): TLChatEventMessageEdited { return object as TLChatEventMessageEdited }
export interface TLChatEventMessageDeleted extends TLObject {
	readonly "@type": "chatEventMessageDeleted"
	readonly message: TLMessage
}
export function chatEventMessageDeleted(object: TLObject): TLChatEventMessageDeleted { return object as TLChatEventMessageDeleted }
export interface TLChatEventPollStopped extends TLObject {
	readonly "@type": "chatEventPollStopped"
	readonly message: TLMessage
}
export function chatEventPollStopped(object: TLObject): TLChatEventPollStopped { return object as TLChatEventPollStopped }
export interface TLChatEventMessagePinned extends TLObject {
	readonly "@type": "chatEventMessagePinned"
	readonly message: TLMessage
}
export function chatEventMessagePinned(object: TLObject): TLChatEventMessagePinned { return object as TLChatEventMessagePinned }
export interface TLChatEventMessageUnpinned extends TLObject {
	readonly "@type": "chatEventMessageUnpinned"
	readonly message: TLMessage
}
export function chatEventMessageUnpinned(object: TLObject): TLChatEventMessageUnpinned { return object as TLChatEventMessageUnpinned }
export interface TLChatEventMemberJoined extends TLObject {
	readonly "@type": "chatEventMemberJoined"
}
export function chatEventMemberJoined(object: TLObject): TLChatEventMemberJoined { return object as TLChatEventMemberJoined }
export interface TLChatEventMemberLeft extends TLObject {
	readonly "@type": "chatEventMemberLeft"
}
export function chatEventMemberLeft(object: TLObject): TLChatEventMemberLeft { return object as TLChatEventMemberLeft }
export interface TLChatEventMemberInvited extends TLObject {
	readonly "@type": "chatEventMemberInvited"
	readonly user_id: number
	readonly status: TLChatMemberStatus
}
export function chatEventMemberInvited(object: TLObject): TLChatEventMemberInvited { return object as TLChatEventMemberInvited }
export interface TLChatEventMemberPromoted extends TLObject {
	readonly "@type": "chatEventMemberPromoted"
	readonly user_id: number
	readonly old_status: TLChatMemberStatus
	readonly new_status: TLChatMemberStatus
}
export function chatEventMemberPromoted(object: TLObject): TLChatEventMemberPromoted { return object as TLChatEventMemberPromoted }
export interface TLChatEventMemberRestricted extends TLObject {
	readonly "@type": "chatEventMemberRestricted"
	readonly user_id: number
	readonly old_status: TLChatMemberStatus
	readonly new_status: TLChatMemberStatus
}
export function chatEventMemberRestricted(object: TLObject): TLChatEventMemberRestricted { return object as TLChatEventMemberRestricted }
export interface TLChatEventTitleChanged extends TLObject {
	readonly "@type": "chatEventTitleChanged"
	readonly old_title: string
	readonly new_title: string
}
export function chatEventTitleChanged(object: TLObject): TLChatEventTitleChanged { return object as TLChatEventTitleChanged }
export interface TLChatEventPermissionsChanged extends TLObject {
	readonly "@type": "chatEventPermissionsChanged"
	readonly old_permissions: TLChatPermissions
	readonly new_permissions: TLChatPermissions
}
export function chatEventPermissionsChanged(object: TLObject): TLChatEventPermissionsChanged { return object as TLChatEventPermissionsChanged }
export interface TLChatEventDescriptionChanged extends TLObject {
	readonly "@type": "chatEventDescriptionChanged"
	readonly old_description: string
	readonly new_description: string
}
export function chatEventDescriptionChanged(object: TLObject): TLChatEventDescriptionChanged { return object as TLChatEventDescriptionChanged }
export interface TLChatEventUsernameChanged extends TLObject {
	readonly "@type": "chatEventUsernameChanged"
	readonly old_username: string
	readonly new_username: string
}
export function chatEventUsernameChanged(object: TLObject): TLChatEventUsernameChanged { return object as TLChatEventUsernameChanged }
export interface TLChatEventPhotoChanged extends TLObject {
	readonly "@type": "chatEventPhotoChanged"
	readonly old_photo: TLChatPhoto
	readonly new_photo: TLChatPhoto
}
export function chatEventPhotoChanged(object: TLObject): TLChatEventPhotoChanged { return object as TLChatEventPhotoChanged }
export interface TLChatEventInvitesToggled extends TLObject {
	readonly "@type": "chatEventInvitesToggled"
	readonly can_invite_users: boolean
}
export function chatEventInvitesToggled(object: TLObject): TLChatEventInvitesToggled { return object as TLChatEventInvitesToggled }
export interface TLChatEventLinkedChatChanged extends TLObject {
	readonly "@type": "chatEventLinkedChatChanged"
	readonly old_linked_chat_id: number
	readonly new_linked_chat_id: number
}
export function chatEventLinkedChatChanged(object: TLObject): TLChatEventLinkedChatChanged { return object as TLChatEventLinkedChatChanged }
export interface TLChatEventSlowModeDelayChanged extends TLObject {
	readonly "@type": "chatEventSlowModeDelayChanged"
	readonly old_slow_mode_delay: number
	readonly new_slow_mode_delay: number
}
export function chatEventSlowModeDelayChanged(object: TLObject): TLChatEventSlowModeDelayChanged { return object as TLChatEventSlowModeDelayChanged }
export interface TLChatEventSignMessagesToggled extends TLObject {
	readonly "@type": "chatEventSignMessagesToggled"
	readonly sign_messages: boolean
}
export function chatEventSignMessagesToggled(object: TLObject): TLChatEventSignMessagesToggled { return object as TLChatEventSignMessagesToggled }
export interface TLChatEventStickerSetChanged extends TLObject {
	readonly "@type": "chatEventStickerSetChanged"
	readonly old_sticker_set_id: string
	readonly new_sticker_set_id: string
}
export function chatEventStickerSetChanged(object: TLObject): TLChatEventStickerSetChanged { return object as TLChatEventStickerSetChanged }
export interface TLChatEventLocationChanged extends TLObject {
	readonly "@type": "chatEventLocationChanged"
	readonly old_location: TLChatLocation
	readonly new_location: TLChatLocation
}
export function chatEventLocationChanged(object: TLObject): TLChatEventLocationChanged { return object as TLChatEventLocationChanged }
export interface TLChatEventIsAllHistoryAvailableToggled extends TLObject {
	readonly "@type": "chatEventIsAllHistoryAvailableToggled"
	readonly is_all_history_available: boolean
}
export function chatEventIsAllHistoryAvailableToggled(object: TLObject): TLChatEventIsAllHistoryAvailableToggled { return object as TLChatEventIsAllHistoryAvailableToggled }
export type TLChatEventAction = TLChatEventMessageEdited | TLChatEventMessageDeleted | TLChatEventPollStopped | TLChatEventMessagePinned | TLChatEventMessageUnpinned | TLChatEventMemberJoined | TLChatEventMemberLeft | TLChatEventMemberInvited | TLChatEventMemberPromoted | TLChatEventMemberRestricted | TLChatEventTitleChanged | TLChatEventPermissionsChanged | TLChatEventDescriptionChanged | TLChatEventUsernameChanged | TLChatEventPhotoChanged | TLChatEventInvitesToggled | TLChatEventLinkedChatChanged | TLChatEventSlowModeDelayChanged | TLChatEventSignMessagesToggled | TLChatEventStickerSetChanged | TLChatEventLocationChanged | TLChatEventIsAllHistoryAvailableToggled
export interface TLChatEvent extends TLObject {
	readonly "@type": "chatEvent"
	readonly id: string
	readonly date: number
	readonly user_id: number
	readonly action: TLChatEventAction
}
export function chatEvent(object: TLObject): TLChatEvent { return object as TLChatEvent }
export interface TLChatEvents extends TLObject {
	readonly "@type": "chatEvents"
	readonly events: ReadonlyArray<TLChatEvent>
}
export function chatEvents(object: TLObject): TLChatEvents { return object as TLChatEvents }
export interface TLChatEventLogFilters extends TLObject {
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
export function chatEventLogFilters(object: TLObject): TLChatEventLogFilters { return object as TLChatEventLogFilters }
export interface TLLanguagePackStringValueOrdinary extends TLObject {
	readonly "@type": "languagePackStringValueOrdinary"
	readonly value: string
}
export function languagePackStringValueOrdinary(object: TLObject): TLLanguagePackStringValueOrdinary { return object as TLLanguagePackStringValueOrdinary }
export interface TLLanguagePackStringValuePluralized extends TLObject {
	readonly "@type": "languagePackStringValuePluralized"
	readonly zero_value: string
	readonly one_value: string
	readonly two_value: string
	readonly few_value: string
	readonly many_value: string
	readonly other_value: string
}
export function languagePackStringValuePluralized(object: TLObject): TLLanguagePackStringValuePluralized { return object as TLLanguagePackStringValuePluralized }
export interface TLLanguagePackStringValueDeleted extends TLObject {
	readonly "@type": "languagePackStringValueDeleted"
}
export function languagePackStringValueDeleted(object: TLObject): TLLanguagePackStringValueDeleted { return object as TLLanguagePackStringValueDeleted }
export type TLLanguagePackStringValue = TLLanguagePackStringValueOrdinary | TLLanguagePackStringValuePluralized | TLLanguagePackStringValueDeleted
export interface TLLanguagePackString extends TLObject {
	readonly "@type": "languagePackString"
	readonly key: string
	readonly value: TLLanguagePackStringValue
}
export function languagePackString(object: TLObject): TLLanguagePackString { return object as TLLanguagePackString }
export interface TLLanguagePackStrings extends TLObject {
	readonly "@type": "languagePackStrings"
	readonly strings: ReadonlyArray<TLLanguagePackString>
}
export function languagePackStrings(object: TLObject): TLLanguagePackStrings { return object as TLLanguagePackStrings }
export interface TLLanguagePackInfo extends TLObject {
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
export function languagePackInfo(object: TLObject): TLLanguagePackInfo { return object as TLLanguagePackInfo }
export interface TLLocalizationTargetInfo extends TLObject {
	readonly "@type": "localizationTargetInfo"
	readonly language_packs: ReadonlyArray<TLLanguagePackInfo>
}
export function localizationTargetInfo(object: TLObject): TLLocalizationTargetInfo { return object as TLLocalizationTargetInfo }
export interface TLDeviceTokenFirebaseCloudMessaging extends TLObject {
	readonly "@type": "deviceTokenFirebaseCloudMessaging"
	readonly token: string
	readonly encrypt: boolean
}
export function deviceTokenFirebaseCloudMessaging(object: TLObject): TLDeviceTokenFirebaseCloudMessaging { return object as TLDeviceTokenFirebaseCloudMessaging }
export interface TLDeviceTokenApplePush extends TLObject {
	readonly "@type": "deviceTokenApplePush"
	readonly device_token: string
	readonly is_app_sandbox: boolean
}
export function deviceTokenApplePush(object: TLObject): TLDeviceTokenApplePush { return object as TLDeviceTokenApplePush }
export interface TLDeviceTokenApplePushVoIP extends TLObject {
	readonly "@type": "deviceTokenApplePushVoIP"
	readonly device_token: string
	readonly is_app_sandbox: boolean
	readonly encrypt: boolean
}
export function deviceTokenApplePushVoIP(object: TLObject): TLDeviceTokenApplePushVoIP { return object as TLDeviceTokenApplePushVoIP }
export interface TLDeviceTokenWindowsPush extends TLObject {
	readonly "@type": "deviceTokenWindowsPush"
	readonly access_token: string
}
export function deviceTokenWindowsPush(object: TLObject): TLDeviceTokenWindowsPush { return object as TLDeviceTokenWindowsPush }
export interface TLDeviceTokenMicrosoftPush extends TLObject {
	readonly "@type": "deviceTokenMicrosoftPush"
	readonly channel_uri: string
}
export function deviceTokenMicrosoftPush(object: TLObject): TLDeviceTokenMicrosoftPush { return object as TLDeviceTokenMicrosoftPush }
export interface TLDeviceTokenMicrosoftPushVoIP extends TLObject {
	readonly "@type": "deviceTokenMicrosoftPushVoIP"
	readonly channel_uri: string
}
export function deviceTokenMicrosoftPushVoIP(object: TLObject): TLDeviceTokenMicrosoftPushVoIP { return object as TLDeviceTokenMicrosoftPushVoIP }
export interface TLDeviceTokenWebPush extends TLObject {
	readonly "@type": "deviceTokenWebPush"
	readonly endpoint: string
	readonly p256dh_base64url: string
	readonly auth_base64url: string
}
export function deviceTokenWebPush(object: TLObject): TLDeviceTokenWebPush { return object as TLDeviceTokenWebPush }
export interface TLDeviceTokenSimplePush extends TLObject {
	readonly "@type": "deviceTokenSimplePush"
	readonly endpoint: string
}
export function deviceTokenSimplePush(object: TLObject): TLDeviceTokenSimplePush { return object as TLDeviceTokenSimplePush }
export interface TLDeviceTokenUbuntuPush extends TLObject {
	readonly "@type": "deviceTokenUbuntuPush"
	readonly token: string
}
export function deviceTokenUbuntuPush(object: TLObject): TLDeviceTokenUbuntuPush { return object as TLDeviceTokenUbuntuPush }
export interface TLDeviceTokenBlackBerryPush extends TLObject {
	readonly "@type": "deviceTokenBlackBerryPush"
	readonly token: string
}
export function deviceTokenBlackBerryPush(object: TLObject): TLDeviceTokenBlackBerryPush { return object as TLDeviceTokenBlackBerryPush }
export interface TLDeviceTokenTizenPush extends TLObject {
	readonly "@type": "deviceTokenTizenPush"
	readonly reg_id: string
}
export function deviceTokenTizenPush(object: TLObject): TLDeviceTokenTizenPush { return object as TLDeviceTokenTizenPush }
export type TLDeviceToken = TLDeviceTokenFirebaseCloudMessaging | TLDeviceTokenApplePush | TLDeviceTokenApplePushVoIP | TLDeviceTokenWindowsPush | TLDeviceTokenMicrosoftPush | TLDeviceTokenMicrosoftPushVoIP | TLDeviceTokenWebPush | TLDeviceTokenSimplePush | TLDeviceTokenUbuntuPush | TLDeviceTokenBlackBerryPush | TLDeviceTokenTizenPush
export interface TLPushReceiverId extends TLObject {
	readonly "@type": "pushReceiverId"
	readonly id: string
}
export function pushReceiverId(object: TLObject): TLPushReceiverId { return object as TLPushReceiverId }
export interface TLBackgroundFillSolid extends TLObject {
	readonly "@type": "backgroundFillSolid"
	readonly color: number
}
export function backgroundFillSolid(object: TLObject): TLBackgroundFillSolid { return object as TLBackgroundFillSolid }
export interface TLBackgroundFillGradient extends TLObject {
	readonly "@type": "backgroundFillGradient"
	readonly top_color: number
	readonly bottom_color: number
	readonly rotation_angle: number
}
export function backgroundFillGradient(object: TLObject): TLBackgroundFillGradient { return object as TLBackgroundFillGradient }
export type TLBackgroundFill = TLBackgroundFillSolid | TLBackgroundFillGradient
export interface TLBackgroundTypeWallpaper extends TLObject {
	readonly "@type": "backgroundTypeWallpaper"
	readonly is_blurred: boolean
	readonly is_moving: boolean
}
export function backgroundTypeWallpaper(object: TLObject): TLBackgroundTypeWallpaper { return object as TLBackgroundTypeWallpaper }
export interface TLBackgroundTypePattern extends TLObject {
	readonly "@type": "backgroundTypePattern"
	readonly fill: TLBackgroundFill
	readonly intensity: number
	readonly is_moving: boolean
}
export function backgroundTypePattern(object: TLObject): TLBackgroundTypePattern { return object as TLBackgroundTypePattern }
export interface TLBackgroundTypeFill extends TLObject {
	readonly "@type": "backgroundTypeFill"
	readonly fill: TLBackgroundFill
}
export function backgroundTypeFill(object: TLObject): TLBackgroundTypeFill { return object as TLBackgroundTypeFill }
export type TLBackgroundType = TLBackgroundTypeWallpaper | TLBackgroundTypePattern | TLBackgroundTypeFill
export interface TLBackground extends TLObject {
	readonly "@type": "background"
	readonly id: string
	readonly is_default: boolean
	readonly is_dark: boolean
	readonly name: string
	readonly document: TLDocument
	readonly type: TLBackgroundType
}
export function background(object: TLObject): TLBackground { return object as TLBackground }
export interface TLBackgrounds extends TLObject {
	readonly "@type": "backgrounds"
	readonly backgrounds: ReadonlyArray<TLBackground>
}
export function backgrounds(object: TLObject): TLBackgrounds { return object as TLBackgrounds }
export interface TLInputBackgroundLocal extends TLObject {
	readonly "@type": "inputBackgroundLocal"
	readonly background: TLInputFile
}
export function inputBackgroundLocal(object: TLObject): TLInputBackgroundLocal { return object as TLInputBackgroundLocal }
export interface TLInputBackgroundRemote extends TLObject {
	readonly "@type": "inputBackgroundRemote"
	readonly background_id: string
}
export function inputBackgroundRemote(object: TLObject): TLInputBackgroundRemote { return object as TLInputBackgroundRemote }
export type TLInputBackground = TLInputBackgroundLocal | TLInputBackgroundRemote
export interface TLHashtags extends TLObject {
	readonly "@type": "hashtags"
	readonly hashtags: ReadonlyArray<string>
}
export function hashtags(object: TLObject): TLHashtags { return object as TLHashtags }
export interface TLCanTransferOwnershipResultOk extends TLObject {
	readonly "@type": "canTransferOwnershipResultOk"
}
export function canTransferOwnershipResultOk(object: TLObject): TLCanTransferOwnershipResultOk { return object as TLCanTransferOwnershipResultOk }
export interface TLCanTransferOwnershipResultPasswordNeeded extends TLObject {
	readonly "@type": "canTransferOwnershipResultPasswordNeeded"
}
export function canTransferOwnershipResultPasswordNeeded(object: TLObject): TLCanTransferOwnershipResultPasswordNeeded { return object as TLCanTransferOwnershipResultPasswordNeeded }
export interface TLCanTransferOwnershipResultPasswordTooFresh extends TLObject {
	readonly "@type": "canTransferOwnershipResultPasswordTooFresh"
	readonly retry_after: number
}
export function canTransferOwnershipResultPasswordTooFresh(object: TLObject): TLCanTransferOwnershipResultPasswordTooFresh { return object as TLCanTransferOwnershipResultPasswordTooFresh }
export interface TLCanTransferOwnershipResultSessionTooFresh extends TLObject {
	readonly "@type": "canTransferOwnershipResultSessionTooFresh"
	readonly retry_after: number
}
export function canTransferOwnershipResultSessionTooFresh(object: TLObject): TLCanTransferOwnershipResultSessionTooFresh { return object as TLCanTransferOwnershipResultSessionTooFresh }
export type TLCanTransferOwnershipResult = TLCanTransferOwnershipResultOk | TLCanTransferOwnershipResultPasswordNeeded | TLCanTransferOwnershipResultPasswordTooFresh | TLCanTransferOwnershipResultSessionTooFresh
export interface TLCheckChatUsernameResultOk extends TLObject {
	readonly "@type": "checkChatUsernameResultOk"
}
export function checkChatUsernameResultOk(object: TLObject): TLCheckChatUsernameResultOk { return object as TLCheckChatUsernameResultOk }
export interface TLCheckChatUsernameResultUsernameInvalid extends TLObject {
	readonly "@type": "checkChatUsernameResultUsernameInvalid"
}
export function checkChatUsernameResultUsernameInvalid(object: TLObject): TLCheckChatUsernameResultUsernameInvalid { return object as TLCheckChatUsernameResultUsernameInvalid }
export interface TLCheckChatUsernameResultUsernameOccupied extends TLObject {
	readonly "@type": "checkChatUsernameResultUsernameOccupied"
}
export function checkChatUsernameResultUsernameOccupied(object: TLObject): TLCheckChatUsernameResultUsernameOccupied { return object as TLCheckChatUsernameResultUsernameOccupied }
export interface TLCheckChatUsernameResultPublicChatsTooMuch extends TLObject {
	readonly "@type": "checkChatUsernameResultPublicChatsTooMuch"
}
export function checkChatUsernameResultPublicChatsTooMuch(object: TLObject): TLCheckChatUsernameResultPublicChatsTooMuch { return object as TLCheckChatUsernameResultPublicChatsTooMuch }
export interface TLCheckChatUsernameResultPublicGroupsUnavailable extends TLObject {
	readonly "@type": "checkChatUsernameResultPublicGroupsUnavailable"
}
export function checkChatUsernameResultPublicGroupsUnavailable(object: TLObject): TLCheckChatUsernameResultPublicGroupsUnavailable { return object as TLCheckChatUsernameResultPublicGroupsUnavailable }
export type TLCheckChatUsernameResult = TLCheckChatUsernameResultOk | TLCheckChatUsernameResultUsernameInvalid | TLCheckChatUsernameResultUsernameOccupied | TLCheckChatUsernameResultPublicChatsTooMuch | TLCheckChatUsernameResultPublicGroupsUnavailable
export interface TLPushMessageContentHidden extends TLObject {
	readonly "@type": "pushMessageContentHidden"
	readonly is_pinned: boolean
}
export function pushMessageContentHidden(object: TLObject): TLPushMessageContentHidden { return object as TLPushMessageContentHidden }
export interface TLPushMessageContentAnimation extends TLObject {
	readonly "@type": "pushMessageContentAnimation"
	readonly animation: TLAnimation
	readonly caption: string
	readonly is_pinned: boolean
}
export function pushMessageContentAnimation(object: TLObject): TLPushMessageContentAnimation { return object as TLPushMessageContentAnimation }
export interface TLPushMessageContentAudio extends TLObject {
	readonly "@type": "pushMessageContentAudio"
	readonly audio: TLAudio
	readonly is_pinned: boolean
}
export function pushMessageContentAudio(object: TLObject): TLPushMessageContentAudio { return object as TLPushMessageContentAudio }
export interface TLPushMessageContentContact extends TLObject {
	readonly "@type": "pushMessageContentContact"
	readonly name: string
	readonly is_pinned: boolean
}
export function pushMessageContentContact(object: TLObject): TLPushMessageContentContact { return object as TLPushMessageContentContact }
export interface TLPushMessageContentContactRegistered extends TLObject {
	readonly "@type": "pushMessageContentContactRegistered"
}
export function pushMessageContentContactRegistered(object: TLObject): TLPushMessageContentContactRegistered { return object as TLPushMessageContentContactRegistered }
export interface TLPushMessageContentDocument extends TLObject {
	readonly "@type": "pushMessageContentDocument"
	readonly document: TLDocument
	readonly is_pinned: boolean
}
export function pushMessageContentDocument(object: TLObject): TLPushMessageContentDocument { return object as TLPushMessageContentDocument }
export interface TLPushMessageContentGame extends TLObject {
	readonly "@type": "pushMessageContentGame"
	readonly title: string
	readonly is_pinned: boolean
}
export function pushMessageContentGame(object: TLObject): TLPushMessageContentGame { return object as TLPushMessageContentGame }
export interface TLPushMessageContentGameScore extends TLObject {
	readonly "@type": "pushMessageContentGameScore"
	readonly title: string
	readonly score: number
	readonly is_pinned: boolean
}
export function pushMessageContentGameScore(object: TLObject): TLPushMessageContentGameScore { return object as TLPushMessageContentGameScore }
export interface TLPushMessageContentInvoice extends TLObject {
	readonly "@type": "pushMessageContentInvoice"
	readonly price: string
	readonly is_pinned: boolean
}
export function pushMessageContentInvoice(object: TLObject): TLPushMessageContentInvoice { return object as TLPushMessageContentInvoice }
export interface TLPushMessageContentLocation extends TLObject {
	readonly "@type": "pushMessageContentLocation"
	readonly is_live: boolean
	readonly is_pinned: boolean
}
export function pushMessageContentLocation(object: TLObject): TLPushMessageContentLocation { return object as TLPushMessageContentLocation }
export interface TLPushMessageContentPhoto extends TLObject {
	readonly "@type": "pushMessageContentPhoto"
	readonly photo: TLPhoto
	readonly caption: string
	readonly is_secret: boolean
	readonly is_pinned: boolean
}
export function pushMessageContentPhoto(object: TLObject): TLPushMessageContentPhoto { return object as TLPushMessageContentPhoto }
export interface TLPushMessageContentPoll extends TLObject {
	readonly "@type": "pushMessageContentPoll"
	readonly question: string
	readonly is_regular: boolean
	readonly is_pinned: boolean
}
export function pushMessageContentPoll(object: TLObject): TLPushMessageContentPoll { return object as TLPushMessageContentPoll }
export interface TLPushMessageContentScreenshotTaken extends TLObject {
	readonly "@type": "pushMessageContentScreenshotTaken"
}
export function pushMessageContentScreenshotTaken(object: TLObject): TLPushMessageContentScreenshotTaken { return object as TLPushMessageContentScreenshotTaken }
export interface TLPushMessageContentSticker extends TLObject {
	readonly "@type": "pushMessageContentSticker"
	readonly sticker: TLSticker
	readonly emoji: string
	readonly is_pinned: boolean
}
export function pushMessageContentSticker(object: TLObject): TLPushMessageContentSticker { return object as TLPushMessageContentSticker }
export interface TLPushMessageContentText extends TLObject {
	readonly "@type": "pushMessageContentText"
	readonly text: string
	readonly is_pinned: boolean
}
export function pushMessageContentText(object: TLObject): TLPushMessageContentText { return object as TLPushMessageContentText }
export interface TLPushMessageContentVideo extends TLObject {
	readonly "@type": "pushMessageContentVideo"
	readonly video: TLVideo
	readonly caption: string
	readonly is_secret: boolean
	readonly is_pinned: boolean
}
export function pushMessageContentVideo(object: TLObject): TLPushMessageContentVideo { return object as TLPushMessageContentVideo }
export interface TLPushMessageContentVideoNote extends TLObject {
	readonly "@type": "pushMessageContentVideoNote"
	readonly video_note: TLVideoNote
	readonly is_pinned: boolean
}
export function pushMessageContentVideoNote(object: TLObject): TLPushMessageContentVideoNote { return object as TLPushMessageContentVideoNote }
export interface TLPushMessageContentVoiceNote extends TLObject {
	readonly "@type": "pushMessageContentVoiceNote"
	readonly voice_note: TLVoiceNote
	readonly is_pinned: boolean
}
export function pushMessageContentVoiceNote(object: TLObject): TLPushMessageContentVoiceNote { return object as TLPushMessageContentVoiceNote }
export interface TLPushMessageContentBasicGroupChatCreate extends TLObject {
	readonly "@type": "pushMessageContentBasicGroupChatCreate"
}
export function pushMessageContentBasicGroupChatCreate(object: TLObject): TLPushMessageContentBasicGroupChatCreate { return object as TLPushMessageContentBasicGroupChatCreate }
export interface TLPushMessageContentChatAddMembers extends TLObject {
	readonly "@type": "pushMessageContentChatAddMembers"
	readonly member_name: string
	readonly is_current_user: boolean
	readonly is_returned: boolean
}
export function pushMessageContentChatAddMembers(object: TLObject): TLPushMessageContentChatAddMembers { return object as TLPushMessageContentChatAddMembers }
export interface TLPushMessageContentChatChangePhoto extends TLObject {
	readonly "@type": "pushMessageContentChatChangePhoto"
}
export function pushMessageContentChatChangePhoto(object: TLObject): TLPushMessageContentChatChangePhoto { return object as TLPushMessageContentChatChangePhoto }
export interface TLPushMessageContentChatChangeTitle extends TLObject {
	readonly "@type": "pushMessageContentChatChangeTitle"
	readonly title: string
}
export function pushMessageContentChatChangeTitle(object: TLObject): TLPushMessageContentChatChangeTitle { return object as TLPushMessageContentChatChangeTitle }
export interface TLPushMessageContentChatDeleteMember extends TLObject {
	readonly "@type": "pushMessageContentChatDeleteMember"
	readonly member_name: string
	readonly is_current_user: boolean
	readonly is_left: boolean
}
export function pushMessageContentChatDeleteMember(object: TLObject): TLPushMessageContentChatDeleteMember { return object as TLPushMessageContentChatDeleteMember }
export interface TLPushMessageContentChatJoinByLink extends TLObject {
	readonly "@type": "pushMessageContentChatJoinByLink"
}
export function pushMessageContentChatJoinByLink(object: TLObject): TLPushMessageContentChatJoinByLink { return object as TLPushMessageContentChatJoinByLink }
export interface TLPushMessageContentMessageForwards extends TLObject {
	readonly "@type": "pushMessageContentMessageForwards"
	readonly total_count: number
}
export function pushMessageContentMessageForwards(object: TLObject): TLPushMessageContentMessageForwards { return object as TLPushMessageContentMessageForwards }
export interface TLPushMessageContentMediaAlbum extends TLObject {
	readonly "@type": "pushMessageContentMediaAlbum"
	readonly total_count: number
	readonly has_photos: boolean
	readonly has_videos: boolean
	readonly has_audios: boolean
	readonly has_documents: boolean
}
export function pushMessageContentMediaAlbum(object: TLObject): TLPushMessageContentMediaAlbum { return object as TLPushMessageContentMediaAlbum }
export type TLPushMessageContent = TLPushMessageContentHidden | TLPushMessageContentAnimation | TLPushMessageContentAudio | TLPushMessageContentContact | TLPushMessageContentContactRegistered | TLPushMessageContentDocument | TLPushMessageContentGame | TLPushMessageContentGameScore | TLPushMessageContentInvoice | TLPushMessageContentLocation | TLPushMessageContentPhoto | TLPushMessageContentPoll | TLPushMessageContentScreenshotTaken | TLPushMessageContentSticker | TLPushMessageContentText | TLPushMessageContentVideo | TLPushMessageContentVideoNote | TLPushMessageContentVoiceNote | TLPushMessageContentBasicGroupChatCreate | TLPushMessageContentChatAddMembers | TLPushMessageContentChatChangePhoto | TLPushMessageContentChatChangeTitle | TLPushMessageContentChatDeleteMember | TLPushMessageContentChatJoinByLink | TLPushMessageContentMessageForwards | TLPushMessageContentMediaAlbum
export interface TLNotificationTypeNewMessage extends TLObject {
	readonly "@type": "notificationTypeNewMessage"
	readonly message: TLMessage
}
export function notificationTypeNewMessage(object: TLObject): TLNotificationTypeNewMessage { return object as TLNotificationTypeNewMessage }
export interface TLNotificationTypeNewSecretChat extends TLObject {
	readonly "@type": "notificationTypeNewSecretChat"
}
export function notificationTypeNewSecretChat(object: TLObject): TLNotificationTypeNewSecretChat { return object as TLNotificationTypeNewSecretChat }
export interface TLNotificationTypeNewCall extends TLObject {
	readonly "@type": "notificationTypeNewCall"
	readonly call_id: number
}
export function notificationTypeNewCall(object: TLObject): TLNotificationTypeNewCall { return object as TLNotificationTypeNewCall }
export interface TLNotificationTypeNewPushMessage extends TLObject {
	readonly "@type": "notificationTypeNewPushMessage"
	readonly message_id: number
	readonly sender: TLMessageSender
	readonly sender_name: string
	readonly is_outgoing: boolean
	readonly content: TLPushMessageContent
}
export function notificationTypeNewPushMessage(object: TLObject): TLNotificationTypeNewPushMessage { return object as TLNotificationTypeNewPushMessage }
export type TLNotificationType = TLNotificationTypeNewMessage | TLNotificationTypeNewSecretChat | TLNotificationTypeNewCall | TLNotificationTypeNewPushMessage
export interface TLNotificationGroupTypeMessages extends TLObject {
	readonly "@type": "notificationGroupTypeMessages"
}
export function notificationGroupTypeMessages(object: TLObject): TLNotificationGroupTypeMessages { return object as TLNotificationGroupTypeMessages }
export interface TLNotificationGroupTypeMentions extends TLObject {
	readonly "@type": "notificationGroupTypeMentions"
}
export function notificationGroupTypeMentions(object: TLObject): TLNotificationGroupTypeMentions { return object as TLNotificationGroupTypeMentions }
export interface TLNotificationGroupTypeSecretChat extends TLObject {
	readonly "@type": "notificationGroupTypeSecretChat"
}
export function notificationGroupTypeSecretChat(object: TLObject): TLNotificationGroupTypeSecretChat { return object as TLNotificationGroupTypeSecretChat }
export interface TLNotificationGroupTypeCalls extends TLObject {
	readonly "@type": "notificationGroupTypeCalls"
}
export function notificationGroupTypeCalls(object: TLObject): TLNotificationGroupTypeCalls { return object as TLNotificationGroupTypeCalls }
export type TLNotificationGroupType = TLNotificationGroupTypeMessages | TLNotificationGroupTypeMentions | TLNotificationGroupTypeSecretChat | TLNotificationGroupTypeCalls
export interface TLNotification extends TLObject {
	readonly "@type": "notification"
	readonly id: number
	readonly date: number
	readonly is_silent: boolean
	readonly type: TLNotificationType
}
export function notification(object: TLObject): TLNotification { return object as TLNotification }
export interface TLNotificationGroup extends TLObject {
	readonly "@type": "notificationGroup"
	readonly id: number
	readonly type: TLNotificationGroupType
	readonly chat_id: number
	readonly total_count: number
	readonly notifications: ReadonlyArray<TLNotification>
}
export function notificationGroup(object: TLObject): TLNotificationGroup { return object as TLNotificationGroup }
export interface TLOptionValueBoolean extends TLObject {
	readonly "@type": "optionValueBoolean"
	readonly value: boolean
}
export function optionValueBoolean(object: TLObject): TLOptionValueBoolean { return object as TLOptionValueBoolean }
export interface TLOptionValueEmpty extends TLObject {
	readonly "@type": "optionValueEmpty"
}
export function optionValueEmpty(object: TLObject): TLOptionValueEmpty { return object as TLOptionValueEmpty }
export interface TLOptionValueInteger extends TLObject {
	readonly "@type": "optionValueInteger"
	readonly value: string
}
export function optionValueInteger(object: TLObject): TLOptionValueInteger { return object as TLOptionValueInteger }
export interface TLOptionValueString extends TLObject {
	readonly "@type": "optionValueString"
	readonly value: string
}
export function optionValueString(object: TLObject): TLOptionValueString { return object as TLOptionValueString }
export type TLOptionValue = TLOptionValueBoolean | TLOptionValueEmpty | TLOptionValueInteger | TLOptionValueString
export interface TLJsonObjectMember extends TLObject {
	readonly "@type": "jsonObjectMember"
	readonly key: string
	readonly value: TLJsonValue
}
export function jsonObjectMember(object: TLObject): TLJsonObjectMember { return object as TLJsonObjectMember }
export interface TLJsonValueNull extends TLObject {
	readonly "@type": "jsonValueNull"
}
export function jsonValueNull(object: TLObject): TLJsonValueNull { return object as TLJsonValueNull }
export interface TLJsonValueBoolean extends TLObject {
	readonly "@type": "jsonValueBoolean"
	readonly value: boolean
}
export function jsonValueBoolean(object: TLObject): TLJsonValueBoolean { return object as TLJsonValueBoolean }
export interface TLJsonValueNumber extends TLObject {
	readonly "@type": "jsonValueNumber"
	readonly value: number
}
export function jsonValueNumber(object: TLObject): TLJsonValueNumber { return object as TLJsonValueNumber }
export interface TLJsonValueString extends TLObject {
	readonly "@type": "jsonValueString"
	readonly value: string
}
export function jsonValueString(object: TLObject): TLJsonValueString { return object as TLJsonValueString }
export interface TLJsonValueArray extends TLObject {
	readonly "@type": "jsonValueArray"
	readonly values: ReadonlyArray<TLJsonValue>
}
export function jsonValueArray(object: TLObject): TLJsonValueArray { return object as TLJsonValueArray }
export interface TLJsonValueObject extends TLObject {
	readonly "@type": "jsonValueObject"
	readonly members: ReadonlyArray<TLJsonObjectMember>
}
export function jsonValueObject(object: TLObject): TLJsonValueObject { return object as TLJsonValueObject }
export type TLJsonValue = TLJsonValueNull | TLJsonValueBoolean | TLJsonValueNumber | TLJsonValueString | TLJsonValueArray | TLJsonValueObject
export interface TLUserPrivacySettingRuleAllowAll extends TLObject {
	readonly "@type": "userPrivacySettingRuleAllowAll"
}
export function userPrivacySettingRuleAllowAll(object: TLObject): TLUserPrivacySettingRuleAllowAll { return object as TLUserPrivacySettingRuleAllowAll }
export interface TLUserPrivacySettingRuleAllowContacts extends TLObject {
	readonly "@type": "userPrivacySettingRuleAllowContacts"
}
export function userPrivacySettingRuleAllowContacts(object: TLObject): TLUserPrivacySettingRuleAllowContacts { return object as TLUserPrivacySettingRuleAllowContacts }
export interface TLUserPrivacySettingRuleAllowUsers extends TLObject {
	readonly "@type": "userPrivacySettingRuleAllowUsers"
	readonly user_ids: ReadonlyArray<number>
}
export function userPrivacySettingRuleAllowUsers(object: TLObject): TLUserPrivacySettingRuleAllowUsers { return object as TLUserPrivacySettingRuleAllowUsers }
export interface TLUserPrivacySettingRuleAllowChatMembers extends TLObject {
	readonly "@type": "userPrivacySettingRuleAllowChatMembers"
	readonly chat_ids: ReadonlyArray<number>
}
export function userPrivacySettingRuleAllowChatMembers(object: TLObject): TLUserPrivacySettingRuleAllowChatMembers { return object as TLUserPrivacySettingRuleAllowChatMembers }
export interface TLUserPrivacySettingRuleRestrictAll extends TLObject {
	readonly "@type": "userPrivacySettingRuleRestrictAll"
}
export function userPrivacySettingRuleRestrictAll(object: TLObject): TLUserPrivacySettingRuleRestrictAll { return object as TLUserPrivacySettingRuleRestrictAll }
export interface TLUserPrivacySettingRuleRestrictContacts extends TLObject {
	readonly "@type": "userPrivacySettingRuleRestrictContacts"
}
export function userPrivacySettingRuleRestrictContacts(object: TLObject): TLUserPrivacySettingRuleRestrictContacts { return object as TLUserPrivacySettingRuleRestrictContacts }
export interface TLUserPrivacySettingRuleRestrictUsers extends TLObject {
	readonly "@type": "userPrivacySettingRuleRestrictUsers"
	readonly user_ids: ReadonlyArray<number>
}
export function userPrivacySettingRuleRestrictUsers(object: TLObject): TLUserPrivacySettingRuleRestrictUsers { return object as TLUserPrivacySettingRuleRestrictUsers }
export interface TLUserPrivacySettingRuleRestrictChatMembers extends TLObject {
	readonly "@type": "userPrivacySettingRuleRestrictChatMembers"
	readonly chat_ids: ReadonlyArray<number>
}
export function userPrivacySettingRuleRestrictChatMembers(object: TLObject): TLUserPrivacySettingRuleRestrictChatMembers { return object as TLUserPrivacySettingRuleRestrictChatMembers }
export type TLUserPrivacySettingRule = TLUserPrivacySettingRuleAllowAll | TLUserPrivacySettingRuleAllowContacts | TLUserPrivacySettingRuleAllowUsers | TLUserPrivacySettingRuleAllowChatMembers | TLUserPrivacySettingRuleRestrictAll | TLUserPrivacySettingRuleRestrictContacts | TLUserPrivacySettingRuleRestrictUsers | TLUserPrivacySettingRuleRestrictChatMembers
export interface TLUserPrivacySettingRules extends TLObject {
	readonly "@type": "userPrivacySettingRules"
	readonly rules: ReadonlyArray<TLUserPrivacySettingRule>
}
export function userPrivacySettingRules(object: TLObject): TLUserPrivacySettingRules { return object as TLUserPrivacySettingRules }
export interface TLUserPrivacySettingShowStatus extends TLObject {
	readonly "@type": "userPrivacySettingShowStatus"
}
export function userPrivacySettingShowStatus(object: TLObject): TLUserPrivacySettingShowStatus { return object as TLUserPrivacySettingShowStatus }
export interface TLUserPrivacySettingShowProfilePhoto extends TLObject {
	readonly "@type": "userPrivacySettingShowProfilePhoto"
}
export function userPrivacySettingShowProfilePhoto(object: TLObject): TLUserPrivacySettingShowProfilePhoto { return object as TLUserPrivacySettingShowProfilePhoto }
export interface TLUserPrivacySettingShowLinkInForwardedMessages extends TLObject {
	readonly "@type": "userPrivacySettingShowLinkInForwardedMessages"
}
export function userPrivacySettingShowLinkInForwardedMessages(object: TLObject): TLUserPrivacySettingShowLinkInForwardedMessages { return object as TLUserPrivacySettingShowLinkInForwardedMessages }
export interface TLUserPrivacySettingShowPhoneNumber extends TLObject {
	readonly "@type": "userPrivacySettingShowPhoneNumber"
}
export function userPrivacySettingShowPhoneNumber(object: TLObject): TLUserPrivacySettingShowPhoneNumber { return object as TLUserPrivacySettingShowPhoneNumber }
export interface TLUserPrivacySettingAllowChatInvites extends TLObject {
	readonly "@type": "userPrivacySettingAllowChatInvites"
}
export function userPrivacySettingAllowChatInvites(object: TLObject): TLUserPrivacySettingAllowChatInvites { return object as TLUserPrivacySettingAllowChatInvites }
export interface TLUserPrivacySettingAllowCalls extends TLObject {
	readonly "@type": "userPrivacySettingAllowCalls"
}
export function userPrivacySettingAllowCalls(object: TLObject): TLUserPrivacySettingAllowCalls { return object as TLUserPrivacySettingAllowCalls }
export interface TLUserPrivacySettingAllowPeerToPeerCalls extends TLObject {
	readonly "@type": "userPrivacySettingAllowPeerToPeerCalls"
}
export function userPrivacySettingAllowPeerToPeerCalls(object: TLObject): TLUserPrivacySettingAllowPeerToPeerCalls { return object as TLUserPrivacySettingAllowPeerToPeerCalls }
export interface TLUserPrivacySettingAllowFindingByPhoneNumber extends TLObject {
	readonly "@type": "userPrivacySettingAllowFindingByPhoneNumber"
}
export function userPrivacySettingAllowFindingByPhoneNumber(object: TLObject): TLUserPrivacySettingAllowFindingByPhoneNumber { return object as TLUserPrivacySettingAllowFindingByPhoneNumber }
export type TLUserPrivacySetting = TLUserPrivacySettingShowStatus | TLUserPrivacySettingShowProfilePhoto | TLUserPrivacySettingShowLinkInForwardedMessages | TLUserPrivacySettingShowPhoneNumber | TLUserPrivacySettingAllowChatInvites | TLUserPrivacySettingAllowCalls | TLUserPrivacySettingAllowPeerToPeerCalls | TLUserPrivacySettingAllowFindingByPhoneNumber
export interface TLAccountTtl extends TLObject {
	readonly "@type": "accountTtl"
	readonly days: number
}
export function accountTtl(object: TLObject): TLAccountTtl { return object as TLAccountTtl }
export interface TLSession extends TLObject {
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
export function session(object: TLObject): TLSession { return object as TLSession }
export interface TLSessions extends TLObject {
	readonly "@type": "sessions"
	readonly sessions: ReadonlyArray<TLSession>
}
export function sessions(object: TLObject): TLSessions { return object as TLSessions }
export interface TLConnectedWebsite extends TLObject {
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
export function connectedWebsite(object: TLObject): TLConnectedWebsite { return object as TLConnectedWebsite }
export interface TLConnectedWebsites extends TLObject {
	readonly "@type": "connectedWebsites"
	readonly websites: ReadonlyArray<TLConnectedWebsite>
}
export function connectedWebsites(object: TLObject): TLConnectedWebsites { return object as TLConnectedWebsites }
export interface TLChatReportReasonSpam extends TLObject {
	readonly "@type": "chatReportReasonSpam"
}
export function chatReportReasonSpam(object: TLObject): TLChatReportReasonSpam { return object as TLChatReportReasonSpam }
export interface TLChatReportReasonViolence extends TLObject {
	readonly "@type": "chatReportReasonViolence"
}
export function chatReportReasonViolence(object: TLObject): TLChatReportReasonViolence { return object as TLChatReportReasonViolence }
export interface TLChatReportReasonPornography extends TLObject {
	readonly "@type": "chatReportReasonPornography"
}
export function chatReportReasonPornography(object: TLObject): TLChatReportReasonPornography { return object as TLChatReportReasonPornography }
export interface TLChatReportReasonChildAbuse extends TLObject {
	readonly "@type": "chatReportReasonChildAbuse"
}
export function chatReportReasonChildAbuse(object: TLObject): TLChatReportReasonChildAbuse { return object as TLChatReportReasonChildAbuse }
export interface TLChatReportReasonCopyright extends TLObject {
	readonly "@type": "chatReportReasonCopyright"
}
export function chatReportReasonCopyright(object: TLObject): TLChatReportReasonCopyright { return object as TLChatReportReasonCopyright }
export interface TLChatReportReasonUnrelatedLocation extends TLObject {
	readonly "@type": "chatReportReasonUnrelatedLocation"
}
export function chatReportReasonUnrelatedLocation(object: TLObject): TLChatReportReasonUnrelatedLocation { return object as TLChatReportReasonUnrelatedLocation }
export interface TLChatReportReasonCustom extends TLObject {
	readonly "@type": "chatReportReasonCustom"
	readonly text: string
}
export function chatReportReasonCustom(object: TLObject): TLChatReportReasonCustom { return object as TLChatReportReasonCustom }
export type TLChatReportReason = TLChatReportReasonSpam | TLChatReportReasonViolence | TLChatReportReasonPornography | TLChatReportReasonChildAbuse | TLChatReportReasonCopyright | TLChatReportReasonUnrelatedLocation | TLChatReportReasonCustom
export interface TLMessageLink extends TLObject {
	readonly "@type": "messageLink"
	readonly link: string
	readonly is_public: boolean
}
export function messageLink(object: TLObject): TLMessageLink { return object as TLMessageLink }
export interface TLMessageLinkInfo extends TLObject {
	readonly "@type": "messageLinkInfo"
	readonly is_public: boolean
	readonly chat_id: number
	readonly message: TLMessage
	readonly for_album: boolean
	readonly for_comment: boolean
}
export function messageLinkInfo(object: TLObject): TLMessageLinkInfo { return object as TLMessageLinkInfo }
export interface TLFilePart extends TLObject {
	readonly "@type": "filePart"
	readonly data: Uint8Array
}
export function filePart(object: TLObject): TLFilePart { return object as TLFilePart }
export interface TLFileTypeNone extends TLObject {
	readonly "@type": "fileTypeNone"
}
export function fileTypeNone(object: TLObject): TLFileTypeNone { return object as TLFileTypeNone }
export interface TLFileTypeAnimation extends TLObject {
	readonly "@type": "fileTypeAnimation"
}
export function fileTypeAnimation(object: TLObject): TLFileTypeAnimation { return object as TLFileTypeAnimation }
export interface TLFileTypeAudio extends TLObject {
	readonly "@type": "fileTypeAudio"
}
export function fileTypeAudio(object: TLObject): TLFileTypeAudio { return object as TLFileTypeAudio }
export interface TLFileTypeDocument extends TLObject {
	readonly "@type": "fileTypeDocument"
}
export function fileTypeDocument(object: TLObject): TLFileTypeDocument { return object as TLFileTypeDocument }
export interface TLFileTypePhoto extends TLObject {
	readonly "@type": "fileTypePhoto"
}
export function fileTypePhoto(object: TLObject): TLFileTypePhoto { return object as TLFileTypePhoto }
export interface TLFileTypeProfilePhoto extends TLObject {
	readonly "@type": "fileTypeProfilePhoto"
}
export function fileTypeProfilePhoto(object: TLObject): TLFileTypeProfilePhoto { return object as TLFileTypeProfilePhoto }
export interface TLFileTypeSecret extends TLObject {
	readonly "@type": "fileTypeSecret"
}
export function fileTypeSecret(object: TLObject): TLFileTypeSecret { return object as TLFileTypeSecret }
export interface TLFileTypeSecretThumbnail extends TLObject {
	readonly "@type": "fileTypeSecretThumbnail"
}
export function fileTypeSecretThumbnail(object: TLObject): TLFileTypeSecretThumbnail { return object as TLFileTypeSecretThumbnail }
export interface TLFileTypeSecure extends TLObject {
	readonly "@type": "fileTypeSecure"
}
export function fileTypeSecure(object: TLObject): TLFileTypeSecure { return object as TLFileTypeSecure }
export interface TLFileTypeSticker extends TLObject {
	readonly "@type": "fileTypeSticker"
}
export function fileTypeSticker(object: TLObject): TLFileTypeSticker { return object as TLFileTypeSticker }
export interface TLFileTypeThumbnail extends TLObject {
	readonly "@type": "fileTypeThumbnail"
}
export function fileTypeThumbnail(object: TLObject): TLFileTypeThumbnail { return object as TLFileTypeThumbnail }
export interface TLFileTypeUnknown extends TLObject {
	readonly "@type": "fileTypeUnknown"
}
export function fileTypeUnknown(object: TLObject): TLFileTypeUnknown { return object as TLFileTypeUnknown }
export interface TLFileTypeVideo extends TLObject {
	readonly "@type": "fileTypeVideo"
}
export function fileTypeVideo(object: TLObject): TLFileTypeVideo { return object as TLFileTypeVideo }
export interface TLFileTypeVideoNote extends TLObject {
	readonly "@type": "fileTypeVideoNote"
}
export function fileTypeVideoNote(object: TLObject): TLFileTypeVideoNote { return object as TLFileTypeVideoNote }
export interface TLFileTypeVoiceNote extends TLObject {
	readonly "@type": "fileTypeVoiceNote"
}
export function fileTypeVoiceNote(object: TLObject): TLFileTypeVoiceNote { return object as TLFileTypeVoiceNote }
export interface TLFileTypeWallpaper extends TLObject {
	readonly "@type": "fileTypeWallpaper"
}
export function fileTypeWallpaper(object: TLObject): TLFileTypeWallpaper { return object as TLFileTypeWallpaper }
export type TLFileType = TLFileTypeNone | TLFileTypeAnimation | TLFileTypeAudio | TLFileTypeDocument | TLFileTypePhoto | TLFileTypeProfilePhoto | TLFileTypeSecret | TLFileTypeSecretThumbnail | TLFileTypeSecure | TLFileTypeSticker | TLFileTypeThumbnail | TLFileTypeUnknown | TLFileTypeVideo | TLFileTypeVideoNote | TLFileTypeVoiceNote | TLFileTypeWallpaper
export interface TLStorageStatisticsByFileType extends TLObject {
	readonly "@type": "storageStatisticsByFileType"
	readonly file_type: TLFileType
	readonly size: number
	readonly count: number
}
export function storageStatisticsByFileType(object: TLObject): TLStorageStatisticsByFileType { return object as TLStorageStatisticsByFileType }
export interface TLStorageStatisticsByChat extends TLObject {
	readonly "@type": "storageStatisticsByChat"
	readonly chat_id: number
	readonly size: number
	readonly count: number
	readonly by_file_type: ReadonlyArray<TLStorageStatisticsByFileType>
}
export function storageStatisticsByChat(object: TLObject): TLStorageStatisticsByChat { return object as TLStorageStatisticsByChat }
export interface TLStorageStatistics extends TLObject {
	readonly "@type": "storageStatistics"
	readonly size: number
	readonly count: number
	readonly by_chat: ReadonlyArray<TLStorageStatisticsByChat>
}
export function storageStatistics(object: TLObject): TLStorageStatistics { return object as TLStorageStatistics }
export interface TLStorageStatisticsFast extends TLObject {
	readonly "@type": "storageStatisticsFast"
	readonly files_size: number
	readonly file_count: number
	readonly database_size: number
	readonly language_pack_database_size: number
	readonly log_size: number
}
export function storageStatisticsFast(object: TLObject): TLStorageStatisticsFast { return object as TLStorageStatisticsFast }
export interface TLDatabaseStatistics extends TLObject {
	readonly "@type": "databaseStatistics"
	readonly statistics: string
}
export function databaseStatistics(object: TLObject): TLDatabaseStatistics { return object as TLDatabaseStatistics }
export interface TLNetworkTypeNone extends TLObject {
	readonly "@type": "networkTypeNone"
}
export function networkTypeNone(object: TLObject): TLNetworkTypeNone { return object as TLNetworkTypeNone }
export interface TLNetworkTypeMobile extends TLObject {
	readonly "@type": "networkTypeMobile"
}
export function networkTypeMobile(object: TLObject): TLNetworkTypeMobile { return object as TLNetworkTypeMobile }
export interface TLNetworkTypeMobileRoaming extends TLObject {
	readonly "@type": "networkTypeMobileRoaming"
}
export function networkTypeMobileRoaming(object: TLObject): TLNetworkTypeMobileRoaming { return object as TLNetworkTypeMobileRoaming }
export interface TLNetworkTypeWiFi extends TLObject {
	readonly "@type": "networkTypeWiFi"
}
export function networkTypeWiFi(object: TLObject): TLNetworkTypeWiFi { return object as TLNetworkTypeWiFi }
export interface TLNetworkTypeOther extends TLObject {
	readonly "@type": "networkTypeOther"
}
export function networkTypeOther(object: TLObject): TLNetworkTypeOther { return object as TLNetworkTypeOther }
export type TLNetworkType = TLNetworkTypeNone | TLNetworkTypeMobile | TLNetworkTypeMobileRoaming | TLNetworkTypeWiFi | TLNetworkTypeOther
export interface TLNetworkStatisticsEntryFile extends TLObject {
	readonly "@type": "networkStatisticsEntryFile"
	readonly file_type: TLFileType
	readonly network_type: TLNetworkType
	readonly sent_bytes: number
	readonly received_bytes: number
}
export function networkStatisticsEntryFile(object: TLObject): TLNetworkStatisticsEntryFile { return object as TLNetworkStatisticsEntryFile }
export interface TLNetworkStatisticsEntryCall extends TLObject {
	readonly "@type": "networkStatisticsEntryCall"
	readonly network_type: TLNetworkType
	readonly sent_bytes: number
	readonly received_bytes: number
	readonly duration: number
}
export function networkStatisticsEntryCall(object: TLObject): TLNetworkStatisticsEntryCall { return object as TLNetworkStatisticsEntryCall }
export type TLNetworkStatisticsEntry = TLNetworkStatisticsEntryFile | TLNetworkStatisticsEntryCall
export interface TLNetworkStatistics extends TLObject {
	readonly "@type": "networkStatistics"
	readonly since_date: number
	readonly entries: ReadonlyArray<TLNetworkStatisticsEntry>
}
export function networkStatistics(object: TLObject): TLNetworkStatistics { return object as TLNetworkStatistics }
export interface TLAutoDownloadSettings extends TLObject {
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
export function autoDownloadSettings(object: TLObject): TLAutoDownloadSettings { return object as TLAutoDownloadSettings }
export interface TLAutoDownloadSettingsPresets extends TLObject {
	readonly "@type": "autoDownloadSettingsPresets"
	readonly low: TLAutoDownloadSettings
	readonly medium: TLAutoDownloadSettings
	readonly high: TLAutoDownloadSettings
}
export function autoDownloadSettingsPresets(object: TLObject): TLAutoDownloadSettingsPresets { return object as TLAutoDownloadSettingsPresets }
export interface TLConnectionStateWaitingForNetwork extends TLObject {
	readonly "@type": "connectionStateWaitingForNetwork"
}
export function connectionStateWaitingForNetwork(object: TLObject): TLConnectionStateWaitingForNetwork { return object as TLConnectionStateWaitingForNetwork }
export interface TLConnectionStateConnectingToProxy extends TLObject {
	readonly "@type": "connectionStateConnectingToProxy"
}
export function connectionStateConnectingToProxy(object: TLObject): TLConnectionStateConnectingToProxy { return object as TLConnectionStateConnectingToProxy }
export interface TLConnectionStateConnecting extends TLObject {
	readonly "@type": "connectionStateConnecting"
}
export function connectionStateConnecting(object: TLObject): TLConnectionStateConnecting { return object as TLConnectionStateConnecting }
export interface TLConnectionStateUpdating extends TLObject {
	readonly "@type": "connectionStateUpdating"
}
export function connectionStateUpdating(object: TLObject): TLConnectionStateUpdating { return object as TLConnectionStateUpdating }
export interface TLConnectionStateReady extends TLObject {
	readonly "@type": "connectionStateReady"
}
export function connectionStateReady(object: TLObject): TLConnectionStateReady { return object as TLConnectionStateReady }
export type TLConnectionState = TLConnectionStateWaitingForNetwork | TLConnectionStateConnectingToProxy | TLConnectionStateConnecting | TLConnectionStateUpdating | TLConnectionStateReady
export interface TLTopChatCategoryUsers extends TLObject {
	readonly "@type": "topChatCategoryUsers"
}
export function topChatCategoryUsers(object: TLObject): TLTopChatCategoryUsers { return object as TLTopChatCategoryUsers }
export interface TLTopChatCategoryBots extends TLObject {
	readonly "@type": "topChatCategoryBots"
}
export function topChatCategoryBots(object: TLObject): TLTopChatCategoryBots { return object as TLTopChatCategoryBots }
export interface TLTopChatCategoryGroups extends TLObject {
	readonly "@type": "topChatCategoryGroups"
}
export function topChatCategoryGroups(object: TLObject): TLTopChatCategoryGroups { return object as TLTopChatCategoryGroups }
export interface TLTopChatCategoryChannels extends TLObject {
	readonly "@type": "topChatCategoryChannels"
}
export function topChatCategoryChannels(object: TLObject): TLTopChatCategoryChannels { return object as TLTopChatCategoryChannels }
export interface TLTopChatCategoryInlineBots extends TLObject {
	readonly "@type": "topChatCategoryInlineBots"
}
export function topChatCategoryInlineBots(object: TLObject): TLTopChatCategoryInlineBots { return object as TLTopChatCategoryInlineBots }
export interface TLTopChatCategoryCalls extends TLObject {
	readonly "@type": "topChatCategoryCalls"
}
export function topChatCategoryCalls(object: TLObject): TLTopChatCategoryCalls { return object as TLTopChatCategoryCalls }
export interface TLTopChatCategoryForwardChats extends TLObject {
	readonly "@type": "topChatCategoryForwardChats"
}
export function topChatCategoryForwardChats(object: TLObject): TLTopChatCategoryForwardChats { return object as TLTopChatCategoryForwardChats }
export type TLTopChatCategory = TLTopChatCategoryUsers | TLTopChatCategoryBots | TLTopChatCategoryGroups | TLTopChatCategoryChannels | TLTopChatCategoryInlineBots | TLTopChatCategoryCalls | TLTopChatCategoryForwardChats
export interface TLTMeUrlTypeUser extends TLObject {
	readonly "@type": "tMeUrlTypeUser"
	readonly user_id: number
}
export function tMeUrlTypeUser(object: TLObject): TLTMeUrlTypeUser { return object as TLTMeUrlTypeUser }
export interface TLTMeUrlTypeSupergroup extends TLObject {
	readonly "@type": "tMeUrlTypeSupergroup"
	readonly supergroup_id: number
}
export function tMeUrlTypeSupergroup(object: TLObject): TLTMeUrlTypeSupergroup { return object as TLTMeUrlTypeSupergroup }
export interface TLTMeUrlTypeChatInvite extends TLObject {
	readonly "@type": "tMeUrlTypeChatInvite"
	readonly info: TLChatInviteLinkInfo
}
export function tMeUrlTypeChatInvite(object: TLObject): TLTMeUrlTypeChatInvite { return object as TLTMeUrlTypeChatInvite }
export interface TLTMeUrlTypeStickerSet extends TLObject {
	readonly "@type": "tMeUrlTypeStickerSet"
	readonly sticker_set_id: string
}
export function tMeUrlTypeStickerSet(object: TLObject): TLTMeUrlTypeStickerSet { return object as TLTMeUrlTypeStickerSet }
export type TLTMeUrlType = TLTMeUrlTypeUser | TLTMeUrlTypeSupergroup | TLTMeUrlTypeChatInvite | TLTMeUrlTypeStickerSet
export interface TLTMeUrl extends TLObject {
	readonly "@type": "tMeUrl"
	readonly url: string
	readonly type: TLTMeUrlType
}
export function tMeUrl(object: TLObject): TLTMeUrl { return object as TLTMeUrl }
export interface TLTMeUrls extends TLObject {
	readonly "@type": "tMeUrls"
	readonly urls: ReadonlyArray<TLTMeUrl>
}
export function tMeUrls(object: TLObject): TLTMeUrls { return object as TLTMeUrls }
export interface TLSuggestedActionEnableArchiveAndMuteNewChats extends TLObject {
	readonly "@type": "suggestedActionEnableArchiveAndMuteNewChats"
}
export function suggestedActionEnableArchiveAndMuteNewChats(object: TLObject): TLSuggestedActionEnableArchiveAndMuteNewChats { return object as TLSuggestedActionEnableArchiveAndMuteNewChats }
export interface TLSuggestedActionCheckPhoneNumber extends TLObject {
	readonly "@type": "suggestedActionCheckPhoneNumber"
}
export function suggestedActionCheckPhoneNumber(object: TLObject): TLSuggestedActionCheckPhoneNumber { return object as TLSuggestedActionCheckPhoneNumber }
export type TLSuggestedAction = TLSuggestedActionEnableArchiveAndMuteNewChats | TLSuggestedActionCheckPhoneNumber
export interface TLCount extends TLObject {
	readonly "@type": "count"
	readonly count: number
}
export function count(object: TLObject): TLCount { return object as TLCount }
export interface TLText extends TLObject {
	readonly "@type": "text"
	readonly text: string
}
export function text(object: TLObject): TLText { return object as TLText }
export interface TLSeconds extends TLObject {
	readonly "@type": "seconds"
	readonly seconds: number
}
export function seconds(object: TLObject): TLSeconds { return object as TLSeconds }
export interface TLDeepLinkInfo extends TLObject {
	readonly "@type": "deepLinkInfo"
	readonly text: TLFormattedText
	readonly need_update_application: boolean
}
export function deepLinkInfo(object: TLObject): TLDeepLinkInfo { return object as TLDeepLinkInfo }
export interface TLTextParseModeMarkdown extends TLObject {
	readonly "@type": "textParseModeMarkdown"
	readonly version: number
}
export function textParseModeMarkdown(object: TLObject): TLTextParseModeMarkdown { return object as TLTextParseModeMarkdown }
export interface TLTextParseModeHTML extends TLObject {
	readonly "@type": "textParseModeHTML"
}
export function textParseModeHTML(object: TLObject): TLTextParseModeHTML { return object as TLTextParseModeHTML }
export type TLTextParseMode = TLTextParseModeMarkdown | TLTextParseModeHTML
export interface TLProxyTypeSocks5 extends TLObject {
	readonly "@type": "proxyTypeSocks5"
	readonly username: string
	readonly password: string
}
export function proxyTypeSocks5(object: TLObject): TLProxyTypeSocks5 { return object as TLProxyTypeSocks5 }
export interface TLProxyTypeHttp extends TLObject {
	readonly "@type": "proxyTypeHttp"
	readonly username: string
	readonly password: string
	readonly http_only: boolean
}
export function proxyTypeHttp(object: TLObject): TLProxyTypeHttp { return object as TLProxyTypeHttp }
export interface TLProxyTypeMtproto extends TLObject {
	readonly "@type": "proxyTypeMtproto"
	readonly secret: string
}
export function proxyTypeMtproto(object: TLObject): TLProxyTypeMtproto { return object as TLProxyTypeMtproto }
export type TLProxyType = TLProxyTypeSocks5 | TLProxyTypeHttp | TLProxyTypeMtproto
export interface TLProxy extends TLObject {
	readonly "@type": "proxy"
	readonly id: number
	readonly server: string
	readonly port: number
	readonly last_used_date: number
	readonly is_enabled: boolean
	readonly type: TLProxyType
}
export function proxy(object: TLObject): TLProxy { return object as TLProxy }
export interface TLProxies extends TLObject {
	readonly "@type": "proxies"
	readonly proxies: ReadonlyArray<TLProxy>
}
export function proxies(object: TLObject): TLProxies { return object as TLProxies }
export interface TLInputStickerStatic extends TLObject {
	readonly "@type": "inputStickerStatic"
	readonly sticker: TLInputFile
	readonly emojis: string
	readonly mask_position: TLMaskPosition
}
export function inputStickerStatic(object: TLObject): TLInputStickerStatic { return object as TLInputStickerStatic }
export interface TLInputStickerAnimated extends TLObject {
	readonly "@type": "inputStickerAnimated"
	readonly sticker: TLInputFile
	readonly emojis: string
}
export function inputStickerAnimated(object: TLObject): TLInputStickerAnimated { return object as TLInputStickerAnimated }
export type TLInputSticker = TLInputStickerStatic | TLInputStickerAnimated
export interface TLDateRange extends TLObject {
	readonly "@type": "dateRange"
	readonly start_date: number
	readonly end_date: number
}
export function dateRange(object: TLObject): TLDateRange { return object as TLDateRange }
export interface TLStatisticsValue extends TLObject {
	readonly "@type": "statisticsValue"
	readonly value: number
	readonly previous_value: number
	readonly growth_rate_percentage: number
}
export function statisticsValue(object: TLObject): TLStatisticsValue { return object as TLStatisticsValue }
export interface TLStatisticsGraphData extends TLObject {
	readonly "@type": "statisticsGraphData"
	readonly json_data: string
	readonly zoom_token: string
}
export function statisticsGraphData(object: TLObject): TLStatisticsGraphData { return object as TLStatisticsGraphData }
export interface TLStatisticsGraphAsync extends TLObject {
	readonly "@type": "statisticsGraphAsync"
	readonly token: string
}
export function statisticsGraphAsync(object: TLObject): TLStatisticsGraphAsync { return object as TLStatisticsGraphAsync }
export interface TLStatisticsGraphError extends TLObject {
	readonly "@type": "statisticsGraphError"
	readonly error_message: string
}
export function statisticsGraphError(object: TLObject): TLStatisticsGraphError { return object as TLStatisticsGraphError }
export type TLStatisticsGraph = TLStatisticsGraphData | TLStatisticsGraphAsync | TLStatisticsGraphError
export interface TLChatStatisticsMessageInteractionInfo extends TLObject {
	readonly "@type": "chatStatisticsMessageInteractionInfo"
	readonly message_id: number
	readonly view_count: number
	readonly forward_count: number
}
export function chatStatisticsMessageInteractionInfo(object: TLObject): TLChatStatisticsMessageInteractionInfo { return object as TLChatStatisticsMessageInteractionInfo }
export interface TLChatStatisticsMessageSenderInfo extends TLObject {
	readonly "@type": "chatStatisticsMessageSenderInfo"
	readonly user_id: number
	readonly sent_message_count: number
	readonly average_character_count: number
}
export function chatStatisticsMessageSenderInfo(object: TLObject): TLChatStatisticsMessageSenderInfo { return object as TLChatStatisticsMessageSenderInfo }
export interface TLChatStatisticsAdministratorActionsInfo extends TLObject {
	readonly "@type": "chatStatisticsAdministratorActionsInfo"
	readonly user_id: number
	readonly deleted_message_count: number
	readonly banned_user_count: number
	readonly restricted_user_count: number
}
export function chatStatisticsAdministratorActionsInfo(object: TLObject): TLChatStatisticsAdministratorActionsInfo { return object as TLChatStatisticsAdministratorActionsInfo }
export interface TLChatStatisticsInviterInfo extends TLObject {
	readonly "@type": "chatStatisticsInviterInfo"
	readonly user_id: number
	readonly added_member_count: number
}
export function chatStatisticsInviterInfo(object: TLObject): TLChatStatisticsInviterInfo { return object as TLChatStatisticsInviterInfo }
export interface TLChatStatisticsSupergroup extends TLObject {
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
export function chatStatisticsSupergroup(object: TLObject): TLChatStatisticsSupergroup { return object as TLChatStatisticsSupergroup }
export interface TLChatStatisticsChannel extends TLObject {
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
export function chatStatisticsChannel(object: TLObject): TLChatStatisticsChannel { return object as TLChatStatisticsChannel }
export type TLChatStatistics = TLChatStatisticsSupergroup | TLChatStatisticsChannel
export interface TLMessageStatistics extends TLObject {
	readonly "@type": "messageStatistics"
	readonly message_interaction_graph: TLStatisticsGraph
}
export function messageStatistics(object: TLObject): TLMessageStatistics { return object as TLMessageStatistics }
export interface TLUpdateAuthorizationState extends TLObject {
	readonly "@type": "updateAuthorizationState"
	readonly authorization_state: TLAuthorizationState
}
export function updateAuthorizationState(object: TLObject): TLUpdateAuthorizationState { return object as TLUpdateAuthorizationState }
export interface TLUpdateNewMessage extends TLObject {
	readonly "@type": "updateNewMessage"
	readonly message: TLMessage
}
export function updateNewMessage(object: TLObject): TLUpdateNewMessage { return object as TLUpdateNewMessage }
export interface TLUpdateMessageSendAcknowledged extends TLObject {
	readonly "@type": "updateMessageSendAcknowledged"
	readonly chat_id: number
	readonly message_id: number
}
export function updateMessageSendAcknowledged(object: TLObject): TLUpdateMessageSendAcknowledged { return object as TLUpdateMessageSendAcknowledged }
export interface TLUpdateMessageSendSucceeded extends TLObject {
	readonly "@type": "updateMessageSendSucceeded"
	readonly message: TLMessage
	readonly old_message_id: number
}
export function updateMessageSendSucceeded(object: TLObject): TLUpdateMessageSendSucceeded { return object as TLUpdateMessageSendSucceeded }
export interface TLUpdateMessageSendFailed extends TLObject {
	readonly "@type": "updateMessageSendFailed"
	readonly message: TLMessage
	readonly old_message_id: number
	readonly error_code: number
	readonly error_message: string
}
export function updateMessageSendFailed(object: TLObject): TLUpdateMessageSendFailed { return object as TLUpdateMessageSendFailed }
export interface TLUpdateMessageContent extends TLObject {
	readonly "@type": "updateMessageContent"
	readonly chat_id: number
	readonly message_id: number
	readonly new_content: TLMessageContent
}
export function updateMessageContent(object: TLObject): TLUpdateMessageContent { return object as TLUpdateMessageContent }
export interface TLUpdateMessageEdited extends TLObject {
	readonly "@type": "updateMessageEdited"
	readonly chat_id: number
	readonly message_id: number
	readonly edit_date: number
	readonly reply_markup: TLReplyMarkup
}
export function updateMessageEdited(object: TLObject): TLUpdateMessageEdited { return object as TLUpdateMessageEdited }
export interface TLUpdateMessageIsPinned extends TLObject {
	readonly "@type": "updateMessageIsPinned"
	readonly chat_id: number
	readonly message_id: number
	readonly is_pinned: boolean
}
export function updateMessageIsPinned(object: TLObject): TLUpdateMessageIsPinned { return object as TLUpdateMessageIsPinned }
export interface TLUpdateMessageInteractionInfo extends TLObject {
	readonly "@type": "updateMessageInteractionInfo"
	readonly chat_id: number
	readonly message_id: number
	readonly interaction_info: TLMessageInteractionInfo
}
export function updateMessageInteractionInfo(object: TLObject): TLUpdateMessageInteractionInfo { return object as TLUpdateMessageInteractionInfo }
export interface TLUpdateMessageContentOpened extends TLObject {
	readonly "@type": "updateMessageContentOpened"
	readonly chat_id: number
	readonly message_id: number
}
export function updateMessageContentOpened(object: TLObject): TLUpdateMessageContentOpened { return object as TLUpdateMessageContentOpened }
export interface TLUpdateMessageMentionRead extends TLObject {
	readonly "@type": "updateMessageMentionRead"
	readonly chat_id: number
	readonly message_id: number
	readonly unread_mention_count: number
}
export function updateMessageMentionRead(object: TLObject): TLUpdateMessageMentionRead { return object as TLUpdateMessageMentionRead }
export interface TLUpdateMessageLiveLocationViewed extends TLObject {
	readonly "@type": "updateMessageLiveLocationViewed"
	readonly chat_id: number
	readonly message_id: number
}
export function updateMessageLiveLocationViewed(object: TLObject): TLUpdateMessageLiveLocationViewed { return object as TLUpdateMessageLiveLocationViewed }
export interface TLUpdateNewChat extends TLObject {
	readonly "@type": "updateNewChat"
	readonly chat: TLChat
}
export function updateNewChat(object: TLObject): TLUpdateNewChat { return object as TLUpdateNewChat }
export interface TLUpdateChatTitle extends TLObject {
	readonly "@type": "updateChatTitle"
	readonly chat_id: number
	readonly title: string
}
export function updateChatTitle(object: TLObject): TLUpdateChatTitle { return object as TLUpdateChatTitle }
export interface TLUpdateChatPhoto extends TLObject {
	readonly "@type": "updateChatPhoto"
	readonly chat_id: number
	readonly photo: TLChatPhotoInfo
}
export function updateChatPhoto(object: TLObject): TLUpdateChatPhoto { return object as TLUpdateChatPhoto }
export interface TLUpdateChatPermissions extends TLObject {
	readonly "@type": "updateChatPermissions"
	readonly chat_id: number
	readonly permissions: TLChatPermissions
}
export function updateChatPermissions(object: TLObject): TLUpdateChatPermissions { return object as TLUpdateChatPermissions }
export interface TLUpdateChatLastMessage extends TLObject {
	readonly "@type": "updateChatLastMessage"
	readonly chat_id: number
	readonly last_message: TLMessage
	readonly positions: ReadonlyArray<TLChatPosition>
}
export function updateChatLastMessage(object: TLObject): TLUpdateChatLastMessage { return object as TLUpdateChatLastMessage }
export interface TLUpdateChatPosition extends TLObject {
	readonly "@type": "updateChatPosition"
	readonly chat_id: number
	readonly position: TLChatPosition
}
export function updateChatPosition(object: TLObject): TLUpdateChatPosition { return object as TLUpdateChatPosition }
export interface TLUpdateChatIsMarkedAsUnread extends TLObject {
	readonly "@type": "updateChatIsMarkedAsUnread"
	readonly chat_id: number
	readonly is_marked_as_unread: boolean
}
export function updateChatIsMarkedAsUnread(object: TLObject): TLUpdateChatIsMarkedAsUnread { return object as TLUpdateChatIsMarkedAsUnread }
export interface TLUpdateChatIsBlocked extends TLObject {
	readonly "@type": "updateChatIsBlocked"
	readonly chat_id: number
	readonly is_blocked: boolean
}
export function updateChatIsBlocked(object: TLObject): TLUpdateChatIsBlocked { return object as TLUpdateChatIsBlocked }
export interface TLUpdateChatHasScheduledMessages extends TLObject {
	readonly "@type": "updateChatHasScheduledMessages"
	readonly chat_id: number
	readonly has_scheduled_messages: boolean
}
export function updateChatHasScheduledMessages(object: TLObject): TLUpdateChatHasScheduledMessages { return object as TLUpdateChatHasScheduledMessages }
export interface TLUpdateChatDefaultDisableNotification extends TLObject {
	readonly "@type": "updateChatDefaultDisableNotification"
	readonly chat_id: number
	readonly default_disable_notification: boolean
}
export function updateChatDefaultDisableNotification(object: TLObject): TLUpdateChatDefaultDisableNotification { return object as TLUpdateChatDefaultDisableNotification }
export interface TLUpdateChatReadInbox extends TLObject {
	readonly "@type": "updateChatReadInbox"
	readonly chat_id: number
	readonly last_read_inbox_message_id: number
	readonly unread_count: number
}
export function updateChatReadInbox(object: TLObject): TLUpdateChatReadInbox { return object as TLUpdateChatReadInbox }
export interface TLUpdateChatReadOutbox extends TLObject {
	readonly "@type": "updateChatReadOutbox"
	readonly chat_id: number
	readonly last_read_outbox_message_id: number
}
export function updateChatReadOutbox(object: TLObject): TLUpdateChatReadOutbox { return object as TLUpdateChatReadOutbox }
export interface TLUpdateChatUnreadMentionCount extends TLObject {
	readonly "@type": "updateChatUnreadMentionCount"
	readonly chat_id: number
	readonly unread_mention_count: number
}
export function updateChatUnreadMentionCount(object: TLObject): TLUpdateChatUnreadMentionCount { return object as TLUpdateChatUnreadMentionCount }
export interface TLUpdateChatNotificationSettings extends TLObject {
	readonly "@type": "updateChatNotificationSettings"
	readonly chat_id: number
	readonly notification_settings: TLChatNotificationSettings
}
export function updateChatNotificationSettings(object: TLObject): TLUpdateChatNotificationSettings { return object as TLUpdateChatNotificationSettings }
export interface TLUpdateScopeNotificationSettings extends TLObject {
	readonly "@type": "updateScopeNotificationSettings"
	readonly scope: TLNotificationSettingsScope
	readonly notification_settings: TLScopeNotificationSettings
}
export function updateScopeNotificationSettings(object: TLObject): TLUpdateScopeNotificationSettings { return object as TLUpdateScopeNotificationSettings }
export interface TLUpdateChatActionBar extends TLObject {
	readonly "@type": "updateChatActionBar"
	readonly chat_id: number
	readonly action_bar: TLChatActionBar
}
export function updateChatActionBar(object: TLObject): TLUpdateChatActionBar { return object as TLUpdateChatActionBar }
export interface TLUpdateChatReplyMarkup extends TLObject {
	readonly "@type": "updateChatReplyMarkup"
	readonly chat_id: number
	readonly reply_markup_message_id: number
}
export function updateChatReplyMarkup(object: TLObject): TLUpdateChatReplyMarkup { return object as TLUpdateChatReplyMarkup }
export interface TLUpdateChatDraftMessage extends TLObject {
	readonly "@type": "updateChatDraftMessage"
	readonly chat_id: number
	readonly draft_message: TLDraftMessage
	readonly positions: ReadonlyArray<TLChatPosition>
}
export function updateChatDraftMessage(object: TLObject): TLUpdateChatDraftMessage { return object as TLUpdateChatDraftMessage }
export interface TLUpdateChatFilters extends TLObject {
	readonly "@type": "updateChatFilters"
	readonly chat_filters: ReadonlyArray<TLChatFilterInfo>
}
export function updateChatFilters(object: TLObject): TLUpdateChatFilters { return object as TLUpdateChatFilters }
export interface TLUpdateChatOnlineMemberCount extends TLObject {
	readonly "@type": "updateChatOnlineMemberCount"
	readonly chat_id: number
	readonly online_member_count: number
}
export function updateChatOnlineMemberCount(object: TLObject): TLUpdateChatOnlineMemberCount { return object as TLUpdateChatOnlineMemberCount }
export interface TLUpdateNotification extends TLObject {
	readonly "@type": "updateNotification"
	readonly notification_group_id: number
	readonly notification: TLNotification
}
export function updateNotification(object: TLObject): TLUpdateNotification { return object as TLUpdateNotification }
export interface TLUpdateNotificationGroup extends TLObject {
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
export function updateNotificationGroup(object: TLObject): TLUpdateNotificationGroup { return object as TLUpdateNotificationGroup }
export interface TLUpdateActiveNotifications extends TLObject {
	readonly "@type": "updateActiveNotifications"
	readonly groups: ReadonlyArray<TLNotificationGroup>
}
export function updateActiveNotifications(object: TLObject): TLUpdateActiveNotifications { return object as TLUpdateActiveNotifications }
export interface TLUpdateHavePendingNotifications extends TLObject {
	readonly "@type": "updateHavePendingNotifications"
	readonly have_delayed_notifications: boolean
	readonly have_unreceived_notifications: boolean
}
export function updateHavePendingNotifications(object: TLObject): TLUpdateHavePendingNotifications { return object as TLUpdateHavePendingNotifications }
export interface TLUpdateDeleteMessages extends TLObject {
	readonly "@type": "updateDeleteMessages"
	readonly chat_id: number
	readonly message_ids: ReadonlyArray<number>
	readonly is_permanent: boolean
	readonly from_cache: boolean
}
export function updateDeleteMessages(object: TLObject): TLUpdateDeleteMessages { return object as TLUpdateDeleteMessages }
export interface TLUpdateUserChatAction extends TLObject {
	readonly "@type": "updateUserChatAction"
	readonly chat_id: number
	readonly message_thread_id: number
	readonly user_id: number
	readonly action: TLChatAction
}
export function updateUserChatAction(object: TLObject): TLUpdateUserChatAction { return object as TLUpdateUserChatAction }
export interface TLUpdateUserStatus extends TLObject {
	readonly "@type": "updateUserStatus"
	readonly user_id: number
	readonly status: TLUserStatus
}
export function updateUserStatus(object: TLObject): TLUpdateUserStatus { return object as TLUpdateUserStatus }
export interface TLUpdateUser extends TLObject {
	readonly "@type": "updateUser"
	readonly user: TLUser
}
export function updateUser(object: TLObject): TLUpdateUser { return object as TLUpdateUser }
export interface TLUpdateBasicGroup extends TLObject {
	readonly "@type": "updateBasicGroup"
	readonly basic_group: TLBasicGroup
}
export function updateBasicGroup(object: TLObject): TLUpdateBasicGroup { return object as TLUpdateBasicGroup }
export interface TLUpdateSupergroup extends TLObject {
	readonly "@type": "updateSupergroup"
	readonly supergroup: TLSupergroup
}
export function updateSupergroup(object: TLObject): TLUpdateSupergroup { return object as TLUpdateSupergroup }
export interface TLUpdateSecretChat extends TLObject {
	readonly "@type": "updateSecretChat"
	readonly secret_chat: TLSecretChat
}
export function updateSecretChat(object: TLObject): TLUpdateSecretChat { return object as TLUpdateSecretChat }
export interface TLUpdateUserFullInfo extends TLObject {
	readonly "@type": "updateUserFullInfo"
	readonly user_id: number
	readonly user_full_info: TLUserFullInfo
}
export function updateUserFullInfo(object: TLObject): TLUpdateUserFullInfo { return object as TLUpdateUserFullInfo }
export interface TLUpdateBasicGroupFullInfo extends TLObject {
	readonly "@type": "updateBasicGroupFullInfo"
	readonly basic_group_id: number
	readonly basic_group_full_info: TLBasicGroupFullInfo
}
export function updateBasicGroupFullInfo(object: TLObject): TLUpdateBasicGroupFullInfo { return object as TLUpdateBasicGroupFullInfo }
export interface TLUpdateSupergroupFullInfo extends TLObject {
	readonly "@type": "updateSupergroupFullInfo"
	readonly supergroup_id: number
	readonly supergroup_full_info: TLSupergroupFullInfo
}
export function updateSupergroupFullInfo(object: TLObject): TLUpdateSupergroupFullInfo { return object as TLUpdateSupergroupFullInfo }
export interface TLUpdateServiceNotification extends TLObject {
	readonly "@type": "updateServiceNotification"
	readonly type: string
	readonly content: TLMessageContent
}
export function updateServiceNotification(object: TLObject): TLUpdateServiceNotification { return object as TLUpdateServiceNotification }
export interface TLUpdateFile extends TLObject {
	readonly "@type": "updateFile"
	readonly file: TLFile
}
export function updateFile(object: TLObject): TLUpdateFile { return object as TLUpdateFile }
export interface TLUpdateFileGenerationStart extends TLObject {
	readonly "@type": "updateFileGenerationStart"
	readonly generation_id: string
	readonly original_path: string
	readonly destination_path: string
	readonly conversion: string
}
export function updateFileGenerationStart(object: TLObject): TLUpdateFileGenerationStart { return object as TLUpdateFileGenerationStart }
export interface TLUpdateFileGenerationStop extends TLObject {
	readonly "@type": "updateFileGenerationStop"
	readonly generation_id: string
}
export function updateFileGenerationStop(object: TLObject): TLUpdateFileGenerationStop { return object as TLUpdateFileGenerationStop }
export interface TLUpdateCall extends TLObject {
	readonly "@type": "updateCall"
	readonly call: TLCall
}
export function updateCall(object: TLObject): TLUpdateCall { return object as TLUpdateCall }
export interface TLUpdateNewCallSignalingData extends TLObject {
	readonly "@type": "updateNewCallSignalingData"
	readonly call_id: number
	readonly data: Uint8Array
}
export function updateNewCallSignalingData(object: TLObject): TLUpdateNewCallSignalingData { return object as TLUpdateNewCallSignalingData }
export interface TLUpdateUserPrivacySettingRules extends TLObject {
	readonly "@type": "updateUserPrivacySettingRules"
	readonly setting: TLUserPrivacySetting
	readonly rules: TLUserPrivacySettingRules
}
export function updateUserPrivacySettingRules(object: TLObject): TLUpdateUserPrivacySettingRules { return object as TLUpdateUserPrivacySettingRules }
export interface TLUpdateUnreadMessageCount extends TLObject {
	readonly "@type": "updateUnreadMessageCount"
	readonly chat_list: TLChatList
	readonly unread_count: number
	readonly unread_unmuted_count: number
}
export function updateUnreadMessageCount(object: TLObject): TLUpdateUnreadMessageCount { return object as TLUpdateUnreadMessageCount }
export interface TLUpdateUnreadChatCount extends TLObject {
	readonly "@type": "updateUnreadChatCount"
	readonly chat_list: TLChatList
	readonly total_count: number
	readonly unread_count: number
	readonly unread_unmuted_count: number
	readonly marked_as_unread_count: number
	readonly marked_as_unread_unmuted_count: number
}
export function updateUnreadChatCount(object: TLObject): TLUpdateUnreadChatCount { return object as TLUpdateUnreadChatCount }
export interface TLUpdateOption extends TLObject {
	readonly "@type": "updateOption"
	readonly name: string
	readonly value: TLOptionValue
}
export function updateOption(object: TLObject): TLUpdateOption { return object as TLUpdateOption }
export interface TLUpdateStickerSet extends TLObject {
	readonly "@type": "updateStickerSet"
	readonly sticker_set: TLStickerSet
}
export function updateStickerSet(object: TLObject): TLUpdateStickerSet { return object as TLUpdateStickerSet }
export interface TLUpdateInstalledStickerSets extends TLObject {
	readonly "@type": "updateInstalledStickerSets"
	readonly is_masks: boolean
	readonly sticker_set_ids: ReadonlyArray<string>
}
export function updateInstalledStickerSets(object: TLObject): TLUpdateInstalledStickerSets { return object as TLUpdateInstalledStickerSets }
export interface TLUpdateTrendingStickerSets extends TLObject {
	readonly "@type": "updateTrendingStickerSets"
	readonly sticker_sets: TLStickerSets
}
export function updateTrendingStickerSets(object: TLObject): TLUpdateTrendingStickerSets { return object as TLUpdateTrendingStickerSets }
export interface TLUpdateRecentStickers extends TLObject {
	readonly "@type": "updateRecentStickers"
	readonly is_attached: boolean
	readonly sticker_ids: ReadonlyArray<number>
}
export function updateRecentStickers(object: TLObject): TLUpdateRecentStickers { return object as TLUpdateRecentStickers }
export interface TLUpdateFavoriteStickers extends TLObject {
	readonly "@type": "updateFavoriteStickers"
	readonly sticker_ids: ReadonlyArray<number>
}
export function updateFavoriteStickers(object: TLObject): TLUpdateFavoriteStickers { return object as TLUpdateFavoriteStickers }
export interface TLUpdateSavedAnimations extends TLObject {
	readonly "@type": "updateSavedAnimations"
	readonly animation_ids: ReadonlyArray<number>
}
export function updateSavedAnimations(object: TLObject): TLUpdateSavedAnimations { return object as TLUpdateSavedAnimations }
export interface TLUpdateSelectedBackground extends TLObject {
	readonly "@type": "updateSelectedBackground"
	readonly for_dark_theme: boolean
	readonly background: TLBackground
}
export function updateSelectedBackground(object: TLObject): TLUpdateSelectedBackground { return object as TLUpdateSelectedBackground }
export interface TLUpdateLanguagePackStrings extends TLObject {
	readonly "@type": "updateLanguagePackStrings"
	readonly localization_target: string
	readonly language_pack_id: string
	readonly strings: ReadonlyArray<TLLanguagePackString>
}
export function updateLanguagePackStrings(object: TLObject): TLUpdateLanguagePackStrings { return object as TLUpdateLanguagePackStrings }
export interface TLUpdateConnectionState extends TLObject {
	readonly "@type": "updateConnectionState"
	readonly state: TLConnectionState
}
export function updateConnectionState(object: TLObject): TLUpdateConnectionState { return object as TLUpdateConnectionState }
export interface TLUpdateTermsOfService extends TLObject {
	readonly "@type": "updateTermsOfService"
	readonly terms_of_service_id: string
	readonly terms_of_service: TLTermsOfService
}
export function updateTermsOfService(object: TLObject): TLUpdateTermsOfService { return object as TLUpdateTermsOfService }
export interface TLUpdateUsersNearby extends TLObject {
	readonly "@type": "updateUsersNearby"
	readonly users_nearby: ReadonlyArray<TLChatNearby>
}
export function updateUsersNearby(object: TLObject): TLUpdateUsersNearby { return object as TLUpdateUsersNearby }
export interface TLUpdateDiceEmojis extends TLObject {
	readonly "@type": "updateDiceEmojis"
	readonly emojis: ReadonlyArray<string>
}
export function updateDiceEmojis(object: TLObject): TLUpdateDiceEmojis { return object as TLUpdateDiceEmojis }
export interface TLUpdateAnimationSearchParameters extends TLObject {
	readonly "@type": "updateAnimationSearchParameters"
	readonly provider: string
	readonly emojis: ReadonlyArray<string>
}
export function updateAnimationSearchParameters(object: TLObject): TLUpdateAnimationSearchParameters { return object as TLUpdateAnimationSearchParameters }
export interface TLUpdateSuggestedActions extends TLObject {
	readonly "@type": "updateSuggestedActions"
	readonly added_actions: ReadonlyArray<TLSuggestedAction>
	readonly removed_actions: ReadonlyArray<TLSuggestedAction>
}
export function updateSuggestedActions(object: TLObject): TLUpdateSuggestedActions { return object as TLUpdateSuggestedActions }
export interface TLUpdateNewInlineQuery extends TLObject {
	readonly "@type": "updateNewInlineQuery"
	readonly id: string
	readonly sender_user_id: number
	readonly user_location: TLLocation
	readonly query: string
	readonly offset: string
}
export function updateNewInlineQuery(object: TLObject): TLUpdateNewInlineQuery { return object as TLUpdateNewInlineQuery }
export interface TLUpdateNewChosenInlineResult extends TLObject {
	readonly "@type": "updateNewChosenInlineResult"
	readonly sender_user_id: number
	readonly user_location: TLLocation
	readonly query: string
	readonly result_id: string
	readonly inline_message_id: string
}
export function updateNewChosenInlineResult(object: TLObject): TLUpdateNewChosenInlineResult { return object as TLUpdateNewChosenInlineResult }
export interface TLUpdateNewCallbackQuery extends TLObject {
	readonly "@type": "updateNewCallbackQuery"
	readonly id: string
	readonly sender_user_id: number
	readonly chat_id: number
	readonly message_id: number
	readonly chat_instance: string
	readonly payload: TLCallbackQueryPayload
}
export function updateNewCallbackQuery(object: TLObject): TLUpdateNewCallbackQuery { return object as TLUpdateNewCallbackQuery }
export interface TLUpdateNewInlineCallbackQuery extends TLObject {
	readonly "@type": "updateNewInlineCallbackQuery"
	readonly id: string
	readonly sender_user_id: number
	readonly inline_message_id: string
	readonly chat_instance: string
	readonly payload: TLCallbackQueryPayload
}
export function updateNewInlineCallbackQuery(object: TLObject): TLUpdateNewInlineCallbackQuery { return object as TLUpdateNewInlineCallbackQuery }
export interface TLUpdateNewShippingQuery extends TLObject {
	readonly "@type": "updateNewShippingQuery"
	readonly id: string
	readonly sender_user_id: number
	readonly invoice_payload: string
	readonly shipping_address: TLAddress
}
export function updateNewShippingQuery(object: TLObject): TLUpdateNewShippingQuery { return object as TLUpdateNewShippingQuery }
export interface TLUpdateNewPreCheckoutQuery extends TLObject {
	readonly "@type": "updateNewPreCheckoutQuery"
	readonly id: string
	readonly sender_user_id: number
	readonly currency: string
	readonly total_amount: number
	readonly invoice_payload: Uint8Array
	readonly shipping_option_id: string
	readonly order_info: TLOrderInfo
}
export function updateNewPreCheckoutQuery(object: TLObject): TLUpdateNewPreCheckoutQuery { return object as TLUpdateNewPreCheckoutQuery }
export interface TLUpdateNewCustomEvent extends TLObject {
	readonly "@type": "updateNewCustomEvent"
	readonly event: string
}
export function updateNewCustomEvent(object: TLObject): TLUpdateNewCustomEvent { return object as TLUpdateNewCustomEvent }
export interface TLUpdateNewCustomQuery extends TLObject {
	readonly "@type": "updateNewCustomQuery"
	readonly id: string
	readonly data: string
	readonly timeout: number
}
export function updateNewCustomQuery(object: TLObject): TLUpdateNewCustomQuery { return object as TLUpdateNewCustomQuery }
export interface TLUpdatePoll extends TLObject {
	readonly "@type": "updatePoll"
	readonly poll: TLPoll
}
export function updatePoll(object: TLObject): TLUpdatePoll { return object as TLUpdatePoll }
export interface TLUpdatePollAnswer extends TLObject {
	readonly "@type": "updatePollAnswer"
	readonly poll_id: string
	readonly user_id: number
	readonly option_ids: ReadonlyArray<number>
}
export function updatePollAnswer(object: TLObject): TLUpdatePollAnswer { return object as TLUpdatePollAnswer }
export type TLUpdate = TLUpdateAuthorizationState | TLUpdateNewMessage | TLUpdateMessageSendAcknowledged | TLUpdateMessageSendSucceeded | TLUpdateMessageSendFailed | TLUpdateMessageContent | TLUpdateMessageEdited | TLUpdateMessageIsPinned | TLUpdateMessageInteractionInfo | TLUpdateMessageContentOpened | TLUpdateMessageMentionRead | TLUpdateMessageLiveLocationViewed | TLUpdateNewChat | TLUpdateChatTitle | TLUpdateChatPhoto | TLUpdateChatPermissions | TLUpdateChatLastMessage | TLUpdateChatPosition | TLUpdateChatIsMarkedAsUnread | TLUpdateChatIsBlocked | TLUpdateChatHasScheduledMessages | TLUpdateChatDefaultDisableNotification | TLUpdateChatReadInbox | TLUpdateChatReadOutbox | TLUpdateChatUnreadMentionCount | TLUpdateChatNotificationSettings | TLUpdateScopeNotificationSettings | TLUpdateChatActionBar | TLUpdateChatReplyMarkup | TLUpdateChatDraftMessage | TLUpdateChatFilters | TLUpdateChatOnlineMemberCount | TLUpdateNotification | TLUpdateNotificationGroup | TLUpdateActiveNotifications | TLUpdateHavePendingNotifications | TLUpdateDeleteMessages | TLUpdateUserChatAction | TLUpdateUserStatus | TLUpdateUser | TLUpdateBasicGroup | TLUpdateSupergroup | TLUpdateSecretChat | TLUpdateUserFullInfo | TLUpdateBasicGroupFullInfo | TLUpdateSupergroupFullInfo | TLUpdateServiceNotification | TLUpdateFile | TLUpdateFileGenerationStart | TLUpdateFileGenerationStop | TLUpdateCall | TLUpdateNewCallSignalingData | TLUpdateUserPrivacySettingRules | TLUpdateUnreadMessageCount | TLUpdateUnreadChatCount | TLUpdateOption | TLUpdateStickerSet | TLUpdateInstalledStickerSets | TLUpdateTrendingStickerSets | TLUpdateRecentStickers | TLUpdateFavoriteStickers | TLUpdateSavedAnimations | TLUpdateSelectedBackground | TLUpdateLanguagePackStrings | TLUpdateConnectionState | TLUpdateTermsOfService | TLUpdateUsersNearby | TLUpdateDiceEmojis | TLUpdateAnimationSearchParameters | TLUpdateSuggestedActions | TLUpdateNewInlineQuery | TLUpdateNewChosenInlineResult | TLUpdateNewCallbackQuery | TLUpdateNewInlineCallbackQuery | TLUpdateNewShippingQuery | TLUpdateNewPreCheckoutQuery | TLUpdateNewCustomEvent | TLUpdateNewCustomQuery | TLUpdatePoll | TLUpdatePollAnswer
export interface TLUpdates extends TLObject {
	readonly "@type": "updates"
	readonly updates: ReadonlyArray<TLUpdate>
}
export function updates(object: TLObject): TLUpdates { return object as TLUpdates }
export interface TLLogStreamDefault extends TLObject {
	readonly "@type": "logStreamDefault"
}
export function logStreamDefault(object: TLObject): TLLogStreamDefault { return object as TLLogStreamDefault }
export interface TLLogStreamFile extends TLObject {
	readonly "@type": "logStreamFile"
	readonly path: string
	readonly max_file_size: number
	readonly redirect_stderr: boolean
}
export function logStreamFile(object: TLObject): TLLogStreamFile { return object as TLLogStreamFile }
export interface TLLogStreamEmpty extends TLObject {
	readonly "@type": "logStreamEmpty"
}
export function logStreamEmpty(object: TLObject): TLLogStreamEmpty { return object as TLLogStreamEmpty }
export type TLLogStream = TLLogStreamDefault | TLLogStreamFile | TLLogStreamEmpty
export interface TLLogVerbosityLevel extends TLObject {
	readonly "@type": "logVerbosityLevel"
	readonly verbosity_level: number
}
export function logVerbosityLevel(object: TLObject): TLLogVerbosityLevel { return object as TLLogVerbosityLevel }
export interface TLLogTags extends TLObject {
	readonly "@type": "logTags"
	readonly tags: ReadonlyArray<string>
}
export function logTags(object: TLObject): TLLogTags { return object as TLLogTags }
export interface TLTestInt extends TLObject {
	readonly "@type": "testInt"
	readonly value: number
}
export function testInt(object: TLObject): TLTestInt { return object as TLTestInt }
export interface TLTestString extends TLObject {
	readonly "@type": "testString"
	readonly value: string
}
export function testString(object: TLObject): TLTestString { return object as TLTestString }
export interface TLTestBytes extends TLObject {
	readonly "@type": "testBytes"
	readonly value: Uint8Array
}
export function testBytes(object: TLObject): TLTestBytes { return object as TLTestBytes }
export interface TLTestVectorInt extends TLObject {
	readonly "@type": "testVectorInt"
	readonly value: ReadonlyArray<number>
}
export function testVectorInt(object: TLObject): TLTestVectorInt { return object as TLTestVectorInt }
export interface TLTestVectorIntObject extends TLObject {
	readonly "@type": "testVectorIntObject"
	readonly value: ReadonlyArray<TLTestInt>
}
export function testVectorIntObject(object: TLObject): TLTestVectorIntObject { return object as TLTestVectorIntObject }
export interface TLTestVectorString extends TLObject {
	readonly "@type": "testVectorString"
	readonly value: ReadonlyArray<string>
}
export function testVectorString(object: TLObject): TLTestVectorString { return object as TLTestVectorString }
export interface TLTestVectorStringObject extends TLObject {
	readonly "@type": "testVectorStringObject"
	readonly value: ReadonlyArray<TLTestString>
}
export function testVectorStringObject(object: TLObject): TLTestVectorStringObject { return object as TLTestVectorStringObject }
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
			"parameters": parameters,
		} as any as TdObject)) as any as TLOk
	}

	public async checkDatabaseEncryptionKey(encryption_key: Uint8Array): Promise<TLOk> {
		return (await this.client.send({
			"@type": "checkDatabaseEncryptionKey",
			"encryption_key": encryption_key,
		} as any as TdObject)) as any as TLOk
	}

	public async setAuthenticationPhoneNumber(phone_number: string, settings: TLPhoneNumberAuthenticationSettings): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setAuthenticationPhoneNumber",
			"phone_number": phone_number,
			"settings": settings,
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
			"code": code,
		} as any as TdObject)) as any as TLOk
	}

	public async requestQrCodeAuthentication(other_user_ids: ReadonlyArray<number>): Promise<TLOk> {
		return (await this.client.send({
			"@type": "requestQrCodeAuthentication",
			"other_user_ids": other_user_ids,
		} as any as TdObject)) as any as TLOk
	}

	public async registerUser(first_name: string, last_name: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "registerUser",
			"first_name": first_name,
			"last_name": last_name,
		} as any as TdObject)) as any as TLOk
	}

	public async checkAuthenticationPassword(password: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "checkAuthenticationPassword",
			"password": password,
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
			"recovery_code": recovery_code,
		} as any as TdObject)) as any as TLOk
	}

	public async checkAuthenticationBotToken(token: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "checkAuthenticationBotToken",
			"token": token,
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
			"link": link,
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
			"new_encryption_key": new_encryption_key,
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
			"old_password": old_password,
			"new_password": new_password,
			"new_hint": new_hint,
			"set_recovery_email_address": set_recovery_email_address,
			"new_recovery_email_address": new_recovery_email_address,
		} as any as TdObject)) as any as TLPasswordState
	}

	public async getRecoveryEmailAddress(password: string): Promise<TLRecoveryEmailAddress> {
		return (await this.client.send({
			"@type": "getRecoveryEmailAddress",
			"password": password,
		} as any as TdObject)) as any as TLRecoveryEmailAddress
	}

	public async setRecoveryEmailAddress(password: string, new_recovery_email_address: string): Promise<TLPasswordState> {
		return (await this.client.send({
			"@type": "setRecoveryEmailAddress",
			"password": password,
			"new_recovery_email_address": new_recovery_email_address,
		} as any as TdObject)) as any as TLPasswordState
	}

	public async checkRecoveryEmailAddressCode(code: string): Promise<TLPasswordState> {
		return (await this.client.send({
			"@type": "checkRecoveryEmailAddressCode",
			"code": code,
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
			"recovery_code": recovery_code,
		} as any as TdObject)) as any as TLPasswordState
	}

	public async createTemporaryPassword(password: string, valid_for: number): Promise<TLTemporaryPasswordState> {
		return (await this.client.send({
			"@type": "createTemporaryPassword",
			"password": password,
			"valid_for": valid_for,
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
			"user_id": user_id,
		} as any as TdObject)) as any as TLUser
	}

	public async getUserFullInfo(user_id: number): Promise<TLUserFullInfo> {
		return (await this.client.send({
			"@type": "getUserFullInfo",
			"user_id": user_id,
		} as any as TdObject)) as any as TLUserFullInfo
	}

	public async getBasicGroup(basic_group_id: number): Promise<TLBasicGroup> {
		return (await this.client.send({
			"@type": "getBasicGroup",
			"basic_group_id": basic_group_id,
		} as any as TdObject)) as any as TLBasicGroup
	}

	public async getBasicGroupFullInfo(basic_group_id: number): Promise<TLBasicGroupFullInfo> {
		return (await this.client.send({
			"@type": "getBasicGroupFullInfo",
			"basic_group_id": basic_group_id,
		} as any as TdObject)) as any as TLBasicGroupFullInfo
	}

	public async getSupergroup(supergroup_id: number): Promise<TLSupergroup> {
		return (await this.client.send({
			"@type": "getSupergroup",
			"supergroup_id": supergroup_id,
		} as any as TdObject)) as any as TLSupergroup
	}

	public async getSupergroupFullInfo(supergroup_id: number): Promise<TLSupergroupFullInfo> {
		return (await this.client.send({
			"@type": "getSupergroupFullInfo",
			"supergroup_id": supergroup_id,
		} as any as TdObject)) as any as TLSupergroupFullInfo
	}

	public async getSecretChat(secret_chat_id: number): Promise<TLSecretChat> {
		return (await this.client.send({
			"@type": "getSecretChat",
			"secret_chat_id": secret_chat_id,
		} as any as TdObject)) as any as TLSecretChat
	}

	public async getChat(chat_id: number): Promise<TLChat> {
		return (await this.client.send({
			"@type": "getChat",
			"chat_id": chat_id,
		} as any as TdObject)) as any as TLChat
	}

	public async getMessage(chat_id: number, message_id: number): Promise<TLMessage> {
		return (await this.client.send({
			"@type": "getMessage",
			"chat_id": chat_id,
			"message_id": message_id,
		} as any as TdObject)) as any as TLMessage
	}

	public async getMessageLocally(chat_id: number, message_id: number): Promise<TLMessage> {
		return (await this.client.send({
			"@type": "getMessageLocally",
			"chat_id": chat_id,
			"message_id": message_id,
		} as any as TdObject)) as any as TLMessage
	}

	public async getRepliedMessage(chat_id: number, message_id: number): Promise<TLMessage> {
		return (await this.client.send({
			"@type": "getRepliedMessage",
			"chat_id": chat_id,
			"message_id": message_id,
		} as any as TdObject)) as any as TLMessage
	}

	public async getChatPinnedMessage(chat_id: number): Promise<TLMessage> {
		return (await this.client.send({
			"@type": "getChatPinnedMessage",
			"chat_id": chat_id,
		} as any as TdObject)) as any as TLMessage
	}

	public async getCallbackQueryMessage(chat_id: number, message_id: number, callback_query_id: string): Promise<TLMessage> {
		return (await this.client.send({
			"@type": "getCallbackQueryMessage",
			"chat_id": chat_id,
			"message_id": message_id,
			"callback_query_id": callback_query_id,
		} as any as TdObject)) as any as TLMessage
	}

	public async getMessages(chat_id: number, message_ids: ReadonlyArray<number>): Promise<TLMessages> {
		return (await this.client.send({
			"@type": "getMessages",
			"chat_id": chat_id,
			"message_ids": message_ids,
		} as any as TdObject)) as any as TLMessages
	}

	public async getMessageThread(chat_id: number, message_id: number): Promise<TLMessageThreadInfo> {
		return (await this.client.send({
			"@type": "getMessageThread",
			"chat_id": chat_id,
			"message_id": message_id,
		} as any as TdObject)) as any as TLMessageThreadInfo
	}

	public async getFile(file_id: number): Promise<TLFile> {
		return (await this.client.send({
			"@type": "getFile",
			"file_id": file_id,
		} as any as TdObject)) as any as TLFile
	}

	public async getRemoteFile(remote_file_id: string, file_type: TLFileType): Promise<TLFile> {
		return (await this.client.send({
			"@type": "getRemoteFile",
			"remote_file_id": remote_file_id,
			"file_type": file_type,
		} as any as TdObject)) as any as TLFile
	}

	public async getChats(chat_list: TLChatList, offset_order: string, offset_chat_id: number, limit: number): Promise<TLChats> {
		return (await this.client.send({
			"@type": "getChats",
			"chat_list": chat_list,
			"offset_order": offset_order,
			"offset_chat_id": offset_chat_id,
			"limit": limit,
		} as any as TdObject)) as any as TLChats
	}

	public async searchPublicChat(username: string): Promise<TLChat> {
		return (await this.client.send({
			"@type": "searchPublicChat",
			"username": username,
		} as any as TdObject)) as any as TLChat
	}

	public async searchPublicChats(query: string): Promise<TLChats> {
		return (await this.client.send({
			"@type": "searchPublicChats",
			"query": query,
		} as any as TdObject)) as any as TLChats
	}

	public async searchChats(query: string, limit: number): Promise<TLChats> {
		return (await this.client.send({
			"@type": "searchChats",
			"query": query,
			"limit": limit,
		} as any as TdObject)) as any as TLChats
	}

	public async searchChatsOnServer(query: string, limit: number): Promise<TLChats> {
		return (await this.client.send({
			"@type": "searchChatsOnServer",
			"query": query,
			"limit": limit,
		} as any as TdObject)) as any as TLChats
	}

	public async searchChatsNearby(location: TLLocation): Promise<TLChatsNearby> {
		return (await this.client.send({
			"@type": "searchChatsNearby",
			"location": location,
		} as any as TdObject)) as any as TLChatsNearby
	}

	public async getTopChats(category: TLTopChatCategory, limit: number): Promise<TLChats> {
		return (await this.client.send({
			"@type": "getTopChats",
			"category": category,
			"limit": limit,
		} as any as TdObject)) as any as TLChats
	}

	public async removeTopChat(category: TLTopChatCategory, chat_id: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "removeTopChat",
			"category": category,
			"chat_id": chat_id,
		} as any as TdObject)) as any as TLOk
	}

	public async addRecentlyFoundChat(chat_id: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "addRecentlyFoundChat",
			"chat_id": chat_id,
		} as any as TdObject)) as any as TLOk
	}

	public async removeRecentlyFoundChat(chat_id: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "removeRecentlyFoundChat",
			"chat_id": chat_id,
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
			"chat_id": chat_id,
			"username": username,
		} as any as TdObject)) as any as TLCheckChatUsernameResult
	}

	public async getCreatedPublicChats(type: TLPublicChatType): Promise<TLChats> {
		return (await this.client.send({
			"@type": "getCreatedPublicChats",
			"type": type,
		} as any as TdObject)) as any as TLChats
	}

	public async checkCreatedPublicChatsLimit(type: TLPublicChatType): Promise<TLOk> {
		return (await this.client.send({
			"@type": "checkCreatedPublicChatsLimit",
			"type": type,
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
			"user_id": user_id,
			"offset_chat_id": offset_chat_id,
			"limit": limit,
		} as any as TdObject)) as any as TLChats
	}

	public async getChatHistory(chat_id: number, from_message_id: number, offset: number, limit: number, only_local: boolean): Promise<TLMessages> {
		return (await this.client.send({
			"@type": "getChatHistory",
			"chat_id": chat_id,
			"from_message_id": from_message_id,
			"offset": offset,
			"limit": limit,
			"only_local": only_local,
		} as any as TdObject)) as any as TLMessages
	}

	public async getMessageThreadHistory(chat_id: number, message_id: number, from_message_id: number, offset: number, limit: number): Promise<TLMessages> {
		return (await this.client.send({
			"@type": "getMessageThreadHistory",
			"chat_id": chat_id,
			"message_id": message_id,
			"from_message_id": from_message_id,
			"offset": offset,
			"limit": limit,
		} as any as TdObject)) as any as TLMessages
	}

	public async deleteChatHistory(chat_id: number, remove_from_chat_list: boolean, revoke: boolean): Promise<TLOk> {
		return (await this.client.send({
			"@type": "deleteChatHistory",
			"chat_id": chat_id,
			"remove_from_chat_list": remove_from_chat_list,
			"revoke": revoke,
		} as any as TdObject)) as any as TLOk
	}

	public async searchChatMessages(chat_id: number, query: string, sender: TLMessageSender, from_message_id: number, offset: number, limit: number, filter: TLSearchMessagesFilter, message_thread_id: number): Promise<TLMessages> {
		return (await this.client.send({
			"@type": "searchChatMessages",
			"chat_id": chat_id,
			"query": query,
			"sender": sender,
			"from_message_id": from_message_id,
			"offset": offset,
			"limit": limit,
			"filter": filter,
			"message_thread_id": message_thread_id,
		} as any as TdObject)) as any as TLMessages
	}

	public async searchMessages(chat_list: TLChatList, query: string, offset_date: number, offset_chat_id: number, offset_message_id: number, limit: number, filter: TLSearchMessagesFilter, min_date: number, max_date: number): Promise<TLMessages> {
		return (await this.client.send({
			"@type": "searchMessages",
			"chat_list": chat_list,
			"query": query,
			"offset_date": offset_date,
			"offset_chat_id": offset_chat_id,
			"offset_message_id": offset_message_id,
			"limit": limit,
			"filter": filter,
			"min_date": min_date,
			"max_date": max_date,
		} as any as TdObject)) as any as TLMessages
	}

	public async searchSecretMessages(chat_id: number, query: string, offset: string, limit: number, filter: TLSearchMessagesFilter): Promise<TLFoundMessages> {
		return (await this.client.send({
			"@type": "searchSecretMessages",
			"chat_id": chat_id,
			"query": query,
			"offset": offset,
			"limit": limit,
			"filter": filter,
		} as any as TdObject)) as any as TLFoundMessages
	}

	public async searchCallMessages(from_message_id: number, limit: number, only_missed: boolean): Promise<TLMessages> {
		return (await this.client.send({
			"@type": "searchCallMessages",
			"from_message_id": from_message_id,
			"limit": limit,
			"only_missed": only_missed,
		} as any as TdObject)) as any as TLMessages
	}

	public async searchChatRecentLocationMessages(chat_id: number, limit: number): Promise<TLMessages> {
		return (await this.client.send({
			"@type": "searchChatRecentLocationMessages",
			"chat_id": chat_id,
			"limit": limit,
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
			"chat_id": chat_id,
			"date": date,
		} as any as TdObject)) as any as TLMessage
	}

	public async getChatMessageCount(chat_id: number, filter: TLSearchMessagesFilter, return_local: boolean): Promise<TLCount> {
		return (await this.client.send({
			"@type": "getChatMessageCount",
			"chat_id": chat_id,
			"filter": filter,
			"return_local": return_local,
		} as any as TdObject)) as any as TLCount
	}

	public async getChatScheduledMessages(chat_id: number): Promise<TLMessages> {
		return (await this.client.send({
			"@type": "getChatScheduledMessages",
			"chat_id": chat_id,
		} as any as TdObject)) as any as TLMessages
	}

	public async getMessagePublicForwards(chat_id: number, message_id: number, offset: string, limit: number): Promise<TLFoundMessages> {
		return (await this.client.send({
			"@type": "getMessagePublicForwards",
			"chat_id": chat_id,
			"message_id": message_id,
			"offset": offset,
			"limit": limit,
		} as any as TdObject)) as any as TLFoundMessages
	}

	public async removeNotification(notification_group_id: number, notification_id: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "removeNotification",
			"notification_group_id": notification_group_id,
			"notification_id": notification_id,
		} as any as TdObject)) as any as TLOk
	}

	public async removeNotificationGroup(notification_group_id: number, max_notification_id: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "removeNotificationGroup",
			"notification_group_id": notification_group_id,
			"max_notification_id": max_notification_id,
		} as any as TdObject)) as any as TLOk
	}

	public async getMessageLink(chat_id: number, message_id: number, for_album: boolean, for_comment: boolean): Promise<TLMessageLink> {
		return (await this.client.send({
			"@type": "getMessageLink",
			"chat_id": chat_id,
			"message_id": message_id,
			"for_album": for_album,
			"for_comment": for_comment,
		} as any as TdObject)) as any as TLMessageLink
	}

	public async getMessageEmbeddingCode(chat_id: number, message_id: number, for_album: boolean): Promise<TLText> {
		return (await this.client.send({
			"@type": "getMessageEmbeddingCode",
			"chat_id": chat_id,
			"message_id": message_id,
			"for_album": for_album,
		} as any as TdObject)) as any as TLText
	}

	public async getMessageLinkInfo(url: string): Promise<TLMessageLinkInfo> {
		return (await this.client.send({
			"@type": "getMessageLinkInfo",
			"url": url,
		} as any as TdObject)) as any as TLMessageLinkInfo
	}

	public async sendMessage(chat_id: number, message_thread_id: number, reply_to_message_id: number, options: TLMessageSendOptions, reply_markup: TLReplyMarkup, input_message_content: TLInputMessageContent): Promise<TLMessage> {
		return (await this.client.send({
			"@type": "sendMessage",
			"chat_id": chat_id,
			"message_thread_id": message_thread_id,
			"reply_to_message_id": reply_to_message_id,
			"options": options,
			"reply_markup": reply_markup,
			"input_message_content": input_message_content,
		} as any as TdObject)) as any as TLMessage
	}

	public async sendMessageAlbum(chat_id: number, message_thread_id: number, reply_to_message_id: number, options: TLMessageSendOptions, input_message_contents: ReadonlyArray<TLInputMessageContent>): Promise<TLMessages> {
		return (await this.client.send({
			"@type": "sendMessageAlbum",
			"chat_id": chat_id,
			"message_thread_id": message_thread_id,
			"reply_to_message_id": reply_to_message_id,
			"options": options,
			"input_message_contents": input_message_contents,
		} as any as TdObject)) as any as TLMessages
	}

	public async sendBotStartMessage(bot_user_id: number, chat_id: number, parameter: string): Promise<TLMessage> {
		return (await this.client.send({
			"@type": "sendBotStartMessage",
			"bot_user_id": bot_user_id,
			"chat_id": chat_id,
			"parameter": parameter,
		} as any as TdObject)) as any as TLMessage
	}

	public async sendInlineQueryResultMessage(chat_id: number, message_thread_id: number, reply_to_message_id: number, options: TLMessageSendOptions, query_id: string, result_id: string, hide_via_bot: boolean): Promise<TLMessage> {
		return (await this.client.send({
			"@type": "sendInlineQueryResultMessage",
			"chat_id": chat_id,
			"message_thread_id": message_thread_id,
			"reply_to_message_id": reply_to_message_id,
			"options": options,
			"query_id": query_id,
			"result_id": result_id,
			"hide_via_bot": hide_via_bot,
		} as any as TdObject)) as any as TLMessage
	}

	public async forwardMessages(chat_id: number, from_chat_id: number, message_ids: ReadonlyArray<number>, options: TLMessageSendOptions, send_copy: boolean, remove_caption: boolean): Promise<TLMessages> {
		return (await this.client.send({
			"@type": "forwardMessages",
			"chat_id": chat_id,
			"from_chat_id": from_chat_id,
			"message_ids": message_ids,
			"options": options,
			"send_copy": send_copy,
			"remove_caption": remove_caption,
		} as any as TdObject)) as any as TLMessages
	}

	public async resendMessages(chat_id: number, message_ids: ReadonlyArray<number>): Promise<TLMessages> {
		return (await this.client.send({
			"@type": "resendMessages",
			"chat_id": chat_id,
			"message_ids": message_ids,
		} as any as TdObject)) as any as TLMessages
	}

	public async sendChatSetTtlMessage(chat_id: number, ttl: number): Promise<TLMessage> {
		return (await this.client.send({
			"@type": "sendChatSetTtlMessage",
			"chat_id": chat_id,
			"ttl": ttl,
		} as any as TdObject)) as any as TLMessage
	}

	public async sendChatScreenshotTakenNotification(chat_id: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "sendChatScreenshotTakenNotification",
			"chat_id": chat_id,
		} as any as TdObject)) as any as TLOk
	}

	public async addLocalMessage(chat_id: number, sender: TLMessageSender, reply_to_message_id: number, disable_notification: boolean, input_message_content: TLInputMessageContent): Promise<TLMessage> {
		return (await this.client.send({
			"@type": "addLocalMessage",
			"chat_id": chat_id,
			"sender": sender,
			"reply_to_message_id": reply_to_message_id,
			"disable_notification": disable_notification,
			"input_message_content": input_message_content,
		} as any as TdObject)) as any as TLMessage
	}

	public async deleteMessages(chat_id: number, message_ids: ReadonlyArray<number>, revoke: boolean): Promise<TLOk> {
		return (await this.client.send({
			"@type": "deleteMessages",
			"chat_id": chat_id,
			"message_ids": message_ids,
			"revoke": revoke,
		} as any as TdObject)) as any as TLOk
	}

	public async deleteChatMessagesFromUser(chat_id: number, user_id: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "deleteChatMessagesFromUser",
			"chat_id": chat_id,
			"user_id": user_id,
		} as any as TdObject)) as any as TLOk
	}

	public async editMessageText(chat_id: number, message_id: number, reply_markup: TLReplyMarkup, input_message_content: TLInputMessageContent): Promise<TLMessage> {
		return (await this.client.send({
			"@type": "editMessageText",
			"chat_id": chat_id,
			"message_id": message_id,
			"reply_markup": reply_markup,
			"input_message_content": input_message_content,
		} as any as TdObject)) as any as TLMessage
	}

	public async editMessageLiveLocation(chat_id: number, message_id: number, reply_markup: TLReplyMarkup, location: TLLocation, heading: number, proximity_alert_radius: number): Promise<TLMessage> {
		return (await this.client.send({
			"@type": "editMessageLiveLocation",
			"chat_id": chat_id,
			"message_id": message_id,
			"reply_markup": reply_markup,
			"location": location,
			"heading": heading,
			"proximity_alert_radius": proximity_alert_radius,
		} as any as TdObject)) as any as TLMessage
	}

	public async editMessageMedia(chat_id: number, message_id: number, reply_markup: TLReplyMarkup, input_message_content: TLInputMessageContent): Promise<TLMessage> {
		return (await this.client.send({
			"@type": "editMessageMedia",
			"chat_id": chat_id,
			"message_id": message_id,
			"reply_markup": reply_markup,
			"input_message_content": input_message_content,
		} as any as TdObject)) as any as TLMessage
	}

	public async editMessageCaption(chat_id: number, message_id: number, reply_markup: TLReplyMarkup, caption: TLFormattedText): Promise<TLMessage> {
		return (await this.client.send({
			"@type": "editMessageCaption",
			"chat_id": chat_id,
			"message_id": message_id,
			"reply_markup": reply_markup,
			"caption": caption,
		} as any as TdObject)) as any as TLMessage
	}

	public async editMessageReplyMarkup(chat_id: number, message_id: number, reply_markup: TLReplyMarkup): Promise<TLMessage> {
		return (await this.client.send({
			"@type": "editMessageReplyMarkup",
			"chat_id": chat_id,
			"message_id": message_id,
			"reply_markup": reply_markup,
		} as any as TdObject)) as any as TLMessage
	}

	public async editInlineMessageText(inline_message_id: string, reply_markup: TLReplyMarkup, input_message_content: TLInputMessageContent): Promise<TLOk> {
		return (await this.client.send({
			"@type": "editInlineMessageText",
			"inline_message_id": inline_message_id,
			"reply_markup": reply_markup,
			"input_message_content": input_message_content,
		} as any as TdObject)) as any as TLOk
	}

	public async editInlineMessageLiveLocation(inline_message_id: string, reply_markup: TLReplyMarkup, location: TLLocation, heading: number, proximity_alert_radius: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "editInlineMessageLiveLocation",
			"inline_message_id": inline_message_id,
			"reply_markup": reply_markup,
			"location": location,
			"heading": heading,
			"proximity_alert_radius": proximity_alert_radius,
		} as any as TdObject)) as any as TLOk
	}

	public async editInlineMessageMedia(inline_message_id: string, reply_markup: TLReplyMarkup, input_message_content: TLInputMessageContent): Promise<TLOk> {
		return (await this.client.send({
			"@type": "editInlineMessageMedia",
			"inline_message_id": inline_message_id,
			"reply_markup": reply_markup,
			"input_message_content": input_message_content,
		} as any as TdObject)) as any as TLOk
	}

	public async editInlineMessageCaption(inline_message_id: string, reply_markup: TLReplyMarkup, caption: TLFormattedText): Promise<TLOk> {
		return (await this.client.send({
			"@type": "editInlineMessageCaption",
			"inline_message_id": inline_message_id,
			"reply_markup": reply_markup,
			"caption": caption,
		} as any as TdObject)) as any as TLOk
	}

	public async editInlineMessageReplyMarkup(inline_message_id: string, reply_markup: TLReplyMarkup): Promise<TLOk> {
		return (await this.client.send({
			"@type": "editInlineMessageReplyMarkup",
			"inline_message_id": inline_message_id,
			"reply_markup": reply_markup,
		} as any as TdObject)) as any as TLOk
	}

	public async editMessageSchedulingState(chat_id: number, message_id: number, scheduling_state: TLMessageSchedulingState): Promise<TLOk> {
		return (await this.client.send({
			"@type": "editMessageSchedulingState",
			"chat_id": chat_id,
			"message_id": message_id,
			"scheduling_state": scheduling_state,
		} as any as TdObject)) as any as TLOk
	}

	public async getTextEntities(text: string): Promise<TLTextEntities> {
		return (await this.client.send({
			"@type": "getTextEntities",
			"text": text,
		} as any as TdObject)) as any as TLTextEntities
	}

	public async parseTextEntities(text: string, parse_mode: TLTextParseMode): Promise<TLFormattedText> {
		return (await this.client.send({
			"@type": "parseTextEntities",
			"text": text,
			"parse_mode": parse_mode,
		} as any as TdObject)) as any as TLFormattedText
	}

	public async parseMarkdown(text: TLFormattedText): Promise<TLFormattedText> {
		return (await this.client.send({
			"@type": "parseMarkdown",
			"text": text,
		} as any as TdObject)) as any as TLFormattedText
	}

	public async getMarkdownText(text: TLFormattedText): Promise<TLFormattedText> {
		return (await this.client.send({
			"@type": "getMarkdownText",
			"text": text,
		} as any as TdObject)) as any as TLFormattedText
	}

	public async getFileMimeType(file_name: string): Promise<TLText> {
		return (await this.client.send({
			"@type": "getFileMimeType",
			"file_name": file_name,
		} as any as TdObject)) as any as TLText
	}

	public async getFileExtension(mime_type: string): Promise<TLText> {
		return (await this.client.send({
			"@type": "getFileExtension",
			"mime_type": mime_type,
		} as any as TdObject)) as any as TLText
	}

	public async cleanFileName(file_name: string): Promise<TLText> {
		return (await this.client.send({
			"@type": "cleanFileName",
			"file_name": file_name,
		} as any as TdObject)) as any as TLText
	}

	public async getLanguagePackString(language_pack_database_path: string, localization_target: string, language_pack_id: string, key: string): Promise<TLLanguagePackStringValue> {
		return (await this.client.send({
			"@type": "getLanguagePackString",
			"language_pack_database_path": language_pack_database_path,
			"localization_target": localization_target,
			"language_pack_id": language_pack_id,
			"key": key,
		} as any as TdObject)) as any as TLLanguagePackStringValue
	}

	public async getJsonValue(json: string): Promise<TLJsonValue> {
		return (await this.client.send({
			"@type": "getJsonValue",
			"json": json,
		} as any as TdObject)) as any as TLJsonValue
	}

	public async getJsonString(json_value: TLJsonValue): Promise<TLText> {
		return (await this.client.send({
			"@type": "getJsonString",
			"json_value": json_value,
		} as any as TdObject)) as any as TLText
	}

	public async setPollAnswer(chat_id: number, message_id: number, option_ids: ReadonlyArray<number>): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setPollAnswer",
			"chat_id": chat_id,
			"message_id": message_id,
			"option_ids": option_ids,
		} as any as TdObject)) as any as TLOk
	}

	public async getPollVoters(chat_id: number, message_id: number, option_id: number, offset: number, limit: number): Promise<TLUsers> {
		return (await this.client.send({
			"@type": "getPollVoters",
			"chat_id": chat_id,
			"message_id": message_id,
			"option_id": option_id,
			"offset": offset,
			"limit": limit,
		} as any as TdObject)) as any as TLUsers
	}

	public async stopPoll(chat_id: number, message_id: number, reply_markup: TLReplyMarkup): Promise<TLOk> {
		return (await this.client.send({
			"@type": "stopPoll",
			"chat_id": chat_id,
			"message_id": message_id,
			"reply_markup": reply_markup,
		} as any as TdObject)) as any as TLOk
	}

	public async hideSuggestedAction(action: TLSuggestedAction): Promise<TLOk> {
		return (await this.client.send({
			"@type": "hideSuggestedAction",
			"action": action,
		} as any as TdObject)) as any as TLOk
	}

	public async getLoginUrlInfo(chat_id: number, message_id: number, button_id: number): Promise<TLLoginUrlInfo> {
		return (await this.client.send({
			"@type": "getLoginUrlInfo",
			"chat_id": chat_id,
			"message_id": message_id,
			"button_id": button_id,
		} as any as TdObject)) as any as TLLoginUrlInfo
	}

	public async getLoginUrl(chat_id: number, message_id: number, button_id: number, allow_write_access: boolean): Promise<TLHttpUrl> {
		return (await this.client.send({
			"@type": "getLoginUrl",
			"chat_id": chat_id,
			"message_id": message_id,
			"button_id": button_id,
			"allow_write_access": allow_write_access,
		} as any as TdObject)) as any as TLHttpUrl
	}

	public async getInlineQueryResults(bot_user_id: number, chat_id: number, user_location: TLLocation, query: string, offset: string): Promise<TLInlineQueryResults> {
		return (await this.client.send({
			"@type": "getInlineQueryResults",
			"bot_user_id": bot_user_id,
			"chat_id": chat_id,
			"user_location": user_location,
			"query": query,
			"offset": offset,
		} as any as TdObject)) as any as TLInlineQueryResults
	}

	public async answerInlineQuery(inline_query_id: string, is_personal: boolean, results: ReadonlyArray<TLInputInlineQueryResult>, cache_time: number, next_offset: string, switch_pm_text: string, switch_pm_parameter: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "answerInlineQuery",
			"inline_query_id": inline_query_id,
			"is_personal": is_personal,
			"results": results,
			"cache_time": cache_time,
			"next_offset": next_offset,
			"switch_pm_text": switch_pm_text,
			"switch_pm_parameter": switch_pm_parameter,
		} as any as TdObject)) as any as TLOk
	}

	public async getCallbackQueryAnswer(chat_id: number, message_id: number, payload: TLCallbackQueryPayload): Promise<TLCallbackQueryAnswer> {
		return (await this.client.send({
			"@type": "getCallbackQueryAnswer",
			"chat_id": chat_id,
			"message_id": message_id,
			"payload": payload,
		} as any as TdObject)) as any as TLCallbackQueryAnswer
	}

	public async answerCallbackQuery(callback_query_id: string, text: string, show_alert: boolean, url: string, cache_time: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "answerCallbackQuery",
			"callback_query_id": callback_query_id,
			"text": text,
			"show_alert": show_alert,
			"url": url,
			"cache_time": cache_time,
		} as any as TdObject)) as any as TLOk
	}

	public async answerShippingQuery(shipping_query_id: string, shipping_options: ReadonlyArray<TLShippingOption>, error_message: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "answerShippingQuery",
			"shipping_query_id": shipping_query_id,
			"shipping_options": shipping_options,
			"error_message": error_message,
		} as any as TdObject)) as any as TLOk
	}

	public async answerPreCheckoutQuery(pre_checkout_query_id: string, error_message: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "answerPreCheckoutQuery",
			"pre_checkout_query_id": pre_checkout_query_id,
			"error_message": error_message,
		} as any as TdObject)) as any as TLOk
	}

	public async setGameScore(chat_id: number, message_id: number, edit_message: boolean, user_id: number, score: number, force: boolean): Promise<TLMessage> {
		return (await this.client.send({
			"@type": "setGameScore",
			"chat_id": chat_id,
			"message_id": message_id,
			"edit_message": edit_message,
			"user_id": user_id,
			"score": score,
			"force": force,
		} as any as TdObject)) as any as TLMessage
	}

	public async setInlineGameScore(inline_message_id: string, edit_message: boolean, user_id: number, score: number, force: boolean): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setInlineGameScore",
			"inline_message_id": inline_message_id,
			"edit_message": edit_message,
			"user_id": user_id,
			"score": score,
			"force": force,
		} as any as TdObject)) as any as TLOk
	}

	public async getGameHighScores(chat_id: number, message_id: number, user_id: number): Promise<TLGameHighScores> {
		return (await this.client.send({
			"@type": "getGameHighScores",
			"chat_id": chat_id,
			"message_id": message_id,
			"user_id": user_id,
		} as any as TdObject)) as any as TLGameHighScores
	}

	public async getInlineGameHighScores(inline_message_id: string, user_id: number): Promise<TLGameHighScores> {
		return (await this.client.send({
			"@type": "getInlineGameHighScores",
			"inline_message_id": inline_message_id,
			"user_id": user_id,
		} as any as TdObject)) as any as TLGameHighScores
	}

	public async deleteChatReplyMarkup(chat_id: number, message_id: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "deleteChatReplyMarkup",
			"chat_id": chat_id,
			"message_id": message_id,
		} as any as TdObject)) as any as TLOk
	}

	public async sendChatAction(chat_id: number, message_thread_id: number, action: TLChatAction): Promise<TLOk> {
		return (await this.client.send({
			"@type": "sendChatAction",
			"chat_id": chat_id,
			"message_thread_id": message_thread_id,
			"action": action,
		} as any as TdObject)) as any as TLOk
	}

	public async openChat(chat_id: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "openChat",
			"chat_id": chat_id,
		} as any as TdObject)) as any as TLOk
	}

	public async closeChat(chat_id: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "closeChat",
			"chat_id": chat_id,
		} as any as TdObject)) as any as TLOk
	}

	public async viewMessages(chat_id: number, message_thread_id: number, message_ids: ReadonlyArray<number>, force_read: boolean): Promise<TLOk> {
		return (await this.client.send({
			"@type": "viewMessages",
			"chat_id": chat_id,
			"message_thread_id": message_thread_id,
			"message_ids": message_ids,
			"force_read": force_read,
		} as any as TdObject)) as any as TLOk
	}

	public async openMessageContent(chat_id: number, message_id: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "openMessageContent",
			"chat_id": chat_id,
			"message_id": message_id,
		} as any as TdObject)) as any as TLOk
	}

	public async readAllChatMentions(chat_id: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "readAllChatMentions",
			"chat_id": chat_id,
		} as any as TdObject)) as any as TLOk
	}

	public async createPrivateChat(user_id: number, force: boolean): Promise<TLChat> {
		return (await this.client.send({
			"@type": "createPrivateChat",
			"user_id": user_id,
			"force": force,
		} as any as TdObject)) as any as TLChat
	}

	public async createBasicGroupChat(basic_group_id: number, force: boolean): Promise<TLChat> {
		return (await this.client.send({
			"@type": "createBasicGroupChat",
			"basic_group_id": basic_group_id,
			"force": force,
		} as any as TdObject)) as any as TLChat
	}

	public async createSupergroupChat(supergroup_id: number, force: boolean): Promise<TLChat> {
		return (await this.client.send({
			"@type": "createSupergroupChat",
			"supergroup_id": supergroup_id,
			"force": force,
		} as any as TdObject)) as any as TLChat
	}

	public async createSecretChat(secret_chat_id: number): Promise<TLChat> {
		return (await this.client.send({
			"@type": "createSecretChat",
			"secret_chat_id": secret_chat_id,
		} as any as TdObject)) as any as TLChat
	}

	public async createNewBasicGroupChat(user_ids: ReadonlyArray<number>, title: string): Promise<TLChat> {
		return (await this.client.send({
			"@type": "createNewBasicGroupChat",
			"user_ids": user_ids,
			"title": title,
		} as any as TdObject)) as any as TLChat
	}

	public async createNewSupergroupChat(title: string, is_channel: boolean, description: string, location: TLChatLocation): Promise<TLChat> {
		return (await this.client.send({
			"@type": "createNewSupergroupChat",
			"title": title,
			"is_channel": is_channel,
			"description": description,
			"location": location,
		} as any as TdObject)) as any as TLChat
	}

	public async createNewSecretChat(user_id: number): Promise<TLChat> {
		return (await this.client.send({
			"@type": "createNewSecretChat",
			"user_id": user_id,
		} as any as TdObject)) as any as TLChat
	}

	public async upgradeBasicGroupChatToSupergroupChat(chat_id: number): Promise<TLChat> {
		return (await this.client.send({
			"@type": "upgradeBasicGroupChatToSupergroupChat",
			"chat_id": chat_id,
		} as any as TdObject)) as any as TLChat
	}

	public async getChatListsToAddChat(chat_id: number): Promise<TLChatLists> {
		return (await this.client.send({
			"@type": "getChatListsToAddChat",
			"chat_id": chat_id,
		} as any as TdObject)) as any as TLChatLists
	}

	public async addChatToList(chat_id: number, chat_list: TLChatList): Promise<TLOk> {
		return (await this.client.send({
			"@type": "addChatToList",
			"chat_id": chat_id,
			"chat_list": chat_list,
		} as any as TdObject)) as any as TLOk
	}

	public async getChatFilter(chat_filter_id: number): Promise<TLChatFilter> {
		return (await this.client.send({
			"@type": "getChatFilter",
			"chat_filter_id": chat_filter_id,
		} as any as TdObject)) as any as TLChatFilter
	}

	public async createChatFilter(filter: TLChatFilter): Promise<TLChatFilterInfo> {
		return (await this.client.send({
			"@type": "createChatFilter",
			"filter": filter,
		} as any as TdObject)) as any as TLChatFilterInfo
	}

	public async editChatFilter(chat_filter_id: number, filter: TLChatFilter): Promise<TLChatFilterInfo> {
		return (await this.client.send({
			"@type": "editChatFilter",
			"chat_filter_id": chat_filter_id,
			"filter": filter,
		} as any as TdObject)) as any as TLChatFilterInfo
	}

	public async deleteChatFilter(chat_filter_id: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "deleteChatFilter",
			"chat_filter_id": chat_filter_id,
		} as any as TdObject)) as any as TLOk
	}

	public async reorderChatFilters(chat_filter_ids: ReadonlyArray<number>): Promise<TLOk> {
		return (await this.client.send({
			"@type": "reorderChatFilters",
			"chat_filter_ids": chat_filter_ids,
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
			"filter": filter,
		} as any as TdObject)) as any as TLText
	}

	public async setChatTitle(chat_id: number, title: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setChatTitle",
			"chat_id": chat_id,
			"title": title,
		} as any as TdObject)) as any as TLOk
	}

	public async setChatPhoto(chat_id: number, photo: TLInputChatPhoto): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setChatPhoto",
			"chat_id": chat_id,
			"photo": photo,
		} as any as TdObject)) as any as TLOk
	}

	public async setChatPermissions(chat_id: number, permissions: TLChatPermissions): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setChatPermissions",
			"chat_id": chat_id,
			"permissions": permissions,
		} as any as TdObject)) as any as TLOk
	}

	public async setChatDraftMessage(chat_id: number, message_thread_id: number, draft_message: TLDraftMessage): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setChatDraftMessage",
			"chat_id": chat_id,
			"message_thread_id": message_thread_id,
			"draft_message": draft_message,
		} as any as TdObject)) as any as TLOk
	}

	public async setChatNotificationSettings(chat_id: number, notification_settings: TLChatNotificationSettings): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setChatNotificationSettings",
			"chat_id": chat_id,
			"notification_settings": notification_settings,
		} as any as TdObject)) as any as TLOk
	}

	public async toggleChatIsMarkedAsUnread(chat_id: number, is_marked_as_unread: boolean): Promise<TLOk> {
		return (await this.client.send({
			"@type": "toggleChatIsMarkedAsUnread",
			"chat_id": chat_id,
			"is_marked_as_unread": is_marked_as_unread,
		} as any as TdObject)) as any as TLOk
	}

	public async toggleChatDefaultDisableNotification(chat_id: number, default_disable_notification: boolean): Promise<TLOk> {
		return (await this.client.send({
			"@type": "toggleChatDefaultDisableNotification",
			"chat_id": chat_id,
			"default_disable_notification": default_disable_notification,
		} as any as TdObject)) as any as TLOk
	}

	public async setChatClientData(chat_id: number, client_data: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setChatClientData",
			"chat_id": chat_id,
			"client_data": client_data,
		} as any as TdObject)) as any as TLOk
	}

	public async setChatDescription(chat_id: number, description: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setChatDescription",
			"chat_id": chat_id,
			"description": description,
		} as any as TdObject)) as any as TLOk
	}

	public async setChatDiscussionGroup(chat_id: number, discussion_chat_id: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setChatDiscussionGroup",
			"chat_id": chat_id,
			"discussion_chat_id": discussion_chat_id,
		} as any as TdObject)) as any as TLOk
	}

	public async setChatLocation(chat_id: number, location: TLChatLocation): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setChatLocation",
			"chat_id": chat_id,
			"location": location,
		} as any as TdObject)) as any as TLOk
	}

	public async setChatSlowModeDelay(chat_id: number, slow_mode_delay: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setChatSlowModeDelay",
			"chat_id": chat_id,
			"slow_mode_delay": slow_mode_delay,
		} as any as TdObject)) as any as TLOk
	}

	public async pinChatMessage(chat_id: number, message_id: number, disable_notification: boolean, only_for_self: boolean): Promise<TLOk> {
		return (await this.client.send({
			"@type": "pinChatMessage",
			"chat_id": chat_id,
			"message_id": message_id,
			"disable_notification": disable_notification,
			"only_for_self": only_for_self,
		} as any as TdObject)) as any as TLOk
	}

	public async unpinChatMessage(chat_id: number, message_id: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "unpinChatMessage",
			"chat_id": chat_id,
			"message_id": message_id,
		} as any as TdObject)) as any as TLOk
	}

	public async unpinAllChatMessages(chat_id: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "unpinAllChatMessages",
			"chat_id": chat_id,
		} as any as TdObject)) as any as TLOk
	}

	public async joinChat(chat_id: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "joinChat",
			"chat_id": chat_id,
		} as any as TdObject)) as any as TLOk
	}

	public async leaveChat(chat_id: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "leaveChat",
			"chat_id": chat_id,
		} as any as TdObject)) as any as TLOk
	}

	public async addChatMember(chat_id: number, user_id: number, forward_limit: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "addChatMember",
			"chat_id": chat_id,
			"user_id": user_id,
			"forward_limit": forward_limit,
		} as any as TdObject)) as any as TLOk
	}

	public async addChatMembers(chat_id: number, user_ids: ReadonlyArray<number>): Promise<TLOk> {
		return (await this.client.send({
			"@type": "addChatMembers",
			"chat_id": chat_id,
			"user_ids": user_ids,
		} as any as TdObject)) as any as TLOk
	}

	public async setChatMemberStatus(chat_id: number, user_id: number, status: TLChatMemberStatus): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setChatMemberStatus",
			"chat_id": chat_id,
			"user_id": user_id,
			"status": status,
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
			"chat_id": chat_id,
			"user_id": user_id,
			"password": password,
		} as any as TdObject)) as any as TLOk
	}

	public async getChatMember(chat_id: number, user_id: number): Promise<TLChatMember> {
		return (await this.client.send({
			"@type": "getChatMember",
			"chat_id": chat_id,
			"user_id": user_id,
		} as any as TdObject)) as any as TLChatMember
	}

	public async searchChatMembers(chat_id: number, query: string, limit: number, filter: TLChatMembersFilter): Promise<TLChatMembers> {
		return (await this.client.send({
			"@type": "searchChatMembers",
			"chat_id": chat_id,
			"query": query,
			"limit": limit,
			"filter": filter,
		} as any as TdObject)) as any as TLChatMembers
	}

	public async getChatAdministrators(chat_id: number): Promise<TLChatAdministrators> {
		return (await this.client.send({
			"@type": "getChatAdministrators",
			"chat_id": chat_id,
		} as any as TdObject)) as any as TLChatAdministrators
	}

	public async clearAllDraftMessages(exclude_secret_chats: boolean): Promise<TLOk> {
		return (await this.client.send({
			"@type": "clearAllDraftMessages",
			"exclude_secret_chats": exclude_secret_chats,
		} as any as TdObject)) as any as TLOk
	}

	public async getChatNotificationSettingsExceptions(scope: TLNotificationSettingsScope, compare_sound: boolean): Promise<TLChats> {
		return (await this.client.send({
			"@type": "getChatNotificationSettingsExceptions",
			"scope": scope,
			"compare_sound": compare_sound,
		} as any as TdObject)) as any as TLChats
	}

	public async getScopeNotificationSettings(scope: TLNotificationSettingsScope): Promise<TLScopeNotificationSettings> {
		return (await this.client.send({
			"@type": "getScopeNotificationSettings",
			"scope": scope,
		} as any as TdObject)) as any as TLScopeNotificationSettings
	}

	public async setScopeNotificationSettings(scope: TLNotificationSettingsScope, notification_settings: TLScopeNotificationSettings): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setScopeNotificationSettings",
			"scope": scope,
			"notification_settings": notification_settings,
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
			"chat_list": chat_list,
			"chat_id": chat_id,
			"is_pinned": is_pinned,
		} as any as TdObject)) as any as TLOk
	}

	public async setPinnedChats(chat_list: TLChatList, chat_ids: ReadonlyArray<number>): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setPinnedChats",
			"chat_list": chat_list,
			"chat_ids": chat_ids,
		} as any as TdObject)) as any as TLOk
	}

	public async downloadFile(file_id: number, priority: number, offset: number, limit: number, synchronous: boolean): Promise<TLFile> {
		return (await this.client.send({
			"@type": "downloadFile",
			"file_id": file_id,
			"priority": priority,
			"offset": offset,
			"limit": limit,
			"synchronous": synchronous,
		} as any as TdObject)) as any as TLFile
	}

	public async getFileDownloadedPrefixSize(file_id: number, offset: number): Promise<TLCount> {
		return (await this.client.send({
			"@type": "getFileDownloadedPrefixSize",
			"file_id": file_id,
			"offset": offset,
		} as any as TdObject)) as any as TLCount
	}

	public async cancelDownloadFile(file_id: number, only_if_pending: boolean): Promise<TLOk> {
		return (await this.client.send({
			"@type": "cancelDownloadFile",
			"file_id": file_id,
			"only_if_pending": only_if_pending,
		} as any as TdObject)) as any as TLOk
	}

	public async uploadFile(file: TLInputFile, file_type: TLFileType, priority: number): Promise<TLFile> {
		return (await this.client.send({
			"@type": "uploadFile",
			"file": file,
			"file_type": file_type,
			"priority": priority,
		} as any as TdObject)) as any as TLFile
	}

	public async cancelUploadFile(file_id: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "cancelUploadFile",
			"file_id": file_id,
		} as any as TdObject)) as any as TLOk
	}

	public async writeGeneratedFilePart(generation_id: string, offset: number, data: Uint8Array): Promise<TLOk> {
		return (await this.client.send({
			"@type": "writeGeneratedFilePart",
			"generation_id": generation_id,
			"offset": offset,
			"data": data,
		} as any as TdObject)) as any as TLOk
	}

	public async setFileGenerationProgress(generation_id: string, expected_size: number, local_prefix_size: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setFileGenerationProgress",
			"generation_id": generation_id,
			"expected_size": expected_size,
			"local_prefix_size": local_prefix_size,
		} as any as TdObject)) as any as TLOk
	}

	public async finishFileGeneration(generation_id: string, error: TLError): Promise<TLOk> {
		return (await this.client.send({
			"@type": "finishFileGeneration",
			"generation_id": generation_id,
			"error": error,
		} as any as TdObject)) as any as TLOk
	}

	public async readFilePart(file_id: number, offset: number, count: number): Promise<TLFilePart> {
		return (await this.client.send({
			"@type": "readFilePart",
			"file_id": file_id,
			"offset": offset,
			"count": count,
		} as any as TdObject)) as any as TLFilePart
	}

	public async deleteFile(file_id: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "deleteFile",
			"file_id": file_id,
		} as any as TdObject)) as any as TLOk
	}

	public async generateChatInviteLink(chat_id: number): Promise<TLChatInviteLink> {
		return (await this.client.send({
			"@type": "generateChatInviteLink",
			"chat_id": chat_id,
		} as any as TdObject)) as any as TLChatInviteLink
	}

	public async checkChatInviteLink(invite_link: string): Promise<TLChatInviteLinkInfo> {
		return (await this.client.send({
			"@type": "checkChatInviteLink",
			"invite_link": invite_link,
		} as any as TdObject)) as any as TLChatInviteLinkInfo
	}

	public async joinChatByInviteLink(invite_link: string): Promise<TLChat> {
		return (await this.client.send({
			"@type": "joinChatByInviteLink",
			"invite_link": invite_link,
		} as any as TdObject)) as any as TLChat
	}

	public async createCall(user_id: number, protocol: TLCallProtocol, is_video: boolean): Promise<TLCallId> {
		return (await this.client.send({
			"@type": "createCall",
			"user_id": user_id,
			"protocol": protocol,
			"is_video": is_video,
		} as any as TdObject)) as any as TLCallId
	}

	public async acceptCall(call_id: number, protocol: TLCallProtocol): Promise<TLOk> {
		return (await this.client.send({
			"@type": "acceptCall",
			"call_id": call_id,
			"protocol": protocol,
		} as any as TdObject)) as any as TLOk
	}

	public async sendCallSignalingData(call_id: number, data: Uint8Array): Promise<TLOk> {
		return (await this.client.send({
			"@type": "sendCallSignalingData",
			"call_id": call_id,
			"data": data,
		} as any as TdObject)) as any as TLOk
	}

	public async discardCall(call_id: number, is_disconnected: boolean, duration: number, is_video: boolean, connection_id: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "discardCall",
			"call_id": call_id,
			"is_disconnected": is_disconnected,
			"duration": duration,
			"is_video": is_video,
			"connection_id": connection_id,
		} as any as TdObject)) as any as TLOk
	}

	public async sendCallRating(call_id: number, rating: number, comment: string, problems: ReadonlyArray<TLCallProblem>): Promise<TLOk> {
		return (await this.client.send({
			"@type": "sendCallRating",
			"call_id": call_id,
			"rating": rating,
			"comment": comment,
			"problems": problems,
		} as any as TdObject)) as any as TLOk
	}

	public async sendCallDebugInformation(call_id: number, debug_information: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "sendCallDebugInformation",
			"call_id": call_id,
			"debug_information": debug_information,
		} as any as TdObject)) as any as TLOk
	}

	public async toggleMessageSenderIsBlocked(sender: TLMessageSender, is_blocked: boolean): Promise<TLOk> {
		return (await this.client.send({
			"@type": "toggleMessageSenderIsBlocked",
			"sender": sender,
			"is_blocked": is_blocked,
		} as any as TdObject)) as any as TLOk
	}

	public async blockMessageSenderFromReplies(message_id: number, delete_message: boolean, delete_all_messages: boolean, report_spam: boolean): Promise<TLOk> {
		return (await this.client.send({
			"@type": "blockMessageSenderFromReplies",
			"message_id": message_id,
			"delete_message": delete_message,
			"delete_all_messages": delete_all_messages,
			"report_spam": report_spam,
		} as any as TdObject)) as any as TLOk
	}

	public async getBlockedMessageSenders(offset: number, limit: number): Promise<TLMessageSenders> {
		return (await this.client.send({
			"@type": "getBlockedMessageSenders",
			"offset": offset,
			"limit": limit,
		} as any as TdObject)) as any as TLMessageSenders
	}

	public async addContact(contact: TLContact, share_phone_number: boolean): Promise<TLOk> {
		return (await this.client.send({
			"@type": "addContact",
			"contact": contact,
			"share_phone_number": share_phone_number,
		} as any as TdObject)) as any as TLOk
	}

	public async importContacts(contacts: ReadonlyArray<TLContact>): Promise<TLImportedContacts> {
		return (await this.client.send({
			"@type": "importContacts",
			"contacts": contacts,
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
			"query": query,
			"limit": limit,
		} as any as TdObject)) as any as TLUsers
	}

	public async removeContacts(user_ids: ReadonlyArray<number>): Promise<TLOk> {
		return (await this.client.send({
			"@type": "removeContacts",
			"user_ids": user_ids,
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
			"contacts": contacts,
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
			"user_id": user_id,
		} as any as TdObject)) as any as TLOk
	}

	public async getUserProfilePhotos(user_id: number, offset: number, limit: number): Promise<TLChatPhotos> {
		return (await this.client.send({
			"@type": "getUserProfilePhotos",
			"user_id": user_id,
			"offset": offset,
			"limit": limit,
		} as any as TdObject)) as any as TLChatPhotos
	}

	public async getStickers(emoji: string, limit: number): Promise<TLStickers> {
		return (await this.client.send({
			"@type": "getStickers",
			"emoji": emoji,
			"limit": limit,
		} as any as TdObject)) as any as TLStickers
	}

	public async searchStickers(emoji: string, limit: number): Promise<TLStickers> {
		return (await this.client.send({
			"@type": "searchStickers",
			"emoji": emoji,
			"limit": limit,
		} as any as TdObject)) as any as TLStickers
	}

	public async getInstalledStickerSets(is_masks: boolean): Promise<TLStickerSets> {
		return (await this.client.send({
			"@type": "getInstalledStickerSets",
			"is_masks": is_masks,
		} as any as TdObject)) as any as TLStickerSets
	}

	public async getArchivedStickerSets(is_masks: boolean, offset_sticker_set_id: string, limit: number): Promise<TLStickerSets> {
		return (await this.client.send({
			"@type": "getArchivedStickerSets",
			"is_masks": is_masks,
			"offset_sticker_set_id": offset_sticker_set_id,
			"limit": limit,
		} as any as TdObject)) as any as TLStickerSets
	}

	public async getTrendingStickerSets(offset: number, limit: number): Promise<TLStickerSets> {
		return (await this.client.send({
			"@type": "getTrendingStickerSets",
			"offset": offset,
			"limit": limit,
		} as any as TdObject)) as any as TLStickerSets
	}

	public async getAttachedStickerSets(file_id: number): Promise<TLStickerSets> {
		return (await this.client.send({
			"@type": "getAttachedStickerSets",
			"file_id": file_id,
		} as any as TdObject)) as any as TLStickerSets
	}

	public async getStickerSet(set_id: string): Promise<TLStickerSet> {
		return (await this.client.send({
			"@type": "getStickerSet",
			"set_id": set_id,
		} as any as TdObject)) as any as TLStickerSet
	}

	public async searchStickerSet(name: string): Promise<TLStickerSet> {
		return (await this.client.send({
			"@type": "searchStickerSet",
			"name": name,
		} as any as TdObject)) as any as TLStickerSet
	}

	public async searchInstalledStickerSets(is_masks: boolean, query: string, limit: number): Promise<TLStickerSets> {
		return (await this.client.send({
			"@type": "searchInstalledStickerSets",
			"is_masks": is_masks,
			"query": query,
			"limit": limit,
		} as any as TdObject)) as any as TLStickerSets
	}

	public async searchStickerSets(query: string): Promise<TLStickerSets> {
		return (await this.client.send({
			"@type": "searchStickerSets",
			"query": query,
		} as any as TdObject)) as any as TLStickerSets
	}

	public async changeStickerSet(set_id: string, is_installed: boolean, is_archived: boolean): Promise<TLOk> {
		return (await this.client.send({
			"@type": "changeStickerSet",
			"set_id": set_id,
			"is_installed": is_installed,
			"is_archived": is_archived,
		} as any as TdObject)) as any as TLOk
	}

	public async viewTrendingStickerSets(sticker_set_ids: ReadonlyArray<string>): Promise<TLOk> {
		return (await this.client.send({
			"@type": "viewTrendingStickerSets",
			"sticker_set_ids": sticker_set_ids,
		} as any as TdObject)) as any as TLOk
	}

	public async reorderInstalledStickerSets(is_masks: boolean, sticker_set_ids: ReadonlyArray<string>): Promise<TLOk> {
		return (await this.client.send({
			"@type": "reorderInstalledStickerSets",
			"is_masks": is_masks,
			"sticker_set_ids": sticker_set_ids,
		} as any as TdObject)) as any as TLOk
	}

	public async getRecentStickers(is_attached: boolean): Promise<TLStickers> {
		return (await this.client.send({
			"@type": "getRecentStickers",
			"is_attached": is_attached,
		} as any as TdObject)) as any as TLStickers
	}

	public async addRecentSticker(is_attached: boolean, sticker: TLInputFile): Promise<TLStickers> {
		return (await this.client.send({
			"@type": "addRecentSticker",
			"is_attached": is_attached,
			"sticker": sticker,
		} as any as TdObject)) as any as TLStickers
	}

	public async removeRecentSticker(is_attached: boolean, sticker: TLInputFile): Promise<TLOk> {
		return (await this.client.send({
			"@type": "removeRecentSticker",
			"is_attached": is_attached,
			"sticker": sticker,
		} as any as TdObject)) as any as TLOk
	}

	public async clearRecentStickers(is_attached: boolean): Promise<TLOk> {
		return (await this.client.send({
			"@type": "clearRecentStickers",
			"is_attached": is_attached,
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
			"sticker": sticker,
		} as any as TdObject)) as any as TLOk
	}

	public async removeFavoriteSticker(sticker: TLInputFile): Promise<TLOk> {
		return (await this.client.send({
			"@type": "removeFavoriteSticker",
			"sticker": sticker,
		} as any as TdObject)) as any as TLOk
	}

	public async getStickerEmojis(sticker: TLInputFile): Promise<TLEmojis> {
		return (await this.client.send({
			"@type": "getStickerEmojis",
			"sticker": sticker,
		} as any as TdObject)) as any as TLEmojis
	}

	public async searchEmojis(text: string, exact_match: boolean, input_language_codes: ReadonlyArray<string>): Promise<TLEmojis> {
		return (await this.client.send({
			"@type": "searchEmojis",
			"text": text,
			"exact_match": exact_match,
			"input_language_codes": input_language_codes,
		} as any as TdObject)) as any as TLEmojis
	}

	public async getEmojiSuggestionsUrl(language_code: string): Promise<TLHttpUrl> {
		return (await this.client.send({
			"@type": "getEmojiSuggestionsUrl",
			"language_code": language_code,
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
			"animation": animation,
		} as any as TdObject)) as any as TLOk
	}

	public async removeSavedAnimation(animation: TLInputFile): Promise<TLOk> {
		return (await this.client.send({
			"@type": "removeSavedAnimation",
			"animation": animation,
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
			"prefix": prefix,
			"limit": limit,
		} as any as TdObject)) as any as TLHashtags
	}

	public async removeRecentHashtag(hashtag: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "removeRecentHashtag",
			"hashtag": hashtag,
		} as any as TdObject)) as any as TLOk
	}

	public async getWebPagePreview(text: TLFormattedText): Promise<TLWebPage> {
		return (await this.client.send({
			"@type": "getWebPagePreview",
			"text": text,
		} as any as TdObject)) as any as TLWebPage
	}

	public async getWebPageInstantView(url: string, force_full: boolean): Promise<TLWebPageInstantView> {
		return (await this.client.send({
			"@type": "getWebPageInstantView",
			"url": url,
			"force_full": force_full,
		} as any as TdObject)) as any as TLWebPageInstantView
	}

	public async setProfilePhoto(photo: TLInputChatPhoto): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setProfilePhoto",
			"photo": photo,
		} as any as TdObject)) as any as TLOk
	}

	public async deleteProfilePhoto(profile_photo_id: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "deleteProfilePhoto",
			"profile_photo_id": profile_photo_id,
		} as any as TdObject)) as any as TLOk
	}

	public async setName(first_name: string, last_name: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setName",
			"first_name": first_name,
			"last_name": last_name,
		} as any as TdObject)) as any as TLOk
	}

	public async setBio(bio: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setBio",
			"bio": bio,
		} as any as TdObject)) as any as TLOk
	}

	public async setUsername(username: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setUsername",
			"username": username,
		} as any as TdObject)) as any as TLOk
	}

	public async setLocation(location: TLLocation): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setLocation",
			"location": location,
		} as any as TdObject)) as any as TLOk
	}

	public async changePhoneNumber(phone_number: string, settings: TLPhoneNumberAuthenticationSettings): Promise<TLAuthenticationCodeInfo> {
		return (await this.client.send({
			"@type": "changePhoneNumber",
			"phone_number": phone_number,
			"settings": settings,
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
			"code": code,
		} as any as TdObject)) as any as TLOk
	}

	public async setCommands(commands: ReadonlyArray<TLBotCommand>): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setCommands",
			"commands": commands,
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
			"session_id": session_id,
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
			"website_id": website_id,
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
			"supergroup_id": supergroup_id,
			"username": username,
		} as any as TdObject)) as any as TLOk
	}

	public async setSupergroupStickerSet(supergroup_id: number, sticker_set_id: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setSupergroupStickerSet",
			"supergroup_id": supergroup_id,
			"sticker_set_id": sticker_set_id,
		} as any as TdObject)) as any as TLOk
	}

	public async toggleSupergroupSignMessages(supergroup_id: number, sign_messages: boolean): Promise<TLOk> {
		return (await this.client.send({
			"@type": "toggleSupergroupSignMessages",
			"supergroup_id": supergroup_id,
			"sign_messages": sign_messages,
		} as any as TdObject)) as any as TLOk
	}

	public async toggleSupergroupIsAllHistoryAvailable(supergroup_id: number, is_all_history_available: boolean): Promise<TLOk> {
		return (await this.client.send({
			"@type": "toggleSupergroupIsAllHistoryAvailable",
			"supergroup_id": supergroup_id,
			"is_all_history_available": is_all_history_available,
		} as any as TdObject)) as any as TLOk
	}

	public async reportSupergroupSpam(supergroup_id: number, user_id: number, message_ids: ReadonlyArray<number>): Promise<TLOk> {
		return (await this.client.send({
			"@type": "reportSupergroupSpam",
			"supergroup_id": supergroup_id,
			"user_id": user_id,
			"message_ids": message_ids,
		} as any as TdObject)) as any as TLOk
	}

	public async getSupergroupMembers(supergroup_id: number, filter: TLSupergroupMembersFilter, offset: number, limit: number): Promise<TLChatMembers> {
		return (await this.client.send({
			"@type": "getSupergroupMembers",
			"supergroup_id": supergroup_id,
			"filter": filter,
			"offset": offset,
			"limit": limit,
		} as any as TdObject)) as any as TLChatMembers
	}

	public async deleteSupergroup(supergroup_id: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "deleteSupergroup",
			"supergroup_id": supergroup_id,
		} as any as TdObject)) as any as TLOk
	}

	public async closeSecretChat(secret_chat_id: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "closeSecretChat",
			"secret_chat_id": secret_chat_id,
		} as any as TdObject)) as any as TLOk
	}

	public async getChatEventLog(chat_id: number, query: string, from_event_id: string, limit: number, filters: TLChatEventLogFilters, user_ids: ReadonlyArray<number>): Promise<TLChatEvents> {
		return (await this.client.send({
			"@type": "getChatEventLog",
			"chat_id": chat_id,
			"query": query,
			"from_event_id": from_event_id,
			"limit": limit,
			"filters": filters,
			"user_ids": user_ids,
		} as any as TdObject)) as any as TLChatEvents
	}

	public async getPaymentForm(chat_id: number, message_id: number): Promise<TLPaymentForm> {
		return (await this.client.send({
			"@type": "getPaymentForm",
			"chat_id": chat_id,
			"message_id": message_id,
		} as any as TdObject)) as any as TLPaymentForm
	}

	public async validateOrderInfo(chat_id: number, message_id: number, order_info: TLOrderInfo, allow_save: boolean): Promise<TLValidatedOrderInfo> {
		return (await this.client.send({
			"@type": "validateOrderInfo",
			"chat_id": chat_id,
			"message_id": message_id,
			"order_info": order_info,
			"allow_save": allow_save,
		} as any as TdObject)) as any as TLValidatedOrderInfo
	}

	public async sendPaymentForm(chat_id: number, message_id: number, order_info_id: string, shipping_option_id: string, credentials: TLInputCredentials): Promise<TLPaymentResult> {
		return (await this.client.send({
			"@type": "sendPaymentForm",
			"chat_id": chat_id,
			"message_id": message_id,
			"order_info_id": order_info_id,
			"shipping_option_id": shipping_option_id,
			"credentials": credentials,
		} as any as TdObject)) as any as TLPaymentResult
	}

	public async getPaymentReceipt(chat_id: number, message_id: number): Promise<TLPaymentReceipt> {
		return (await this.client.send({
			"@type": "getPaymentReceipt",
			"chat_id": chat_id,
			"message_id": message_id,
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
			"for_dark_theme": for_dark_theme,
		} as any as TdObject)) as any as TLBackgrounds
	}

	public async getBackgroundUrl(name: string, type: TLBackgroundType): Promise<TLHttpUrl> {
		return (await this.client.send({
			"@type": "getBackgroundUrl",
			"name": name,
			"type": type,
		} as any as TdObject)) as any as TLHttpUrl
	}

	public async searchBackground(name: string): Promise<TLBackground> {
		return (await this.client.send({
			"@type": "searchBackground",
			"name": name,
		} as any as TdObject)) as any as TLBackground
	}

	public async setBackground(background: TLInputBackground, type: TLBackgroundType, for_dark_theme: boolean): Promise<TLBackground> {
		return (await this.client.send({
			"@type": "setBackground",
			"background": background,
			"type": type,
			"for_dark_theme": for_dark_theme,
		} as any as TdObject)) as any as TLBackground
	}

	public async removeBackground(background_id: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "removeBackground",
			"background_id": background_id,
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
			"only_local": only_local,
		} as any as TdObject)) as any as TLLocalizationTargetInfo
	}

	public async getLanguagePackInfo(language_pack_id: string): Promise<TLLanguagePackInfo> {
		return (await this.client.send({
			"@type": "getLanguagePackInfo",
			"language_pack_id": language_pack_id,
		} as any as TdObject)) as any as TLLanguagePackInfo
	}

	public async getLanguagePackStrings(language_pack_id: string, keys: ReadonlyArray<string>): Promise<TLLanguagePackStrings> {
		return (await this.client.send({
			"@type": "getLanguagePackStrings",
			"language_pack_id": language_pack_id,
			"keys": keys,
		} as any as TdObject)) as any as TLLanguagePackStrings
	}

	public async synchronizeLanguagePack(language_pack_id: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "synchronizeLanguagePack",
			"language_pack_id": language_pack_id,
		} as any as TdObject)) as any as TLOk
	}

	public async addCustomServerLanguagePack(language_pack_id: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "addCustomServerLanguagePack",
			"language_pack_id": language_pack_id,
		} as any as TdObject)) as any as TLOk
	}

	public async setCustomLanguagePack(info: TLLanguagePackInfo, strings: ReadonlyArray<TLLanguagePackString>): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setCustomLanguagePack",
			"info": info,
			"strings": strings,
		} as any as TdObject)) as any as TLOk
	}

	public async editCustomLanguagePackInfo(info: TLLanguagePackInfo): Promise<TLOk> {
		return (await this.client.send({
			"@type": "editCustomLanguagePackInfo",
			"info": info,
		} as any as TdObject)) as any as TLOk
	}

	public async setCustomLanguagePackString(language_pack_id: string, new_string: TLLanguagePackString): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setCustomLanguagePackString",
			"language_pack_id": language_pack_id,
			"new_string": new_string,
		} as any as TdObject)) as any as TLOk
	}

	public async deleteLanguagePack(language_pack_id: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "deleteLanguagePack",
			"language_pack_id": language_pack_id,
		} as any as TdObject)) as any as TLOk
	}

	public async registerDevice(device_token: TLDeviceToken, other_user_ids: ReadonlyArray<number>): Promise<TLPushReceiverId> {
		return (await this.client.send({
			"@type": "registerDevice",
			"device_token": device_token,
			"other_user_ids": other_user_ids,
		} as any as TdObject)) as any as TLPushReceiverId
	}

	public async processPushNotification(payload: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "processPushNotification",
			"payload": payload,
		} as any as TdObject)) as any as TLOk
	}

	public async getPushReceiverId(payload: string): Promise<TLPushReceiverId> {
		return (await this.client.send({
			"@type": "getPushReceiverId",
			"payload": payload,
		} as any as TdObject)) as any as TLPushReceiverId
	}

	public async getRecentlyVisitedTMeUrls(referrer: string): Promise<TLTMeUrls> {
		return (await this.client.send({
			"@type": "getRecentlyVisitedTMeUrls",
			"referrer": referrer,
		} as any as TdObject)) as any as TLTMeUrls
	}

	public async setUserPrivacySettingRules(setting: TLUserPrivacySetting, rules: TLUserPrivacySettingRules): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setUserPrivacySettingRules",
			"setting": setting,
			"rules": rules,
		} as any as TdObject)) as any as TLOk
	}

	public async getUserPrivacySettingRules(setting: TLUserPrivacySetting): Promise<TLUserPrivacySettingRules> {
		return (await this.client.send({
			"@type": "getUserPrivacySettingRules",
			"setting": setting,
		} as any as TdObject)) as any as TLUserPrivacySettingRules
	}

	public async getOption(name: string): Promise<TLOptionValue> {
		return (await this.client.send({
			"@type": "getOption",
			"name": name,
		} as any as TdObject)) as any as TLOptionValue
	}

	public async setOption(name: string, value: TLOptionValue): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setOption",
			"name": name,
			"value": value,
		} as any as TdObject)) as any as TLOk
	}

	public async setAccountTtl(ttl: TLAccountTtl): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setAccountTtl",
			"ttl": ttl,
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
			"reason": reason,
		} as any as TdObject)) as any as TLOk
	}

	public async removeChatActionBar(chat_id: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "removeChatActionBar",
			"chat_id": chat_id,
		} as any as TdObject)) as any as TLOk
	}

	public async reportChat(chat_id: number, reason: TLChatReportReason, message_ids: ReadonlyArray<number>): Promise<TLOk> {
		return (await this.client.send({
			"@type": "reportChat",
			"chat_id": chat_id,
			"reason": reason,
			"message_ids": message_ids,
		} as any as TdObject)) as any as TLOk
	}

	public async getChatStatisticsUrl(chat_id: number, parameters: string, is_dark: boolean): Promise<TLHttpUrl> {
		return (await this.client.send({
			"@type": "getChatStatisticsUrl",
			"chat_id": chat_id,
			"parameters": parameters,
			"is_dark": is_dark,
		} as any as TdObject)) as any as TLHttpUrl
	}

	public async getChatStatistics(chat_id: number, is_dark: boolean): Promise<TLChatStatistics> {
		return (await this.client.send({
			"@type": "getChatStatistics",
			"chat_id": chat_id,
			"is_dark": is_dark,
		} as any as TdObject)) as any as TLChatStatistics
	}

	public async getMessageStatistics(chat_id: number, message_id: number, is_dark: boolean): Promise<TLMessageStatistics> {
		return (await this.client.send({
			"@type": "getMessageStatistics",
			"chat_id": chat_id,
			"message_id": message_id,
			"is_dark": is_dark,
		} as any as TdObject)) as any as TLMessageStatistics
	}

	public async getStatisticsGraph(chat_id: number, token: string, x: number): Promise<TLStatisticsGraph> {
		return (await this.client.send({
			"@type": "getStatisticsGraph",
			"chat_id": chat_id,
			"token": token,
			"x": x,
		} as any as TdObject)) as any as TLStatisticsGraph
	}

	public async getStorageStatistics(chat_limit: number): Promise<TLStorageStatistics> {
		return (await this.client.send({
			"@type": "getStorageStatistics",
			"chat_limit": chat_limit,
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
			"size": size,
			"ttl": ttl,
			"count": count,
			"immunity_delay": immunity_delay,
			"file_types": file_types,
			"chat_ids": chat_ids,
			"exclude_chat_ids": exclude_chat_ids,
			"return_deleted_file_statistics": return_deleted_file_statistics,
			"chat_limit": chat_limit,
		} as any as TdObject)) as any as TLStorageStatistics
	}

	public async setNetworkType(type: TLNetworkType): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setNetworkType",
			"type": type,
		} as any as TdObject)) as any as TLOk
	}

	public async getNetworkStatistics(only_current: boolean): Promise<TLNetworkStatistics> {
		return (await this.client.send({
			"@type": "getNetworkStatistics",
			"only_current": only_current,
		} as any as TdObject)) as any as TLNetworkStatistics
	}

	public async addNetworkStatistics(entry: TLNetworkStatisticsEntry): Promise<TLOk> {
		return (await this.client.send({
			"@type": "addNetworkStatistics",
			"entry": entry,
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
			"settings": settings,
			"type": type,
		} as any as TdObject)) as any as TLOk
	}

	public async getBankCardInfo(bank_card_number: string): Promise<TLBankCardInfo> {
		return (await this.client.send({
			"@type": "getBankCardInfo",
			"bank_card_number": bank_card_number,
		} as any as TdObject)) as any as TLBankCardInfo
	}

	public async getPassportElement(type: TLPassportElementType, password: string): Promise<TLPassportElement> {
		return (await this.client.send({
			"@type": "getPassportElement",
			"type": type,
			"password": password,
		} as any as TdObject)) as any as TLPassportElement
	}

	public async getAllPassportElements(password: string): Promise<TLPassportElements> {
		return (await this.client.send({
			"@type": "getAllPassportElements",
			"password": password,
		} as any as TdObject)) as any as TLPassportElements
	}

	public async setPassportElement(element: TLInputPassportElement, password: string): Promise<TLPassportElement> {
		return (await this.client.send({
			"@type": "setPassportElement",
			"element": element,
			"password": password,
		} as any as TdObject)) as any as TLPassportElement
	}

	public async deletePassportElement(type: TLPassportElementType): Promise<TLOk> {
		return (await this.client.send({
			"@type": "deletePassportElement",
			"type": type,
		} as any as TdObject)) as any as TLOk
	}

	public async setPassportElementErrors(user_id: number, errors: ReadonlyArray<TLInputPassportElementError>): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setPassportElementErrors",
			"user_id": user_id,
			"errors": errors,
		} as any as TdObject)) as any as TLOk
	}

	public async getPreferredCountryLanguage(country_code: string): Promise<TLText> {
		return (await this.client.send({
			"@type": "getPreferredCountryLanguage",
			"country_code": country_code,
		} as any as TdObject)) as any as TLText
	}

	public async sendPhoneNumberVerificationCode(phone_number: string, settings: TLPhoneNumberAuthenticationSettings): Promise<TLAuthenticationCodeInfo> {
		return (await this.client.send({
			"@type": "sendPhoneNumberVerificationCode",
			"phone_number": phone_number,
			"settings": settings,
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
			"code": code,
		} as any as TdObject)) as any as TLOk
	}

	public async sendEmailAddressVerificationCode(email_address: string): Promise<TLEmailAddressAuthenticationCodeInfo> {
		return (await this.client.send({
			"@type": "sendEmailAddressVerificationCode",
			"email_address": email_address,
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
			"code": code,
		} as any as TdObject)) as any as TLOk
	}

	public async getPassportAuthorizationForm(bot_user_id: number, scope: string, public_key: string, nonce: string): Promise<TLPassportAuthorizationForm> {
		return (await this.client.send({
			"@type": "getPassportAuthorizationForm",
			"bot_user_id": bot_user_id,
			"scope": scope,
			"public_key": public_key,
			"nonce": nonce,
		} as any as TdObject)) as any as TLPassportAuthorizationForm
	}

	public async getPassportAuthorizationFormAvailableElements(autorization_form_id: number, password: string): Promise<TLPassportElementsWithErrors> {
		return (await this.client.send({
			"@type": "getPassportAuthorizationFormAvailableElements",
			"autorization_form_id": autorization_form_id,
			"password": password,
		} as any as TdObject)) as any as TLPassportElementsWithErrors
	}

	public async sendPassportAuthorizationForm(autorization_form_id: number, types: ReadonlyArray<TLPassportElementType>): Promise<TLOk> {
		return (await this.client.send({
			"@type": "sendPassportAuthorizationForm",
			"autorization_form_id": autorization_form_id,
			"types": types,
		} as any as TdObject)) as any as TLOk
	}

	public async sendPhoneNumberConfirmationCode(hash: string, phone_number: string, settings: TLPhoneNumberAuthenticationSettings): Promise<TLAuthenticationCodeInfo> {
		return (await this.client.send({
			"@type": "sendPhoneNumberConfirmationCode",
			"hash": hash,
			"phone_number": phone_number,
			"settings": settings,
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
			"code": code,
		} as any as TdObject)) as any as TLOk
	}

	public async setBotUpdatesStatus(pending_update_count: number, error_message: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setBotUpdatesStatus",
			"pending_update_count": pending_update_count,
			"error_message": error_message,
		} as any as TdObject)) as any as TLOk
	}

	public async uploadStickerFile(user_id: number, png_sticker: TLInputFile): Promise<TLFile> {
		return (await this.client.send({
			"@type": "uploadStickerFile",
			"user_id": user_id,
			"png_sticker": png_sticker,
		} as any as TdObject)) as any as TLFile
	}

	public async createNewStickerSet(user_id: number, title: string, name: string, is_masks: boolean, stickers: ReadonlyArray<TLInputSticker>): Promise<TLStickerSet> {
		return (await this.client.send({
			"@type": "createNewStickerSet",
			"user_id": user_id,
			"title": title,
			"name": name,
			"is_masks": is_masks,
			"stickers": stickers,
		} as any as TdObject)) as any as TLStickerSet
	}

	public async addStickerToSet(user_id: number, name: string, sticker: TLInputSticker): Promise<TLStickerSet> {
		return (await this.client.send({
			"@type": "addStickerToSet",
			"user_id": user_id,
			"name": name,
			"sticker": sticker,
		} as any as TdObject)) as any as TLStickerSet
	}

	public async setStickerSetThumbnail(user_id: number, name: string, thumbnail: TLInputFile): Promise<TLStickerSet> {
		return (await this.client.send({
			"@type": "setStickerSetThumbnail",
			"user_id": user_id,
			"name": name,
			"thumbnail": thumbnail,
		} as any as TdObject)) as any as TLStickerSet
	}

	public async setStickerPositionInSet(sticker: TLInputFile, position: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setStickerPositionInSet",
			"sticker": sticker,
			"position": position,
		} as any as TdObject)) as any as TLOk
	}

	public async removeStickerFromSet(sticker: TLInputFile): Promise<TLOk> {
		return (await this.client.send({
			"@type": "removeStickerFromSet",
			"sticker": sticker,
		} as any as TdObject)) as any as TLOk
	}

	public async getMapThumbnailFile(location: TLLocation, zoom: number, width: number, height: number, scale: number, chat_id: number): Promise<TLFile> {
		return (await this.client.send({
			"@type": "getMapThumbnailFile",
			"location": location,
			"zoom": zoom,
			"width": width,
			"height": height,
			"scale": scale,
			"chat_id": chat_id,
		} as any as TdObject)) as any as TLFile
	}

	public async acceptTermsOfService(terms_of_service_id: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "acceptTermsOfService",
			"terms_of_service_id": terms_of_service_id,
		} as any as TdObject)) as any as TLOk
	}

	public async sendCustomRequest(method: string, parameters: string): Promise<TLCustomRequestResult> {
		return (await this.client.send({
			"@type": "sendCustomRequest",
			"method": method,
			"parameters": parameters,
		} as any as TdObject)) as any as TLCustomRequestResult
	}

	public async answerCustomQuery(custom_query_id: string, data: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "answerCustomQuery",
			"custom_query_id": custom_query_id,
			"data": data,
		} as any as TdObject)) as any as TLOk
	}

	public async setAlarm(seconds: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setAlarm",
			"seconds": seconds,
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
			"phone_number_prefix": phone_number_prefix,
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
			"link": link,
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
			"type": type,
			"chat_id": chat_id,
			"data": data,
		} as any as TdObject)) as any as TLOk
	}

	public async addProxy(server: string, port: number, enable: boolean, type: TLProxyType): Promise<TLProxy> {
		return (await this.client.send({
			"@type": "addProxy",
			"server": server,
			"port": port,
			"enable": enable,
			"type": type,
		} as any as TdObject)) as any as TLProxy
	}

	public async editProxy(proxy_id: number, server: string, port: number, enable: boolean, type: TLProxyType): Promise<TLProxy> {
		return (await this.client.send({
			"@type": "editProxy",
			"proxy_id": proxy_id,
			"server": server,
			"port": port,
			"enable": enable,
			"type": type,
		} as any as TdObject)) as any as TLProxy
	}

	public async enableProxy(proxy_id: number): Promise<TLOk> {
		return (await this.client.send({
			"@type": "enableProxy",
			"proxy_id": proxy_id,
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
			"proxy_id": proxy_id,
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
			"proxy_id": proxy_id,
		} as any as TdObject)) as any as TLText
	}

	public async pingProxy(proxy_id: number): Promise<TLSeconds> {
		return (await this.client.send({
			"@type": "pingProxy",
			"proxy_id": proxy_id,
		} as any as TdObject)) as any as TLSeconds
	}

	public async setLogStream(log_stream: TLLogStream): Promise<TLOk> {
		return (await this.client.send({
			"@type": "setLogStream",
			"log_stream": log_stream,
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
			"new_verbosity_level": new_verbosity_level,
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
			"tag": tag,
			"new_verbosity_level": new_verbosity_level,
		} as any as TdObject)) as any as TLOk
	}

	public async getLogTagVerbosityLevel(tag: string): Promise<TLLogVerbosityLevel> {
		return (await this.client.send({
			"@type": "getLogTagVerbosityLevel",
			"tag": tag,
		} as any as TdObject)) as any as TLLogVerbosityLevel
	}

	public async addLogMessage(verbosity_level: number, text: string): Promise<TLOk> {
		return (await this.client.send({
			"@type": "addLogMessage",
			"verbosity_level": verbosity_level,
			"text": text,
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
			"x": x,
		} as any as TdObject)) as any as TLTestString
	}

	public async testCallBytes(x: Uint8Array): Promise<TLTestBytes> {
		return (await this.client.send({
			"@type": "testCallBytes",
			"x": x,
		} as any as TdObject)) as any as TLTestBytes
	}

	public async testCallVectorInt(x: ReadonlyArray<number>): Promise<TLTestVectorInt> {
		return (await this.client.send({
			"@type": "testCallVectorInt",
			"x": x,
		} as any as TdObject)) as any as TLTestVectorInt
	}

	public async testCallVectorIntObject(x: ReadonlyArray<TLTestInt>): Promise<TLTestVectorIntObject> {
		return (await this.client.send({
			"@type": "testCallVectorIntObject",
			"x": x,
		} as any as TdObject)) as any as TLTestVectorIntObject
	}

	public async testCallVectorString(x: ReadonlyArray<string>): Promise<TLTestVectorString> {
		return (await this.client.send({
			"@type": "testCallVectorString",
			"x": x,
		} as any as TdObject)) as any as TLTestVectorString
	}

	public async testCallVectorStringObject(x: ReadonlyArray<TLTestString>): Promise<TLTestVectorStringObject> {
		return (await this.client.send({
			"@type": "testCallVectorStringObject",
			"x": x,
		} as any as TdObject)) as any as TLTestVectorStringObject
	}

	public async testSquareInt(x: number): Promise<TLTestInt> {
		return (await this.client.send({
			"@type": "testSquareInt",
			"x": x,
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
			"server": server,
			"port": port,
			"type": type,
			"dc_id": dc_id,
			"timeout": timeout,
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
			"error": error,
		} as any as TdObject)) as any as TLError
	}
}
