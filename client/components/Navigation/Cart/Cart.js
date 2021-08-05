import React from "react";
import { Icon } from "semantic-ui-react";
import Link from "next/link";

// TODO: This is missing functionality for sub-menu here from SUI core examples.
// The "Publish To Web" item should contain a sub-menu.

const Cart = () => (
  <Link href="/shop">
    <a>
      <Icon name="cart" direction="left" color="yellow" className="hover:red"></Icon>
    </a>
  </Link>
);

export default Cart;
