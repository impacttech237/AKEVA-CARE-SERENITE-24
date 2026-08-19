export default function Logo({ invert = false, compact = false }) {
  if (compact) {
    return (
      <span className="logo-compact">
        <span className="logo-heart" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path
              d="M12 20s-7-4.4-7-9.2C5 7.6 7.2 6 9.4 6c1.3 0 2.2.6 2.6 1.4C12.4 6.6 13.3 6 14.6 6 16.8 6 19 7.6 19 10.8 19 15.6 12 20 12 20Z"
              fill="currentColor"
            />
          </svg>
        </span>
        Akeva
      </span>
    );
  }

  return (
    <span className="logo">
      <svg className="logo-mark" viewBox="0 0 40 40" aria-hidden="true">
        <path
          d="M8.5 23.5C8.5 13.2 20 6.5 20 6.5S31.5 13.2 31.5 23.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <circle cx="20" cy="27" r="3.6" fill="currentColor" />
      </svg>
      <span className="logo-text" style={invert ? { color: "#efe6da" } : undefined}>
        <strong>Akeva Care</strong>
        <span style={invert ? { color: "rgba(239,230,218,.55)" } : undefined}>
          Sérénité 24
        </span>
      </span>
    </span>
  );
}
