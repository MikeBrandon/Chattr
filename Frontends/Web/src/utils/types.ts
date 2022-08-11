export type SignUpData = {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
};

export type LogInData = {
    email: string;
    password: string;
};

export type NavLink = {
    text: string;
    href: string;
};

export type RegisterResponse = {
    auth_token: string;
    msg: string;
};

export type LogInResponse = {
    auth_token: string;
    msg: string;
}