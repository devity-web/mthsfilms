import Image from 'next/image';

interface BentoCardProps {
  title: string;
  lines: string[];
  image?: string;
  video?: string;
}

export const BentoCard = ({title, lines, image, video}: BentoCardProps) => (
  <div className="overflow-hidden rounded-2xl border border-white/20 flex flex-col justify-start items-start relative">
    {/* Background with blur effect */}
    <div
      className="absolute inset-0 rounded-2xl"
      style={{
        background: 'rgba(231, 236, 235, 0.08)',
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)',
      }}
    />
    {/* Additional subtle gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />

    <div className="self-stretch p-6 flex flex-col justify-start items-start gap-2 relative z-10">
      <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
        <p className="self-stretch text-foreground text-lg font-normal leading-7">
          {title} <br />
          {lines.map(line => (
            <span className="text-muted-foreground" key={line}>
              {line}
            </span>
          ))}
        </p>
      </div>
    </div>
    <div className="-mt-0.5 z-10 h-72 w-full">
      {image && (
        <Image
          className="w-full h-full object-cover object-center"
          src={image}
          width={300}
          height={300}
          alt="Portfolio"
          quality={100}
        />
      )}

      {video && (
        <iframe
          src="https://www.youtube.com/embed/5zpP9v2iqEc?si=PmEIpg7rDdAStafR"
          title="YouTube video player"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full h-full"
          frameBorder={0}
        ></iframe>
      )}
    </div>
  </div>
);
