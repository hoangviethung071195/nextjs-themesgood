import { Tour } from '@/backend/models/tour';
import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';

export async function GET() {
  const destination = await (await Tour).findOne({ _id: new ObjectId('651f0170bf9577844e02a8fb') });
  return NextResponse.json(destination);
}