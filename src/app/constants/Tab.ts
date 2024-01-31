export const TabType = {
    REC: 'rec',
    FOL: 'fol',
    HOT: 'hot',
    NEW:'new'
} as const;

export type TabType = typeof TabType[keyof typeof TabType];