// create initial state

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createJob, deleteJob, getJob, getJobs, updateJob } from "./jobAPI";

const initialState = {
  jobs: [],
  isLoading: false,
  isError: false,
  error: "",
  job: {},
};

// create async thunk functions

export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async () => {
  const jobs = await getJobs();
  return jobs;
});

export const fetchJob = createAsyncThunk("jobs/fetchJob", async (id) => {
  const job = await getJob(id);
  return job;
});

export const addJobs = createAsyncThunk("jobs/addJobs", async (data) => {
  const jobs = await createJob(data);
  return jobs;
});

export const editJobs = createAsyncThunk(
  "jobs/editJobs",
  async ({ id, data }) => {
    const jobs = await updateJob(id, data);
    return jobs;
  }
);

export const removeJobs = createAsyncThunk("jobs/removeJobs", async (id) => {
  const jobs = await deleteJob(id);
  return jobs;
});

// create reducer

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      //   fetch jobs
      .addCase(fetchJobs.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
        state.jobs = [];
      })

      //   fetch job
      .addCase(fetchJob.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.job = action.payload;
      })
      .addCase(fetchJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
        state.jobs = {};
      })

      //   create jobs

      .addCase(addJobs.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(addJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.jobs.push(action.payload);
      })
      .addCase(addJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })

      //   edit jobs

      .addCase(editJobs.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(editJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        const indexToUpdate = state.jobs.findIndex(
          (job) => job.id === action.payload.id
        );
        state.jobs[indexToUpdate] = action.payload;
      })
      .addCase(editJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })

      //   delete jobs

      .addCase(removeJobs.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(removeJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        const indexToDelete = action.meta.arg;
        state.jobs = state.jobs.filter((job) => job.id !== indexToDelete);
      })
      .addCase(removeJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default jobSlice.reducer;
export const { editActive, editInActive } = jobSlice.actions;
