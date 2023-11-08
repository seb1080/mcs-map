class Configuration {
  get map() {
    return {
      style: "mapbox://styles/mapbox/streets-v12",
      zoom: 9,
    };
  }
}

export const config = new Configuration();
