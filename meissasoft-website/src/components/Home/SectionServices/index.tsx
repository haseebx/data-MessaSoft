import dynamic from 'next/dynamic';

const Services = dynamic(() => import('./SectionServices'), {
  loading: () => <></>,
  ssr: false,
});

export default Services;
