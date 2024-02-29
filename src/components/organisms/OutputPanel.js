import React, { Component } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNightEighties } from 'react-syntax-highlighter/dist/esm/styles/hljs';

class OutputPanel extends Component {

  render() {

    const {
      regionOption,
      ccyData,
      tunnelNameData,
      suiteNameData,
      suiteWorkloadData,
      tunnelOwnerData,
      suiteResourceData,
      suiteImageData,
      suiteUserData,
      suiteTokenData,
      suiteEntrypointData
    } = this.props;

    var yamlString =
      `
  apiVersion: v1alpha
  kind: imagerunner
  sauce:
    region: ${(regionOption === 'option1') ? 'US-West' : 'EU-Central'}
    concurrency: ${ccyData}
    tunnel:
      name: "${tunnelNameData}"
      owner: ${tunnelOwnerData}
  suites:
    - name: ${suiteNameData}
      workload: ${(suiteWorkloadData === 'option1') ? 'webdriver' : 'other'}
      resourceProfile: ${(suiteResourceData === 'option1') ? 'c1m1' : 'c2m2'}
      image: ${suiteImageData}
      imagePullAuth:
        user: ${suiteUserData}
        token: ${suiteTokenData}
      entrypoint: ${suiteEntrypointData}
      files: 
        - src:
        - dst:
      env:
        KEY:
  artifacts:
    -
    cleanup: 
    download:
      when:
      match:
        -
      directory:
  reporters:
    json:
      enabled:
      filename:
      webhookURL:
  ` ;

    return (
      <div className="output-panel">
        <div className="output-panel__code-block">
          <SyntaxHighlighter
            language="yaml"
            style={tomorrowNightEighties}>
            {yamlString}
          </SyntaxHighlighter>
        </div>
      </div>
    );
  }
}

export default OutputPanel;