import React, { Component } from "react";
import InputMolecule from "../molecules/InputMolecule";

/* Can be refactored to functional component */

const Region = {
  inputType: "radio",
  topLevel: "sauce",
  secondLevel: null,
  thirdLevel: null,
  required: true,
  documentation: "https://docs.saucelabs.com/orchestrate/saucectl-configuration/#region",
  status: "✅/❌"
};

const CCY = {
  inputType: "input",
  topLevel: "sauce",
  secondLevel: "concurrency",
  thirdLevel: null,
  required: true,
  documentation: "https://docs.saucelabs.com/orchestrate/saucectl-configuration/#concurrency",
  status: "✅/❌"
};

class InputPanel extends Component {

  render() {

    const { regionData, ccyData, onFormChange } = this.props;

    return (
      <div className="input-panel-wrapper">
        <div className="input-panel-container">
          <div className="input-panel-text">
            <h1 className="input-panel-text__title">That’s SO YAML 👁🔮</h1>
            <h2 className="input-panel-text__subtitle">Sauce Orchestrate YAML Config Generator</h2>
            <h3 className="input-panel-text__description">Sauce Orchestrate tests are kicked off via CLI tool <a target="_blank" href="https://docs.saucelabs.com/dev/cli/saucectl/" rel="noreferrer">saucectl</a>. saucectl commands can be executed manually or automatically by your CI/CD system, and references a <a target="_blank" href="https://docs.saucelabs.com/orchestrate/saucectl-configuration/" rel="noreferrer">YAML file</a> in your repo which instructs Sauce Labs infrastructure how to run your tests. Use this app to interactively create a custom YAML for your test suite.</h3>
          </div>
          <div className="input-data-container">
            <InputMolecule
              {...Region}
              regionData={regionData}
              onFormChange={onFormChange}
            />
            <InputMolecule
              {...CCY}
              ccyData={ccyData}
              onFormChange={onFormChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default InputPanel;