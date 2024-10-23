import React, { useState, useEffect } from "react";

function useInfiniteScroll(makeApiCall) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);


  const handleScroll = () => {
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight && !isLoading) {
      setPage((prevPage) => prevPage + 1);
    }
  };
  const loadMoreData = async (page) => {
    setIsLoading(true);
    try {
      const newData = await makeApiCall(page);
      setData((prev) => [...prev, ...newData]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadMoreData(page);
  }, [page]);
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return { isLoading, data };
}

export default useInfiniteScroll;
