export const state = () => ({
  productDetailsItems: [
    {
      tabTitle: "Overview",
      isActive: true,
    },
    {
      tabTitle: "Operating Calendar",
      isActive: false,
      tabContent: "",
    },
    {
      tabTitle: "Tax",
      isActive: false,
    },
  ],
  productDetailsData: null,
  seriesData: null,
  historicalPerformanceData: null,
  merData: null,
  fundCompositionData: null,
  operatingCalendarData: null,
  fundFactData: null,
  fundDocumentsData: null,
});

export const mutations = {
  setProductDetailsData(state, data) {
    state.productDetailsData = data;
  },
  setSeriesData(state, data) {
    state.seriesData = data;
  },
  setHistoricalPerformanceData(state, data) {
    state.historicalPerformanceData = data;
  },
  setMerData(state, data) {
    state.merData = data;
  },
  setFundCompositionData(state, data) {
    state.fundCompositionData = data;
  },
  setOperatingCalendarData(state, data) {
    state.operatingCalendarData = data;
  },
  setFundFactData(state, data) {
    state.fundFactData = data;
  },
  setFundDocumentsData(state, data) {
    state.fundDocumentsData = data;
  },
};

export const actions = {
  async fetchProductDetailsData({ commit }, productId) {
    let response = await this.$fetchCinchyQuery("getDefaultFundPage", {
      fundId: productId,
    });

    if (response && response.length > 0) {
      await commit("setProductDetailsData", response[0]);
    }
  },

  async fetchSeriesData({ commit }, productId) {
    let response = await this.$fetchCinchyQuery("getFundSeriesDropDown", {
      fundId: productId,
    });

    if (response && response.length > 0) {
      await commit("setSeriesData", response);
    }
  },

  async fetchHistoricalPerformanceData({ commit }, seriesId) {
    let response = await this.$fetchCinchyQuery(
      "getHistoricalPerformance",
      {
        seriesId: seriesId,
      },
      "Product Master"
    );

    if (response && response.length > 0) {
      await commit("setHistoricalPerformanceData", response);
    }
  },

  async fetchMerData({ commit }, seriesId) {
    let response = await this.$fetchCinchyQuery("getFundMER", {
      seriesId: seriesId,
    });

    if (response && response.length > 0) {
      await commit("setMerData", response[0]);
    }
  },

  async fetchFundCompositionData({ commit }, fundId) {
    let response = await this.$fetchCinchyQuery("getFundComposition", {
      fundId: fundId,
    });

    if (response) {
      await commit("setFundCompositionData", response);
    }
  },

  async fetchOperatingCalendarData({ commit }, fundId) {
    let response = await this.$fetchCinchyQuery(
      "getFundOperatingCalendar",
      {
        fundId: fundId,
      },
    );

    if (response && response.length > 0) {
      await commit("setOperatingCalendarData", response);
    }
  },
  
  async fetchFundFactData({ commit }, seriesId) {
    let response = await this.$fetchCinchyQuery(
      "getFundFactSheetURL",
      {
        seriesId: seriesId,
      },
    );

    if (response && response.length > 0) {
      await commit("setFundFactData", response[0]);
    }
  },
  
  async fetchFundDocumentsData({ commit }, seriesId) {
    let response = await this.$fetchCinchyQuery(
      "getFundDocuments",
      {
        seriesId: seriesId,
      },
    );

    if (response && response.length > 0) {
      await commit("setFundDocumentsData", response);
    }
  },
};

export const getters = {
  getProductDetailsItems(state) {
    return state.productDetailsItems;
  },
  getProductDetailsData(state) {
    return state.productDetailsData;
  },
  getSeriesData(state) {
    return state.seriesData;
  },
  getHistoricalPerformanceData(state) {
    return state.historicalPerformanceData;
  },
  getMerData(state) {
    return state.merData;
  },
  getFundCompositionData(state) {
    return state.fundCompositionData;
  },
  getOperatingCalendarData(state) {
    return state.operatingCalendarData;
  },
  getFundFactData(state) {
    return state.fundFactData;
  },
  getFundDocumentsData(state) {
    return state.fundDocumentsData;
  },
};
