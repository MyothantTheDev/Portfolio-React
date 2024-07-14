import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Typography } from '@mui/material';
import TimelineOppositeContent, { timelineOppositeContentClasses } from '@mui/lab/TimelineOppositeContent';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function EducationTimeLine() {

  const education = [
    {
      university: "University of Wolverhampton",
      duration: "Oct 2016 - Jun 2017",
      major: "Bachelor of Engineering in Electronic and Communication"
    },
    {
      university: "Victoria University College",
      duration: "Feb 2012 - Aug 2015",
      major: "Higher National Diploma (Electrical and Electronics)"
    }
  ]

  const EduTimeline = ({ university, duration, major }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
      <TimelineItem>
        {!isMobile && (
          <TimelineOppositeContent variant='body2' sx={{ m: 'auto 0' }}>
            {duration}
          </TimelineOppositeContent>
        )}
        <TimelineSeparator>
          <TimelineDot>
            <SchoolOutlinedIcon color='success'/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          {isMobile && (
            <Typography variant='body2' color='textSecondary'>
              {duration}
            </Typography>
          )}
          <Typography variant='h6' component="span">
            {major}
          </Typography>
          <Typography>{university}</Typography>
        </TimelineContent>
      </TimelineItem>
    )
  }

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Timeline
      
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: isMobile ? 0 : 0.2,
        },
      }}
    >
      {education.map((edu, index) => (
        <EduTimeline {...edu} key={index} />
      ))}
    </Timeline>
  );
}
