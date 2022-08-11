import produce from "../utils/produce";

export const initialState = {
    loadStocksLoading: false,
    loadStocksDone: false,
    loadStocksError: null,
    loadRanksLoading: false,
    loadRanksDone: false,
    loadRanksError: null,
    hasMoreRanks: true,
    loadYearsLoading: false,
    loadYearsDone: false,
    loadYearsError: null,
    loadQuartersLoading: false,
    loadQuartersDone: false,
    loadQuartersError: null,
    loadCalYearsLoading: false,
    loadCalYearsDone: false,
    loadCalYearsError: null,
    loadCalQuartersLoading: false,
    loadCalQuartersDone: false,
    loadCalQuartersError: null,
    loadSkillsLoading: false,
    loadSkillsDone: false,
    loadSkillsError: null,
    loadSupplysLoading: false,
    loadSupplysDone: false,
    loadSupplysError: null,
    stocks: [],
    ranks: [],
    years: {},
    quarters: {},
    calYears: {},
    calQuarters: {},
    skills: {},
    supplys: {}
};

export const LOAD_STOCKS_REQUEST = 'LOAD_STOCKS_REQUEST';
export const LOAD_STOCKS_SUCCESS = 'LOAD_STOCKS_SUCCESS';
export const LOAD_STOCKS_FAILURE = 'LOAD_STOCKS_FAILURE';
export const LOAD_RANKS_REQUEST = 'LOAD_RANKS_REQUEST';
export const LOAD_RANKS_SUCCESS = 'LOAD_RANKS_SUCCESS';
export const LOAD_RANKS_FAILURE = 'LOAD_RANKS_FAILURE';
export const LOAD_YEARS_REQUEST = 'LOAD_YEARS_REQUEST';
export const LOAD_YEARS_SUCCESS = 'LOAD_YEARS_SUCCESS';
export const LOAD_YEARS_FAILURE = 'LOAD_YEARS_FAILURE';
export const LOAD_QUARTERS_REQUEST = 'LOAD_QUARTERS_REQUEST';
export const LOAD_QUARTERS_SUCCESS = 'LOAD_QUARTERS_SUCCESS';
export const LOAD_QUARTERS_FAILURE = 'LOAD_QUARTERS_FAILURE';
export const LOAD_CAL_YEARS_REQUEST = 'LOAD_CAL_YEARS_REQUEST';
export const LOAD_CAL_YEARS_SUCCESS = 'LOAD_CAL_YEARS_SUCCESS';
export const LOAD_CAL_YEARS_FAILURE = 'LOAD_CAL_YEARS_FAILURE';
export const LOAD_CAL_QUARTERS_REQUEST = 'LOAD_CAL_QUARTERS_REQUEST';
export const LOAD_CAL_QUARTERS_SUCCESS = 'LOAD_CAL_QUARTERS_SUCCESS';
export const LOAD_CAL_QUARTERS_FAILURE = 'LOAD_CAL_QUARTERS_FAILURE';
export const LOAD_SKILLS_REQUEST = 'LOAD_SKILLS_REQUEST';
export const LOAD_SKILLS_SUCCESS = 'LOAD_SKILLS_SUCCESS';
export const LOAD_SKILLS_FAILURE = 'LOAD_SKILLS_FAILURE';
export const LOAD_SUPPLYS_REQUEST = 'LOAD_SUPPLYS_REQUEST';
export const LOAD_SUPPLYS_SUCCESS = 'LOAD_SUPPLYS_SUCCESS';
export const LOAD_SUPPLYS_FAILURE = 'LOAD_SUPPLYS_FAILURE';



const reducer = (state = initialState, action) => produce(state, (draft) => {
    switch (action.type) {
    case LOAD_STOCKS_REQUEST:
        draft.loadStocksLoading = true;
        draft.loadStocksDone = false;
        draft.loadStocksError = null;
        break;
    case LOAD_STOCKS_SUCCESS:
        draft.loadStocksLoading = false;
        draft.stocks = draft.stocks.concat(action.data);
        draft.loadStocksDone = true;
        break;
    case LOAD_STOCKS_FAILURE:
        draft.loadStocksLoading = false;
        draft.loadStocksError = action.error;
        break;
    case LOAD_RANKS_REQUEST:
        draft.loadRanksLoading = true;
        draft.loadRanksDone = false;
        draft.loadRanksError = null;
        break;
    case LOAD_RANKS_SUCCESS:
        draft.loadRanksLoading = false;
        draft.ranks = draft.ranks.concat(action.data);
        draft.loadRanksDone = true;
        draft.hasMoreRanks = draft.ranks.length < 200;
        break;
    case LOAD_RANKS_FAILURE:
        draft.loadRanksLoading = false;
        draft.loadRanksError = action.error;
        break;
    case LOAD_YEARS_REQUEST:
        draft.loadYearsLoading = true;
        draft.loadYearsDone = false;
        draft.loadYearsError = null;
        break;
    case LOAD_YEARS_SUCCESS:
        draft.loadYearsLoading = false;
        draft.years = action.data;
        draft.loadYearsDone = true;
        break;
    case LOAD_YEARS_FAILURE:
        draft.loadYearsLoading = false;
        draft.loadYearsError = action.error;
        break;
    case LOAD_QUARTERS_REQUEST:
        draft.loadQuartersLoading = true;
        draft.loadQuartersDone = false;
        draft.loadQuartersError = null;
        break;
    case LOAD_QUARTERS_SUCCESS:
        draft.loadQuartersLoading = false;
        draft.quarters = action.data;
        draft.loadQuartersDone = true;
        break;
    case LOAD_QUARTERS_FAILURE:
        draft.loadQuartersLoading = false;
        draft.loadQuartersError = action.error;
        break;
    case LOAD_CAL_YEARS_REQUEST:
        draft.loadCalYearsLoading = true;
        draft.loadCalYearsDone = false;
        draft.loadCalYearsError = null;
        break;
    case LOAD_CAL_YEARS_SUCCESS:
        draft.loadCalYearsLoading = false;
        draft.calYears = action.data;
        draft.loadCalYearsDone = true;
        break;
    case LOAD_CAL_YEARS_FAILURE:
        draft.loadCalYearsLoading = false;
        draft.loadCalYearsError = action.error;
        break;
    case LOAD_CAL_QUARTERS_REQUEST:
        draft.loadCalQuartersLoading = true;
        draft.loadCalQuartersDone = false;
        draft.loadCalQuartersError = null;
        break;
    case LOAD_CAL_QUARTERS_SUCCESS:
        draft.loadCalQuartersLoading = false;
        draft.calQuarters = action.data;
        draft.loadCalQuartersDone = true;
        break;
    case LOAD_CAL_QUARTERS_FAILURE:
        draft.loadCalQuartersLoading = false;
        draft.loadCalQuartersError = action.error;
        break;
    case LOAD_SKILLS_REQUEST:
        draft.loadSkillsLoading = true;
        draft.loadSkillsDone = false;
        draft.loadSkillsError = null;
        break;
    case LOAD_SKILLS_SUCCESS:
        draft.loadSkillsLoading = false;
        draft.skills = action.data;
        draft.loadSkillsDone = true;
        break;
    case LOAD_SKILLS_FAILURE:
        draft.loadSkillsLoading = false;
        draft.loadSkillsError = action.error;
        break;
    case LOAD_SUPPLYS_REQUEST:
        draft.loadSupplysLoading = true;
        draft.loadSupplysDone = false;
        draft.loadSupplysError = null;
        break;
    case LOAD_SUPPLYS_SUCCESS:
        draft.loadSupplysLoading = false;
        draft.supplys = action.data;
        draft.loadSupplysDone = true;
        break;
    case LOAD_SUPPLYS_FAILURE:
        draft.loadSupplysLoading = false;
        draft.loadSupplysError = action.error;
        break;
    default:
        break;
    }
});

export default reducer;