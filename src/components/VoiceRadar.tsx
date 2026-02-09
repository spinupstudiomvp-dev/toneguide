"use client";

interface VoiceRadarProps {
  formalCasual: number;
  seriousPlayful: number;
  technicalSimple: number;
  reservedBold: number;
  size?: number;
}

export default function VoiceRadar({
  formalCasual,
  seriousPlayful,
  technicalSimple,
  reservedBold,
  size = 280,
}: VoiceRadarProps) {
  const cx = size / 2;
  const cy = size / 2;
  const r = size * 0.38;

  // 4 axes: top, right, bottom, left
  const values = [formalCasual, reservedBold, seriousPlayful, technicalSimple];
  const labels = [
    { text: "Casual", opposite: "Formal", angle: -90 },
    { text: "Bold", opposite: "Reserved", angle: 0 },
    { text: "Playful", opposite: "Serious", angle: 90 },
    { text: "Simple", opposite: "Technical", angle: 180 },
  ];

  const getPoint = (value: number, angleIdx: number) => {
    const angle = (angleIdx * 90 - 90) * (Math.PI / 180);
    const dist = (value / 100) * r;
    return { x: cx + dist * Math.cos(angle), y: cy + dist * Math.sin(angle) };
  };

  const points = values.map((v, i) => getPoint(v, i));
  const pathD = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ") + " Z";

  const gridLevels = [25, 50, 75, 100];

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="mx-auto">
      {/* Grid */}
      {gridLevels.map((level) => {
        const gr = (level / 100) * r;
        return (
          <polygon
            key={level}
            points={[0, 1, 2, 3]
              .map((i) => {
                const angle = (i * 90 - 90) * (Math.PI / 180);
                return `${cx + gr * Math.cos(angle)},${cy + gr * Math.sin(angle)}`;
              })
              .join(" ")}
            fill="none"
            stroke="#e5e1dc"
            strokeWidth={level === 100 ? 1.5 : 0.5}
          />
        );
      })}

      {/* Axes */}
      {[0, 1, 2, 3].map((i) => {
        const angle = (i * 90 - 90) * (Math.PI / 180);
        return (
          <line
            key={i}
            x1={cx}
            y1={cy}
            x2={cx + r * Math.cos(angle)}
            y2={cy + r * Math.sin(angle)}
            stroke="#e5e1dc"
            strokeWidth={0.5}
          />
        );
      })}

      {/* Data shape */}
      <polygon points={points.map((p) => `${p.x},${p.y}`).join(" ")} fill="rgba(232,121,96,0.15)" stroke="#e87960" strokeWidth={2} />

      {/* Data points */}
      {points.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={4} fill="#e87960" stroke="white" strokeWidth={2} />
      ))}

      {/* Labels */}
      {labels.map((label, i) => {
        const angle = (i * 90 - 90) * (Math.PI / 180);
        const lx = cx + (r + 28) * Math.cos(angle);
        const ly = cy + (r + 28) * Math.sin(angle);
        const anchor = i === 1 ? "start" : i === 3 ? "end" : "middle";
        const dy = i === 0 ? -8 : i === 2 ? 16 : 0;
        return (
          <g key={i}>
            <text
              x={lx}
              y={ly + dy}
              textAnchor={anchor}
              className="fill-foreground text-[11px] font-semibold"
            >
              {label.text}
            </text>
            <text
              x={lx}
              y={ly + dy + 14}
              textAnchor={anchor}
              className="fill-muted-foreground text-[9px]"
            >
              {values[i]}%
            </text>
          </g>
        );
      })}
    </svg>
  );
}
