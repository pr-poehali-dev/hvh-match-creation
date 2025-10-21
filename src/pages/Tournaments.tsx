import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Tournament {
  id: number;
  name: string;
  mode: string;
  prize: string;
  players: string;
  startDate: string;
  status: 'live' | 'upcoming' | 'registration';
}

const Tournaments = () => {
  const tournaments: Tournament[] = [
    { 
      id: 1, 
      name: 'Winter HvH Championship 2024', 
      mode: '5v5', 
      prize: '$2,500', 
      players: '32/32', 
      startDate: 'Dec 25, 2024',
      status: 'live'
    },
    { 
      id: 2, 
      name: 'New Year 1v1 Tournament', 
      mode: '1v1', 
      prize: '$1,000', 
      players: '48/64', 
      startDate: 'Jan 1, 2025',
      status: 'registration'
    },
    { 
      id: 3, 
      name: 'Weekly 2v2 Cup #47', 
      mode: '2v2', 
      prize: '$500', 
      players: '24/32', 
      startDate: 'Dec 28, 2024',
      status: 'registration'
    },
    { 
      id: 4, 
      name: 'Pro League Season 3', 
      mode: '3v3', 
      prize: '$5,000', 
      players: '16/16', 
      startDate: 'Jan 15, 2025',
      status: 'upcoming'
    },
  ];

  const getStatusBadge = (status: Tournament['status']) => {
    switch (status) {
      case 'live':
        return <Badge className="bg-red-600 animate-pulse">LIVE NOW</Badge>;
      case 'registration':
        return <Badge className="bg-green-600">OPEN REGISTRATION</Badge>;
      case 'upcoming':
        return <Badge variant="outline">UPCOMING</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold mb-2">Tournaments</h2>
          <p className="text-muted-foreground">Compete for prizes and glory</p>
        </div>
        <Button className="bg-primary text-primary-foreground">
          <Icon name="Plus" size={18} className="mr-2" />
          Create Tournament
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {tournaments.map((tournament) => (
          <Card key={tournament.id} className="bg-card border-border/50 hover:border-primary/50 transition-colors">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name="Trophy" size={28} className="text-primary" />
                    <h3 className="text-2xl font-bold">{tournament.name}</h3>
                  </div>
                  {getStatusBadge(tournament.status)}
                </div>
                {tournament.status === 'registration' && (
                  <Button className="bg-primary text-primary-foreground">
                    Join Tournament
                  </Button>
                )}
                {tournament.status === 'live' && (
                  <Button variant="outline">
                    <Icon name="Eye" size={18} className="mr-2" />
                    Watch Live
                  </Button>
                )}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Prize Pool</div>
                  <div className="text-xl font-bold text-primary">{tournament.prize}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Mode</div>
                  <div className="text-xl font-bold">{tournament.mode}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Players</div>
                  <div className="text-xl font-bold">{tournament.players}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Start Date</div>
                  <div className="text-xl font-bold">{tournament.startDate}</div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="bg-card border-border/50 p-6">
        <h3 className="text-xl font-bold mb-4">Tournament Rules</h3>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2">
            <Icon name="Check" size={20} className="text-green-500 shrink-0 mt-0.5" />
            <span>All matches must be played on official servers</span>
          </li>
          <li className="flex items-start gap-2">
            <Icon name="Check" size={20} className="text-green-500 shrink-0 mt-0.5" />
            <span>Players must be available at scheduled match times</span>
          </li>
          <li className="flex items-start gap-2">
            <Icon name="Check" size={20} className="text-green-500 shrink-0 mt-0.5" />
            <span>HvH configs must follow tournament specifications</span>
          </li>
          <li className="flex items-start gap-2">
            <Icon name="Check" size={20} className="text-green-500 shrink-0 mt-0.5" />
            <span>Disputes will be resolved by tournament admins</span>
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default Tournaments;
