import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getBooksRequest } from "../lib/getBooksRequest"
import { AxiosResponse } from "axios"

export interface VolumeInfo {
  title: string
  subtitle: string
  description: string
  imageLinks: {
    thumbnail: string
    smallThumbnail: string
  }
}

export interface BookItem {
  id: string
  volumeInfo: VolumeInfo
}

interface ErrorMessage {
  e_message: string | undefined
}

interface ClientError extends ErrorMessage {
  status: boolean
}

interface State {
  loading: boolean
  books: {
    items: BookItem[]
  }
  error: ClientError
}

const initialState: State = {
  loading: false,
  books: {
    items: [],
  },
  error: {
    status: false,
    e_message: undefined,
  },
}

export const getBooks = createAsyncThunk<
  any,
  { value: string },
  { rejectValue: ErrorMessage }
>("GOOGLE_BOOKS/GET_EVENT", async (props, { rejectWithValue }) => {
  try {
    const result: AxiosResponse<{ item: BookItem[] }> = await getBooksRequest(
      props.value
    )
    return result.data
  } catch (e: any) {
    return rejectWithValue(e.response.data as ErrorMessage)
  }
})

export const bookSlice = createSlice({
  name: "book",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBooks.pending, (state) => {
      state.loading = true
      state.error.e_message = undefined
      state.error.status = false
    })
    builder.addCase(
      getBooks.fulfilled,
      (state, action: PayloadAction<{ item: BookItem[] }>) => {
        state.loading = false
        state.books = Object.assign({}, state.books, action.payload)
      }
    )
  },
})

export default bookSlice.reducer
