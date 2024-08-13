import './Tag.sass'

interface props {
  text: string | null
}

export function Tag({ text }: props) {
  return (
    <div className='tag'>{text}</div>
  )
}