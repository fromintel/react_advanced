import { Currency } from 'entities/Currency';
import { Countries } from 'entities/Countries';

export interface Profile {
    firstname?: string;
    lastname?: string;
    age?: number;
    currency?: Currency;
    country?: Countries;
    city?: string;
    username?: string;
    avatar?: string;
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    isReadonly : boolean;
    error?: string;
}
