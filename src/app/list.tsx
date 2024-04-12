import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Box from '@mui/material/Box';

interface MansionListProps {
  mansions: string[]; 
}

const MansionList: React.FC<MansionListProps> = ({ mansions }) => {
  console.log(mansions);
  if (!mansions) return null;
  
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <List>
        {mansions.map((mansion, index) => (
          <ListItem key={index}>
            <ListItemButton>
              <ListItemText primary={mansion} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default MansionList;