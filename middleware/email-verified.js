export default ({ $auth, redirect, store }) => {
    if (!$auth.user.email_verified) {

        store.commit("toaster/fire", {
            text: "Please verify your email address",
            type: 'error'
        })
        return redirect("/Backend");
    }
};