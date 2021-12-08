//import axios from '../../utils/axios' 
import  {VaccineActionTypes} from '../constants/actionTypes'

 
export  const getDashboardData = (data) =>{
    return {
        type:VaccineActionTypes.GET_DASHOBORD_DATA,
        payload:data

    }
} 