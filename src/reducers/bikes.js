import { RETRIEVE_BIKES } from "../actions/types";

const initialState = [];

export default function(bikes = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case RETRIEVE_BIKES:
      return payload;

    default:
      return bikes;
  }
}
