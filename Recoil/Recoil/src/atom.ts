import axios from "axios";
import { atom, selector } from "recoil";

export const counter = atom({
  key: "counter",
  default: 0,
});

export const likes = atom({
  key: "likes",
  default: 0,
});

export const totalCount = selector({
  key: "totalCount",
  get: ({ get }) => {
    return get(counter) + get(likes);
  },
});

export const asyncCounter = atom({
  key: "asyncCounter",
  default: selector({
    key: "asyncCounterDefault",
    get: async () => {
      const res = await axios.get(
        "https://sum-server.100xdevs.com/notificationss"
      );
      return res.data.network;
    },
  }),
});
