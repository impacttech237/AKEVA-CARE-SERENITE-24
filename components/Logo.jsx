export default function Logo({ compact = false }) {
  return (
    <span className={compact ? "logo-compact" : "logo"}>
      <img
        className={compact ? "logo-img logo-img--nav" : "logo-img logo-img--foot"}
        src="/logo-akeva.png"
        alt="Akeva Care Sérénité 24"
      />
    </span>
  );
}
