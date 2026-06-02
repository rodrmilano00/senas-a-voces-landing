import Eyebrow from './Eyebrow'

export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <>
      <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
      <h2 className="mb-4 text-[clamp(36px,4vw,56px)]">{title}</h2>
      <p className="mb-16 max-w-[560px] text-lg text-muted">{subtitle}</p>
    </>
  )
}
