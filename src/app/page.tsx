'use client';
import AticleItem from '@/components/articles/article-item';
import LoadingOverlay from '@/components/loading-overlay/LoadingOverlay';
import OfferItem from '@/components/offers/offer-item';
import ProfitItem from '@/components/profit/profit-item';
import Section from '@/components/section/section';
import { getArticles, getDestination, getOffers, getProfits } from '@/services/tours.service';
import { Box } from '@mui/material';
import { PropsWithChildren, useEffect, useState } from 'react';
import { SectionModel } from '../models/Tours';
import styles from './page.module.scss';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [destinations, setDestinations] = useState<SectionModel>();
  const [offers, setOffers] = useState<SectionModel>();
  const [profits, setProfits] = useState<SectionModel>();
  const [articles, setArticles] = useState<SectionModel>();
  useEffect(() => {
    Promise.all([
      getDestination(),
      getOffers(),
      getProfits(),
      getArticles(),
    ]).then(([desRes, offersRes, profitsRes, articlesRes]) => {
      const desList: SectionModel = {
        ...desRes,
        items: desRes.items.map(item => ({
          image: item.image
        }))
      };
      const offersList: SectionModel = {
        ...offersRes,
        items: offersRes.items?.map(item => ({
          image: item.image,
          price: item.price,
          children: <OfferItem key={item.image} title={item.children.title} description='City Tours, Urban' ratingStars={item.children.ratingStars} days={item.children.days} />
        }))
      };

      const profitsList: SectionModel = {
        ...profitsRes,
        items: profitsRes.items?.map(item => ({
          image: item.image,
          children: <ProfitItem key={item.image} title={item.children.title} description={item.children.description}></ProfitItem>
        }))
      };

      const articlesList: SectionModel = {
        ...articlesRes,
        items: articlesRes.items?.map(item => ({
          image: item.image,
          children: <AticleItem key={item.image} date={item.children.date} title={item.children.title} description={item.children.description}></AticleItem>
        }))
      };

      setDestinations(desList);
      setOffers(offersList);
      setProfits(profitsList);
      setArticles(articlesList);
      setLoading(false);
    });
  }, []);

  return (
    <LoadingOverlay loading={loading}>
      <Box className={'bg-light'} style={{ paddingTop: '70px' }}>
        {destinations && <Section info={destinations}></Section>}
        {offers && <Section info={offers}></Section>}
        {profits && <Section info={profits}></Section>}
        <Box component='section' className={styles['bg-section']}></Box>
        {articles && <Section info={articles}></Section>}
      </Box>
    </LoadingOverlay>
  )
}
