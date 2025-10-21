import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface Player {
  name: string;
  kills: number;
  deaths: number;
  assists: number;
  adr: number;
  hs: number;
}

interface KillEvent {
  id: number;
  killer: string;
  victim: string;
  weapon: string;
  headshot: boolean;
  time: string;
}

const MatchDetails = () => {
  const [currentRound, setCurrentRound] = useState(12);
  const [scoreT, setScoreT] = useState(7);
  const [scoreCT, setScoreCT] = useState(5);
  const [timeLeft, setTimeLeft] = useState(115);

  const teamT: Player[] = [
    { name: 'lovefortean', kills: 18, deaths: 12, assists: 3, adr: 92, hs: 67 },
    { name: 'magSterzz', kills: 16, deaths: 13, assists: 5, adr: 85, hs: 58 },
  ];

  const teamCT: Player[] = [
    { name: 'SANCHEZ1337', kills: 15, deaths: 14, assists: 4, adr: 78, hs: 53 },
    { name: 'доктор-пш', kills: 13, deaths: 16, assists: 6, adr: 71, hs: 48 },
  ];

  const killFeed: KillEvent[] = [
    { id: 1, killer: 'lovefortean', victim: 'SANCHEZ1337', weapon: 'AWP', headshot: true, time: '1:45' },
    { id: 2, killer: 'magSterzz', victim: 'доктор-пш', weapon: 'AK-47', headshot: false, time: '1:38' },
    { id: 3, killer: 'SANCHEZ1337', victim: 'lovefortean', weapon: 'Desert Eagle', headshot: true, time: '1:22' },
    { id: 4, killer: 'magSterzz', victim: 'SANCHEZ1337', weapon: 'M4A4', headshot: false, time: '1:15' },
  ];

  const roundHistory = [
    { round: 1, winner: 'T', type: 'elimination' },
    { round: 2, winner: 'CT', type: 'bomb_defused' },
    { round: 3, winner: 'T', type: 'bomb_exploded' },
    { round: 4, winner: 'T', type: 'elimination' },
    { round: 5, winner: 'CT', type: 'time' },
    { round: 6, winner: 'T', type: 'elimination' },
    { round: 7, winner: 'CT', type: 'bomb_defused' },
    { round: 8, winner: 'T', type: 'bomb_exploded' },
    { round: 9, winner: 'T', type: 'elimination' },
    { round: 10, winner: 'CT', type: 'elimination' },
    { round: 11, winner: 'T', type: 'bomb_exploded' },
    { round: 12, winner: 'CT', type: 'bomb_defused' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 115));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getRoundIcon = (type: string) => {
    switch (type) {
      case 'elimination': return 'Skull';
      case 'bomb_exploded': return 'Bomb';
      case 'bomb_defused': return 'Shield';
      case 'time': return 'Clock';
      default: return 'Circle';
    }
  };

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-red-900/20 to-blue-900/20 border-border/50 p-6">
        <div className="flex items-center justify-between mb-6">
          <Badge className="bg-red-600 animate-pulse">LIVE</Badge>
          <div className="text-center">
            <div className="text-sm text-muted-foreground mb-1">de_inferno • 2v2</div>
            <div className="text-4xl font-bold">
              <span className="text-yellow-500">{scoreT}</span>
              <span className="text-muted-foreground mx-4">-</span>
              <span className="text-blue-400">{scoreCT}</span>
            </div>
            <div className="text-sm text-muted-foreground mt-1">Round {currentRound}/24</div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary">{formatTime(timeLeft)}</div>
            <div className="text-xs text-muted-foreground">Time Left</div>
          </div>
        </div>

        <div className="flex gap-2 mb-4">
          {roundHistory.map((r) => (
            <div
              key={r.round}
              className={`flex-1 h-2 rounded-full ${
                r.winner === 'T' ? 'bg-yellow-500' : 'bg-blue-500'
              }`}
              title={`Round ${r.round}: ${r.winner} won by ${r.type}`}
            />
          ))}
        </div>

        <Progress value={(currentRound / 24) * 100} className="h-1" />
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Tabs defaultValue="scoreboard" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="scoreboard">
                <Icon name="BarChart3" size={16} className="mr-2" />
                Scoreboard
              </TabsTrigger>
              <TabsTrigger value="killfeed">
                <Icon name="Crosshair" size={16} className="mr-2" />
                Kill Feed
              </TabsTrigger>
              <TabsTrigger value="rounds">
                <Icon name="Activity" size={16} className="mr-2" />
                Rounds
              </TabsTrigger>
            </TabsList>

            <TabsContent value="scoreboard">
              <Card className="bg-card border-border/50">
                <div className="p-4 border-b border-yellow-500/30 bg-yellow-500/10">
                  <h3 className="font-bold flex items-center gap-2">
                    <span className="text-2xl">💀</span>
                    Terrorists ({scoreT})
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b border-border/30">
                      <tr className="text-left text-xs text-muted-foreground">
                        <th className="p-3">Player</th>
                        <th className="p-3 text-center">K</th>
                        <th className="p-3 text-center">D</th>
                        <th className="p-3 text-center">A</th>
                        <th className="p-3 text-center">ADR</th>
                        <th className="p-3 text-center">HS%</th>
                      </tr>
                    </thead>
                    <tbody>
                      {teamT.map((player, idx) => (
                        <tr key={idx} className="border-b border-border/20 hover:bg-muted/50">
                          <td className="p-3 font-semibold text-primary">{player.name}</td>
                          <td className="p-3 text-center text-green-500 font-bold">{player.kills}</td>
                          <td className="p-3 text-center text-red-500 font-bold">{player.deaths}</td>
                          <td className="p-3 text-center text-blue-400">{player.assists}</td>
                          <td className="p-3 text-center">{player.adr}</td>
                          <td className="p-3 text-center">{player.hs}%</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="p-4 border-b border-blue-500/30 bg-blue-500/10 mt-4">
                  <h3 className="font-bold flex items-center gap-2">
                    <span className="text-2xl">🛡️</span>
                    Counter-Terrorists ({scoreCT})
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b border-border/30">
                      <tr className="text-left text-xs text-muted-foreground">
                        <th className="p-3">Player</th>
                        <th className="p-3 text-center">K</th>
                        <th className="p-3 text-center">D</th>
                        <th className="p-3 text-center">A</th>
                        <th className="p-3 text-center">ADR</th>
                        <th className="p-3 text-center">HS%</th>
                      </tr>
                    </thead>
                    <tbody>
                      {teamCT.map((player, idx) => (
                        <tr key={idx} className="border-b border-border/20 hover:bg-muted/50">
                          <td className="p-3 font-semibold text-primary">{player.name}</td>
                          <td className="p-3 text-center text-green-500 font-bold">{player.kills}</td>
                          <td className="p-3 text-center text-red-500 font-bold">{player.deaths}</td>
                          <td className="p-3 text-center text-blue-400">{player.assists}</td>
                          <td className="p-3 text-center">{player.adr}</td>
                          <td className="p-3 text-center">{player.hs}%</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="killfeed">
              <Card className="bg-card border-border/50 p-4">
                <div className="space-y-3">
                  {killFeed.map((kill) => (
                    <div
                      key={kill.id}
                      className="flex items-center justify-between p-3 rounded-lg bg-secondary border border-border/50"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-muted-foreground w-12">{kill.time}</span>
                        <span className="font-semibold text-primary">{kill.killer}</span>
                        <Icon name="Crosshair" size={16} className="text-red-500" />
                        {kill.headshot && (
                          <Icon name="Target" size={16} className="text-yellow-500" />
                        )}
                        <span className="text-xs bg-muted px-2 py-1 rounded">{kill.weapon}</span>
                      </div>
                      <span className="text-muted-foreground">{kill.victim}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="rounds">
              <Card className="bg-card border-border/50 p-4">
                <div className="grid grid-cols-6 gap-2">
                  {roundHistory.map((round) => (
                    <div
                      key={round.round}
                      className={`p-4 rounded-lg border-2 ${
                        round.winner === 'T'
                          ? 'bg-yellow-500/10 border-yellow-500/50'
                          : 'bg-blue-500/10 border-blue-500/50'
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground mb-1">R{round.round}</div>
                        <Icon
                          name={getRoundIcon(round.type) as any}
                          size={20}
                          className={round.winner === 'T' ? 'text-yellow-500 mx-auto' : 'text-blue-500 mx-auto'}
                        />
                        <div className="text-xs font-bold mt-1">
                          {round.winner}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card className="bg-card border-border/50 p-4">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <Icon name="Info" size={18} className="text-primary" />
              Match Info
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Server</span>
                <span className="font-semibold">EU-West #47</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tickrate</span>
                <span className="font-semibold">128 tick</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Format</span>
                <span className="font-semibold">MR12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Started</span>
                <span className="font-semibold">8 mins ago</span>
              </div>
            </div>
          </Card>

          <Card className="bg-card border-border/50 p-4">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <Icon name="TrendingUp" size={18} className="text-primary" />
              Live Stats
            </h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Total Kills</span>
                  <span className="font-bold">63</span>
                </div>
                <Progress value={65} className="h-1" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Headshots</span>
                  <span className="font-bold">57%</span>
                </div>
                <Progress value={57} className="h-1 [&>div]:bg-yellow-500" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Clutches</span>
                  <span className="font-bold">4</span>
                </div>
                <Progress value={40} className="h-1 [&>div]:bg-green-500" />
              </div>
            </div>
          </Card>

          <Card className="bg-card border-border/50 p-4">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <Icon name="Users" size={18} className="text-primary" />
              Spectators (12)
            </h3>
            <div className="space-y-2 text-sm">
              {['Esoterik666', 'bmg21', 'amphetamin', 'The Devil...', 'Hicoo'].map((name, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>{name}</span>
                </div>
              ))}
              <div className="text-xs text-muted-foreground mt-2">+7 more watching</div>
            </div>
          </Card>

          <Button className="w-full bg-red-600 hover:bg-red-700" size="lg">
            <Icon name="Share2" size={18} className="mr-2" />
            Share Match
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MatchDetails;
