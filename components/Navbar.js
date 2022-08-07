import { useState } from "react";
export { Navbar };

function Navbar({ signOutWallets, walletConnected }) {
  const [toggle, setToggle] = useState(false);

  const toggleButton = () => {
    setToggle(!toggle);
  };

  return <div></div>;
}

export default Navbar;
