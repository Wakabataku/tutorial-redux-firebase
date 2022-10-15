import React from "react"
import styled from "styled-components"

import { useAppDispatch, AppDispatch } from "../../store/store"
import Button from "../atoms/Button"

const BookModal: React.FC<{
  props: {
    bookIcon: JSX.Element
  }
}> = ({ props }) => {
  //   const dispatch: AppDispatch = useAppDispatch()
  const onClickSubmit = () => {
    console.log("submit!!")
  }
  return (
    <BookModalWrapper>
      <div className="el_bookModal">{props.bookIcon}</div>
      <div className="el_submitToFbBtn">
        <Button
          props={{
            onClick: () => onClickSubmit(),
            text: "登録",
          }}
        />
      </div>
    </BookModalWrapper>
  )
}

export default BookModal

const BookModalWrapper = styled.div``
