import React, { useMemo, useEffect, useState } from 'react';
import ReactWordcloud from 'react-wordcloud';
import { Button, TextField } from '@mui/material';

const CustomizableWordCloud = (props) => {
    const [words, setWords] = useState([]);
    const [inputWord, setInputWord] = useState("");
    
    const options = useMemo(() => {
      return {
        deterministic: true,
        fontSizes: [15, 60],
        rotations: 0,
      }
    }, []);
  
    const getWords = () => {
      fetch(props.read)
      .then(res => res.json())
      .then(
        (res) => {
          setWords(res.words);
        }
      );
    };

    const handleSubmit = () => {
        const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ word: inputWord }),
        };

        setInputWord("");

        fetch(props.write, requestOptions)
        .then(res => res.json)
        .then(res => getWords());
    };

    useEffect(() => {
        getWords();
    }, []);

    return (
        <div>
            <ReactWordcloud words={words} options={options}/>
            <div className="customizable-word-cloud-input-container">
                <TextField id="customizable-word-cloud-input-box" type="text" label="Word" variant="outlined" value={inputWord} onChange={(e) => setInputWord(e.target.value)}/>
                <Button variant="contained" type="submit" onClick={handleSubmit}>Submit</Button>
            </div>
        </div>
    );

};

export default CustomizableWordCloud;