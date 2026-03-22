export function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export function repoFolderName(value, fallback) {
  return (value || fallback).replace(/\//g, "__");
}

export function formatIsoDate(date = new Date()) {
  return date.toISOString().slice(0, 10);
}

export function prettyJson(value) {
  return `${JSON.stringify(value, null, 2)}\n`;
}

export function joinPath(...parts) {
  return parts.filter(Boolean).join("/");
}

