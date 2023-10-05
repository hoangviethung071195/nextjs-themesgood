import { File } from '@/backend/models/file';
import { NextResponse } from 'next/server';

export async function GET() {
  const files = await (await File).find().toArray();
  return NextResponse.json(files);
}