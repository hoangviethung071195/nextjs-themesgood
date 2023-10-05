import { Tour } from '@/backend/models/tour';
import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';

export async function GET() {
  const profits = await (await Tour).findOne({ _id: new ObjectId('651f01ebbf9577844e02a8fd') });
  return NextResponse.json(profits);
}