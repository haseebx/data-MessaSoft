import Link from 'next/link';

import * as React from 'react';
import { memo } from 'react';

import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import ArrowDropUp from '@mui/icons-material/ArrowDropUp';
import { Grid, Menu, Stack } from '@mui/material';

import { HoverTypo, DivStyledPages, HoverText, DivStyledPagesDropDown } from './DropDownModule.style';

type Props = {
  dropDown: boolean;
  anchorEl: any;
  handleClose: any;
};
function PositionedMenu(props: Props) {
  const { anchorEl, dropDown, handleClose } = props;
  const [openPages, setOpenPages] = React.useState<boolean>(false);

  const togglePages = () => {
    setOpenPages(!openPages);
  };

  return (
    <Grid id="demo-positioned-menu">
      <Grid>
        <Menu
          keepMounted={false}
          PaperProps={{
            style: {
              width: '100%',
              transform: 'translateY(47px)',
              textDecorationColor: '#ff0000',
            },
          }}
          id="demo-positioned-menu"
          anchorEl={anchorEl}
          open={dropDown}
          onClose={handleClose}
        >
          <Stack width={'100%'}>
            <Link href="/home">
              <HoverTypo>HOME</HoverTypo>
            </Link>
            <Link href="/about">
              <HoverTypo>ABOUT</HoverTypo>
            </Link>
            <DivStyledPages>
              <HoverTypo onClick={togglePages}>PAGES</HoverTypo>
              {openPages ? <ArrowDropUp onClick={togglePages} /> : <ArrowDropDown onClick={togglePages} />}
            </DivStyledPages>
            {openPages ? (
              <DivStyledPagesDropDown>
                <Link href="/services">
                  <HoverText>Services</HoverText>
                </Link>
                <Link href="/team">
                  <HoverText>Our Team</HoverText>
                </Link>
                <Link href="/portfolio">
                  <HoverText>PortFolio</HoverText>
                </Link>
                <Link href="/testimonials">
                  <HoverText>Testimonials</HoverText>
                </Link>
              </DivStyledPagesDropDown>
            ) : (
              <></>
            )}
            <Link href="/events">
              <HoverTypo>Events</HoverTypo>
            </Link>
            <Link href="/careers">
              <HoverTypo>Careers</HoverTypo>
            </Link>
            <Link href="/contact-us">
              <HoverTypo>CONTACT</HoverTypo>
            </Link>
          </Stack>
        </Menu>
      </Grid>
    </Grid>
  );
}

export default memo(PositionedMenu);
