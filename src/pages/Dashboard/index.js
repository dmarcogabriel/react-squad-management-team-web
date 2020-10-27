import React from 'react';
import Page from '../../common/Page';
import MyTeams from './MyTeams';
import TopAndLessPlayers from './TopAndLessPlayers';
import TopFive from './TopFive';

const Dashboard = () => {
  return (
    <Page>
      <MyTeams className="md:mr-10" />

      <div className="flex flex-col w-full">
        <TopFive />

        <TopAndLessPlayers />
      </div>
    </Page>
  );
};

export default Dashboard;
