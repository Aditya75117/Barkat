export default function SvgDefs() {
  return (
    <svg className="svg-defs" aria-hidden="true">
      <defs>
        <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" className="gradient-stop-start" />
          <stop offset="50%" className="gradient-stop-mid" />
          <stop offset="100%" className="gradient-stop-end" />
        </linearGradient>
      </defs>
    </svg>
  );
}
