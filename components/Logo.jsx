export default function Logo({ invert = false }) {
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
