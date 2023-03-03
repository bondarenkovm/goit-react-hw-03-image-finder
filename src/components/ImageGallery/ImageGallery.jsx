import { Component } from 'react';
import PropTypes from 'prop-types';
import { List } from './ImageGallery.styled';
import { fetchPixabay } from 'services/fetchPixabayAPI';

class ImageGallery extends Component {
  state = {
    page: 1,
    // value: '',
  };
  async componentDidUpdate(prevProps, prevState) {
    const { value } = this.props;
    const { page } = this.state;
    // console.log(value);
    if (prevProps.value !== value) {
      console.log('Змінився Props');
      const { hits, totalHits } = await fetchPixabay(value, page);
      console.log(hits);
      console.log(totalHits);
    }
  }

  render() {
    return <List>Набіріз зображеннями</List>;
  }
}

ImageGallery.propTypes = {
  value: PropTypes.string.isRequired,
};
export { ImageGallery };
