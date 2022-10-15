import React from "react"
import styled from "styled-components"

import { VolumeInfo } from "../../store/bookSlice"

const BookInfo: React.FC<{
  props: {
    volumeInfo: VolumeInfo
    readMore: string
    elm: React.MutableRefObject<null>
  }
}> = ({ props }) => {
  return (
    <BookInfoWrapper>
      <p>【書籍名】</p>
      <div className="el_bookInfo">
        <p>{props.volumeInfo.title}</p>
        <p>{props.volumeInfo.subtitle}</p>
      </div>
      <p>【概要】</p>
      <div ref={props.elm} className={props.readMore}>
        <a>{props.volumeInfo.description}</a>
      </div>
    </BookInfoWrapper>
  )
}

export default BookInfo

const BookInfoWrapper = styled.div`
  & {
    p {
      margin: 0;
    }
  }
`
