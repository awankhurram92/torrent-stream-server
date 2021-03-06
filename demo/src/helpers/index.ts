export function formatBytes(bytes: number, decimals: number = 2): string {
    if (bytes === 0) return '0 Bytes'

    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

    const i = Math.floor(Math.log(bytes) / Math.log(k))

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
}

export function sortBy<T>(arr: T[], key: (item: T) => unknown = v => v, order: 'asc' | 'desc' = 'asc'): T[] {
    const sorted = [...arr].sort((a, b) => {
        const doCompare = (keyA: unknown, keyB: unknown): number => {
            if (typeof keyA === 'number' && typeof keyB === 'number') {
                return keyA < keyB ? -1 : keyA > keyB ? 1 : 0
            }

            if (keyA instanceof Array && keyB instanceof Array) {
                const res = keyA.map((v, i) => doCompare(v, keyB[i])).filter(v => v !== 0)
                return res.length ? res[0] : 1
            }

            if (typeof keyA === 'object' && typeof keyB === 'object') {
                return doCompare(Object.values(keyA ?? {})[0], Object.values(keyB ?? {})[0])
            }

            const stringA = String(keyA).toLowerCase()
            const stringB = String(keyB).toLowerCase()

            return stringA < stringB ? -1 : stringA > stringB ? 1 : 0
        }

        return doCompare(key(a), key(b))
    })
    return order === 'desc' ? sorted.reverse() : sorted
}
