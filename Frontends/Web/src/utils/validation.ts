import type { SignUpData } from "./types";

export const validateSignUp = (data: SignUpData): {
    data: SignUpData | string,
    isValid: boolean
} => {
    if (!data.username || !data.email || !data.password || !data.confirmPassword) {
        return {
            data: "Please Fill in all fields",
            isValid: false
        };
    }

    if (data.password !== data.confirmPassword) {
        return {
            data: "Passwords do not match",
            isValid: false
        };
    }

    if (!validateEmail(data.email)) {
        return {
            data: "Please Enter a Valid Email",
            isValid: false
        };
    }

    if (data.password.length <= 8) {
        return {
            data: `Password length must be atleast 8 characters`,
            isValid: false
        };
    }

    return {
        data,
        isValid: true
    };
}

function validateEmail(mail: string): boolean {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return true;
    }
    return false;
}