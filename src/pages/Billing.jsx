import React, { useState } from 'react';
import Layout from '../components/Layout';
import { CreditCard, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';

const Billing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  
  const plans = [
    {
      name: 'Starter',
      price: { monthly: 29, yearly: 299 },
      features: ['5,000 API queries/month', 'Basic SEO tools', '10 reports/month', 'Email support'],
      current: false
    },
    {
      name: 'Pro',
      price: { monthly: 79, yearly: 799 },
      features: ['25,000 API queries/month', 'All SEO tools', 'Unlimited reports', 'Priority support', 'Team access'],
      current: true
    },
    {
      name: 'Enterprise',
      price: { monthly: 199, yearly: 1999 },
      features: ['Unlimited API queries', 'All SEO tools', 'Unlimited reports', '24/7 support', 'Custom integrations', 'Dedicated account manager'],
      current: false
    }
  ];

  const paymentMethods = [
    {
      id: 1,
      type: 'card',
      last4: '4242',
      brand: 'Visa',
      expiry: '12/25',
      primary: true
    },
    {
      id: 2,
      type: 'card',
      last4: '8888',
      brand: 'Mastercard',
      expiry: '06/26',
      primary: false
    }
  ];

  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">Billing</h1>
          <p className="text-slate-600 dark:text-slate-400">
            Manage your subscription and payment methods
          </p>
        </div>

        {/* Current Plan */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">Current Plan</h2>
          <div className="bg-gradient-to-r from-violet-600 to-indigo-500 text-white p-6 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-1">Pro Plan</h3>
                <p className="text-violet-100">$79/month billed monthly</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-violet-100">Next billing date</p>
                <p className="font-semibold">Jan 15, 2025</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
              <p className="text-sm text-slate-600 dark:text-slate-400">API Queries Used</p>
              <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">12,347 / 25,000</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
              <p className="text-sm text-slate-600 dark:text-slate-400">Reports Generated</p>
              <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">47 / Unlimited</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
              <p className="text-sm text-slate-600 dark:text-slate-400">Team Members</p>
              <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">3 / 5</p>
            </div>
          </div>
        </div>

        {/* Upgrade Plans */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Upgrade Plan</h2>
            <div className="flex items-center space-x-2 bg-slate-100 dark:bg-slate-700 p-1 rounded-lg">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  billingCycle === 'monthly'
                    ? 'bg-white dark:bg-slate-600 text-slate-900 dark:text-slate-100'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  billingCycle === 'yearly'
                    ? 'bg-white dark:bg-slate-600 text-slate-900 dark:text-slate-100'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                Yearly (Save 16%)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`p-6 rounded-xl border-2 ${
                  plan.current
                    ? 'border-violet-500 bg-violet-50 dark:bg-violet-900/20'
                    : 'border-slate-200 dark:border-slate-700 hover:border-violet-300 dark:hover:border-violet-600'
                }`}
              >
                {plan.current && (
                  <div className="flex items-center space-x-2 text-violet-600 dark:text-violet-400 mb-4">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm font-medium">Current Plan</span>
                  </div>
                )}
                
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  {plan.name}
                </h3>
                
                <div className="mb-4">
                  <span className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                    ${plan.price[billingCycle]}
                  </span>
                  <span className="text-slate-600 dark:text-slate-400">
                    /{billingCycle === 'monthly' ? 'month' : 'year'}
                  </span>
                </div>

                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-2 px-4 rounded-lg font-medium transition-all ${
                    plan.current
                      ? 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400'
                      : 'bg-gradient-to-r from-violet-600 to-indigo-500 text-white hover:from-violet-700 hover:to-indigo-600'
                  }`}
                  disabled={plan.current}
                >
                  {plan.current ? 'Current Plan' : 'Upgrade Now'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Methods */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">Payment Methods</h2>
          
          <div className="space-y-4 mb-6">
            {paymentMethods.map((method) => (
              <div key={method.id} className="flex items-center justify-between p-4 border border-slate-200 dark:border-slate-700 rounded-lg">
                <div className="flex items-center space-x-4">
                  <CreditCard className="w-8 h-8 text-slate-500" />
                  <div>
                    <p className="font-medium text-slate-900 dark:text-slate-100">
                      {method.brand} •••• {method.last4}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-500">Expires {method.expiry}</p>
                  </div>
                </div>
                {method.primary && (
                  <span className="px-2 py-1 text-xs bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-full">
                    Primary
                  </span>
                )}
              </div>
            ))}
          </div>

          <button className="flex items-center space-x-2 text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 font-medium">
            <span>Add Payment Method</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Billing History */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">Billing History</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <th className="text-left py-3 text-sm font-medium text-slate-600 dark:text-slate-400">Date</th>
                  <th className="text-left py-3 text-sm font-medium text-slate-600 dark:text-slate-400">Description</th>
                  <th className="text-left py-3 text-sm font-medium text-slate-600 dark:text-slate-400">Amount</th>
                  <th className="text-left py-3 text-sm font-medium text-slate-600 dark:text-slate-400">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100 dark:border-slate-700">
                  <td className="py-4 text-sm text-slate-900 dark:text-slate-100">Dec 15, 2024</td>
                  <td className="py-4 text-sm text-slate-900 dark:text-slate-100">Pro Plan - Monthly</td>
                  <td className="py-4 text-sm text-slate-900 dark:text-slate-100">$79.00</td>
                  <td className="py-4">
                    <span className="px-2 py-1 text-xs bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-full">
                      Paid
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-700">
                  <td className="py-4 text-sm text-slate-900 dark:text-slate-100">Nov 15, 2024</td>
                  <td className="py-4 text-sm text-slate-900 dark:text-slate-100">Pro Plan - Monthly</td>
                  <td className="py-4 text-sm text-slate-900 dark:text-slate-100">$79.00</td>
                  <td className="py-4">
                    <span className="px-2 py-1 text-xs bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-full">
                      Paid
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Billing;