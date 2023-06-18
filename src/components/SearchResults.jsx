import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context/ApiContext";
import { fetchData } from "../utils/api";
import VideoCard from "./VideoCard";
import SearchResult from "./SearchResult";

const SearchResults = () => {
  const { setLoader,setPage } = useContext(Context);
  const { keyword } = useParams();
  const [res, setRes] = useState([]);
  useEffect(() => {
    setLoader(true);
    setPage(1);
     fetchData(`search/?q=${keyword}`).then((data)=>{
       setRes(data.contents);
        console.log(data.contents);
         setLoader(false);
     }).catch((err)=>{
       console.log("Error",err.response.data.message);
         setLoader("false");
    });
  }, [keyword]);

  return (
    <div className=" dark:bg-black h-[calc(100vh-55px)] overflow-y-auto w-full md:w-[calc(100%-240px)]">
  
      <div className="flex flex-col  overflow-y-auto ">
        {res &&
          res.map((v) => {
            return <SearchResult video={v.video} />;
          })}
      </div>
    </div>
  );
};

export default SearchResults;
