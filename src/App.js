import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem';
import Button from './components/Button';
import Modal from './components/Modal';

import { fetchImages } from './services/pixabayApi';

class App extends Component {
  state = { 
    images: [], 
    query: 'moto', 
    page: 1,
    showModal: false,
    largeImage: null,
  };

  componentDidMount() {
    fetchImages(this.state.query, this.state.page).then(images =>
      this.setState({ images: images }),
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.getImages();
    }
  }

  handleSubmit = newQuery => {
    this.setState({ images: [], query: newQuery, page: 1 });
  };

  getImages = () => {
    fetchImages(this.state.query, this.state.page, 5).then(images =>
      this.setState(prevState => ({
        images: [...prevState.images, ...images],
        page: prevState.page + 1,
      })),
    );
  };

  detectModalImage = url => {
    console.log(url);
    this.setState({ largeImage: url });
    console.log(this.state.largeImage);
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };


  render() {
    const { showModal, images, isLoading } = this.state;
    const shouldRenderLoadMoreButton = images.length > 0 && !isLoading;

    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery>
          {this.state.images.map(image => (
            <ImageGalleryItem key={image.id} image={image} />
          ))}

        </ImageGallery>
               {shouldRenderLoadMoreButton && <Button onLoadMore={this.getImages} />}
        
        {showModal && (
          <Modal onClose={this.toggleModal} url={this.state.largeImage} />
        )}
      </div>
    );
  }
}

export default App;
