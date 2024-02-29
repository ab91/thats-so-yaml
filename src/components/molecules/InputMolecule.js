import React, { Component } from "react";

class InputMolecule extends Component {

    render() {

        return (
            <div className="input-container input-border-gradient input-border-gradient--green">
                <p className="input__title">{this.props.topLevel}
                    {this.props.secondLevel && <span> → {this.props.secondLevel}</span>}
                    {this.props.thirdLevel && <span> → {this.props.thirdLevel}</span>}
                </p>
                <p className="input__subtitle">{this.props.required ? ("required") : ("optional")} - <a target="_blank" href={this.props.documentation} rel="noreferrer">docs</a></p>
                <form className="input__data">
                    {(this.props.inputType === "input" &&
                        <input
                            type="input"
                            value={this.props.inputData}
                            onChange={(e) => this.props.onFormChange(e.target.value)}
                        />
                    )}
                    {(this.props.inputType === "radio" &&
                        <div className="input__radio">
                            <label>
                                <input
                                    type="radio"
                                    name="myRadio"
                                    value="option1"
                                    checked={this.props.inputData === 'option1'}
                                    onChange={this.props.handleRadioChange}
                                />
                                {this.props.option1}
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="myRadio"
                                    value="option2"
                                    checked={this.props.inputData === 'option2'}
                                    onChange={this.props.handleRadioChange}
                                />
                                {this.props.option2}
                            </label>
                        </div>
                    )}
                </form>
                {/*<p className="input__status">{this.props.status}</p>*/}
            </div >
        );
    }
}

export default InputMolecule;