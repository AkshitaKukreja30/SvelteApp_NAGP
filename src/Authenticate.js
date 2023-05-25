import { writable } from 'svelte/store';

const userName = 'nagpuser1'
const password = '123456'

export const store = writable(null);

export const getUserCredentials = async ( user, pass ) => {
	if ( user === userName && pass === password )
		return 1
}