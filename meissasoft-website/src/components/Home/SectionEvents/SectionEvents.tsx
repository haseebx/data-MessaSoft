import Image from 'next/image';
import Link from 'next/link';

import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';

import { getAppDataSelector } from '@/store/app';
import { IEvent } from '@/store/app/types';

import { DivTitle, StyledGrid, Container, Heading, StyledLabel, Span } from './SectionEvents.style';

const SectionEvents = () => {
  const { events } = useSelector(getAppDataSelector);

  return (
    <Container container>
      <StyledGrid item xs={12} style={{ padding: '50px 0px 10px 0px' }}>
        <DivTitle>FROM OUR EVENTS </DivTitle>
      </StyledGrid>
      <StyledGrid item xs={12}>
        <Heading>News And Events</Heading>
      </StyledGrid>
      <Grid item md={8} xs={12}>
        <Grid container spacing={4}>
          {events
            .filter((event: IEvent) => event.isFeatured)
            .sort((a, b) => b.id - a.id)
            .map(({ description, image, id, title }: IEvent) => (
              <Grid item md={4} sm={12} xs={12} display="flex" flexDirection="column" key={id}>
                <div style={{ width: '100%', height: 400, position: 'relative' }}>
                  <Image
                    src={image.split('?')[0]}
                    layout="fill"
                    placeholder="blur"
                    blurDataURL={`/_next/image?url=${image.split('?')[0]}&w=16&q=1`}
                    loading="lazy"
                    objectFit="cover"
                  />
                </div>
                <StyledLabel>{title}</StyledLabel>
                <p style={{ margin: 0 }}>{description}</p>
                <Link href="/events">
                  <Span> R E A D M O R E</Span>
                </Link>
              </Grid>
            ))}
        </Grid>
      </Grid>
    </Container>
  );
};
export default SectionEvents;
