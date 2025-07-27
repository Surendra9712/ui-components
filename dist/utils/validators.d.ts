export declare const validators: {
    required: (value: any) => boolean;
    email: (value: string) => boolean;
    minLength: (min: number) => (value: string) => boolean;
    maxLength: (max: number) => (value: string) => boolean;
    password: (value: string) => boolean;
    match: (field: string, getFormData: () => any) => (value: any) => boolean;
    dateInPast: (value: Date) => boolean;
    dateInFuture: (value: Date) => boolean;
    pattern: (regex: RegExp) => (value: string) => boolean;
    number: (value: any) => boolean;
    min: (min: number) => (value: any) => boolean;
    max: (max: number) => (value: any) => boolean;
    phone: (value: string) => boolean;
};
