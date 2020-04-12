import React from "react";
import Number from "../../components/top5/top5.component";
import { ReactComponent as One } from "../../assets/svg/1.svg";
import { ReactComponent as Two } from "../../assets/svg/2.svg";
import { ReactComponent as Three } from "../../assets/svg/3.svg";
import { ReactComponent as Four } from "../../assets/svg/4.svg";
import { ReactComponent as Five } from "../../assets/svg/5.svg";

export default class TopFive extends React.Component {
  render() {
    return (
      <section className="topFive">
        <h2>Top 5 Cinéo</h2>
        <Number>
          <One />
        </Number>
        <Number>
          <Two />
        </Number>
        <Number>
          <Three />
        </Number>
        <Number>
          <Four />
        </Number>
        <Number>
          <Five />
        </Number>
      </section>
    );
  }
}
