import React, { useState } from "react";
import Chessboard from "chessboardjsx";
import { ChessInstance, ShortMove } from "chess.js";
import styled from "styled-components";
import { ThemeDropdown } from "./ThemeDropdown";
import { useRecoilValue } from "recoil";
import { infoValue } from "../state/selectors/infoValue";
const Chess = require("chess.js");

const BoardContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const Board: React.FC = () => {
  const info = useRecoilValue(infoValue);

  const [chess] = useState<ChessInstance>(
    new Chess("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1")
  );

  const [fen, setFen] = useState(chess.fen());

  const handleMove = (move: ShortMove) => {
    if (chess.move(move)) {
      setTimeout(() => {
        const moves = chess.moves();

        if (moves.length > 0) {
          const computerMove = moves[Math.floor(Math.random() * moves.length)];
          chess.move(computerMove);
          setFen(chess.fen());
        }
      }, 300);

      setFen(chess.fen());
    }
  };

  return (
    <BoardContainer>
      <ThemeDropdown />
      <Chessboard
        width={600}
        position={fen}
        onDrop={(move) =>
          handleMove({
            from: move.sourceSquare,
            to: move.targetSquare,
            promotion: "q",
          })
        }
        darkSquareStyle={{ backgroundColor: info.dark }}
        lightSquareStyle={{ backgroundColor: info.light }}
      />
    </BoardContainer>
  );
};
