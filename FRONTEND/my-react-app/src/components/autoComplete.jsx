import React, { useEffect, useState } from "react";

function AutoComplete() {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [isResultVisible, setIsResultVisible] = useState(false);
  const [cache, setCache] = useState({});

  useEffect(() => {
    let id = setTimeout(() => {
      fetchData();
    }, [500]);
    return () => clearTimeout(id);
  }, [text]);

  const fetchData = async () => {
    if (cache[text]) {
      setData(cache[text]);
    } else {
      const data = await fetch(
        `https://www.google.com/complete/search?client=firefox&q=${text}`
      );
      const response = await data.json();
    //   cache[text] = response[1]
      setData(response[1]);
      const textCache = response[1];
      setCache((prev)=>({...prev, [text]: textCache}))
    }
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="autoMain">
  <input
        className="autoInput"
        type="text"
        value={text}
        onChange={handleChange}
        onBlur={() => setIsResultVisible(false)}
        onFocus={() => setIsResultVisible(true)}
      />
      {isResultVisible && data.length > 0 && (
        <div className="autoInner">
          {data?.map((val, i) => {
            return (
              <li className="autoInnerList" key={i}>
                {val}
              </li>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default AutoComplete;
