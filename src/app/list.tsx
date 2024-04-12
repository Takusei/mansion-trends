import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

interface MansionListProps {
  mansions: string[]; 
}

const MansionList: React.FC<MansionListProps> = ({ mansions }) => {
  console.log(mansions);
  if (!mansions) return null;
  
  return (
    <List>
      {mansions.map((mansion, index) => (
        <ListItem key={index}>
          <ListItemText primary={mansion} />
        </ListItem>
      ))}
    </List>
  );
};

export default MansionList;