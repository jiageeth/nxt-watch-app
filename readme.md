# NxtWatch – Video Streaming Application

A responsive video streaming application inspired by platforms like YouTube. NxtWatch allows authenticated users to browse videos, explore trending and gaming content, search for videos, watch individual videos, and manage saved videos.

**Live Demo:** [Add your deployed URL here]  
**GitHub:** https://github.com/jiageeth/nxt-watch-app

---

## Features

- User authentication and protected routes using JWT tokens  
- Dynamic content via REST API integration:
  - Browse videos by category  
  - Trending videos  
  - Gaming videos  
  - Video details page  
- Search functionality to find videos  
- Saved videos list for quick access  
- Like/Dislike interactions on videos  
- Theme-based UI (light/dark mode)  
- Fully responsive design using Bootstrap  

---

## Tech Stack

- **Frontend:** React JS, JavaScript, HTML, CSS, Bootstrap  
- **Routing & State:** React Router, Context API  
- **Authentication:** JWT, Cookies, Authentication & Authorization  
- **APIs:** REST API calls for videos, categories, and video details  

---

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)  
- npm or yarn  

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jiageeth/nxt-watch-app.git
   cd nxt-watch-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables (if required):  
   Create a `.env` file in the project root and add any required variables, for example:
   ```env
   REACT_APP_API_BASE_URL=https://your-api-base-url.com
   ```

4. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

5. Open your browser and navigate to:
   ```text
   http://localhost:3000
   ```

---

## Project Structure (optional, adjust as needed)

```text
src/
  components/        # Reusable UI components
  pages/             # Page-level components (Home, Trending, Gaming, VideoItem, SavedVideos, etc.)
  context/           # Context API providers (AuthContext, ThemeContext, etc.)
  utils/             # Helper functions, API utilities
  App.js             # Main app component with routing
  index.js           # Entry point
```

---

## Authentication & Authorization

- Users log in with credentials via a form.  
- On successful login, the server returns a JWT.  
- The JWT is stored securely (e.g., in cookies or memory) and sent with subsequent API requests.  
- Protected routes redirect unauthenticated users to the login page.  

---

## API Integration

The app consumes a REST API to fetch:

- Video lists (all, trending, gaming, search results)  
- Individual video details  
- Categories  
- Saved videos, like/dislike actions  

All API calls are made using `fetch` or `axios` (depending on your implementation) from within React components or utility modules.

---

## Screenshots

Add 2–4 screenshots showing:

- Login page  
- Home page with video grid  
- Video details page  
- Saved videos / theme toggle  

Example:

```md


```

(Place images in a `screenshots/` folder and update paths accordingly.)

---

## Future Enhancements

- Add video upload functionality for creators  
- Implement comments and replies on videos  
- Add user profiles and subscriptions  
- Improve accessibility and performance  

---

## License

This project is built as part of learning and portfolio development.  
[Add your chosen license here, e.g., MIT]

---

## Contact

- **GitHub:** https://github.com/jiageeth  
- **Email:** [your-email@example.com]  
