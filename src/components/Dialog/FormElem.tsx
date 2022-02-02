import { Form, Field, FormElement, FormRenderProps } from "@progress/kendo-react-form";
import { observer } from "mobx-react";

import { useState } from "react";
import { Checkbox } from "@progress/kendo-react-inputs";

import { FieldInput, firstNameValidator, lastNameValidator, userNameValidator } from './Form/FieldInput';

import store from "../../store";

const FormElem = observer(() => {
    const [isText, setText] = useState(false);

    const handleSubmit = (dataItem: { [name: string]: any }) => {
        const date = new Date();
        const lastlogin: Date = new Date(date.getFullYear(), date.getMonth(), date.getDate());


        store.addUser(dataItem.userName, dataItem.firstName, dataItem.lastName, lastlogin, isText);
    }

    return (
        <Form onSubmit={handleSubmit} render={(formRenderProps: FormRenderProps) => (
            <FormElement style={{ maxWidth: 650 }}>
                <fieldset className={"k-form-fieldset"}>
                    <legend className={"k-form-legend"}>
                        Create new user:
                    </legend>
                    <div className="mb-3">
                        <Field name={"userName"} component={FieldInput} label={"User name"} validator={userNameValidator} />
                    </div>

                    <div className="mb-3">
                        <Field name={"firstName"} component={FieldInput} label={"First name"} validator={firstNameValidator} />
                    </div>

                    <div className="mb-3">
                        <Field name={"lastName"} component={FieldInput} label={"Last name"} validator={lastNameValidator} />
                    </div>

                    <div className="mb-3">
                        {isText ? 'Yes' : 'No'}
                        <Checkbox defaultChecked={false} onChange={(e) => setText(e.value)} />
                    </div>
                </fieldset>
                <div className="k-form-buttons">
                    <button type={"submit"} className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base sub-btn" disabled={!formRenderProps.allowSubmit}>
                        Submit
                    </button>
                </div>
            </FormElement>

        )}
        />
    );
});

export default FormElem;