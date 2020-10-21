import React, { Component } from "react";
import ReactDOM from "react-dom";
import Grid from "@material-ui/core/Grid";
import "react-image-gallery/styles/css/image-gallery.css";

import MyImageGallery from "./imageGallery";

export default class ImageComponent extends Component {
  render() {
    return (
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <MyImageGallery />
        </Grid>
        <Grid container spacing={2} item xs={6} direction="column">
          <Grid item>
            <div id="myPortal" />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
