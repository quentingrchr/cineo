export const lastReleases = (array, type = "movie", nb = 6) => {
  let res = array.filter((el) => {
    return (
      el.type === type &&
      (el.year === 2018 ||
        el.year === 2019 ||
        el.year === 2020 ||
        el.year === 2016 ||
        el.year === 2017)
    );
  });
  return res.slice(0, nb);
};

export const moviesOnly = (array, nb = 8) => {
  let res = array.filter((el) => el.type === "movie");
  return res.slice(0, nb);
};

export const seriesOnly = (array, nb = 8) => {
  let res = array.filter((el) => el.type === "serie");
  return res.slice(0, nb);
};

export const originalsOnly = (array, nb = 8) => {
  let res = array.filter((el) => el.original === "original");
  return res.slice(0, nb);
};

export const animationOnly = (array, nb = 8) => {
  let res = array.filter((el) => el.genre.includes("Animation"));
  return res.slice(0, nb);
};

export const trendingNow = (array, nb = 8) => {
  let res = array.filter((el) => el.trending === "trending");
  return res.slice(0, nb);
};

export const searchByTitle = (array, string, nb = 8) => {
  if (string.length < 3) return [];

  var checkTitle = (name, string) => {
    var pattern = string
      .split("")
      .map((x) => {
        return `(?=.*${x})`;
      })
      .join("");
    var regex = new RegExp(`${pattern}`, "g");
    return name.match(regex);
  };

  var filteredArr = array.filter((x) => {
    if (x.type !== "soon") {
      var xSub = x.title.substring(0, 3).toLowerCase();
      return x.title.toLowerCase().includes(string) || checkTitle(xSub, string);
    }
  });
  return filteredArr;
};

export const comingSoon = (array, string, nb = 8) => {
  let res = array.filter((el) => el.type === "soon");
  return res.slice(0, nb);
};

export const originalsSeriesOnly = (array, nb = 8) => {
  let res = array.filter(
    (el) => el.original === "original" && el.type === "serie"
  );
  return res.slice(0, nb);
};

export const originalsMoviesOnly = (array, nb = 8) => {
  let res = array.filter(
    (el) => el.original === "original" && el.type === "movie"
  );
  return res.slice(0, nb);
};

export const comedySeriesOnly = (array, nb = 8) => {
  let res = array.filter((el) => {
    return el.genre.indexOf("Comedie") !== -1 && el.type === "serie";
  });
  console.log(res);
  return res.slice(0, nb);
};

export const quarantined = (array, nb = 8) => {
  let res = array.filter((el) => el.quarantined === "quarantined");
  return res.slice(0, nb);
};

export const animeSeriesOnly = (array, nb = 8) => {
  let res = array.filter(
    (el) => el.genre.indexOf("Animé") !== -1 && el.type === "serie"
  );

  return res.slice(0, nb);
};

export const animationMoviesOnly = (array, nb = 8) => {
  let res = array.filter(
    (el) =>
      el.genre.indexOf("Animation") !== -1 &&
      el.type === "movie" &&
      el.original === ""
  );

  return res.slice(0, nb);
};

export const actionMoviesOnly = (array, nb = 8) => {
  let res = array.filter(
    (el) => el.genre.indexOf("Action") !== -1 && el.type === "movie"
  );

  return res.slice(0, nb);
};
