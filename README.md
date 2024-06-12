### Updated `README.md` for the Unsplash Images App

---

## Unsplash Images App

The Unsplash Images App is a sophisticated React application that leverages the Unsplash API to fetch and display a gallery of high-quality images based on user search input. It features dark mode toggling, search functionality, and utilizes React Query for efficient data fetching and state management.

### Figma Design

Explore the UI design on Figma to understand the visual structure of the Unsplash Images App:
[View Design](https://www.figma.com/file/O2MaAAlr4nznh7m53azatL/Unsplash-images?node-id=0%3A1&t=cYDOCgqOs9IX2If0-1)

### Installation and Setup

To set up the Unsplash Images App locally, follow these steps:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/jocruz/Unsplash-Images.git
   cd Unsplash-Images
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start the Development Server**
   ```bash
   npm run dev
   ```

### Features

- **Dynamic Image Gallery**: Fetches and displays images from Unsplash based on user queries.
- **Dark Mode Toggle**: Allows users to switch between light and dark themes.
- **Responsive Design**: Adapts seamlessly across different devices and screen sizes.

### Technical Details

- **React Query**: Handles API data fetching, caching, and synchronization.
- **Context API**: Manages global state across the application for theme and search queries.
- **React Icons**: Enhances the UI with accessible icons for a better user experience.

### Code Snippets

#### App Component Setup
```jsx
import Gallery from "./Gallery";
import SearchForm from "./SearchForm";
import ThemeToggle from "./ThemeToggle";

const App = () => {
  return (
    <main>
      <ThemeToggle />
      <SearchForm />
      <Gallery />
    </main>
  );
};

export default App;
```

#### Search and Gallery Functionality
```jsx
import { useQuery } from "@tanstack/react-query";
import React from "react";
import axios from "axios";
import { useGlobalContext } from './context';

const url = `https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_API_KEY}`;

const Gallery = () => {
  const { searchTerm } = useGlobalContext();
  const response = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTerm}`);
      return result.data;
    },
  });

  return (
    <section className="image-container">
      {response.isLoading ? (
        <h4>Loading...</h4>
      ) : response.isError ? (
        <h4>Error...</h4>
      ) : (
        response.data.results.map((item) => (
          <img src={item.urls.regular} key={item.id} alt={item.alt_description} className="img" />
        ))
      )}
    </section>
  );
};

export default Gallery;
```

### Deployment

Deploy your application to Netlify and ensure to configure environment variables for the Unsplash API key.

- **Netlify Live Site**: [Visit Live Site](https://app.netlify.com/sites/soft-tulumba-806a9b/overview)

---
