import Image from "../ui/Image";

interface AgentRadioCardProps {
  onClick: React.MouseEventHandler<HTMLInputElement>;
  className?: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

export default function AgentRadioCard({
  onClick,
  className,
  imageSrc,
  imageAlt,
  title,
  description,
}: AgentRadioCardProps) {
  return (
    <label className="cursor-pointer">
      <input
        onClick={onClick}
        type="radio"
        name="agent"
        className="hidden peer"
      />
      <div className={className}>
        <Image
          className="h-25 w-50 object-contain"
          src={imageSrc}
          alt={imageAlt}
        />
        <div className="flex flex-col items-center text-center">
          <h2 className="text-sm font-semibold text-slate-800">{title}</h2>
          <p className="mt-1 text-xs text-slate-500">{description}</p>
        </div>
      </div>
    </label>
  );
}
