import { Substrate, Wrapper, Image } from './styles';
import image from './../../main.png';
import { Title } from '../../components/stateless/title/title';

export const MainPage: React.FC = () => {
  return (
    <Wrapper>
      <Substrate>
        <Image src={image} />
      </Substrate>
      <Title />
    </Wrapper>
  );
};
