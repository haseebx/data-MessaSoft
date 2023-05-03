import { Description, Title, DivColoumn } from './SectionBusiness.styles';
type Props = {
  title: string;
  description: string;
};

const ListData = ({ title, description }: Props) => {
  return (
    <DivColoumn>
      <Title style={{ color: 'white' }}>{title}</Title>
      <Description>{description}</Description>
    </DivColoumn>
  );
};
export default ListData;
