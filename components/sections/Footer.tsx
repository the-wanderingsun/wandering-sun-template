export default function Footer() {
  return (
    <footer id="footer">
      <div>
        <div className="footer-tagline">
          STAY<em>WILD.</em>
        </div>
        <div className="footer-contacts">
          <div className="footer-contact-item">
            {/* ✏️ Edit: your platform & link */}
            <span className="footer-contact-label">小红书</span>
            <a href="YOUR_XIAOHONGSHU_URL" target="_blank" rel="noopener noreferrer" className="footer-contact-value">YOUR_HANDLE</a>
          </div>
          <div className="footer-contact-item">
            <span className="footer-contact-label">PODCAST</span>
            <a href="YOUR_PODCAST_URL" target="_blank" rel="noopener noreferrer" className="footer-contact-value">YOUR_PODCAST</a>
          </div>
          <div className="footer-contact-item">
            <span className="footer-contact-label">TELEGRAM</span>
            <a href="YOUR_TELEGRAM_URL" className="footer-contact-value">@YOUR_HANDLE</a>
          </div>
        </div>
      </div>
      <div className="footer-right">
        <p className="footer-quote">
          {/* ✏️ Edit: your tagline */}
          Your tagline line one.<br />
          Your tagline line two.
        </p>
        <div className="footer-links">
          <a href="#">INSTAGRAM</a>
          <a href="#">NEWSLETTER</a>
          <a href="#">RSS</a>
        </div>
        {/* ✏️ Edit: your name */}
        <p className="footer-copy">© 2026 YOUR NAME · VOYAGE EVERYWHERE</p>
      </div>
    </footer>
  )
}
