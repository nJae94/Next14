export const TabType = {
    REC: 'rec',
    FOL: 'fol'
} as const;

export type TabType = typeof TabType[keyof typeof TabType];