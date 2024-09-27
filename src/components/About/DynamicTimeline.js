import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBaby, FaSchool, FaUniversity, FaLaptopCode, FaBriefcase } from 'react-icons/fa';

const TimelineEvent = ({ icon: Icon, date, title, subtitle, content }) => (
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgba(94, 75, 141, 0.1)', color: '#fff', boxShadow: 'none' }}
    contentArrowStyle={{ borderRight: '7px solid rgba(94, 75, 141, 0.1)' }}
    date={date}
    iconStyle={{ background: 'rgb(94, 75, 141)', color: '#fff' }}
    icon={<Icon />}
  >
    <h3 className="vertical-timeline-element-title">{title}</h3>
    <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
    <p>{content}</p>
  </VerticalTimelineElement>
);

const DynamicTimeline = ({ expandLevel }) => {
  const timelineEvents = [
    {
      icon: FaBaby,
      date: "2002",
      title: "Born in Jabalpur",
      subtitle: "Madhya Pradesh, India",
      content: "My journey begins in the heart of India."
    },
    {
      icon: FaSchool,
      date: "2006 - 2018",
      title: "Early Education in Bathinda",
      subtitle: "St. Joseph's Convent Senior Secondary School",
      content: "Moved to Punjab and started my educational journey."
    },
    {
      icon: FaSchool,
      date: "2018 - 2021",
      title: "Higher Secondary Education in Delhi",
      subtitle: "Abhinav Public School, CU Block",
      content: "Pursued higher education while preparing for IIT JEE at Vidyamandir Classes, Pitampura."
    },
    {
      icon: FaUniversity,
      date: "2021 - Present",
      title: "Undergraduate Studies at NSUT",
      subtitle: "B.Tech in Computer Science",
      content: "Currently in my 4th year, diving deep into the world of technology and innovation."
    },
    {
      icon: FaLaptopCode,
      date: "2022 - Present",
      title: "Freelancing Journey",
      subtitle: "2 Years of Professional Experience",
      content: "Applying my skills to real-world projects and continuously learning from diverse challenges."
    },
    {
      icon: FaBriefcase,
      date: "June 2024 - Present",
      title: "HCLTech, Noida",
      subtitle: "Software Associate Engineer Intern",
      content: "Revitalized database performance, automated task scheduling, modernized legacy codebase, and scaled system capacity."
    },
    {
      icon: FaBriefcase,
      date: "February 2024 - April 2024",
      title: "IGDTUW, Delhi",
      subtitle: "ML Research Intern",
      content: "Authored research paper 'GAFNet: A Hybrid Approach for Autonomous Driving', integrating Genetic Algorithms with Neural Networks."
    }
  ];

  return (
    <VerticalTimeline>
      {timelineEvents.slice(0, expandLevel + 2).map((event, index) => (
        <TimelineEvent
          key={index}
          icon={event.icon}
          date={event.date}
          title={event.title}
          subtitle={event.subtitle}
          content={event.content}
        />
      ))}
    </VerticalTimeline>
  );
};

export default DynamicTimeline;