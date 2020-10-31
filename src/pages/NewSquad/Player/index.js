import React from 'react';
import { MdAdd } from 'react-icons/md';
import cn from 'classnames';
import { useDrop } from 'react-dnd';
import { showPlayerInitials } from '../../../utils/playersInitials';

const Player = ({ className, player, onDropPlayer }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'player',
    drop: (e) => onDropPlayer(e.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const hasPlayer = () =>
    player.player
      ? 'bg-opacity-100 text-primary-dark'
      : 'bg-opacity-50 text-white border-2';

  return (
    <div
      data-testid="drop-player"
      ref={drop}
      className={cn(
        'relative rounded-full border-dashed p-8',
        'bg-white inline-block text-white',
        isOver && 'bg-opacity-100',
        hasPlayer(),
        className
      )}
    >
      <div
        className={cn(
          'absolute top-0 left-0',
          'flex items-center justify-center w-full h-full'
        )}
      >
        {player.player ? (
          <p className="text-base">
            {showPlayerInitials(player.player.display_name)}
          </p>
        ) : (
          <MdAdd size={22} />
        )}
      </div>
    </div>
  );
};

export default Player;
