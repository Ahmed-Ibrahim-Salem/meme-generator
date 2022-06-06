import trollFace from "../images/trollFace.png";
export default function Header() {
  return (
    <div className="header">
      <img src={trollFace} alt="meme-face" className="header--img" />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">React Course - Project 3</h4>
    </div>
  );
}
