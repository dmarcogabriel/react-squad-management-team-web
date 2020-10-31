import React from 'react';
import { useDrag } from 'react-dnd';
import cn from 'classnames';

const DraggablePlayer = ({ player }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: 'player', id: player.player_id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className={cn(
        'bg-gradient-to-t from-gray-400 to-white',
        'border-dashed border-2 rounded-sm p-3 my-2 cursor-move',
        isDragging && 'opacity-50'
      )}
    >
      <div className="flex flex-col md:flex-row justify-between">
        <p className="text-base font-bold">
          Name:
          <span className="text-primary-dark">{` ${player.fullname}`}</span>
        </p>
        <p className="text-base font-bold">
          Age:
          <span className="text-primary-dark">{` ${player.age}`}</span>
        </p>
      </div>
      <p className="text-base font-bold">
        Nacionality:
        <span className="text-primary-dark">{` ${player.nationality}`}</span>
      </p>
    </div>
  );
};

export default DraggablePlayer;
