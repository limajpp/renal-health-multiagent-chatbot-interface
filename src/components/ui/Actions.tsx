interface ActionProps {
  containerClassName?: string;
  mainText?: string;
  mainHref?: string;
  subText?: string;
  subLinkText?: string;
  subHref?: string;
}

export default function Actions({
  containerClassName,
  mainText,
  mainHref,
  subText,
  subLinkText,
  subHref,
}: ActionProps) {
  return (
    <div className={containerClassName}>
      <div className="flex flex-col items-center">
        {mainText && mainHref && (
          <a className="font-black hover:underline" href={mainHref}>
            {mainText}
          </a>
        )}
        {subText && subLinkText && subHref && (
          <p>
            {subText}{" "}
            <a href={subHref} className="font-black hover:underline">
              {subLinkText}
            </a>
          </p>
        )}
      </div>
    </div>
  );
}
