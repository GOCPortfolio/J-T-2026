/**
 * RSVP receiver for the wedding invitation.
 * Paste into Extensions > Apps Script of a Google Sheet, then Deploy > New deployment
 * > Web app > Execute as: Me, Who has access: Anyone. Copy the Web app URL into
 * CONFIG.rsvp.endpoint in script.js. After ANY change here, deploy a NEW VERSION.
 */
var SHEET_NAME = 'RSVPs';
var HEADERS = ['Received', 'Name', 'Phone', 'Attending', 'Guests', 'Message', 'Invited as'];

function clean(v) {
  v = (v == null ? '' : String(v)).slice(0, 1000);
  return /^[=+\-@\t\r]/.test(v) ? "'" + v : v;   // stops spreadsheet formula injection
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000);
    var d = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sh = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
    if (sh.getLastRow() === 0) { sh.appendRow(HEADERS); sh.setFrozenRows(1); }
    var row = sh.getLastRow() + 1;
    sh.getRange(row, 1, 1, HEADERS.length).setNumberFormat('@');   // text format keeps leading zeros
    sh.getRange(row, 1, 1, HEADERS.length).setValues([[
      new Date().toISOString(), clean(d.name), clean(d.phone), clean(d.attending),
      clean(d.guests), clean(d.message), clean(d.invitedAs)
    ]]);
    return ContentService.createTextOutput('ok');
  } catch (err) {
    return ContentService.createTextOutput('error');
  } finally {
    try { lock.releaseLock(); } catch (x) {}
  }
}

function doGet() { return ContentService.createTextOutput('RSVP endpoint is live'); }
