'use client';
import Chats from '@/components/Chats';
import SignInBtn from '@/components/SignInBtn';
import useFetch from '@/utils/hooks/useFetch';

export default function Home() {
  const { data: googleToken } = useFetch<string>('/api/getGoogleToken');

  return (
    <main
      className={`flex h-screen w-screen flex-col gap-10 p-10 ${
        !googleToken ? 'flex-row items-center justify-center' : ''
      }`}>
      <SignInBtn />
      {googleToken && <Chats googleToken={googleToken} />}
    </main>
  );
}
