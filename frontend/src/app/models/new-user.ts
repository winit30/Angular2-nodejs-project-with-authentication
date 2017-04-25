interface Passwords {
	password: string;
	confirmPassword: string;
}

export interface NewUser {
	name: string;
	email: string;
	usertype: string;
	passwords: Passwords;
}