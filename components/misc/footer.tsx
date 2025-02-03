const Footer = () => {
  return (
    <footer className="border-x-main border-t">
      <div className="container mx-auto px-5">
        <div className="py-2 lg:py-12 flex flex-col lg:flex-row items-center">
          <h3 className="text-xl lg:text-2xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Created and mastered by Lucas Della Sala.
          </h3>
          <div className="flex flex-row lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://www.instagram.com/vlady.ts/"
              target="_blank"
              className="mx-3 bg-x-btn-main hover:bg-x-btn-contrast hover:text-x-btn-main border border-x-btn-main text-x-btn-contrast font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Instagram
            </a>
            <a
              href="https://github.com/lucasdellasala"
              target="_blank"
              className="mx-3 bg-x-btn-main hover:bg-x-btn-contrast hover:text-x-btn-main border border-x-btn-main text-x-btn-contrast font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer