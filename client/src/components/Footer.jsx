import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PinterestIcon from "@mui/icons-material/Pinterest";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection:"column"})}
`;
const Left = styled.div`
  flex: 1;
`;

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({  display:"none"})}
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor:"lightgray"})}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const PaymentMethods = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
`;
const PaymentImg = styled.img`
  height: 30px;
  margin: 6px;
  width: 55px;
  background-color: #${(props) => props.color};
  border-radius:3px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Premier Mart</Logo>
        <Desc>
          a popular way of dressing during a particular time or among a
          particular group of people. : the business of creating and selling
          clothes in new styles. : clothes that are popular.
        </Desc>
        <SocialContainer>
          <SocialIcon color="385999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="e4405f">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="e60023">
            <PinterestIcon />
          </SocialIcon>
          <SocialIcon color="55acee">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="075e54">
            <WhatsAppIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Hospital</ListItem>
          <ListItem>Mail</ListItem>
          <ListItem>Rooms</ListItem>
          <ListItem>Lathika Fashion</ListItem>
          <ListItem>Fashion Bug</ListItem>
          <ListItem>Delivery </ListItem>
          <ListItem>Shop</ListItem>
          <ListItem>keels</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <AddLocationIcon style={{ marginRight: "10px" }} />
          207/F,Piliyandala,Colombo
        </ContactItem>
        <ContactItem>
          <PhoneAndroidIcon style={{ marginRight: "10px" }} />
          +94 5929879
        </ContactItem>
        <ContactItem>
          <MarkunreadIcon style={{ marginRight: "10px" }} />
          nuwanperera@gmaail.com
        </ContactItem>
        <PaymentMethods>
          <PaymentImg color="EB001B" src={require("./images/masterCard.png")} />
          <PaymentImg color="1A1F71" src={require("./images/Visa.png")} />
          <PaymentImg color="000000" src={require("./images/Amazon.png")} />
          <PaymentImg color="003087" src={require("./images/Paypal.png")} />
        </PaymentMethods>
      </Right>
    </Container>
  );
};

export default Footer;
