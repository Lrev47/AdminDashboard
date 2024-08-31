import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import financialApi from "../api/financialApi";

const initialState = {
  accounts: [],
  transactions: [],
  budgets: [],
  categories: [],
  reports: [],
  goals: [],
  investments: [],
  account: null,
  transaction: null,
  budget: null,
  category: null,
  report: null,
  goal: null,
  investment: null,
  loading: false,
  error: null,
};

// Async thunks for the API actions
export const fetchAllAccounts = createAsyncThunk(
  "finance/fetchAllAccounts",
  async (_, { rejectWithValue }) => {
    const response = await financialApi.getAllAccounts();
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchAccountById = createAsyncThunk(
  "finance/fetchAccountById",
  async (id, { rejectWithValue }) => {
    const response = await financialApi.getAccount(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const createNewAccount = createAsyncThunk(
  "finance/createNewAccount",
  async (accountData, { rejectWithValue }) => {
    const response = await financialApi.createAccount(accountData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const updateAccountById = createAsyncThunk(
  "finance/updateAccountById",
  async ({ id, accountData }, { rejectWithValue }) => {
    const response = await financialApi.updateAccount(id, accountData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const deleteAccountById = createAsyncThunk(
  "finance/deleteAccountById",
  async (id, { rejectWithValue }) => {
    const response = await financialApi.deleteAccount(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchAllTransactions = createAsyncThunk(
  "finance/fetchAllTransactions",
  async (_, { rejectWithValue }) => {
    const response = await financialApi.getAllTransactions();
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchTransactionById = createAsyncThunk(
  "finance/fetchTransactionById",
  async (id, { rejectWithValue }) => {
    const response = await financialApi.getTransaction(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const createNewTransaction = createAsyncThunk(
  "finance/createNewTransaction",
  async (transactionData, { rejectWithValue }) => {
    const response = await financialApi.createTransaction(transactionData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const updateTransactionById = createAsyncThunk(
  "finance/updateTransactionById",
  async ({ id, transactionData }, { rejectWithValue }) => {
    const response = await financialApi.updateTransaction(id, transactionData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const deleteTransactionById = createAsyncThunk(
  "finance/deleteTransactionById",
  async (id, { rejectWithValue }) => {
    const response = await financialApi.deleteTransaction(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchAllBudgets = createAsyncThunk(
  "finance/fetchAllBudgets",
  async (_, { rejectWithValue }) => {
    const response = await financialApi.getAllBudgets();
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchBudgetById = createAsyncThunk(
  "finance/fetchBudgetById",
  async (id, { rejectWithValue }) => {
    const response = await financialApi.getBudget(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const createNewBudget = createAsyncThunk(
  "finance/createNewBudget",
  async (budgetData, { rejectWithValue }) => {
    const response = await financialApi.createBudget(budgetData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const updateBudgetById = createAsyncThunk(
  "finance/updateBudgetById",
  async ({ id, budgetData }, { rejectWithValue }) => {
    const response = await financialApi.updateBudget(id, budgetData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const deleteBudgetById = createAsyncThunk(
  "finance/deleteBudgetById",
  async (id, { rejectWithValue }) => {
    const response = await financialApi.deleteBudget(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchAllCategories = createAsyncThunk(
  "finance/fetchAllCategories",
  async (_, { rejectWithValue }) => {
    const response = await financialApi.getAllCategories();
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const createNewCategory = createAsyncThunk(
  "finance/createNewCategory",
  async (categoryData, { rejectWithValue }) => {
    const response = await financialApi.createCategory(categoryData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const updateCategoryById = createAsyncThunk(
  "finance/updateCategoryById",
  async ({ id, categoryData }, { rejectWithValue }) => {
    const response = await financialApi.updateCategory(id, categoryData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const deleteCategoryById = createAsyncThunk(
  "finance/deleteCategoryById",
  async (id, { rejectWithValue }) => {
    const response = await financialApi.deleteCategory(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchAllReports = createAsyncThunk(
  "finance/fetchAllReports",
  async (_, { rejectWithValue }) => {
    const response = await financialApi.getAllReports();
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const createNewReport = createAsyncThunk(
  "finance/createNewReport",
  async (reportData, { rejectWithValue }) => {
    const response = await financialApi.createReport(reportData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchAllGoals = createAsyncThunk(
  "finance/fetchAllGoals",
  async (_, { rejectWithValue }) => {
    const response = await financialApi.getAllGoals();
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const createNewGoal = createAsyncThunk(
  "finance/createNewGoal",
  async (goalData, { rejectWithValue }) => {
    const response = await financialApi.createGoal(goalData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const updateGoalById = createAsyncThunk(
  "finance/updateGoalById",
  async ({ id, goalData }, { rejectWithValue }) => {
    const response = await financialApi.updateGoal(id, goalData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const deleteGoalById = createAsyncThunk(
  "finance/deleteGoalById",
  async (id, { rejectWithValue }) => {
    const response = await financialApi.deleteGoal(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const fetchAllInvestments = createAsyncThunk(
  "finance/fetchAllInvestments",
  async (_, { rejectWithValue }) => {
    const response = await financialApi.getAllInvestments();
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const createNewInvestment = createAsyncThunk(
  "finance/createNewInvestment",
  async (investmentData, { rejectWithValue }) => {
    const response = await financialApi.createInvestment(investmentData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const updateInvestmentById = createAsyncThunk(
  "finance/updateInvestmentById",
  async ({ id, investmentData }, { rejectWithValue }) => {
    const response = await financialApi.updateInvestment(id, investmentData);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

export const deleteInvestmentById = createAsyncThunk(
  "finance/deleteInvestmentById",
  async (id, { rejectWithValue }) => {
    const response = await financialApi.deleteInvestment(id);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.error);
    }
  }
);

const financeSlice = createSlice({
  name: "finance",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllAccounts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllAccounts.fulfilled, (state, action) => {
        state.loading = false;
        state.accounts = action.payload;
      })
      .addCase(fetchAllAccounts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchAccountById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAccountById.fulfilled, (state, action) => {
        state.loading = false;
        state.account = action.payload;
      })
      .addCase(fetchAccountById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createNewAccount.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createNewAccount.fulfilled, (state, action) => {
        state.loading = false;
        state.accounts.push(action.payload);
      })
      .addCase(createNewAccount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateAccountById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateAccountById.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.accounts.findIndex(
          (account) => account.id === action.payload.id
        );
        if (index !== -1) {
          state.accounts[index] = action.payload;
        }
      })
      .addCase(updateAccountById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteAccountById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteAccountById.fulfilled, (state, action) => {
        state.loading = false;
        state.accounts = state.accounts.filter(
          (account) => account.id !== action.meta.arg
        );
      })
      .addCase(deleteAccountById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    // Similar reducers for Transactions, Budgets, Categories, Reports, Goals, and Investments
    // Handle pending, fulfilled, and rejected states for each CRUD operation
  },
});

export default financeSlice.reducer;
