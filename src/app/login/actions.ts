'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { COOKIE_NAME, PASSWORD } from '@/lib/auth';

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    const password = formData.get('password');

    if (password === PASSWORD) {
      cookies().set(COOKIE_NAME, 'true', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: '/',
      });
      
      const redirectTo = formData.get('redirect_to')?.toString() || '/';
      redirect(redirectTo);

    } else {
      return 'Senha incorreta. Tente novamente.';
    }
  } catch (error) {
    if (error instanceof Error && error.message.includes('NEXT_REDIRECT')) {
      throw error;
    }
    console.error('Authentication error:', error);
    return 'Ocorreu um erro inesperado. Tente novamente mais tarde.';
  }
}
