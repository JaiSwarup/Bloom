# BioBloom - AI-Powered Sustainable Farming Solutions

## About The Project

BioBloom is a comprehensive agricultural technology platform designed to help farmers and agricultural enthusiasts make informed decisions about their farming practices. The platform combines modern web technologies with agricultural expertise to provide a suite of tools and features for sustainable farming.

## Features

- **User Authentication System**
  - Secure login and registration
  - Profile management
  - Password recovery system

- **Agricultural Insights**
  - Crop recommendations
  - Air Quality Index (AQI) monitoring
  - Weather information integration
  - Sustainable farming practices

- **Interactive Dashboard**
  - Real-time data visualization
  - Saved searches functionality
  - Customizable user experience

## Tech Stack

- **Frontend:**
  - HTML5
  - CSS3
  - JavaScript
  - Chart.js for data visualization

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (Database)

- **Additional Tools:**
  - Environmental monitoring APIs
  - Weather data integration
  - Authentication system

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)
- MongoDB

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/biobloom.git
```

2. Install NPM packages
```bash
npm install
```

3. Create a `.env` file in the root directory and add your environment variables
```env
PORT=your_port
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
SESSION_SECRET=some_secret_value
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GROQ_API_KEY=your_groq_api_key
```

4. Start the server
```bash
node server.js
```

## Project Structure

```
biobloom/
├── agrisensex/         # Agricultural sensing components
├── agrirevive/         # Core application components
├── language/           # Localization files
├── routes/            # API routes
├── crop/              # Crop-related functionality
├── public/            # Static files
└── ...
```

## Features in Detail

1. **User Management**
   - Secure authentication
   - Profile customization
   - Password reset functionality

2. **Agricultural Tools**
   - Crop recommendation system
   - Weather monitoring
   - AQI tracking
   - Sustainable farming guides

3. **Data Visualization**
   - Interactive charts
   - Real-time data updates
   - Historical data analysis

## 🚀 Getting Started with Dockerization

This project is fully Dockerized for seamless setup and consistent deployment. Follow the steps below to run the application using Docker.

---

### 🐳 Prerequisites

Make sure the following are installed on your system:

- [Docker Desktop](https://www.docker.com/products/docker-desktop)
- [Docker Compose](https://docs.docker.com/compose/install/)
- Git

---

### ▶️ Run the Application

1. **Clone the Repository**

   ```bash
   git clone https://github.com/<your-username>/Bloom.git
   cd Bloom

2. **Build and Start Docker Containers**
   ```bash
   docker-compose up --build

This will:

- Build the Docker image for the Node.js application using the Dockerfile

- Start the Node.js app and MongoDB services using docker-compose.yml

- Apply environment variables from your .env file (if configured)

- Mount persistent storage for MongoDB (as configured)

- Ensure consistent container-based environment across development and production

3. **Access the Application**

Open your browser and go to: http://localhost:3000

Replace the port if configured differently in docker-compose.yml

4. **Stop the Application**
To stop the application and remove containers:
   ```bash
    docker-compose down
To also remove volumes and networks:

    docker-compose down -v
  
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Your Name - [@yourusername](https://twitter.com/yourusername)

Project Link: [https://github.com/yourusername/biobloom](https://github.com/yourusername/biobloom)

## Acknowledgments

* [Node.js](https://nodejs.org/)
* [Express.js](https://expressjs.com/)
* [Chart.js](https://www.chartjs.org/)
* [MongoDB](https://www.mongodb.com/) 
