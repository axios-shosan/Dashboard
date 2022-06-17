import React, { useState } from 'react';
import { TextField, Box, Card, Button, LinearProgress } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Header from '../components/Header';

import { useGetLstmMutation, useGetLstmWord2vecMutation } from '../app/backend';

export default function SentimentAnalysis() {
  const [getLstm] = useGetLstmMutation();
  const [getLstmWord2vec] = useGetLstmWord2vecMutation();
  const [text, setText] = useState('');
  const [score, setScore] = useState(0);
  const [score2, setScore2] = useState(0);
  const [progress, setProgress] = useState(0);
  const [progress2, setProgress2] = useState(0);
  const pStyle = {
    margin: '5px',
    marginBottom: '15px',
    color: '#0',
  };

  async function LstmWord2vec(text) {
    if (text) {
      const res = await getLstmWord2vec({ text });
      if (res.data) {
        setScore2(res.data.score);
        setProgress2(res.data.score * (1 / 5) * 100);
      }
    }
  }
  async function LSTM(text) {
    if (text) {
      const res = await getLstm({ text });

      if (res.data) {
        setScore(res.data.score);
        setProgress(res.data.score * (1 / 5) * 100);
      }
    }
  }

  return (
    <Box
      sx={{
        marginLeft: '3em',
      }}
    >
      <Header title="Sentiment Analysis" />
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '75ch', mb: '4em' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Enter a Text"
          variant="outlined"
          value={text}
          fullWidth
          onChange={(e) => setText(e.target.value)}
        />
      </Box>
      <Box
        sx={{
          marginRight: '5em',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            width: '25%',
          }}
        >
          <Card
            sx={{
              p: '12px 15px',
              mb: '2em',
              color: '#1C1F3E',
              backgroundColor: '#fff',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <h3 style={pStyle}>LSTM</h3>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#1C1F3E',
                width: '70%',
                paddin: '1em .25em',
              }}
              size="medium"
              onClick={() => {
                LSTM(text);
              }}
            >
              Try It Now
            </Button>
          </Card>
          <Card
            sx={{
              p: '12px 15px',
              color: '#1C1F3E',
              backgroundColor: 'rgba(154, 208, 236, 0.1)',
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <div
              style={{
                backgroundColor: '#1C1F3E',
                color: '#fff',
                marginRight: '10px',
                padding: '7px 7px 1px 7px',
                borderRadius: '5px',
                width: 'fit-content',
              }}
            >
              <FavoriteIcon />
            </div>
            <div
              style={{
                width: '100%',
              }}
            >
              <div
                style={{
                  color: '#1C1F3E',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <p>Score</p>
                <p>{score}/5</p>
              </div>
              <LinearProgress variant="determinate" value={progress} />
            </div>
          </Card>
        </Box>

        <Box
          sx={{
            width: '25%',
          }}
        >
          <Card
            sx={{
              p: '12px 15px',
              mb: '2em',
              color: '#1C1F3E',
              backgroundColor: '#fff',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <h3 style={pStyle}>LSTM + word2vec</h3>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#1C1F3E',
                width: '70%',
                paddin: '1em .25em',
              }}
              size="medium"
              onClick={() => {
                LstmWord2vec(text);
              }}
            >
              Try It Now
            </Button>
          </Card>
          <Card
            sx={{
              p: '12px 15px',
              color: '#1C1F3E',
              backgroundColor: 'rgba(154, 208, 236, 0.1)',
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <div
              style={{
                backgroundColor: '#1C1F3E',
                color: '#fff',
                marginRight: '10px',
                padding: '7px 7px 1px 7px',
                borderRadius: '5px',
                width: 'fit-content',
              }}
            >
              <FavoriteIcon />
            </div>
            <div
              style={{
                width: '100%',
              }}
            >
              <div
                style={{
                  color: '#1C1F3E',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <p>Score</p>
                <p>{score2}/5</p>
              </div>
              <LinearProgress variant="determinate" value={progress2} />
            </div>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}
