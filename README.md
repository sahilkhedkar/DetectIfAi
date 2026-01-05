# DetectIfAI

![DetectIfAI Desktop Screenshot](./public/screenshot.png)

DetectIfAI is a high-performance, minimal web application designed to identify AI-generated images with precision. Built with a focus on clean aesthetics and speed, it leverages advanced computer vision APIs to provide probabilistic analysis of image authenticity.

Inspired by the design language of modern SaaS platforms like [dub.co](https://dub.co), DetectIfAI offers a premium user experience without the clutter.

## 🚀 Features

- **Instant Detection**: Analyze JPG, PNG, and WEBP images in seconds.
- **Drag-and-Drop**: A seamless, polished upload experience.
- **Confidence Scoring**: Visualized confidence bars and percentage breakdowns.
- **Clean Aesthetic**: Pure white background, high-contrast typography, and a mobile-responsive layout.
- **Privacy-Centric**: No accounts, no data logging—just pure detection.

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **API**: Sightengine (GenAI Detection)
- **Backend**: Node.js (Next.js API Routes)

## 💻 Local Setup

Follow these steps to get the project running on your local machine:

### 1. Clone the repository
```bash
git clone https://github.com/sahilkhedkar/DetectIfAi.git
cd DetectIfAi
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env.local` file in the root directory and add your Sightengine API keys:
```env
SIGHTENGINE_API_USER=your_api_user
SIGHTENGINE_API_SECRET=your_api_secret
```
*Note: If keys are missing, the app will run in a mock mode for demonstration purposes.*

### 4. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛡️ Disclaimer

AI detection is probabilistic and not 100% accurate. This tool is designed to assist in verification, not provide a definitive source of truth.

## 👨‍💻 Created by

Made with ❤️ by [Sahil Khedkar](https://x.com/sahilkhedkr)
