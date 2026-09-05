import SectionAtmosphere from "./SectionAtmosphere";
export default function SectionHeading({
  number,
  label,
  title,
  description,
}: {
  number: string;
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <SectionAtmosphere />
      <p className="eyebrow">
        <span>{number}</span> / {label}
      </p>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
