import './App.css';
import React, { Component } from 'react';
import logo        from './logo.svg';

//Include a single button & link. 1)
import Button      from './component/button.jsx';
import Link        from './component/link.jsx';

//Add a custom wrapper. 2)
import ButtonTrack from './component/buttonTrack.jsx';

//Add hoc function. 3)
import withClickTimesTrack from './component/hocs/buttonHoc.jsx';

//Add hoc functions. 4)
import withClick   from './component/hocs/withClick.jsx';
import withDisplay from './component/hocs/withDisplay.jsx';
import withTimes   from './component/hocs/withTimes.jsx';

//Create wrapped using hoc, STEP 3
const ButtonWithTrack = withClickTimesTrack(Button);
const LinkWithTrack   = withClickTimesTrack(Link);

//Create a composed component, using 3 hocs, STEP 4.
const ButtonWithTrack2 = withTimes(withClick(withDisplay(Button)));

class App extends Component {

  constructor(props)
  {
    super(props);

    this.test = this.test.bind(this);
  }

  test(){
    alert("hola");
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>
            High order components - practice
          </h3>
          <div>
            {/* Include single component */}
            <Button type="button" onClick={this.test}>Click me!</Button>
            <hr/>
            {/* Include wrapped component */}
            <ButtonTrack onClick={this.test}>Click</ButtonTrack>
            <hr/>
            {/* Include wrapped component  but using the hoc component*/}
            <ButtonWithTrack/>
            <hr/>
            <LinkWithTrack/>
            {/* Include wrapped component  but using 3 hocs composed */}
            <hr/>
            <span>Hoc button &rarr; </span>
            <ButtonWithTrack2/>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
