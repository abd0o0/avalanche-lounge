let lastScrollAt = 0;

export function markScroll() {
  lastScrollAt = Date.now();
}

export function isRecentScroll(ms = 800) {
  return Date.now() - lastScrollAt < ms;
}

export function timeSinceScroll() {
  return Date.now() - lastScrollAt;
}
