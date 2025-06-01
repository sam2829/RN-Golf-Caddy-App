// function ro split players into random even groups
function RandomiseAndGroupPlayers(players, groupNumber) {
  // shuffle players
  const shuffled = [...players];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  //   place into groups
  const groups = Array.from({ length: groupNumber }, () => []);
  shuffled.forEach((player, index) => {
    groups[index % groupNumber].push(player);
  });

  return groups;
}

export default RandomiseAndGroupPlayers;
