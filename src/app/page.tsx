'use client';
import Chats from '@/components/Chats';
import SignInBtn from '@/components/SignInBtn';
import useFetch from '@/utils/hooks/useFetch';
import SignOutBtn from '@/components/SignOutBtn';

export default function Home() {
  const { data: googleToken } = useFetch<string>('/api/getGoogleToken');

  return (
    <main
      className={`flex h-screen w-screen flex-col gap-10 p-10 ${
        !googleToken ? 'flex-row items-center justify-center' : ''
      }`}>
      {googleToken ? <SignOutBtn /> : <SignInBtn />}
      {googleToken && <Chats googleToken={googleToken} />}
    </main>
  );
}
