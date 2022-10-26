import { Container, Link, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

type NavProps = {
  refLink: string;
  text: string;
};

function Nav(props: NavProps) {
  const navigate = useNavigate();
  const LinkTo = (e: any) => {
    e.preventDefault();
    if (props.refLink == "employee-list") {
      navigate("/employee-list");
    } else {
      navigate("/");
    }
  };

  return (
    <nav>
      <Link
        href={`/${props.refLink}`}
        className="navLink"
        variant="body1"
        underline="none"
        onClick={LinkTo}
      >
        <p>{props.text}</p>
        <img src="./arrow.svg" />
      </Link>
    </nav>
  );
}

export default Nav;
