export interface LinkProps {
  order: number;
  label: string;
  icon: {
    type: string;
    position: "left" | "right";
  };
  url: string;
}
