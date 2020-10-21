import React, { Component } from "react";
// import Badge from "@material-ui/core/Badge";
// import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import Header from "../header/header";
import staticData from "../../staticData";
import "./home.css";

// const StyledBadge = withStyles(theme => ({
//   badge: {
//     right: -3,
//     top: 13,
//     border: `2px solid ${theme.palette.background.paper}`,
//     padding: "0 4px"
//   }
// }))(Badge);

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalItems: staticData
    };
  }

  render() {
    let id = "1234";
    return (
      <div className="container-fluid">
        <div className="row">
          {this.state.totalItems.map(ele => {
            return (
              <div className="col-md-4">
                <div class="card card-container">
                  <img
                    class="card-img-top"
                    src={ele.image}
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h4 class="card-title">{ele.name}</h4>
                    <p class="card-text">{ele.location}</p>
                    <Link to={`/item/${ele.id}`}>
                      <a href="#" class="btn btn-primary">
                        View
                      </a>
                    </Link>
                    &nbsp;
                    <a href="#" class="btn btn-primary">
                      AddTo Cart
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Pagination count={10} />
      </div>
    );
  }
}
