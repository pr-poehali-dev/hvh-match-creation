import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Profile = () => {
  const recentMatches = [
    { id: 1, map: 'de_inferno', mode: '2v2', result: 'WIN', score: '16-14', date: '2h ago', rating: '+24' },
    { id: 2, map: 'de_mirage', mode: '1v1', result: 'LOSS', score: '12-16', date: '5h ago', rating: '-18' },
    { id: 3, map: 'de_dust2', mode: '2v2', result: 'WIN', score: '16-8', date: '1d ago', rating: '+32' },
    { id: 4, map: 'de_train', mode: '3v3', result: 'WIN', score: '16-12', date: '1d ago', rating: '+28' },
    { id: 5, map: 'de_nuke', mode: '2v2', result: 'LOSS', score: '14-16', date: '2d ago', rating: '-21' },
  ];

  const stats = [
    { label: 'Total Matches', value: '487', icon: 'Gamepad2' },
    { label: 'Wins', value: '298', icon: 'Trophy' },
    { label: 'Losses', value: '189', icon: 'XCircle' },
    { label: 'Win Rate', value: '61.2%', icon: 'TrendingUp' },
  ];

  return (
    <div className="space-y-6">
      <Card className="bg-card border-border/50 p-6">
        <div className="flex items-start gap-6">
          <div className="w-24 h-24 rounded-lg bg-primary/20 flex items-center justify-center">
            <Icon name="User" size={48} className="text-primary" />
          </div>
          
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-3xl font-bold">lovefortean</h2>
              <Badge className="bg-yellow-600">PRO</Badge>
              <Badge variant="outline">Rank #1</Badge>
            </div>
            <p className="text-muted-foreground mb-4">Member since Jan 2023 • Last seen 2 hours ago</p>
            
            <div className="flex gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Icon name="Target" size={20} className="text-primary" />
                <span className="font-semibold">2847 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Award" size={20} className="text-primary" />
                <span className="font-semibold">12 Tournaments Won</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Progress to next rank</span>
                <span className="font-semibold">847 / 1000 XP</span>
              </div>
              <Progress value={84.7} className="h-2" />
            </div>
          </div>

          <div className="flex gap-2">
            <Button variant="outline">
              <Icon name="Settings" size={18} className="mr-2" />
              Settings
            </Button>
            <Button className="bg-primary text-primary-foreground">
              <Icon name="MessageSquare" size={18} className="mr-2" />
              Message
            </Button>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="bg-card border-border/50 p-4">
            <div className="flex items-center justify-between mb-2">
              <Icon name={stat.icon as any} size={24} className="text-primary" />
            </div>
            <div className="text-3xl font-bold mb-1">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </Card>
        ))}
      </div>

      <Card className="bg-card border-border/50">
        <div className="border-b border-border/50 p-4">
          <h3 className="text-xl font-bold">Recent Matches</h3>
        </div>
        <div className="p-4">
          <div className="space-y-3">
            {recentMatches.map((match) => (
              <div 
                key={match.id} 
                className="flex items-center justify-between p-4 rounded-lg bg-secondary border border-border/50 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <Badge className={match.result === 'WIN' ? 'bg-green-600' : 'bg-red-600'}>
                    {match.result}
                  </Badge>
                  <div>
                    <div className="font-semibold">{match.map}</div>
                    <div className="text-sm text-muted-foreground">{match.mode}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <div className="font-bold text-lg">{match.score}</div>
                    <div className="text-sm text-muted-foreground">{match.date}</div>
                  </div>
                  <div className={`font-bold ${match.rating.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                    {match.rating}
                  </div>
                  <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Profile;
