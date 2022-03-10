import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { retrieveBikes } from "../actions/bikes"

class BikesList extends Component {
    constructor(props){
        super(props);
        this.setCurrentBike = this.setCurrentBike.bind(this);
        this.state = {
            currentBike: null,
            currentIndex: 0
        };
    }

    componentDidMount(){
        this.props.retrieveBikes();
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.currentBike != this.props.bikes[0])
        this.props.bikes?.length > 0 && this.setState({currentBike: this.props.bikes[0]});
    }

    setCurrentBike(bike, index) {
        this.setState({
            currentBike: bike,
            currentIndex: index
        });
    }

    render () {
        const { currentBike, currentIndex } = this.state;
        const { bikes, loginInfo } = this.props;
        if(!loginInfo.isLoggedIn){
          return <Redirect to="/"/>
        }

        return (
        <div className="list row">
        <div className="col-md-6">
          <h4>Bikes List</h4>

          <ul className="list-group">
            {bikes &&
              bikes.map((bike, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index == currentIndex ? "active" : "")
                  }
                  onClick={() => this.setCurrentBike(bike, index)}
                  key={index}
                >
                  {bike.productName}
                </li>
              ))}
          </ul>
          </div>

          <div className="col-md-6">
          {currentBike && (
            <div>
              <h4>Bike</h4>
              <div>
                <label>
                  <strong>Name:</strong>
                </label>{" "}
                {currentBike.productName}
              </div>
              <div>
                <label>
                  <strong>Brand:</strong>
                </label>{" "}
                {currentBike.brand.brandName}
              </div>
              <div>
                <label>
                  <strong>Category:</strong>
                </label>{" "}
                {currentBike.category.categoryName}
              </div>
            </div>
          )}
        </div>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        bikes: state.bikes,
        loginInfo: state.login
    };
};

export default connect(mapStateToProps, {
    retrieveBikes,
})(BikesList);