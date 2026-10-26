/**
 * My School ITALY – website chatbot call requests -> Google Sheets (free).
 * Paste into Extensions > Apps Script of your Google Sheet and deploy as a Web app.
 * Optional: set SHARED_SECRET to the same value as GOOGLE_SHEETS_SECRET in Vercel.
 */
var SHEET_NAME = 'Admissions';
var SHARED_SECRET = ''; // e.g. 'a-long-random-string'; leave empty to disable
var HEADERS = ['Submitted At (IST)', 'Name', 'Phone', 'Grade / Programme', 'Preferred Date', 'Preferred Time', 'Page', 'Status'];

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    var data = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    if (SHARED_SECRET && data.secret !== SHARED_SECRET) return json_({ ok: false, error: 'unauthorized' });
    if (!data.phone) return json_({ ok: false, error: 'missing phone' });

    lock.waitLock(10000);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
      sheet.setFrozenRows(1);
    }
    var submitted = Utilities.formatDate(data.submittedAt ? new Date(data.submittedAt) : new Date(), 'Asia/Kolkata', 'yyyy-MM-dd HH:mm:ss');
    // Prefix with ' so Sheets keeps values as text (phone "+91…", dates).
    sheet.appendRow([submitted, clean_(data.name), "'" + clean_(data.phone), clean_(data.grade),
      "'" + clean_(data.date), clean_(data.time), clean_(data.page), 'New']);
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    try { lock.releaseLock(); } catch (x) {}
  }
}

function doGet() { return json_({ ok: true, service: 'admissions-sheet' }); }

function clean_(v) {
  // Prevent formula injection and trim length.
  var s = String(v == null ? '' : v).slice(0, 200);
  return /^[=+\-@]/.test(s) && s.charAt(0) !== '+' ? "'" + s : s;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
