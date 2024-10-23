import React, { useEffect, useState } from "react";
import Card from "./card";
import ShimmerUI from "./shimmerUI";

const LIMIT = 15;

function Pagination() {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalProducts, setTotalProducts] = useState(1);

  useEffect(() => {
    fetchProducts()
  }, [currentPage]);

  const fetchProducts = async () => {
    setIsLoading(true)
    try {
      const data = await fetch(
        `https://dummyjson.com/products?limit=${LIMIT}&skip=${LIMIT * currentPage}&select=title,price,thumbnail,description`
      );
      const responseData = await data.json();
      setProducts(responseData?.products);
      setTotalProducts(responseData.total)
      setIsLoading(false)
    } catch (error) {
      console.log(error);
    }
    finally{
      setIsLoading(false)
    }
  };

const handlePreviousPage =()=>{
  setCurrentPage((prev)=> prev-1);
}
const handleNextPage =()=>{
  setCurrentPage((prev)=> prev+1);
}

  return( 
  <>
  {isLoading ? <ShimmerUI/> : <div>
  <div className="pagination">
    {products.length > 0 && products.map((product, index)=><Card key={index} product={product}/>)}
  </div>
  <div className="pageLists">
      {currentPage > 0 && <span onClick={()=>handlePreviousPage()}>Prev</span>}
      {[...Array(Math.ceil(totalProducts/LIMIT)).keys()].map((pn, index)=><span className={currentPage === index && 'pageCurrent'} key={index} onClick={()=>{setCurrentPage(pn)}}>{pn+1}</span>)}
      {currentPage < Math.ceil(totalProducts/LIMIT) -1 && <span onClick={()=>handleNextPage()}>Next</span>}
    </div>
    </div>}
  </>)
}

export default Pagination;




// For dynamic pagination bar
// import React, { useEffect, useState } from "react";
// import Card from "./card";

// const LIMIT = 15;
// const PAGE_WINDOW = 5; // Number of pages visible at a time

// function Pagination() {
//   const [products, setProducts] = useState([]);
//   const [currentPage, setCurrentPage] = useState(0);
//   const [totalProducts, setTotalProducts] = useState(1);

//   useEffect(() => {
//     fetchProducts();
//   }, [currentPage]);

//   const fetchProducts = async () => {
//     try {
//       const data = await fetch(
//         `https://dummyjson.com/products?limit=${LIMIT}&skip=${LIMIT * currentPage}&select=title,price,thumbnail,description`
//       );
//       const responseData = await data.json();
//       setProducts(responseData?.products);
//       setTotalProducts(responseData.total);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handlePreviousPage = () => {
//     setCurrentPage((prev) => Math.max(prev - 1, 0));
//   };

//   const handleNextPage = () => {
//     setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(totalProducts / LIMIT) - 1));
//   };

//   const totalPages = Math.ceil(totalProducts / LIMIT);
//   const startPage = Math.floor(currentPage / PAGE_WINDOW) * PAGE_WINDOW;
//   const endPage = Math.min(startPage + PAGE_WINDOW, totalPages);

//   return (
//     <>
//       <div className="pagination">
//         {products.length > 0 &&
//           products.map((product, index) => <Card key={index} product={product} />)}
//       </div>
//       <div className="pageLists">
//         {currentPage > 0 && (
//           <span onClick={handlePreviousPage}>Prev</span>
//         )}
//         {startPage > 0 && (
//           <span onClick={() => setCurrentPage(0)}>First</span>
//         )}
//         {Array.from({ length: endPage - startPage }, (_, i) => startPage + i).map((pn) => (
//           <span
//             className={currentPage === pn ? "pageCurrent" : ""}
//             key={pn}
//             onClick={() => setCurrentPage(pn)}
//           >
//             {pn + 1}
//           </span>
//         ))}
//         {endPage < totalPages && (
//           <span onClick={() => setCurrentPage(totalPages - 1)}>Last</span>
//         )}
//         {currentPage < totalPages - 1 && (
//           <span onClick={handleNextPage}>Next</span>
//         )}
//       </div>
//     </>
//   );
// }

// export default Pagination;
