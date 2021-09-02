import { navigate } from 'hookrouter';

export const homeLocURL = '/';
export const loginLocURL = '/member/login';
export const createAccountLocURL = '/member/create-account';

export const toHome = () => {
    navigate(homeLocURL);
};

export const toLogin = () => {
    navigate(loginLocURL);
};

export const toCreateAccount = () => {
    navigate(createAccountLocURL);
};
