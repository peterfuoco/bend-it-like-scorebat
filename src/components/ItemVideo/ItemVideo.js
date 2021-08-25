// const DOMPurify = require('dompurify')(window);
import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import Carousel from "react-bootstrap/Carousel";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

export default function ItemVideo(props) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  var matches = props.videos[0].embed.match(/\bhttps?:\/\/\S+/gi);

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        {/* <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
          <iframe src={matches}></iframe>
        </form> */}

        <Carousel interval={null}>
          <Carousel.Item>
            <iframe src={matches}></iframe>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <iframe src={matches}></iframe>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Second slide label</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Modal>
    </div>
  );
}
