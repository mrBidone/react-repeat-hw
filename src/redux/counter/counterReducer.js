import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  counter: 0,
  step: 1,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: INITIAL_STATE,
  reducers: {
    plusClick: (state, action) => {
      state.counter += state.step;
    },
    minusClick: (state, action) => {
      state.counter -= state.step;
    },
    resetClick: () => {
      return INITIAL_STATE;
    },
    changeStep: (state, action) => {
      state.step = action.payload;
    },
  },
});

export const counterReducer = counterSlice.reducer;

export const { plusClick, minusClick, resetClick, changeStep } =
  counterSlice.actions;

export const selectCounter = (state) => state.counter.counter;
export const selectStep = (state) => state.counter.step;

// export const counterReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case plusClick.type: {
//       return {
//         ...state,
//         counter: state.counter + state.step,
//       };
//     }
//     case minusClick.type: {
//       return {
//         ...state,
//         counter: state.counter - state.step,
//       };
//     }
//     case resetClick.type: {
//       return INITIAL_STATE;
//     }
//     case changeStep.type: {
//       return { ...state, step: action.payload };
//     }
//     default:
//       return state;
//   }
// };

// ACTIONS =========>

// export const plusClick = () => {
//   return {
//     type: "INCREMENT",
//   };
// };

// export const minusClick = () => {
//   return {
//     type: "DECREMENT",
//   };
// };

// export const resetClick = () => {
//   return { type: "RESET" };
// };

// export const changeStep = (step) => {
//   return { type: "CHANGE_STEP", payload: step };
// };

// createActions =============>

// export const plusClick = createAction("increment");
// export const minusClick = createAction("decrement");
// export const resetClick = createAction("reset");
// export const changeStep = createAction("changeStep");
// повертає {type: "changeStep(5), payload: 5"}
