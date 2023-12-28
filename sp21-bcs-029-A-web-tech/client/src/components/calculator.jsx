import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Calculator() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [selectedOperator, setSelectedOperator] = useState('');
  const [results, setResults] = useState([]);

  const handleInputChange = (e, inputNumber) => {
    const value = e.target.value;
    if (/^-?\d*\.?\d*$/.test(value)) {
      if (inputNumber === 1) {
        setInput1(value);
      } else if (inputNumber === 2) {
        setInput2(value);
      }
    }
  };

  const handleOperatorChange = (e) => {
    const value = e.target.value;
    setSelectedOperator(value);
  };

  const calculateResult = async () => {
    try {
      const response = await axios.post('http://localhost:5000/calculator/postCal', {
        operand1: parseFloat(input1),
        operand2: parseFloat(input2),
        operation: selectedOperator,
      });

      alert(`Result: ${response.data.result}`);
    } catch (error) {
      console.error('Error calculating result:', error.response ? error.response.data : error.message);
    }
  };

  useEffect(() => {
    const cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)calculatorResults\s*=\s*([^;]*).*$)|^.*$/, '$1');
    const getResults = async () => {
      try {
        const response = await axios.get('http://localhost:5000/calculator/getCal');
        setResults(response.data);
      } catch (error) {
        console.error('Error retrieving results:', error.response ? error.response.data : error.message);
      }
    }
    getResults();
    if (cookieValue) {
      const storedResults = JSON.parse(cookieValue);
      if (Array.isArray(storedResults)) {
        setResults(storedResults);
      }
    }
  }, [results]); // Run only once on component mount
  
  return (
    <div>
      <h2>Calculator</h2>
      <div>
        <input
          className='m-10'
          type="text"
          placeholder="Enter number"
          value={input1}
          onChange={(e) => handleInputChange(e, 1)}
        />
        <select className='m-10' value={selectedOperator} onChange={handleOperatorChange}>
          <option value="add">+</option>
          <option value="subtract">-</option>
          <option value="multiply">*</option>
          <option value="divide">/</option>
        </select>
        <input
          className='m-10'
          type="text"
          placeholder="Enter number"
          value={input2}
          onChange={(e) => handleInputChange(e, 2)}
        />
        <button onClick={calculateResult}>Calculate</button>
      </div>

      {/* Display previous results */}
      <h3>Previous Results:</h3>
      <ul>
        {results.map((result, index) => (
          <li key={index}>{`${result.operand1} ${result.operation} ${result.operand2} = ${result.result}`}</li>
        ))}
      </ul>
    </div>
  );
}
