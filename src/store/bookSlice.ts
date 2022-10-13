import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getBooksRequest } from "../lib/getBooksRequest"
import { AxiosResponse } from "axios"

interface Book {
  title: string
  description: string
  link: string
  image: string
}

interface ErrorMessage {
  e_message: string | undefined
}

interface ClientError extends ErrorMessage {
  status: boolean
}

interface State {
  loading: boolean
  books: Book[]
  error: ClientError
}

const initialState: State = {
  loading: false,
  books: [],
  error: {
    status: false,
    e_message: undefined,
  },
}

export const getBooks = createAsyncThunk<
  Book[],
  { value: string },
  { rejectValue: ErrorMessage }
>("GOOGLE_BOOKS/GET_EVENT", async (props, { rejectWithValue }) => {
  try {
    const result: AxiosResponse = await getBooksRequest(props.value)
    console.log(result.data)
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
    builder.addCase(getBooks.fulfilled, (state, action) => {
      state.loading = false
      state.books = action.payload
    })
  },
})

export default bookSlice.reducer
