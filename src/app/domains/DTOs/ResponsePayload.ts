export interface ResponsePayload {
    data: {
        id: string;
        word: string;
        definitions: {
            id: string;
            meaning: string;
        }[];
    }[];
    total: number;
}
