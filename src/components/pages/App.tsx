import React from "react"
import styled from "styled-components"

import BookSearchForm from "../organisms/BookSearchForm"
import BookDisplay from "../organisms/BookDisplay"

const App: React.FC = () => {
  return (
    <AppWrapper>
      <BookSearchForm />
      <div className="bl_bookDisplay">
        <BookDisplay />
      </div>
    </AppWrapper>
  )
}

const AppWrapper = styled.div`
  & {
    .bl_bookDisplay {
      padding-top: 50px;
    }
  }
`

export default App
