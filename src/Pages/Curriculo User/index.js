import { Footer } from "../../components/footer"
import { Header } from "../../components/header"
import { CurriculoCardComImagem, CurriculoUserStyledPage, CurriculoUserStyledPageContainer, Formularios } from "./styledCurriculoUserPage"
import setinha from "../../assets/button-play.svg"
import { useEffect, useState } from "react"
import ImageWithNumber from "../../components/ImageWithNumber/ImageWithNumber"
import FormComponent from "../../components/CurriculoUserFormContainer/FormComponent"

export const CurriculoUserPage = () => {
    // const [formNumbers, setFormNumbers] = useState([]);
    // const [nextFormNumber, setNextFormNumber] = useState(1);
    // const [formVisibility, setFormVisibility] = useState({});


    // // Função para criar o primeiro formulário quando o componente é montado
    const createInitialForm = () => {
        setFormNumbers([{ number: nextFormNumber, visible: true }]);
        setNextFormNumber(nextFormNumber + 1);
        setFormVisibility((prevFormVisibility) => ({
            ...prevFormVisibility,
            [nextFormNumber]: true,
        }))
    };

    // // Quando o componente é montado, cria o primeiro formulário
    useEffect(() => {
        createInitialForm();
    }, []);

    // const addForm = () => {
    //     setFormNumbers((prevFormNumbers) => [
    //       ...prevFormNumbers,
    //       { number: nextFormNumber },
    //     ]);
    //     setNextFormNumber(nextFormNumber + 1);
    //   };

    const submitForm = (formNumber) => {
        // Lógica para submissão do formulário
    };

    //   const toggleFormVisibility = (formNumber) => {
    //     setFormVisibility((prevFormVisibility) => ({
    //       ...prevFormVisibility,
    //       [formNumber]: !prevFormVisibility[formNumber],
    //     }));
    //   };

    // const deleteForm = (formNumber) => {
    //     setFormNumbers((prevFormNumbers) =>
    //         prevFormNumbers.filter((form) => form.number !== formNumber)
    //     );
    // };

    const [formNumbers, setFormNumbers] = useState([]);
    const [nextFormNumber, setNextFormNumber] = useState(1);
    const [formVisibility, setFormVisibility] = useState({});


    const addForm = () => {
        setFormNumbers((prevFormNumbers) => [
            ...prevFormNumbers,
            { number: nextFormNumber },
        ]);

        setFormVisibility((prevFormVisibility) => ({
            ...prevFormVisibility,
            [nextFormNumber]: true, // Tornar visível o novo formulário
        }));

        setNextFormNumber(nextFormNumber + 1);
    };


    const deleteForm = (formNumber) => {
        // Verifique se há um formulário anterior
        const previousFormNumber = formNumber - 1;
      
        if (formNumbers.length === 1) {
            return (alert("Você não pode excluir o último formulário."))
        } else if (previousFormNumber >= 1) {
          setFormVisibility((prevFormVisibility) => ({
            ...prevFormVisibility,
            [previousFormNumber]: true, // Tornar visível o formulário anterior
          }));
        }
      
        if (formNumber === nextFormNumber && formNumber !== 1) {
          // Ou execute a ação desejada, como redefinir os dados do formulário
          // resetFormData(formNumber);
        } else {
          // Exclua o formulário após a verificação
          setFormNumbers((prevFormNumbers) =>
            prevFormNumbers.filter((form) => form.number !== formNumber)
          );
        }
      };

    const toggleFormVisibility = (formNumber) => {
        setFormVisibility((prevFormVisibility) => ({
            ...prevFormVisibility,
            [formNumber]: !prevFormVisibility[formNumber],
        }))
    };
    const handleToggleVisibility = (formNumber) => {
        setFormVisibility((prevFormVisibility) => {
          const updatedVisibility = { ...prevFormVisibility };
        
          console.log(formNumber)
          // Torna visível apenas o formulário com o número igual a formNumber
          updatedVisibility[formNumber] = true;
      
          // Torna invisíveis todos os outros formulários
          for (let i = 1; i <= nextFormNumber; i++) {
            if (i !== formNumber) {
              updatedVisibility[i] = false;
            }
          }
      
          return updatedVisibility;
        });
      };

    //   const funcaoDeTeste = (formNumber) =>{
    //     console.log("ESTA FUNCIONANDO", formNumber)
    //   }
    return (
        <CurriculoUserStyledPage>
            <Header />
            <Formularios>
                <CurriculoUserStyledPageContainer>
                    <div className="numeros">
                        {formNumbers.map((form) => (
                            <ImageWithNumber src={setinha} number={form.number} className="numeros" funcao={handleToggleVisibility} formNumber={form.number} />
                        ))}
                    </div>

                    {formNumbers.map((form) => (
                        <CurriculoCardComImagem key={form.number}>

                            <FormComponent
                                key={form.number}
                                formNumber={form.number}
                                onDeleteForm={deleteForm}
                                onSubmitForm={submitForm}
                                onCreateNewForm={addForm}
                                isVisible={formVisibility[form.number]}
                                onToggleVisibility={toggleFormVisibility}
                            />
                        </CurriculoCardComImagem>
                    ))}
                </CurriculoUserStyledPageContainer>
            </Formularios>
            <Footer />
        </CurriculoUserStyledPage>
    )
}
