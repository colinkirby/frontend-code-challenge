import React, {Component} from 'react';
import Button from 'react-bootstrap/Button'
import '../Styles/Delivery.css'

/*
* Delivery Component uses json info to create a block for an individual delivery
*/
class Delivery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }

  render() {
    const data = this.props.deliveryData;
    const isSoldOut = data.soldOut;
    const isPastCutoff = data.isPastCutoff;
    const {openModal} = this.props;
    const isMobile = this.props.isMobile

    let info;
    let button;
    let buttonText = "Select Restaurant";
    let sellingOut = "";

    if(isMobile) buttonText = "Order Status Here";
    if(data.sellingOut) sellingOut = "Hurry! It's Selling Out!"
    
    if(isPastCutoff) {
      button = <Button variant="primary" size = "lg" disabled>Cutoff time past</Button>
    } else {
      button = <Button variant="warning" size = "sm" active onClick={(e) => openModal(data.restaurantName)}>{buttonText}</Button>
    }

    if (isSoldOut) {
      info =  <p> Sold out </p>;
    } else {
      info =
        (<div>
          <p class = "time"> Order by: &emsp;&ensp;&nbsp; <span style = {{border: '1px solid black'}}> {data.cutoff} </span> </p>
          <p class = "time"> Delivery Time: <span style = {{border: '1px solid black'}}> {data.dropoff} </span></p>
          {button}
          <p> {sellingOut} </p>
        </div>
      );
    }

    return(
      <div class = "wrapper">
        <div class = "box a">
          <img style = {logo} src = {data.logoUrl}/>
        </div>

        <div class = "box b">
          <p> <b>{data.restaurantName}</b> </p>
          {info}
        </div>
        <br/>
      </div>
    )

  }
}

const logo = {
  width: "120px",
  height: "120px"

}

export default Delivery;
