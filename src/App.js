import GlobalStyle from "./GlobalStyled.style";
import { Router } from "./routes";
import { UserContext } from "./contexts/UserContext";
import { useState } from "react";

function App() {
  const [isChecked, setIsChecked] = useState(false)
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [startDate, setStartDate] = useState(new Date());
  const [genero, setGenero] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [nacionalidade, setNacionalidade] = useState("")
  const [estadoCivil, setEstadoCivil] = useState("")
  const mudeialgo = "mudei algo"


const context = {
isChecked,
setIsChecked,
password,
setPassword,
email,
setEmail,
confirmPassword,
setConfirmPassword,
startDate,
setStartDate,
genero,
setGenero,
name,
setName,
phone,
setPhone,
nacionalidade,
setNacionalidade,
estadoCivil,
setEstadoCivil,

}

  return (<>
    <GlobalStyle />
    <UserContext.Provider value={context}>
       <Router />
    </UserContext.Provider>
   
  </>

  );
}

export default App;
