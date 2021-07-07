import React, { Component } from "react";

import CropService from "../Services/CropService";

class SellCrop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      

      cropId: "",
      farmerId: "",
      cropName: "",
      farmerName: "",
      price: "",
    };

    this.changeFarmerNameHandler = this.changeFarmerNameHandler.bind(this);

    this.changeeCropIdHandler = this.changeeCropIdHandler.bind(this);

    this.changePriceHandler = this.changePriceHandler.bind(this);

    this.changeCropNameHandler = this.changeCropNameHandler.bind(this);
    this.changeFarmerIdHandler = this.changeFarmerIdHandler.bind(this);

    this.sellCrop = this.sellCrop.bind(this);
  }

  sellCrop = (e) => {
    let crop = {
      farmerName: this.state.farmerName,
      cropName: this.state.cropName,
      farmerId: this.state.farmerId,
      cropId: this.state.cropId,
      price: this.state.price,
    };

    e.preventDefault();

    console.log("crop =>" + JSON.stringify(crop));

    CropService.sellCrop(crop).then((res) => {
      this.props.history.push("/crop");
    });

    // step 5
  };

  changeFarmerNameHandler = (event) => {
    this.setState({ farmerName: event.target.value });
  };

  changeFarmerIdHandler = (event) => {
    this.setState({ farmerId: event.target.value });
  };

  changeeCropIdHandler = (event) => {
    this.setState({ cropId: event.target.value });
  };

  changeCropNameHandler = (event) => {
    this.setState({ cropName: event.target.value });
  };

  changePriceHandler = (event) => {
    this.setState({ price: event.target.value });
  };

  cancel() {
    this.props.history.push("/crop");
  }

  render() {
    return (
      <div>
        <br></br>

        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3> Sell Crop </h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> Crop Id: </label>

                    <input
                      placeholder="cropId"
                      name="cropId"
                      className="form-control"
                      value={this.state.cropId}
                      onChange={this.changeeCropIdHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label> Farmer Id: </label>

                    <input
                      placeholder="farmerId"
                      name="farmerId"
                      className="form-control"
                      value={this.state.farmerId}
                      onChange={this.changeFarmerIdHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label> Crop name: </label>

                    <input
                      placeholder="cropName"
                      name="cropName"
                      className="form-control"
                      value={this.state.cropName}
                      onChange={this.changeCropNameHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label> Farmer Name: </label>

                    <input
                      placeholder="farmerName"
                      name="farmerName"
                      className="form-control"
                      value={this.state.farmerName}
                      onChange={this.changeFarmerNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Price: </label>

                    <input
                      placeholder="price"
                      name="price"
                      className="form-control"
                      value={this.state.price}
                      onChange={this.changePriceHandler}
                    />
                  </div>

                  <button className="btn btn-success" onClick={this.sellCrop}>
                    Sell Crop
                  </button>

                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SellCrop;