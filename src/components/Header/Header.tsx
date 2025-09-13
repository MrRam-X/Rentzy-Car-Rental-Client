import React, { useEffect } from "react";
import { useGlobalContext } from "../../context/GlobalContext";

const Header = () => {
  const { addToast } = useGlobalContext();

  useEffect(() => {
    addToast("Horrah!!", "Sucessfully tested toaster", "warning");
  }, []);
  return <div></div>;
};

export default Header;
