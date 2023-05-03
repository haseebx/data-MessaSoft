import { useState, useEffect } from 'react';

import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';

import CardProject from '@/components/core/CardProject';
import { getAppDataSelector } from '@/store/app';
import { IProjects } from '@/store/app/types';

import { StyledGrid, Heading, StyledDivider } from './SectionProjects.styles';
import IconTabs from './Tabs';

const SectionProjects = () => {
  const { projects } = useSelector(getAppDataSelector);
  const [type, setType] = useState<string>('all');

  const [filtered, setFiltered] = useState<IProjects[]>(projects);

  useEffect(() => {
    setFiltered(projects);
  }, [projects]);

  useEffect(() => {
    if (type === 'all') {
      setFiltered(projects);
      return;
    }
    const temp = [...projects];
    const filter = temp.filter((tem) => tem.type === type);
    setFiltered(filter);
  }, [type]);

  return (
    <StyledGrid container>
      <Grid item md={8} sm={12} xs={12}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Grid item xs={2}>
              <StyledDivider textAlign="right">Portfolio</StyledDivider>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Heading>Featured Projects</Heading>
          </Grid>
          <Grid container display="flex" justifyContent="center">
            <Grid item xs={8} display="flex" justifyContent="center">
              <IconTabs setType={setType} />
            </Grid>
          </Grid>
          <Grid container item xs={12} spacing={4}>
            {filtered.map((dt: IProjects, index) => (
              <Grid item md={4} xs={12} key={`key-${index}`}>
                <CardProject {...dt} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </StyledGrid>
  );
};

export default SectionProjects;
