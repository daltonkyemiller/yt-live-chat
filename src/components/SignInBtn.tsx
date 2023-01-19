'use client';
import { signIn } from 'next-auth/react';

export default function SignInBtn() {
  return (
    <button onClick={() => signIn()} className="text-2xl font-bold underline transition-all hover:opacity-50">
      Sign in with Google
    </button>
  );
}
