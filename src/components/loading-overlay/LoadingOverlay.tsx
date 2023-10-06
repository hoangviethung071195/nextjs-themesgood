import { LayoutContext } from '@/context/layout-context';
import { Box } from '@mui/material';
import { PropsWithChildren, useContext, useEffect } from "react";
import { createPortal } from 'react-dom';
import { BounceLoader } from 'react-spinners';
import s from './loading-overlay.module.scss';

export default function LoadingOverlay(props: PropsWithChildren<{
  loading: boolean;
}>) {
  const { children, loading } = props;
  const { portalEl, hideScroll, showScroll } = useContext(LayoutContext);

  useEffect(() => {
    if (loading) {
      hideScroll();
    } else {
      showScroll();
    }
  }, [loading]);

  return (
    <>
      {!loading && children}
      {portalEl &&
        createPortal(
          <Box className={`${s['loadding-overlay-wrapper']} ${!loading ? s['loaded'] : ''}`}>
            <BounceLoader className={s['bouce-loader-icon']} />
          </Box>,
          portalEl
        )
      }
    </>
  );
}
