import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"

const Button = styled.button`
    display: inline-block;
    font-weight: 400;
    color: #fff;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    font: 400 13.3333px Arial;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    background: ${props => props.primary ? "#2c3edd" : "#333 "};
    margin: 0px 0px 0px 7px;
`;
const Theme = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10%;
`;
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Link to="/form/">
      <Theme>
        <Button primary>New Request</Button>
      </Theme>
    </Link>
  </Layout>
)

export default IndexPage
