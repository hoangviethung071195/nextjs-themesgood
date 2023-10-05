import { requestJson } from '@/utils/helpers/api';

export async function getFiles(): Promise<{ src: string; }[]> {
  return requestJson('/files');
}
