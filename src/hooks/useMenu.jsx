import { useEffect, useState } from "react";

const useMenu = () => {
  const [menu, setMenue] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((data) => {
        setMenue(data);
        setLoading(false);
      });
  }, []);

  return [menu, loading];
};

export default useMenu;

// {
//   const popularItems = data.filter((item) => item.category === "popular");
//   setMenue(popularItems);
// }
