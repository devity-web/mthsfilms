import {libre} from '@/utils/fonts';
import {BentoCard} from './bento-card';

const cards = [
  {
    title: 'Rio Lis',
    lines: ['Leiria, Portugal'],
    image: '/portfolio-1.jpg',
  },
  {
    title: 'Mosteiro da Batalha',
    lines: ['Batalha, Portugal'],
    image: '/portfolio-2.jpg',
  },
  {
    title: 'Praça Francisco Rodrigues Lobo',
    lines: ['Leiria, Portugal'],
    image: '/portfolio-3.jpg',
  },
  {
    title: 'Igreja e Convento de Santo Agostinho',
    lines: ['Leiria, Portugal'],
    image: '/portfolio-4.jpg',
  },
  {
    title: 'Igreja e Convento de Santo Agostinho',
    lines: ['Leiria, Portugal'],
    image: '/portfolio-5.jpg',
  },
  {
    title: 'O equipamento',
    lines: ['DJI Mini 3 @ 4K30fps'],
    image: '/portfolio-6.jpg',
  },
];

export function BentoSection() {
  return (
    <section className="w-full px-5 flex flex-col justify-center items-center overflow-visible bg-transparent">
      <div className="w-full py-8 md:py-16 relative flex flex-col justify-start items-start gap-6">
        <div className="w-[547px] h-[938px] absolute top-[614px] left-[80px] origin-top-left rotate-[-33.39deg] bg-primary/10 blur-[130px] z-0" />
        <div className="self-stretch py-8 md:py-14 flex flex-col justify-center items-center gap-2 z-10">
          <div className="flex flex-col justify-start items-center gap-4">
            <h2
              className={`${libre.className} font-bold w-full max-w-[655px] text-center text-foreground text-4xl md:text-6xl leading-tight md:leading-[66px]`}
            >
              Do céu à lente
            </h2>
            <p className="w-full max-w-[600px] text-center text-muted-foreground text-lg md:text-xl font-medium leading-relaxed">
              Os voos que foram transformados em imagens inesquecíveis.
            </p>
          </div>
        </div>
        <div className="self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10">
          {cards.map(card => (
            <BentoCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
