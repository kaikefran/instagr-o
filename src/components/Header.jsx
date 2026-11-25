import { FaRegHeart, FaRegPaperPlane } from "react-icons/fa";

function Header() {
  return (
    <header className="header">
      <div className="header-conteudo">
        <h1 className="logo">Instagrão</h1>
        <div className="header-icones">
          <FaRegHeart aria-label="Notificações" />
          <FaRegPaperPlane aria-label="Mensagens" />
        </div>
      </div>
    </header>
  );
}

export default Header;
