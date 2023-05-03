import dynamic from 'next/dynamic';

const SectionChoose = dynamic(() => import('./SectionChoose'), {
  loading: () => <></>,
});

export default SectionChoose;
