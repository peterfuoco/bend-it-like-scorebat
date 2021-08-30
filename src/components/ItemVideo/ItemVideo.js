// const DOMPurify = require('dompurify')(window);
import React from "react";
import Modal from "react-modal";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import "./ItemVideo.css";

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
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const videosLength = props.videos.length;
  const videos = props.videos.map((ele, index) => {
    const matches = ele.embed.match(/\bhttps?:\/\/\S+/gi);
    return (
      <Carousel.Item key={index}>
        <iframe src={matches}></iframe>
      </Carousel.Item>
    );
  });

  return (
    <div className="item-video-container">
      <Button variant="primary" onClick={openModal}>
        Highlights
      </Button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Button className="button" variant="danger" onClick={closeModal}>
          Close
        </Button>
        <div>Number of Highlight videos: {videosLength}</div>
        <Carousel interval={null}>{videos}</Carousel>
      </Modal>
    </div>
  );
}
