import { useState } from "react";
import ExploreMenu from "../../ui/ExploreMenu/ExploreMenu";
import Header from "../../ui/header/Header";
import "./Homepage.css";

function Home() {
  const [category, setCategory] = useState("All");

  function updateCategory(category) {
    setCategory(function (val) {
      return val === category ? "All" : category;
    });
  }

  return (
    <div>
      <Header />
      <ExploreMenu category={category} onUpdateCategory={updateCategory} />
    </div>
  );
}

export default Home;
