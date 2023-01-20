'use client';
import { signIn } from 'next-auth/react';

export default function SignInBtn() {
  return (
    <button onClick={() => signIn('google')} className="text-2xl font-bold underline transition-all hover:opacity-50">
      Sign in via Major Tech Corp, Youtube(Google)
    </button>
  );
}
