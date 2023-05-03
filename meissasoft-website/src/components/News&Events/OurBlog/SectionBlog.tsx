import Grid from '@mui/material/Grid';

import { Container, Images, StyledLabel } from './SectionBlog.style';

const SectionBlog = () => {
  const news = [
    {
      img: 'https://tkpro-demos.envalab.com/22/wp-content/uploads/sites/33/2021/11/Image-P7697GN-1024x699.jpg',
      title: 'Everything You Need To Know About Hiring Node.Js Developers',
      read: 'READ MORE',
    },
    {
      img: 'https://tkpro-demos.envalab.com/22/wp-content/uploads/sites/33/2021/11/Image-H3PQ8A2-1024x683.jpg',
      title: 'What Are Design Systems And How Building Frontend Architectures',
      read: 'READ MORE',
    },
    {
      img: 'https://tkpro-demos.envalab.com/22/wp-content/uploads/sites/33/2021/11/Image-P7QTJ8G-1024x683.jpg',
      title: '11 Lessons Learned From The Early Adopters Of Cloud Migration',
      read: 'READ MORE',
    },
  ];

  return (
    <Container container>
      <Grid item md={8}>
        <Grid container spacing={4}>
          {news.map(({ img, title, read }) => (
            <Grid item md={4} sm={4} xs={12} display="flex" flexDirection="column">
              <Images src={img} width={'100%'} height={400} />
              <StyledLabel>{title}</StyledLabel>
              <p>{read}</p>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};
export default SectionBlog;
