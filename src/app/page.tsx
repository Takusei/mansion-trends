'use client';

import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import client from '../../lib/client';
import { gql } from '@apollo/client';
import MansionList from './list';

export default function CustomizedInputBase() {
  const [mansions, setMansions] = useState([]);

  const getAllMansions = async (event) => {
    const GET_MANSIONS = gql`
      query GetMansions($name: String!) {
        mansionList(name: $name) {
          names
        }
      }
    `;

    try {
      const { data } = await client.query({
        query: GET_MANSIONS,
        variables: {
          name: event.target.value || '旗の台',
        },
      });

      setMansions(data.mansionList.names);
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect(() => {
  //   getAllMansions(); // call getAllMansions when the component mounts
  // }, []); 

  return (
    <div>
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center'}}
      >
        <IconButton sx={{ p: '10px' }} aria-label="menu">
          <MenuIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Input the name of the mansion house"
          inputProps={{ 'aria-label': 'search mansion trends' }}
          onBlur={getAllMansions}
          // value={value}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton type="button" color="primary" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
        
      </Paper>
      <MansionList mansions={mansions} />
    </div>
  );
}