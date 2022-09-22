import { Container, Link, Typography } from "@mui/material";

type NavProps = {
  refLink: string;
  text: string;
};

function Nav(props: NavProps) {
  return (
    <nav>
      <Link
        href={`/${props.refLink}`}
        className="navLink"
        variant="body1"
        underline="none"
      >
        <p>{props.text}</p>
        <img src="./arrow.svg" />
      </Link>
    </nav>
  );
}

export default Nav;
