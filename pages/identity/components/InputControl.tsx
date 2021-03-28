import React from 'react';
import { Input, FormGroup, FormFeedback } from 'reactstrap';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {IconProp} from "@fortawesome/fontawesome-svg-core";
export enum INPUT_TYPE {
    SELECT= 'select',
    CHECKBOX= 'checkbox',
    TEXT= 'text',
    EMAIL= 'email',
    TEL= 'tel',
    URL= 'url',
    NUMBER= 'number',
    TEXT_AREA= 'textarea',
    PASSWORD= 'password',
}

export interface Props {
    inputType: INPUT_TYPE,
    name: string,
    iconProp2?: IconProp,
    icon?: string,
    value?: string | boolean | number,
    placeholder: string,
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    formRef: any,
    error: any,
    options?: Array<{label: string, value: string | number}>
}

// <input type="text" className="form-control" aria-label="Small"
//        aria-describedby="inputGroup-sizing-sm">
const InputControl: React.FC<Props> = ({
                                           inputType,
                                           name,
                                           placeholder,
                                           icon,
                                           iconProp2: IconProp,
                                           error={},
                                           handleChange,
                                           options,
                                           formRef,
                                           value
                                       }) => {

    console.log(`icon::: ${icon}`);
    return (
        <FormGroup>
            <div className="input-group with-focus">
                {/*    <div className="form-control">*/}
                {(inputType !== INPUT_TYPE.SELECT
                    && inputType !== INPUT_TYPE.TEXT_AREA
                    && inputType !== INPUT_TYPE.CHECKBOX)
                && (
                    <Input
                        type={inputType}
                        name={name}
                        className="border-right-0"
                        // className="form-control"

                        placeholder={placeholder}
                        innerRef={formRef}
                        invalid={!!error.message}
                        {
                            ...handleChange ? {
                                onChange: handleChange
                            } : {}
                        }
                    />
                )}
                {
                    inputType === INPUT_TYPE.TEXT_AREA && (
                        <Input
                            type="textarea"
                            name={name}
                            innerRef={formRef}
                            placeholder={placeholder}
                            invalid={!!error.message}
                            {
                                ...handleChange ? {
                                    onChange: handleChange
                                } : {}
                            }
                        />
                    )
                }
                {
                    inputType === INPUT_TYPE.SELECT && options && (
                        <Input
                            type="select"
                            name={name}
                            innerRef={formRef}
                            invalid={!!error.message}
                            {
                                ...handleChange ? {
                                    onChange: handleChange
                                } : {}
                            }
                        >
                            <option value=''>{placeholder}</option>
                            {options.map((item) => {
                                return <option value={item.value} key={item.value}>{item.label}</option>;
                            })}
                        </Input>
                    )
                }
                {
                    inputType === INPUT_TYPE.CHECKBOX && (
                        <div className="checkbox c-checkbox float-left mt-0">
                            <label>
                                <Input
                                    type="checkbox"
                                    name={name}
                                    innerRef={formRef}
                                    invalid={!!error.message}
                                />
                                <span className="fa fa-check"/> I agree with{" "}
                                <a href="/#">Terms &amp; Conditions</a>
                            </label>
                        </div>
                    )
                }
                {!!icon && (
                    // <div className="input-group-append">

                    <div className="input-group-prepend">

                        <span className="input-group-text text-muted bg-transparent border-left-0">

                            <FontAwesomeIcon
                                name={icon}
                                icon={faCoffee} />

                        </span>
                    </div>
                )}
                <FormFeedback style={error.message ? { display: "block" } : { display: "none" } }>{error.message}</FormFeedback>
            </div>
        </FormGroup>
    );
};

export default InputControl;
