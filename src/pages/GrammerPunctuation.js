import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Configuration, OpenAIApi } from 'openai';

/* CSS ADDing */ 
// import './Grammar.css';


function Grammar() {

  const location = useLocation();
  const { apiKey } = location.state;

  const configuration = new Configuration({
    apiKey: apiKey,
  });
  const openai = new OpenAIApi(configuration);

  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleMessageSend = async () => {
    if (inputValue.trim() !== '') {
      try {
        const response = await openai.createCompletion({
          model: 'text-davinci-003',
          prompt: `Fix the grammar in the following text:\n\n ${inputValue}`,
          temperature: 1,
          max_tokens: 256,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
        });

        const enhancedText = response.data.choices[0].text;
        console.log(enhancedText);
        setOutputValue(enhancedText);
      } catch (error) {
        console.log('API call error:', error);
        setOutputValue('Failed to perform grammar correction. Please try again.');
      }
    }
  };

  return (
    <div className="Grammar">
      <h2>Grammar-Punctuation-Enhancer</h2>
      <div className="box-container">
        <div className="input-box">
        <h3>Input:</h3>
          <textarea
            placeholder="Type a message..."
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
        <button onClick={handleMessageSend}>Send</button>
        <div className="output-box">
          <h3>Output:</h3>
          <div className="output">{outputValue}</div>
        </div>
      </div>
    </div>
  );
}


export default Grammar;
