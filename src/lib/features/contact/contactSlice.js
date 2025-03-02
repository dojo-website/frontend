// contactSlice.js
import getContacts from "@/services/contactUs";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContact = createAsyncThunk(
  "contact/fetchContact",
  async () => {
    const response = await getContacts();

    return response;
  }
);

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    data: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContact.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchContact.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchContact.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default contactSlice.reducer;
