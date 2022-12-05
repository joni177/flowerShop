let login = () => {
    console.log("login");
    const userFromInput = document.getElementById("username").value;
    const passwordFromInput = document.getElementById("password").value;
    console.log(userFromInput, passwordFromInput);
    console.log(globalUsersDB);
    console.log(JSON.stringify(globalUsersDB))
    console.log(globalUsersDB[0].user)

    const foundUser = globalUsersDB.find(user => user.user === userFromInput)
    console.log(foundUser)
    if (foundUser) {
        const auth = foundUser.password === passwordFromInput;
        console.log(auth)
        if (auth) {
            // var clickHere = document.getElementById("continue");
            localStorage.setItem("user", JSON.stringify(foundUser));
            if (foundUser.isAdmin) {
                location.href = 'adminCatalog.html';
                return;
            }
            else {
                location.href = "catalog.html"
            }
        }
    }
}