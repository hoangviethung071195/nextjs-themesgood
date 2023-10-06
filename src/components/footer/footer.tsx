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
import { Box, Container, Link, List, ListItem } from '@mui/material';
import { useEventListener } from '@react-hooks-library/core';
import { PropsWithChildren, useEffect, useState } from "react";
import Description from '../typography/description/description';
import Title from '../typography/title/title';
import XSText from '../typography/xs-text/xs-text';
import styles from './footer.module.scss';
import { getFiles } from '@/services/files.service';

export default function Footer(props: PropsWithChildren<{ className?: string; }>) {
  const { className } = props;
  const [showBtn, setShowBtn] = useState(false);
  const [files, setFiles] = useState<{ src: string; }[]>([]);

  useEffect(() => {
    checkShowBtn();

    getFiles().then(r => {
      setFiles(r);
    });
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
    <Box component='footer' className={`${className} ${styles['footer']}`}>
      <Container className={styles['top']}>
        <Box component='section'>
          <Title title='Our Awards'></Title>
          <Description className={styles['desc']} description='London is a megalopolis of people, ideas and frenetic energy. The capital and largest city of the United Kingdom.'></Description>
          <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/awards.png" alt="awards" />
        </Box>
        <Box component='section'>
          <Title title='Contact Info'></Title>
          <Description className={styles['desc']} description=''><PhoneIphoneOutlinedIcon></PhoneIphoneOutlinedIcon> 1-567-124-44227</Description>
          <Description className={styles['desc']} description=''><FmdGoodOutlinedIcon></FmdGoodOutlinedIcon> 184 Main Street East Perl Habour 8007</Description>
          <Description className={styles['desc']} description=''><AccessAlarmOutlinedIcon></AccessAlarmOutlinedIcon> Mon - Sat 8.00 - 18.00 Sunday CLOSED</Description>
          <Box className={styles['icon']}>
            <FacebookIcon></FacebookIcon>
            <TwitterIcon></TwitterIcon>
            <YouTubeIcon></YouTubeIcon>
            <LinkedInIcon></LinkedInIcon>
            <InstagramIcon></InstagramIcon>
          </Box>
        </Box>
        <Box component='section'>
          <Title title='Recent Trips'></Title>
          <List className={styles['list-imgs']}>
            {
              files.map(f => (
                <li>
                  <img src={f.src} alt="" />
                </li>
              ))
            }
          </List>
        </Box>
      </Container>
      <Box className={styles['border']}></Box>
      <Container className={styles['bottom']}>
        <Box component='section'>
          <XSText fontWeight='unset' text='© Copyright Grand Tour Theme Demo - Theme by ThemeGoods'></XSText>
        </Box>
        <Box component='section' className={styles['bottom__list']}>
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
        </Box>
      </Container>
      <Box className={styles['to-top'] + ' ' + (showBtn ? styles['show'] : '')} onClick={() => scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>
        <KeyboardArrowUpOutlinedIcon></KeyboardArrowUpOutlinedIcon>
      </Box>
    </Box >
  );
}
