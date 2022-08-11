import { SignUpData } from "../Types/authTypes";

export const validateSignUp = (data: SignUpData): boolean => {
    if (!data.username || !data.email || !data.password) {
        return false;
    }

    if (data.username.length > 20) {
        return false;
    }

    if (!validateEmail(data.email)) {
        return false;
    }

    if (data.password.length <= 8) {
        return false;
    }

    return true;
}

function validateEmail(mail: string): boolean {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return true;
    }
    return false;
}