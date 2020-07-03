import {
  ADD_DRIVE,
  GET_DRIVES,
  GET_DRIVE,
  DRIVE_ERROR,
  SET_CURRENT_DRIVE,
  DRIVE_ASSIGN_VOL,
  DRIVE_ACCEPT_VOL,
} from "../actions/types";

const initialstate = {
  drives: [],
  currentDrive: null,
};

export default (state = initialstate, action) => {
  const { type, payload } = action;
  switch (type) {
    case DRIVE_ASSIGN_VOL : 
      return state;
    case GET_DRIVES:
      return {
        ...state,
        drives: payload,
      };
    case ADD_DRIVE:
      return {
        ...state,
        drives: [payload, ...state.drives],
      };
    case GET_DRIVE:
    case SET_CURRENT_DRIVE:
      return {
        ...state,
        currentDrive: payload,
      };
    case DRIVE_ERROR:
      return {
        ...state
      }
    case DRIVE_ACCEPT_VOL:
      console.log(payload);
      return{
        ...state,
        drives : state.drives.filter(drive=>{
          if(drive._id === payload.id){
            console.log(drive)
            drive.volunteersAccepted = [drive.volunteersAccepted,payload.acceptVolunteers]
            console.log(drive)

            return drive; 
          }
          else{
            return drive;
          }
        })
      }
    default:
      return state;
  }
};
