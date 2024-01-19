import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { PlaygroundState } from './playgroundSlice.interface';
import { getGraphiqlData, getApiShema } from './playgroundThunks';
import { GraphQLSchema } from 'graphql';

const initialState: PlaygroundState = {
  editorValue: '',
  graphiqlApiUrl: '',
  isLoading: false,
  responseData: null,
  apiSchema: undefined,
  invalidApi: false,
  headers: '',
  variables: '',
  isDocsExists: false,
};

export const playgroundSlice = createSlice({
  name: 'playground',
  initialState,
  reducers: {
    setEditorValue: (state, action: PayloadAction<string>) => {
      state.editorValue = action.payload;
    },
    setGraphiqlApiUrl: (state, action: PayloadAction<string>) => {
      state.graphiqlApiUrl = action.payload;
      state.responseData = null;
      state.apiSchema = undefined;
      state.invalidApi = false;
    },
    setHeaders: (state, action: PayloadAction<string>) => {
      state.headers = action.payload;
    },
    setVariables: (state, action: PayloadAction<string>) => {
      state.variables = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getGraphiqlData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getGraphiqlData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.responseData = action.payload;
    });
    builder.addCase(
      getApiShema.fulfilled,
      (state, action: PayloadAction<GraphQLSchema>) => {
        state.apiSchema = action.payload;
        state.invalidApi = false;
        state.isDocsExists = true;
      }
    );
    builder.addCase(getApiShema.rejected, (state) => {
      state.apiSchema = undefined;
      state.invalidApi = true;
      state.isDocsExists = false;
    });
  },
});

export const { setEditorValue, setGraphiqlApiUrl, setHeaders, setVariables } =
  playgroundSlice.actions;
export default playgroundSlice.reducer;
