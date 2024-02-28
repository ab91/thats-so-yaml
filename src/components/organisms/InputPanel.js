import React, { Component } from "react";

class InputPanel extends Component {

  render() {
    return (
      <div className="input-panel">
        <div className="input-panel-text">
          <h1 className="input-panel-text__title">That’s SO YAML 👁🔮</h1>
          <h2 className="input-panel-text__subtitle">Sauce Orchestrate YAML Config Generator</h2>
          <h3 className="input-panel-text__description">Sauce Orchestrate tests are kicked off via CLI utility `saucectl`. `saucectl` commands can be run manually or part of your CI/CD, and references a YAML file in your repo which instructs the utility how to run your tests. Use this YAML generator to create a custom YAML for your test suite.</h3>
        </div>
      </div>
    );
  }
}

export default InputPanel;