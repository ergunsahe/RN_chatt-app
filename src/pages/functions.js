export default function checkErrors(err){
    switch(err){
        case "auth/wrong-password":
            return "Invalid password"
        case "auth/user-not-found":
            return "User not found"
        case "auth/null-value":
            return "Email and password can not be empty "

        default:
            break
    }
}