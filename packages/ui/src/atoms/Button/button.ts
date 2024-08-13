export function logText(text: string): string {
  text = text === '' ? 'default: packages OK' : text
  console.log(text)
  return text
}