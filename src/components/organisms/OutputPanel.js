import React, { Component } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNightEighties } from 'react-syntax-highlighter/dist/esm/styles/hljs';

class OutputPanel extends Component {

  render() {
    const codeString = `
    apiVersion: v1alpha
    kind: imagerunner
    sauce:
      region: us-west-1
    suites:
    - name: Desktop Tests
      workload: webdriver
      image: [docker_user]/demo-java-orchestrate-tutorial:0.0.1
      # the command to run your tests
      entrypoint: mvn -o test -pl best-practice -Dtest=DesktopTests
      artifacts:
        - "/workdir/best-practice/target/surefire-reports/*"
    artifacts:
      download:
        when: always
        match:
          - "*"
        directory: ./artifacts
    `;

    return (
      <div className="output-panel">
        <div className="output-panel__code-block">
          <SyntaxHighlighter language="javascript" style={tomorrowNightEighties}>
            {codeString}
          </SyntaxHighlighter>
        </div>
      </div>
    );
  }
}

export default OutputPanel;