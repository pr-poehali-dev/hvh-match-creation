import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  unlocked: boolean;
  progress?: number;
  maxProgress?: number;
}

const Profile = () => {
  const navigate = useNavigate();

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

  const achievements: Achievement[] = [
    { 
      id: '1', 
      name: 'First Blood', 
      description: 'Get first kill of the match 100 times', 
      icon: '🩸',
      rarity: 'common',
      unlocked: true,
      progress: 100,
      maxProgress: 100
    },
    { 
      id: '2', 
      name: 'Headhunter', 
      description: 'Get 1000 headshot kills', 
      icon: '🎯',
      rarity: 'rare',
      unlocked: true,
      progress: 1243,
      maxProgress: 1000
    },
    { 
      id: '3', 
      name: 'Ace Master', 
      description: 'Get 50 aces in competitive matches', 
      icon: '⚡',
      rarity: 'epic',
      unlocked: true,
      progress: 67,
      maxProgress: 50
    },
    { 
      id: '4', 
      name: 'Untouchable', 
      description: 'Win 10 matches without dying', 
      icon: '👑',
      rarity: 'legendary',
      unlocked: true,
      progress: 12,
      maxProgress: 10
    },
    { 
      id: '5', 
      name: 'Clutch King', 
      description: 'Win 100 clutch rounds (1vX)', 
      icon: '💪',
      rarity: 'epic',
      unlocked: false,
      progress: 78,
      maxProgress: 100
    },
    { 
      id: '6', 
      name: 'Deagle God', 
      description: 'Get 500 kills with Desert Eagle', 
      icon: '🔫',
      rarity: 'rare',
      unlocked: false,
      progress: 342,
      maxProgress: 500
    },
    { 
      id: '7', 
      name: 'AWP Veteran', 
      description: 'Get 1000 AWP kills', 
      icon: '🎖️',
      rarity: 'epic',
      unlocked: false,
      progress: 856,
      maxProgress: 1000
    },
    { 
      id: '8', 
      name: 'Champion', 
      description: 'Reach #1 on the leaderboard', 
      icon: '🏆',
      rarity: 'legendary',
      unlocked: true,
      progress: 1,
      maxProgress: 1
    },
  ];

  const getRarityColor = (rarity: Achievement['rarity']) => {
    switch (rarity) {
      case 'common': return 'border-gray-500 bg-gray-500/10';
      case 'rare': return 'border-blue-500 bg-blue-500/10';
      case 'epic': return 'border-purple-500 bg-purple-500/10';
      case 'legendary': return 'border-yellow-500 bg-yellow-500/10';
    }
  };

  const getRarityBadge = (rarity: Achievement['rarity']) => {
    switch (rarity) {
      case 'common': return 'bg-gray-600';
      case 'rare': return 'bg-blue-600';
      case 'epic': return 'bg-purple-600';
      case 'legendary': return 'bg-yellow-600';
    }
  };

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
              <span className="text-2xl">👑</span>
              <span className="text-2xl">🎯</span>
              <span className="text-2xl">⚡</span>
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
              <div className="flex items-center gap-2">
                <Icon name="Trophy" size={20} className="text-primary" />
                <span className="font-semibold">8 Achievements</span>
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

      <Tabs defaultValue="matches" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="matches">
            <Icon name="History" size={16} className="mr-2" />
            Recent Matches
          </TabsTrigger>
          <TabsTrigger value="achievements">
            <Icon name="Award" size={16} className="mr-2" />
            Achievements
          </TabsTrigger>
        </TabsList>

        <TabsContent value="matches">
          <Card className="bg-card border-border/50">
            <div className="border-b border-border/50 p-4">
              <h3 className="text-xl font-bold">Recent Matches</h3>
            </div>
            <div className="p-4">
              <div className="space-y-3">
                {recentMatches.map((match) => (
                  <div 
                    key={match.id} 
                    onClick={() => navigate(`/match/${match.id}`)}
                    className="flex items-center justify-between p-4 rounded-lg bg-secondary border border-border/50 hover:border-primary/50 transition-colors cursor-pointer"
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
        </TabsContent>

        <TabsContent value="achievements">
          <Card className="bg-card border-border/50 p-4">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold">Achievements</h3>
                <Badge variant="outline">
                  {achievements.filter(a => a.unlocked).length} / {achievements.length}
                </Badge>
              </div>
              <Progress 
                value={(achievements.filter(a => a.unlocked).length / achievements.length) * 100} 
                className="h-2"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement) => (
                <Card 
                  key={achievement.id}
                  className={`border-2 ${getRarityColor(achievement.rarity)} ${
                    achievement.unlocked ? 'opacity-100' : 'opacity-50'
                  } transition-all hover:scale-105`}
                >
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="text-4xl">{achievement.icon}</div>
                        <div>
                          <div className="font-bold flex items-center gap-2">
                            {achievement.name}
                            {achievement.unlocked && (
                              <Icon name="CheckCircle2" size={16} className="text-green-500" />
                            )}
                          </div>
                          <Badge className={`${getRarityBadge(achievement.rarity)} text-xs mt-1`}>
                            {achievement.rarity.toUpperCase()}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-3">
                      {achievement.description}
                    </p>

                    {achievement.maxProgress && (
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="font-semibold">
                            {achievement.progress} / {achievement.maxProgress}
                          </span>
                        </div>
                        <Progress 
                          value={(achievement.progress! / achievement.maxProgress) * 100} 
                          className="h-1"
                        />
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Profile;
