import { CardProps } from "../../types/Card";
import MuiCard from "@mui/material/Card";
import { Link } from "@mui/material";

function Card(props: CardProps) {
  const { order, title, subtitle, description, rating, links } = props;
  return (
    <MuiCard title={title} sx={{ order }}>
      {description}
      <div style={{ display: "flex" }}>
        {links.map((link) => (
          <Link href={link.url} sx={{ order: link.order }}>
            {link.label}
          </Link>
        ))}
      </div>
    </MuiCard>
  );
}

export default Card;
