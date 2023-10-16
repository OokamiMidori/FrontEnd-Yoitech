import React, { useState } from 'react';
import save from "../../assets/floppy-disk.svg"
import lixeira from "../../assets/recycle-bin-2-1.svg"
import back from "../../assets/return-2.svg"
import next from "../../assets/next-3.svg"
import add1 from "../../assets/file-add-alternate-4.svg"
import { ContratacaoRecisao, CurriculoComImagem, CurriculoFormContainer, FuncaoExercida, ImgFundoCurriculo, ImgSalario, ProvinciaRamoAtuacao, SalarioImg, VagaNomeFabrica } from "../CurriculoCard/styledCurriculoFormCard"
import { goToMeasurementUserPage, goToUserUploadImg } from "../../routes"
import { useNavigate } from 'react-router-dom';

const FormComponent = ({onSubmitForm, formNumber, onCreateNewForm, onDeleteForm , isVisible, onToggleVisibility}) => {

  const navigate = useNavigate()
  
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

  const handleDeleteForm = () => {
    onDeleteForm(formNumber);
  };
  const handleSubmit = () => {
    onSubmitForm(formNumber, formData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onSubmit(formData, formNumber);
  // };

  // const toggleVisibility = () => {
  //   setIsVisible(!isVisible);
  // };

  const handleToggleVisibility = () => {
    onToggleVisibility(formNumber);
  };

  const createNewFormVisibiliteZero = () =>{
    onCreateNewForm()
    handleToggleVisibility()
  }

  

  return (
    <div>

      {isVisible && (<CurriculoComImagem>
      
        <CurriculoFormContainer onSubmit={handleSubmit}>
          <VagaNomeFabrica>
            <div>
              <div>Vaga de emprego</div>
              <input type="text" placeholder="Emprego por empreiteira (Sankyo)" name='emprego' value={formData.emprego} onChange={handleInputChange} />
            </div>
            <div>
              <div>Nome da Fabrica</div>
              <input type="text" placeholder="Toyota" name='fabrica' value={formData.fabrica} onChange={handleInputChange} />
            </div>
          </VagaNomeFabrica>
          <ProvinciaRamoAtuacao>
            <div>
              <div>Provincia</div>
              <input type="text" placeholder="Aichi-ken" name='provincia' value={formData.provincia} onChange={handleInputChange} />
            </div>
            <div>
              <div>Ramo de atuação da empresa</div>
              <input type="text" placeholder="Auto peças" name='ramo' value={formData.value} onChange={handleInputChange} />
            </div>
          </ProvinciaRamoAtuacao>
          <ContratacaoRecisao>
            <div>
              <div>Contratação</div>
              <input type="date" placeholder="DD/MM/AAA" name='contratacao' value={formData.contratacao} onChange={handleInputChange} />
            </div>
            <div>
              <div>Recisão</div>
              <input type="date" placeholder="DD/MM/AAA" name='recisao' value={formData.recisao} onChange={handleInputChange} />
            </div>
          </ContratacaoRecisao>
          <FuncaoExercida>
            <div>Função exercida</div>
            <input type="text" placeholder="Operador de maquinas" name='funcao' value={formData.funcao} onChange={handleInputChange} />
          </FuncaoExercida>
          <FuncaoExercida>
            <div>Motivo do desligamento</div>
            <input type="text" placeholder="Queda de produção" name='desligamento' value={formData.desligamento} onChange={handleInputChange} />
          </FuncaoExercida>
          <SalarioImg>
            <div>
              <div>Salário/hora ou mensalista</div>
              <input type="type" placeholder="¥( )" name='salario' value={formData.salario} onChange={handleInputChange} />
            </div>
            <ImgSalario>
              <img src={save} alt="floppy-disk" onClick={handleSubmit} />
              <img src={lixeira} alt="recycle-bin" onClick={handleDeleteForm} />
            </ImgSalario>
          </SalarioImg>
          <div>
            <div>Para inserir um novo histórico de trabalho em NOVO</div>
          </div>
          <ImgFundoCurriculo>
            <img src={back} alt="return.svg" onClick={() => goToMeasurementUserPage()} />
            <img src={add1} alt="file-add-alternate-4.svg" onClick={()=>createNewFormVisibiliteZero()}/>
            {/* <button type='submit'> */}
              <img src={next} alt="next.svg" onClick={() => goToUserUploadImg(navigate)} />
            {/* </button> */}
          </ImgFundoCurriculo>
        </CurriculoFormContainer>
      </CurriculoComImagem>)}

    </div>
  );
};

export default FormComponent;
