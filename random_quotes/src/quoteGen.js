import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuoteGen = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    axios.get('http://api.quotable.io/random')
      .then((response) => {
        console.log(response);
        setQuote(response.data.content);
        setAuthor(response.data.author);
      })
      .catch((error) => console.error('Error fetching quote:', error));
  }, []);

  return (
    <div>
      <h1>Random Quote Generator</h1>
      <p>"{quote}"</p>
      <p>- {author}</p>
      <button onClick={() => window.location.reload()}>Get Another Quote</button>
    </div>
  );
};

export default QuoteGen;
