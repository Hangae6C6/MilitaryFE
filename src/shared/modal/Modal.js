import React from "react";
import "./modal.css";
import closeIcon from "../icons/icnCloseBlack32.svg";

const Modal = (props) => {
  const { open, close, done } = props;

  return (
    <>
      <div className={open ? "openModal modal" : "modal"}>
        {open ? (
          <>
            <div className="dim" onClick={close}></div>
            <section>
                <div className="upperbox">
              <div className="cancel">정말 나가시겠습니까?</div>
              <button className="close" onClick={close}>
                <img src={closeIcon} alt="closeIcon"></img>
              </button>
                </div>

                <div className="lowerbox">
                    <div className="left" onClick={done}>YES</div>
                    <div className="right" onClick={close}>NO</div>

                </div>
            </section>
          </>
        ) : null}
      </div>
    </>
  );
};

export default Modal;
