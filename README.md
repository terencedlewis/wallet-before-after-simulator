# Wallet Before / After Simulator

[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-20232A?logo=react)](https://react.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-f7df1e?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Repo](https://img.shields.io/badge/GitHub-wallet--before--after--simulator-181717?logo=github)](https://github.com/terencedlewis/wallet-before-after-simulator)

## Product Requirement Mini Document

### Product Statement
Wallet Before / After Simulator helps users preview the financial impact of Web3 transactions before they confirm them. The app calculates projected post-transaction balance using amount and gas fee inputs, then explains outcomes in plain language so users can make safer decisions.

### Epic
Build a lightweight transaction impact simulator that improves user confidence and reduces accidental overspending in Web3 flows.

### Goals
- Show clear before/after wallet state for common actions.
- Explain transaction effects in simple, non-technical text.
- Alert users when a transaction may overdraw balance.

### Non-Goals
- Executing real blockchain transactions.
- Wallet connection/authentication.
- Live on-chain gas estimation.

## Features
- Before card showing current balance, amount, and gas fee.
- After card showing projected balance after transaction costs.
- Negative balance warning when projected balance is below zero.
- Dynamic explanation box that summarizes the calculation.
- Input controls for balance, amount, and gas fee.
- Action selector (`send`, `approve`, `swap`) with action-aware explanation text.

## User Stories
1. As a wallet user, I want to input my balance, amount, and gas fee so I can see my projected post-transaction balance before confirming.
2. As a beginner user, I want a plain-language explanation of what the transaction will do so I can understand the impact without decoding raw numbers.
3. As a cautious user, I want a warning when my projected balance goes below zero so I can avoid accidental overdraft behavior.
4. As a DeFi user, I want to switch between action types like send, approve, and swap so I can preview context-specific outcomes.

## Demo Screenshot

![Wallet Before/After Simulator Demo]<img width="1164" height="609" alt="Screenshot 2026-04-12 at 9 13 24 PM" src="https://github.com/user-attachments/assets/d0b71b99-4f3f-49ef-8bd4-0f4f59cb33b6" />


Suggested capture: include all controls plus Before, After, and Explanation panels in one frame.

## Quick Start
1. Install dependencies:
   - `npm install`
2. Run development server:
   - `npm run dev`
3. Open:
   - `http://localhost:3000`

## Tech Stack
- Next.js
- React
- JavaScript
