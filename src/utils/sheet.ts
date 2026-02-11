
interface SheetConfig {
  sheetId: string;
  gid: string;
}

export interface Show {
  date: string;
  link: string;
}

export interface SheetData {
  songs: string[];
  shows: Show[];
}

const config: SheetConfig = {
  sheetId: import.meta.env.GOOGLE_SHEET_ID,
  gid: import.meta.env.GOOGLE_SHEET_GID,
};

let cachedData: SheetData | null = null;
let fetchPromise: Promise<SheetData> | null = null;

// Helper to parse CSV properly (handles quoted values)
function parseCSVLine(line: string): string[] {
  const values: string[] = [];
  let currentValue = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        // Escaped quote
        currentValue += '"';
        i++;
      } else {
        // Toggle quotes
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      // End of value
      values.push(currentValue.trim());
      currentValue = '';
    } else {
      currentValue += char;
    }
  }

  values.push(currentValue.trim());
  return values;
}

export async function getSheetData(): Promise<SheetData> {
  if (cachedData) return cachedData;
  if (fetchPromise) return fetchPromise;

  const csvUrl = `https://docs.google.com/spreadsheets/d/e/${config.sheetId}/pub?gid=${config.gid}&single=true&output=csv`;

  fetchPromise = (async () => {
    try {
      const response = await fetch(csvUrl);
      if (!response.ok) {
        throw new Error(`Failed to fetch CSV: ${response.statusText}`);
      }
      const csv = await response.text();

      const lines = csv.trim().split(/\r?\n/);
      if (lines.length === 0) return { songs: [], shows: [] };

      // Parse headers
      const headers = parseCSVLine(lines[0]);
      // Assuming first column is always Song if not named "Song" explicitly
      const songIdx = 0;
      const showDateIdx = headers.findIndex(h => h.toLowerCase() === 'showdate');
      const showLinkIdx = headers.findIndex(h => h.toLowerCase() === 'showlink');

      const songs: string[] = [];
      const shows: Show[] = [];

      for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;

        const columns = parseCSVLine(line);

        // Extract Data
        const song = columns[songIdx];
        if (song) songs.push(song);

        if (showDateIdx !== -1 && showLinkIdx !== -1) {
          const date = columns[showDateIdx];
          const link = columns[showLinkIdx];
          if (date && link) {
            shows.push({ date, link });
          }
        }
      }

      const data = { songs, shows };
      cachedData = data;
      return data;
    } catch (error) {
      console.error('Failed to fetch sheet data:', error);
      return { songs: [], shows: [] };
    } finally {
      fetchPromise = null;
    }
  })();

  return fetchPromise;
}
