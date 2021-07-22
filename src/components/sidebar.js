import useUser from "../hooks/use-user";

export default function Sidebar() {
  const x = useUser();

  return <p>I am the sidebar</p>;
}
