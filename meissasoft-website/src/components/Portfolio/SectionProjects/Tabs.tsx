import * as React from 'react';

import CloudCircleIcon from '@mui/icons-material/CloudCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import LanguageIcon from '@mui/icons-material/Language';
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';
import Tab from '@mui/material/Tab';

import { COLORS } from '@/constants/colors';

import { StyledTabs } from './SectionProjects.styles';

interface IProps {
  setType?: any;
}

export default function IconTabs({ setType }: IProps) {
  const [selected, setSelected] = React.useState<{ type: string; value: number }>({
    type: 'all',
    value: 0,
  });

  const getType = (ind: string): string => {
    const obj = {
      '0': 'all',
      '1': 'web',
      '2': 'mobile',
      '3': 'scrapper',
      '4': 'dev-ops',
    } as Record<any, any>;
    return obj[ind];
  };

  const handleChange = (event: React.SyntheticEvent, value: number) => {
    const type = getType(value.toString());
    setSelected({
      type,
      value,
    });
    setType(type);
  };

  return (
    <StyledTabs
      value={selected.value}
      onChange={handleChange}
      aria-label="icon tabs"
      variant="scrollable"
      scrollButtons="auto"
      allowScrollButtonsMobile
      TabIndicatorProps={{ style: { background: COLORS.THEME_COLOR_BLUE } }}
    >
      <Tab icon={<DashboardIcon />} aria-label="All" label="All" />
      <Tab icon={<DesktopWindowsIcon />} aria-label="favorite" label="Web" />
      <Tab icon={<MobileScreenShareIcon />} aria-label="mobile" label="Mobile" />
      <Tab icon={<LanguageIcon />} aria-label="Scrapper" label="Scrapper" />
      <Tab icon={<CloudCircleIcon />} aria-label="Dev" label="Dev Ops" />
    </StyledTabs>
  );
}
