/**
 * Created by feichongzheng on 17/9/25.
 */
import React from 'react';
import {FilterType} from '../../constants';
import Link from './link';

import './style.css';

const Filter = () => {
    return (
      <p className="filters">
          <Link filter={FilterType.ALL}> {FilterType.ALL} </Link>
          <Link filter={FilterType.COMPLETED}> {FilterType.COMPLETED} </Link>
          <Link filter={FilterType.UNCOMPLETED}> {FilterType.UNCOMPLETED} </Link>
      </p>
    );
};

export default Filter;