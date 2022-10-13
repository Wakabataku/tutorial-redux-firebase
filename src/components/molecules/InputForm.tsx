import React, { useState } from "react"
import styled from "styled-components"

import Button from "../atoms/Button"
import SearchForm from "../atoms/SearchForm"

const InputForm: React.FC<{
  props: {
    onSubmit: (word: string) => void
    className?: string
  }
}> = ({ props }) => {
  const [word, setWord] = useState<string>("")

  return (
    <InputFormWrapper>
      <div className="bl_input">
        <p>書籍検索</p>
        <div className="el_searchFormWrapper">
          <SearchForm
            props={{
              onChange: (word: string) => setWord(word),
              className: "el_inputForm",
            }}
          />
        </div>
        <div className="el_buttonWrapper">
          <Button
            props={{
              onClick: () => props.onSubmit(word),
              text: "送信",
              className: "el_submitBtn",
            }}
          />
        </div>
      </div>
    </InputFormWrapper>
  )
}

const InputFormWrapper = styled.div`
  width: fit-content;
  & {
    .el_searchFormWrapper {
      display: inline-block;
    }

    .el_buttonWrapper {
      display: inline-block;
    }

    .el_inputForm {
      width: 200px;
    }

    .el_submitBtn {
      cursor: pointer;
    }
  }
`

export default InputForm
