import React, { useState } from 'react';
import save from "../../assets/floppy-disk.svg"
import lixeira from "../../assets/recycle-bin-2-1.svg"
import back from "../../assets/return-2.svg"
import next from "../../assets/next-3.svg"
import add1 from "../../assets/file-add-alternate-4.svg"
import { ContratacaoRecisao, CurriculoComImagem, CurriculoFormContainer, FuncaoExercida, ImgFundoCurriculo, ImgSalario, ProvinciaRamoAtuacao, SalarioImg, VagaNomeFabrica } from "../CurriculoCard/styledCurriculoFormCard"
import { goToMeasurementUserPage, goToUserUploadImg } from "../../routes"
import { useNavigate } from 'react-router-dom';

const FormComponent = ({ onSubmitForm, formNumber, onCreateNewForm, onDeleteForm, isVisible, onToggleVisibility }) => {

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

  const createNewFormVisibiliteZero = () => {
    onCreateNewForm()
    handleToggleVisibility()
  }

  const tiposDeContrato = [
    { name: "Empregado por empreiteira" },
    { name: "Empregado direto pela fábrica ou empresa" },
    { name: "Autônomo" }
  ]

  const estadoProvinciaArray = [
    { name: "XXXX-KEN" },
    { name: "Hokkaido" },
    { name: "Aomori" },
    { name: "Iwate" },
    { name: "Miyagi" },
    { name: "Akita" },
    { name: "Yamagata" },
    { name: "Fukushima" },
    { name: "Ibaraki" },
    { name: "Tochigi" },
    { name: "Gunma" },
    { name: "Saitama" },
    { name: "Chiba" },
    { name: "Tóquio" },
    { name: "Kanagawa" },
    { name: "Niigata" },
    { name: "Toyama" },
    { name: "Ishikawa" },
    { name: "Fukui" },
    { name: "Yamanashi" },
    { name: "Nagano" },
    { name: "Shizuoka" },
    { name: "Aichi" },
    { name: "Gifu" },
    { name: "Mie" },
    { name: "Shiga" },
    { name: "Kyoto" },
    { name: "Osaka" },
    { name: "Hyōgo" },
    { name: "Nara" },
    { name: "Wakayama" },
    { name: "Tottori" },
    { name: "Shimane" },
    { name: "Okayama" },
    { name: "Hiroshima" },
    { name: "Yamaguchi" },
    { name: "Tokushima" },
    { name: "Kagawa" },
    { name: "Ehime" },
    { name: "Kōchi" },
    { name: "Fukuoka" },
    { name: "Saga" },
    { name: "Nagasaki" },
    { name: "Kumamoto" },
    { name: "Oita" },
    { name: "Miyazaki" },
    { name: "Kagoshima" },
    { name: "Okinawa" },
  ]

  const funcaoExercidaArray = [
    { name: "Abastecimento de linha" },
    { name: "Atendimento ao cliente" },
    { name: "Componentes eletrônicos" },
    { name: "Cozinheiro" },
    { name: "Cuidador de idosos" },
    { name: "Eletricista" },
    { name: "Embalagem" },
    { name: "Empilhadeirista" },
    { name: "Escritório" },
    { name: "Fundição" },
    { name: "Gerente" },
    { name: "Inspeção" },
    { name: "Líder" },
    { name: "Linha de produção" },
    { name: "Massagista" },
    { name: "Mecânico" },
    { name: "Montagem" },
    { name: "Motorista" },
    { name: "Operador de máquina(s)" },
    { name: "Pedreiro" },
    { name: "Pintura" },
    { name: "Solda" },
    { name: "Tantousha" },
    { name: "Tradutor / Interprete" },
    { name: "Vendedor" },
    { name: "Outros" },
  ]

  const desligamentoArray = [
    { name: "Termino do contrato pelo Funcionário" },
    { name: "Termino do contrato pela Empresa" },
    { name: "Salário baixo" },
    { name: "Retorno ao Brasil" },
    { name: "Queda na produção" },
    { name: "Problema pessoal na fábrica ou com a empreiteira" },
    { name: "Problema familiar" },
    { name: "Problema de saúde" },
    { name: "Pouca hora extra" },
    { name: "Inconformidade com a função designada" },
    { name: "Emprego atual é temporário" },
    { name: "Dificuldade em se adaptar ao tipo de serviço" },
    { name: "Dificuldade em se adaptar a cidade ou região" },
    { name: "Acidente de trabalho ou no trajeto de casa" },
    { name: "Outros" }

  ]

  const ramoDeAtuacaoDaFabricaArray = [
    { name: "Alimentício" },
    { name: "Autônomo" },
    { name: "Autopeças" },
    { name: "Construção civil" },
    { name: "Eletrônico" },
    { name: "Engenharia" },
    { name: "Escritório, administrativo" },
    { name: "Hotelaria" },
    { name: "Profissionais da saúde" },
    { name: "Tantousha" },
    { name: "Técnico" },
    { name: "Transportadora / Logística" },
    { name: "Vendedor" },
    { name: "Outros" }

  ]

  return (
    <div>

      {isVisible && (<CurriculoComImagem>

        <CurriculoFormContainer onSubmit={handleSubmit}>

          {formNumber === 1 ? <div className='titulo'>Cadastre o seu ultimo emprego ou atual se ainda estiver trabalhando.</div> : <div className='titulo'>Cadastro</div>}

          <VagaNomeFabrica>
            <div>
              <div>Tipo de contrato</div>
              <select type="text" placeholder="Emprego por empreiteira (Sankyo)" name='emprego' value={formData.emprego} onChange={handleInputChange}>
                {tiposDeContrato.map((o) => {
                  return <option value={o.name} >{o.name}</option>
                })}
              </select>
            </div>
            <div>
              <div>Nome da Fabrica/empresa</div>
              <input type="text" placeholder="Toyota" name='fabrica' value={formData.fabrica} onChange={handleInputChange} />
            </div>
          </VagaNomeFabrica>
          <ProvinciaRamoAtuacao>
            <div>
              <div>Provincia</div>
              <select type="text" placeholder="Aichi-ken" name='provincia' value={formData.provincia} onChange={handleInputChange} >
                {estadoProvinciaArray.map((o) => {
                  return <option value={o.name} >{o.name}</option>
                })}
              </select>
            </div>
            <div>
              <div>Ramo de atuação da fábrica/empresa</div>
              <select type="text" placeholder="Auto peças" name='ramo' value={formData.value} onChange={handleInputChange} >
                {ramoDeAtuacaoDaFabricaArray.map((o) => {
                  return <option value={o.name} >{o.name}</option>
                })}
              </select>
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
            <select type="text" placeholder="Operador de maquinas" name='funcao' value={formData.funcao} onChange={handleInputChange} >
              {funcaoExercidaArray.map((o) => {
                return <option value={o.name} >{o.name}</option>
              })}
            </select>
          </FuncaoExercida>
          <FuncaoExercida>
            <div>Motivo do desligamento</div>
            <select type="text" placeholder="Queda de produção" name='desligamento' value={formData.desligamento} onChange={handleInputChange} >
              {desligamentoArray.map((o) => {
                return <option value={o.name} >{o.name}</option>
              })}
            </select>
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
            {formNumber === 1 ? <div>Para inserir um novo histórico de trabalho em NOVO</div> : <div></div>}
          </div>
          <ImgFundoCurriculo>
            <img src={back} alt="return.svg" onClick={() => goToMeasurementUserPage(navigate)} />
            {formNumber === 9 ? <div></div> : <img src={add1} alt="file-add-alternate-4.svg" onClick={() => createNewFormVisibiliteZero()} />}
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
