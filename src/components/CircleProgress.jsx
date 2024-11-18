import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import CircularProgress, {
    circularProgressClasses,
  } from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,    
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[200],
      ...theme.applyStyles('dark', {
        backgroundColor: theme.palette.grey[800],
      }),
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: '#1a90ff',
      ...theme.applyStyles('dark', {
        backgroundColor: '#308fe8',
      }),
    },
  }));





export default function CircleProgress({progressInit}) {
  const [progress, setProgress] = React.useState(progressInit);

//   React.useEffect(() => {
//     const timer = setInterval(() => {
//       setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
//     }, 800);
//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

    return (
        <Box sx={{ position: 'relative' }}>
        <CircularProgress
            variant="determinate"
            sx={(theme) => ({
            color: theme.palette.grey[200],
            ...theme.applyStyles('dark', {
                color: theme.palette.grey[800],
            }),
            })}
            size={40}
            thickness={4}
            value={100}
        />
        <CircularProgress
            variant="determinate"
            disableShrink
            sx={(theme) => ({
            color: '#1a90ff',
            animationDuration: '550ms',
            position: 'absolute',
            left: 0,
            [`& .${circularProgressClasses.circle}`]: {
                strokeLinecap: 'round',
            },
            ...theme.applyStyles('dark', {
                color: '#308fe8',
            }),
            })}
            size={40}
            thickness={4}
            value={progress}
 
        />
        <Box
        sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}
        >
        <Typography
            variant="caption"
            component="div"
            sx={{ color: 'text.secondary' }}
        >
            {`${Math.round(progress)}%`}
        </Typography>
        </Box>
        </Box>
    );
}
