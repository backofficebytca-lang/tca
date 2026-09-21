/**
 * Reads an environment variable and removes the whitespace and the quote
 * marks people often paste around a value in a hosting dashboard
 * ("Name <a@b.fr>" typed as '"Name <a@b.fr>"' is a classic). A wrongly quoted
 * value then still works instead of failing silently.
 */
export function envValue(name: string): string {
  return (process.env[name] ?? "").trim().replace(/^["']+|["']+$/g, "").trim();
}
