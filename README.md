Pokémon Team Builder
About
Pokémon Team Builder is a React-based web app that lets users browse, filter, and build a team of up to six Pokémon, displaying key stats and team totals for strategic planning.
Features

Browse Pokémon: View a grid of Pokémon with their sprites, names, types, and base stats.
Search and Filter: Search Pokémon by name or filter by type (e.g., Fire, Grass, Water).
Team Management: Add or remove Pokémon to/from a team (max 6) with real-time stat calculations.
Responsive Design: Optimized for mobile, tablet, and desktop with a modern UI.
Dynamic Feedback: Buttons update to "Added to Team" with a visual change when selected.
Loading State: Spinning Pokéball displayed during data fetching.
Back-to-Top: Smooth-scroll button for easy navigation.

Technologies Used

React: For dynamic, component-based UI.
JavaScript (JSX): For reusable UI components.
CSS: Custom styles with light/dark theme support and responsive media queries.
PokéAPI: External API for fetching Pokémon data.
Vite: Fast build tool and development server.
HTML: Core structure of the single-page application.

Getting Started
Prerequisites

Node.js: Version 14 or higher.
npm: Node package manager (comes with Node.js).
A modern web browser (e.g., Chrome, Firefox).

Installation

Clone the Repository:
git clone https://github.com/theGautham/pokemon-team-builder.git
cd pokemon-team-builder


Install Dependencies:
npm install


Start the Development Server:
npm run dev


Open the App:Open your browser and navigate to the URL provided in the terminal (usually http://localhost:5173 for Vite).


Running the App

The app fetches Pokémon data from the PokéAPI and displays it in a grid.
Use the search bar to find Pokémon by name or filter by type using the type buttons.
Add Pokémon to your team (up to 6) by clicking "Add to Team". The button changes to "Added to Team" when selected.
View team stats in the "Your Team" section, and remove Pokémon as needed.

Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a new branch: git checkout -b feature/your-feature.
Make your changes and commit: git commit -m "Add your feature".
Push to your branch: git push origin feature/your-feature.
Open a pull request.

Please ensure your code follows the project's coding style and includes relevant tests.
Issues
Found a bug or have a feature request? Open an issue on the GitHub Issues page.
License
This project is licensed under the MIT License. See the LICENSE file for details.
