import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/hooks/use-reveal";
import {
  WhatsAppIcon,
  InstagramIcon,
  FacebookIcon,
  MapPinIcon,
} from "@/components/BrandIcons";
import { HeartPulse, ShieldCheck, Scale } from "lucide-react";

const WHATSAPP = "https://wa.link/rso0eo";
const INSTAGRAM =
  "https://www.instagram.com/jessicaprevidenciaria?igsh=Mjl4a2lrNzY5d2N6";
const FACEBOOK = "https://www.facebook.com/share/1FTC8UzDFL/?mibextid=wwXIfr";
const MAPS =
  "https://www.google.com/maps/place/J%C3%A9ssica+Rodrigues+Advocacia+%7C+Advocacia+Previdenci%C3%A1ria+-+R.+Joaquim+Carlos+dos+Santos,+492+-+Constantino,+Patroc%C3%ADnio+-+MG,+38747-036/@-18.9403667,-46.9878721,16z/data=!4m6!3m5!1s0x94afbbbbaf77465d:0x5b73854047dd4a2e!8m2!3d-18.9403667!4d-46.9878721!16s%2Fg%2F11txy5bn10";
const LOGO = "https://i.postimg.cc/CK63W8TT/Design-sem-nome.png";

const TITLE = "Jéssica Rodrigues Advocacia | Previdenciária e INSS";
const DESC =
  "Advocacia previdenciária com mais de 10 anos revertendo negativas do INSS. Auxílio-doença, aposentadoria e BPC/LOAS. Atendimento em todo o Brasil.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:image", content: LOGO },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: LOGO },
    ],
  }),
  component: Index,
});

const contatos = [
  { label: "WhatsApp", href: WHATSAPP, Icon: WhatsAppIcon },
  { label: "Instagram", href: INSTAGRAM, Icon: InstagramIcon },
  { label: "Facebook", href: FACEBOOK, Icon: FacebookIcon },
  { label: "Localização", href: MAPS, Icon: MapPinIcon },
];

const areas = [
  {
    Icon: HeartPulse,
    title: "Auxílio-doença",
    text: "Orientação e acompanhamento em pedidos e negativas relacionados à incapacidade temporária para o trabalho.",
  },
  {
    Icon: Scale,
    title: "Aposentadoria",
    text: "Análise e acompanhamento previdenciário para quem busca sua aposentadoria.",
  },
  {
    Icon: ShieldCheck,
    title: "BPC / LOAS",
    text: "Atuação em pedidos e negativas do Benefício de Prestação Continuada.",
  },
];

function Index() {
  return (
    <main className="relative overflow-hidden">
      {/* HERO */}
      <section className="bg-hero px-5 pt-8 pb-14 text-center">
        <Reveal>
          <img
            src={LOGO}
            alt="Logo Jéssica Rodrigues Advocacia"
            className="mx-auto w-[82%] max-w-[420px] object-contain"
          />
        </Reveal>

        <Reveal delay={120}>
          <h1 className="mt-3 text-3xl leading-tight font-medium tracking-wide sm:text-4xl">
            Jéssica Rodrigues Advocacia
          </h1>
          <p className="mt-1.5 text-[0.7rem] tracking-[0.32em] text-gold-soft/80 uppercase">
            Advocacia Previdenciária | INSS
          </p>
          <div className="hairline mx-auto mt-5 w-28" />
        </Reveal>

        <Reveal delay={220}>
          <h2 className="mx-auto mt-7 max-w-[22ch] text-[2rem] leading-[1.15] font-light sm:text-5xl">
            <span className="text-gilded">“Benefício negado</span> pelo INSS não
            significa fim.”
          </h2>
          <p className="mx-auto mt-5 max-w-[38ch] text-sm leading-relaxed text-muted-foreground">
            Há mais de 10 anos atuando para reverter negativas e defender direitos
            previdenciários. Atendimento em todo o Brasil.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-7 inline-flex items-center justify-center rounded-full px-9 py-4 text-xs font-semibold uppercase"
          >
            Falar com a advogada
          </a>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-12 text-[0.68rem] tracking-[0.34em] text-gold uppercase">
            Entre em contato
          </p>
          <ul className="mx-auto mt-5 grid max-w-md grid-cols-2 gap-3">
            {contatos.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-border bg-black/45 px-4 py-3.5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/50 hover:bg-black/65"
                >
                  <Icon className="h-6 w-6 shrink-0" />
                  <span className="min-w-0 truncate text-sm tracking-wide">
                    {label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* ATUAÇÃO */}
      <section className="bg-band px-5 py-20">
        <Reveal>
          <h2 className="text-center text-3xl font-light tracking-wide">
            Atuação <span className="text-gilded">Previdenciária</span>
          </h2>
          <div className="hairline mx-auto mt-4 w-20" />
        </Reveal>
        <ul className="mx-auto mt-10 grid max-w-3xl gap-4">
          {areas.map(({ Icon, title, text }, i) => (
            <Reveal as="li" key={title} delay={i * 120}>
              <div className="rounded-2xl border border-border bg-black/50 p-6">
                <Icon className="h-7 w-7 text-gold" strokeWidth={1.4} />
                <h3 className="mt-4 text-xl font-medium">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {text}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* AUTORIDADE */}
      <section className="bg-[oklch(0.1_0.01_20)] px-5 py-20">
        <div className="mx-auto grid max-w-3xl gap-8 text-center">
          <Reveal>
            <p className="text-gilded text-6xl font-light">+10 anos</p>
            <p className="mx-auto mt-3 max-w-[34ch] text-sm text-muted-foreground">
              Revertendo negativas e defendendo direitos previdenciários.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="hairline mx-auto w-24" />
            <p className="mt-8 text-2xl font-light tracking-wide">
              Atendimento em todo o Brasil
            </p>
            <p className="mx-auto mt-3 max-w-[38ch] text-sm text-muted-foreground">
              Atendimento previdenciário para clientes de diferentes cidades e
              estados.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-[0.7rem] tracking-[0.32em] text-gold uppercase">
              OAB/MG
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              Ordem dos Advogados do Brasil — Seção Minas Gerais
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cta px-5 py-24 text-center">
        <Reveal>
          <h2 className="mx-auto max-w-[20ch] text-3xl leading-tight font-light sm:text-4xl">
            Teve um benefício <span className="text-gilded">negado pelo INSS?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[40ch] text-sm leading-relaxed text-muted-foreground">
            Uma negativa não significa que o seu direito acabou. Cada situação
            precisa ser analisada individualmente.
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-8 inline-flex items-center justify-center rounded-full px-9 py-4 text-xs font-semibold uppercase"
          >
            Quero analisar meu caso
          </a>
        </Reveal>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-[oklch(0.09_0.012_20)] px-5 py-14 text-center">
        <Reveal>
          <img
            src={LOGO}
            alt="Jéssica Rodrigues Advocacia"
            className="mx-auto w-44 object-contain opacity-95"
          />
          <p className="mt-4 text-lg font-medium tracking-wide">
            Jéssica Rodrigues Advocacia
          </p>
          <p className="mt-1 text-[0.65rem] tracking-[0.28em] text-gold-soft/70 uppercase">
            Advocacia Previdenciária | INSS
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Atendimento em todo o Brasil
          </p>
          <div className="hairline mx-auto mt-7 w-16" />
          <p className="mx-auto mt-6 max-w-[44ch] text-[0.7rem] leading-relaxed text-muted-foreground/70">
            As informações deste site possuem caráter informativo e não substituem
            uma análise jurídica individualizada.
          </p>
        </Reveal>
      </footer>

      {/* WHATSAPP FLUTUANTE */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_10px_30px_-8px_rgba(37,211,102,0.6)] ring-1 ring-black/20 transition-transform duration-300 hover:scale-105"
      >
        <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
          <path
            fill="#fff"
            d="M16 4C9.4 4 4 9.4 4 16c0 2.1.6 4.1 1.6 5.9L4 28l6.3-1.6A12 12 0 1 0 16 4Zm0 2.2a9.8 9.8 0 1 1-5.1 18.1l-.4-.2-3.7.9 1-3.6-.3-.4A9.8 9.8 0 0 1 16 6.2Zm-3.9 4.4h-.6c-.2 0-.6.1-.9.4-.3.4-1.1 1.1-1.1 2.7s1.1 3.1 1.3 3.3c.2.2 2.2 3.5 5.4 4.8 2.7 1 3.2.8 3.8.8.6-.1 1.9-.8 2.2-1.5.3-.8.3-1.4.2-1.5-.1-.1-.3-.2-.6-.4-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.3-.7.1-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-1.9-1.8-2.3-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.3.3-.6.1-.2 0-.4 0-.6-.1-.2-.7-1.7-1-2.3-.2-.5-.4-.5-.6-.5Z"
          />
        </svg>
      </a>
    </main>
  );
}
