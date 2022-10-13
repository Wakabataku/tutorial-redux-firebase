import React from "react"
import styled from "styled-components"

import { useAppDispatch, AppDispatch } from "../../store/store"
import InputForm from "../molecules/InputForm"

const BookSearchForm: React.FC = () => {
  const dispatch: AppDispatch = useAppDispatch()

  return (
    <BookSearchFormWrapper>
      <div className="bl_inputFormWrapper">
        <InputForm props={{ onSubmit: (word) => console.log(word) }} />
      </div>
    </BookSearchFormWrapper>
  )
}

const BookSearchFormWrapper = styled.div``

export default BookSearchForm
