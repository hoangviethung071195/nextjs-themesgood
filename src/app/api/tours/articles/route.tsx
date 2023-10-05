import { Tour } from '@/backend/models/tour';
import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';

export async function GET() {
  const articles = await (await Tour).findOne({ _id: new ObjectId('651f0116bf9577844e02a8fa') });
  return NextResponse.json(articles);
}