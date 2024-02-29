import React from "react";

import InputPanel from "./components/organisms/InputPanel";
import OutputPanel from "./components/organisms/OutputPanel";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      regionOption: 'option1',
      ccyData: '',
      tunnelNameData: ''
    };
  }

  handleRadioChange = (event) => {
    this.setState({
      regionOption: event.target.value,
    });
  };

  handleFormChange = (newData) => {
    this.setState({
      ccyData: newData,
    });
  };

  render() {
    return (
      <div className="panel-container">
        <InputPanel
          regionOption={this.state.regionOption}
          handleRadioChange={this.handleRadioChange}
          handleFormChange={this.handleFormChange}
        />
        <OutputPanel
          regionOption={this.state.regionOption}
          ccyData={this.state.ccyData}
        />
      </div>
    );
  }
}

export default App;
