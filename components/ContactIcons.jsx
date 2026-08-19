function Icon({ children }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function IconPhone() {
  return (
    <Icon>
      <path d="M8.2 4.5h2.2l1.1 3-1.6.9a9 9 0 0 0 4.7 4.7l.9-1.6 3 1.1v2.2c0 .8-.7 1.5-1.5 1.5-6.6 0-10-3.4-10-10 0-.8.7-1.5 1.5-1.5Z" />
    </Icon>
  );
}

export function IconPin() {
  return (
    <Icon>
      <path d="M12 20.5s5.6-5.1 5.6-9.3a5.6 5.6 0 0 0-11.2 0c0 4.2 5.6 9.3 5.6 9.3Z" />
      <circle cx="12" cy="11" r="1.7" />
    </Icon>
  );
}

export function IconMail() {
  return (
    <Icon>
      <rect x="3.6" y="6.2" width="16.8" height="11.6" rx="2" />
      <path d="m4.6 8.2 7.4 5 7.4-5" />
    </Icon>
  );
}

export function IconWhatsApp() {
  return (
    <Icon>
      <path d="M12 4.4a7.4 7.4 0 0 0-6.3 11.2L4.6 19.4l3.9-1.1A7.4 7.4 0 1 0 12 4.4Z" />
      <path d="M9 11.1h.01M12 11.1h.01M15 11.1h.01" />
    </Icon>
  );
}

export function IconClip() {
  return (
    <Icon>
      <path d="M8.2 12.4 15 5.6a2.8 2.8 0 1 1 4 4L9.6 19a4.2 4.2 0 0 1-6-6L14.4 2.2" />
    </Icon>
  );
}
