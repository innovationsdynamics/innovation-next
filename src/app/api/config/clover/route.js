import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(process.env.CLOVER_PUBLIC_KEY || process.env.NEXT_PUBLIC_CLOVER_PUBLIC_KEY || '');
}
