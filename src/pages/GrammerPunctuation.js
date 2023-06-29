import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Configuration, OpenAIApi } from 'openai';
import Nav from '../components/Header/Nav';
import MenuBar from '../components/MenuBar/MenuBar';

function Grammar() {
  const configuration = new Configuration({
    apiKey: "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",
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
    <div className="text-center">
      <Nav />
      <MenuBar />
      <h1 className="text-3xl font-bold m-4 p-2">Grammar-Punctuation-Enhancer</h1>
      <div className="flex justify-center items-center mt-8">
        <div className="w-3/5 p-4">
        <h3 className="text-lg font-bold " >Input</h3>
          <textarea
            placeholder="Type a message..."
            value={inputValue}
            onChange={handleInputChange}
            className="w-full h-48 p-4 text-lg border-2 border-gray-300 rounded"
          />
        </div>
        <button
          onClick={handleMessageSend}
          className="px-6 py-3 bg-gray-800 text-white rounded cursor-pointer"
        >
          Send
        </button>
        <div className="w-full p-4">
        <h3 className="text-lg font-bold " >Output</h3>
          <div className="h-48 p-4 border-2 border-gray-300 rounded">{outputValue}</div>
        </div>
      </div>
    </div>
  );
}

export default Grammar;
