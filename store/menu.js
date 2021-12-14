export const state = () => ({
  menuItems: [
    {
      name: "Managers",
      children: [
        {
          name: "UBS O'Connor",
          children: [],
          ref: "/managers/UBS-OConnor",
        },
        {
          name: "Neuberger",
          children: [],
          ref: "/managers/Neuberger",
        },
        {
          name: "Lionguard",
          children: [],
          ref: "/managers/Lionguard",
        },
        {
          name: "Mulvihill",
          children: [],
          ref: "/managers/Mulvihill",
        },
      ],
      ref: "",
    },
    {
      name: "About",
      children: [],
      ref: "/about/about-company",
    },
    {
      name: "Contact",
      children: [],
      ref: "/contact-us",
    },
  ],
});

export const mutations = {
  setFunds(state, founds) {
    let fundsMenu = {
      name: "Funds",
      children: [],
      ref: "",
    };

    fundsMenu.children = founds.map(mapFoundsToMenuItems);

    // Remove duplicates
    state.menuItems = state.menuItems.filter(
      (item) => item.name !== fundsMenu.name
    );

    state.menuItems = [fundsMenu, ...state.menuItems];
  },
};

export const getters = {
  getMenuItems(state) {
    return state.menuItems;
  },
};

export const actions = {
  async fetchMenuData({ commit }) {
    const founds = await this.$fetchCinchyQuery("getProductFundLanding");
    await commit("setFunds", founds);
  },
};

const mapFoundsToMenuItems = (found) => ({
  name: found.webUrl.replaceAll("-", " "),
  children: [],
  ref: {
    path:
      found.productUrl[0] === "/" ? found.productUrl : `/${found.productUrl}`,
    query: {
      id: found.cinchyId,
    },
  },
});
