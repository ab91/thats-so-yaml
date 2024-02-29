import React from "react";

import InputPanel from "./components/organisms/InputPanel";
import OutputPanel from "./components/organisms/OutputPanel";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      regionOption: 'option1',
      ccyData: '',
      tunnelNameData: '',
      tunnelOwnerData: '',
      suiteNameData: '',
      suiteWorkloadData: 'option1',
      suiteResourceData: 'option1',
      suiteImageData: '',
      suiteUserData: '',
      suiteTokenData: '',
      suiteEntrypointData: ''
    };
  }

  handleFormChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    })
  };

  render() {
    const { 
      regionOption, 
      ccyData,
      tunnelNameData,
      tunnelOwnerData,
      suiteNameData,
      suiteWorkloadData,
      suiteResourceData,
      suiteImageData,
      suiteUserData,
      suiteTokenData,
      suiteEntrypointData
    } = this.state;

    return (
      <div className="panel-container">
        <InputPanel
          regionOption={regionOption}
          ccyData={ccyData}
          tunnelNameData={tunnelNameData}
          tunnelOwnerData={tunnelOwnerData}
          suiteNameData={suiteNameData}
          suiteWorkloadData={suiteWorkloadData}
          suiteResourceData={suiteResourceData}
          suiteImageData={suiteImageData}
          suiteUserData={suiteUserData}
          suiteTokenData={suiteTokenData}
          suiteEntrypointData={suiteEntrypointData}

          handleFormChange={this.handleFormChange}
        />
        <OutputPanel
          regionOption={regionOption}
          ccyData={ccyData}
          tunnelNameData={tunnelNameData}
          tunnelOwnerData={tunnelOwnerData}
          suiteNameData={suiteNameData}
          suiteWorkloadData={suiteWorkloadData}
          suiteResourceData={suiteResourceData}
          suiteImageData={suiteImageData}
          suiteUserData={suiteUserData}
          suiteTokenData={suiteTokenData}
          suiteEntrypointData={suiteEntrypointData}
        />
      </div>
    );
  }
}

export default App;
