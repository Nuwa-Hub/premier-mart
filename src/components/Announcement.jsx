import React from 'react';
import styled from 'styled-components';

const Container=styled.div`
height: 30px;
background-color: teal;
color: #FFFFFF;
display: flex;
align-items: center;
font-size:14px;
font-weight:30;
justify-content: center;
`
const Announcement = () => {
  return <Container>Super Deal!$$</Container>;
};

export default Announcement;
