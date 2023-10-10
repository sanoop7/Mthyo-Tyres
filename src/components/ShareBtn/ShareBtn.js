import React from "react";
import "./ShareBtn.css";
import AddIcCallSharpIcon from "@mui/icons-material/AddIcCallSharp";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function ShareBtn() {
  const handleWhatsAppClick = () => {
    // Replace 'YOUR_PHONE_NUMBER' with your actual WhatsApp phone number
    const phoneNumber = "9747186245";
    const url = `https://wa.me/${phoneNumber}`;

    window.open(url, "_blank");
  };
  const handleCallClick = () => {
    const phoneNumber = "9747186245";
    window.location.href = `tel:${phoneNumber}`;
  };
  return (
    <div className={"share_btn_container"}>
      <div className="call_btn">
        <AddIcCallSharpIcon onClick={handleCallClick} />
      </div>
      <div className="call_btn">
        <WhatsAppIcon onClick={handleWhatsAppClick} />
      </div>
    </div>
  );
}

export default ShareBtn;
