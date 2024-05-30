interface Props {
  title: string;
  type: string;
}

export default function Buttons({ title, type }: Props) {
  return <button className={type}>{title}</button>;
}
