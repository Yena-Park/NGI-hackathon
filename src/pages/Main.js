import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Greetings from '../components/Main/Greetings/Greetings';
import Gallery from '../components/Main/Gallery/Gallery';
import FAQSection from '../components/FAQSection/FAQSection';
import Email from '../components/Main/Email/Email';
import Footer from '../components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header /><br/><br/><br/>
        <Greetings />
        <Gallery />
        <FAQSection />
        <Email />
        <Footer />
      </div>
    );
  }
}

export default App;
