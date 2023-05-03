import * as React from 'react';

import GradingIcon from '@mui/icons-material/Grading';
import GroupsIcon from '@mui/icons-material/Groups';
import HandshakeIcon from '@mui/icons-material/Handshake';
import SendIcon from '@mui/icons-material/Send';
import Step from '@mui/material/Step';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import { styled } from '@mui/material/styles';

import { COLORS } from '@/constants/colors';

const steps = [
  {
    label: 'Apply',
  },
  {
    label: 'Review',
  },
  {
    label: 'Interviews',
  },
  {
    label: 'On Board',
  },
];

const ColorlibConnector = styled(StepConnector)(() => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {},
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: 'transparent',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 90,
    width: 80,
    borderRadius: '50%',
    borderColor: COLORS.THEME_COLOR_BLUE,
    borderWidth: 8,
    marginLeft: '-20px',
    marginTop: '-10px',
  },
}));

const ColorlibStepIconRoot = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ ownerState }) => ({
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  marginTop: -10,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundColor: COLORS.THEME_COLOR_BLUE,
  }),
}));

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className, icon } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <SendIcon />,
    2: <GradingIcon />,
    3: <GroupsIcon />,
    4: <HandshakeIcon />,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(icon)]}
    </ColorlibStepIconRoot>
  );
}

export default function VerticalLinearStepper() {
  return (
    <Stepper orientation="vertical" alternativeLabel={false} activeStep={4} connector={<ColorlibConnector />}>
      {steps.map((step) => (
        <Step key={step.label}>
          <StepLabel StepIconComponent={ColorlibStepIcon}></StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}
