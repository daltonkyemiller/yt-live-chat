export interface LiveChatMessage {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
  authorDetails: AuthorDetails;
}

export interface Snippet {
  type: string;
  liveChatId: string;
  authorChannelId: string;
  publishedAt: string;
  hasDisplayContent: boolean;
  displayMessage: string;
  textMessageDetails: TextMessageDetails;
}

export interface TextMessageDetails {
  messageText: string;
}

export interface AuthorDetails {
  channelId: string;
  channelUrl: string;
  displayName: string;
  profileImageUrl: string;
  isVerified: boolean;
  isChatOwner: boolean;
  isChatSponsor: boolean;
  isChatModerator: boolean;
}
