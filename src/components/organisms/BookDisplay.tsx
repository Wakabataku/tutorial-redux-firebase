import React, { useState, useEffect } from "react"
import styled from "styled-components"

import { useAppSelector } from "../../store/store"
import BookBoard from "../molecules/BookBoard"
import Modal from "../atoms/Modal"

const BookDisplay: React.FC = () => {
  const books = useAppSelector((state) => state.book.books)

  const [modal, setModal] = useState<JSX.Element | false>(false)
  const [isModal, setIsModal] = useState<JSX.Element | false>(false)

  useEffect(() => {
    if (!modal) return
    setIsModal(
      <Modal
        props={{
          component: modal,
          onClickOutArea: () => setIsModal(false),
        }}
      />
    )
  }, [modal])

  return (
    <BookDisplayWrapper>
      {isModal ? isModal : <></>}
      <BookBoard
        props={{
          volumeInfo: books.items.map((item) => item.volumeInfo),
          onClick: (component) => setModal(component),
        }}
      />
    </BookDisplayWrapper>
  )
}

export default BookDisplay

const BookDisplayWrapper = styled.div``
