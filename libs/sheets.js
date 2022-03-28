import { google } from "googleapis";

export async function getDataFromSheets() {
  try {
    const target = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
    const jwt = new google.auth.JWT(
      process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      null,
      (process.env.GOOGLE_SHEETS_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
      target
    );

    const sheets = google.sheets({ version: "v4", auth: jwt });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: 'carcara',
    });

    const rows = response.data.values;

    if (rows.length) {
      return rows.map((row) => ({
        name: row[1],
        registration: row[2],
        document: row[3],
        imageUrl: `https://drive.google.com/uc?id=${row[4].slice(33)}`,
        class: row[5]
      }));
    }
  } catch (err) {
    console.log(err);
  }

  return [];
}