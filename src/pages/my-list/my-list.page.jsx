import React from "react";
import { createRef } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import Title from "../../components/title/title.component";
import data from "../../data.json";
import Item from "../../components/item/item.component";

export default class MyListPage extends React.Component {
  render() {
    return (
      <div className="record__page">
        <Header />
        <div className="record__container">
          <h1 className="record__title">Mes enregistrements</h1>
          <div className="record__section">
            <Title content="Reprendre la lecture" />
            <div className="resume">
              {data
                .filter((el) => el.type === "documentary")
                .map((el) => {
                  return (
                    <Link to={`/player?id=${el.imdbID}`}>
                      <div>
                        <img src={el.coverUrl}></img>
                        <div className="progression"></div>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
          <div className="record__section">
            <div className="myRecords">
              <Title content="Tous mes enregistrements" />
              <div className="inputContent">
                <div className="inputTitle">Trier par :</div>
                <div className="input">Catégories</div>
              </div>
            </div>
            <div className="records">
              {data
                .filter((el) => el.type === "documentary")
                .map((el) => {
                  return (
                    <Link to={`/player?id=${el.imdbID}`}>
                      <div>
                        <img src={el.coverUrl}></img>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
