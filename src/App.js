import React from "react";

import InputPanel from "./components/organisms/InputPanel";
import OutputPanel from "./components/organisms/OutputPanel";

class App extends React.Component {
  constructor(props) {
    super(props);
    // Initial state in the parent component
    this.state = {
      regionData: '',
      ccyData: '',
    };
  }

  handleFormChange = (newData) => {
    this.setState({
      regionData: newData,
    });
  };

  render() {
    const { regionData, ccyData } = this.state;

    return (
      <div className="panel-container">
        <InputPanel
          regionData={regionData}
          ccyData={ccyData}
          onFormChange={this.handleFormChange}
        />
        <OutputPanel
          regionData={regionData}
          ccyData={ccyData}
        />
      </div>
    );
  }
}

export default App;
