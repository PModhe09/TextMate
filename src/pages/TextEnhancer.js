import React, { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';
// import REACT_APP_API_KEY from '../apiKey';

const REACT_APP_API_KEY = "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";

function TextEnhancer({isDark}) {
  const configuration = new Configuration({
    apiKey: REACT_APP_API_KEY,
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
        setOutputValue(enhancedText);
      } catch (error) {
        console.log('API call error:', error);
        setOutputValue("Please Enter Valid Api Key");
      }
    }
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold underline mt-8">Text Enhancer</h1>
      <div className="flex flex-col items-center mt-8">
        <div className="w-full px-8">
        <h3 className="text-lg font-bold ">Type Text : </h3>
        {isDark?
          <textarea
            placeholder="Type your text here......"
            value={inputValue}
            onChange={handleInputChange}
            className="w-full h-60 p-1 text-base border border-gray-300 rounded"
            
          />:
          <textarea
            placeholder="Type a message..."
            value={inputValue}
            onChange={handleInputChange}
            className="w-full h-60 p-1 text-base border border-gray-300 rounded"
            style={{background:'#262626',color:"#fff"}}
          />
        }
        </div>
        <div className="w-1/2 px-8">
          <h3 className="text-lg mt-5">Select a tone...</h3>
          <select
            value={selectedOption}
            onChange={handleOptionChange}
            className="w-1/2 p-2 text-sm text-black rounded"
          >
            <option value="" disabled hidden>
              Choose a tone...
            </option>
            <option value="Friendly">Friendly</option>
            <option value="Persuasive">Persuasive</option>
            <option value="Professional">Professional</option>
            <option value="Luxury">Luxury</option>
            <option value="Empathetic">Empathetic</option>
          </select>
        </div>
        <button
          onClick={handleMessageSend}
          className="px-6 py-2 mt-4 text-white bg-gray-800 rounded hover:bg-gray-700"
        >
          Convert Text
        </button>
        <div className="w-full mt-8 mb-20 p-8">
          <h3 className="text-lg font-bold " >Converted Text : </h3>
          {isDark?
          <div className="output-box w-full h-40 p-4 text-lg border border-gray-300 rounded " style={{background:'#ffffff',color:"#111111"}}>
            {outputValue}
          </div>
          :
          <div className="output-box w-full h-40 p-4 text-lg border border-gray-300 rounded" style={{background:'#262626',color:"#fff"}}>
          
            {outputValue}
          </div>
          }
        </div>
      </div>
    </div>
  );
}

export default TextEnhancer;
