"""Generate the project cover diagrams in public/experience/covers/ (1200x675 SVG).

Add a cover(...) call for a new project and run: python3 scripts/generate-covers.py
"""
from html import escape
import os

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "public", "experience", "covers")
W, H = 1200, 675
PAPER, INK, MUTED, RULE, ACCENT, BOX, ACCENT_BG = "#F4F1EA", "#1F1D1A", "#6B655C", "#D9D2C3", "#B4532A", "#FFFDF8", "#FBEFE6"
SERIF = "Newsreader, Georgia, 'Times New Roman', serif"
MONO = "'IBM Plex Mono', ui-monospace, Menlo, Consolas, monospace"

def t(x, y, s, size, fill, family, weight=400, anchor="start", italic=False, spacing=0):
    st = ' font-style="italic"' if italic else ""
    ls = f' letter-spacing="{spacing}"' if spacing else ""
    return (f'<text x="{x:.1f}" y="{y:.1f}" font-family="{family}" font-size="{size}" '
            f'font-weight="{weight}" fill="{fill}" text-anchor="{anchor}"{st}{ls}>{escape(s)}</text>')

def cover(slug, fig, kind, title, subtitle, nodes, stack, metric, loop=None):
    left, right = 72, W - 72
    avail = right - left
    for size in (19, 17, 15, 14):
        cap = size * 0.74
        widths = [max(len(l) * size * 0.6, len(c) * cap * 0.6) + 40 for l, c, *_ in nodes]
        gap = (avail - sum(widths)) / max(1, len(nodes) - 1)
        if gap >= 46:
            break
    gap = min(gap, 90)
    total = sum(widths) + gap * (len(nodes) - 1)
    x = left + (avail - total) / 2
    by, bh = 330, 96
    out = [f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}" role="img" aria-label="{escape(title)}: {escape(subtitle)}">',
           '<defs><pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#1F1D1A" fill-opacity="0.09"/></pattern>',
           f'<marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="{INK}"/></marker>',
           f'<marker id="arrowA" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="{ACCENT}"/></marker></defs>',
           f'<rect width="{W}" height="{H}" fill="{PAPER}"/>',
           f'<rect width="{W}" height="{H}" fill="url(#dots)"/>',
           f'<rect x="24" y="24" width="{W-48}" height="{H-48}" fill="none" stroke="{INK}" stroke-opacity="0.18"/>',
           t(left, 86, f"FIG. {fig:02d}", 15, MUTED, MONO, 500, spacing=2),
           t(right, 86, kind.upper(), 15, MUTED, MONO, 500, "end", spacing=2),
           t(left, 172, title, 62, INK, SERIF, 600, spacing=-1),
           t(left, 218, subtitle, 26, MUTED, SERIF, 400, italic=True)]
    centers = []
    for i, (label, caption, *flags) in enumerate(nodes):
        w = widths[i]
        acc = "accent" in flags
        out.append(f'<rect x="{x+4:.1f}" y="{by+4}" width="{w:.1f}" height="{bh}" rx="6" fill="{RULE}" fill-opacity="0.6"/>')
        out.append(f'<rect x="{x:.1f}" y="{by}" width="{w:.1f}" height="{bh}" rx="6" fill="{ACCENT_BG if acc else BOX}" stroke="{ACCENT if acc else INK}" stroke-width="{2 if acc else 1.4}"/>')
        out.append(t(x + w / 2, by + 42, label, size, ACCENT if acc else INK, MONO, 600, "middle"))
        out.append(t(x + w / 2, by + 70, caption, round(cap, 1), MUTED, MONO, 400, "middle"))
        centers.append((x, x + w))
        if i < len(nodes) - 1:
            x1, x2 = x + w + 8, x + w + gap - 10
            out.append(f'<line x1="{x1:.1f}" y1="{by+bh/2}" x2="{x2:.1f}" y2="{by+bh/2}" stroke="{INK}" stroke-width="1.4" marker-end="url(#arrow)"/>')
        x += w + gap
    if loop:
        a, b, label = loop
        ax = (centers[a][0] + centers[a][1]) / 2
        bx = (centers[b][0] + centers[b][1]) / 2
        y0 = by + bh + 8
        out.append(f'<path d="M{ax:.1f} {y0} C{ax:.1f} {y0+70}, {bx:.1f} {y0+70}, {bx:.1f} {y0+6}" fill="none" stroke="{ACCENT}" stroke-width="1.6" stroke-dasharray="5 5" marker-end="url(#arrowA)"/>')
        out.append(t((ax + bx) / 2, y0 + 78, label, 15, ACCENT, MONO, 500, "middle"))
    out.append(f'<line x1="{left}" y1="560" x2="{right}" y2="560" stroke="{INK}" stroke-opacity="0.25"/>')
    out.append(t(left, 604, stack, 17, MUTED, MONO, 400))
    out.append(t(right, 604, metric, 17, ACCENT, MONO, 600, "end"))
    out.append("</svg>")
    with open(os.path.join(OUT, f"{slug}.svg"), "w") as f:
        f.write("\n".join(out) + "\n")

cover("openvisionsearch", 1, "visual search · open source", "OpenVisionSearch", "Find products by photo, by words, or both.",
      [("image / text", "url · upload · s3"), ("OpenCLIP", "padded framing", "accent"), ("vector", "one shared space"),
       ("Qdrant", "nearest neighbours"), ("matches", "ranked by score")],
      "python · fastapi · open_clip · qdrant · docker", "recall@1  75% → 90%")

cover("knowledge-assistant", 2, "document q&a · open source", "Knowledge Assistant", "Answers from your own files, with the source attached.",
      [("files / SQL", "pdf · docx · xlsx · db"), ("parse + OCR", "khmer + english"), ("chunk + embed", "bge-m3 · local"),
       ("hybrid search", "pgvector + full-text", "accent"), ("answer", "cited · streamed")],
      "fastapi · postgres · pgvector · react · ollama", "no data leaves your server")

cover("apicheck", 3, "security cli · open source", "apicheck", "Catch the boring API holes before you ship.",
      [("OpenAPI spec", "+ base url"), ("discover", "every endpoint"), ("11 checks", "6 OWASP categories", "accent"),
       ("report", "terminal · json · sarif"), ("CI gate", "exit 1 on fail")],
      "typescript · node · openapi · owasp api top 10", "non-destructive by design")

cover("free-remote", 4, "remote desktop · rust", "free-remote", "Remote control that keeps asking permission.",
      [("viewer", "egui window"), ("Noise XX", "encrypted tcp"), ("permission check", "on every message", "accent"),
       ("host", "capture · input"), ("human", "approves or revokes")],
      "rust · noise · tile diffing · linux / windows / macos", "idle: 31 → 5.9 Mbit/s")

cover("shiftai", 5, "fine-tuning studio · open source", "ShiftAI", "Train a small model on your data, then check its homework.",
      [("your data", "docs · sheets · sql"), ("teacher LLM", "q&a + judge filter"), ("LoRA train", "peft · trl", "accent"),
       ("auto-eval", "quiz on the source"), ("export", "gguf → ollama")],
      "fastapi · transformers · peft · redis · react", "retrains on its own misses", loop=(3, 2, "retrain on failed questions"))

cover("hr-saas", 6, "hr system · nestjs", "HR Management System", "Users, roles and permissions done properly.",
      [("Angular app", "frontend"), ("NestJS API", "swagger docs", "accent"), ("guards", "jwt + rbac"),
       ("Sequelize", "typed models"), ("PostgreSQL", "hr_management")],
      "nestjs · typescript · postgres · sequelize · angular", "access + refresh tokens")

cover("localnet", 7, "developer cli · pypi", "localnet-control", "Share localhost with your LAN in seconds.",
      [("localhost:3000", "your dev app"), ("localnet share", "token · allow / deny", "accent"), ("LAN url + QR", "no internet needed"),
       ("phones · team", "same network")],
      "python · tcp proxy · cloudflare tunnel (optional)", "pip install localnet-control")

cover("mimic", 8, "mock api tool · open source", "Mimic", "Build the frontend before the backend exists.",
      [("Vue 3 dashboard", "define endpoints"), ("FastAPI service", "mock engine", "accent"), ("mock endpoints", "status · delay · body"),
       ("your frontend", "real http calls")],
      "python · fastapi · vue 3 · typescript · docker", "docker compose up")

cover("pawn-system", 9, "production · finance", "Loan & Pawn System", "Daily financial operations across branches.",
      [("branch staff", "5+ branches"), ("Laravel API", "50+ endpoints", "accent"), ("loan · repay · penalty", "one set of rules"),
       ("MySQL", "transactional writes"), ("Redis queue", "batch interest")],
      "laravel · php · mysql · redis queues", "−60% response time")

cover("school-system", 10, "production · education", "School Management", "Enrollment to report cards for two schools.",
      [("students · staff", "5,000+ · 200+"), ("Laravel app", "role-based access", "accent"), ("enrol · grade · attend", "scheduling"),
       ("MySQL", "50k+ records / month")],
      "laravel · php · mysql · database design", "tuned for exam season")

cover("hotel-management", 11, "web app · bookings", "Hotel Management", "No more double-booked rooms.",
      [("check-in / out", "requested dates"), ("availability", "overlap check", "accent"), ("reservation", "guest + room"),
       ("MySQL", "normalised schema")],
      "php · mysql · database design", "50 rooms · 1,000+ bookings / yr")

cover("banking-system", 12, "web app · core banking", "Mini Core Banking", "Deposits, withdrawals and transfers that add up.",
      [("CIF", "customer file"), ("accounts", "auto numbering"), ("transactions", "deposit · withdraw · transfer", "accent"),
       ("ledger", "balance checks")],
      "c# · .net · database design", "500+ test accounts")
print(sorted(os.listdir(OUT)))
