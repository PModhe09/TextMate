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
      <h1 className="text-5xl font-bold m-4 p-2 underline mt-14">Grammar-Punctuation-Enhancer</h1>
      
      <div className="flex justify-center items-center mt-8">
        <div className="w-3/5 p-4">
        <h3 className="text-lg font-bold " >Input</h3>
        {isDark?
          <textarea
            placeholder="Type a message..."
            value={inputValue}
            onChange={handleInputChange}
            className="w-full h-48 p-4 text-lg border-2 border-white-500 rounded text-black"
            style={{background:'#2d3436',color:"#fff"}}
          />
          :
          <textarea
            placeholder="Type a message..."
            value={inputValue}
            onChange={handleInputChange}
            className="w-full h-48 p-4 text-lg border-2 border-white-500 rounded text-black"
            style={{background:'#130f40',color:"#fff"}}
          />}
        </div>
        <button
          onClick={handleMessageSend}
          className="px-6 py-3 bg-gray-800 text-white rounded cursor-pointer"

        >
          Send
        </button>
        <div className="w-full p-4">
        <h3 className="text-lg font-bold " >Output</h3>
         {isDark?
          <div className="h-48 p-4 border-2 border-white-500 rounded" style={{background:'#2d3436',color:"#fff"}}>{outputValue}</div>
          :
          <div className="h-48 p-4 border-2 border-white-500 rounded" style={{background:'#130f40',color:"#fff"}}>{outputValue}</div>}
        </div>
      </div>
    </div>
  );
}

export default Grammar;
