import React, { useState, useEffect } from 'react';
import { MdAdd } from 'react-icons/md';
import { CgArrowsV } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import Card from '../../../common/Card';
import SquadItem from './SquadItem';
import { useSquad } from '../../../contexts/Squad';

const MyTeams = ({ className }) => {
  const [squads, setSquads] = useSquad();
  const [myTeams, setMyTeams] = useState([]);

  const handleSelect = (squad) => {
    setMyTeams(
      myTeams.map((team) => ({
        ...team,
        selected: team.id === squad.id,
      }))
    );
  };

  const handleDelete = (squadId) => {
    const newSquads = squads.filter((squad) => squad.id !== squadId);

    setMyTeams(newSquads);
    setSquads(newSquads);
  };

  const handleOrderList = (comparationKey) => {
    const sorted = myTeams.sort((pl1, pl2) =>
      pl1[comparationKey].localeCompare(pl2[comparationKey])
    );

    setMyTeams([...sorted]);
  };

  useEffect(() => {
    if (!myTeams.length) {
      setMyTeams(squads.map((squad) => ({ ...squad, selected: false })));
    }
  }, []);

  return (
    <Card
      dataTestid="container"
      className={className}
      title="My Teams"
      RightComponent={() => (
        <Link
          to="create"
          className={cn(
            'bg-gradient-to-t from-secondary-dark',
            ' to-secondary-light text-white p-1 rounded-lg'
          )}
        >
          <MdAdd size={22} />
        </Link>
      )}
    >
      <table className="w-full">
        <thead>
          <tr className="text-base flex">
            <th>
              <button
                data-testid="order-by-name"
                type="button"
                onClick={() => handleOrderList('name')}
                className={cn(
                  'flex items-center mx-3 py-2',
                  'border-r-2 border-gray-100'
                )}
              >
                <p className="font-normal mr-5">Name</p>

                <CgArrowsV className="mx-2" />
              </button>
            </th>
            <th>
              <button
                data-testid="order-by-description"
                type="button"
                onClick={() => handleOrderList('description')}
                className="flex items-center w-full mx-3 py-2"
              >
                <p className="font-normal mr-5">Description</p>

                <CgArrowsV className="mx-2" />
              </button>
            </th>
          </tr>
        </thead>

        <tbody data-testid="squad-list">
          {myTeams.map((squad, i) => (
            <SquadItem
              dataTestid={`squad-${i}`}
              squadSelectButtonTestid={`squad-select-${i}`}
              squadDeleteButtonTestid={`squad-delete-${i}`}
              key={squad.id}
              squad={squad}
              onClick={handleSelect}
              onDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default MyTeams;
