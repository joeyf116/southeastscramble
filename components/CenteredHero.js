import { Instagram } from "react-bootstrap-icons";

export default function CenteredHero({ title }) {
  return <div className="text-center">
    <img src="/images/textbranding.svg" alt="Southeast Scramble" width="400" />
    <h3>Launching Soon...</h3>
    <p>You can find us on Instagram to stay up to date!</p>
    <hr />
    <a style={{ textDecoration: "inherit", color: "inherit" }} href="https://www.instagram.com/sessubonly/"><Instagram size={50} /></a>
  </div>
}