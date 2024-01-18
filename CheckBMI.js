import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './CheckBMI.css'
import pic from './images/BMI image.jpg'
export default function CheckBMI() {
  const [heightValue, setHeightValue] = useState('');
  const [weightValue, setWeightValue] = useState('');
  const [bmiValue, setBmiValue] = useState('');
  const [bmiMessage, setBmiMessage] = useState('');

  const calculateBmi = () => {
    if (heightValue && weightValue) {
      const heightInMeters = heightValue / 100;
      const bmi = (weightValue / (heightInMeters * heightInMeters)).toFixed(2);
      setBmiValue(bmi);

      let message = '';
      if (bmi < 18.5) {
        message = 'You are Underweight';
      } else if (bmi >= 18.5 && bmi < 25) {
        message = 'You are Normal weight';
      } else if (bmi >= 25 && bmi < 30) {
        message = 'You are Overweight';
      } else {
        message = 'You are Obese';
      }
      setBmiMessage(message);
    } else {
      setBmiValue('');
      setBmiMessage('');
    }
  };

  return (
    <div className="container-fluid mt-4">
      <div className="row">
        <div className="col-md-12 text-center">
          <h2 className='text1'> BMI Calculator</h2>
          <p className='text2'>Enter your height and weight to calculate your BMI.</p>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-5 calculator-column">
          <div className="input-container">
            <label htmlFor="height">Enter Your Height (cm):</label>
            <input
              type="number"
              className="form-control"
              id="height"
              value={heightValue}
              onChange={(e) => setHeightValue(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="weight">Enter Your Weight (kg):</label>
            <input
              type="number"
              className="form-control"
              id="weight"
              value={weightValue}
              onChange={(e) => setWeightValue(e.target.value)}
            />
          </div>
          <button
            className="btn btn-success"
            onClick={calculateBmi}
          >
            Click to Calculate BMI
          </button>
          {bmiValue && bmiMessage && (
            <div className="result mt-3">
              <p>
               <span className='property'> Your BMI:</span> <span className="bmi-value">{bmiValue}</span>
              </p>
              <p>
              <span className='property'> Result:</span> <span className="bmi-message">{bmiMessage}</span>
              </p>
            </div>
          )}
        </div>
        <div className="col-md-7">
          <div className="image-container">
            <img
              src={pic}
              alt="BMI image"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
