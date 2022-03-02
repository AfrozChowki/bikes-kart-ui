import {
    RETRIEVE_BIKES
} from "./types";

import BikesKartDataService from "../services/bikes-kart.service";

export const retrieveBikes = () => async (dispatch) => {
    try {
        const res = await BikesKartDataService.getAll();

        dispatch({
            type: RETRIEVE_BIKES,
            payload: res.data
        });
    }
    catch(err){
        console.log(err);
    }
}