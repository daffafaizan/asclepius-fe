const BASE_URL = "http://34.101.232.88:3000/";

const ENDPOINT = {
  predict: `${BASE_URL}/predict`,
};

class PredictAPI {
  static async predict(data) {
    const response = await fetch(ENDPOINT.predict, {
      method: "POST",
      body: data,
      redirect: "follow",
    });

    const json = await response.json();
    return json;
  }
}
