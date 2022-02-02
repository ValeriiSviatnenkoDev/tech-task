import { FieldRenderProps } from "@progress/kendo-react-form";
import { Error } from "@progress/kendo-react-labels";
import { Input } from "@progress/kendo-react-inputs";
import { observer } from "mobx-react-lite";
import store from "../../../store";

export const firstNameValidator = (value: string) => {

    if(value !== undefined) {
        if(value.length > 25) {
           return "The field can have maximum of 25 characters!";
        }
    }

    if(value === undefined) {
        return "The field can not be empty!";
    }
}

export const lastNameValidator = (value: string) => {

    if(value !== undefined) {
        if(value.length > 25) {
           return "The field can have maximum of 25 characters!";
        } 
    }

    if(value === undefined) {
        return "The field can not be empty!";
    }
}

export const userNameValidator = (value: string) => {
    if(value !== undefined) {
        if(value.length > 15) {
           return "The field can have maximum of 15 characters!";
        }
    }

    if(value === undefined) {
        return "The field can not be empty!";
    }
}

export const FieldInput = observer((fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, visited, ...others } = fieldRenderProps;

    return (
        <div>
            <Input {...others} />
            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </div>
    );
});