import React, { Component } from "react";

class InputMolecule extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {

        const { regionData, ccyData, onFormChange } = this.props;

        return (
            <div className="input-container input-border-gradient input-border-gradient--green">
                <p className="input__title">{this.props.topLevel}
                    {this.props.secondLevel && <span> → {this.props.secondLevel}</span>}
                    {this.props.thirdLevel && <span> → {this.props.thirdLevel}</span>}
                </p>
                <p className="input__subtitle">{this.props.required ? ("required") : ("optional")} - <a target="_blank" href={this.props.documentation} rel="noreferrer">docs</a></p>
                <form className="input__data">
                    <input
                        type="text"
                        value={regionData}
                        onChange={(e) => onFormChange(e.target.value)}
                    />
                </form>
                <p className="input__status">{this.props.status}</p>
            </div >
        );
    }
}

export default InputMolecule;