import { LinkProps } from "./Link";

export interface CardProps {
  order: number;
  title: string;
  subtitle: string;
  description: string;
  rating: number;
  links: Array<LinkProps>;
}
