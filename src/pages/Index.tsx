import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

interface Match {
  id: number;
  team1: string;
  team2: string;
  score1: number;
  score2: number;
  mode: string;
  status: 'live' | 'upcoming' | 'completed';
}

interface Message {
  id: number;
  user: string;
  text: string;
  time: string;
  badge?: string;
}

const Index = () => {
  const navigate = useNavigate();
  const [shoutboxMessage, setShoutboxMessage] = useState('');

  const liveMatches: Match[] = [
    { id: 1, team1: 'de_inferno', team2: '', score1: 4, score2: 3, mode: '2v2', status: 'live' },
    { id: 2, team1: 'de_train', team2: '', score1: 2, score2: 1, mode: '2v2', status: 'live' },
  ];

  const shoutboxMessages: Message[] = [
    { id: 1, user: 'Malva', text: '3v3 - respect motherfucker', time: '21:43:40', badge: '👑' },
    { id: 2, user: 'The Devil wears prada', text: '', time: '21:04:22' },
    { id: 3, user: 'APIEX', text: 'perfect kz ft kto', time: '21:54:30' },
    { id: 4, user: 'Deleted User #285418', text: '@BANAN/ANS ez', time: '22:56:33' },
    { id: 5, user: 'magSterzz', text: '@TODOS LOS PERROS SE SIENTAN', time: '01:09:36' },
    { id: 6, user: 'magSterzz', text: 'https://live.staticflickr.com/2097/2136969928_a101ff2025_z.jpg', time: '01:05:47' },
  ];

  const onlineUsers = [
    'The Devil...', 'Hicoo', 'SAY YOU FA...', 'bmg21', 'on repeat 🔁', 'David Duke', 'worst', 'доктор-пш...', 
    'iPhone₆', 'SANCHEZIA...', 'no aw = no E...', 'no lw = no L...', 'myittpnomy', 'The Chance_...', 
    'debandogz...', 'lovefortea', 'Esoterik66...', 'fakeudogst', 'amphetamin...', 'no play vard...', 
    'martin klime...', 'labudabulo...', 'Sigma Schol...', 'gloriosa ba...', 'las palmas', 'тяги денек...',
    's01tru03', 'leyekil', 'HAMSTER3_'
  ];

  return (
    <div>
      <div className="bg-gradient-to-r from-green-500/20 via-green-500/10 to-green-500/20 border border-green-500/40 rounded-lg px-4 py-3 mb-6 flex items-center gap-2 glow animate-pulse backdrop-blur-sm">
        <Icon name="CheckCircle" className="text-green-400" size={20} />
        <span className="text-green-400 text-sm font-bold">CS2 queues are available again</span>
      </div>

      <Card className="relative overflow-hidden bg-gradient-to-br from-primary/30 via-orange-500/20 to-red-500/20 border-primary/50 p-8 mb-6 glow-strong">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-pulse"></div>
        <div className="relative flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-black mb-2 text-glow">
              unmatched.<span className="text-primary animate-pulse">power</span>
            </h2>
            <p className="text-foreground/90 font-medium">Enhance your experience with powerful new features.</p>
          </div>
          <Button size="lg" className="bg-gradient-to-r from-primary to-orange-500 text-black font-bold hover:scale-105 transition-transform glow">
            <Icon name="MessageCircle" size={20} className="mr-2" />
            JOIN THE DISCORD
          </Button>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-card/80 backdrop-blur-sm border-border/50 card-hover overflow-hidden">
            <div className="border-b border-primary/20 bg-gradient-to-r from-primary/10 to-transparent p-4">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Icon name="MessageSquare" className="text-primary" size={24} />
                Shoutbox
              </h3>
            </div>
            <div className="p-4">
              <ScrollArea className="h-[400px] pr-4">
                <div className="space-y-3">
                  {shoutboxMessages.map((msg) => (
                    <div key={msg.id} className="flex gap-3 text-sm">
                      <span className="text-muted-foreground shrink-0">{msg.time}</span>
                      <div className="flex-1 min-w-0">
                        <span className="font-semibold text-primary">
                          {msg.user} {msg.badge}
                        </span>
                        {msg.text && (
                          <span className="ml-2 text-foreground break-words">
                            {msg.text.startsWith('http') ? (
                              <a href={msg.text} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                                {msg.text}
                              </a>
                            ) : (
                              msg.text
                            )}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
              <div className="mt-4 flex gap-2">
                <Input
                  placeholder="Type a message here..."
                  value={shoutboxMessage}
                  onChange={(e) => setShoutboxMessage(e.target.value)}
                  className="bg-secondary border-border"
                />
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shrink-0">
                  <Icon name="Send" size={18} />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="bg-card/80 backdrop-blur-sm border-border/50 card-hover overflow-hidden">
            <div className="border-b border-green-500/20 bg-gradient-to-r from-green-500/10 to-transparent p-4">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <Icon name="Users" className="text-green-500" size={20} />
                Users online (144)
              </h3>
            </div>
            <div className="p-4">
              <ScrollArea className="h-[200px]">
                <div className="space-y-2">
                  {onlineUsers.map((user, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className={idx % 3 === 0 ? 'text-primary font-semibold' : 'text-foreground'}>
                        {user}
                      </span>
                    </div>
                  ))}
                </div>
              </ScrollArea>
              <p className="text-xs text-muted-foreground mt-3">+114 more (25 invisible)</p>
            </div>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm border-border/50 card-hover overflow-hidden">
            <div className="flex border-b border-border/50 bg-gradient-to-r from-red-500/10 to-transparent">
              <button className="flex-1 p-3 text-sm font-medium hover:bg-muted/50 transition-colors">
                <Icon name="Video" size={14} className="inline mr-1" />
                Live Streams (0)
              </button>
              <button className="flex-1 p-3 text-sm font-bold bg-gradient-to-r from-red-600 to-red-500 text-white glow">
                <Icon name="Radio" size={14} className="inline mr-1 animate-pulse" />
                Live Matches (9)
              </button>
            </div>
            <div className="p-4 space-y-4">
              {liveMatches.map((match) => (
                <Card 
                  key={match.id} 
                  onClick={() => navigate(`/match/${match.id}`)}
                  className="relative overflow-hidden bg-gradient-to-br from-secondary to-secondary/50 border-2 border-red-500/30 p-4 hover:border-red-500 hover:scale-105 transition-all cursor-pointer glow"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl"></div>
                  <div className="relative flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Icon name="Crosshair" size={20} className="text-red-500 animate-pulse" />
                      <Icon name="Users" size={20} className="text-primary" />
                    </div>
                    <Badge className="bg-gradient-to-r from-red-600 to-red-500 text-white font-bold animate-pulse glow">
                      <Icon name="Radio" size={12} className="inline mr-1" />
                      LIVE
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-lg">{match.team1}</span>
                    <Icon name="ChevronRight" size={20} />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div>
                      <span className="text-primary font-bold text-xl">{match.score1}</span>
                      <span className="text-muted-foreground mx-2">-</span>
                      <span className="text-foreground font-bold text-xl">{match.score2}</span>
                    </div>
                    <span className="text-muted-foreground">Mode: {match.mode}</span>
                  </div>
                </Card>
              ))}
            </div>
          </Card>

          <Card className="bg-[#5865F2] border-[#5865F2]">
            <div className="p-6 text-center">
              <Icon name="MessageCircle" size={48} className="mx-auto mb-3 text-white" />
              <h3 className="font-bold text-white mb-2">unmatched.gg - CS2/CS:GO HvH League</h3>
              <div className="flex items-center justify-center gap-4 text-sm text-white/90 mb-4">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  <span>7931 Members</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  <span>1241 Online</span>
                </div>
              </div>
              <Button className="w-full bg-[#4752C4] hover:bg-[#3C45A5] text-white">
                Join Discord
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;