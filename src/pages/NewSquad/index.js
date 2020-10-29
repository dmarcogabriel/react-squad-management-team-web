import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { differenceInYears } from 'date-fns';
import lodash from 'lodash';
import { parseDate } from '../../utils/parseDate';
import Card from '../../common/Card';
import Page from '../../common/Page';
import TextInput from './TextInput';
import Radio from './Radio';
import Select from './Select';
import Formation from './Formation';
import api from '../../services/api';
import { FORMATION_OPTIONS, TYPE_OPTIONS } from './defaultValues';
import DraggablePlayer from './DraggablePlayer';
import { useSquad } from '../../contexts/Squad';
import { usePlayers } from '../../contexts/Players';
import Tags from './Tags';
import { validateFormation } from '../../utils/validators';

const NewSquad = ({ location, history }) => {
  const [formation, setFormation] = useState([]);
  const [typeOptions, setTypeOptions] = useState(TYPE_OPTIONS);
  const [search, setSearch] = useState('');
  const [playersList, setPlayersList] = useState([]);
  const [tags, setTags] = useState([]);
  const [playersAges, setPlayersAges] = useState([]);

  const [, squadId] = location.search.split('=');

  const [squads, setSquads] = useSquad();
  const [, setPickedPlayers] = usePlayers();

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: '',
      description: '',
      webSite: '',
      type: '',
      formationNumbers: '3-2-2-3',
    },
    validationSchema: () =>
      object().shape({
        name: string().required(),
        webSite: string().url(),
        type: string().required(),
      }),
    onSubmit: () => {
      if (!validateFormation(formation)) {
        window.alert('Ops!', 'The squad needs a formation.');
        return;
      }

      const ageAvg = lodash.mean(playersAges.filter((age) => age));

      if (squadId) {
        setSquads(
          squads.map((sq) => {
            if (sq.id === squadId) {
              return { ...sq, ...values, tags, formation, ageAvg };
            }
            return sq;
          })
        );
      } else {
        const newSquad = {
          ...values,
          formation,
          tags,
          ageAvg,
          id: String(squads.length + 1),
        };

        setSquads((oldSquads) => [...oldSquads, newSquad]);
      }

      history.goBack();
    },
  });

  const searchPlayers = async (e) => {
    setSearch(e);

    if (e.length > 3) {
      try {
        const { data } = await api.get(`players/search/${e}`, {
          params: {
            api_token:
              'pqlI1Tq7lskTWvx07VQBggFnHTMvLydscN05sbwpN3uILiAOkFVEqOZmGxT9',
          },
        });

        const responseList = data.data.map((player) => {
          let age;

          if (player.birthdate) {
            const birthdate = new Date(parseDate(player.birthdate));

            age = player.birthdate
              ? differenceInYears(new Date(), birthdate)
              : 0;
          }

          return {
            ...player,
            age,
          };
        });

        setPlayersList(responseList);
      } catch (error) {
        window.alert(
          'Error! Ops, something went wrong, please try again later.'
        );
      }
    }
  };

  const handleChangeType = (inputName, e) => {
    setTypeOptions(
      typeOptions.map((option) => ({
        ...option,
        selected: option.id === e.id,
      }))
    );

    handleChange(inputName)(e.label);
  };

  const addPlayerToList = (playerId, rowNumber, playerPosition) => {
    const foundPlayer = playersList.find(
      (player) => player.player_id === playerId
    );

    const setPlayers = (row) =>
      row.players.map((player) => {
        if (player.position === playerPosition) {
          return { ...player, player: foundPlayer };
        }
        return player;
      });

    setFormation(
      formation.map((row) => {
        if (row.id === rowNumber) {
          return { ...row, players: setPlayers(row) };
        }
        return row;
      })
    );

    setPlayersAges([...playersAges, foundPlayer.age]);

    setPickedPlayers((oldPlayers) => [...oldPlayers, foundPlayer]);
  };

  const setSquadFormation = (e) => {
    const createdFormation = e.split('-').map((rowNumber, i) => ({
      id: String(i + 1),
      rowNumber,
      players: Array.from(Array(Number(rowNumber))).map((_, j) => ({
        player: null,
        position: `pl${i + 1 + (j + 1)}`,
      })),
    }));

    // Add goalkeeper
    createdFormation.push({
      id: String(createdFormation.length + 1),
      rowNumber: 1,
      players: [
        { player: null, position: `pl${String(createdFormation.length + 1)}` },
      ],
    });

    setFormation(createdFormation);
  };

  const handleChangeFormation = (e) => {
    handleChange('formationNumbers')(e.label);

    setSquadFormation(e.label);
    setPlayersAges([]);
  };

  const showPlayerOnList = (player) => {
    let visibility = true;

    formation.forEach((row) => {
      const foundPlayer = row.players.some(
        (el) => el.player && el.player.player_id === player.player_id
      );

      if (foundPlayer) visibility = false;
    });

    return visibility;
  };

  useEffect(() => {
    if (squadId) {
      const squadFounded = squads.find((sq) => sq.id === squadId);

      setSquadFormation(squadFounded.formationNumbers);
      setTypeOptions(
        typeOptions.map((type) => ({
          ...type,
          selected: type.label === squadFounded.type,
        }))
      );

      handleChange('name')(squadFounded.name);
      handleChange('description')(squadFounded.description);
      setTags(squadFounded.tags);
      handleChange('type')(squadFounded.type);
      handleChange('webSite')(squadFounded.webSite);
      handleChange('formationNumbers')(squadFounded.formationNumbers);
      setFormation(squadFounded.formation);
    } else {
      setSquadFormation(values.formationNumbers);
    }
  }, []);

  return (
    <Page>
      <Card title="Create your team">
        <div>
          <h1 className="text-center text-gray-600 text-base mb-5">
            TEAM INFORMATION
          </h1>

          <div className="flex flex-col md:flex-row justify-center py-5 md:px-20">
            <div className="md:w-full md:px-20">
              <TextInput
                label="Team Name"
                id="teamName"
                className="my-3"
                value={values.name}
                error={errors.name}
                onChange={handleChange('name')}
              />

              <div className="h-full">
                <label htmlFor="description">
                  <p className="font-bold text-base">Description</p>

                  <textarea
                    data-testid="description"
                    id="description"
                    className="resize-none w-full my-3 p-1 border-2 border-gray-400 rounded"
                    rows="5"
                    value={values.description}
                    onChange={(e) =>
                      handleChange('description')(e.target.value)
                    }
                  />
                </label>
              </div>
            </div>

            <div className="md:w-full md:px-20">
              <TextInput
                label="Team website"
                id="teamWebSite"
                type="text"
                className="my-3"
                placeholder="https://myteam.com"
                value={values.webSite}
                error={errors.webSite}
                onChange={handleChange('webSite')}
              />

              <Radio
                label="Team type"
                options={typeOptions}
                onChange={(e) => handleChangeType('type', e)}
              />

              <Tags
                className="my-3 md:h-full"
                defaultTags={tags}
                onChange={setTags}
              />
            </div>
          </div>
        </div>

        <DndProvider backend={HTML5Backend}>
          <div className="mt-5">
            <h1 className="text-center text-gray-600 text-base">
              CONFIGURE SQUAD
            </h1>

            <div className="flex flex-col md:flex-row justify-center py-5 md:px-20">
              <div className="md:w-full md:px-20">
                <div>
                  <div className="flex items-center mb-3 justify-between md:justify-start">
                    <p
                      label="formation"
                      className="inline text-base font-bold md:mr-8"
                    >
                      Formation
                    </p>

                    <Select
                      id="formation"
                      options={FORMATION_OPTIONS}
                      value={values.formationNumbers}
                      onChange={handleChangeFormation}
                    />
                  </div>

                  <Formation
                    formation={formation}
                    onDropPlayer={addPlayerToList}
                  />
                </div>

                <button
                  type="button"
                  className="bg-gradient-to-t from-secondary-dark to-secondary-light w-full text-white text-base font-bold rounded-sm py-2 mb-5"
                  onClick={handleSubmit}
                >
                  Save
                </button>
              </div>

              <div className="md:w-full md:px-20">
                <TextInput
                  data-testid="search-input"
                  className="mb-5"
                  label="Search Players"
                  id="searchPlayers"
                  value={search}
                  onChange={searchPlayers}
                />

                <div>
                  {playersList.map(
                    (player, i) =>
                      showPlayerOnList(player) && (
                        <DraggablePlayer
                          data-testid="player"
                          key={String(i)}
                          player={player}
                        />
                      )
                  )}
                </div>
              </div>
            </div>
          </div>
        </DndProvider>
      </Card>
    </Page>
  );
};

export default NewSquad;
