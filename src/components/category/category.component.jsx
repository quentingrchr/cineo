import React, { Component, createRef } from "react";
import arrowImage from "../../assets/img/arrow.png";

export default class genreSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.categoryButtonRef = createRef();
  }

  handelClick = () => {
    this.state.isOpen
      ? this.setState({ isOpen: false })
      : this.setState({ isOpen: true });
  };

  categoryItemClick = (e) => {
    this.categoryButtonRef.current.innerHTML = e.target.innerHTML;
    this.setState({ isOpen: false });
  };

  globalClick = () => {
    if (this.state.isOpen) {
      this.setState({ isOpen: false });
    }
  };

  render() {
    const { isOpen } = this.state;

    return (
      <div className="category__container">
        <div className="category__title">Catégories</div>

        <button
          className="category__button"
          onClick={() => this.handelClick()}
          ref={this.categoryButtonRef}
        >
          <div className="category__button__text">Genres</div>
          <arrowImage />
        </button>
        {isOpen && (
          <ul className="category__list">
            <li onClick={(e) => this.categoryItemClick(e)}>{this.props.li1}</li>
            <li onClick={(e) => this.categoryItemClick(e)}>{this.props.li2}</li>
            <li onClick={(e) => this.categoryItemClick(e)}>{this.props.li3}</li>
            <li onClick={(e) => this.categoryItemClick(e)}>{this.props.li4}</li>
            <li onClick={(e) => this.categoryItemClick(e)}>{this.props.li5}</li>
            <li onClick={(e) => this.categoryItemClick(e)}>{this.props.li6}</li>
          </ul>
        )}
      </div>
    );
  }
}
