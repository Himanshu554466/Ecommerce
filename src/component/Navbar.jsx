import React from "react";
import styled from "styled-components";
import "@fortawesome/fontawesome-free/css/all.css";
import SearchIcon from "@mui/icons-material/Search";
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const Container = styled.div`
  height: 10vh;
  background-color: white;
  color: black;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;
// ------------left----------
const Left = styled.div`
  flex: 1;
  display: flex;
  align-item:center;
`;
const Language = styled.div`
  font-size: 20px;
  margin-top:5px;
//   cursor: pointer;
`;
const SearchContainer = styled.div`
  border: 3px solid lightgray;
  cursor: pointer;
  display: flex;
  align-item:center;
  margin-left:25px;
  padding:5px;
  border-radius:5px;
`;
const Input = styled.input`
  border:none;
`;


// -------Center-------------
const Center = styled.div`
  flex: 1;
  text-align:center;
  `;
  const Logo = styled.h2`
    font-weight: bold;
    margin:5px;
  `;

// ----------right-----------
const Right = styled.div`
  flex: 1;
  display: flex;
  align-item:center;
  justify-content: flex-end;

`;
const MenuItem = styled.div`
    font-size:14px;
    cursor:pointer;
    margin-left:25px;


`;


const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <SearchIcon style={{color:"gray",fontSize:16}} />
            <Input/>
          </SearchContainer>
        </Left>

        <Center><Logo>SHOP-ME.</Logo></Center>

        <Right>
            <MenuItem>REGISTER</MenuItem>
            <MenuItem>SIGN IN</MenuItem>
            <MenuItem>
            <Badge badgeContent={6} color="success">
        <ShoppingCartOutlinedIcon color="action" />
      </Badge>
            </MenuItem>
            </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
