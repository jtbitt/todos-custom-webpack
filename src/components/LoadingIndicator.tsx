import { CircularProgress, Box, styled } from '@mui/material';

const LoadingBox = styled(Box)(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}));

export const LoadingIndicator = () => {
  return (
    <LoadingBox>
      <CircularProgress />
    </LoadingBox>
  );
};
