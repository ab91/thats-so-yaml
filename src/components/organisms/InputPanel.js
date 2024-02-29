import React, { Component } from "react";
import InputMolecule from "../molecules/InputMolecule";

/* Can be refactored to functional component */

const SauceRegion = {
  inputType: "radio",
  prompt: "Which data center are you using?",
  topLevel: "sauce",
  secondLevel: "region",
  thirdLevel: null,
  option1: "US-West",
  option2: "EU-Central",
  required: true,
  documentation: "https://docs.saucelabs.com/orchestrate/saucectl-configuration/#region",
};

const SauceCCY = {
  inputType: "input",
  prompt: "How many tests are trying to run at once?",
  topLevel: "sauce",
  secondLevel: "concurrency",
  thirdLevel: null,
  required: false,
  documentation: "https://docs.saucelabs.com/orchestrate/saucectl-configuration/#concurrency",
};

const TunnelName = {
  inputType: "input",
  prompt: "If you're using a Sauce Connect tunnel, what is its name?",
  topLevel: "sauce",
  secondLevel: "tunnel",
  thirdLevel: "name",
  required: false,
  documentation: "https://docs.saucelabs.com/orchestrate/saucectl-configuration/#name",
};

const TunnelOwner = {
  inputType: "input",
  prompt: "If you're using a Sauce Connect tunnel, who is its owner?",
  topLevel: "sauce",
  secondLevel: "tunnel",
  thirdLevel: "owner",
  required: false,
  documentation: "https://docs.saucelabs.com/orchestrate/saucectl-configuration/#owner",
};

const SuiteName = {
  inputType: "input",
  prompt: "What would you like to name your test suite?",
  topLevel: "sauce",
  secondLevel: "tunnel",
  thirdLevel: "owner",
  required: true,
  documentation: "https://docs.saucelabs.com/orchestrate/saucectl-configuration/#owner",
};

const SuiteWorkload = {
  inputType: "radio",
  prompt: "What kind of entrypoint process you are running?",
  topLevel: "suites",
  secondLevel: "workload",
  thirdLevel: null,
  option1: "webdriver",
  option2: "other",
  required: true,
  documentation: "https://docs.saucelabs.com/orchestrate/saucectl-configuration/#workload",
};

const SuiteResource = {
  inputType: "radio",
  prompt: "Select an option to set the CPU and memory limits for the container.",
  topLevel: "suites",
  secondLevel: "resourceProfile",
  thirdLevel: null,
  option1: "c1m1",
  option2: "c2m2",
  required: false,
  documentation: "https://docs.saucelabs.com/orchestrate/saucectl-configuration/#workload",
};

const SuiteImage = {
  inputType: "input",
  prompt: "Where is your image located?",
  topLevel: "suites",
  secondLevel: "image",
  thirdLevel: null,
  required: true,
  documentation: "https://docs.saucelabs.com/orchestrate/saucectl-configuration/#image",
};

const SuiteImageUser = {
  inputType: "input",
  prompt: "If your registry is private, what is your username",
  topLevel: "suites",
  secondLevel: "imagePullAuth",
  thirdLevel: "user",
  required: false,
  documentation: "hhttps://docs.saucelabs.com/orchestrate/saucectl-configuration/#imagepullauth",
};

const SuiteImageToken = {
  inputType: "input",
  prompt: "[DO NOT USE]",
  topLevel: "suites",
  secondLevel: "imagePullAuth",
  thirdLevel: "token",
  required: false,
  documentation: "https://docs.saucelabs.com/orchestrate/saucectl-configuration/#imagepullauth",
};

const SuiteEntrypoint = {
  inputType: "input",
  prompt: "What command is run to execute your tests?",
  topLevel: "suites",
  secondLevel: "entrypoint",
  thirdLevel: null,
  required: true,
  documentation: "https://docs.saucelabs.com/orchestrate/saucectl-configuration/#entrypoint",
};

class InputPanel extends Component {

  render() {

    //const { regionData, ccyData, handleFormChange } = this.props;
    const { regionOption, ccyData,
      tunnelNameData,
      tunnelOwnerData,
      suiteNameData,
      suiteWorkloadData,
      suiteResourceData,
      suiteImageData,
      suiteUserData,
      suiteTokenData,
      suiteEntrypointData,
      handleFormChange
    } = this.props;

    return (
      <div className="input-panel-wrapper">
        <div className="input-panel-container">
          <div className="input-panel-text">
            <h1 className="input-panel-text__title">That’s SO YAML 👁🔮</h1>
            <h2 className="input-panel-text__subtitle">Sauce Orchestrate YAML Config Generator</h2>
            <h3 className="input-panel-text__description">Sauce Orchestrate tests can be triggered via CLI tool <a target="_blank" href="https://docs.saucelabs.com/dev/cli/saucectl/" rel="noreferrer">saucectl</a>. saucectl commands can be executed manually or automatically by your CI/CD system, and references a <a target="_blank" href="https://docs.saucelabs.com/orchestrate/saucectl-configuration/" rel="noreferrer">YAML file</a> in your repo which instructs Sauce Labs infrastructure on how to run your tests. <br/><br/>Use this app to build a custom YAML for your test suite.</h3>
          </div>
          <div className="input-data-container">
            <InputMolecule
              name="regionOption"
              {...SauceRegion}
              inputData={regionOption}
              handleFormChange={handleFormChange}
            />
            <InputMolecule
              name="ccyData"
              {...SauceCCY}
              inputData={ccyData}
              handleFormChange={handleFormChange}
            />
            <InputMolecule
              name="tunnelNameData"
              {...TunnelName}
              inputData={tunnelNameData}
              handleFormChange={handleFormChange}
            />
            <InputMolecule
              name="tunnelOwnerData"
              {...TunnelOwner}
              inputData={tunnelOwnerData}
              handleFormChange={handleFormChange}
            />
            <InputMolecule
              name="suiteNameData"
              {...SuiteName}
              inputData={suiteNameData}
              handleFormChange={handleFormChange}
            />
            <InputMolecule
              name="suiteWorkloadData"
              {...SuiteWorkload}
              inputData={suiteWorkloadData}
              handleFormChange={handleFormChange}
            />
            <InputMolecule
              name="suiteResourceData"
              {...SuiteResource}
              inputData={suiteResourceData}
              handleFormChange={handleFormChange}
            />
            <InputMolecule
              name="suiteImageData"
              {...SuiteImage}
              inputData={suiteImageData}
              handleFormChange={handleFormChange}
            />
            <InputMolecule
              name="suiteUserData"
              {...SuiteImageUser}
              inputData={suiteUserData}
              handleFormChange={handleFormChange}
            />
            <InputMolecule
              name="suiteTokenData"
              {...SuiteImageToken}
              inputData={suiteTokenData}
              handleFormChange={handleFormChange}
            />
            <InputMolecule
              name="suiteEntrypointData"
              {...SuiteEntrypoint}
              inputData={suiteEntrypointData}
              handleFormChange={handleFormChange}
            />
            {/*
            <InputMolecule
              name="input11"
              {...SuiteFileSrc}
              inputData={ccyData}
              handleFormChange={handleFormChange}
            />
            <InputMolecule
              name="input12"
              {...SuiteFileDst}
              inputData={ccyData}
              handleFormChange={handleFormChange}
            />
            <InputMolecule
              name="input13"
              {...SuiteEnvKey}
              inputData={ccyData}
              handleFormChange={handleFormChange}
            />
            */}
          </div>
        </div>
      </div>
    );
  }
}

export default InputPanel;