import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Rules = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold mb-2">Rules & Guidelines</h2>
        <p className="text-muted-foreground">Read carefully before participating in matches</p>
      </div>

      <Card className="bg-card border-border/50 p-6">
        <div className="flex items-start gap-4 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg mb-6">
          <Icon name="AlertTriangle" size={24} className="text-yellow-500 shrink-0" />
          <div>
            <h3 className="font-bold text-yellow-500 mb-1">Important Notice</h3>
            <p className="text-sm text-muted-foreground">
              Violation of these rules may result in temporary or permanent ban from the platform. 
              All decisions made by administrators are final.
            </p>
          </div>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="general">
            <AccordionTrigger className="text-lg font-bold">
              <div className="flex items-center gap-2">
                <Icon name="Info" size={20} className="text-primary" />
                General Rules
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Icon name="Dot" size={20} className="shrink-0 mt-0.5" />
                  <span>Players must be respectful to all community members</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Dot" size={20} className="shrink-0 mt-0.5" />
                  <span>No racism, harassment, or hate speech will be tolerated</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Dot" size={20} className="shrink-0 mt-0.5" />
                  <span>Account sharing or multi-accounting is strictly prohibited</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Dot" size={20} className="shrink-0 mt-0.5" />
                  <span>Impersonating other players or staff is not allowed</span>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="match">
            <AccordionTrigger className="text-lg font-bold">
              <div className="flex items-center gap-2">
                <Icon name="Gamepad2" size={20} className="text-primary" />
                Match Rules
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Icon name="Dot" size={20} className="shrink-0 mt-0.5" />
                  <span>All matches must be played on official unmatched.gg servers</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Dot" size={20} className="shrink-0 mt-0.5" />
                  <span>Players have 5 minutes to join the server after match starts</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Dot" size={20} className="shrink-0 mt-0.5" />
                  <span>Default match format is MR12 (first to 13 rounds)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Dot" size={20} className="shrink-0 mt-0.5" />
                  <span>Disconnect/pause abuse will result in automatic forfeit</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Dot" size={20} className="shrink-0 mt-0.5" />
                  <span>Match results are automatically recorded by the system</span>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="hvh">
            <AccordionTrigger className="text-lg font-bold">
              <div className="flex items-center gap-2">
                <Icon name="Crosshair" size={20} className="text-primary" />
                HvH Specific Rules
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Icon name="Dot" size={20} className="shrink-0 mt-0.5" />
                  <span>Only approved HvH cheats are allowed (see whitelist)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Dot" size={20} className="shrink-0 mt-0.5" />
                  <span>Config sharing is allowed and encouraged</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Dot" size={20} className="shrink-0 mt-0.5" />
                  <span>Backtracking limit: 200ms maximum</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Dot" size={20} className="shrink-0 mt-0.5" />
                  <span>Anti-aim must not break hitboxes beyond server limits</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Dot" size={20} className="shrink-0 mt-0.5" />
                  <span>Resolver scripts and lua are allowed</span>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="rating">
            <AccordionTrigger className="text-lg font-bold">
              <div className="flex items-center gap-2">
                <Icon name="TrendingUp" size={20} className="text-primary" />
                Rating System
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Icon name="Dot" size={20} className="shrink-0 mt-0.5" />
                  <span>New players start at 1500 rating (Silver tier)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Dot" size={20} className="shrink-0 mt-0.5" />
                  <span>Rating gain/loss is based on opponent rating difference</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Dot" size={20} className="shrink-0 mt-0.5" />
                  <span>Typical rating change: ±15-35 points per match</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Dot" size={20} className="shrink-0 mt-0.5" />
                  <span>Abandoning matches results in -50 rating penalty</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Dot" size={20} className="shrink-0 mt-0.5" />
                  <span>Seasonal rating resets occur every 3 months</span>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="disputes">
            <AccordionTrigger className="text-lg font-bold">
              <div className="flex items-center gap-2">
                <Icon name="Scale" size={20} className="text-primary" />
                Disputes & Appeals
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Icon name="Dot" size={20} className="shrink-0 mt-0.5" />
                  <span>All disputes must be submitted within 24 hours of the match</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Dot" size={20} className="shrink-0 mt-0.5" />
                  <span>Provide demo files and screenshots as evidence</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Dot" size={20} className="shrink-0 mt-0.5" />
                  <span>Admin decisions are reviewed and finalized within 72 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Dot" size={20} className="shrink-0 mt-0.5" />
                  <span>False reports may result in penalties</span>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="penalties">
            <AccordionTrigger className="text-lg font-bold">
              <div className="flex items-center gap-2">
                <Icon name="Ban" size={20} className="text-primary" />
                Penalties & Bans
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Icon name="Dot" size={20} className="shrink-0 mt-0.5" />
                  <span><strong className="text-foreground">Warning:</strong> First minor offense - no penalty</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Dot" size={20} className="shrink-0 mt-0.5" />
                  <span><strong className="text-foreground">Temporary Ban (24h-7d):</strong> Repeated rule violations</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Dot" size={20} className="shrink-0 mt-0.5" />
                  <span><strong className="text-foreground">Permanent Ban:</strong> Severe violations, cheating outside HvH context</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Dot" size={20} className="shrink-0 mt-0.5" />
                  <span><strong className="text-foreground">IP Ban:</strong> Ban evasion attempts</span>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Card>

      <Card className="bg-card border-border/50 p-6">
        <div className="flex items-start gap-4">
          <Icon name="HelpCircle" size={24} className="text-primary shrink-0" />
          <div>
            <h3 className="font-bold text-lg mb-2">Need Help?</h3>
            <p className="text-muted-foreground mb-4">
              If you have questions about the rules or need clarification, join our Discord server 
              or contact an administrator through the support ticket system.
            </p>
            <div className="flex gap-2">
              <a href="#" className="text-primary hover:underline text-sm font-semibold">Join Discord →</a>
              <span className="text-muted-foreground">•</span>
              <a href="#" className="text-primary hover:underline text-sm font-semibold">Create Ticket →</a>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Rules;
