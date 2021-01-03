import React, { Component } from 'react'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import { Button } from '../Button/Buttons';
import "./style.scss";


export class ImageGallery extends React.Component {
    constructor() {
        super();
        this.state = {
          currentIndex: 0,
          items: ["https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg",2,3,4,5]
        };
      }

      slideTo = (i) => this.setState({ currentIndex: i });

      onSlideChanged = (e) => this.setState({ currentIndex: e.item });
  
      slideNext = () => this.setState({ currentIndex: this.state.currentIndex + 1 });
  
      slidePrev = () => this.setState({ currentIndex: this.state.currentIndex - 1 });
  
      renderThumbs = () =>
        <ul className="thumbs__list">{this.state.items.map((item, i) =>
          <li key={i} onClick={() => this.slideTo(i)}><img src={item}></img></li>)}
        </ul>;
  
      renderGallery() {
        const { currentIndex, items } = this.state;
        const style = { width: 925};
        return ( <AliceCarousel
          key={currentIndex}
          disableDotsControls={true}
          disableButtonsControls = {true}
          activeIndex={currentIndex}
          onSlideChanged={this.onSlideChanged}
          infinite={true}
          >
          {items.map((item, i) => <div key={i}><img src={item} style={style}></img></div>) }
          </AliceCarousel>);
    }

    render() {
        return (
            <div>   
              <div>             
                {this.renderGallery() }
                { this.renderThumbs() }   
                <div className="nav__buttons">          
                <Button onClick={() => this.slidePrev()}>Previous</Button>
                <Button onClick={() => this.slideNext()}>Next</Button>
                </div> 
              </div>                
            </div>
        )
    }
}

export default ImageGallery
