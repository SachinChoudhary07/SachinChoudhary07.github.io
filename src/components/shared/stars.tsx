export function Stars({ rating, className }: { rating: number; className?: string }) {
  return (
    <span className={className} role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          aria-hidden
          className={`inline-block size-4 ${i < rating ? "text-amber-500" : "text-border-strong"}`}
        >
          <path
            fill="currentColor"
            d="M10 1.5l2.6 5.5 6 .8-4.4 4.1 1.1 5.9L10 15l-5.3 2.8 1.1-5.9L1.4 7.8l6-.8L10 1.5z"
          />
        </svg>
      ))}
    </span>
  );
}
