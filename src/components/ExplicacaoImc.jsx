import React from 'react';
import '../css/explicacaoImc.css';

function ExplicacaoImc() {
    return (
        <div className="explicacao-imc-container box">
            <h2>O que é IMC?</h2>
            <p>
                O Índice de Massa Corporal (IMC) é uma medida internacional usada para calcular se uma pessoa está no peso ideal.
                Ele é calculado dividindo o peso (em quilogramas) pela altura (em metros) ao quadrado.
            </p>
            <h3>Classificação do IMC:</h3>
            <ul>
                <li>**Abaixo do peso**: IMC menor que 18.5</li>
                <li>**Peso normal**: IMC entre 18.5 e 24.9</li>
                <li>**Sobrepeso**: IMC entre 25 e 29.9</li>
                <li>**Obesidade Grau I**: IMC entre 30 e 34.9</li>
                <li>**Obesidade Grau II (severa)**: IMC entre 35 e 39.9</li>
                <li>**Obesidade Grau III (mórbida)**: IMC igual ou maior que 40</li>
            </ul>
        </div>
    );
}

export default ExplicacaoImc;

