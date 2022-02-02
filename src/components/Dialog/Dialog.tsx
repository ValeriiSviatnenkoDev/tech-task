import { Button } from "@progress/kendo-react-buttons";
import { Dialog, DialogActionsBar } from "@progress/kendo-react-dialogs";
import { useState } from "react";
import FormElem from "./FormElem";

const DialogWindow = () => {
    const [isVisible, setVisible] = useState(false);

    const toggleDialog = () => {
        setVisible(prev => !prev);
    };

    return (
        <>
            {
                isVisible ?
                    <Dialog title={"New user"} onClose={() => { }} width="300px"> 
                        <FormElem />
                        <DialogActionsBar>
                            <button className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base" onClick={toggleDialog}>
                                Close
                            </button>
                        </DialogActionsBar>
                    </Dialog>
                    :
                    <Button onClick={() => { setVisible(prev => !prev) }}>New User</Button>
            }
        </>
    );
}

export default DialogWindow;