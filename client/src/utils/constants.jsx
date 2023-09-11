//TAX YEAR
export const CURR_TAX_YEAR_2DIG = new Date().getFullYear().toString().slice(-2);
export const PREV_TAX_YEAR = new Date().getFullYear() - 1;

//PERSONAL ALLOWANCE
export const PA = Number(12570).toLocaleString()
export const IL = Number(100000).toLocaleString() //Income Limit
export const ILPA = Number(125140).toLocaleString() //adjusted net income for personal allowance