// Shared validation for chatbot call requests (client + server).
export const GRADES = ['Baby Crèche (45 days+)', 'Pre-Nursery / Toddler', 'Nursery', 'Kindergarten 1', 'Kindergarten 2', 'Daycare / Extended Care', 'After-School & Enrichment'];
export const TIME_SLOTS = ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'];

export function normalizePhone(raw) {
  const s = String(raw || '').replace(/[\s\-().]/g, '');
  if (/^(\+?91|0)?[6-9]\d{9}$/.test(s)) return '+91' + s.slice(-10); // Indian mobile
  if (/^\+[1-9]\d{7,14}$/.test(s)) return s; // international E.164
  return null;
}

export function todayISO() {
  const d = new Date();
  return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
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
  if (!TIME_SLOTS.includes(b?.time)) return { error: 'Invalid time slot' };
  return { data: { phone, grade, date: b.date, time: b.time } };
}
