"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Breadcrumb: React.FC = () => {
  const pathname = usePathname();
  const pathSegments: string[] = pathname.split('/').filter(Boolean);

  // Create paths for each segment
  const createPath = (index: number) => {
    return `/${pathSegments.slice(0, index + 1).join('/')}`;
  };

  return (
    <nav className="mb-4">
      <ul className="flex space-x-1 text-lg"> {/* Increase text size here */}
        {pathSegments.map((segment: string, index: number) => {
          const isLastSegment = index === pathSegments.length - 1;

          return (
            <li key={index} className="flex items-center">
              {isLastSegment ? (
                <span className="text-red-500 font-bold">{segment}</span>
              ) : (
                <>
                  <Link href={createPath(index)}>
                    <span className="cursor-pointer hover:text-blue-500">{segment}</span>
                  </Link>
                  <span>/</span>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
