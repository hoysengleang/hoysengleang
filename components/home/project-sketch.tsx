// Line-drawn wireframes of what each project does, used as homepage thumbnails.
// Everything strokes with currentColor so the drawings follow light/dark mode.

const common = {
  viewBox: "0 0 240 120",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-full w-full",
  "aria-hidden": true,
};

const label = {
  fill: "currentColor",
  stroke: "none",
  fontSize: 7,
  fontFamily: "var(--font-mono), monospace",
};

function VisualSearch() {
  return (
    <svg {...common}>
      {/* query photo */}
      <rect x="18" y="30" width="54" height="60" rx="3" />
      <path d="M24 82 l14-18 10 11 7-7 11 14" />
      <circle cx="56" cy="44" r="5" />
      <text x="18" y="102" {...label}>
        query.jpg
      </text>
      {/* arrow */}
      <path d="M82 60 h26 m-5 -4 l5 4 -5 4" />
      {/* ranked results */}
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${118 + i * 38} 38)`}>
          <rect
            width="30"
            height="34"
            rx="2"
            strokeDasharray={i === 0 ? undefined : "2 2"}
          />
          <path d="M4 28 l8-10 6 6 4-4 4 8" />
          <text x="0" y="46" {...label}>
            {["0.94", "0.81", "0.77"][i]}
          </text>
        </g>
      ))}
      <rect x="114" y="34" width="38" height="42" rx="3" />
    </svg>
  );
}

function KnowledgeAssistant() {
  return (
    <svg {...common}>
      {/* source document */}
      <path d="M22 18 h44 l12 12 v72 h-56 z" />
      <path d="M66 18 v12 h12" />
      {[42, 50, 58, 74, 82].map((y, i) => (
        <path key={y} d={`M30 ${y} h${[38, 30, 40, 34, 22][i]}`} />
      ))}
      <rect x="27" y="63" width="46" height="6" strokeDasharray="2 2" />
      {/* citation link */}
      <path d="M78 66 C 96 66, 100 50, 118 50" strokeDasharray="2 3" />
      {/* answer bubble */}
      <path d="M118 30 h96 a4 4 0 0 1 4 4 v40 a4 4 0 0 1 -4 4 h-70 l-10 10 v-10 h-16 a4 4 0 0 1 -4 -4 v-40 a4 4 0 0 1 4 -4 z" />
      <path d="M126 44 h72 M126 52 h60 M126 60 h44" />
      <rect x="174" y="56" width="12" height="9" rx="1.5" />
      <text x="177.5" y="63" {...label}>
        1
      </text>
    </svg>
  );
}

function ApiCheck() {
  return (
    <svg {...common}>
      <rect x="20" y="14" width="200" height="92" rx="4" />
      <path d="M20 28 h200" />
      <circle cx="30" cy="21" r="2.5" />
      <circle cx="39" cy="21" r="2.5" />
      <circle cx="48" cy="21" r="2.5" />
      <text x="30" y="42" {...label}>
        $ apicheck scan openapi.yaml
      </text>
      {[
        { y: 56, ok: true, w: 110 },
        { y: 68, ok: false, w: 130 },
        { y: 80, ok: true, w: 90 },
        { y: 92, ok: false, w: 120 },
      ].map((row) => (
        <g key={row.y}>
          {row.ok ? (
            <path d={`M30 ${row.y - 2} l2.5 2.5 5-5`} />
          ) : (
            <path d={`M30 ${row.y - 5} l5 5 m0 -5 l-5 5`} />
          )}
          <path
            d={`M44 ${row.y - 2.5} h${row.w}`}
            strokeDasharray={row.ok ? "3 3" : undefined}
          />
        </g>
      ))}
    </svg>
  );
}

function PawnSystem() {
  return (
    <svg {...common}>
      <rect x="16" y="14" width="208" height="92" rx="4" />
      {/* sidebar */}
      <path d="M62 14 v92" />
      <path d="M24 28 h28 M24 40 h22 M24 50 h26 M24 60 h20" />
      {/* stat tiles */}
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${72 + i * 50} 24)`}>
          <rect width="42" height="22" rx="2" />
          <path d="M6 8 h18 M6 15 h26" />
        </g>
      ))}
      {/* table */}
      <rect x="72" y="54" width="142" height="44" rx="2" />
      <path d="M72 64 h142 M72 75 h142 M72 86 h142 M110 54 v44 M160 54 v44" />
    </svg>
  );
}

function RemoteDesktop() {
  return (
    <svg {...common}>
      {[20, 140].map((x) => (
        <g key={x}>
          <rect x={x} y="24" width="80" height="54" rx="3" />
          <path d={`M${x + 30} 92 h20 M${x + 40} 78 v14`} />
        </g>
      ))}
      <path d="M100 51 h40" strokeDasharray="3 3" />
      <rect x="112" y="44" width="16" height="13" rx="2" />
      <path d="M115 44 v-4 a5 5 0 0 1 10 0 v4" />
    </svg>
  );
}

function WebSocketLog() {
  return (
    <svg {...common}>
      {/* app → wslog → server */}
      <rect x="14" y="14" width="50" height="26" rx="3" />
      <text x="28" y="30" {...label}>
        app
      </text>
      <rect x="95" y="10" width="50" height="34" rx="3" strokeWidth="1.5" />
      <text x="105" y="30" {...label}>
        wslog
      </text>
      <rect x="176" y="14" width="50" height="26" rx="3" />
      <text x="186" y="30" {...label}>
        server
      </text>
      <path d="M64 24 h31 m-4 -3 l4 3 -4 3 M95 31 h-31 m4 -3 l-4 3 4 3" />
      <path d="M145 24 h31 m-4 -3 l4 3 -4 3 M176 31 h-31 m4 -3 l-4 3 4 3" />
      {/* tap down to the live log */}
      <path d="M120 44 v14" strokeDasharray="2 2" />
      <rect x="40" y="58" width="160" height="52" rx="3" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i} transform={`translate(0 ${68 + i * 11})`}>
          <text x="48" y="2" {...label}>
            {i % 2 === 0 ? "↑" : "↓"}
          </text>
          <path
            d={`M60 0 h${[96, 120, 80, 108][i]}`}
            strokeDasharray={i === 1 ? "3 3" : undefined}
          />
        </g>
      ))}
    </svg>
  );
}

const sketches: Record<string, () => JSX.Element> = {
  wslog: WebSocketLog,
  openvisionsearch: VisualSearch,
  "knowledge-assistant": KnowledgeAssistant,
  apicheck: ApiCheck,
  "pawn-system": PawnSystem,
  "free-remote": RemoteDesktop,
};

export function hasSketch(id: string) {
  return id in sketches;
}

export function ProjectSketch({ id }: { id: string }) {
  const Sketch = sketches[id];
  return Sketch ? <Sketch /> : null;
}
