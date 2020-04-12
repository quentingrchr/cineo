const lastReleases = (array, type = "movie", nb = 6) => {
  let res = array.filter((el) => {
    el.type === type &&
      (el.year === 2018 || el.year === 2019 || el.year === 2020);
  });

  return res.slice(0, nb);
};

const moviesOnly = (array, nb = 8) => {
  let res = array.filter((el) => el.type === "movie");
  return res.slice(0, nb);
};

const seriesOnly = (array, nb = 8) => {
  let res = array.filter((el) => el.type === "serie");
  return res.slice(0, nb);
};

const originalsOnly = (array, nb = 8) => {
  let res = array.filter((el) => el.original === "original");
  return res.slice(0, nb);
};

const animationOnly = (array, nb = 8) => {
  let res = array.filter((el) => el.genre.includes("Animation"));
  return res.slice(0, nb);
};

const animeOnly = (array, nb = 8) => {
  // WIP
};

export default {
  lastReleases,
  moviesOnly,
  seriesOnly,
  originalsOnly,
  animationOnly,
};
