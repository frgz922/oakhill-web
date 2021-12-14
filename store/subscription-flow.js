const initialState = {
  fundSeries: null,
  isDiscretionary: false,
  currentSection: null,
  subscriptionIds: [],
  currentSubscriptionId: null,
  accountType: "individual" | "joint" | "corporate",
  basicOrderData: {
    lastName: null,
    firstName: null,
    middleInitial: null,
    numOfSubscriptions: 0,
    subscriptionType: null,
    fundCode: null,
    accountNumber: null,
    sin: null,
    amountDolars: null,
    dob: null,
  },
  currentSubscriptionData: {
    clientData: {
      contactData: {
        lastName: null,
        firstName: null,
        phone: null,
        email: null,
        address: null,
        isRegistrantUnderSecuritiesLegislation: false,
        title: null,
      },
      title: null,
      lastName: null,
      firstName: null,
      middleInitial: null,
      birthDate: null,
      address: null,
      citizenship: null,
      countryOfResidence: null,
      email: null,
      phone1: null,
      phone2: null,
      socialInsurance: null,
      trustedContact: false,
    }, //not null, joint
    jointClientData: {
      title: null,
      lastName: null,
      firstName: null,
      middleInitial: null,
      birthDate: null,
      address: null,
      citizenship: null,
      countryOfResidence: null,
      email: null,
      phone1: null,
      phone2: null,
      socialInsurance: null,
    }, //can be null, joint
    corporationData: {
      entityType: null,
      jurisdictionOfEntity: null,
      entityName: null,
      typeOfBusiness: null,
      businessIdNumber: null,
      address: null,
      phone: null,
      faxNumber: null,
      primaryContact: null,
      email: null,
      contactData: {
        lastName: null,
        firstName: null,
        phone: null,
        email: null,
        address: null,
        isRegistrantUnderSecuritiesLegislation: false,
        title: null,
      },
      trustedContact: false,
    },
    registrationInstructions: {
      sameAsClientData: false,
      name: null,
      accountReference: null,
      streetAddress: null,
      city: null,
      province: null,
      country: null,
      postalCode: null,
    },
    deliveryInstructions: {
      sameAsClientData: false,
      name: null,
      accountReference: null,
      streetAddress: null,
      city: null,
      province: null,
      country: null,
      postalCode: null,
    },
    accountDetails: {
      cash: false,
      registrationPlan: false,
      registrationPlanType: null, // can be null,
      nomineeAccount: false,
      clientNameAccount: null,
    },
    employmentInformation: {
      occupation: null,
      employerName: null,
      employerContact: null,
    },
  },
};

export const state = () => initialState;

export const getters = {
  getBasicOrderData(state) {
    return state.basicOrderData;
  },
  getIsDiscretionary(state) {
    return state.isDiscretionary;
  },
  getSubcriptionsIds(state) {
    return state.subsIds;
  },
  getCurrentSubscriptionId(state) {
    return state.currentSubscriptionId;
  },
  getCurrentAccountType(state) {
    return state.accountType;
  },
  getCurrentSection(state) {
    return state.currentSection;
  },
  getCurrentClientData(state) {
    return state.currentSubscriptionData.clientData;
  },
  getCurrentJointClientData(state) {
    return state.currentSubscriptionData.jointClientData;
  },
  getCurrentCorporationData(state) {
    return state.currentSubscriptionData.corporationData;
  },
  getCurrentRegistrationInstructions(state) {
    return state.currentSubscriptionData.registrationInstructions;
  },
  getCurrentDeliveryInstructions(state) {
    return state.currentSubscriptionData.deliveryInstructions;
  },
  getCurrentAccountDetails(state) {
    return state.currentSubscriptionData.accountDetails;
  },
  getCurrentEmploymentInformation(state) {
    return state.currentSubscriptionData.employmentInformation;
  },
};

export const mutations = {
  setBasicOrderData(state, basicOrderData) {
    state.basicOrderData = {
      ...state.basicOrderData,
      ...basicOrderData,
    };
    updateSubscriptionLocalStorageValue(
      "basicOrderData",
      JSON.stringify(state.basicOrderData)
    );
  },
  setSubscriptionsIds(state, subsIds) {
    state.subsIds = subsIds;
    updateSubscriptionLocalStorageValue("subsIds", subsIds);
  },
  setCurrentSubscriptionId(state, id) {
    state.currentSubscriptionId = id;
    updateSubscriptionLocalStorageValue(
      "currentSubscriptionId",
      state.currentSubscriptionId
    );
  },
  setCurrentAccountType(state, accountType) {
    state.accountType = accountType;
    updateSubscriptionLocalStorageValue("accountType", state.accountType);
  },
  setCurrentSection(state, currentSection) {
    state.currentSection = currentSection;
  },
  setIsDiscretionary(state, isDiscretionary) {
    state.isDiscretionary = isDiscretionary;
    updateSubscriptionLocalStorageValue(
      "isDiscretionary",
      state.isDiscretionary
    );
  },
  setCurrentSubscriptionData(state, subscriptionData) {
    state.currentSubscriptionData = {
      ...state.currentSubscriptionData,
      ...subscriptionData,
    };
  },
};

export const actions = {
  // hydrateBasicOrderData: Puts localstorage data about basic order & subscription ids in the current store state.
  async hydrateBasicOrderData({ commit }) {
    const basicOrderDataFromStorage = localStorage.getItem("basicOrderData");
    if (basicOrderDataFromStorage) {
      await commit("setBasicOrderData", JSON.parse(basicOrderDataFromStorage));
    }
    const subsIdsFromStorage = localStorage.getItem("subsIds");
    if (subsIdsFromStorage) {
      await commit("setSubscriptionsIds", subsIdsFromStorage.split(","));
    }
    const isDiscretionaryFromStorage = localStorage.getItem("isDiscretionary");
    if (isDiscretionaryFromStorage) {
      await commit("setIsDiscretionary", isDiscretionaryFromStorage);
    }
  },
  async saveBasicOrderData(
    { commit },
    { numOfSubscriptions, ...basicOrderData }
  ) {
    await this.$fetchCinchyQuery(
      "setInitialSubscriptionAgreement",
      basicOrderData,
      "Website",
      true,
      true
    );
    await commit("setBasicOrderData", basicOrderData);
    // TODO: Capture actual subsIds from server.
    const subsIds = [];
    for (let i = 0; i < numOfSubscriptions; i++) {
      subsIds.push(i + 1);
    }
    await commit("setSubscriptionsIds", subsIds);
  },
  // fetchCurrentSubscriptionData: gets the stored data for the subscriptionId passed as parameter & sets the current sub id to this parameter.
  async fetchCurrentSubscriptionData({ commit }, subscriptionId) {
    await cleanCurrentSubscriptionData(commit);
    await commit("setCurrentSubscriptionId", subscriptionId);
    // TODO: replace fetching & mapping from local storage to actual server implementation
    const subscriptionData = fetchSubscriptionFromLocalStorage(subscriptionId);
    if (subscriptionData) {
      await mapSubscriptionFromLocalStorage(commit, subscriptionData);
    }
  },
  // patchCurrentSubscriptionData: Updates in server & store the current sub data, shold be sent as partial data of initialState.currentSubscriptionData e.g { clientData: {  ...data } }
  async patchCurrentSubscriptionData({ commit, getters }, partialSubData) {
    const currentSubId = getters.getCurrentSubscriptionId;
    patchSubscriptionFromLocalStorage(currentSubId, partialSubData);
    await commit("setCurrentSubscriptionData", partialSubData);
  },
};

const updateSubscriptionLocalStorageValue = (key, value) => {
  if (value) {
    localStorage.setItem(key, value);
  } else {
    localStorage.removeItem(key);
  }
};

const fetchSubscriptionFromLocalStorage = (id) => {
  const data = localStorage.getItem(`subscription-${id}`);
  return data ? JSON.parse(data) : null;
};

const patchSubscriptionFromLocalStorage = (id, data) => {
  localStorage.setItem(`subscription-${id}`, JSON.stringify(data));
};

const mapSubscriptionFromLocalStorage = async (commit, subscriptionData) => {
  await commit("setCurrentSubscriptionData", subscriptionData);
};

const cleanCurrentSubscriptionData = async (commit) => {
  await commit(
    "setCurrentSubscriptionData",
    initialState.currentSubscriptionData
  );
};
