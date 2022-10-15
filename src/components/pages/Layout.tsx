import React from "react"
import styled from "styled-components"

import Header from "../templates/Header"

const Layout: React.FC<{ Main: React.FC }> = ({ Main }) => {
  return (
    <LayoutWrapper>
      <header className="ly_header">
        <div className="ly_header_inner">
          <Header />{" "}
        </div>
      </header>
      <div className="ly_main">
        <Main />
      </div>
      {/* <Footer/> */}
    </LayoutWrapper>
  )
}

export default Layout

const LayoutWrapper = styled.div`
  .ly_header {
    width: 100%;
    padding-top: 20px;
    border-bottom: 1px solid #ddd;
  }
  .ly_header_inner {
    max-width: 700px;
    padding: 0 15px;
    margin: 0 auto;
  }
  .ly_main {
    max-width: 700px;
    margin: 0 auto;
    padding: 30px 40px;
  }
`
