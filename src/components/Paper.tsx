import { Paper as MUIPaper, PaperProps, styled } from '@mui/material';

const PaperHolder = styled(MUIPaper)(() => ({
  height: '100%',
  padding: '1rem',
  position: 'relative',
}));

export const Paper = (props: PaperProps) => {
  return <PaperHolder {...props} />;
};
