async function loginUser(email,password){
    try {
        const userCredential = await auth.signInWithEmailAndPassword(email,password);
    const user = userCredential.user;
    return "sucesso";

    } catch (error){
    console.error(error);
    
    }

}

document.getElementById("btnLogin").addEventListener("click", async(event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const result = await loginUser(email,password);

    if(result === "sucesso"){
        window.location.href = "home.html";
    } else {
        alert("Erro ao fazer login")
    }
})