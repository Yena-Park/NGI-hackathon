import React, { Component } from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import styled from "styled-components";

import img0 from "../images/0tree.png";
import img1 from "../images/1tree.png";
import img2 from "../images/2tree.png";
import img3 from "../images/3tree.png";
import img4 from "../images/4tree.png";


const Wrapper = styled.div`
  margin-top: 100px;
  margin-left: 20px;
`;

class MyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goalMoney: 10000,
      current: 0,
      imageURL: img0,
      input: ""
    };
  }

  handleClick = () => {
    const current = this.state.current + Number(this.state.input);
    const { goalMoney } = this.state;

    if (current > (goalMoney * 4) / 5) {
      this.setState({ current, input: "", imageURL: img4 });
    } else if (current > (goalMoney * 3) / 5) {
      this.setState({ current, input: "", imageURL: img3 });
    } else if (current > (goalMoney * 2) / 5) {
      this.setState({ current, input: "", imageURL: img2 });
    } else if (current > (goalMoney * 1) / 5) {
      this.setState({ current, input: "", imageURL: img1 });
    } else {
      this.setState({ current, input: "", imageURL: img0 });
    }
  };

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  render() {
    const { goalMoney, current, imageURL, input } = this.state;
    const { handleClick, handleChange } = this;
    return (
      <div>
        <Header />
        <Wrapper>
          <div>Goal : ${goalMoney}</div>
          <div>Current : ${current}</div>
          <div>
            <input value={input} onChange={handleChange} />
            <button onClick={handleClick}> Save </button>
          </div>
          <div>
            <img src={imageURL} alt={imageURL} />
          </div>
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default MyPage;