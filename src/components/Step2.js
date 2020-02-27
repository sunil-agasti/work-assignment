import React, {useState} from 'react';
import styled from 'styled-components'
import "../components/layout"

const Step2 = ({ setForm, formData, navigation }) => {
  const {
    parts_number
  } = formData;

  const {previous, next } = navigation;

  // Total count state
  const [inputVal, setInput] = useState({
    parts:[],

  });

  const {
    parts
  } = inputVal;

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

const [checkStatus, setStatus] = useState(0);

  function handleChange(i, event) {

    var values = parts;
    var converToNumber = parseInt(event.target.value);
    if(event.target.value === '' || event.target.value === null || event.target.value === undefined){
      values.splice(i,1);
    }
    if(values[i]){
      values[i].id = i;
      values[i].value = converToNumber
    }else{
      if(event.target.value){
        values.push({
          id: i,
          value: converToNumber
        });
      }
    }
    let totalCount = parts.reduce((mapped, item) => (mapped + item.value), 0);
    if(totalCount > 100) {
      setStatus(1);
    }else{
      setStatus(0);
    }
    setInput({
      parts: values
    });
  }

  var inputFieldNum = [];
  for (var i = 1; i <= parts_number; i++) {
    inputFieldNum.push(i);
  }
  return (
    <div className="form">

      <ul id="progressbar">
        <li>1</li>
        <li className="active">2</li>
        <li>3</li>
      </ul>

      <Heading>Step 2</Heading>
      <div>
        {inputFieldNum.map((el, i) => {
          return (
            <div key={`${el}-${i}`} className="form-group">
              <Label> Parts {i+1} % </Label>
              <input type="number" name={i} value={el.value} className="parts_number"
              onChange={e => handleChange(i, e)} /><br />
            </div>
           )})}
        </div>
      <Maindiv>
        <Button onClick={previous}>Previous</Button>
        <Button primary onClick={next} disabled={ checkStatus === 1 || parts.length !==  parseInt(parts_number) } >Next</Button>
      </Maindiv>
    </div>
  );
};

export default Step2;
