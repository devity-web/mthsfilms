import {
  IconHomeDollar,
  IconSpeakerphone,
  IconTorii,
  IconWreckingBall,
} from '@tabler/icons-react';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {libre} from '@/utils/fonts';

const features = [
  {
    icon: IconWreckingBall,
    title: 'Obras',
    description:
      'Acompanhe o progresso da sua construção de uma forma inovadora e eficiente.',
  },
  {
    icon: IconSpeakerphone,
    title: 'Eventos',
    description:
      'Casamentos, festas, shows e atividades esportivas, garantindo ângulos exclusivos e alta qualidade visual.',
  },
  {
    icon: IconHomeDollar,
    title: 'Imóveis',
    description:
      'Valorize seu imóvel com imagens aéreas de alto impacto. Filmagens com drones destacam ângulos exclusivos, mostram a dimensão real do espaço e tornam anúncios muito mais atrativos para potenciais compradores.',
  },
  {
    icon: IconTorii,
    title: 'Turismo',
    description:
      'Mostre destinos de forma única com imagens aéreas impressionantes. Paisagens, atrações e roteiros turísticos de ângulos exclusivos, valorizando experiências e atraindo visitantes.',
  },
];

const Features04Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-screen-lg w-full px-6">
        <h2
          className={`${libre.className} font-bold text-4xl md:text-5xl md:leading-[3.5rem] tracking-tight max-w-lg`}
        >
          Os serviços que oferecemos
        </h2>
        <div className="mt-6 md:mt-8 w-full mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <Accordion defaultValue="item-0" type="single" className="w-full">
              {features.map(({title, description, icon: Icon}, index) => (
                <AccordionItem
                  key={title}
                  value={`item-${index}`}
                  className="data-[state=open]:border-b-2 data-[state=open]:border-primary"
                >
                  <AccordionTrigger className="text-lg [&>svg]:hidden">
                    <div className="flex items-center gap-4">
                      <Icon />
                      {title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-[17px] leading-relaxed text-muted-foreground">
                    {description}
                    <Image
                      src="/drone.jpg"
                      alt="Drone"
                      width={256}
                      height={256}
                      unoptimized
                      className="w-full h-full bg-muted rounded-xl object-cover md:hidden"
                    />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Media */}
          <Image
            src="/drone.jpg"
            alt="Drone"
            width={256}
            height={256}
            unoptimized
            className="hidden md:block w-full h-full bg-muted rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Features04Page;
