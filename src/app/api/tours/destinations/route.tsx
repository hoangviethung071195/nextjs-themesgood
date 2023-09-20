import destinations from '@/db/destinations.json';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(destinations);
}