import { useState } from "react"
import Header from "./components/Header"
import Resultado from "./components/Resultado";
import ExplicacaoImc from "./components/ExplicacaoImc";
import HistoricoMedicoes from "./components/HistoricoMedicoes";
import './css/estilo.css'
import './css/global.css'


function App() {

  // HOOK- useState - Manipula o estado da variável
  const[altura,setAltura]=useState();
  const [peso,setPeso]=useState();
  const[resultado,setResultado]=useState();
  const [mostrarResultado,setMostrarResultado]=useState(false);
  const [medicoes, setMedicoes] = useState([]);

  // Função para obter classificação do IMC
  const obterClassificacao = (imc) => {
    if(imc < 18.5) return "Abaixo do peso";
    if(imc >= 18.5 && imc < 25) return "Peso Normal";
    if(imc >= 25 && imc < 30) return "Sobrepeso";
    if(imc >= 30 && imc < 35) return "Obesidade Grau I";
    if(imc >= 35 && imc < 40) return "Obesidade Grau II";
    return "Obesidade Grau III";
  };

  //CRIANDO A FUNÇAO CALCULAR IMC
  const calcularImc=(e)=>{
    e.preventDefault(); //evita o recarregamento da página
    if(altura >0 && peso > 0){
      const imc=peso / (altura*altura);
      const imcFormatado = imc.toFixed(2);
      setResultado(imcFormatado); //arrendonda para 2 casas decimais
      setMostrarResultado(true);

      // Adicionar ao histórico
      const novaMedicao = {
        data: new Date().toLocaleDateString('pt-BR'),
        altura: altura,
        peso: peso,
        imc: imcFormatado,
        classificacao: obterClassificacao(imc)
      };
      
      setMedicoes(prevMedicoes => [novaMedicao, ...prevMedicoes]);
    }else{
      alert("Por favor digite valores valídos");
      setMostrarResultado(false);
    }
  }

  
  return (
    <div className="container">
      <div className="main-content">
        <div className="left-section">
          <div className="box calculator-box"> 
            <Header/>
            <form>
              <div>
                <label htmlFor="altura"><span>(exemplo:1.80)</span></label>
                <input
                  type="number"
                  id="altura"
                  placeholder="Digite sua altura"
                  value={altura}
                  onChange={(e)=>setAltura(parseFloat(e.target.value))}
                />
              </div>

              <div>
                <label htmlFor="peso"><span>(exemplo:80)</span></label>
                <input
                  type="number"
                  id="peso"
                  placeholder="Digite seu peso"
                  value={peso}
                  onChange={(e)=>setPeso(parseFloat(e.target.value))}
                />
              </div>
              <button onClick={calcularImc}>Calcular</button>
            </form>
          </div>
          
          {mostrarResultado &&(
            <div className="resultado-compacto">
              <Resultado resultado={resultado}/>
            </div>
          )}
        </div>

        <div className="right-section">
          <ExplicacaoImc />
          <HistoricoMedicoes medicoes={medicoes} />
        </div>
      </div>

      <footer>
        <p>&copy; 2025 - todos os direitos reservados</p>
      </footer>

    </div>
  )
}

export default App
