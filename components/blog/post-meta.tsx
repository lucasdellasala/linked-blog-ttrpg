import Author from "../../interfaces/author";
import DateFormatter from "../misc/date-formatter";

type Props = {
  author?: Author;
  date?: string;
  status?: string;
};

const PostMeta = ({ author, date, status }: Props) => {
  if (!(author || date)) return null;
  // Mapeo de status a filtros de Tailwind
  const statusFilters: Record<string, string> = {
    muerto: "grayscale",
    "💀": "grayscale",
    herido: "relative after:absolute after:inset-0 after:bg-red-500 after:opacity-50 after:rounded-full",
    "🤕": "relative after:absolute after:inset-0 after:bg-red-500 after:opacity-50 after:rounded-full",
  };

  // Clases condicionales basadas en el status
  const imageClasses = `relative rounded-full ${status ? statusFilters[status] || "" : ""}`;

  return (
    <div className="flex items-center">
      {author && (
        <div className="flex shrink-0 mr-3">
          <a className="relative" href="#0">
            <span className="absolute inset-0 -m-px" aria-hidden="true">
              <span className="absolute inset-0 -m-px bg-white rounded-full"></span>
            </span>
            <img
              className={imageClasses}
              src={author.picture}
              width="32"
              height="32"
              alt="Author"
            />
          </a>
        </div>
      )}
      <div>
        {author && (
          <>
            <span className="text-x-main">By </span>
            <a className="font-medium hover:underline" href="#0">
              {author.name}
            </a>
          </>
        )}
        {author && date && <span className="text-x-main"> · </span>}
        {date && (
          <span className="text-x-main">
            <DateFormatter dateString={date} />
          </span>
        )}
      </div>
    </div>
  );
};

export default PostMeta;
