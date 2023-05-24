//funcao para registro
async function registerUser(email, password, event){
  event.preventDefault();

    try {
      const userCredital = await auth.createUserWithEmailAndPassword(email,password);
      const user = userCredital.user;

      await db.collection("users").doc(user.uid).set(
        {
          email: email,
          uid : user.uid
        }
      );
      alert("Cadastro realizado com sucesso!")
    } catch (error){
      console.log(error)
    }
}

//pegar os dados do formulario e inserir na funcao

document.getElementById("registerButton").addEventListener("click", async(event) =>{
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if(password !== confirmPassword){
    alert("As senhas não são iguais");
  };

  registerUser(email,password,event);
});