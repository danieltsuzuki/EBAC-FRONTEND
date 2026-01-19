export const StatusEnum = {
    CONCLUIDO: "CONCLUIDO",
    PENDENTE: "PENDENTE"
} as const;

export type StatusEnum = typeof StatusEnum[keyof typeof StatusEnum];