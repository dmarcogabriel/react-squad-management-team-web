import React, { useState } from 'react';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import { MdClose } from 'react-icons/md';
import Card from '../../common/Card';
import Page from '../../common/Page';
import TextInput from './TextInput';
import AddPlayer from './AddPlayer';

const NewSquad = () => {
  const [tags, setTags] = useState([]);

  const deleteTags = (tagName) => {
    setTags(tags.filter((tag) => tag !== tagName));
  };

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: '',
      description: '',
      webSite: '',
      type: '',
      tags: '',
    },
    validationSchema: () =>
      object().shape({
        name: string().required(),
        webSite: string().url(),
        type: string().required(),
      }),
    onSubmit: () => {
      // eslint-disable-next-line
      console.log('Enviou heim');
    },
  });

  return (
    <Page>
      <Card title="Create your team">
        <div>
          <h1 className="text-center text-gray-600 text-base mb-5">
            TEAM INFORMATION
          </h1>

          <div className="flex justify-center">
            <div>
              <TextInput
                label="Team Name"
                id="teamName"
                value={values.name}
                error={errors.name}
                onChange={handleChange('name')}
              />

              <div>
                <label htmlFor="description">
                  <p className="font-bold text-base">Description</p>

                  <textarea
                    id="description"
                    className="w-full h-full p-1 border-2 border-gray-400 rounded"
                    rows="5"
                    value={values.description}
                    onChange={(e) =>
                      handleChange('description')(e.target.value)
                    }
                  />
                </label>
              </div>
            </div>

            <div>
              <TextInput
                label="Team website"
                id="teamWebSite"
                type="text"
                placeholder="https://myteam.com"
                value={values.webSite}
                error={errors.webSite}
                onChange={handleChange('webSite')}
              />

              <div>
                <p className="font-bold text-base">Team Type</p>
                <label htmlFor="teamTypeReal">
                  <input type="radio" />
                  <p className="inline text-sm">Real</p>
                </label>

                <label htmlFor="teamTypeFantasy">
                  <input type="radio" />
                  <p className="inline text-sm text-primary-dark">Fantasy</p>
                </label>
              </div>

              <div>
                <label htmlFor="tags">
                  <p className="font-bold text-base">Tags</p>

                  <div className="rounded border-2 border-gray-400">
                    <div className="flex">
                      {tags.map((tag) => (
                        <button
                          key={tag}
                          type="button"
                          className="flex justify-between items-center py-1 px-2 bg-primary-dark text-white text-sm rounded-full mx-2"
                          onClick={() => deleteTags(tag)}
                        >
                          <p className="inline mr-2">{tag}</p>

                          <MdClose />
                        </button>
                      ))}
                    </div>

                    <textarea
                      id="tags"
                      className="w-full h-full "
                      rows="3"
                      value={values.tags}
                      onKeyDown={(e) => {
                        // todo: 3.1.6 utilizar key não está dando bom
                        if (e.keyCode === 13 || e.keyCode === 186) {
                          setTags([...tags, values.tags]);
                          handleChange('tags')('');
                        } else {
                          handleChange('tags')(values.tags + e.key);
                        }
                      }}
                    />
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-center text-gray-600 text-base">
            CONFIGURE SQUAD
          </h1>

          <div className="flex">
            <div>
              <div>
                <label htmlFor="formation">
                  <p className="inline text-base font-bold">Formation</p>

                  <select id="formation">
                    <option value="test">3-4-3</option>
                  </select>
                </label>

                <div className="bg-gradient-to-t flex items-center from-secondary-dark to-secondary-light rounded-sm p-10 mb-5">
                  {Array.from(Array(11)).map((_, i) => (
                    <AddPlayer key={String(i)} />
                  ))}
                </div>
              </div>

              <button
                type="button"
                className="bg-gradient-to-t from-secondary-dark to-secondary-light w-full text-white text-base font-bold rounded-sm py-2"
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>

            <div>
              <div>
                <TextInput label="Search Players" id="searchPlayers" />
              </div>

              <div>
                {Array.from(Array(3)).map((_, i) => (
                  <div
                    key={String(i)}
                    className="bg-gradient-to-t from-gray-400 to-white border-dashed border-2 rounded-sm"
                  >
                    <div>
                      <p className="text-base font-bold">
                        Name:
                        <span className="text-primary-dark">
                          {` ${'Cristiano Ronaldo'}`}
                        </span>
                      </p>
                      <p className="text-base font-bold">
                        Age:
                        <span className="text-primary-dark">{` ${'37'}`}</span>
                      </p>
                    </div>
                    <p className="text-base font-bold">
                      Nacionality:
                      <span className="text-primary-dark">{` ${'Portugal'}`}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Page>
  );
};

export default NewSquad;
