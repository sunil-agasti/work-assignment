import React from 'react';
import styled from 'styled-components'
import { Link } from "gatsby"
import "../components/layout"

const Step3 = ({ navagation }) => {

 // Style component start
  const Heading2 = styled.div`
    display: flex;
    justify-content: center;
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 6%;
  `;
  const Heading = styled.h1`
    color: #2c3edd !important;
  `;
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
  `;
   // Style component end

  return (
    <div className="form">
          <ul id="progressbar">
        <li>1</li>
        <li >2</li>
        <li className="active">3</li>
      </ul>

      <Heading2>Step 3</Heading2>

      <div className="form-group">
        <Heading>Success</Heading>
        <Link to="/"><Button type="button">Home</Button></Link>
      </div>
    </div>
  );
};


export default Step3;
