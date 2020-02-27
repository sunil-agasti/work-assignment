/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'
// import { useStaticQuery, graphql } from "gatsby"

// import Header from "./header"
import "./layout.css"

const Div = styled.div`
  margin: '0 auto',
  maxWidth: 960,
  padding: '0 1.0875rem 1.45rem',
`;

const Layout = ({ children }) => {


  return (
    <>
      <Div>
        <main>{children}</main>
 
      </Div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
