import React from 'react';
import { MdAdd, MdShare, MdEdit } from 'react-icons/md';
import { CgArrowsV } from 'react-icons/cg';
import { FaTrashAlt } from 'react-icons/fa';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import Card from '../../common/Card';
import Page from '../../common/Page';

const Dashboard = () => (
  <Page>
    <Card
      className="md:mr-10"
      title="My Teams"
      RightComponent={() => (
        <Link
          to="create"
          className="bg-gradient-to-t from-secondary-dark to-secondary-light text-white p-1 rounded-lg"
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
                type="button"
                className="flex items-center mx-3 py-2 border-r-2 border-gray-200 cursor-pointer"
              >
                <p className="font-normal">Name</p>

                <CgArrowsV />
              </button>
            </th>
            <th>
              <button
                type="button"
                className="flex items-center mx-3 py-2 cursor-pointer"
              >
                <p className="font-normal">Description</p>

                <CgArrowsV />
              </button>
            </th>
          </tr>
        </thead>

        <tbody>
          {Array.from(Array(6)).map((_, i) => (
            <tr key={String(i)}>
              <td>
                <div
                  className={cn(
                    'border-b-2 border-gray-200 rounded p-2 flex justify-between cursor-pointer',
                    i === 0 && 'text-primary-dark bg-primary-light'
                  )}
                >
                  <p className="inline mr-10">Barcelona</p>

                  <p className="inline">Barcelona Squad</p>

                  <div className="flex items-center">
                    <button type="button">
                      <FaTrashAlt />
                    </button>

                    <button type="button" className="mx-2">
                      <MdShare />
                    </button>

                    <Link to="create">
                      <MdEdit />
                    </Link>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>

    <div className="flex flex-col w-full">
      <Card title="Top 5">
        <div className="flex flex-col md:flex-row mx-2">
          <div className="w-full mb-5 md:mr-8">
            <h2 className="text-base mb-3">Highest avg age</h2>

            <div className="bg-background rounded-lg p-1">
              {Array.from(Array(5)).map((_, i) => (
                <div
                  key={String(i)}
                  className="flex items-center justify-between px-4 py-2 my-1 bg-white rounded-lg"
                >
                  <p className="text-sm">Arsenal FC</p>
                  <p className="font-bold text-sm">31.2</p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full">
            <h2 className="text-base mb-3">Lowest avg age</h2>

            <div className="bg-background rounded-lg p-1">
              {Array.from(Array(5)).map((_, i) => (
                <div
                  key={String(i)}
                  className="flex items-center justify-between px-4 py-2 my-1 bg-white rounded-lg"
                >
                  <p className="text-sm">Arsenal FC</p>
                  <p className="font-bold text-sm">31.2</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      <div className="rounded-lg flex shadow-lg bg-gradient-to-t from-secondary-dark to-secondary-light text-white">
        <div className="border-r-2 border-opacity-25 border-white w-full p-5">
          <h2 className="font-bold text-lg text-center">Most picked player</h2>
          <img src="" alt="" />
          {/* // todo: implementar lógica para mostrar o jogador mais selecionado */}
          <p className="inline text-base border-b-2 border-white pr-5">25%</p>
        </div>

        <div className="w-full p-5">
          <h2 className="font-bold text-lg text-center">Less picked player</h2>
          <img src="" alt="" />
          <p className="inline text-base border-b-2 border-white pr-5">25%</p>
        </div>
      </div>
    </div>
  </Page>
);

export default Dashboard;
