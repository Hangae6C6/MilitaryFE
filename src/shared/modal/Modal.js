import React from "react";
import "./modal.css";
import closeIcon from "../icons/icnCloseBlack32.svg";

const Modal = (props) => {
  const { open, close } = props;

  return (
    <>
      <div className={open ? "openModal modal" : "modal"}>
        {open ? (
          <>
            <div className="dim" onClick={close}></div>
            <section>
                <div className="upperbox">
              <div className="cancel">정말 포기하시겠습니까?</div>
              <button className="close" onClick={close}>
                <img src={closeIcon} alt="closeIcon"></img>
              </button>
                </div>

                <div className="lowerbox">
                    <div className="left">YES</div>
                    <div className="right">NO</div>

                </div>
            </section>
          </>
        ) : null}
      </div>
    </>
  );
};

export default Modal;
