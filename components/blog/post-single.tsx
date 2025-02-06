import React from "react";
import Author from "../../interfaces/author";
import Backlinks from "../misc/backlinks";
import PostBody from "./post-body";
import PostMeta from "./post-meta";

type Props = {
  title: string;
  content: string;
  date?: string;
  author?: Author;
  status?: string;
  backlinks: {
    [k: string]: {
      title: string;
      excerpt: string;
    };
  };
  image?: {
    url: string;
    type: string;
    alt: string;
  };
};

function PostSingle({
  title,
  date,
  author,
  status,
  content,
  backlinks,
  image,
}: Props) {
  // Mapeo de filtros según el estado
  const statusFilters: Record<string, string> = {
    MUERTO: "grayscale",
    HERIDO: "bg-red-500 bg-opacity-50",
  };

  const statusEmoji: Record<string, string> = {
    MUERTO: "💀",
    HERIDO: "🩸",
  };

  const filterClass = status ? statusFilters[status] || "" : "";

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto lg:max-w-none">
            <article>
              {/* Article header */}
              <header className="max-w-3xl mx-auto mb-20">
                {/* Title */}
                <h1 className="h1 text-center mb-4 text-6xl">
                  {title}
                  {status && ` (${status.toLocaleLowerCase()})`}
                </h1>

                {image && (
                  <div className="flex justify-center relative">
                    {/* Contenedor de imagen con overlay rojo */}
                    <div className="relative h-40 w-40 rounded-full overflow-hidden border-2">
                      <img
                        alt={image.alt}
                        className={`w-full h-full object-cover ${status === 'MUERTO'? 'grayscale': ''}`}
                        src={image.url}
                      />
                      {filterClass && (
                        <div
                          className={`absolute inset-0 ${filterClass}`}
                        ></div>
                      )}

                    </div>
                    {/* Emoji para el estado "HERIDO" */}
                    {status && (
                      <div className="absolute text-center bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/4 z-10 rounded-full p-1 bg-white h-10 w-10">
                        <span className="text-xl z-10 ">{statusEmoji[status]}</span>
                      </div>
                    )}
                  </div>
                )}
              </header>

              {/* Article content */}
              <div className="lg:flex lg:justify-between" data-sticky-container>
                {/* Main content */}
                <div>
                  {/* Article meta */}
                  {(author || date) && (
                    <>
                      <PostMeta author={author} date={date} status={status} />
                      <hr className="w-16 h-px pt-px bg-gray-200 border-0 my-6" />
                    </>
                  )}

                  {/* Article body */}
                  <PostBody content={content} />
                </div>

                {/* Sidebar */}
                <aside className="relative pt-8 lg:pt-0 lg:block lg:w-72 lg:ml-20 shrink-0">
                  <div>
                    <h4 className="text-lg font-bold leading-snug tracking-tight mb-4">
                      Backlinks
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                      {Object.keys(backlinks).length > 0 && (
                        <Backlinks backlinks={backlinks} />
                      )}
                    </div>
                  </div>
                </aside>
              </div>
              {/* Article footer */}
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PostSingle;
