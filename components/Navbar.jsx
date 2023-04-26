import styled from "styled-components"
import React from 'react'

const Section = styled.div`
    display: flex;
    justify-content: center;
    
    @media only screen and (max-width: 768px) {
        width: 100%;
    }
`;
const Container = styled.div`
    width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center; 
    padding: 10px 0px;

    @media only screen and (max-width: 768px) {
        width: 100%;
        padding: 10px;
    }   
`;
const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
`;
const Logo = styled.img`
    max-width: 100%;
    width: 20%;
    height: 50px;
    border-radius: 50%;
    
`;
const List = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;

    @media only screen and (max-width: 768px) {
        display: none;
`;
const ListItem = styled.li`
    cursor: pointer;
`;

const Icon  = styled.img`
    width: 30px;
    cursor: pointer;
`;

const Icons  = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
`;

const Button = styled.button`
    width: 100px;
    padding: 5px;
    background-color: #da4ea2;
    color: white;
    border: none:
    border-radius: 5px;
    cursor: pointer;    
`;    

export const Navbar = () => {
  return (
    <Section>
        <Container>
            <Links>
                <Logo src= "./img/photo.png" />
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Studio</ListItem>
                    <ListItem>Works</ListItem>
                    <ListItem>Contacts</ListItem>

                </List>
            </Links>
            <Icons>
                <Icon src="./img/search.png" />
                <Button>Hire Now</Button>
            </Icons>
        </Container>
    </Section>
  )
}
