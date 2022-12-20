import Head from "next/head";
import Image from "next/image";
import { Layout } from "../src/components/Layout";
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <div>
      <style jsx>{`
        .centerBox {
          display: flex;
          padding: 0 25rem;
          margin-top: 8rem;
        }
        h3 {
          color: #1c3043;
          font-size: 1.7em;
        }
        .banner {
          border: 1px dotted black;
          padding: 5px;
          border-radius: 5px;
        }
        .boxParceiros {
          padding-top: 5rem;
          width: 100vw;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        .imgBox {
          display: flex;
          justfy-content: center;
          align-items: center;
          gap: 10rem;
        }
      `}</style>
      <Layout></Layout>
      <span className="centerBox">
        <div>
          <h3>UM HUB DE CONEXÕES</h3>
          <p>
            Aqui, cada pessoa é um Hub pronto para difundir conceitos,
            estratégias e soluções inovadoras. Os melhores profissionais
            conectados às melhores soluções.
          </p>
        </div>
        <span className="banner">
          <Image
            src="/testeBg.png"
            alt="Vercel Logo"
            width={650}
            height={400}
          />
        </span>
      </span>
      <span className="boxParceiros">
        <h3>Criando soluções para parceiros visionários</h3>
        <span className="imgBox">
          <Image
            src="/aguiaBranca.JPG"
            alt="Vercel Logo"
            width={250}
            height={200}
          />
          <Image
            src="/medSenior.png"
            alt="Vercel Logo"
            width={200}
            height={80}
          />
          <Image src="/arcelor.png" alt="Vercel Logo" width={150} height={80} />
          <Image src="/perfil2.JPG" alt="Vercel Logo" width={180} height={80} />
        </span>
      </span>
    </div>
  );
}
