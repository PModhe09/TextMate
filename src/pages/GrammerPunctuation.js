import React, { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import REACT_APP_API_KEY from '../apiKey';

function Grammar({isDark}) {
  const configuration = new Configuration({
    apiKey: REACT_APP_API_KEY,
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
          model: "text-davinci-003",
          prompt: `You are a grammar checker that looks for mistakes and makes sentence’s more fluent. You take all the users input and auto correct it check spelling mistakes,punctuation mistakes and grammatical mistakes also check common english mistakes in speech and writing. Just reply to user input with the correct grammar, DO NOT reply the context of the question of the user input. If the user input is grammatically correct and fluent, just reply “It seems correct to me”. Sample of the conversation will show below: \n\n ${inputValue}`,
          temperature: 0,
          max_tokens: 60,
          top_p: 1.0,
          frequency_penalty: 0.0,
          presence_penalty: 0.0,
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
 console.log(!isDark);
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold underline mt-8">Grammar-Corrector</h1>
      
      <div className="flex flex-col items-center  mt-4">
        <div className="w-full px-8">
        <h3 className="text-lg font-bold mt-4" >Type Text :  </h3>
        {isDark?
          <textarea
            placeholder="Type your text here ........."
            value={inputValue}
            onChange={handleInputChange}
            className="w-full h-60 p-1 text-base border border-gray-300 rounded"
             style={{background:'#fff',color:"#111"}}
          />
          :
          <textarea
            placeholder="Type your text here ........."
            value={inputValue}
            onChange={handleInputChange}
            className="w-full h-60 p-1 text-base border border-gray-300 rounded"
           style={{background:'#262626',color:"#fff"}}
          />}
        </div>
        <br/>
        <button
          onClick={handleMessageSend}
          className="px-6 py-3 bg-gray-800 text-white rounded cursor-pointer"

        >
          Correct
        </button>
        <br/>
        <div className="w-full p-4">
        <h3 className="text-lg font-bold " >Corrected text :</h3>
         {isDark?
          <div className="w-full h-60 p-1 text-base border border-gray-300 rounded" style={{background:'#fff',color:"#111"}}>{outputValue}</div>
          :
          <div className="w-full h-60 p-1 text-base border border-gray-300 rounded" style={{background:'#262626',color:"#fff"}}>{outputValue}</div>}
        </div>
      </div>
    </div>
  );
}

export default Grammar;
