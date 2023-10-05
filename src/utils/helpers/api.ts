import { toast } from 'react-toastify';
import { RequestMethod } from '../consts/RequestMethod';

const { API_ENDPOINT } = process.env;

async function request<Result>(url: string, method: RequestMethod = RequestMethod.Get, body?: BodyInit): Promise<Result> {
  const token = '';
  const headers: HeadersInit = {
    Authorization: token,
  };

  if (!(body instanceof FormData)) {
    headers['Content-Type'] = 'application/json';
  }

  const res = await fetch(API_ENDPOINT + url, {
    method,
    body,
    headers
  });

  if (!res.ok) {
    return res.json().then(info => {
      toast.warning(info.message);
      return undefined as Result;
    });
  }

  const contentType = res.headers.get("content-type");
  if (contentType?.includes('application/json'))
    return res.json();
  else
    return res.text() as Result;
}

export function requestJson<Result>(url: string, method?: RequestMethod, body?: Object): Promise<Result> {
  return request<Result>(url, method, JSON.stringify(body));
}

export function requestForm<Result>(url: string, body: FormData): Promise<Result> {
  return request<Result>(url, RequestMethod.Post, body);
}