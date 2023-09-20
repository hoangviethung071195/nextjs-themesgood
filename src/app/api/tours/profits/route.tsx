import profits from '@/db/profits.json';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(profits);
}