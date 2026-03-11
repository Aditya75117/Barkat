export default function SvgDefs() {
  return (
    <svg className="svg-defs" aria-hidden="true">
      <defs>
        <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#D4AF37', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#FDE8A5', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#B8860B', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
    </svg>
  );
}
