
export const commonElement = (data: number[], type: 'most' | 'less'): number => {
    const store: Record<number, number> = {};
    data.forEach(v => store[v] = (store[v] || 0) + 1);

    const factor = type === 'most' ? -1 : 1;
    const res = Object.keys(store)
      .map(key => ({key: +key, count: store[+key]}))
      .sort((a, b) => (a.count > b.count ? 1 : -1) * factor);

    if( res[0].count === res[1].count) {
        return type === 'most' ? 1 : 0;
    }

    return res[0].key;
};
