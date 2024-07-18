export interface IUserData {
    username: string;
    password: string;
    email: string;
    address : string;
    fullname: string

}
export interface IForminput {
    label: string;
    type: string;
    id: string;
    name: keyof IUserData;
}