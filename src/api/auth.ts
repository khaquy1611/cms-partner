
import { Api } from '@api/Api';

export const getCaptcha = () : any => {
   return Api.get('users/captcha') 
}

export const UserLogin = (data: any) : any => {
    return Api.post('users/login', data)
}

export const UserRegister = (data: any) : any => {
    return Api.post('users/signup', data);
}