import React, { Fragment, useEffect, useRef, useState } from "react";
import Input from "../components/input/input.component";
import Bloco, { BlocoEnum } from "../components/bloco/bloco.component";
import "./partida-page.css";
import "./modal.css";

const PartidaPage = (): React.ReactElement => {
  const [jogador1, setJogador1] = useState("");
  const [jogador2, setJogador2] = useState("");
  const [ganhador, setGanhador] = useState("");
  const [proxJogador, setProxJogador] = useState("jogador");

  const [quadrados, setQuadrados] = useState(Array(9).fill(0));

  const [modalInicioStatus, setModalInicioStatus] = useState(true);
  const [modalFimStatus, setModalFimStatus] = useState(false);
  const [modalEmpateStatus, setModalEmpateStatus] = useState(false);

  const [count, setCount] = useState(0);
  const [fimDeJogo, setFimDeJogo] = useState(false);

  useInterval(() => {
    if (!(modalInicioStatus || modalFimStatus || fimDeJogo)) {
      setCount(count + 1);
    }
  }, 1000);

  const stringGanhador = (winner: string): string => {
    if (winner === "x") {
      return jogador1;
    } else if (winner === "o") {
      return jogador2;
    } else return "";
  };

  const handleClickJogarNovamente = () => {
    setFimDeJogo(false);
    setQuadrados(Array(9).fill(0));
    setCount(0);
    setModalFimStatus(false);
    setModalEmpateStatus(false);
  };

  const handleClickButton = () => {
    if (jogador1 && jogador2) {
      if (jogador1 === jogador2) {
        alert("Jogadores iguais! Mude o nome de um deles.");
        return;
      } else {
        setProxJogador(jogador1);
        setModalInicioStatus(false);
      }
    } else {
      alert(`Campo vazio!`);
      return;
    }
  };

  const handleClick = (i: number) => {
    if (fimDeJogo) return;

    const squares = quadrados.slice();
    if(squares[i])
      squares[i] = proxJogador === jogador1 ? BlocoEnum.X : BlocoEnum.O;

    setQuadrados(squares);
    if (proxJogador === jogador1) {
      setProxJogador(jogador2);
    } else if (proxJogador === jogador2) {
      setProxJogador(jogador1);
    }

    let winner = calculateWinner(squares);
    if (winner) {
      setFimDeJogo(true);
      setModalFimStatus(true);
      setGanhador(stringGanhador(winner));
    } else if (squares.every((elem) => typeof elem === "string")) {
      setFimDeJogo(true);
      setModalEmpateStatus(true);
    }
  };

  const bloco = (i: number): React.ReactElement => {
    return <Bloco type={quadrados[i]} index={i} onClick={handleClick} />;
  };

  const board: React.ReactElement = (
    <div className="container">
      <div className="container-select">
      </div>
      <div className="container-blocos">
        {bloco(0)}
        {bloco(1)}
        {bloco(2)}
        {bloco(3)}
        {bloco(4)}
        {bloco(5)}
        {bloco(6)}
        {bloco(7)}
        {bloco(8)}
      </div>
      <div className="infos">
        <div className="prox-jogador">Próximo: {proxJogador}</div>
        <div className="contador">{count}</div>
      </div>
    </div>
  );

  const modalEmpate: React.ReactElement = (
    <div className="container-modal fim">
      <div className="modal-fim modal">
        <h2 className="game-title"> Tic Tac Toe </h2>
        <h3>Houve um empate! </h3>
        <button className="button" onClick={handleClickJogarNovamente}>
          Jogar Novamente
        </button>
      </div>
    </div>
  );

  const modalFim: React.ReactElement = (
    <div className="container-modal fim">
      <div className="modal-fim modal">
        <h2 className="game-title"> Tic Tac Toe </h2>
        <h3>Jogador Vencedor: {ganhador} </h3>
        <button className="button" onClick={handleClickJogarNovamente}>
          Jogar Novamente
        </button>
      </div>
    </div>
  );

  const modalInicio: React.ReactElement = (
    <div className="container-modal">
      <div className="modal">
        <h2 className="game-title"> Tic Tac Toe</h2>
        <Input mensagem="Jogador 1" onChange={setJogador1} />
        <Input mensagem="Jogador 2" onChange={setJogador2} />
        <button className="button" onClick={handleClickButton}>
          Jogar
        </button>
      </div>
    </div>
  );

  return (
    <Fragment>
      {modalInicioStatus && modalInicio}
      {modalFimStatus && modalFim}
      {modalEmpateStatus && modalEmpate}
      {board}
    </Fragment>
  );
};

function calculateWinner(squares: any[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// Fonte: https://overreacted.io/making-setinterval-declarative-with-react-hooks/
function useInterval(callback: any, delay: any) {
  const savedCallback = useRef(Object);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default PartidaPage;
