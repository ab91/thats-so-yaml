import React from "react";

import InputPanel from "./components/organisms/InputPanel";
import OutputPanel from "./components/organisms/OutputPanel";

class App extends React.Component {

  render() {
    return (
      <div className="panel-container">
        <InputPanel />
        <OutputPanel />
      </div>
    );
  }
}

export default App;
