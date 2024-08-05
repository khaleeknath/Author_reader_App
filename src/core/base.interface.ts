// Base interface file

export interface IQueryResponse {
    fieldCount?: number;
    affectedRows?: number;
    insertId?: number;
    message?: string;
    changedRows?: number;
}

export interface DatabaseConfig {
    HOST: string;
    PORT: number;
    RETRY_ATTEMPTS: number;
    RETRY_TIME: number;
    USER: string;
    PASSWORD: string;    
    DATABASE: string;
}
