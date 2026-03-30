import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '../components/ui/alert';
import { Footer } from '../components/layout/footer';

export function SearchPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 container mx-auto px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <Alert className="border-yellow-200 bg-yellow-50">
            <AlertCircle className="h-5 w-5 text-yellow-600" />
            <AlertDescription className="text-yellow-800 ml-3">
              <h2 className="font-semibold text-lg mb-2">Search Page - Under Development</h2>
              <p>This page is currently being developed. Content will be added soon.</p>
            </AlertDescription>
          </Alert>
        </div>
      </div>
      <Footer />
    </div>
  );
}
