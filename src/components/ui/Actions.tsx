import { Link } from "react-router-dom";

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
          <Link className="font-black hover:underline" to={mainHref}>
            {mainText}
          </Link>
        )}
        {subText && subLinkText && subHref && (
          <p>
            {subText}{" "}
            <Link to={subHref} className="font-black hover:underline">
              {subLinkText}
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}
