import axios from 'axios';
import { failureToast, successToast } from '../toastManager';
import type { LogInData, SignUpData } from '../types';

const APIURL = 'http://localhost:8080';

export const registerUser = async (data: SignUpData | string) => {
	return await axios
		.post(`${APIURL}/api/auth/register`, data)
		.then((res) => {
			successToast(res.data.msg);
			return res.data;
		})
		.catch((err) => {
			failureToast(err.response.data.msg);
		});
};

export const logInUser = async (data: LogInData) => {
	return await axios
		.post(`${APIURL}/api/auth/login`, data)
		.then((res) => {
			successToast(res.data.msg);
			return res.data;
		})
		.catch((err) => {
			failureToast(err.response.data.msg);
		});
};

export const resetPassword = async (email: string) => {
	return await axios
		.get(`${APIURL}/api/auth/reset`, {
			params: {
				email
			}
		})
		.catch((err) => {
			failureToast(err.response.data.msg);
		});
};

export const redirectResetPassword = async (token: string) => {
	return await axios
		.get(`${APIURL}/api/auth/redirect`, {
			params: {
				token
			}
		})
		.catch((err) => {
			failureToast(err.response.data.msg);
		});
};
