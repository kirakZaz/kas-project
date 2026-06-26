# KAS — A Gothic 3D Platformer

An interactive showcase website for **KAS**, a gothic 3D platformer prototype developed as part of **RGP204: Rapid Game Prototype** at Torrens University Australia (Trimester 3, 2026).

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

The development server will start at `http://localhost:5173`.

## About the Game

KAS is a 3D platformer set in a dark gothic world. Players control Kas — a bird-like creature navigating through ancient architecture, deadly traps, and mysterious turrets. The game features three core mechanics:

- **Double Jump** — Precise platforming through gothic spires
- **Glide** — Spread feathered wings to soar across chasms
- **I-Frames** — Activate invincibility shields to survive blade traps

Every asset in the game — character models, textures, environment, sound effects — was created from scratch by the team over a 4-week rapid prototyping sprint cycle.

## Playing the Game

Click the **"Play Now"** button on the website to launch the WebGL build directly in your browser. The game is embedded via Unity WebGL and requires no installation.

## Project Structure

```
public/
  assets/          # All game art, screenshots, videos, audio
  game/            # Unity WebGL build (index.html, Build/, TemplateData/)
src/
  components/      # React components (organisms, atoms)
  context/         # Shared state (ImageViewer)
  hooks/           # Custom hooks (scroll animations, tilt)
  theme/           # MUI dark gothic theme
```

## Tech Stack

- **Game Engine:** Unity 6 (C#)
- **Website:** React 19, TypeScript, Vite, Material UI
- **Animations:** Framer Motion, React Intersection Observer
- **Deployment:** GitHub Pages

## Team

| Name | Role |
|------|------|
| **Kira Zakirov** | Lead Developer — Game mechanics, Unity programming, level design, UI, WebGL build, website |
| **Sarah Assiri** | 3D Artist & Animator — Character modeling, rigging, animation, texturing, VFX |
| **Alexander Ramic** | Game Designer & Sound Designer — Mechanics documents, concept art, enemy design, sound effects |

## License

This project was created for academic purposes as part of RGP204 at Torrens University Australia.
