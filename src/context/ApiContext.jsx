import React, { Children, createContext, useEffect, useState } from "react";
import { fetchData } from "../utils/api";
import Loader from "../components/Loader";
export const Context = createContext();

const ApiContext = (props) => {
  
  const [apiData, setApiData] = useState([]);
  const [mode,setMode] = useState("Dark");
  const [loader, setLoader] = useState(false);
  const[selectCategories,setSelectCategories] = useState("New");
  const [menuToggle,setMenuToggle] = useState(false);
  const [page,setPage] = useState(1);

  const getData = async (query) => {
    setLoader(true);
    let data = await fetchData(`search/?q=${query}`);

    setApiData(data.contents);
    setLoader(false);
  };
  useEffect(() => {
    getData(selectCategories);
  }, [selectCategories]);

  return (
    <Context.Provider
      value={{
        apiData,
         setApiData,
        selectCategories,
        setSelectCategories,
        loader,
        setLoader,
        menuToggle,
        setMenuToggle
        ,setPage
        ,page,
        mode,
        setMode
      }}
    >
      <>
      {loader&&<Loader/>}
      {props.children}
      
      </>
    </Context.Provider>
  );
};

export default ApiContext;
