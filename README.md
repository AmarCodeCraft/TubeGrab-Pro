# TubeGrab Pro - YouTube Video Downloader

A modern React application for downloading YouTube videos in various formats and qualities with a sleek, glass-morphism UI design.

![TubeGrab Pro](https://via.placeholder.com/1200x630?text=TubeGrab+Pro)

## Features

- 🎬 Download YouTube videos in various formats (MP4, Audio)
- ✨ Modern glass-morphism UI with animations
- 📱 Fully responsive design for all devices
- ⚡ Lightning-fast video processing
- 🔄 Real-time download progress tracking

## Technologies Used

- **Frontend:**

  - React.js with Hooks
  - Framer Motion for animations
  - TailwindCSS for styling
  - Axios for API requests

- **Backend:**
  - Node.js/Express server
  - ytdl-core for YouTube video processing

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/youtube-downloader.git
   cd youtube-downloader
   ```

2. Install frontend dependencies:

   ```bash
   cd client
   npm install
   ```

3. Install backend dependencies:
   ```bash
   cd ../server
   npm install
   ```

### Running the Application

1. Start the backend server:

   ```bash
   cd server
   npm start
   ```

2. In a separate terminal, start the frontend development server:

   ```bash
   cd client
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

## Usage

1. Paste a YouTube video URL in the input field
2. Click "Download" to fetch video information
3. Select your preferred format and quality
4. Click "Download Now" to start the download process

## Project Structure

```
client/
├── public/              # Static files
├── src/
│   ├── assets/          # Images and other assets
│   ├── components/      # React components
│   │   ├── DownloadForm.jsx
│   │   ├── FloatingParticles.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   └── VideoInfo.jsx
│   ├── App.jsx          # Main application component
│   ├── index.css        # Global styles
│   └── main.jsx         # Entry point
├── index.html           # HTML template
└── package.json         # Project dependencies
```

## Design Features

- **Glass-morphism UI**: Modern transparent UI elements with blur effects
- **Gradient Accents**: Beautiful color gradients for visual appeal
- **Animated Elements**: Smooth transitions and micro-interactions
- **Responsive Layout**: Optimized for all screen sizes
- **Floating Particles**: Dynamic background particle system

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [ytdl-core](https://github.com/fent/node-ytdl-core) for YouTube video downloading capabilities
- [Framer Motion](https://www.framer.com/motion/) for the smooth animations
- [TailwindCSS](https://tailwindcss.com/) for the utility-first CSS framework
