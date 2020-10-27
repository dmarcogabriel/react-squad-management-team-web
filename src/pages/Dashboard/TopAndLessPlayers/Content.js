import React from 'react';
import cn from 'classnames';
import { showPlayerInitials } from '../../../utils/playersInitials';
import PlayerAvatarPlaceholder from '../../../assets/playerAvatarPlaceholder.png';

const Content = ({ playerName, title, percentage, className }) => (
  <div className={cn('w-full p-5', className)}>
    <h2 className="font-bold text-lg text-center">{title}</h2>

    <div className="relative flex justify-center my-3">
      {playerName ? (
        <div className="relative p-12 bg-white text-primary-dark rounded-full">
          <p className="text-3xl absolute w-full h-full flex justify-center items-center top-0 left-0 right-0">
            {showPlayerInitials(playerName)}
          </p>
        </div>
      ) : (
        <div className="relative p-12 border-dashed border-2 text-primary-dark rounded-full overflow-hidden">
          <img
            className="absolute right-0 top-0 w-full h-full"
            src={PlayerAvatarPlaceholder}
            alt="Player Avatar"
          />
        </div>
      )}

      <p className="absolute right-0 top-0 text-base border-b-2 border-white pr-5">
        {percentage}
      </p>
    </div>
  </div>
);

export default Content;
