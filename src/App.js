import React, {Component} from 'react';
import logo from './logo.svg';
import './Styles/App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "./Styles/Tabs.css";
import "./Styles/Modal.css";
import deliveryData from './deliveries-sample.json';
import Delivery from './Components/Delivery.js'
import ReactModal from 'react-modal';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      modalRestaurant: "Test",
      mobile: false,
    };

  }

  handleOpenModal = (name) => {
    this.setState({ showModal: true, modalRestaurant: name});
  }

  handleCloseModal = () => {
    this.setState({ showModal: false });
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
      this.setState({mobile: window.innerWidth <= 760});
  }

  render() {
    const monday = deliveryData.dropoffs[0].deliveries;
    const tuesday = deliveryData.dropoffs[1].deliveries;
    const wednesday = deliveryData.dropoffs[2].deliveries;
    const thursday = deliveryData.dropoffs[3].deliveries;
    const friday = deliveryData.dropoffs[4].deliveries;

    let dispStyle = "Desktop";

    if(this.state.mobile) {
      dispStyle = "Mobile"
    }

    return(

      <div class = {dispStyle}>
        <ReactModal
           className = "Modal"
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
           onRequestClose={this.handleCloseModal}
           shouldCloseOnOverlayClick={true}
        >
          <p> {this.state.modalRestaurant} </p>
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </ReactModal>

        <p> Delivery Schedule </p>
        <Tabs>
          <TabList>
            <Tab>Mon</Tab>
            <Tab>Tue</Tab>
            <Tab>Wed</Tab>
            <Tab>Thu</Tab>
            <Tab>Fri</Tab>
          </TabList>

          <TabPanel>
            {Object.keys(monday).map((value, index) =>
              <div class = "Delivery">
                <Delivery
                  openModal={this.handleOpenModal}
                  deliveryData = {monday[value]}
                  isMobile = {this.state.mobile} />
              </div>
            )}
          </TabPanel>

          <TabPanel>
            {Object.keys(tuesday).map((value, index) =>
              <div class = "Delivery">
                <Delivery
                  openModal={this.handleOpenModal}
                  deliveryData = {tuesday[value]}
                  isMobile = {this.state.mobile} />
              </div>
            )}
          </TabPanel>

          <TabPanel>
            {Object.keys(wednesday).map((value, index) =>
              <div class = "Delivery">
                <Delivery
                  openModal={this.handleOpenModal}
                  deliveryData = {wednesday[value]}
                  isMobile = {this.state.mobile} />
              </div>
            )}
          </TabPanel>

          <TabPanel>
            {Object.keys(thursday).map((value, index) =>
              <div class = "Delivery">
                <Delivery
                  openModal={this.handleOpenModal}
                  deliveryData = {thursday[value]}
                  isMobile = {this.state.mobile} />
              </div>
            )}
          </TabPanel>

          <TabPanel>
            {Object.keys(friday).map((value, index) =>
              <div class = "Delivery">
                <Delivery
                  openModal={this.handleOpenModal}
                  deliveryData = {friday[value]}
                  isMobile = {this.state.mobile} />
              </div>
            )}
          </TabPanel>
        </Tabs>
      </div>
    )
  }
}

const ModalStyle = {

}



export default App;
