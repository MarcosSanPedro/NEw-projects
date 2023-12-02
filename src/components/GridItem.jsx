import React, { useEffect, useRef } from 'react';

function GridItem({ content }) {
  const itemRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          itemRef.current.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    observer.observe(itemRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={itemRef} className="grid-item opacity-0">
      {content}
    </div>
  );
}

function GridContainer({ items }) {
  return (
    <div className="grid-container grid gap-4 grid-cols-3">
      {items.map((item, index) => (
        <GridItem key={index} content={item} />
      ))}
    </div>
  );
}

export default function YourApp() {
  const gridItems = [
    'Santa’s Enchanted Forest',
    'Monkey Jungle',
    'Treetop Trekking Miami',
    'Jungle Island',
    'Venetia Park',
    'The Barnacle Historic State Park',
    'Lincoln Park',
    'Everglades Safari Park',
    'Miami Seaquarium',
  ];

  return (
    <div className="text-center">
      {/* Your other components go here */}
      <div id="root" className="max-w-1280 mx-auto p-8">
        <GridContainer items={gridItems} />
      </div>
    </div>
  );
}
