type Props = {
  title: string
  content: string
  status?: string
}

const NotePreview = ({ title, status, content }: Props) => {
  return (
    <span className="note-preview block col-span-2 max-w-[400px] rounded shadow-sm p-5 bg-x-contrast cursor-pointer text-lg hover:bg-x-contrast-shadow hover:border-transparent">
      <span className="block font-bold leading-snug tracking-tight truncate mb-1">{title}{status}</span>
      <span className="block font-normal text-x-main whitespace-pre-line max-h-[150px] truncate">{content}</span>
    </span>
  )
}

export default NotePreview