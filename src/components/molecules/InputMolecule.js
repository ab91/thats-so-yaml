import React, { Component } from "react";

class InputMolecule extends Component {

    render() {

        return (
            <div className="input-container input-border-gradient">
                <p className="input__prompt">{this.props.prompt}</p>
                <p className="input__detail">{this.props.required ? (<span style={{ color: 'red' }}>required</span>) : ("optional")} / <a target="_blank" href={this.props.documentation} rel="noreferrer">docs</a></p>
                <p className="input__location">[{this.props.topLevel}
                    {this.props.secondLevel && <span> → {this.props.secondLevel}</span>}
                    {this.props.thirdLevel && <span> → {this.props.thirdLevel}</span>}]
                </p>
                <form className="input__data">
                    {(this.props.inputType === "input" &&
                        <input
                            name={this.props.name}
                            type="input"
                            value={this.props.inputData}
                            onChange={this.props.handleFormChange}
                        />
                    )}
                    {(this.props.inputType === "radio" &&
                        <div className="input__radio">
                            <label>
                                <input
                                    type="radio"
                                    name={this.props.name}
                                    value="option1"
                                    checked={this.props.inputData === 'option1'}
                                    onChange={this.props.handleFormChange}
                                />
                                {this.props.option1}
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name={this.props.name}
                                    value="option2"
                                    checked={this.props.inputData === 'option2'}
                                    onChange={this.props.handleFormChange}
                                />
                                {this.props.option2}
                            </label>
                        </div>
                    )}
                </form>
            </div >
        );
    }
}

export default InputMolecule;