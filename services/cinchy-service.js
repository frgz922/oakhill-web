import qs from "qs";
import _ from "lodash";

const tokenFieldName = "cinchyWebToken";
const tokenExpiresFieldName = "cinchyWebTokenExpires";

const getCinchyWebToken = async ($axios) => {
  try {
    const currentToken = !process.client
      ? null
      : localStorage.getItem(tokenFieldName);
    const tokenExpires = !process.client
      ? null
      : localStorage.getItem(tokenExpiresFieldName);

    if (currentToken && tokenExpires > Math.floor(Date.now() / 1000)) {
      return currentToken;
    }

    const data = await $axios.$post(
      "http://35.183.146.63/AssetManagement/CinchySSO/identity/connect/token",
      qs.stringify({
        client_id: "oakhill-web",
        client_secret: "F5B8E17B-CAD5-4002-B188-0E0231FF205F",
        grant_type: "password",
        scope: "js_api",
        username: "webapp",
        password: "cinchy",
      }),
      {
        headers: {
          "content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      }
    );

    const { access_token, expires_in } = data;
    const nowInSeconds = Math.floor(Date.now() / 1000);
    const expires = nowInSeconds + expires_in;
    localStorage.setItem(tokenFieldName, access_token);
    localStorage.setItem(tokenExpiresFieldName, expires);
    return access_token;
  } catch (e) {
    console.error("Error getting cinchy token", e);
  }
};

export default ($axios) => ({
  fetchCinchyQuery: async (
    queryName,
    params = null,
    prefix = "Website",
    postData = false,
    mapParams = false
  ) => {
    try {
      if (mapParams && params) {
        params = mapParamsToCinchyQueryParams(params);
      }
      const currentToken = await getCinchyWebToken($axios);
      const queryData = await $axios.$get(
        `http://35.183.146.63/AssetManagement/Cinchy/API/${prefix}/${queryName}`,
        {
          headers: {
            Authorization: `Bearer ${currentToken}`,
          },
          params,
        }
      );

      if (postData) {
        return true;
      } else {
        let schema = queryData.schema;
        let data = queryData.data;
        let items = {};

        const mappedData = data.map((value) => {
          items = {};
          schema.forEach((column, index) => {
            items[_.camelCase(column.columnName)] = value[index];
          });
          return items;
        });

        return mappedData;
      }
    } catch (e) {
      console.error("Error fetching cinchy query data", e);
    }
  },
});

const mapParamsToCinchyQueryParams = (params) => {
  let mapped = {};
  Object.keys(params).map((key) => {
    mapped[`@${key}`] = params[key];
  });

  return mapped;
};
