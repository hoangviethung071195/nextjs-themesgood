'use client';
import AccessAlarmOutlinedIcon from '@mui/icons-material/AccessAlarmOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Container } from '@mui/material';
import { useEventListener } from '@react-hooks-library/core';
import { useEffect, useState } from "react";
import Description from '../typography/description/description';
import Title from '../typography/title/title';
import XSText from '../typography/xs-text/xs-text';
import styles from './footer.module.scss';

export default function Footer() {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    checkShowBtn();
  }, []);

  useEventListener('scroll', () => {
    checkShowBtn();
  });

  const checkShowBtn = () => {
    if (scrollY >= 300) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  };

  return (
    <footer className={styles['footer']}>
      <Container className={styles['top']}>
        <section>
          <Title title='Our Awards'></Title>
          <Description className={styles['desc']} description='London is a megalopolis of people, ideas and frenetic energy. The capital and largest city of the United Kingdom.'></Description>
          <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/awards.png" alt="awards" />
        </section>
        <section>
          <Title title='Contact Info'></Title>
          <Description className={styles['desc']} description=''><PhoneIphoneOutlinedIcon></PhoneIphoneOutlinedIcon> 1-567-124-44227</Description>
          <Description className={styles['desc']} description=''><FmdGoodOutlinedIcon></FmdGoodOutlinedIcon> 184 Main Street East Perl Habour 8007</Description>
          <Description className={styles['desc']} description=''><AccessAlarmOutlinedIcon></AccessAlarmOutlinedIcon> Mon - Sat 8.00 - 18.00 Sunday CLOSED</Description>
          <div className={styles['icon']}>
            <FacebookIcon></FacebookIcon>
            <TwitterIcon></TwitterIcon>
            <YouTubeIcon></YouTubeIcon>
            <LinkedInIcon></LinkedInIcon>
            <InstagramIcon></InstagramIcon>
          </div>
        </section>
        <section>
          <Title title='Recent Trips'></Title>
          <ul className={styles['list-imgs']}>
            <li>
              <img src="https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg" alt="28760131762_e4a64b20c4_q" />
            </li>
            <li>
              <img src="https://live.staticflickr.com/7519/27308262031_a6ebf0572e_q.jpg" alt="28760131762_e4a64b20c4_q" />
            </li>
            <li>
              <img src="https://live.staticflickr.com/7160/27287965356_60355f51d7_q.jpg" alt="28760131762_e4a64b20c4_q" />
            </li>
            <li>
              <img src="https://live.staticflickr.com/7365/27138570412_d25002a5c9_q.jpg" alt="28760131762_e4a64b20c4_q" />
            </li>
            <li>
              <img src="https://live.staticflickr.com/7543/26520497604_1df03a02bc_q.jpg" alt="28760131762_e4a64b20c4_q" />
            </li>
            <li>
              <img src="https://live.staticflickr.com/7502/27012097142_f1511b67bc_q.jpg" alt="28760131762_e4a64b20c4_q" />
            </li>
          </ul>
        </section>
      </Container>
      <div className={styles['border']}></div>
      <Container className={styles['bottom']}>
        <section>
          <XSText fontWeight='unset' text='© Copyright Grand Tour Theme Demo - Theme by ThemeGoods'></XSText>
        </section>
        <section className={styles['bottom__list']}>
          <ul>
            <li>
              <a href="#">
                <XSText fontWeight='unset' text='Home'></XSText>
              </a>
            </li>
            <li>
              <a href="#">
                <XSText fontWeight='unset' text='Tours'></XSText>
              </a>
            </li>
            <li>
              <a href="#">
                <XSText fontWeight='unset' text='Blog'></XSText>
              </a>
            </li>
            <li>
              <a href="#">
                <XSText fontWeight='unset' text='Purchase Theme'></XSText>
              </a>
            </li>
          </ul>
        </section>
      </Container>
      <div className={styles['to-top'] + ' ' + (showBtn ? styles['show'] : '')} onClick={() => {
        scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }}>
        <KeyboardArrowUpOutlinedIcon></KeyboardArrowUpOutlinedIcon>
      </div>
    </footer >
  );
}
