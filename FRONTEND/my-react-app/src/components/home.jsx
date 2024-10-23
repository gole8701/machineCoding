// import React, { useState, useEffect } from "react";
// import ItemCard from "./itemCard";
// import "../App.css";
// import ShimmerUI from "./shimmerUI";

// function Home() {
//   const [data, setData] = useState([]);
//   const [isShimmer, setIsShimmer] = useState(false);
//   const [count, setCount] = useState(1);

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     makeApiCall(count);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [count]);

//   const handleScroll = () => {
//     if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
//       setCount((prevCount) => prevCount + 1);
//     }
//   };

//   const makeApiCall = async (count) => {
//     setIsShimmer(true);
//     try {
//       const apiResponse = await fetch(
//         `https://jsonplaceholder.typicode.com/photos?_page=${count}&_limit=24`
//       );
//       const jsonResponse = await apiResponse.json();
//       setIsShimmer(false);
//       setData([...data, ...jsonResponse]);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setIsShimmer(false);
//     }
//   };

//   return (
//     <div className="home">
//       {isShimmer ? (
//         <ShimmerUI />
//       ) : (
//         data?.map((item) => {
//           return <ItemCard key={item.id} item={item} />;
//         })
//       )}
//     </div>
//   );
// }

// export default Home;

import React, {useState, useEffect} from 'react'
import ItemCard from './itemCard';
import "../App.css";
import ShimmerUI from './shimmerUI';
import useInfiniteScroll from './useInfiniteScroll';

function Home() {
  const makeApiCall = async (page) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=16`);
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  };

  const { isLoading, data} =useInfiniteScroll(makeApiCall)
  return (
    <div>
    {isLoading ? <ShimmerUI/> : <div className='home'>
      {data?.map((item)=>{
        return <ItemCard key ={item.id} item={item}/>
      })}
    </div>}
    </div>
  )
}

export default Home;
