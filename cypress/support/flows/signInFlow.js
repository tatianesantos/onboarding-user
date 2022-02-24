import signInPage from "../pages/signInPage";

export function signInFlow(email, password){

    if(email === ""){
        signInPage.fillPassword(password);
    } else if (password === "") {
        signInPage.fillEmail(email);
    } else {
        signInPage.fillEmail(email);
        signInPage.fillPassword(password);
    }
    signInPage.clickSignInButton();
}