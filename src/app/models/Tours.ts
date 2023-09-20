import { SxProps, Theme } from '@mui/material';
import { CSSProperties, ReactNode } from 'react';

export interface DestinationModel extends TourModel { }
export interface OfferModel extends TourModel { }
export interface ProfitModel extends TourModel { }
export interface ArticleModel extends TourModel { }

export interface TourModel extends ItemModel {
  items: {
    image: string,
    price?: string,
    children: {
      title: string,
      description: string,
      ratingStars: number,
      days: number,
      date: string,
    },
  }[],
}

export interface SectionModel extends ItemModel {
  items: {
    image: string,
    children?: ReactNode;
  }[],
}

interface ItemModel {
  title: string,
  subTitle: string,
  cardMediaClass?: string,
  cardMediaStyle?: SxProps<Theme>,
  sectionStyle?: CSSProperties,
  items: {
    image: string,
    title?: string,
  }[],
}