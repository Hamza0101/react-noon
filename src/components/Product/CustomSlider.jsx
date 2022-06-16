import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

// function valuetext(value: number) {
//   return `${value}°C`;
// }

export default function CustomSlider() {
  return (
    <div className='p-2'>
    <Box sx={{ width: 200 }}>
      <Slider
        aria-label="Temperature"
        defaultValue={3}
        // getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={0.1}
        marks
        min={1}
        max={5}
      />
      {/* <Slider defaultValue={3} step={0.1} marks min={1} max={5} disabled /> */}
    </Box>
    </div>
  );
}
