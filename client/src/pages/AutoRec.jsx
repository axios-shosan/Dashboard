import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import { useGetAutoRecMutation, useGetRatingsMutation, useGetAutoRecSaMutation } from '../app/backend';

import Rating from '../components/Rating';
import Header from '../components/Header';

const columns = [
  { field: 'id', headerName: 'HOTEL ID', width: 200, sort: 'desc' },
  { field: 'rating', headerName: 'Score', width: 200 },
];

export default function AutoRec() {
  const styleGridData = {
    '.MuiDataGrid-root': {
      color: `#1C1F3E`,
    },
  };
  const [matrix, setMatrix] = useState([]);
  const [user, setUser] = useState('');
  const [hotel, setHotel] = useState('');
  const [criterias, setCriterias] = useState({});
  const [getAutoRec] = useGetAutoRecMutation();
  const [getRatings] = useGetRatingsMutation();
  const [getAutoRecSa] = useGetAutoRecSaMutation();

  async function autoRecSa() {
    const res = await getAutoRecSa({ user });
    if (res.data) setMatrix(res.data);
  }

  async function autoRec() {
    const res = await getAutoRec({ user });
    if (res.data) setMatrix(res.data);
  }
  async function cellClick(id, rating) {
    setHotel(id);
    console.log(hotel);
    setCriterias({});
    const res = await getRatings({ user, hotel: `${id}.0` });
    if (res.data) setCriterias(res.data);
  }
  async function hotelClick(e) {
    if (e.key === 'Enter') {
      const res = await getRatings({ user, hotel: `${hotel}.0` });
      console.log(hotel);
      if (res.data) {
        setCriterias(res.data);
      }
    }
  }

  const handleChangeUserID = (event) => {
    setUser(event.target.value);
  };

  const handleChangeHotelId = (event) => {
    setHotel(event.target.value);
  };
  return (
    <Box
      sx={{
        marginLeft: '3em',
      }}
    >
      <Header title="AutoEncoder" />

      <Box
        sx={{
          margin: '1.25em 2em 4em',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
          }}
        >
          <FormControl>
            <InputLabel htmlFor="user-id">User</InputLabel>
            <OutlinedInput id="user-id" label="USER ID" onChange={handleChangeUserID} value={user} />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="hotel-id">Hotel</InputLabel>
            <OutlinedInput
              id="user-id"
              label="USER ID"
              onChange={handleChangeHotelId}
              value={hotel}
              onKeyDown={(e) => hotelClick(e)}
            />
          </FormControl>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#1C1F3E',
              paddin: '5em 2em',
            }}
            size="large"
            endIcon={<ArrowRightAltIcon />}
            onClick={() => {
              autoRec();
            }}
          >
            Auto Recommender
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#1C1F3E',
              paddin: '5em 2em',
            }}
            size="large"
            endIcon={<ArrowRightAltIcon />}
            onClick={() => {
              autoRecSa();
            }}
          >
            Auto Rec + SA
          </Button>
        </Box>
        <div style={{ height: 400, width: '50%' }}>
          <DataGrid
            style={styleGridData}
            rows={matrix}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            showColumnRightBorder
            onCellClick={(e) => cellClick(e.row.id, e.row.rating)}
            initialState={{
              sorting: {
                sortModel: [{ field: 'rating', sort: 'desc' }],
              },
            }}
          />
        </div>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
        }}
      >
        {Object.keys(criterias).map((c, index) => (
          <Rating key={index} criteria={c} rating={criterias[c]} />
        ))}
      </Box>
    </Box>
  );
}
