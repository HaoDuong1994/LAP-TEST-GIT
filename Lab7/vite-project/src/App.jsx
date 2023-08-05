import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [court, setCourt] = useState(0);
  const [page, setPage] = useState(1);
  const [data, setData] = useState(null);
  //document.title = `You click ${court} time`;

  useEffect(() => {
    document.title = `You click ${court} time`;
  });

  useEffect(() => {
    const makeRequest = async () => {
      const res = await fetch(`https://reqres.in/api/users?page=${page}`);
      const resData = await res.json();
      setData(resData);
    };
    makeRequest();
  }, [page]);
  function handleLick(clickedPage) {
    if (clickedPage === page) return;

    setPage(clickedPage);
  }
  console.log(data);

  return (
    <div>
      {Array.from(Array(data?.total_pages ?? 0).keys()).map((item, index) => {
        return (
          <button
            onClick={() => {
              handleLick(index + 1);
            }}
            className={index + 1 === page ? "active" : ""}>
            {index + 1}
          </button>
        );
      })}
    </div>
  );
}

export default App;
