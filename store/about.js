export const state = () => ({
  history: {
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae fringilla enim. Maecenas venenatis et risus eu euismod. In vel posuere odio, sed posuere justo. Vestibulum vulputate consectetur libero, quis interdum nunc viverra nec. Duis facilisis, felis quis dignissim ultricies, mi purus pharetra tellus, ut volutpat diam arcu vitae orci. In eros nisi, bibendum non gravida at, finibus ut nisl. Aenean consequat arcu eget mauris efficitur tempus. Proin luctus rutrum pretium. Fusce elit mauris, lacinia a fringilla non, dignissim non lacus. Morbi mollis ligula non elit vestibulum, at volutpat mauris laoreet. Morbi non eleifend magna. Duis tincidunt sem nulla, vitae posuere erat hendrerit et. Quisque laoreet consequat metus, pharetra sagittis magna bibendum quis. Aenean nunc enim, condimentum sit amet elit eget, laoreet lobortis odio. Donec mollis rhoncus odio, ut molestie felis consectetur eu. Etiam suscipit magna eget porttitor congue.",
    imgSrc: "/images/about/about01/about-history.webp",
  },
  vision: {
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae fringilla enim. Maecenas venenatis et risus eu euismod. In vel posuere odio, sed posuere justo. Vestibulum vulputate consectetur libero, quis interdum nunc viverra nec. Duis facilisis, felis quis dignissim ultricies, mi purus pharetra tellus, ut volutpat diam arcu vitae orci. In eros nisi, bibendum non gravida at, finibus ut nisl. Aenean consequat arcu eget mauris efficitur tempus. Proin luctus rutrum pretium. Fusce elit mauris, lacinia a fringilla non, dignissim non lacus. Morbi mollis ligula non elit vestibulum, at volutpat mauris laoreet. Morbi non eleifend magna. Duis tincidunt sem nulla, vitae posuere erat hendrerit et. Quisque laoreet consequat metus, pharetra sagittis magna bibendum quis. Aenean nunc enim, condimentum sit amet elit eget, laoreet lobortis odio. Donec mollis rhoncus odio, ut molestie felis consectetur eu. Etiam suscipit magna eget porttitor congue.",
    imgSrc: "/images/about/about01/about-vision.webp",
  },
  leadershipTitle: "Our Leadership Team",
  partners: [
    {
      name: "Marc Raffoul",
      desc:
        "Prior to founding Oak Hill Mr. Raffoul was a managing partner at a leading independent marketing and distribution firm. In that time he was responsible for all aspects of client development and capital raising.\nPrior to that, he was at Canada’s largest independent institutional money manager Fiera Capital where he led sales initiatives across Canada.",
      imgSrc: "/images/about/about01/mark.jpg",
      position: "Managing Partner",
    },
    {
      name: "Anil Singh",
      desc:
        "Mr. Singh's experience includes various roles in both corporate finance and asset management. After starting his career at Dynamic Funds, he worked at a Toronto family office focusing on private equity.\nLeveraging his relationships in the retail brokerage and family office channels, Anil focuses on wholesaling alternative products and mid market corporate finance.",
      imgSrc: "/images/about/about01/anil.jpg",
      position: "Managing Partner",
    },
    {
      name: "Rob Jackson",
      desc:
        "Investment executive with 25 years of experience in asset management. Areas of expertise include Investment Strategy, Portfolio Management, Asset Allocation, Quantitative Investing, Derivatives and Risk Management.",
      imgSrc: "/images/about/about01/rob.jfif",
      position: "Portfolio Manager",
    },
  ],
});

export const getters = {
  getHistory(state) {
    return state.history;
  },
  getVision(state) {
    return state.vision;
  },
  getLeadershipTitle(state) {
    return state.leadershipTitle;
  },
  getPartners(state) {
    return state.partners;
  },
};
