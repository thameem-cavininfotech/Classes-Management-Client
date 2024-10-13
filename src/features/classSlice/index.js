import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  classesData: [],
  classData: {},
  loading: false,
};

const classSlice = createSlice({
  name: "class",
  initialState,
  reducers: {
    classLoading: (state, action) => {
      state.loading = action.payload;
    },
    classesData: (state, action) => {
      state.classesData = action.payload;
    },
    classData: (state, action) => {
      state.classData = action.payload;
    },
    classDeleteData: (state, action) => {
      const deleteData = state.classesData?.filter(
        (item) => item.classId !== action.payload
      );
      state.classesData = deleteData;
    },
  },
});

export const { classLoading, classesData, classData, classDeleteData } =
  classSlice.actions;
export default classSlice.reducer;
