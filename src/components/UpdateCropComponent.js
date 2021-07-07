import React, { Component } from "react";
import CropService from "../Services/CropService";

class UpdateCropComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      cropId: "",
      farmerId: "",
      cropName: "",
      farmerName: "",
      price: "",
    };
    this.changeCropIdHandler = this.changeCropIdHandler.bind(this);
    this.changeFarmerIdHandler = this.changeFarmerIdHandler.bind(this);
    this.changeFarmerNameHandler = this.changeFarmerNameHandler.bind(this);
    this.changeCropNameHandler = this.changeCropNameHandler.bind(this);
    this.changePriceHandler = this.changePriceHandler.bind(this);
    this.updateCrop = this.updateCrop.bind(this);
  }
  componentDidMount() {
    CropService.getCropById(this.state.id).then((res) => {
      let crop = res.data;
      this.setState({
        cropId: crop.cropId,
        farmerId: crop.farmerId,
        cropName: crop.cropName,
        farmerName: crop.farmerName,
        price: crop.price,
      });
    });
  }
  updateCrop = (e) => {
    e.preventDefault();

    let crop = {
      cropId: this.state.cropId,
      farmerId: this.state.farmerId,
      farmerName: this.state.farmerName,
      cropName: this.state.cropName,
      price: this.state.price,
    };
    console.log("crop => " + JSON.stringify(crop));
    console.log("id => " + JSON.stringify(this.state.id));
    CropService.updateCrop(crop, this.state.id).then((res) => {
      this.props.history.push("/crop");
    });
  };
  changeCropIdHandler = (event) => {
    // eslint-disable-next-line no-restricted-globals
    this.setState({ cropId: event.target.value });
  };

  changeFarmerIdHandler = (event) => {
    // eslint-disable-next-line no-restricted-globals
    this.setState({ farmerId: event.target.value });
  };
  changeFarmerNameHandler = (event) => {
    // eslint-disable-next-line no-restricted-globals
    this.setState({ farmerName: event.target.value });
  };
  changeCropNameHandler = (event) => {
    // eslint-disable-next-line no-restricted-globals
    this.setState({ cropName: event.target.value });
  };

  changePriceHandler = (event) => {
    // eslint-disable-next-line no-restricted-globals
    this.setState({ price: event.target.value });
  };

  cancel() {
    this.props.history.push("/crop");
  }

  render() {
    return (
      <div className="crop">
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Update Crop Details</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> Crop Id: </label>
                    <input
                      placeholder="Crop Id"
                      name="cropId"
                      className="form-control"
                      value={this.state.cropId}
                      onChange={this.changeCropIdHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Farmer Id: </label>
                    <input
                      placeholder="Farmer Id"
                      name="farmerId"
                      className="form-control"
                      value={this.state.farmerId}
                      onChange={this.changeFarmerIdHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Farmer Name: </label>
                    <input
                      placeholder="Farmer Name"
                      name="farmerName"
                      className="form-control"
                      value={this.state.farmerName}
                      onChange={this.changeFarmerNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Crop Name: </label>
                    <input
                      placeholder="Crop Name"
                      name="cropName"
                      className="form-control"
                      value={this.state.cropName}
                      onChange={this.changeCropNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Price: </label>
                    <input
                      placeholder="Price"
                      name="price"
                      className="form-control"
                      value={this.state.price}
                      onChange={this.changePriceHandler}
                    />
                  </div>

                  <button className="btn btn-success" onClick={this.updateCrop}>
                    Update
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

export default UpdateCropComponent;