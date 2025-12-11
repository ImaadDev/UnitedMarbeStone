// Send custom event to Google Tag Manager
export function gtmEvent(eventName, data = {}) {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      ...data,
    });
  }
}
