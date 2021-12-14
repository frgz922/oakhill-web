export const state = () => ({
  articles: [
    {
      type: "Article",
      imgSrc: "/images/bg/callout-bg.jpg",
      srcUrl: "",
      title:
        "The Mail on Sunday Silence from bosses over share issues for ordinary investors",
      date: new Date(),
      sourceName: "Media coverage",
      desc:
        "The Mail on Sunday's campaign to ensure retail investors are not discriminated against when successful companies float on the London Stock Exchange is gathering pace.",
    },
    {
      type: "Video",
      imgSrc: "/images/bg/subscribe-bg.jpg",
      srcUrl: "",
      title:
        "The Mail on Sunday Silence from bosses over share issues for ordinary investors",
      date: new Date(),
      sourceName: "Media coverage",
      desc:
        "The Mail on Sunday's campaign to ensure retail investors are not discriminated against when successful companies float on the London Stock Exchange is gathering pace.",
    },
    {
      type: "Webinar",
      imgSrc: "/images/bg/callout-bg.jpg",
      srcUrl: "",
      title:
        "The Mail on Sunday Silence from bosses over share issues for ordinary investors",
      date: new Date(),
      sourceName: "Media coverage",
      desc:
        "The Mail on Sunday's campaign to ensure retail investors are not discriminated against when successful companies float on the London Stock Exchange is gathering pace.",
    },
    {
      type: "Article",
      imgSrc: "/images/bg/subscribe-bg.jpg",
      srcUrl: "",
      title:
        "The Mail on Sunday Silence from bosses over share issues for ordinary investors",
      date: new Date(),
      sourceName: "Media coverage",
      desc:
        "The Mail on Sunday's campaign to ensure retail investors are not discriminated against when successful companies float on the London Stock Exchange is gathering pace.",
    },
  ],
});

export const getters = {
  getArticles(state) {
    return state.articles;
  },
};
