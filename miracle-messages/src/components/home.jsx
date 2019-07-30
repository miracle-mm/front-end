import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import image1 from "../images/matt-collamer.jpg";
import image2 from "../images/steve-knutson.jpg"
import image3 from "../images/john-moeses.jpg"
import image4 from "../images/ali-morshedlou.jpg"

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
        this.props.history.push("/login")
    }
    render() { 
        console.log(this.props);
        return ( 
            <Carousel>
            <div>
                <img src={image1} />
                <p className="legend">Over half a million people are homeless.</p>
            </div>
            <div>
                <img src={image2} />
                <p className="legend">One in five homeless people suffers from untreated severe mental illness.</p>
            </div>
            <div>
                <img src={image3} />
                <p className="legend">The government does not help as much as you think.</p>
            </div>
            
            <div>
                <img  src={image4}  />
                <p className="legend">Help a person experiencing homelessness today!</p>
            </div>
        </Carousel>
         );
    }
}
 
export default Home;