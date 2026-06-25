import React, { useState } from 'react';

// This component currently uses hardcoded data and local state only.
// Your task is to replace the hardcoded data with real API calls
// so that it loads accounts from the backend and creates new accounts
// in MongoDB via the Express API.

const initialMockAccounts = [
  {
    _id: 'mock-1',
    name: 'Mock User One',
    email: 'mock.one@example.com',
    balance: 1000,
    currency: 'INR',
    status: 'active'
  },
  {
    _id: 'mock-2',
    name: 'Mock User Two',
    email: 'mock.two@example.com',
    balance: 500,
    currency: 'USD',
    status: 'inactive'
  }
];

function AccountDashboard() {
  const [accounts, setAccounts] = useState(initialMockAccounts);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [balance, setBalance] = useState('');
  const [currency, setCurrency] = useState('INR');

  // For the BASIC-level task, you will:
  // - Use useEffect to fetch real accounts from the backend on mount.
  // - Use your API service to POST new accounts to the backend.
  // - Add simple loading and error states.

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !balance) {
      alert('Please fill in all required fields');
      return;
    }

    // Currently, this just appends to local state.
    // Replace this logic with an API call to the backend /api/accounts POST endpoint
    // and then refresh or update the list from the response.
    const newAccount = {
      _id: `mock-${Date.now()}`,
      name,
      email,
      balance: Number(balance),
      currency,
      status: 'active'
    };

    setAccounts((prev) => [...prev, newAccount]);
    setName('');
    setEmail('');
    setBalance('');
    setCurrency('INR');
  };

  return (
    <div>
      <section style={{ marginBottom: '2rem' }}>
        <h2>Accounts</h2>
        <p>Below is a list of Skill Wallet accounts. Currently this data is mocked.</p>
        <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Balance</th>
              <th>Currency</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((acc) => (
              <tr key={acc._id}>
                <td>{acc.name}</td>
                <td>{acc.email}</td>
                <td>{acc.balance}</td>
                <td>{acc.currency}</td>
                <td>{acc.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <h2>Create New Account</h2>
        <p>This form currently only updates local state. Wire it to the backend API.</p>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxWidth: '400px' }}>
          <label>
            Name*
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Email*
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Balance*
            <input
              type="number"
              value={balance}
              onChange={(e) => setBalance(e.target.value)}
            />
          </label>
          <label>
            Currency*
            <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
              <option value="INR">INR</option>
              <option value="USD">USD</option>
            </select>
          </label>
          <button type="submit">Create Account</button>
        </form>
      </section>
    </div>
  );
}

export default AccountDashboard;
