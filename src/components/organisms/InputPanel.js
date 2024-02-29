import React, { Component } from "react";
import InputMolecule from "../molecules/InputMolecule";

/* Can be refactored to functional component */

const SauceRegion = {
  inputType: "radio",
  topLevel: "sauce",
  secondLevel: "region",
  thirdLevel: null,
  option1: "US-West",
  option2: "EU-Central",
  required: true,
  documentation: "https://docs.saucelabs.com/orchestrate/saucectl-configuration/#region",
  status: "✅/❌"
};

const SauceCCY = {
  inputType: "input",
  topLevel: "sauce",
  secondLevel: "concurrency",
  thirdLevel: null,
  required: false,
  documentation: "https://docs.saucelabs.com/orchestrate/saucectl-configuration/#concurrency",
  status: "✅/❌"
};

/*
const TunnelName = {
  inputType: "input",
  topLevel: "sauce",
  secondLevel: "tunnel",
  thirdLevel: "name",
  required: false,
  documentation: "https://docs.saucelabs.com/orchestrate/saucectl-configuration/#name",
  status: "✅/❌"
};

const TunnelOwner = {
  inputType: "input",
  topLevel: "sauce",
  secondLevel: "tunnel",
  thirdLevel: "owner",
  required: false,
  documentation: "https://docs.saucelabs.com/orchestrate/saucectl-configuration/#owner",
  status: "✅/❌"
};

const SuiteName = {
  inputType: "input",
  topLevel: "sauce",
  secondLevel: "tunnel",
  thirdLevel: "owner",
  required: true,
  documentation: "https://docs.saucelabs.com/orchestrate/saucectl-configuration/#owner",
  status: "✅/❌"
};

const SuiteWorkload = {
  inputType: "radio",
  topLevel: "suites",
  secondLevel: "workload",
  thirdLevel: null,
  option1: "webdriver",
  option2: "other",
  required: true,
  documentation: "https://docs.saucelabs.com/orchestrate/saucectl-configuration/#workload",
  status: "✅/❌"
};

const SuiteResourceProfile = {
  inputType: "radio",
  topLevel: "suites",
  secondLevel: "resourceProfile",
  thirdLevel: null,
  option1: "c1m1",
  option2: "c2m2",
  required: false,
  documentation: "https://docs.saucelabs.com/orchestrate/saucectl-configuration/#workload",
  status: "✅/❌"
};
*/
class InputPanel extends Component {

  render() {

    //const { regionData, ccyData, onFormChange } = this.props;

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
              name="input1"
              {...SauceRegion}
              inputData={this.props.regionOption}
              handleRadioChange={this.props.handleRadioChange}
            />
            <InputMolecule
              name="input2"
              {...SauceCCY}
              inputData={this.props.ccyData}
              onFormChange={this.props.handleFormChange}
            />
            {/* 
            <InputMolecule
              name="input3"
              {...TunnelName}
              inputData={this.props.ccyData}
              onFormChange={this.props.onFormChange}
            />
            <InputMolecule
              name="input4"
              {...TunnelOwner}
              inputData={this.props.ccyData}
              onFormChange={this.props.onFormChange}
            />
            <InputMolecule
              name="input5"
              {...SuiteName}
              inputData={this.props.ccyData}
              onFormChange={this.props.onFormChange}
            />
            <InputMolecule
              name="input6"
              {...SuiteWorkload}
              inputData={this.props.ccyData}
              onFormChange={this.props.onFormChange}
            />*/}
          </div>
        </div>
      </div>
    );
  }
}

export default InputPanel;