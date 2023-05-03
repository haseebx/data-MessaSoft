import { useRouter } from 'next/router';

import { Grid } from '@mui/material';

import Error404Svg from '@/assets/svg/Error404';
import { COLORS } from '@/constants/colors';

/**
 *
 * @returns Error404 page
 */
export default function Error404() {
  const router = useRouter();

  const goHome = () => {
    router.push('/');
  };

  return (
    <Grid container display="flex" justifyContent="center" height="100vh" alignItems="center">
      <Grid item md={8} xs={12}>
        <Grid container>
          <Grid item md={6} xs={12} position="relative" width="100%" height={450}>
            <Error404Svg />
          </Grid>
          <Grid item md={6} xs={12} display="flex" justifyContent="center" direction="column">
            <h1 style={{ margin: 0 }}>Page Not Found</h1>
            <p style={{ margin: 0 }}>The Page You are looking for does not exists.</p>
            <button
              onClick={goHome}
              style={{
                backgroundColor: COLORS.PINK_200,
                padding: 15,
                color: 'white',
                outline: 'none',
                border: 'none',
                width: 100,
                borderRadius: 5,
                marginTop: 10,
                cursor: 'pointer',
              }}
            >
              Go Home
            </button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
