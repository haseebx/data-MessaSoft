import Image from 'next/image';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';

import { ITeam } from '@/store/app/types';
import { navigateToLink } from '@/utils/helper';

import { DivWrapper, DivLayout, P1, P, P2, DivCard, Card } from './CardTeam.style';

const CardTeam = ({ description, designation, githubLink, image, linkedinLink, name }: ITeam) => {
  return (
    <Card>
      <DivCard>
        <Image
          src={image.split('?')[0]}
          layout="fill"
          placeholder="blur"
          blurDataURL={`/_next/image?url=${image.split('?')[0]}&w=16&q=1`}
          loading="lazy"
          objectFit="cover"
        />
        <DivWrapper>
          <P2>{name}</P2>
          <P1>{designation}</P1>
        </DivWrapper>
      </DivCard>
      <DivLayout className="card-back">
        <P>{description}</P>
        <div>
          <span>
            <GitHubIcon onClick={() => navigateToLink(githubLink)} />
          </span>
          <span>
            <LinkedIn onClick={() => navigateToLink(linkedinLink)} style={{ marginTop: 15 }} />
          </span>
        </div>
      </DivLayout>
    </Card>
  );
};
export default CardTeam;
