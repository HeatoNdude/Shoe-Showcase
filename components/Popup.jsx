import React from "react";
import { Form, FormControl, FormGroup, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

const Popup = () => {
  const [showForm, setShowForm] = useState(true);
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleClickOutside(event) {
    if (event.target.className === "popup-close") {
      setShowForm(false);
    }
  }
  return (
    <>
      {showForm && (
        <div className="popup-container">
          <div className="popup-content">
            <h3>Get in Touch</h3>
            <Form>
              <FormGroup>
                <FormControl type="text" placeholder="Name" />
              </FormGroup>
              <FormGroup>
                <FormControl type="email" placeholder="Email" />
              </FormGroup>
              <FormGroup>
                <FormControl as="textarea" placeholder="Message" rows={3} />
              </FormGroup>
              <Button variant="primary" type="submit">
                Send
              </Button>
            </Form>
            <Button variant="light">
              <span className="popup-close">X</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
