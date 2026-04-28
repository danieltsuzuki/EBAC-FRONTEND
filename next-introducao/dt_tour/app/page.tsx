import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const link = {
    path: "/destinations",
    style: "underline text-purple-500 hover:text-purple-400"
  }

  const sectionStyles = "flex align-center flex-col max-w-7xl justify-center items-center sm:px-10 sm:pt-30 mx-auto"

  const marginBottom = "mb-4"

  return (
    <>
      <section className={sectionStyles}>
        <div className="w-full">
          <p className={marginBottom}>Bem-vindo ao <strong>DT Tour</strong>, o seu ponto de partida para descobrir o mundo de forma simples, inspiradora e inesquecível. Aqui você encontra destinos incríveis, dicas exclusivas e tudo o que precisa para transformar qualquer viagem em uma experiência única — seja uma aventura internacional, um refúgio tranquilo ou aquele bate-volta perfeito.</p>
          <p className={marginBottom}>Explore novos lugares, planeje com confiança e deixe a curiosidade te guiar. No DT Tour, cada destino conta uma história — e a próxima pode ser a sua.</p>
          <span>👉 Acesse nossa <Link href={link.path} className={link.style}>lista de destinos</Link> e comece agora a planejar sua próxima viagem!</span>
        </div>
      </section>
    </>
  );
}
