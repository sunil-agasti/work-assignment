import React from 'react';
import { useForm, useStep } from 'react-hooks-helper'

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const steps = [
  { name: '1', component: <Step1/>},
  { name: '2', component: <Step2/>},
  { name: '3', component: <Step3/> }
];

const defaultData = {
  parts_number: ''
};



const MainPage = () => {

  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { name } = step;

    const props = { formData, setForm, navigation, name};
    switch (name) {
      case '1':
        return <Step1 {...props} />;
      case '2':
        return <Step2 {...props} />;
      case '3':
        return <Step3 {...props} />;
      default:
        return null;
    };

};

export default MainPage;
