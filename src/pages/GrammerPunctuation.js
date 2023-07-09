import React, { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import apiKey from '../Key';


function Grammar({isDark}) {
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
          model: "text-davinci-003",
          prompt: `Correct this to standard English:\n\n ${inputValue}`,
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
        <h3 className="text-lg font-bold" >Enter your text here </h3>
        {isDark?
          <textarea
            placeholder="Type a message..."
            value={inputValue}
            onChange={handleInputChange}
            className="w-full h-60 p-1 text-base border border-gray-300 rounded"
             style={{background:'#2d3436',color:"#fff"}}
          />
          :
          <textarea
            placeholder="Type a message..."
            value={inputValue}
            onChange={handleInputChange}
            className="w-full h-60 p-1 text-base border border-gray-300 rounded"
           style={{background:'#130f40',color:"#fff"}}
          />}
        </div>
        <br/>
        <button
          onClick={handleMessageSend}
          className="px-6 py-3 bg-gray-800 text-white rounded cursor-pointer"

        >
          Send
        </button>
        <br/>
        <div className="w-full p-4">
        <h3 className="text-lg font-bold " >Output</h3>
         {isDark?
          <div className="w-full h-60 p-1 text-base border border-gray-300 rounded" style={{background:'#2d3436',color:"#fff"}}>{outputValue}</div>
          :
          <div className="w-full h-60 p-1 text-base border border-gray-300 rounded" style={{background:'#130f40',color:"#fff"}}>{outputValue}</div>}
        </div>
      </div>
    </div>
  );
}

export default Grammar;
