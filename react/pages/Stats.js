import React, { useState, useEffect } from 'react';
import Page from '../layouts/Page';
import { useHistory } from "react-router-dom";
import { ApiRequest } from '../utility/Api';
import { AppConst } from '../Config';

const Stats = () => {
  return (
    <Page>
      <h1>Slots</h1>
    </Page>
  );
};

export default Stats;