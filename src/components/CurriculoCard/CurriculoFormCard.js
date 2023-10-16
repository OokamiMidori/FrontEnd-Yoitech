import { useState } from "react"
import ResultComponent from "../ResultComponent/resultComponent"
import FormComponent from "../CurriculoUserFormContainer/FormComponent"


export const CurriculoUserFormContainer = (props) => {
    const [showResult, setShowResult] = useState(false);
    const [formData, setFormData] = useState({
      emprego: '',
      fabrica: '',
      provincia: '',
      ramo: '',
      contratacao: '',
      recisao: '',
      funcao: '',
      desligamento: '',
      salario: '',
    });
  
    const handleFormSubmit = (data) => {
      setShowResult(true);
      setFormData(data);
    };
  
    return (
      <div>
        {showResult ? (
          <ResultComponent data={formData} />
        ) : (
          <div>
            {/* Se showResult for false, renderize o formulário */}
            <FormComponent onSubmit={handleFormSubmit} />
          </div>
        )}
      </div>
    );
  }
  