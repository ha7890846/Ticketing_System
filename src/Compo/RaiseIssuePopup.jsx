import React, { useState, useRef, useEffect } from "react";
import "../styling/RaiseIssuePopup.css"; // CSS from below
import chatIcon from "../assets/chat.png"; // Your image path
import Chatbot from "./Chatbot";

const RaiseIssuePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef();

  // Close popup on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="raise-issue-container">
      <img
        src={chatIcon}
        alt="Raise Issue"
        className="raise-issue-img"
        onClick={() => setIsOpen((prev) => !prev)}
      />

      {isOpen && (
        <div className="raise-popup-box" ref={popupRef}>
          <Chatbot/>
        </div>
      )}
    </div>
  );
};

export default RaiseIssuePopup;
