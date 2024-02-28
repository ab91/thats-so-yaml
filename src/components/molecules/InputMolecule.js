import React, { Component } from "react";

class InputMolecule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topLevel: "sauce",
            secondLevel: "tunnel",
            thirdLevel: "name",
            required: true,
            documentation: "https://docs.saucelabs.com/dev/cli/saucectl/",
            status: "✅/❌"
        };
    }

    render() {
        return (
            <div className="input-container input-border-gradient input-border-gradient--green">
                <p className="input__title">{this.state.topLevel}
                    {this.state.secondLevel && <span> → {this.state.secondLevel}</span>}
                    {this.state.thirdLevel && <span> → {this.state.thirdLevel}</span>}
                </p>
                <p className="input__subtitle">{this.state.required ? ("required") : ("optional")} - <a target="_blank" href={this.state.documentation} rel="noreferrer">docs</a></p>
                <div className="input__data">placeholder</div>
                <p className="input__status">{this.state.status}</p>
            </div >
        );
    }
}

export default InputMolecule;