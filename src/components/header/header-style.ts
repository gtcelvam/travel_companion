import { Box, Toolbar, Typography, styled } from "@mui/material";

namespace S {
  export const HeaderContainer = styled(Box)(() => ({}));

  export const HeaderToolBar = styled(Toolbar)(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  }));

  export const HeaderTitle = styled(Typography)(() => ({}));

  export const HeaderSearchContainer = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "1rem",
  }));

  export const HeaderSearchIconContainer = styled(Box)(() => ({}));
}

export default S;
