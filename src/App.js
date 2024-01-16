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
  const [cep, setCep] = useState("")
  const [estadoProvincia, setEstadoProvincia] = useState("")
  const [cidade, setCidade] = useState("")
  const [bairro, setBairro] = useState("")
  const [apto, setApto] = useState("")
  const [habilitacao, setHabilitacao] = useState("")
  // const [transporte, setTransporte] = useState("")
  const [escolaridade, setEscolaridade] = useState("")
  const [profissionalHabilitacao, setProfissionalHabilitacao] = useState("")
  const [conversacao, setConversacao] = useState("")
  const [leitura, setLeitura] = useState("")
  const [descendencia, setDescendencia] = useState("")
  const [visa, setVisa] = useState("")
  const [filhos, setFilhos] = useState("")
  const [escolaFilhos, setEscolaFilhos] = useState("")
  const [numeroDeFilhos, setNumeroDeFilhos] = useState("")
  const [temFilhos, setTemFilhos] = useState(false)
  const [empregado, setEmpregado] = useState("")
  const [salario, setSalario] = useState("")
  const [novoEmprego, setNovoEmprego] = useState("")
  const [horaExtra, setHoraExtra] = useState("")
  const [moradia, setMoradia] = useState("")
  const [canChange, setCanChange] = useState("")
  const [transporte, setTransporte] = useState("")
  const [pet, setPet] = useState("")
  const [altura, setAltura] = useState("")
  const [peso, setPeso] = useState("")
  const [sapato, setSapato] = useState("")
  const [camisa, setCamisa] = useState("")
  const [calca, setCalca] = useState("")
  const [mao, setMao] = useState("")
  const [oculos, setOculos] = useState("")
  const [tatuagem, setTatuagem] = useState("")
  const [piercing, setPiercing] = useState("")
  const [fumante, setFumante] = useState("")
  const [medical, setMedical] = useState("")
  const [capturedImage, setCapturedImage] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isImageCropperOpen, setImageCropperOpen] = useState(false);
  const [imagemUpada, setImagemUpada] = useState(false)


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
    cep,
    setCep,
    estadoProvincia,
    setEstadoProvincia,
    cidade,
    setCidade,
    bairro,
    setBairro,
    apto,
    setApto,
    habilitacao,
    setHabilitacao,
    transporte,
    setTransporte,
    escolaridade,
    setEscolaridade,
    profissionalHabilitacao,
    setProfissionalHabilitacao,
    conversacao,
    setConversacao,
    leitura,
    setLeitura,
    descendencia,
    setDescendencia,
    visa,
    setVisa,
    filhos,
    setFilhos,
    escolaFilhos,
    setEscolaFilhos,
    numeroDeFilhos,
    setNumeroDeFilhos,
    temFilhos,
    setTemFilhos,
    empregado,
    setEmpregado,
    salario,
    setSalario,
    novoEmprego,
    setNovoEmprego,
    horaExtra,
    setHoraExtra,
    moradia,
    setMoradia,
    canChange,
    setCanChange,
    setTransporte,
    pet,
    setPet,
    altura,
    setAltura,
    peso,
    setPeso,
    sapato,
    setSapato,
    camisa,
    setCamisa,
    calca,
    setCalca,
    mao,
    setMao,
    oculos,
    setOculos,
    tatuagem,
    setTatuagem,
    piercing,
    setPiercing,
    fumante,
    setFumante,
    medical,
    setMedical,
    capturedImage,
    setCapturedImage,
    uploadedImage,
    setUploadedImage,
    isImageCropperOpen,
    setImageCropperOpen,
    imagemUpada,
    setImagemUpada,
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
