import { Divider, Grid, Typography } from '@mui/material';

import { H3 } from './Industry.style';

type IFProp = { heading: string; para: string };
const IndustryFeatures = ({ heading, para }: IFProp) => {
  return (
    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
      <Typography>
        <H3>{heading}</H3>
        <p>{para}</p>
      </Typography>
      <Divider />
    </Grid>
  );
};
export default IndustryFeatures;
