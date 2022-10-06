export interface User {
	id:              number;
	profile_picture: string;
	name:            string;
	email:           string;
	confirmed_email: boolean;
	confirm_code:    string;
	private_lists:   boolean;
	password:        string;
	join_date:       string;
}
