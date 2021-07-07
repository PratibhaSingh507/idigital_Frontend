import React, { Component } from "react";
import CropService from "../Services/CropService";
import img6 from '../images/fields.jpg'

class ListCropComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      crops: [],
    };
    this.sellCrop = this.sellCrop.bind(this);
    this.editCrop = this.editCrop.bind(this);
    this.deleteCrop = this.deleteCrop.bind(this);
  }
  deleteCrop(id) {
    CropService.deleteCrop(id).then((res) => {
      this.setState({
        crops: this.state.crops.filter((crops) => crops.cropId !== id),
      });
    });
  }
  viewCrop(id) {
    this.props.history.push(`/view-crop/${id}`);
  }
  editCrop(id) {
    this.props.history.push(`/sell-crop/${id}`);
  }
  componentDidMount() {
    CropService.getCrops().then((res) => {
      this.setState({ crops: res.data });
    });
  }
  sellCrop() {
    this.props.history.push("/sell-crop/_add");
  }

  goBack() {
    this.props.history.push("/farmer-home");
  }

  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${img6})`,

          backgroundSize: "contain",
        }}
      >
        <div>
          <h2 className="text-center">Crops List</h2>
          <div className="row">
            {/* <button className="btn btn-primary" onClick={this.sellCrop}>
            {" "}
            Sell Crop
          </button> */}
          </div>
          <br></br>
          <div className="row">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Crop Id</th>
                  <th> Farmer Id </th>
                  <th> Farmer Name </th>
                  <th> Crop Name</th>
                  <th> Price </th>
                  <th> Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.state.crops.map((crop) => (
                  <tr key={crop.cropId}>
                    <td>{crop.cropId}</td>
                    <td> {crop.farmerId} </td>
                    <td> {crop.farmerName}</td>
                    <td> {crop.cropName}</td>
                    <td> {crop.price}</td>
                    <td>
                      <button
                        onClick={() => this.editCrop(crop.cropId)}
                        className="btn btn-info"
                      >
                        Update
                      </button>
                      <button
                        style={{ marginLeft: "10px" }}
                        onClick={() => this.deleteCrop(crop.cropId)}
                        className="btn btn-danger"
                      >
                        Delete{" "}
                      </button>
                      <button
                        style={{ marginLeft: "10px" }}
                        onClick={() => this.viewCrop(crop.cropId)}
                        className="btn btn-info"
                      >
                        View{" "}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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

export default ListCropComponent;