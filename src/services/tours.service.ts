import { ArticleModel, DestinationModel, OfferModel, ProfitModel } from '@/models/Tours';
import { requestJson } from '@/utils/helpers/api';

function tourRequestJson<Result>(route: string) {
  const tourEndPoint = '/tours';
  return requestJson<Result>(tourEndPoint + '/' + route);
}

export async function getDestination(): Promise<DestinationModel> {
  return tourRequestJson<DestinationModel>('destinations');
}

export async function getOffers(): Promise<OfferModel> {
  return tourRequestJson<DestinationModel>('offers');
}

export async function getProfits(): Promise<ProfitModel> {
  return tourRequestJson<DestinationModel>('profits');
}

export async function getArticles(): Promise<ArticleModel> {
  return tourRequestJson<DestinationModel>('articles');
}