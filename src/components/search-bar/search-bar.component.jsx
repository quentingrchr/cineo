import React, { Component } from "react";

import data from "../../data.json";
import { searchByName } from "../../data.utils";

import SearchBarItem from "./searc-bar-item.component";
import SearchBarItemThumbnail from "./search-bar-item-thumbnail.component";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      filteredSearch: [],
      thumbnailArray: ["", "", "", ""],
      isFocused: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({ ...this.state, search: e.target.value }, () => {
      this.setState(
        {
          ...this.state,
          filteredSearch: searchByName(data, this.state.search.toLowerCase()),
        },
        () => {
          console.log(this.state);
        }
      );
    });
  }

  handleFocus() {
    this.setState({ ...this.state, isFocused: true });
  }

  handleBlur() {
    this.setState({ ...this.state, isFocused: false });
  }

  render() {
    return (
      <div className="tool__search search">
        <svg viewBox="0 0 26 26">
          <path d="M17.9908 15.4284C21.1118 11.0212 20.068 4.91863 15.6608 1.79836C11.2537 -1.32192 5.15105 -0.278842 2.03078 4.12906C-1.08949 8.53621 -0.0464197 14.6381 4.36148 17.7584C7.5071 19.9854 11.666 20.1569 14.9838 18.1975L22.1929 25.3633C22.9713 26.1827 24.2664 26.2155 25.0858 25.4371C25.9052 24.6595 25.938 23.3644 25.1603 22.545C25.1357 22.5189 25.1119 22.4951 25.0858 22.4705L17.9908 15.4284ZM10.0048 16.0964C6.52219 16.0972 3.69865 13.2759 3.69642 9.79327C3.69567 6.31064 6.51697 3.48711 10.0003 3.48562C13.4785 3.48413 16.3005 6.30095 16.3072 9.7791C16.3132 13.2625 13.4934 16.0905 10.0093 16.0964C10.0078 16.0964 10.0071 16.0964 10.0048 16.0964Z" />
        </svg>
        <div className="search-content-wrapper">
          <input
            type="text"
            placeholder="Rechercher..."
            onChange={(e) => this.handleChange(e)}
            onFocus={() => this.handleFocus()}
            onBlur={() => this.handleBlur()}
            value={this.state.search}
          ></input>

          {this.state.isFocused && (
            <div className="list">
              <ul>
                {this.state.filteredSearch.length !== 0 ? (
                  this.state.filteredSearch.map((el) => {
                    return <SearchBarItem el={el} />;
                  })
                ) : this.state.search.length < 3 ? (
                  this.state.thumbnailArray.map((el) => {
                    return <SearchBarItemThumbnail />;
                  })
                ) : (
                  <h3>Aucun résultat</h3>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }
}
