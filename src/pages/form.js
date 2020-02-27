import React from "react"
import styled from 'styled-components'
import Layout from "../components/layout"
import MainPage from "../components/MainPage"
import SEO from "../components/seo"

const Theme = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10%;
`;

const SecondPage = () => (

  <Layout>
    <SEO title="Multi Step Form" />
    <Theme>
   	 <MainPage />
    </Theme>
  </Layout>
)

export default SecondPage
