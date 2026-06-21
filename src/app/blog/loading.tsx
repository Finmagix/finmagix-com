// Loading state for the blog index (Part 7 — calm, non-flashing loading
// affordance). Plain skeleton cards using design-system surfaces.
export default function BlogLoading() {
  return (
    <>
      <section className="section section--tight blog-hero">
        <div className="wrap">
          <div className="eyebrow">The Finmagix blog</div>
          <h1 className="t-page-title" style={{ marginTop: 16, marginBottom: 16 }}>
            Money, in plain language.
          </h1>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }} aria-hidden="true">
        <div className="wrap">
          <div className="post-grid">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="post-card post-card--skeleton">
                <div className="post-card__media post-card__media--empty" />
                <div className="post-card__body">
                  <span className="skeleton-line skeleton-line--sm" />
                  <span className="skeleton-line skeleton-line--lg" />
                  <span className="skeleton-line" />
                  <span className="skeleton-line skeleton-line--sm" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
