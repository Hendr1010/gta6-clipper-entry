# GTA 6 Clip — make.fun bounty gta6-clipper-01

[![gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/Hendr1010/gta6-clipper-entry/rank.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/Hendr1010/gta6-clipper-entry/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A short vertical clip of Grand Theft Auto VI, made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

## The clip

The moment: the opening of Rockstar's official GTA VI Trailer 2 — a morning in Leonida. An aerial over the coast, Jason fixing the roof, driving through flooded streets, and a plane over the Vice City highway. One continuous stretch (0:05–0:40 of the trailer), cut vertical 1080x1920 with a blur fill so nothing falls off the sides, hook text "GTA 6 IS FINALLY HERE" in the first seconds, then the make.fun pitch on screen for the last 8 seconds: "Make clips like this with AI and earn money on make.fun — make.fun/bounty/gta6-clipper-01". 35 seconds, original trailer audio, published as a public YouTube Short.

The video itself is the entry: places go by YouTube views, the most first, and the top 20 share $500.

## The video

`VIDEO.json` at the repository root holds the video's address. The video is public on YouTube, published after the bounty opened and before its deadline, and its description carries this line word for word:

    Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

plus the play code `makefun-ripple-ivory-kitten`. It stays public until the results are out.

## The program

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from the repository root to the output directory, where the gate reads it. That is all it has to do.

Run it locally:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.

## License

MIT — see `LICENSE`.
