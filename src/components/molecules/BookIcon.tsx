import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"

import Button from "../atoms/Button"
import { addClass } from "../../lib/addClass"
import { VolumeInfo } from "../../store/bookSlice"
import { useGetElementProperty } from "../../lib/useGetElementProperty"
import BookInfo from "../atoms/BookInfo"

const BookIcon: React.FC<{
  props: {
    volumeInfo: VolumeInfo
    onClick?: () => void
    className?: string
  }
}> = ({ props }) => {
  const className = addClass("el_bookIcon", props.className)
  const maxDespHeight = 150
  const [despHeight, setHeight] = useState<number>(0)
  const [readMore, setReadMore] = useState<"el_readmore" | "">("el_readmore")
  const elm = useRef(null)
  const { getElementProperty } = useGetElementProperty<HTMLDivElement>(elm)
  const onClick = () => {
    if (props.onClick) {
      props.onClick()
    }
  }
  useEffect(() => {
    setHeight(getElementProperty("height"))
  }, [])
  return (
    <BookIconWrapper height={maxDespHeight}>
      <div className={className}>
        <div className="el_bookImgWrapper">
          <img src={props.volumeInfo.imageLinks.thumbnail} />
        </div>
        <div className="el_bookList">
          <BookInfo
            props={{
              volumeInfo: props.volumeInfo,
              readMore: readMore,
              elm: elm,
            }}
          />
          {readMore === "el_readmore" ? (
            despHeight >= maxDespHeight ? (
              <div className="el_readMoreBtnWrapper">
                <Button
                  props={{
                    text: "...続きを読む",
                    className: "el_readMoreBtn",
                    onClick: () => setReadMore(""),
                  }}
                />
              </div>
            ) : (
              <></>
            )
          ) : (
            <div className="el_readMoreBtnWrapper">
              <Button
                props={{
                  text: "...閉じる",
                  className: "el_readMoreBtn",
                  onClick: () => setReadMore("el_readmore"),
                }}
              />
            </div>
          )}
          {props.onClick ? (
            <div className="el_bookIconSubmitBtnWrapper">
              <Button
                props={{
                  text: "登録",
                  onClick: () => onClick(),
                  className: "el_bookIconSubmitBtn",
                }}
              />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </BookIconWrapper>
  )
}

export default BookIcon

type DespHeight = {
  height: number
}

const BookIconWrapper = styled.div<DespHeight>`
  width: fit-content;
  & {
    .el_bookIcon {
      width: 100%;
      margin: 0 -100%;
      border-top: 1px solid #ddd;
      padding: 40px 100%;
    }
    .el_bookImgWrapper {
      display: inline-block;
      width: fit-content;
      padding-right: 80px;
    }
    .el_bookList {
      display: inline-block;
      vertical-align: top;
      max-width: 50%;
    }
    .el_bookIconSubmitBtn {
      cursor: pointer;
      background-color: #ea5549;
      border: 1px solid #ea5549;
      & > a {
        color: #fff;
        font-weight: 900;
        font-size: 16px;
      }
    }
    .el_bookIconSubmitBtnWrapper {
      display: inline-block;
      padding: 30px 0px;
    }
    .el_readMoreBtn {
      border: 1px solid transparent;
      cursor: pointer;
      & > a {
        padding-left: 0;
      }
    }
    .el_readmore {
      position: relative;
      overflow: hidden;
      min-height: 100px;
      max-height: ${(props) => props.height}px;
      &::before {
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        content: "";
      }
    }
  }
`
