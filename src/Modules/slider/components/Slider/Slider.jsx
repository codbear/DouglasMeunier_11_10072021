import React from 'react';
import PropTypes from 'prop-types';

import ChevronLeft from '../../images/ChevronLeft.svg';
import ChevronRight from '../../images/ChevronRight.svg';
import './Slider.scss';

class Slider extends React.Component {
  static propTypes = {
    imagesUrl: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      imageIndex: 0,
    };

    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  goToImage(newIndex) {
    const lastIndex = this.props.imagesUrl.length - 1;

    if (newIndex < 0) {
      this.setState({ imageIndex: lastIndex });
      return;
    }

    if (newIndex > lastIndex) {
      this.setState({ imageIndex: 0 });
      return;
    }

    this.setState({ imageIndex: newIndex });
  }

  handlePrevious() {
    this.goToImage(this.state.imageIndex - 1);
  }

  handleNext() {
    this.goToImage(this.state.imageIndex + 1);
  }

  handleKeyUp(event) {
    const keyToHandler = {
      default() {},
      ArrowRight: this.handleNext,
      ArrowLeft: this.handlePrevious,
    };

    keyToHandler[event.key] ? keyToHandler[event.key]() : keyToHandler.default();
  }

  render() {
    const { imagesUrl } = this.props;
    const currentPosition = this.state.imageIndex + 1;
    const totalImages = imagesUrl.length;

    return (
      <div className="Slider" onKeyUp={this.handleKeyUp} tabIndex={0}>
        <div className="Slider_wrapper">
          <img src={imagesUrl[this.state.imageIndex]} alt="" />
          {totalImages > 1 && (
            <div className="Slider_navigation">
              <img
                src={ChevronLeft}
                alt="Image précédente"
                onClick={this.handlePrevious}
                className="Slider_navigation_previous"
              />
              <div className="Slider_navigation_position">{`${currentPosition}/${totalImages}`}</div>
              <img
                src={ChevronRight}
                alt="Image suivante"
                onClick={this.handleNext}
                className="Slider_navigation_next"
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Slider;
