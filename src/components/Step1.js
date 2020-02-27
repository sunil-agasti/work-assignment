import React from 'react';
import styled from 'styled-components'
import { Link } from "gatsby"
import "../components/layout"
import 'bootstrap/dist/css/bootstrap.min.css'


const Step1 = ({ setForm, formData, navigation, name}) => {
  const {
    parts_number
  } = formData;
  const { next } = navigation;

  // Style component start
  const Label = styled.span`
    margin-right: 10px;
    font-weight: bold;
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
    opacity: ${props => props.disabled ? ".65" : "1 "};
    margin: 0px 0px 0px 7px;
  `;
  const Maindiv = styled.div`
    float: right;
  `;
  const Heading = styled.div`
    display: flex;
    justify-content: center;
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 6%;
  `;
  // Style component end

  return (
    <div className="form">

      <ul id="progressbar">
          <li className="active">1</li>
          <li>1</li>
          <li>3</li>
      </ul>

    <Heading>Step 1</Heading>
      <div className="form-group">
        <Label> Number of parts: </Label>
        <input type="number" name="parts_number" onChange={setForm} value={parts_number} />
      </div>

      <Maindiv>
       <Link to="/">
         <Button>Previous</Button>
       </Link>
        <Button primary disabled={!parts_number} onClick={next}>Next</Button>
      </Maindiv>
    </div>
  );
};

export default Step1;
