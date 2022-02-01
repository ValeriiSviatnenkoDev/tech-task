import { Button } from "@progress/kendo-react-buttons";
import { useState } from "react";
import FormElem from "./FormElem";

const Dialog = () => {
    const [isVisible, setVisible] = useState(false);

    return (
        <>
            {
                isVisible ? <FormElem /> : <Button onClick={() => { setVisible(prev => !prev) }}>New Dialog</Button>
            }
        </>
    );
}

export default Dialog;