import React, { Component } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNightEighties } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import innerText from 'react-innertext';

import ProducedYAML from '../atoms/ProducedYAML';

class OutputPanel extends Component {

  render() {

    const { regionData, ccyData } = this.props;

    var codeString =
      `
      apiVersion: v1alpha
      kind: imagerunner
      sauce:
        region: ${regionData}
        concurrency: ${ccyData}
        tunnel:
          name:
          owner:
      suites:
        - *name:
          *workload:
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

    var string = innerText(<ProducedYAML condition1={true} />)

    return (
      <div className="output-panel">
        <div className="output-panel__code-block">
          <SyntaxHighlighter language="yaml" style={tomorrowNightEighties}>
            {codeString}
          </SyntaxHighlighter>
        </div>
      </div>
    );
  }
}

export default OutputPanel;