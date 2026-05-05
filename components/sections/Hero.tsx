import Image from 'next/image'

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg-text">NOMAD</div>

      <div className="hero-avatar-wrap">
        <Image
          src="/images/avatar.png"
          className="hero-avatar"
          alt="avatar"
          width={280}
          height={280}
          priority
        />
        {/* ✏️ Edit: X countries · Y days */}
        <div className="hero-avatar-tag">X countries · Y days</div>
      </div>

      <div className="hero-label">✦ &nbsp; GLOBAL NOMAD SPIRIT · 数字游民生活志</div>
      <h1 className="hero-heading">
        {/* ✏️ Edit: Your name */}
        YOUR
        <em>NAME</em>
      </h1>
      <div className="hero-bottom">
        <p className="hero-desc">
          {/* ✏️ Edit: Your bio & tagline */}
          Your one-line bio here.<br />
          Your personal tagline here.
        </p>
        <div className="hero-meta">
          <div className="hero-meta-item">
            {/* ✏️ Edit: Change label & link to your platform */}
            <span className="hero-meta-label">小红书</span>
            <a className="hero-meta-value" href="YOUR_XIAOHONGSHU_URL" target="_blank" rel="noopener noreferrer">YOUR_HANDLE</a>
          </div>
          <div className="hero-meta-item">
            <span className="hero-meta-label">PODCAST</span>
            <a className="hero-meta-value" href="YOUR_PODCAST_URL" target="_blank" rel="noopener noreferrer">YOUR_PODCAST</a>
          </div>
        </div>
      </div>
      <div className="hero-scroll-hint">SCROLL</div>
    </section>
  )
}
