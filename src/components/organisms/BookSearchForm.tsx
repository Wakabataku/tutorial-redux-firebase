import React from "react"
import styled from "styled-components"

import { useAppDispatch, AppDispatch } from "../../store/store"
import InputForm from "../molecules/InputForm"
import { getBooks } from "../../store/bookSlice"

const BookSearchForm: React.FC = () => {
  const dispatch: AppDispatch = useAppDispatch()

  return (
    <BookSearchFormWrapper>
      <div className="bl_inputFormWrapper">
        <InputForm
          props={{ onSubmit: (word) => dispatch(getBooks({ value: word })) }}
        />
      </div>
    </BookSearchFormWrapper>
  )
}

const BookSearchFormWrapper = styled.div``

export default BookSearchForm
