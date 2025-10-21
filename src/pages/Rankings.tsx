import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Player {
  rank: number;
  name: string;
  rating: number;
  wins: number;
  losses: number;
  winrate: number;
  badge?: string;
}

const Rankings = () => {
  const topPlayers: Player[] = [
    { rank: 1, name: 'lovefortean', rating: 2847, wins: 342, losses: 128, winrate: 72.8, badge: '👑' },
    { rank: 2, name: 'The Devil wears prada', rating: 2756, wins: 298, losses: 142, winrate: 67.7 },
    { rank: 3, name: 'magSterzz', rating: 2689, wins: 276, losses: 156, winrate: 63.9, badge: '⭐' },
    { rank: 4, name: 'SANCHEZ1337', rating: 2634, wins: 264, losses: 168, winrate: 61.1 },
    { rank: 5, name: 'Esoterik666', rating: 2598, wins: 251, losses: 179, winrate: 58.4 },
    { rank: 6, name: 'amphetamin', rating: 2543, wins: 238, losses: 192, winrate: 55.3 },
    { rank: 7, name: 'доктор-пш', rating: 2487, wins: 226, losses: 204, winrate: 52.6 },
    { rank: 8, name: 'bmg21', rating: 2456, wins: 218, losses: 212, winrate: 50.7 },
    { rank: 9, name: 'Sigma School', rating: 2423, wins: 209, losses: 221, winrate: 48.6 },
    { rank: 10, name: 'тяги денек', rating: 2398, wins: 201, losses: 229, winrate: 46.7 },
  ];

  const getRankColor = (rank: number) => {
    if (rank === 1) return 'text-yellow-400';
    if (rank === 2) return 'text-gray-300';
    if (rank === 3) return 'text-orange-400';
    return 'text-muted-foreground';
  };

  const getRankIcon = (rank: number) => {
    if (rank === 1) return '🥇';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return null;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold mb-2">Player Rankings</h2>
          <p className="text-muted-foreground">Top HvH players by rating</p>
        </div>
        <div className="flex gap-2">
          <Badge variant="outline" className="text-sm">
            <Icon name="Users" size={14} className="mr-1" />
            1,247 Players
          </Badge>
        </div>
      </div>

      <Card className="bg-card border-border/50">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-border/50">
              <tr className="text-left">
                <th className="p-4 font-bold text-muted-foreground">Rank</th>
                <th className="p-4 font-bold text-muted-foreground">Player</th>
                <th className="p-4 font-bold text-muted-foreground text-right">Rating</th>
                <th className="p-4 font-bold text-muted-foreground text-right">Wins</th>
                <th className="p-4 font-bold text-muted-foreground text-right">Losses</th>
                <th className="p-4 font-bold text-muted-foreground text-right">Winrate</th>
              </tr>
            </thead>
            <tbody>
              {topPlayers.map((player) => (
                <tr 
                  key={player.rank} 
                  className="border-b border-border/30 hover:bg-muted/50 transition-colors cursor-pointer"
                >
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <span className={`text-2xl font-bold ${getRankColor(player.rank)}`}>
                        {player.rank}
                      </span>
                      {getRankIcon(player.rank) && (
                        <span className="text-2xl">{getRankIcon(player.rank)}</span>
                      )}
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-primary">{player.name}</span>
                      {player.badge && <span>{player.badge}</span>}
                    </div>
                  </td>
                  <td className="p-4 text-right">
                    <span className="text-xl font-bold text-primary">{player.rating}</span>
                  </td>
                  <td className="p-4 text-right text-green-500 font-semibold">{player.wins}</td>
                  <td className="p-4 text-right text-red-500 font-semibold">{player.losses}</td>
                  <td className="p-4 text-right">
                    <Badge className={player.winrate >= 60 ? 'bg-green-600' : player.winrate >= 50 ? 'bg-yellow-600' : 'bg-red-600'}>
                      {player.winrate}%
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default Rankings;
