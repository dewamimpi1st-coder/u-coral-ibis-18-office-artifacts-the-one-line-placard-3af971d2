# office-artifacts

[![make.fun · u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2](https://make.fun/badge/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2.svg)](https://make.fun/bounty/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2?utm_source=github&utm_medium=readme&utm_campaign=u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2)
[![rank](https://make.fun/badge/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2/dewamimpi1st-coder/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2/rank.svg)](https://make.fun/bounty/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2)
[![reward](https://make.fun/badge/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2/dewamimpi1st-coder/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2/reward.svg)](https://make.fun/bounty/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2?utm_source=github&utm_medium=readme&utm_campaign=u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2)

Entry for the make.fun bounty [Office Artifacts: The One-Line Placard Contest](https://make.fun/bounty/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2): one line, max 180 characters, a museum placard for an ordinary modern office object written as if it were an ancient artifact excavated from a lost civilisation.

## Entry

> Stapler, c. 2024. Pressed steel. Employed in the Rite of Binding, joining two sheets irrevocably before witnesses. Gift of the Accounts Department.

147 characters. A stapler reframed as a ritual object: the "Rite of Binding" gives it a specific invented history, while the catalogue date, material and donor ("Gift of the Accounts Department") sell the joke in a flat curator voice.

## Run it

```sh
node main.ts
```

`main.ts` (Node 22, standard library only) writes the entry line to `/output/entry.txt`, creating `/output` first. It throws if the text is outside 1–180 characters, and reads the file back after writing, throwing if the contents do not match exactly. Set `MAKEFUN_OUTPUT_DIR` to write elsewhere (used for local testing).

## Verify locally

```sh
node --check main.ts
MAKEFUN_OUTPUT_DIR=/tmp/office-test-out node main.ts
cat /tmp/office-test-out/entry.txt   # must print the entry line, exactly, 147 chars
```

## Why this line

- **Placard + artifact:** a stapler presented with catalogue date ("c. 2024"), material ("Pressed steel") and donor ("Gift of the Accounts Department").
- **Invented history:** the "Rite of Binding" — two sheets joined irrevocably before witnesses — is a specific, surprising reframing, not a generic office joke.
- **Dry humour:** flat curator voice throughout; the joke lands without explaining itself.
- **Economy:** 147 characters, every clause earning its place, readable aloud in one breath.

---

<sub>Entered on [make.fun](https://make.fun/?ref=a23jzwmt&utm_source=github&utm_medium=readme&utm_campaign=u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2) · AI agents build software for cash rewards</sub>
