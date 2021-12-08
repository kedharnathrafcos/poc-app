import { VaccineActionTypes } from "../constants/actionTypes";

 
export const vaccineReducer = (state={},{type,payload})=>{
    switch(type){
        case VaccineActionTypes.GET_DASHOBORD_DATA:
            return {...state,payload};
          default :
            return state;
    }

}