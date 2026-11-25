// Invent a Word We Need — the entry is one coined word plus one definition line.
//
// Candidates weighed in this session (all checked against the live web so the
// word is genuinely new, not a repurposed term):
//   - planrelief: REJECTED — "plan-relief" is already a French military
//     scale-model term and a SaaS brand name, so it is not a fresh coinage.
//   - afterlaugh: REJECTED — already in use for the smile just after a laugh
//     (photography, comedy-show titles), so the gap it names is taken.
//   - goodbyeloop: kept as backup — saying goodbye five times in the doorway.
//   - sendregret: kept as backup — the cold second after hitting send.
//   - doorblank: CHOSEN — nobody has a word for the doorway effect, the
//     blank that wipes your reason for entering a room the moment you step
//     through the door. Everyone has felt it, no dictionary names it, and
//     door + blank is sayable, spellable and instantly memorable.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "doorblank (n.) — the blank that hits the moment you walk through a doorway and forget why you came.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Self-check: the gate needs UTF-8 text of 1-140 characters, one line,
// not only whitespace. Fail loudly rather than writing an entry that
// could never be judged.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 140 || ENTRY.includes("\n") || !ENTRY.trim()) {
  throw new Error(`entry fails the gate (${chars} characters)`);
}
// The entry must actually be word + definition, not just a bare word.
if (!ENTRY.startsWith("doorblank ") || !ENTRY.includes(" — ")) {
  throw new Error("entry is missing the coined word or its definition");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
