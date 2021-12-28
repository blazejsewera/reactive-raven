import md5 from 'js-md5'

/**
 * MD5 hash function. Not suitable for any cryptographic use.
 */
export const hash = (s: string): string => md5(s)
