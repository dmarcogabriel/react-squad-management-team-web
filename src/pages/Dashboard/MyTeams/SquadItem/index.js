import React from 'react';
import { MdShare, MdEdit } from 'react-icons/md';
import { FaTrashAlt } from 'react-icons/fa';
import cn from 'classnames';
import { Link } from 'react-router-dom';

const SquadItem = ({
  squad,
  onClick,
  onDelete,
  dataTestid,
  squadSelectButtonTestid,
  squadDeleteButtonTestid,
}) => (
  <tr>
    <td>
      <div
        data-testid={squadSelectButtonTestid || 'squadItem'}
        role="button"
        tabIndex={0}
        onClick={() => onClick(squad)}
        onKeyDown={(e) => e.keyCode === 13 && onClick(squad)}
        className={cn(
          'relative border-b-2 border-gray-200 rounded p-2 flex w-full',
          squad.selected && 'text-primary-dark bg-primary-light'
        )}
      >
        <p data-testid={dataTestid} className="inline mr-10">
          {squad.name}
        </p>

        <p className="inline ml-2">{squad.description.substring(0, 20)}</p>

        <div
          data-testid="actionButtons"
          className={cn(
            'flex items-center absolute h-full',
            !squad.selected && 'hidden',
            'right-0 top-0 mr-3'
          )}
        >
          <button
            data-testid={squadDeleteButtonTestid || 'squadItem-delete'}
            type="button"
            onClick={() => onDelete(squad.id)}
          >
            <FaTrashAlt />
          </button>

          <button type="button" className="mx-2">
            <MdShare />
          </button>

          <Link to={`create?squadId=${squad.id}`}>
            <MdEdit />
          </Link>
        </div>
      </div>
    </td>
  </tr>
);

export default SquadItem;
