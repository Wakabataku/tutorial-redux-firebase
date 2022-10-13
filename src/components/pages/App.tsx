import React from "react"
import styled from "styled-components"

import BookSearchForm from "../organisms/BookSearchForm"

const App: React.FC = () => {
  return (
    <AppWrapper>
      <BookSearchForm />
    </AppWrapper>
  )
}

const AppWrapper = styled.div``

export default App
