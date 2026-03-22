const CRC_TABLE = new Uint32Array(256).map((_, index) => {
  let value = index;
  for (let bit = 0; bit < 8; bit += 1) {
    value = (value & 1) === 1 ? 0xedb88320 ^ (value >>> 1) : value >>> 1;
  }
  return value >>> 0;
});

const encoder = new TextEncoder();

function encodeString(value) {
  return encoder.encode(value);
}

function crc32(bytes) {
  let crc = 0xffffffff;
  for (const byte of bytes) {
    crc = CRC_TABLE[(crc ^ byte) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function u16(value) {
  return Uint8Array.of(value & 0xff, (value >>> 8) & 0xff);
}

function u32(value) {
  return Uint8Array.of(value & 0xff, (value >>> 8) & 0xff, (value >>> 16) & 0xff, (value >>> 24) & 0xff);
}

function combine(parts) {
  const size = parts.reduce((sum, part) => sum + part.length, 0);
  const bytes = new Uint8Array(size);
  let offset = 0;
  for (const part of parts) {
    bytes.set(part, offset);
    offset += part.length;
  }
  return bytes;
}

function normalizeFile(file) {
  const name = encodeString(file.path);
  const data = typeof file.content === "string" ? encodeString(file.content) : file.content;
  return {
    name,
    data,
    crc: crc32(data)
  };
}

function localHeader(file) {
  return combine([
    u32(0x04034b50),
    u16(20),
    u16(0),
    u16(0),
    u16(0),
    u16(0),
    u32(file.crc),
    u32(file.data.length),
    u32(file.data.length),
    u16(file.name.length),
    u16(0),
    file.name,
    file.data
  ]);
}

function centralDirectoryHeader(file, offset) {
  return combine([
    u32(0x02014b50),
    u16(20),
    u16(20),
    u16(0),
    u16(0),
    u16(0),
    u16(0),
    u32(file.crc),
    u32(file.data.length),
    u32(file.data.length),
    u16(file.name.length),
    u16(0),
    u16(0),
    u16(0),
    u16(0),
    u32(0),
    u32(offset),
    file.name
  ]);
}

function endOfCentralDirectory(recordCount, centralSize, centralOffset) {
  return combine([
    u32(0x06054b50),
    u16(0),
    u16(0),
    u16(recordCount),
    u16(recordCount),
    u32(centralSize),
    u32(centralOffset),
    u16(0)
  ]);
}

export function createZipBlob(files) {
  const normalizedFiles = files.map(normalizeFile);
  const localParts = [];
  const directoryParts = [];
  let offset = 0;

  for (const file of normalizedFiles) {
    const localPart = localHeader(file);
    localParts.push(localPart);
    directoryParts.push(centralDirectoryHeader(file, offset));
    offset += localPart.length;
  }

  const centralDirectory = combine(directoryParts);
  const footer = endOfCentralDirectory(normalizedFiles.length, centralDirectory.length, offset);
  return new Blob([...localParts, centralDirectory, footer], { type: "application/zip" });
}

export function downloadZip(filename, files) {
  const blob = createZipBlob(files);
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

