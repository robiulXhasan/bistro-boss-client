import React, { useEffect, useState } from "react";

const useMenu = () => {
  const [loading, setLoading] = useState(true);
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setMenu(data);
      });
  }, []);
  return [menu, loading];
};

export default useMenu;
