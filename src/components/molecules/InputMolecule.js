import React from "react";

const InputMolecule = (props) => {

    return (
        <div className="input-container input-border-gradient">
            <p className="input__prompt">{props.prompt}</p>
            <p className="input__detail">{props.required ? (<span style={{ color: 'red' }}>required</span>) : ("optional")} / <a target="_blank" href={props.documentation} rel="noreferrer">docs</a></p>
            <p className="input__location">[{props.topLevel}
                {props.secondLevel && <span> → {props.secondLevel}</span>}
                {props.thirdLevel && <span> → {props.thirdLevel}</span>}]
            </p>
            <form className="input__data">
                {(props.inputType === "input" &&
                    <input
                        name={props.name}
                        type="input"
                        value={props.inputData}
                        onChange={props.handleFormChange}
                    />
                )}
                {(props.inputType === "radio" &&
                    <div className="input__radio">
                        <label>
                            <input
                                type="radio"
                                name={props.name}
                                value="option1"
                                checked={props.inputData === 'option1'}
                                onChange={props.handleFormChange}
                            />
                            {props.option1}
                        </label>
                        <label>
                            <input
                                type="radio"
                                name={props.name}
                                value="option2"
                                checked={props.inputData === 'option2'}
                                onChange={props.handleFormChange}
                            />
                            {props.option2}
                        </label>
                    </div>
                )}
            </form>
        </div >
    );
}

export default InputMolecule;