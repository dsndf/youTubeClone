import React, { createContext, useEffect } from "react";
import {
  BrowserRouter,
  Link,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { fetchData } from "./utils/api";
import ApiContext from "./context/ApiContext";
import Header from "./components/Header";
import Feed from "./components/Feed";
import VideoDetails from "./components/VideoDetails";
import SearchResults from "./components/SearchResults";
import Home from "./components/Home";

const App = () => {
  return (
    <ApiContext>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Feed />}>
            <Route indexed path="/" element={<Home />}></Route>
            <Route
              path="/search/results/:keyword"
              element={<SearchResults />}
            />
          </Route>
          <Route path="/video/:id" element={<VideoDetails />} />
        </Routes>
      </BrowserRouter>
    </ApiContext>
  );
};

export default App;
