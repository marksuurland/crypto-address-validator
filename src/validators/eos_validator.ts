function isValidEOSAddress (address: string) {
  const regex = /^[a-z0-9.]+$/g // Must be numbers, lowercase letters and decimal points only
  if (address.search(regex) !== -1 && address.length === 12) {
    return true
  } else {
    return false
  }
}

export function isValidAddress(address: string): boolean {
  return isValidEOSAddress(address)
}
