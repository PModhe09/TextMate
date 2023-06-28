
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Configuration, OpenAIApi } from 'openai';

// Add CSS to this sheet
// import './TextEnhancer.css'; 


function TextEnhancer() {

  const location = useLocation();
  const { apiKey } = location.state;


  const configuration = new Configuration({
    apiKey: apiKey,
  });
  const openai = new OpenAIApi(configuration);

  const [inputValue, setInputValue] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [outputValue, setOutputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOptionChange = (e) => {
    const option = e.target.value;
    setSelectedOption(option);
    // console.log(option)
  };


  const handleMessageSend = async () => {
    if (inputValue.trim() !== '') {
      try {
        const response = await openai.createCompletion({
          model: 'text-davinci-003',
          prompt: `Improve the content and make it more ${selectedOption}. Here is a content - ${inputValue}`,
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
        setOutputValue("Please Enter Valid Api Key")
      }
    }
  };

  return (
    <div className="text-enhancer">
      <h2>Text Enhancer</h2>
      <div className="box-container">
        <div className="input-box">
          <h3>Write your text here </h3>
          <textarea
            placeholder="Type a message..."
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
        <div className="dropdown-box">
          <h3>Select a tone... </h3>
          <select value={selectedOption} onChange={handleOptionChange}>
            <option value="" disabled hidden>Choose a tone...</option>
            <option value="Friendly">Friendly</option>
            <option value="Persuasive">Persuasive</option>
            <option value="Professional">Professional</option>
            <option value="Luxury">Luxury</option>
            <option value="Empathetic">Empathetic</option>
          </select>
        </div>
        <button onClick={handleMessageSend}>Create content</button>
        <div className="output-box">
          <h3>Output:</h3>
          <div className="output">{outputValue}</div>
        </div>
      </div>
    </div>
  );
}

export default TextEnhancer;
