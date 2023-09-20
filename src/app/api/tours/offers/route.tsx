import offers from '@/db/offers.json';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(offers);
}