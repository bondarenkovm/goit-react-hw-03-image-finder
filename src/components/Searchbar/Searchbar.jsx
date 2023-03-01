import { Component } from 'react';
import { Header, Form, Button, Span, Input } from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    imageNane: '',
  };
  handleNameChange = evt => {
    this.setState({ imageNane: evt.currentTarget.value });
  };

  render() {
    const { imageNane } = this.state;
    return (
      <Header>
        <Form>
          <Button type="submit">
            <Span>Search</Span>
          </Button>

          <Input
            type="text"
            value={imageNane}
            name="imageNane"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleNameChange}
          />
        </Form>
      </Header>
    );
  }
}

export { Searchbar };
