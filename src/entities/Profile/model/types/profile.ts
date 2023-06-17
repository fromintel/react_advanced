import { Countries } from 'shared/const/countries';
import { Currency } from 'shared/const/currency';

export interface Profile {
    firstname: string;
    lastname: string;
    age: number;
    currency: Currency;
    country: Countries;
    city: string;
    username: string;
    avatar: string;
}

export interface ProfileSchema {
    data?: Profile;
    isLoading: boolean;
    isReadonly : boolean;
    error?: string;
}
