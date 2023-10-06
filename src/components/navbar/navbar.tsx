'use client';

import { pages } from '@/utils/consts/menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import { MouseEvent, PropsWithChildren, useEffect, useRef, useState } from 'react';
import { useScrollDirection } from 'react-use-scroll-direction';
import DropdownList from '../list/list';
import Title from '../typography/title/title';
import XSText from '../typography/xs-text/xs-text';
import styles from './navbar.module.scss';
import { Link } from '@mui/material';

export default function Navbar(props: PropsWithChildren<{ closeMenu(): void, openMenu(): void; }>) {
  const { closeMenu, openMenu } = props;
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const barRef = useRef<HTMLElement | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(true);
  const [bar, setBar] = useState(false);
  const { isScrollingUp, isScrollingDown } = useScrollDirection();

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        setIsIntersecting(true);
      } else {
        setIsIntersecting(false);
      }
    }, {
      root: null,
      threshold: 0
    });

    if (navRef.current) {
      observer.unobserve(navRef.current);
      observer.observe(navRef.current);
    }
  }, []);

  useEffect(() => {
    if (isScrollingUp && !isScrollingDown) {
      setBar(true);
    } else if (!isScrollingUp && isScrollingDown) {
      setBar(false);
    }
  }, [isScrollingUp, isScrollingDown]);

  function handleOpenNavMenu(event: MouseEvent<HTMLElement>) {
    setAnchorElNav(event.currentTarget);
    openMenu();
  };

  function handleCloseNavMenu() {
    setAnchorElNav(null);
    closeMenu();
  };

  return (
    <Box component='nav' ref={navRef} className={styles['wraper']}>
      <AppBar ref={barRef} position="static" id={styles['top-bar']} className={(bar && !isIntersecting ? styles['current-bar'] : '')} style={{
        opacity: (isIntersecting || bar) ? 1 : 0,
        visibility: (isIntersecting || bar) ? 'visible' : 'hidden',
      }} sx={{
        boxShadow: 'none'
      }} >
        <Container>
          <Toolbar>
            <Link
              href='#'
              style={{ flexGrow: 1 }}
            >
              <img src={(bar && !isIntersecting) ? "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/images/logo@2x.png" : "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/images/logo@2x_white.png"} alt="" width="92" height="22" />
            </Link>

            <Box className={styles['menu-icon']} sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                className={styles['responsive-menu']}
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={!!anchorElNav}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                <Box className={styles['close-btn']} onClick={handleCloseNavMenu}>
                  <CloseIcon></CloseIcon>
                </Box>
                {pages.map((page) => (
                  <MenuItem className={styles['menu-item']} key={page.menuName} onClick={handleCloseNavMenu}>
                    <Title title={page.menuName}></Title>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }} className={styles['nav-link']}>
              {pages.map((page) => (
                <Box key={page.menuName} className={styles['nav-link__container']}>
                  <Button
                    className={styles['button']}
                    key={page.menuName}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: '#fff', display: 'block' }}
                  >
                    <XSText text=''>
                      {page.menuName} <KeyboardArrowDownIcon className={styles['nav-link__icon']}></KeyboardArrowDownIcon>
                    </XSText>
                  </Button>
                  <DropdownList items={page.children} className={'hidden animate__animated animate__zoomIn ' + styles['dropdown']}></DropdownList>
                </Box>
              ))}
            </Box>
            <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
