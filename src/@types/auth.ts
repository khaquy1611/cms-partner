export interface Res {
    data: any;
}

export interface ICaptchaRes {
    data: {
        message: string;
        errorCode: number;
        captcha: string | any;
        key: string;
    }
}