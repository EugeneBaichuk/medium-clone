import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from 'axios';



export type Article = {
  body: string,
  id:number,
  }

  export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
  }

interface ArticleState {
    articles: Article[];
    status: Status;
  }

const initialState: ArticleState = {
    articles: [],
    status: Status.LOADING,
}


export const fetchArticles = createAsyncThunk(
    'article/fetchArticlesStatus',

    async (baseUrl:string) => {
      try {

        // const { baseUrl } = params;
      const  data = await axios.get(baseUrl)
      console.log(data.data.articles)
      return data.data.articles;
      } catch (error) {
        console.log(error)
      }

    }
  )

const articleSlice = createSlice({
    name: "article",
    initialState,
    reducers: {
        setArticles: (state, action: PayloadAction<any>) => {
            state.articles=action.payload;
          },
    },

    extraReducers: (builder) => {
    builder.addCase(fetchArticles.pending, (state) => {
      state.status = Status.LOADING;
      state.articles = [];
    })

    builder.addCase(fetchArticles.fulfilled, (state, action: PayloadAction<any>) => {
      state.articles =action.payload;
      state.status = Status.SUCCESS;
    })

    builder.addCase(fetchArticles.rejected, (state) => {
      state.status = Status.ERROR;
      state.articles = [];
    })

  },
  })



export const { setArticles } =
articleSlice.actions;

export default articleSlice.reducer;