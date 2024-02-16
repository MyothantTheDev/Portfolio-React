import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import OfflineBoltOutlinedIcon from '@mui/icons-material/OfflineBoltOutlined';
import Typography from '@mui/material/Typography';
import { List, ListItem } from '@mui/material';

export default function CustomizedTimeline() {


  const Experiencs = [
    {
      position: "Freelance Developer",
      task: [
        "Design & Develop web application using various web technologies"
      ],
      period: "Dev 2023 - Now",
      icon: <LaptopMacIcon />,
      color: 'success'
    },
    {
      position: "Web Developer",
      task: [
        "Responsible for designing and developing a responsive Front-End using HTML5, CSS, JavaScript and React JS",
        "Responsible for designing and developing Back-End using MERN stack, Django, Laravel, And ASP.Net",
        "Designing and generate invoice vouchers in Jaspersoft using Java and SQL queries to retrieve the data for Idempiere (ERP/CRM/SCM) software",
        "Using Minio S3 object storage to store the media and static files",
        "Deploy developed and tested web application on Linux servers using Nginx and Apache web server",
        "Developing maintainable, clean and scalable code",
      ],
      period: "Sep 2021 - Dev 2023",
      icon: <LaptopMacIcon />,
      color: 'primary'
    },
    {
      position: "Junior Electronic Engineer",
      task: [
        "Testing signal strength, Collection tested data of Network devices, and troubleshooting the products",
        "Implementing the designed network components on PCB Boards",
        "Work closely with tech-ops, field engineers, production and quality teams, and programmers to identify and resolve issues and ensure timely delivery of products"
      ],
      period: "Jun 2018 - Jul 2019",
      icon: <OfflineBoltOutlinedIcon />,
      color: 'secondary'
    },
    {
      position: "TechOps",
      task: [
        "Testing and troubleshooting the returned devices",
        "Perform reset firmware through TFTP protocol",
      ],
      period: "Aug 2017 - Jun 2018",
      icon: <OfflineBoltOutlinedIcon />,
      color: 'grey'
    },
  ]


  const TimeLineItems = ({job}) => {

    return (
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
        >
          {job.period}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color={job.color ? job.color : 'grey' } variant='outlined'>
          {job.icon}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            {job.position}
          </Typography>
          <Typography variant="body1" component="div">
            <List sx={{listStyleType: 'disc'}}>
              {
                job.task.map((value, index) => <ListItem sx={{display: 'list-item'}} key={index}>{value}</ListItem>)
              }
            </List>
          </Typography>
        </TimelineContent>
      </TimelineItem>
    )
  }

  return (
    <Timeline position="alternate">
      {
        Experiencs.map((value, index) => <TimeLineItems job={value} key={index}/>)
      }
    </Timeline>
  );
}