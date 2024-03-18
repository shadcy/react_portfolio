import React, { useState } from 'react';
import emailjs from "@emailjs/browser";

function EmailPopup() {
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [email, setEmail] = useState('');

    const openPopup = () => {
        setPopupOpen(true);
    };

    const closePopup = () => {
        setPopupOpen(false);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "template_hqduhhg", // your service ID
                "", // your template ID
                e.target, // form data
                "ngCsRCpW8eD9BkxPb" // your user ID
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };



    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Handle the email submission logic here
        console.log('Submitted email:', email);
        // Close the popup after handling the email
        closePopup();
    };

    return (
        <div>
            <button onClick={openPopup}>Get Developers Resume</button>

            {isPopupOpen && (
                <div className="popup-overlay">
                    <div className="popup">
                        <span className="close-button" onClick={closePopup}>
                            &times;
                        </span>
                        <form onSubmit={handleFormSubmit}>
                            <label>
                                Email : &nbsp;
                                <input
                                    type="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    required />
                            </label>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <button onSubmit={sendEmail
                            } type="submit">Get CV</button>
                        </form>
                    </div>
                </div>
            )}

            <style jsx>{`
            button{
                background-color:black;
                color:white;
                padding:10px;
                border:none;
                border-radius:10px;
                cursor:pointer;
            }

            input{
                padding:10px;
                border-color:gray;
                border-radius:10px;
            }
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index:99999;
        }

        .popup {
          background: white;
          padding: 20px;
          border-radius: 24px;
          width 60%;
          padding:40px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
          z-index:99999;
        }

        .close-button {
          position: absolute;
          top: 10px;
          right: 10px;
          font-size: 20px;
          cursor: pointer;
        }
      `}</style>
        </div>
    );
}

export default EmailPopup;
