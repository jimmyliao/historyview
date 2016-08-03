/*
 *	Author: JimmyLiao <sjliao@tw.ibm.com>
 *  Inspired by http://jpsierens.com/tutorial-gulp-javascript-2015-react/
 */

import React from 'react';
import ReactDOM from 'react-dom';
import SearchableTable from './SearchableTable';
import {data} from './data';

// Filterable CheatSheet Component
ReactDOM.render( <SearchableTable data={data}/>, document.getElementById('searchableTable') );
