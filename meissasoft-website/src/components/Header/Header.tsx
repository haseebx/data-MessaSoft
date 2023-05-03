import Image from 'next/image';
import Link from 'next/link';

import React, { useState } from 'react';

import ArrowDownward from '@mui/icons-material/ArrowDropDown';
import CloseIcon from '@mui/icons-material/Close';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { Button, Grid, Stack } from '@mui/material';

import logo from '@/assets/png/logo.png';

import DrawerModule from '../DrawerModule';
import DropDownModule from '../DropDownModule';
import {
  HeaderStyled,
  HoverTypo,
  MediaQueryStyledBox,
  HoverDropDownContainer,
  HoverDropDownContent,
  HoverText,
} from './Header.styles';

export default function Header() {
  const [togglestate, setToggleState] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const onClickDrawer = () => {
    setToggleState(!togglestate);
  };

  const onClickDropDown = (e: any) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseDropDown = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <MediaQueryStyledBox>
        <Grid container height={'10rem'} justifyContent="center" alignItems={'center'}>
          <Grid item md={8} xs={12}>
            <Grid container alignItems="center">
              <Grid item md={3} xs={8} display="flex">
                <Image
                  width="50"
                  height="50"
                  src={logo}
                  placeholder="blur"
                  blurDataURL={`/_next/image?url=${logo}&w=16&q=1`}
                  loading="lazy"
                  objectFit="cover"
                />
                <HeaderStyled>MeissaSoft</HeaderStyled>
              </Grid>
              <Grid item md={8} id="menuitems">
                <Stack id="header" direction="row" spacing={5}>
                  <Link href="/home">
                    <HoverTypo>HOME</HoverTypo>
                  </Link>
                  <Link href="/about">
                    <HoverTypo>ABOUT</HoverTypo>
                  </Link>
                  <HoverDropDownContainer>
                    <HoverTypo>PAGES</HoverTypo>
                    <ArrowDownward />
                    <HoverDropDownContent id="content">
                      <Link href="/services">
                        <HoverText>Services</HoverText>
                      </Link>
                      <Link href="/team">
                        <HoverText>Our Team</HoverText>
                      </Link>
                      <Link href="/portfolio">
                        <HoverText>Portfolio</HoverText>
                      </Link>
                      <Link href="/testimonials">
                        <HoverText>Testimonials</HoverText>
                      </Link>
                    </HoverDropDownContent>
                  </HoverDropDownContainer>
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
              </Grid>
              <Grid item md={1} xs={4} display="flex" justifyContent={'end'}>
                <Grid id="drawer">
                  {['right'].map((anchor) => (
                    <React.Fragment key={anchor}>
                      <Button onClick={onClickDrawer}>
                        <DehazeIcon />
                      </Button>
                    </React.Fragment>
                  ))}
                </Grid>
                <Grid id="menu">
                  <Button onClick={onClickDropDown}>{open ? <CloseIcon /> : <DehazeIcon />}</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <DropDownModule dropDown={open} anchorEl={anchorEl} handleClose={handleCloseDropDown} />
        <DrawerModule togglestate={togglestate} setToggleState={setToggleState} onClose={() => {}} />
      </MediaQueryStyledBox>
    </React.Fragment>
  );
}
