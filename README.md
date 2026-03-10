<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>MusikBot</title>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;900&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
  :root {
    --green: #1DB954;
    --green-dim: rgba(29, 185, 84, 0.15);
    --green-border: rgba(29, 185, 84, 0.3);
    --bg: #080b09;
    --surface: #0f1410;
    --border: rgba(255,255,255,0.07);
    --text: #f0f0f0;
    --muted: #888;
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'DM Sans', sans-serif;
    padding: 40px 20px 60px;
    max-width: 680px;
    margin: 0 auto;
    line-height: 1.6;
  }

  /* HERO */
  .hero {
    padding: 20px 0 48px;
    border-bottom: 1px solid var(--border);
    margin-bottom: 48px;
  }

  .logo-row {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 20px;
  }

  .logo-icon {
    width: 48px;
    height: 48px;
    background: var(--green-dim);
    border: 1px solid var(--green-border);
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .logo-icon svg {
    width: 26px;
    height: 26px;
    fill: var(--green);
  }

  .logo-name {
    font-size: 22px;
    font-weight: 900;
    letter-spacing: -0.5px;
    color: #fff;
  }

  .hero-headline {
    font-size: clamp(32px, 8vw, 52px);
    font-weight: 900;
    letter-spacing: -2px;
    line-height: 1.05;
    margin-bottom: 18px;
    color: #fff;
  }

  .hero-headline span {
    color: var(--green);
  }

  .hero-sub {
    font-size: 15px;
    color: var(--muted);
    max-width: 500px;
    line-height: 1.7;
  }

  /* FEATURES */
  .section-label {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: var(--green);
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .section-label::after {
    content: '';
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, var(--green-border), transparent);
  }

  .features {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-bottom: 48px;
  }

  .feature {
    display: flex;
    gap: 16px;
    padding: 16px;
    border-radius: 10px;
    transition: background 0.15s;
  }

  .feature:hover {
    background: var(--surface);
  }

  .feature-icon {
    width: 32px;
    height: 32px;
    background: var(--green-dim);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    font-size: 15px;
    margin-top: 1px;
  }

  .feature-text strong {
    display: block;
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 3px;
  }

  .feature-text p {
    font-size: 13px;
    color: var(--muted);
    line-height: 1.55;
  }

  /* SOURCES */
  .sources {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-bottom: 48px;
  }

  .source-pill {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 14px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 999px;
    font-size: 13px;
    font-weight: 600;
    color: #ccc;
  }

  .source-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--green);
  }

  /* FREE BANNER */
  .free-banner {
    background: var(--green-dim);
    border: 1px solid var(--green-border);
    border-radius: 12px;
    padding: 20px 24px;
    margin-bottom: 48px;
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .free-banner-icon {
    font-size: 24px;
    flex-shrink: 0;
  }

  .free-banner strong {
    display: block;
    font-size: 15px;
    font-weight: 800;
    color: var(--green);
    margin-bottom: 3px;
  }

  .free-banner p {
    font-size: 13px;
    color: var(--muted);
  }

  /* FOOTER */
  .footer {
    text-align: center;
    font-size: 13px;
    color: var(--muted);
    padding-top: 32px;
    border-top: 1px solid var(--border);
  }

  .footer code {
    font-family: 'DM Mono', monospace;
    background: var(--surface);
    border: 1px solid var(--border);
    padding: 2px 7px;
    border-radius: 5px;
    color: var(--green);
    font-size: 12px;
  }
</style>
</head>
<body>

  <div class="hero">
    <div class="logo-row">
      <div class="logo-icon">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z"/>
        </svg>
      </div>
      <span class="logo-name">MusikBot</span>
    </div>
    <h1 class="hero-headline">Music done<br><span>properly.</span></h1>
    <p class="hero-sub">A high-performance Discord music bot built for servers that actually care about audio quality, stability, and a great user experience.</p>
  </div>

  <div class="section-label">What makes it different</div>

  <div class="features">

    <div class="feature">
      <div class="feature-icon">⚡</div>
      <div class="feature-text">
        <strong>Live Mini-Player</strong>
        <p>A now playing interface that stays in sync — progress, queue changes, and loop toggles reflected automatically without any commands.</p>
      </div>
    </div>

    <div class="feature">
      <div class="feature-icon">🎯</div>
      <div class="feature-text">
        <strong>Fuzzy Autocomplete Everywhere</strong>
        <p>Jump to, move, or remove any track without typing the full title. Autocomplete works across search, queue management, and playlists.</p>
      </div>
    </div>

    <div class="feature">
      <div class="feature-icon">📋</div>
      <div class="feature-text">
        <strong>Powerful Custom Playlists</strong>
        <p>Up to 25 personal playlists, 1,500 tracks each. Import, export, deduplicate, and queue entire discographies in one command.</p>
      </div>
    </div>

    <div class="feature">
      <div class="feature-icon">🤖</div>
      <div class="feature-text">
        <strong>Last.fm Autoplay</strong>
        <p>When the queue runs dry, autoplay kicks in using Last.fm's recommendation engine to keep the vibe going seamlessly.</p>
      </div>
    </div>

    <div class="feature">
      <div class="feature-icon">🏆</div>
      <div class="feature-text">
        <strong>Profiles, Ranks & Leaderboards</strong>
        <p>Every listener builds a profile with stats, top artists, top tracks, and a rank progression from New Listener to Audio Legend.</p>
      </div>
    </div>

    <div class="feature">
      <div class="feature-icon">🎛️</div>
      <div class="feature-text">
        <strong>Pro DJ System</strong>
        <p>Granular role-based permissions, full queue management, and every playback control you'd expect — and a few you wouldn't.</p>
      </div>
    </div>

    <div class="feature">
      <div class="feature-icon">🔒</div>
      <div class="feature-text">
        <strong>True Privacy Controls</strong>
        <p>Set your profile to public or private. Hide yourself from the leaderboard. Your listening history is yours.</p>
      </div>
    </div>

  </div>

  <div class="section-label">Supported Sources</div>

  <div class="sources">
    <div class="source-pill"><span class="source-dot"></span> Spotify</div>
    <div class="source-pill"><span class="source-dot"></span> Apple Music</div>
    <div class="source-pill"><span class="source-dot"></span> SoundCloud</div>
    <div class="source-pill" style="opacity:0.45; border-style: dashed;">✕ No YouTube — by design</div>
  </div>

  <div class="free-banner">
    <div class="free-banner-icon">🎵</div>
    <div>
      <strong>100% Free. No paywalls.</strong>
      <p>No vote-locking, no premium tiers, no nonsense. Every feature is available to every user, always.</p>
    </div>
  </div>

  <div class="footer">
    Add the bot and type <code>/help</code> to explore everything it can do.
  </div>

</body>
</html>
