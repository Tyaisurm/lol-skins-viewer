import u from 'updeep';

const DEFAULT_STATE = {
  hasLoaded: false,
  summoner: undefined,
  ownedChampionIds: [],
  champions: [],
  filters: {
    show: 'OWNED',
    name: ''
  }
};

export default function skins (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case 'RECEIVE_SKINS':
      return u({ hasLoaded: true, ...action.payload }, state);
    case 'SKINS_FILTER_NAME_CHANGE':
      return u({ filters: { name: action.payload } }, state);
    case 'SKINS_FILTER_SHOW_CHANGE':
      return u({ filters: { show: action.payload } }, state);
    default:
      return state;
  }
}
