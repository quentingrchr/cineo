import React from "react";

import { animationOnly } from "../../data.utils";
import { Link } from "react-router-dom";
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import Title from "../../components/title/title.component";
import data from "../../data.json";
import { SessionContextConsumer } from "../../context/session.context";

export default class MyListPage extends React.Component {
  render() {
    return (
      <SessionContextConsumer>
        {({ movieList, deleteMovie }) => (
          <div className="record__page">
            <Header />
            <div className="record__container">
              <h1 className="record__title">Mes enregistrements</h1>
              <div className="record__section">
                <Title content="Reprendre la lecture" />
                <div className="resume">
                  {animationOnly(data, 5).map((el) => {
                    return (
                      <Link to={`/player?id=${el.imdbID}`}>
                        <div className="img-container">
                          <img src={el.coverUrl} alt="movie cover"></img>
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
                    .filter((el) => movieList.includes(el.imdbID.toString()))
                    .map((el) => {
                      return (
                        <div className="img-container">
                          <Link to={`/player?id=${el.imdbID}`}>
                            <img src={el.coverUrl} alt="movie cover"></img>
                          </Link>
                          <div
                            className="delete__record"
                            onClick={() => deleteMovie(el.imdbID.toString())}
                          ></div>
                        </div>
                      );
                    })}

                  {/* {data
                    .filter((el) => el.type === "movie")
                    .map((el, i) => {
                      if (i > 18) return;
                      return (
                        <div className="img-container">
                          <Link to={`/player?id=${el.imdbID}`}>
                            <img src={el.coverUrl} alt="movie cover"></img>
                          </Link>
                          <div className="delete__record"></div>
                        </div>
                      );
                    })} */}
                </div>
                )}
              </div>
            </div>
            <Footer />
          </div>
        )}
      </SessionContextConsumer>
    );
  }
}
