import modal from "./modal.css";
import {createPortal} from "react-dom";

const ModalContent = (props) => {
    return (
        <>
            <div className={props.isShown ? "overlay-show overlay" : "overlay"}></div>
            <section className={props.isShown ? "modal modal-show" : "modal"}>
                <button className="modal__button" onClick={props.hideModalFunction}>❌</button>
                {props.children}
            </section>
        </>
    )
}

const Modal = (props) => {
    return createPortal(<ModalContent isShown={props.isShown} hideModalFunction={props.hideModalFunction} children={props.children}/>, document.getElementById("modal-root"));
}

export default Modal;