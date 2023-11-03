export const TOP_LEFT = "top-left";

export const mapCenter = { lng: -74.6168176302792, lat: 46.020951517805656 };

export const mapOptions = {
  container: "mapId",
  accessToken: import.meta.env.VITE_MAPBOX_ACCESS_TOKEN,
  style: "mapbox://styles/mapbox/outdoors-v12",
  center: mapCenter,
  zoom: 16,
  attributionControl: false,
};
