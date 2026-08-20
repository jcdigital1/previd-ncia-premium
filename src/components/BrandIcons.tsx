export function WhatsAppIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path
        fill="#25D366"
        d="M16 3C8.83 3 3 8.83 3 16c0 2.29.6 4.44 1.65 6.3L3 29l6.9-1.6A12.9 12.9 0 0 0 16 29c7.17 0 13-5.83 13-13S23.17 3 16 3Z"
      />
      <path
        fill="#fff"
        d="M12.2 9.6c-.27-.6-.55-.6-.8-.61h-.68c-.24 0-.62.09-.95.44-.33.36-1.24 1.2-1.24 2.94s1.27 3.41 1.45 3.65c.18.24 2.46 3.9 6.06 5.31 3 1.17 3.6.94 4.25.88.65-.06 2.1-.85 2.4-1.67.29-.82.29-1.53.2-1.68-.08-.15-.32-.24-.68-.41-.36-.18-2.1-1.04-2.43-1.15-.33-.12-.57-.18-.8.17-.25.36-.93 1.15-1.13 1.39-.21.24-.42.27-.78.09-.36-.18-1.5-.55-2.87-1.76-1.06-.94-1.77-2.1-1.98-2.45-.2-.36-.02-.55.16-.73.16-.16.36-.42.54-.63.18-.21.24-.36.36-.6.12-.24.06-.45-.03-.63-.09-.18-.79-1.93-1.05-2.55Z"
      />
    </svg>
  );
}

export function InstagramIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="ig-grad" cx="28%" cy="102%" r="130%">
          <stop offset="0%" stopColor="#FFDD55" />
          <stop offset="25%" stopColor="#FFB13D" />
          <stop offset="26%" stopColor="#FF543E" />
          <stop offset="60%" stopColor="#C837AB" />
          <stop offset="100%" stopColor="#3771C8" />
        </radialGradient>
      </defs>
      <rect x="2" y="2" width="28" height="28" rx="8" fill="url(#ig-grad)" />
      <rect
        x="8"
        y="8"
        width="16"
        height="16"
        rx="5"
        fill="none"
        stroke="#fff"
        strokeWidth="1.9"
      />
      <circle cx="16" cy="16" r="4" fill="none" stroke="#fff" strokeWidth="1.9" />
      <circle cx="21.6" cy="10.4" r="1.3" fill="#fff" />
    </svg>
  );
}

export function FacebookIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="14" fill="#1877F2" />
      <path
        fill="#fff"
        d="M20.2 17.4l.6-3.9h-3.7v-2.5c0-1.06.52-2.1 2.2-2.1h1.7V5.6s-1.55-.27-3.03-.27c-3.09 0-5.1 1.87-5.1 5.26v2.98H9.4v3.9h3.47V29a13.9 13.9 0 0 0 4.26 0V17.4h3.07Z"
      />
    </svg>
  );
}

export function MapPinIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path
        fill="#EA4335"
        d="M16 2.5c-5.1 0-9.2 4.1-9.2 9.2 0 6.7 8.2 17 8.55 17.44a.83.83 0 0 0 1.3 0C17 28.7 25.2 18.4 25.2 11.7c0-5.1-4.1-9.2-9.2-9.2Z"
      />
      <circle cx="16" cy="11.7" r="3.4" fill="#fff" />
    </svg>
  );
}
