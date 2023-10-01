export interface UserInfo {
    _id: string;
    name: string;
    email: string;
    pic: string;
}

export interface Users {
    users: UserInfo[];
}