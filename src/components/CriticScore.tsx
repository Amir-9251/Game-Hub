import { Badge } from "@chakra-ui/react";
interface props {
  score: number;
}

const CriticScore = ({ score }: props) => {
    let color = score > 75 ? 'green' : score > 60 && score < 75 ? 'yellow' : 'red';
  return <Badge colorScheme={color}>{score}</Badge>;
};

export default CriticScore;
