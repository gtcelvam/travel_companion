import React from "react";
import S from "./header-style";
import { AppBar, Box, InputBase } from "@mui/material";
import { Autocomplete } from "@react-google-maps/api";
import { SearchOutlined } from "@mui/icons-material";

const Header = () => {
  return (
    <S.HeaderContainer>
      <AppBar position="static">
        <S.HeaderToolBar>
          <S.HeaderTitle variant="h5">Travel Advisor</S.HeaderTitle>
          <Box display={"flex"} alignItems={"center"} gap={2}>
            <S.HeaderTitle variant="h6">Explore new places</S.HeaderTitle>
            {/* <Autocomplete> */}
            <S.HeaderSearchContainer>
              <S.HeaderSearchIconContainer>
                <SearchOutlined />
              </S.HeaderSearchIconContainer>
              <InputBase placeholder="Search..." />
            </S.HeaderSearchContainer>
            {/* </Autocomplete> */}
          </Box>
        </S.HeaderToolBar>
      </AppBar>
    </S.HeaderContainer>
  );
};

export default Header;
