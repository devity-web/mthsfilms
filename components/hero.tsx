import {libre} from '@/utils/fonts';
import {Header} from './header';

const videoId = 'gsflbljqz5k';

export function Hero() {
  return (
    <section
      className="flex flex-col items-center text-center relative mx-auto rounded-2xl overflow-hidden my-6 py-0 px-4
         w-full h-[100vh] md:px-0"
    >
      <div className="fixed border border-b-1 bg-background top-0 left-0 right-0 z-50">
        <Header />
      </div>

      <div className="absolute inset-0 w-full opacity-10">
        <iframe
          id="hero-video"
          className="absolute top-1/2 left-1/2 w-[177.77777778vh] h-[56.25vw] min-h-full min-w-full -translate-x-1/2 -translate-y-1/2"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1`}
          title="Hero Video Background"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div className="relative z-10 space-y-4 md:space-y-5 lg:space-y-6 mb-6 md:mb-7 lg:mb-9 max-w-md md:max-w-[500px] lg:max-w-[588px] mt-32 md:mt-[160px] px-4">
        <h1
          className={`${libre.className} text-foreground text-3xl md:text-4xl lg:text-6xl font-bold leading-tight`}
        >
          Imagens que elevam a sua história.
        </h1>
        <p className="text-muted-foreground text-base md:text-base lg:text-lg font-medium leading-relaxed max-w-lg mx-auto">
          Capturamos perspectivas únicas para eventos, imóveis, turismo e
          produções audiovisuais.
        </p>
      </div>
    </section>
  );
}
