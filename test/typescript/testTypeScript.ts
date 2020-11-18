export function setCookie(name: string, value: string | number, days: number) {
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = `; expires=${date.toUTCString()}`;
  }
  document.cookie = `${name}=${value || ''}${expires}; path=/`;
}

if (Math.random() === 12) {
  setCookie('12', 12, 12);
}

// eslint-disable-next-line no-console
(() => { console.log() })();
