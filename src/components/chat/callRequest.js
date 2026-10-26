// Shared validation for chatbot call requests (client + server).
export const GRADES = ['Baby Crèche (45 days+)', 'Pre-Nursery / Toddler', 'Nursery', 'Kindergarten 1', 'Kindergarten 2', 'Daycare / Extended Care', 'After-School & Enrichment'];
export const MIN_MINUTES = 8 * 60; // 08:00 AM
export const MAX_MINUTES = 20 * 60; // 08:00 PM

export function fmtMinutes(t) {
  const h = Math.floor(t / 60), m = t % 60;
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${String(h12).padStart(2, '0')}:${String(m).padStart(2, '0')} ${h < 12 ? 'AM' : 'PM'}`;
}

// Every 30 minutes from 08:00 AM to 08:00 PM.
export const TIME_SLOTS = Array.from({ length: (MAX_MINUTES - MIN_MINUTES) / 30 + 1 }, (_, i) => fmtMinutes(MIN_MINUTES + i * 30));

// Parses "hh:mm AM/PM" or 24h "HH:MM" to minutes since midnight, or null.
export function parseTime(v) {
  const s = String(v || '').trim().toUpperCase();
  let m = s.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/);
  if (m) {
    let h = +m[1]; const min = +m[2];
    if (h < 1 || h > 12 || min > 59) return null;
    if (h === 12) h = 0;
    if (m[3] === 'PM') h += 12;
    return h * 60 + min;
  }
  m = s.match(/^(\d{1,2}):(\d{2})$/);
  if (m && +m[1] < 24 && +m[2] < 60) return +m[1] * 60 + +m[2];
  return null;
}

// Current date/time in India (Asia/Kolkata, UTC+5:30), independent of device zone.
function istNow() { return new Date(Date.now() + 330 * 60000); }
export function nowMinutesIST() { const d = istNow(); return d.getUTCHours() * 60 + d.getUTCMinutes(); }

// Returns an error string, or null if the time is allowed for the date.
export function timeError(time, date) {
  const t = parseTime(time);
  if (t === null) return 'Invalid time';
  if (t < MIN_MINUTES || t > MAX_MINUTES) return 'Please choose a time between 08:00 AM and 08:00 PM.';
  if (date === todayISO() && t <= nowMinutesIST()) return 'That time has already passed today. Please choose a later time or another date.';
  return null;
}

export function availableSlots(date) {
  return TIME_SLOTS.filter((s) => !timeError(s, date));
}

export function normalizePhone(raw) {
  const s = String(raw || '').replace(/[\s\-().]/g, '');
  if (/^(\+?91|0)?[6-9]\d{9}$/.test(s)) return '+91' + s.slice(-10); // Indian mobile
  if (/^\+[1-9]\d{7,14}$/.test(s)) return s; // international E.164
  return null;
}

export function todayISO() {
  return istNow().toISOString().slice(0, 10);
}

export function validateDate(v) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(v || '') || isNaN(Date.parse(v))) return false;
  const max = new Date(); max.setDate(max.getDate() + 90);
  // allow 1-day slack for timezone differences between client and server
  const min = new Date(); min.setDate(min.getDate() - 1);
  const d = new Date(v + 'T12:00:00');
  return d >= new Date(min.toISOString().slice(0, 10) + 'T00:00:00') && d <= max;
}

export function validateRequest(b) {
  const phone = normalizePhone(b?.phone);
  const grade = String(b?.grade || '').trim().slice(0, 80);
  if (!phone) return { error: 'Invalid phone number' };
  if (!grade) return { error: 'Grade is required' };
  if (!validateDate(b?.date)) return { error: 'Invalid date' };
  const terr = timeError(b?.time, b.date);
  if (terr) return { error: terr };
  return { data: { phone, grade, date: b.date, time: fmtMinutes(parseTime(b.time)) } };
}
