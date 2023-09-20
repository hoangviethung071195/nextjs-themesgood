'use client';
import ImageCard from '@/components/card/card';
import SectionTitle from '@/components/title/section-title';
import { Container, SxProps, Theme } from '@mui/material';
import { CSSProperties, PropsWithChildren } from 'react';
import styles from './section.module.scss';

export default function Section(props: PropsWithChildren<{
  info: {
    title: string;
    subTitle: string;
    cardMediaClass?: string;
    cardMediaStyle?: SxProps<Theme>;
    sectionStyle?: CSSProperties;
    items: {
      image: string;
      title?: string;
      price?: string;
      children?: React.ReactNode;
    }[];
  };
}>) {

  const {
    title,
    subTitle,
    items,
    cardMediaClass,
    cardMediaStyle,
    sectionStyle
  } = props.info;

  return (
    <section className={styles["section"]} style={sectionStyle}>
      <Container>
        <SectionTitle title={title} subTitle={subTitle}></SectionTitle>
        <div className={styles["section__card"]}>
          {
            items.map(item => (
              <ImageCard key={item.image} item={item} cardMediaClass={cardMediaClass} cardMediaStyle={cardMediaStyle}>
                {item.children}
              </ImageCard>
            ))
          }
        </div>

      </Container>
    </section>
  );
}
