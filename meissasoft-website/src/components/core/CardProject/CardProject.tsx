import Image from 'next/image';

import Rating from '@mui/material/Rating';

import { IProjects } from '@/store/app/types';
import { navigateToLink } from '@/utils/helper';

import {
  StyledDivImageContainer,
  DivWrapper,
  DivLayout,
  H2,
  P,
  P2,
  DivCard,
  Card,
  StyledRatingDiv,
  StyledLink,
  StyledStatus,
} from './CardProject.style';

const CardProject = ({ images, name, description, projectLink, reviewStar, status }: IProjects) => {
  return (
    <Card>
      <DivCard>
        <StyledDivImageContainer>
          <Image
            src={images[0].images.split('?')[0]}
            layout="fill"
            placeholder="blur"
            blurDataURL={`/_next/image?url=${images[0].images.split('?')[0]}&w=16&q=1`}
            loading="lazy"
            objectFit="cover"
          />
        </StyledDivImageContainer>
        <DivWrapper>
          <P2>{name}</P2>
        </DivWrapper>
      </DivCard>
      <DivLayout className="card-back">
        <H2> {name}</H2>
        <P>{description}</P>
        {status === 'completed' ? (
          <StyledRatingDiv>
            <StyledStatus>Client Rating:</StyledStatus>
            <Rating name="simple-controlled" className="rating" value={reviewStar} readOnly />
          </StyledRatingDiv>
        ) : (
          <StyledStatus>Status: {status}</StyledStatus>
        )}
        <StyledLink onClick={() => navigateToLink(projectLink)}>{projectLink}</StyledLink>
      </DivLayout>
    </Card>
  );
};
export default CardProject;
