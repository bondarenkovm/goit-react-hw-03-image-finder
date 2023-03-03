import { Component } from 'react';
import PropTypes from 'prop-types';
import { Img } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
  //

  render() {
    const { alt, smallImage, bigPicture } = this.props;
    return (
      <>
        <Img src={smallImage} alt={alt} />
      </>
    );
  }
}
ImageGalleryItem.propTypes = {
  bigPicture: PropTypes.string.isRequired,
  smallImage: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
export { ImageGalleryItem };
