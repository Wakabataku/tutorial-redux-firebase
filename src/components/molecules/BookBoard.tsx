import React from "react"
import styled from "styled-components"

import { addClass } from "../../lib/addClass"
import { VolumeInfo } from "../../store/bookSlice"
import BookIcon from "../atoms/BookIcon"
import BookModal from "./BookModal"

const BookBoard: React.FC<{
  props: {
    volumeInfo: VolumeInfo[]
    onClick: (component: JSX.Element) => void
  }
}> = ({ props }) => {
  return (
    <BookBoardWrapper>
      {props.volumeInfo.map((item, index) => {
        const modal = (
          <BookModal
            props={{
              bookIcon: (
                <BookIcon
                  props={{
                    volumeInfo: item,
                  }}
                />
              ),
            }}
          />
        )
        return (
          <div className="el_volumeInfoWrapper" key={index}>
            <BookIcon
              props={{
                volumeInfo: item,
                onClick: () => props.onClick(modal),
              }}
            />
          </div>
        )
      })}
    </BookBoardWrapper>
  )
}

export default BookBoard

const BookBoardWrapper = styled.div``
