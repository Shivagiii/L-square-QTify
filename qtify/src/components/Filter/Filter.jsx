import * as React from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import style from './Filter.module.css'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}





export default function Filter({filter,selectedFilterIndex,setSelectedFilterIndex}) {


  const handleChange = (event, newValue) => {
    setSelectedFilterIndex(newValue);
  };
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  console.log(filter)
  return (
    <div>
        <Tabs 
        value={selectedFilterIndex}
         onChange={handleChange}
          aria-label="basic tabs example"
          TabIndicatorProps={
           { style:{backGround:"var(--color-primary)"

           }}
          }>
            {filter.map((ele,indx) => (
                 <Tab className={style.tab} label={ele.label} key={ele.key}{...a11yProps(indx)} />
            ))}
        </Tabs>
      {filter.map((ele,indx) => (
        <TabPanel value={ele.label} index={indx} key={ele.key}/> 

     ))}
      
    </div>
  );
}
