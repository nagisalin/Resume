import { getAuth, fetchSignInMethodsForEmail } from 'firebase/auth';

const auth = getAuth();

export const checkUserExistsByEmail = async (email) => {
	if (!email) return Promise.reject("No email provided!");

	try {
		const methods = await fetchSignInMethodsForEmail(auth, email);
		return methods.length > 0; // If methods array is not empty, email is already registered

	} catch (error) {
		console.error('Error checking email:', error);
		return false; // Return false in case of an error
	}
}