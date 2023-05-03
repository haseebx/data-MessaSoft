import * as React from 'react';
import { memo, useEffect } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { DialogTitle, Grid, IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { navigateToLink } from '@/utils/helper';

import {
  DivWrapper,
  HoverTypo,
  StyledLocationGrid,
  DivService,
  DivTitle,
  DivHeading,
  DivServices,
  DivFollow,
  P1,
  StyledSwipeableDrawer,
} from './DrawerModule.styles';

type Anchor = 'top' | 'left' | 'bottom' | 'right';
type Props = {
  togglestate: boolean;
  setToggleState: any;
  onClose: () => void;
};

function DrawerModule(props: Props) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
    onclose: false,
  });
  const { setToggleState, togglestate } = props;

  const anchorVal = 'right';

  const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    if (open === false) {
      setToggleState(false);
    }
    setState({ ...state, [anchor]: open });
  };
  useEffect(() => {
    toggleDrawer(anchorVal, togglestate)({} as React.KeyboardEvent | React.MouseEvent);
  }, [togglestate]);

  const list = (anchor: Anchor) => (
    <Box
      sx={{
        width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 400,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{ backgroundColor: 'rgba(28,35,71)', color: 'white', height: '100vh' }}
    >
      <DialogTitle id="id">
        <Grid display="flex" alignItems="center">
          <Box flexGrow={2}></Box>
          <Box>
            <IconButton onClick={toggleDrawer(anchor, false)}>
              <CloseIcon style={{ backgroundColor: 'rgba(28,35,71)', color: 'white', marginTop: '5px' }} />
            </IconButton>
          </Box>
        </Grid>
      </DialogTitle>
      <DivTitle>
        <DivHeading>Meissasoft</DivHeading>
        <P1>Customers are not just customers. They are our partners</P1>
      </DivTitle>
      <DivService>Services</DivService>
      <DivServices>
        <List>
          {[
            <HoverTypo>Mobile Development</HoverTypo>,
            <HoverTypo>Web Development</HoverTypo>,
            <HoverTypo>Dev Ops</HoverTypo>,
            <HoverTypo>IoT Development</HoverTypo>,
            <HoverTypo>Desktop App Development</HoverTypo>,
            <HoverTypo>User Interfice Design</HoverTypo>,
          ].map((text, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                {index % 6 === 0 ? (
                  <DoneIcon style={{ color: 'white', fontWeight: 'bolder', width: '17px' }} />
                ) : (
                  <DoneIcon style={{ color: 'white', fontWeight: 'bolder', width: '17px' }} />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </DivServices>
      <Grid style={{ marginLeft: ' 30px ' }}>
        <DivFollow>Follow Us</DivFollow>
        <StyledLocationGrid item md={3} xs={3}>
          <Grid container>
            <Grid item md={2} xs={2} style={{}}>
              <Grid container spacing={1}>
                <Grid item className="icon" xs={12} md={12}>
                  <DivWrapper onClick={() => navigateToLink('https://github.com/meissasoft')}>
                    <GitHubIcon />
                  </DivWrapper>
                </Grid>
                <Grid item className="location" xs={12} md={12}></Grid>
              </Grid>
            </Grid>
            <Grid item md={2} xs={2}>
              <Grid container spacing={1}>
                <Grid item className="icon" xs={12} md={12}>
                  <DivWrapper onClick={() => navigateToLink('https://www.linkedin.com/company/meissasoft/')}>
                    <LinkedInIcon />
                  </DivWrapper>
                </Grid>
                <Grid item className="location" xs={12} md={12}></Grid>
              </Grid>
            </Grid>
            <Grid item md={2} xs={2}>
              <Grid container spacing={1}>
                <Grid item className="icon" xs={12} md={12}>
                  <DivWrapper
                    onClick={() =>
                      navigateToLink(
                        'https://www.facebook.com/pages/category/Product-service/Meissasoft-117991572935084/'
                      )
                    }
                  >
                    <FacebookTwoToneIcon />
                  </DivWrapper>
                </Grid>
                <Grid item className="location" xs={12} md={12}></Grid>
              </Grid>
            </Grid>
          </Grid>
        </StyledLocationGrid>
      </Grid>
    </Box>
  );

  return (
    <div>
      {([anchorVal] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <StyledSwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
              {list(anchor)}
            </Drawer>
          </StyledSwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default memo(DrawerModule);
