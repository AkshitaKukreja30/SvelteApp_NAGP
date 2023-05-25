import { writable } from 'svelte/store';

const userName = 'user1'
const password = '999999'

export const store = writable(null);

export const getUserCredentials = async ( user, pass ) => {
	if ( user === userName && pass === password )
		return 1
}