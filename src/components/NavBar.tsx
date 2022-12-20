import Image from "next/image";
import Link from "next/link";

export const NavBar = () => {
  return (
    <div className="container">
      <style jsx>{`
        .container {
          position: fixed;
          top: 0;
          display: flex;
          width: 100vw;
          height: 4rem;
          padding: 0 15rem;
          background-color: #fff;
          align-items: center;
          justify-content: space-between;
        }
        .buttomContato {
          background-color: darkblue;
          border-radius: 50px;
          padding: 12px 70px;
          color: #fff;
          border: none;
        }
        .linkBox {
          display: flex;
          justify-content: space-between;
          gap: 30px;
        }
        a:hover {
          color: orange;
          cursor: pointer;
        }
        .sobre {
          text-decoration: none;
        }
      `}</style>
      <span>
        <Image src="/Logo_opt.png" alt="Vercel Logo" width={80} height={80} />
      </span>
      <span className="linkBox">
        <a>Home</a>
        <Link className="sobre" href="/about">
          About Us
        </Link>
        <a>Clientes</a>
        <a>Serviços</a>
        <a>Contatos</a>
      </span>

      <button className="buttomContato">Contato</button>
    </div>
  );
};
