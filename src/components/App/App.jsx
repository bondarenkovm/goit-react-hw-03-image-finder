import { Component } from 'react';
import { Container } from './App.styled';
import { Searchbar } from 'components/Searchbar';

class App extends Component {
  // state = {
  //   imageNane: null,
  //   loading: false,
  // };

  // componentDidMount() {
  //   this.setState({ loading: true });
  //   fetch(
  //     'https://pixabay.com/api/?key=32537245-4f388be37c0f6e70af9a9106a&q=cat&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=1'
  //   )
  //     .then(res => res.json())
  //     .then(data => this.setState({ imageNane: data }))
  //     .finally(() => this.setState({ loading: false }));
  // }
  render() {
    // const { imageNane, loading } = this.state;

    return (
      <Container>
        <Searchbar />
        {/* {loading && <div>Loading...</div>}
        {imageNane && <div>Foto</div>} */}
      </Container>
    );
  }
}

export { App };
