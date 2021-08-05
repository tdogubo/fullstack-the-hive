import React from "react";
import { Dropdown } from "semantic-ui-react";

const Contact = () => {
  return (
    <Dropdown className="text-white hover:text-blue-400" text="Contact" direction="left">
      <Dropdown.Menu>
        <Dropdown.Item icon="blue twitter" text="Twitter" />
        <Dropdown.Item icon="blue facebook f" text="Facebook"/>
        <Dropdown.Item icon="pink instagram" text="Instagram"/>
        <Dropdown.Item icon="grey mail" text="Email"/>
        <Dropdown.Item icon="green whatsapp" text="Whatsapp" />
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Contact;
