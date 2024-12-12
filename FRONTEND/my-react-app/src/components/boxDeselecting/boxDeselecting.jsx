
import React, { useState } from "react";
import styles from "./boxDeselecting.module.css";

function BoxDeselecting() {
  const [order, setOrder] = useState([]);
  const [isDeactivating, setIsDeactivating] = useState(false);

  const config = [
    [1, 1, 1],
    [1, 0, 0],
    [1, 1, 1],
  ];

  const handleCellClick = (index) => {
    const newOrder = [...order, index];
    setOrder(newOrder);
    console.log(newOrder, "order");
    if (newOrder.length === config.flat(1).filter(Boolean).length) {
      deactivatingCells();
    }
  };

  const deactivatingCells = () => {
    setIsDeactivating(true);
    const timerId = setInterval(() => {
      setOrder((originalOrder) => {
        const newOrder = originalOrder.slice();
        newOrder.pop();
        if (newOrder.length === 0) {
          clearInterval(timerId);
          setIsDeactivating(false);
        }
        return newOrder;
      });
    }, 500);
  };

  const handleGridClick = (event) => {
    const target = event.target;
    const index = Array.from(target.parentNode.children).indexOf(target);
    console.log(target, index, event,"AA")
    if (target.tagName === "BUTTON") {
      handleCellClick(index);
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.grids}
        style={{ gridTemplateColumns: `repeat(${config[0].length}, 1fr)` }}
        onClick={handleGridClick} // Use event delegation here
      >
        {config.flat(1).map((boxes, index) => {
          return boxes ? (
            <Cell
              key={index}
              filled={order.includes(index)}
              isDisabled={order.includes(index) || isDeactivating}
            />
          ) : (
            <span key={index} />
          );
        })}
      </div>
    </div>
  );
}

const Cell = ({ filled, isDisabled }) => {
  return (
    <button
      disabled={isDisabled}
      type="button"
      className={
        filled ? `${styles.cell} ${styles.cellActivated}` : `${styles.cell}`
      }
    />
  );
};

export default BoxDeselecting;





// import React, { useState } from "react";
// import styles from "./boxDeselecting.module.css";

// function BoxDeselecting() {
//   const [order, setOrder] = useState([]);
//   const [isDeactivating, setIsDeactivating] = useState(false);

//   const config = [
//     [1, 1, 1],
//     [1, 0, 0],
//     [1, 1, 1],
//   ];

//   const handleCellClick = (index) => {
//     const newOrder = [...order, index];
//     setOrder(newOrder);
//     console.log(newOrder, "order");
//     if (newOrder.length === config.flat(1).filter(Boolean).length) {
//       deactivatingCells();
//     }
//   };

//   const deactivatingCells = () => {
//     setIsDeactivating(true);
//     const timerId = setInterval(() => {
//       setOrder((originalOrder) => {
//         const newOrder = originalOrder.slice();
//         newOrder.pop();
//         if (newOrder.length == 0) {
//           clearInterval(timerId);
//           setIsDeactivating(false);
//         }
//         return newOrder;
//       });
//     }, 500);
//   };

//   return (
//     <div className={styles.container}>
//       <div 
//         className={styles.grids} style={{ gridTemplateColumns: `repeat(${config[0].length}, 1fr)` }}>
//         {config.flat(1).map((boxes, index) => {
//           return boxes ? (
//             <Cell
//               key={index}
//               filled={order.includes(index)}
//               isCalled={() => handleCellClick(index)}
//               isDisabled={order.includes(index) || isDeactivating}
//             />) : (<span />);
//         })}
//       </div>
//     </div>
//   );
// }
// const Cell = ({ filled, isCalled, isDisabled }) => {
//   return (
//     <button
//     disabled={isDisabled}
//     type="button"
//     onClick={isCalled}
//     className={
//     filled ? `${styles.cell} ${styles.cellActivated}` : `${styles.cell}`
//       }
//     />
//   );
// };

// export default BoxDeselecting;






