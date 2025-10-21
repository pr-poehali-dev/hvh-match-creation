import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

interface FindMatchModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const FindMatchModal = ({ open, onOpenChange }: FindMatchModalProps) => {
  const [selectedMode, setSelectedMode] = useState<string | null>(null);
  const [selectedMap, setSelectedMap] = useState<string | null>(null);
  const [searching, setSearching] = useState(false);
  const [searchProgress, setSearchProgress] = useState(0);

  const modes = [
    { id: '1v1', name: '1v1', players: '2 Players', icon: 'User' },
    { id: '2v2', name: '2v2', players: '4 Players', icon: 'Users' },
    { id: '3v3', name: '3v3', players: '6 Players', icon: 'Users' },
    { id: '5v5', name: '5v5', players: '10 Players', icon: 'Users' },
  ];

  const maps = [
    { id: 'de_dust2', name: 'Dust 2', preview: '🏜️' },
    { id: 'de_inferno', name: 'Inferno', preview: '🔥' },
    { id: 'de_mirage', name: 'Mirage', preview: '🏛️' },
    { id: 'de_nuke', name: 'Nuke', preview: '☢️' },
    { id: 'de_train', name: 'Train', preview: '🚂' },
    { id: 'de_ancient', name: 'Ancient', preview: '🗿' },
    { id: 'de_anubis', name: 'Anubis', preview: '🐫' },
  ];

  const handleSearch = () => {
    setSearching(true);
    setSearchProgress(0);
    
    const interval = setInterval(() => {
      setSearchProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  const handleCancel = () => {
    setSearching(false);
    setSearchProgress(0);
  };

  const handleReset = () => {
    setSelectedMode(null);
    setSelectedMap(null);
    setSearching(false);
    setSearchProgress(0);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <Icon name="Crosshair" className="text-primary" size={28} />
            Find Match
          </DialogTitle>
          <DialogDescription>
            Select your preferred game mode and map to start searching
          </DialogDescription>
        </DialogHeader>

        {!searching ? (
          <div className="space-y-6 py-4">
            <div>
              <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
                <Icon name="Gamepad2" size={16} />
                Select Mode
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {modes.map((mode) => (
                  <button
                    key={mode.id}
                    onClick={() => setSelectedMode(mode.id)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      selectedMode === mode.id
                        ? 'border-primary bg-primary/10'
                        : 'border-border hover:border-primary/50 bg-secondary'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon name={mode.icon as any} size={24} className={selectedMode === mode.id ? 'text-primary' : 'text-muted-foreground'} />
                      <div className="text-left">
                        <div className="font-bold text-lg">{mode.name}</div>
                        <div className="text-xs text-muted-foreground">{mode.players}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
                <Icon name="Map" size={16} />
                Select Map
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {maps.map((map) => (
                  <button
                    key={map.id}
                    onClick={() => setSelectedMap(map.id)}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      selectedMap === map.id
                        ? 'border-primary bg-primary/10'
                        : 'border-border hover:border-primary/50 bg-secondary'
                    }`}
                  >
                    <div className="text-3xl mb-1">{map.preview}</div>
                    <div className={`text-sm font-semibold ${selectedMap === map.id ? 'text-primary' : 'text-foreground'}`}>
                      {map.name}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-2">
              <Button
                onClick={handleSearch}
                disabled={!selectedMode || !selectedMap}
                className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                size="lg"
              >
                <Icon name="Search" size={18} className="mr-2" />
                Start Searching
              </Button>
              <Button
                onClick={handleReset}
                variant="outline"
                size="lg"
              >
                <Icon name="RotateCcw" size={18} />
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-6 py-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-4 animate-pulse">
                <Icon name="Crosshair" size={40} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Searching for opponents...</h3>
              <div className="flex items-center justify-center gap-4 mb-4">
                <Badge variant="outline" className="text-sm">
                  <Icon name="Gamepad2" size={14} className="mr-1" />
                  {modes.find(m => m.id === selectedMode)?.name}
                </Badge>
                <Badge variant="outline" className="text-sm">
                  <Icon name="Map" size={14} className="mr-1" />
                  {maps.find(m => m.id === selectedMap)?.name}
                </Badge>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Finding players...</span>
                <span className="font-semibold">{searchProgress}%</span>
              </div>
              <Progress value={searchProgress} className="h-2" />
            </div>

            <div className="bg-muted/50 rounded-lg p-4 space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Icon name="Users" size={16} className="text-green-500" />
                <span className="text-muted-foreground">144 players online</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Icon name="Globe" size={16} className="text-blue-500" />
                <span className="text-muted-foreground">Searching in EU servers</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Icon name="Timer" size={16} className="text-yellow-500" />
                <span className="text-muted-foreground">Average wait time: 45s</span>
              </div>
            </div>

            <Button
              onClick={handleCancel}
              variant="destructive"
              className="w-full"
              size="lg"
            >
              <Icon name="X" size={18} className="mr-2" />
              Cancel Search
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default FindMatchModal;
