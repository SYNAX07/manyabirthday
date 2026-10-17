'use client'

import { useState } from 'react'
import { Heart, Sparkles } from 'lucide-react'

const config = {
  name: 'Manya',
  letter: `Happy Birthday, Manya ♡\n\nI hope your special day brings you a hundred little reasons to smile, moments that make your heart feel full, and the kind of happiness that stays long after the day is over.\n\nMay this new chapter of your life be filled with beautiful surprises, lovely memories, endless laughter, and people who remind you how special you truly are.\n\nNever stop being your wonderful self. You deserve all the soft, beautiful, and magical things life has to offer.\n\nToday is your day, Manya. I hope it feels as lovely as you are. 🎀`,
}

const littleThings = ['your lovely smile ♡', 'your beautiful energy', 'your kind heart', 'your little quirks', 'the happiness you bring', 'simply being Manya']

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>
}

function Bouquet() {
  return <div className="bouquet" aria-label="A delicate illustrated bouquet" role="img"><div className="stem stem-one" /><div className="stem stem-two" /><div className="stem stem-three" /><div className="flower flower-one"><i /><i /><i /><i /><b /></div><div className="flower flower-two"><i /><i /><i /><i /><b /></div><div className="flower flower-three"><i /><i /><i /><i /><b /></div><div className="ribbon">M</div></div>
}

function Cake({ blown }: { blown: boolean }) {
  return <div className={`cake ${blown ? 'blown' : ''}`} aria-label="Pastel birthday cake illustration" role="img"><div className="candle candle-one"><span /></div><div className="candle candle-two"><span /></div><div className="candle candle-three"><span /></div><div className="icing"><i /><i /><i /></div><div className="cake-layer cake-top"><span>♡</span></div><div className="cake-layer cake-bottom"><span>✦</span><span>♡</span><span>✦</span></div><div className="cake-plate" /></div>
}

export default function Page() {
  const [opened, setOpened] = useState(false)
  const [candles, setCandles] = useState(false)
  const [secret, setSecret] = useState(false)
  const [hug, setHug] = useState(false)

  return <main className="birthday-site">
    <div className="floating-details" aria-hidden="true"><span>♡</span><span>✦</span><span>✿</span><span>♡</span><span>✧</span></div>
    {!opened ? <section className="opening-screen"><div className="opening-copy"><p className="script-label">a little something for Manya ♡</p><h1>Someone as lovely as you deserves a little <em>magic.</em></h1><button className="primary-button" onClick={() => setOpened(true)}>open your surprise 🎀</button></div><div className="opening-art"><div className="bow bow-large"><i /><i /><b /></div><Bouquet /><p>wrapped with love, just for you</p></div></section> : <div className="experience">
      <header className="topbar"><span className="monogram">M<span>♡</span></span><span className="topbar-note">a little birthday story</span><span className="topbar-mark">for Manya, with love</span></header>
      <section className="hero section-shell"><Reveal className="hero-copy"><p className="eyebrow">a special day for a special girl</p><h2>Happy Birthday,<br /><em>Manya ♡</em></h2><p className="hero-intro">today, the world celebrates<br />a little more magic.</p></Reveal><Reveal className="hero-art"><Bouquet /><div className="hero-star">✦</div><div className="heart-float">♡</div></Reveal><a className="scroll-cue" href="#letter">scroll to wander <span>↓</span></a></section>
      <Reveal><section id="letter" className="letter-section section-shell"><div className="letter-paper"><span className="paper-flower">✿</span><p className="eyebrow">from my heart to yours</p><h2>a little letter<br /><em>for Manya</em></h2><div className="letter-copy">{config.letter.split('\n\n').map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><p className="signature">a little birthday wish, made just for you ♡</p></div></section></Reveal>
      <Reveal><section className="things section-shell"><div className="center-heading"><p className="eyebrow">the little details</p><h2>little things that<br /><em>make Manya special</em></h2></div><div className="things-grid">{littleThings.map((thing, i) => <div className="thing-card" key={thing}><span>0{i + 1}</span><Heart size={18} strokeWidth={1.2} /><p>{thing}</p></div>)}</div></section></Reveal>
      <Reveal><section className="wish-section section-shell"><div className="center-heading"><p className="eyebrow">a little magic</p><h2>make a wish, Manya <span>✨</span></h2><p>close your eyes, make it count.</p></div><Cake blown={candles} />{candles ? <p className="wish-message">May every little wish in your heart find its way to you, Manya. ♡</p> : <button className="outline-button" onClick={() => setCandles(true)}>blow the candles ♡</button>}</section></Reveal>
      <Reveal><section className="secret-section section-shell"><div className={`secret-envelope ${secret ? 'is-open' : ''}`}><div className="secret-flap" /><div className="secret-paper">Manya, there&apos;s one more little surprise...</div><Heart size={22} fill="currentColor" /></div>{secret ? <div className="secret-message"><p>Just a little reminder that you deserve happiness, kindness, love, and all the beautiful things you sometimes forget you deserve. Keep smiling, Manya. The world needs more of your kind of magic. ♡</p></div> : <button className="outline-button" onClick={() => setSecret(true)}>open your secret note</button>}</section></Reveal>
      <Reveal><section className="closing section-shell"><div className="closing-bow bow"><i /><i /><b /></div><p className="eyebrow">and finally...</p><h2>May Your Year Be<br /><em>As Beautiful As You, Manya ♡</em></h2><p>more laughter, more happiness, more unforgettable memories,<br />and a thousand little reasons to smile.</p><button className="primary-button" onClick={() => setHug(true)}><Heart size={16} fill="currentColor" /> a little virtual hug for you 🎀</button>{hug && <div className="hug-message"><div className="big-heart">♥</div><p>Sending the biggest virtual hug to Manya.<br />Happy Birthday, pretty girl! ♡</p></div>}</section></Reveal>
      <footer>made with ♡, exclusively for Manya</footer>
    </div>}
  </main>
}
