import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/header";
import Navigation from "./components/navigation/navigation";
import Footer from "./components/footer/footer";
import BannerAdd from "./components/banner-add/banner-add";
import Cards from "./page/cards";
import jsonData from "./assets/data.json";
import BannerInfo from "./components/banner-info/banner-info";

function App() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    let info = localStorage.getItem('data');
    if (!info) {
      info = updateStore()
    }
    setInfo(getStore())
  }, [])

  const modifyStorage = ((name, vote) => {
    const copyStore = [...info]
    copyStore.map((item) => {
      if (item.name === name) {
        vote ? item.votes.positive++ : item.votes.negative++;
      }
      return item;
    })
    updateStore(copyStore)
    setInfo(copyStore)
  })

  const updateStore = (json = jsonData) => {
    let formatJson = {};
    if (!json.data) {
      formatJson.data = [...json];
    } else {
      formatJson = json;
    }
    const info = JSON.stringify(formatJson)
    localStorage.setItem('data', info)
    return info;
  }

  const getStore = () => {
    return JSON.parse(localStorage.getItem('data')).data;
  }

  return (
    <section className="App">
      <Navigation />
      <Header />
      <div className="max-centered">
        <BannerInfo />
        <Cards info={info} modifyStorage={modifyStorage} />
        <BannerAdd />
        <hr className="separator" />
        <Footer />
      </div>
    </section>
  );
}

export default App;
