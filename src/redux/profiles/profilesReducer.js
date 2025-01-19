import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const apiGetAllProfiles = createAsyncThunk(
  "profiles/getAll",
  async () => {
    try {
      const { data } = await axios.get(
        "https://678aa23cdd587da7ac2aeb83.mockapi.io/api/v1/profile"
      );
      console.log("data: ", data);
    } catch (error) {}
  }
);

const INITIAL_STATE = {
  profiles: [],
  showProfilesList: true,
};

const profileSlice = createSlice({
  name: "profiles",
  initialState: INITIAL_STATE,
  reducers: {
    addProfile: (state, action) => {
      state.profiles.push(action.payload);
    },
    deleteProfile: (state, action) => {
      state.profiles = state.profiles.filter(
        (profile) => profile.id !== action.payload
      );
    },
    showProfilesList: (state, action) => {
      state.showProfilesList = action.payload;
    },
  },
});

export const profilesReducer = profileSlice.reducer;

export const { addProfile, deleteProfile, showProfilesList } =
  profileSlice.actions;

// ВАНІЛЬНИЙ РЕДАКС ================>

// export const profilesReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case "profiles/add": {
//       return {
//         ...state,
//         profiles: [...state.profiles, action.payload],
//       };
//     }
//     case "profiles/delete": {
//       return {
//         ...state,
//         profiles: state.profiles.filter(
//           (profile) => profile.id !== action.payload
//         ),
//       };
//     }
//     case "profiles/showProfilesList": {
//       return {
//         ...state,
//         showProfilesList: action.payload,
//       };
//     }
//     default:
//       return state;
//   }
// };

// export const addProfile = (payload) => {
//   return {
//     type: "profiles/add",
//     payload,
//   };
// };

// export const deleteProfile = (profileId) => {
//   return {
//     type: "profiles/delete",
//     payload: profileId,
//   };
// };

// export const showProfilesList = (payload) => {
//   return {
//     type: "profiles/showProfilesList",
//     payload,
//   };
// };
