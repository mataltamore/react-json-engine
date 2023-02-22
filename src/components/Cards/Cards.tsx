import { CardsProps } from "../../types/Cards";
import Card from "../Card/Card";

function Cards(props: CardsProps) {
  const { backgroundColor, list } = props;
  return (
    <div
      style={{ display: "flex", gap: "1rem", backgroundColor, padding: "1rem" }}
    >
      {list.map((card) => (
        <Card {...card} />
      ))}
    </div>
  );
}

export default Cards;
