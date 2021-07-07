import React, { Component } from "react";
import CropService from "../Services/CropService";

class ViewCropComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      crop: {},
    };
  }

  componentDidMount() {
    CropService.getCropById(this.state.id).then((res) => {
      this.setState({ crop: res.data });
    });
  }

  goBack() {
    this.props.history.push("/crop");
  }

  render() {
    return (
      <div className="crop-view">
        <br></br>

        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center"> View Crop Details</h3>
          <table className="table table-striped table-bordered">
            <tbody>
              <tr>
                <td>Crop Id</td> <td> {this.state.crop.cropId} </td>
              </tr>

              <tr>
                <td>Farmer Id</td> <td> {this.state.crop.farmerId} </td>
              </tr>

              <tr>
                <td> Crop Name</td> <td> {this.state.crop.cropName}</td>
              </tr>

              <tr>
                <td> Farmer Name</td> <td> {this.state.crop.farmerName}</td>
              </tr>

              <tr>
                <td> Price</td> <td> {this.state.crop.price}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <button
          className="btn btn-danger"
          onClick={this.goBack.bind(this)}
          style={{ marginLeft: "10px" }}
        >
          Back
        </button>
      </div>
    );
  }
}

export default ViewCropComponent;