import { createApi, createStore } from 'effector';

export const $loanAmount = createStore(0);
export const $loanTermYear = createStore(0);
export const $loanTermMonth = createStore(0);
export const $interestRate = createStore(0);

export const { setLoanAmount } = createApi($loanAmount, {
  setLoanAmount: (state, payload: number) => payload,
});

export const { setLoanTermYear } = createApi($loanTermYear, {
  setLoanTermYear: (state, payload: number) => payload,
});

export const { setLoanTermMonth } = createApi($loanTermMonth, {
  setLoanTermMonth: (state, payload: number) => payload,
});

export const { setInterestRate } = createApi($interestRate, {
  setInterestRate: (state, payload: number) => payload,
});
