export const validators = {
    required: (value: any) => {
        if (typeof value === 'string') return value.trim() !== '';
        if (Array.isArray(value)) return value.length > 0;
        return value !== null && value !== undefined;
    },

    email: (value: string) => {
        if (!value) return true;
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(value);
    },

    minLength: (min: number) => (value: string) => {
        if (!value) return true;
        return value.length >= min;
    },

    maxLength: (max: number) => (value: string) => {
        if (!value) return true;
        return value.length <= max;
    },

    password: (value: string) => {
        if (!value) return true;
        return value.length >= 8 && /[A-Z]/.test(value) && /[0-9]/.test(value);
    },

    match: (field: string, getFormData: () => any) => (value: any) => {
        const formData = getFormData();
        return value === formData[field];
    },

    dateInPast: (value: Date) => {
        if (!value) return true;
        return value < new Date();
    },

    dateInFuture: (value: Date) => {
        if (!value) return true;
        return value > new Date();
    },

    pattern: (regex: RegExp) => (value: string) => {
        if (!value) return true;
        return regex.test(value);
    },

    number: (value: any) => {
        if (!value) return true;
        return !isNaN(Number(value));
    },

    min: (min: number) => (value: any) => {
        if (!value) return true;
        const num = Number(value);
        return !isNaN(num) && num >= min;
    },

    max: (max: number) => (value: any) => {
        if (!value) return true;
        const num = Number(value);
        return !isNaN(num) && num <= max;
    },

    phone: (value: string) => {
        if (!value) return true;
        const re = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
        return re.test(value);
    }
};