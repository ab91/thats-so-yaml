import React, { Component } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNightEighties } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import ProducedYAML from '../atoms/ProducedYAML';

class OutputPanel extends Component {

  render() {

    const { regionOption, ccyData } = this.props;

    var yamlString =
      `
  apiVersion: v1alpha
  kind: imagerunner
  sauce:
    region: ${(regionOption == 'option1') ? 'US-West' : 'EU-Central'}
    concurrency: ${ccyData}
    tunnel:
      name:
      owner:
  suites:
    - name:
      workload:
      resourceProfile:
      *image:
      imagePullAuth:
        user:
        token:
      *entrypoint:
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