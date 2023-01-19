'use client';
import { LiveChatMessage } from '@/utils/types/youtube';
import { useEffect, useState } from 'react';

const addressRegex = /^(\d+) ?([A-Za-z](?= ))? (.*?) ([^ ]+?) ?((?<= )APT)? ?((?<= )\d*)?$/;

const chatsMock: LiveChatMessage[] = [
  {
    kind: 'youtube#liveChatMessage',
    etag: '1-MfOvlnnLyvRhZsOLFsARRRkKs',
    id: 'LCC.CikqJwoYVUNlNEh1SGpUcWdBbldVTUpvVVJiZ3RBEgtubWZFeENPTTBSMBI5ChpDSUNmeFpfMjB2d0NGUldXNVFjZHk4RUFFZxIbQ0wyRHlNejEwdndDRlktUHdnRWRkQ1lHY2cw',
    snippet: {
      type: 'textMessageEvent',
      liveChatId: 'KicKGFVDZTRIdUhqVHFnQW5XVU1Kb1VSYmd0QRILbm1mRXhDT00wUjA',
      authorChannelId: 'UCe4HuHjTqgAnWUMJoURbgtA',
      publishedAt: '2023-01-19T05:41:54.370456+00:00',
      hasDisplayContent: true,
      displayMessage: 'oi',
      textMessageDetails: {
        messageText: 'oi',
      },
    },
    authorDetails: {
      channelId: 'UCe4HuHjTqgAnWUMJoURbgtA',
      channelUrl: 'http://www.youtube.com/channel/UCe4HuHjTqgAnWUMJoURbgtA',
      displayName: 'Deqlare.',
      profileImageUrl:
        'https://yt3.ggpht.com/ytc/AMLnZu-vE8Lmo4uz322uMNaoULGpwP85cziFQ2p_-N5Mqw=s88-c-k-c0x00ffffff-no-rj',
      isVerified: false,
      isChatOwner: true,
      isChatSponsor: false,
      isChatModerator: false,
    },
  },
  {
    kind: 'youtube#liveChatMessage',
    etag: 'SiFpSLnqn4B3326qDKysQ7P7sJw',
    id: 'LCC.CikqJwoYVUNlNEh1SGpUcWdBbldVTUpvVVJiZ3RBEgtubWZFeENPTTBSMBI5ChpDSkcwNC1MMjB2d0NGZEdYNVFjZDk3d0ctURIbQ0wyRHlNejEwdndDRlktUHdnRWRkQ1lHY2cx',
    snippet: {
      type: 'textMessageEvent',
      liveChatId: 'KicKGFVDZTRIdUhqVHFnQW5XVU1Kb1VSYmd0QRILbm1mRXhDT00wUjA',
      authorChannelId: 'UCe4HuHjTqgAnWUMJoURbgtA',
      publishedAt: '2023-01-19T05:44:15.32915+00:00',
      hasDisplayContent: true,
      displayMessage: 'oi there!',
      textMessageDetails: {
        messageText: 'oi there!',
      },
    },
    authorDetails: {
      channelId: 'UCe4HuHjTqgAnWUMJoURbgtA',
      channelUrl: 'http://www.youtube.com/channel/UCe4HuHjTqgAnWUMJoURbgtA',
      displayName: 'Deqlare.',
      profileImageUrl:
        'https://yt3.ggpht.com/ytc/AMLnZu-vE8Lmo4uz322uMNaoULGpwP85cziFQ2p_-N5Mqw=s88-c-k-c0x00ffffff-no-rj',
      isVerified: false,
      isChatOwner: true,
      isChatSponsor: false,
      isChatModerator: false,
    },
  },
  {
    kind: 'youtube#liveChatMessage',
    etag: 'uqsBEQkZrWf3a5Gv_wEGVQBu-j4',
    id: 'LCC.CikqJwoYVUNlNEh1SGpUcWdBbldVTUpvVVJiZ3RBEgtubWZFeENPTTBSMBI5ChpDTDNCd3RyNDB2d0NGV3EwNVFjZDgyWUV6QRIbQ0wyRHlNejEwdndDRlktUHdnRWRkQ1lHY2cy',
    snippet: {
      type: 'textMessageEvent',
      liveChatId: 'KicKGFVDZTRIdUhqVHFnQW5XVU1Kb1VSYmd0QRILbm1mRXhDT00wUjA',
      authorChannelId: 'UCe4HuHjTqgAnWUMJoURbgtA',
      publishedAt: '2023-01-19T05:52:54.883706+00:00',
      hasDisplayContent: true,
      displayMessage: '11',
      textMessageDetails: {
        messageText: '11',
      },
    },
    authorDetails: {
      channelId: 'UCe4HuHjTqgAnWUMJoURbgtA',
      channelUrl: 'http://www.youtube.com/channel/UCe4HuHjTqgAnWUMJoURbgtA',
      displayName: 'Deqlare.',
      profileImageUrl:
        'https://yt3.ggpht.com/ytc/AMLnZu-vE8Lmo4uz322uMNaoULGpwP85cziFQ2p_-N5Mqw=s88-c-k-c0x00ffffff-no-rj',
      isVerified: false,
      isChatOwner: true,
      isChatSponsor: false,
      isChatModerator: false,
    },
  },
  {
    kind: 'youtube#liveChatMessage',
    etag: 'HUeHXgKvEhg8b3oTOC9cRbNvI84',
    id: 'LCC.CikqJwoYVUNlNEh1SGpUcWdBbldVTUpvVVJiZ3RBEgtubWZFeENPTTBSMBI5ChpDS3JfanNYNjB2d0NGUmUwNVFjZHdUNFB3QRIbQ0wyRHlNejEwdndDRlktUHdnRWRkQ1lHY2cz',
    snippet: {
      type: 'textMessageEvent',
      liveChatId: 'KicKGFVDZTRIdUhqVHFnQW5XVU1Kb1VSYmd0QRILbm1mRXhDT00wUjA',
      authorChannelId: 'UCe4HuHjTqgAnWUMJoURbgtA',
      publishedAt: '2023-01-19T06:01:06.877984+00:00',
      hasDisplayContent: true,
      displayMessage: '123',
      textMessageDetails: {
        messageText: '123',
      },
    },
    authorDetails: {
      channelId: 'UCe4HuHjTqgAnWUMJoURbgtA',
      channelUrl: 'http://www.youtube.com/channel/UCe4HuHjTqgAnWUMJoURbgtA',
      displayName: 'Deqlare.',
      profileImageUrl:
        'https://yt3.ggpht.com/ytc/AMLnZu-vE8Lmo4uz322uMNaoULGpwP85cziFQ2p_-N5Mqw=s88-c-k-c0x00ffffff-no-rj',
      isVerified: false,
      isChatOwner: true,
      isChatSponsor: false,
      isChatModerator: false,
    },
  },
  {
    kind: 'youtube#liveChatMessage',
    etag: 'Y7ZTzn1ugH1giQUB3vhia8HeJII',
    id: 'LCC.CikqJwoYVUNlNEh1SGpUcWdBbldVTUpvVVJiZ3RBEgtubWZFeENPTTBSMBI5ChpDTVRVMWZIODB2d0NGWmZHRmdrZE93Z0tWdxIbQ0wyRHlNejEwdndDRlktUHdnRWRkQ1lHY2c0',
    snippet: {
      type: 'textMessageEvent',
      liveChatId: 'KicKGFVDZTRIdUhqVHFnQW5XVU1Kb1VSYmd0QRILbm1mRXhDT00wUjA',
      authorChannelId: 'UCe4HuHjTqgAnWUMJoURbgtA',
      publishedAt: '2023-01-19T06:11:37.174646+00:00',
      hasDisplayContent: true,
      displayMessage: '123',
      textMessageDetails: {
        messageText: '123',
      },
    },
    authorDetails: {
      channelId: 'UCe4HuHjTqgAnWUMJoURbgtA',
      channelUrl: 'http://www.youtube.com/channel/UCe4HuHjTqgAnWUMJoURbgtA',
      displayName: 'Deqlare.',
      profileImageUrl:
        'https://yt3.ggpht.com/ytc/AMLnZu-vE8Lmo4uz322uMNaoULGpwP85cziFQ2p_-N5Mqw=s88-c-k-c0x00ffffff-no-rj',
      isVerified: false,
      isChatOwner: true,
      isChatSponsor: false,
      isChatModerator: false,
    },
  },
  {
    kind: 'youtube#liveChatMessage',
    etag: 'lSswBWOdlBZZ8QPQ8vIAM42hWx4',
    id: 'LCC.CikqJwoYVUNlNEh1SGpUcWdBbldVTUpvVVJiZ3RBEgtubWZFeENPTTBSMBI5ChpDTm5iaTVMOTB2d0NGWmpMRmdrZGctNEdNQRIbQ0wyRHlNejEwdndDRlktUHdnRWRkQ1lHY2c1',
    snippet: {
      type: 'textMessageEvent',
      liveChatId: 'KicKGFVDZTRIdUhqVHFnQW5XVU1Kb1VSYmd0QRILbm1mRXhDT00wUjA',
      authorChannelId: 'UCe4HuHjTqgAnWUMJoURbgtA',
      publishedAt: '2023-01-19T06:12:45.167995+00:00',
      hasDisplayContent: true,
      displayMessage: '1723 Skylane Dr. Twin Falls Idaho',
      textMessageDetails: {
        messageText: '1723 Skylane Dr. Twin Falls Idaho',
      },
    },
    authorDetails: {
      channelId: 'UCe4HuHjTqgAnWUMJoURbgtA',
      channelUrl: 'http://www.youtube.com/channel/UCe4HuHjTqgAnWUMJoURbgtA',
      displayName: 'Deqlare.',
      profileImageUrl:
        'https://yt3.ggpht.com/ytc/AMLnZu-vE8Lmo4uz322uMNaoULGpwP85cziFQ2p_-N5Mqw=s88-c-k-c0x00ffffff-no-rj',
      isVerified: false,
      isChatOwner: true,
      isChatSponsor: false,
      isChatModerator: false,
    },
  },
  {
    kind: 'youtube#liveChatMessage',
    etag: '3ddow1P05A2bRRfa1ZaF3FI2TaM',
    id: 'LCC.CikqJwoYVUNlNEh1SGpUcWdBbldVTUpvVVJiZ3RBEgtubWZFeENPTTBSMBI5ChpDTzJyaFl2XzB2d0NGVy0wNVFjZFBoWVBCQRIbQ0wyRHlNejEwdndDRlktUHdnRWRkQ1lHY2c2',
    snippet: {
      type: 'textMessageEvent',
      liveChatId: 'KicKGFVDZTRIdUhqVHFnQW5XVU1Kb1VSYmd0QRILbm1mRXhDT00wUjA',
      authorChannelId: 'UCe4HuHjTqgAnWUMJoURbgtA',
      publishedAt: '2023-01-19T06:21:27.25661+00:00',
      hasDisplayContent: true,
      displayMessage: '1222 Bianca Mill Way San Antonio TX',
      textMessageDetails: {
        messageText: '1222 Bianca Mill Way San Antonio TX',
      },
    },
    authorDetails: {
      channelId: 'UCe4HuHjTqgAnWUMJoURbgtA',
      channelUrl: 'http://www.youtube.com/channel/UCe4HuHjTqgAnWUMJoURbgtA',
      displayName: 'Deqlare.',
      profileImageUrl:
        'https://yt3.ggpht.com/ytc/AMLnZu-vE8Lmo4uz322uMNaoULGpwP85cziFQ2p_-N5Mqw=s88-c-k-c0x00ffffff-no-rj',
      isVerified: false,
      isChatOwner: true,
      isChatSponsor: false,
      isChatModerator: false,
    },
  },
  {
    kind: 'youtube#liveChatMessage',
    etag: '4AquNGk70AqCwcus3neTVL_UY58',
    id: 'LCC.CikqJwoYVUNlNEh1SGpUcWdBbldVTUpvVVJiZ3RBEgtubWZFeENPTTBSMBI5ChpDT09OMEpUXzB2d0NGVWVzNVFjZDhpUURYQRIbQ0wyRHlNejEwdndDRlktUHdnRWRkQ1lHY2c3',
    snippet: {
      type: 'textMessageEvent',
      liveChatId: 'KicKGFVDZTRIdUhqVHFnQW5XVU1Kb1VSYmd0QRILbm1mRXhDT00wUjA',
      authorChannelId: 'UCe4HuHjTqgAnWUMJoURbgtA',
      publishedAt: '2023-01-19T06:21:47.35376+00:00',
      hasDisplayContent: true,
      displayMessage: 'Testing overflows',
      textMessageDetails: {
        messageText: 'Testing overflows',
      },
    },
    authorDetails: {
      channelId: 'UCe4HuHjTqgAnWUMJoURbgtA',
      channelUrl: 'http://www.youtube.com/channel/UCe4HuHjTqgAnWUMJoURbgtA',
      displayName: 'Deqlare.',
      profileImageUrl:
        'https://yt3.ggpht.com/ytc/AMLnZu-vE8Lmo4uz322uMNaoULGpwP85cziFQ2p_-N5Mqw=s88-c-k-c0x00ffffff-no-rj',
      isVerified: false,
      isChatOwner: true,
      isChatSponsor: false,
      isChatModerator: false,
    },
  },
  {
    kind: 'youtube#liveChatMessage',
    etag: 'f91RFe6WR3Jk7zkEuQBDYRU9QjE',
    id: 'LCC.CikqJwoYVUNlNEh1SGpUcWdBbldVTUpvVVJiZ3RBEgtubWZFeENPTTBSMBI5ChpDSWJZanFEXzB2d0NGZEsyNVFjZFB3RUg0dxIbQ0wyRHlNejEwdndDRlktUHdnRWRkQ1lHY2c4',
    snippet: {
      type: 'textMessageEvent',
      liveChatId: 'KicKGFVDZTRIdUhqVHFnQW5XVU1Kb1VSYmd0QRILbm1mRXhDT00wUjA',
      authorChannelId: 'UCe4HuHjTqgAnWUMJoURbgtA',
      publishedAt: '2023-01-19T06:22:11.448056+00:00',
      hasDisplayContent: true,
      displayMessage: 'asdads',
      textMessageDetails: {
        messageText: 'asdads',
      },
    },
    authorDetails: {
      channelId: 'UCe4HuHjTqgAnWUMJoURbgtA',
      channelUrl: 'http://www.youtube.com/channel/UCe4HuHjTqgAnWUMJoURbgtA',
      displayName: 'Deqlare.',
      profileImageUrl:
        'https://yt3.ggpht.com/ytc/AMLnZu-vE8Lmo4uz322uMNaoULGpwP85cziFQ2p_-N5Mqw=s88-c-k-c0x00ffffff-no-rj',
      isVerified: false,
      isChatOwner: true,
      isChatSponsor: false,
      isChatModerator: false,
    },
  },
  {
    kind: 'youtube#liveChatMessage',
    etag: 'jEY5V82gbMtX-cvmIGvwtvpB6xg',
    id: 'LCC.CikqJwoYVUNlNEh1SGpUcWdBbldVTUpvVVJiZ3RBEgtubWZFeENPTTBSMBI5ChpDUG1wbjZEXzB2d0NGVlMwNVFjZDM0SUg3dxIbQ0wyRHlNejEwdndDRlktUHdnRWRkQ1lHY2c5',
    snippet: {
      type: 'textMessageEvent',
      liveChatId: 'KicKGFVDZTRIdUhqVHFnQW5XVU1Kb1VSYmd0QRILbm1mRXhDT00wUjA',
      authorChannelId: 'UCe4HuHjTqgAnWUMJoURbgtA',
      publishedAt: '2023-01-19T06:22:11.721599+00:00',
      hasDisplayContent: true,
      displayMessage: 'asd',
      textMessageDetails: {
        messageText: 'asd',
      },
    },
    authorDetails: {
      channelId: 'UCe4HuHjTqgAnWUMJoURbgtA',
      channelUrl: 'http://www.youtube.com/channel/UCe4HuHjTqgAnWUMJoURbgtA',
      displayName: 'Deqlare.',
      profileImageUrl:
        'https://yt3.ggpht.com/ytc/AMLnZu-vE8Lmo4uz322uMNaoULGpwP85cziFQ2p_-N5Mqw=s88-c-k-c0x00ffffff-no-rj',
      isVerified: false,
      isChatOwner: true,
      isChatSponsor: false,
      isChatModerator: false,
    },
  },
  {
    kind: 'youtube#liveChatMessage',
    etag: 'U5NzDIIfXZn44WAm5FGMFrWiuSo',
    id: 'LCC.CikqJwoYVUNlNEh1SGpUcWdBbldVTUpvVVJiZ3RBEgtubWZFeENPTTBSMBI6ChpDTWJjdGFEXzB2d0NGUmUwNVFjZHdUNFB3QRIcQ0wyRHlNejEwdndDRlktUHdnRWRkQ1lHY2cxMA',
    snippet: {
      type: 'textMessageEvent',
      liveChatId: 'KicKGFVDZTRIdUhqVHFnQW5XVU1Kb1VSYmd0QRILbm1mRXhDT00wUjA',
      authorChannelId: 'UCe4HuHjTqgAnWUMJoURbgtA',
      publishedAt: '2023-01-19T06:22:12.074498+00:00',
      hasDisplayContent: true,
      displayMessage: 'asdas',
      textMessageDetails: {
        messageText: 'asdas',
      },
    },
    authorDetails: {
      channelId: 'UCe4HuHjTqgAnWUMJoURbgtA',
      channelUrl: 'http://www.youtube.com/channel/UCe4HuHjTqgAnWUMJoURbgtA',
      displayName: 'Deqlare.',
      profileImageUrl:
        'https://yt3.ggpht.com/ytc/AMLnZu-vE8Lmo4uz322uMNaoULGpwP85cziFQ2p_-N5Mqw=s88-c-k-c0x00ffffff-no-rj',
      isVerified: false,
      isChatOwner: true,
      isChatSponsor: false,
      isChatModerator: false,
    },
  },
];

export default function Chats({ googleToken }: { googleToken: string }) {
  // const [chats, setChats] = useState<LiveChatMessage[]>([]);
  // useEffect(() => {
  //   let interval: NodeJS.Timeout;
  //   const fetchChats = async () => {
  //     const data = await (await fetch(`/api/getChats?token=${googleToken}`)).json();
  //     setChats(data);
  //   };
  //   void fetchChats();
  //   setInterval(async () => void fetchChats(), 15000);
  //
  //   return () => clearInterval(interval);
  // }, [googleToken]);

  const { chatsWithAddress, restChats } = chatsMock.reduceRight(
    (acc, chat) => {
      const { displayMessage } = chat.snippet;
      if (displayMessage.match(addressRegex)) {
        acc.chatsWithAddress.push(chat);
      } else {
        acc.restChats.push(chat);
      }
      return acc;
    },
    { chatsWithAddress: [], restChats: [] } as { chatsWithAddress: LiveChatMessage[]; restChats: LiveChatMessage[] },
  );

  return (
    <section className="flex h-full w-full justify-center gap-10">
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-bold">Chats With Addresses</h2>
        <div className="flex flex-col gap-3 overflow-auto">
          {chatsWithAddress.map((chat, i) => (
            <ChatMessage key={chat.id} chat={chat} isAddress={true} idx={i} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-bold">Chats</h2>
        <div className="flex flex-col gap-3 overflow-auto">
          {restChats.map((chat, i) => (
            <ChatMessage chat={chat} key={chat.id} isAddress={false} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ChatMessage({ chat, isAddress, idx }: { chat: LiveChatMessage; isAddress: boolean; idx: number }) {
  return (
    <div className="relative flex items-center gap-2 border-2 border-dark p-3">
      {idx === 0 && (
        <div className="absolute top-0 right-0 z-[9999]  border-l-2 border-b-2 border-dark bg-yellow-500 p-2">new</div>
      )}
      <div className="h-[50px] w-[50px] overflow-hidden rounded-full">
        <img
          src={chat.authorDetails.profileImageUrl}
          alt={`Image of ${chat.authorDetails.displayName}`}
          className="object-fit h-full w-full object-center"
        />
      </div>
      <div className="flex-1 text-xl">
        <h3 className="font-bold">{chat.authorDetails.displayName}</h3>
        {isAddress ? (
          <a
            rel="noreferrer"
            target="_blank"
            className="underline opacity-100 transition-all hover:opacity-50"
            href={`https://www.google.com/search?q=${chat.snippet.displayMessage}`}>
            {chat.snippet.displayMessage}
          </a>
        ) : (
          <p>{chat.snippet.displayMessage}</p>
        )}
      </div>
    </div>
  );
}
