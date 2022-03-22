
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from '../firebase';

export const fetchProjectById = createAsyncThunk(
  "post/fetchProjectById",
  async (projectId) => {
    try {
      const response = await db.doc(`projects/${projectId}`).get();
      // const post = await response.data();
      return response.data();
    } catch (err) {
      return console.log(err);
    }
  }
);

export const fetchAllProject = createAsyncThunk(
  "project/fetchAllProject",
  async () => {
    try {
      const response = await db.collection(`projects`)
        .orderBy("priority", "asc").get();
      return response.docs.map(doc => (
        {
          id: doc.id,
          data: doc.data(),
        }
      ));
    } catch (err) {
      return console.log(err);
    }

  }
);


export const fetchResume = createAsyncThunk(
  "project/fetchResume",
  async () => {
    try {
      const snapshot = await db.collection('resume').get()
      return snapshot.docs.map(doc => doc.data());
    } catch (err) {
      return console.log(err);
    }
  }
);


export const initialState = {
  status: "idle",
  path: null,
  projects: [],
  singleProject: [],
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    removeSelectedProject: (state) => {
      state.singleProject = []
    },
  },
  extraReducers: {
    [fetchAllProject.pending]: (state) => {
      state.status = "loading";
    },
    [fetchAllProject.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.projects = action.payload;

    },
    [fetchAllProject.rejected]: (state) => {
      state.status = "error";
    },

    [fetchResume.pending]: (state) => {
      state.status = "loading";
    },
    [fetchResume.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.path = action.payload;


    },
    [fetchResume.rejected]: (state) => {
      state.status = "error";
    },

    [fetchProjectById.pending]: (state) => {
      state.status = "loading";
    },
    [fetchProjectById.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.singleProject = action.payload;
    },
    [fetchProjectById.rejected]: (state) => {
      state.status = "error";
    },

  },
});

export const {
  removeSelectedProject,
} = projectSlice.actions;
export default projectSlice.reducer;
