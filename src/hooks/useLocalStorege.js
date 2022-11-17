import { useEffect, useState } from "react";

function useLocalStorege(itemName, initalState) {
  const [data, setData] = useState(initalState);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      try {
        const itemLS = localStorage.getItem(itemName);
        let parsedItem;
        if (itemLS) {
          parsedItem = JSON.parse(itemLS);
        } else {
          localStorage.setItem(itemName, JSON.stringify(initalState));
          parsedItem = initalState;
        }
        setLoading(false);
        setData(parsedItem);
      } catch (error) {
        setError(error);
      }
    }, 1000);
  });

  function updateData(newData) {
    try {
      localStorage.setItem(itemName, JSON.stringify(newData));
      setData(newData);
    } catch (error) {
      setError(error);
    }
  }

  return {
    data,
    error,
    loading,
    updateData,
  };
}

export default useLocalStorege;
