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

    return (
      <TimelineItem>
        <TimelineOppositeContent variant='body2' sx={{ m: 'auto 0' }}>
          {duration}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot >
            <SchoolOutlinedIcon color='success'/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography component="span">
            {major}
          </Typography>
          <Typography component="div" variant='body1'>
            {university}
          </Typography>
        </TimelineContent>
      </TimelineItem>
    )
  }

  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses}`]: {
          flex: 0.2,
        },
      }}
    >
      {
        education.map((edu, index) => <EduTimeline {...edu} key={index} />)
      }
    </Timeline>
  );
}