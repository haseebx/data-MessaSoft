import Image from 'next/image';

import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';

import { getAppDataSelector } from '@/store/app';
import { IEvent } from '@/store/app/types';

import {
  StyledGrid1,
  Container,
  StyledLabel,
  Span1,
  StyledImageContainer,
  StyledGrid,
  StyledDivider,
} from './SectionViewed.styles';

const SectionViewed = () => {
  const { events } = useSelector(getAppDataSelector);
  let data = [...events];
  data = data.sort((a, b) => b.id - a.id);
  return (
    <Container container>
      <Grid item md={8} xs={12}>
        <StyledGrid1 container>
          <Grid item xs={4}>
            <StyledDivider>Trending News & Events</StyledDivider>
          </Grid>
        </StyledGrid1>
        {data.map(({ description, title, image }: IEvent, index) => (
          <Grid container spacing={4} padding={3} key={`key-${index}`}>
            <Grid item md={4} sm={4}>
              <StyledImageContainer>
                <Image
                  src={image.split('?')[0]}
                  layout="fill"
                  placeholder="blur"
                  blurDataURL={`/_next/image?url=${image.split('?')[0]}&w=16&q=1`}
                  loading="lazy"
                  objectFit="cover"
                />
              </StyledImageContainer>
            </Grid>
            <StyledGrid item md={8} sm={8} display="flex" flexDirection="column">
              <StyledLabel>{title}</StyledLabel>
              <Span1>{description}</Span1>
            </StyledGrid>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
export default SectionViewed;
