# Rick and Morty App

Technical test built with Next.js, TypeScript, Apollo Client and Zustand using the Rick and Morty GraphQL API.

---

## Features

- Character search with debounce
- Grid and list view modes
- Character detail page
- Favorites system with persistence
- Maximum 5 favorites
- Favorites reordering
- Species chart visualization
- Responsive design
- Loading and error handling

---

## Tech Stack

- Next.js 16
- TypeScript
- Apollo Client
- GraphQL
- Zustand
- Tailwind CSS
- Recharts

---

## Installation

Clone the repository:

```bash
git clone https://github.com/HippedTony/Next-GraphQL-RM-API.git
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

---

## Project Structure

```txt
app/
components/
graphql/
hooks/
store/
types/
```

---

## State Management

The application uses Zustand with persist middleware to manage:

- Favorites
- Favorites order
- Persistent storage

Favorites are limited to 5 items and preserve order across sessions.

---

## GraphQL

The app uses Apollo Client connected to the Rick and Morty GraphQL API.

Main queries include:

- Character list
- Character search
- Character details

---

## UI/UX Features

- Responsive layout
- Loading states
- Error states
- Empty states
- Smooth transitions

---
