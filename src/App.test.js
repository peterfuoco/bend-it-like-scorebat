// import React from "react";
// import {configure, shallow} from "enzyme";
// import chai, {expect} from "chai";
// import chaiEnzyme from "chai-enzyme";
// import Adapter from "enzyme-adapter-react-16";
// import App from "./App";
// configure({
//    adapter: new Adapter()
// });
// describe("Testing <App/> Component", () => {
//    it("App renders", () => {
//       const wrapper = shallow(<App />);
//       const message = <h1>Bend it like ScoreBat</h1>
//       // <p>Edit <code>src/App.js</code> and save to   reload.</p>;
//       expect(wrapper).to.contain(message);
//    });
//    chai.use(chaiEnzyme());
// });

import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import Header from './components/Header/Header';
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });
describe('Header component testing', function() {
  it('renders page title and directions', function() {
    const wrapper = shallow(<Header />); 
    expect(wrapper.contains(
      <div className="header-container">
      <h1>Bend it like ScoreBat </h1>
      <h2>An app to search for soccer highlights</h2>
      <p>Enter 1 search field and filter below</p>
    </div>
    )).to.equal(true);  
  });
});