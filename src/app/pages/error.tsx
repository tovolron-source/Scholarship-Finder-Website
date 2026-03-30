import { useRouteError } from 'react-router';
import { AlertCircle, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router';

export function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1A2E5A] via-[#2A3E6A] to-[#1A2E5A] text-white px-4">
      <div className="max-w-md text-center space-y-6">
        <div className="flex justify-center">
          <AlertCircle className="h-16 w-16 text-[#F5A623]" />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">Oops!</h1>
          <p className="text-gray-200">Something went wrong</p>
        </div>

        <div className="bg-white/10 border border-white/20 rounded-lg p-4 text-left">
          <p className="text-sm text-gray-300">
            {error instanceof Error 
              ? error.message 
              : 'An unexpected error occurred'}
          </p>
        </div>

        <div className="flex gap-3 pt-4">
          <Button asChild className="w-full bg-[#F5A623] hover:bg-[#E69515] text-white">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
