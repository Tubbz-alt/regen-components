import * as React from 'react';
import Table, { Data } from './';

export default {
  title: 'Table',
  component: Table,
};

const data: Data[] = [
  {
    name: 'Monitoring',
    type: 'Monitoring',
    date: new Date('March 15, 2020'),
    url: 'test',
  },
  {
    name: 'Issuance Documents',
    type: 'Issuance',
    date: new Date('February 10, 2020'),
    url: 'test',
  },
  {
    name: 'Project Review',
    type: 'Project Review',
    date: new Date('November 1, 2019'),
    url: 'test',
  },
];

export const mrvTable = (): JSX.Element => <Table rows={data} />;
