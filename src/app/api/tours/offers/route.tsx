import { Tour } from '@/backend/models/tour';
import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';

export async function GET() {
  const offers = await (await Tour).findOne({ _id: new ObjectId('651f01e4bf9577844e02a8fc') });
  return NextResponse.json(offers);
}