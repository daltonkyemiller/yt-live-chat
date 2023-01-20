'use client';

import { signOut } from 'next-auth/react';

export default function SignOutBtn() {
  return (
    <button onClick={() => signOut()} className="text-2xl font-bold underline transition-all hover:opacity-50">
      Sign Out
    </button>
  );
}
