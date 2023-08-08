import { useState, useEffect } from "react";
import "./App.css";
import UserList from "./Component/UserList";
function App() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState(null);
  //document.title = `You click ${court} time`;
  // const newToDo = async () => {
  //   let response = await fetch("https://reqres.in/api/users/2");
  //   let data = await response.json();
  //   console.log(data);
  //   return data;
  // };
  // console.log(page);
  // newToDo();
  // console.log(newToDo);

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
  // const dataUser = data.data;
  // console.log(dataUser);
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
      <UserList data={data?.data} />
    </div>
  );
}

export default App;
