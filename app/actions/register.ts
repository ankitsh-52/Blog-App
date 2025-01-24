

export async function registerUserAction(formData) {
    try {
        
    } catch (error) {
        console.error(error, "Registration error");
        return {
            error : 'Internal sever error',
            status: 500
        }
    }
}