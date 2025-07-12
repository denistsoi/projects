import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { MediaEntry } from '../../utils/fetchNotionDatabase';

interface MediaCardProps {
  entry: MediaEntry;
}

const Placeholder = () => (
  <div className="aspect-video w-full flex items-center justify-center bg-gray-200 text-gray-500 rounded-t-lg">
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
      <rect x="9" y="2" width="6" height="11" rx="3" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <line x1="8" x2="16" y1="22" y2="22" />
    </svg>
  </div>
);

export const MediaCard: React.FC<MediaCardProps> = ({ entry }) => {
  const [imgError, setImgError] = useState(false);
  const showPlaceholder = !entry.image || imgError;

  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
      <a href={entry.url} target="_blank" rel="noopener noreferrer" className="block">
        {showPlaceholder ? (
          <Placeholder />
        ) : (
          <div className="aspect-video w-full overflow-hidden rounded-t-lg">
            <img
              src={entry.image}
              alt={entry.title}
              className="w-full h-full object-cover"
              loading="lazy"
              onError={() => setImgError(true)}
            />
          </div>
        )}
        <CardHeader>
          <div className="flex justify-between items-start gap-2">
            <CardTitle className="text-lg line-clamp-2 flex-1">
              {entry.title}
            </CardTitle>
            <span className="text-sm text-muted-foreground font-medium bg-secondary px-2 py-1 rounded">
              {entry.year}
            </span>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="line-clamp-3">
            {entry.description}
          </CardDescription>
        </CardContent>
      </a>
    </Card>
  );
}; 