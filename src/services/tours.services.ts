import { ArticleModel, DestinationModel, OfferModel, ProfitModel } from '@/models/Tours';
export async function getDestination(): Promise<DestinationModel> {
  return fetch(window.location.href + '/api/tours/destinations')
    .then(r => r.json())
    .then(r => {
      return r;
    });
}

export async function getOffers(): Promise<OfferModel> {
  return fetch(window.location.href + '/api/tours/offers')
    .then(r => r.json())
    .then(r => {
      return r;
    });
}

export async function getProfits(): Promise<ProfitModel> {
  return fetch(window.location.href + '/api/tours/profits')
    .then(r => r.json())
    .then(r => {
      return r;
    });
}

export async function getArticles(): Promise<ArticleModel> {
  return fetch(window.location.href + '/api/tours/articles')
    .then(r => r.json())
    .then(r => {
      return r;
    });
}