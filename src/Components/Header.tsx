import { Typography } from "@mui/material";

/**
 * Header of pages
 * @returns Header Component
 */
function Header() {
  return (
    <header>
      <img src="./logo.png" className="logo" alt="logo" />
      <Typography
        className="headerH1"
        variant="h1"
        align="center"
        sx={{ fontSize: "50px", fontWeight: "bold" }}
      >
        HRnet
      </Typography>
    </header>
  );
}

export default Header;
