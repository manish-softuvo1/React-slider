import React from "react";
import { images } from "../fakeDB/data.js"

// Number of Slide to show
const slideToShow = 3;

class ImageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images,
      fadedleft: true,
      fadedright: false,
      start: 0,
      finish: slideToShow,
    }
  }

  leftClick() {
    let start = this.state.start;
    let finish = this.state.finish;
    if (start > 0 && finish > 0) {
      this.setState({
        start: start - slideToShow,
        finish: finish - slideToShow,
      });
    } else {
      this.setState({
        fadedleft: true
      });
    }
    this.setState({
      fadedright: false
    })
  }

  rightClick() {
    let start = this.state.start;
    let finish = this.state.finish;
    if (finish < images.length) {
      this.setState({
        start: start + slideToShow,
        finish: finish + slideToShow,
      });
    } else {
      this.setState({
        fadedright: true
    });
    }
    this.setState({
      fadedleft: false
    }); 
  }
  
  render() {
    var startindex = this.state.start;
    var finishindex = this.state.finish;
    const fadedleft = this.state.fadedleft || startindex <= 0  ? "arrow-left faded-left" : "arrow-left"; 
    const fadedright = this.state.fadedright || finishindex >= images.length ? "arrow-right faded-right" : "arrow-right";
    const boxWidth = Math.floor(100/slideToShow)
    
    return (
      <div className="container">
        <div className="slide-main">
          <div className="slides-outer">
            <div className="slideshow row col">
              {this.state.images
                .slice(startindex, finishindex)
                .map((image, imageIndex) => {
                  return (
                    <div className={`slide-img`} key={imageIndex} style={{width:`${boxWidth}%`}}>
                      <img className="image" src={image} alt="" />
                    </div>
                  );
                })}
            <div
                className={fadedright}
                onClick={this.rightClick.bind(this)}
              ></div>
                 <div
                className={fadedleft}
                onClick={this.leftClick.bind(this)}
                ></div>
            </div>
            </div>
          </div>
        </div>
      );
    }
  };
  
export default  ImageList;