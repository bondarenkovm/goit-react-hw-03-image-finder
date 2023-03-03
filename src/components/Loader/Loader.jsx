import { RotatingLines } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

function Loader() {
  return (
    <LoaderWrapper>
      <RotatingLines
        strokeColor="green"
        strokeWidth="5"
        animationDuration="0.75"
        width="80"
        visible={true}
      />
    </LoaderWrapper>
  );
}
export { Loader };
