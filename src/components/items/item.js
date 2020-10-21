import React, { Component } from "react";
import { Link } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import PriceComponent from "./priceComponent/priceComponent";
import SellerDetails from "./sellerDetails/sellerDetails";
import ProductDetails from "./productDetails/productDetails";
import ImageComponent from "./imageComponents/index";

import "./item.css";

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSmallImage: [1, 2, 3]
    };
  }

  componentDidMount() {
    let carrosil = document.getElementById("myCarousel");
    console.log(carrosil, "carrosilcarrosil");
    // carrosil.carousel("pause");
    const {
      match: { params }
    } = this.props;
    console.log(params.itemId, "paarammss");
  }
  smallImageClick(e) {
    e.preventDefault();
    console.log("clickedd");
  }

  render() {
    const images = [
      {
        original:
          "https://images.all-free-download.com/images/graphicthumb/agriculture_bread_cereals_214426.jpg",
        thumbnail:
          "https://images.all-free-download.com/images/graphicthumb/agriculture_bread_cereals_214426.jpg"
      },
      {
        original: "https://s.w-x.co/in-agro_waste.jpg",
        thumbnail: "https://s.w-x.co/in-agro_waste.jpg"
      },
      {
        original:
          "https://media.fromthegrapevine.com/assets/images/2016/5/rice-paddie-0523.jpg.824x0_q71_crop-scale.jpg",
        thumbnail:
          "https://media.fromthegrapevine.com/assets/images/2016/5/rice-paddie-0523.jpg.824x0_q71_crop-scale.jpg"
      }
    ];
    return (
      <div className="container-fluid">
        <Link to="/home">
          <button type="button" className="btn btn-light back-button">
            <i class="fa fa-arrow-left" aria-hidden="true"></i>
          </button>
        </Link>
        <div className="row main-row">
          <div className="col-sm-8">
            <div className="image-pane">
              <ImageGallery items={images} />
              {/* <div className="row">
                <img
                  className="product-large-image"
                  src="https://www.drivespark.com/images/2020-05/bmw-8-series-gran-coupe-exterior-11.jpg"
                  alt="Card image cap"
                />
              </div> */}
              {/* <div className="row">
                {this.state.showSmallImage.map(image => {
                  return (
                    <div class="flex-container">
                      <img
                        className="product-small-image"
                        src="https://www.drivespark.com/images/2020-05/bmw-8-series-gran-coupe-exterior-11.jpg"
                        alt="image"
                        onClick={this.smallImageClick.bind(this)}
                      />
                    </div>
                  );
                })}
              </div> */}
            </div>
            <br />
            <ProductDetails />
            <br />
          </div>

          <div className="col-sm-4">
            <PriceComponent />
            <br />
            <SellerDetails />
          </div>
        </div>
        <br />
      </div>
    );
  }
}
