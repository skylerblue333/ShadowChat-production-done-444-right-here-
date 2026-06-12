// AUTO-GENERATED DRAFT SCREEN: GameHistoryScreen
import React, { useState } from 'react';
import ThemeToggle from './components/theme-toggle';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {

/* --- injected local data stubs (replaces non-existent backend hooks) --- */
function useStubQuery<T = any>(initial?: T) {
  return { data: initial as T, isLoading: false, isPending: false, isError: false, error: null as any, refetch: () => {} };
}
function useStubMutation<T = any>() {
  return {
    mutate: (_v?: any) => {}, mutateAsync: async (_v?: any) => ({} as T),
    isLoading: false, isPending: false, isError: false, isSuccess: false, error: null as any, data: undefined as any, reset: () => {},
  };
}
/* ----------------------------------------------------------------------- */

  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface GameRecord {
  id: string;
  gameName: string;
  date: string;
  score: number;
  result: 'Win' | 'Loss' | 'Draw';
}

const GameHistoryScreen: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { data: gameHistory, isLoading, isError, error } = useStubQuery({
    search: searchTerm,
  });

  if (isLoading) {
    return <div className="container mx-auto p-4 text-center">Loading game history...</div>;
  }

  if (isError) {
    return <div className="container mx-auto p-4 text-center text-red-500">Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-center">Game History</h1>
        <ThemeToggle />
      </div>
      <div className="bg-card p-6 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row gap-4 mb-4 items-center">
          <Input
            type="text"
            placeholder="Search by game name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow"
          />
          <Button>Apply Filters</Button>
        </div>

        <Table aria-label="Game History">
          <TableHeader>
            <TableRow>
              <TableHead scope="col">Game Name</TableHead>
              <TableHead scope="col">Date</TableHead>
              <TableHead scope="col">Score</TableHead>
              <TableHead scope="col">Result</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {gameHistory?.map((record: GameRecord) => (
              <TableRow key={record.id}>
                <TableCell className="font-medium">{record.gameName}</TableCell>
                <TableCell>{record.date}</TableCell>
                <TableCell>{record.score}</TableCell>
                <TableCell>{record.result}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default GameHistoryScreen;