import { failureToast } from "./toastManager";
import type { SignUpData } from "./types";

export const validateSignUp = (data: SignUpData): {
    data: SignUpData | string,
    isValid: boolean
} => {
    if (!data.username || !data.email || !data.password || !data.confirmPassword) {
        const message = "Please Fill in all fields";
        failureToast(message);
        return {
            data: message,
            isValid: false
        };
    }

    if (data.password !== data.confirmPassword) {
        const message = "Passwords do not match";
        failureToast(message);
        return {
            data: message,
            isValid: false
        };
    }

    if (data.username.length > 20) {
        const message = "Username should not be longer than 20 characters";
        failureToast(message);
        return {
            data: message,
            isValid: false
        };
    }

    if (!validateEmail(data.email)) {
        const message = "Please Enter a Valid Email";
        failureToast(message);
        return {
            data: message,
            isValid: false
        };
    }

    if (data.password.length <= 8) {
        const message = `Password length must be at least 8 characters`;
        failureToast(message);
        return {
            data: message,
            isValid: false
        };
    }

    return {
        data,
        isValid: true
    };
}

function validateEmail(mail: string): boolean {
    // eslint-disable-next-line no-useless-escape
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return true;
    }
    return false;
}