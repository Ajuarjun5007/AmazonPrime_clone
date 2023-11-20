// src/components/Loader.tsx

import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

const skeletonStyle = {
  backgroundColor: "#fff",
};

interface MediaProps {
  loading?: boolean;
}
console.log("it works");
const Media: React.FC<MediaProps> = (props) => {
  const { loading = false } = props;

  return (
    <Grid container wrap="wrap">
      {(loading ? Array.from(new Array(9)) : []).map((item, index) => (
        <Box key={index} sx={{ width:400, marginRight: 0.5, my: 5 }}>
          <Skeleton variant="rectangular" width={400} height={118} sx={skeletonStyle} />
          <Box sx={{ pt: 0.5 }}>
            <Skeleton sx={skeletonStyle} />
            <Skeleton width="60%" sx={skeletonStyle} />
          </Box>
        </Box>
      ))}
    </Grid>
  );
};

export default Media;
