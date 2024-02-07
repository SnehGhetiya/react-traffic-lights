# React Traffic Signal

This is a simple React application that simulates a traffic signal with three colors: red, yellow, and green. The colors change according to a predefined interval, mimicking the behavior of a real traffic light.

## Installation

1. Clone the repository:
```bash
git clone https://github.com/SnehGhetiya/react-traffic-lights.git
```
2. Navigate into the project directory:
```bash
cd react-traffic-lights
```
3. Install dependencies:
```bash
npm install
or
yarn
```
## Usage

To run the application locally, use the following command:
```bash
npm run dev
or
yarn dev
```

This will start the development server and open the application in your default web browser. You can view the traffic signal simulation and observe the colors changing at regular intervals.

## How it Works

The application uses React hooks (`useState` and `useEffect`) to manage the state of the active color and to update it at specified intervals. The traffic signal is composed of three circular elements, each representing a different color (red, yellow, green). The color changes are handled based on a predefined timing sequence.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/new-feature`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature/new-feature`)
6. Create a new Pull Request

Please ensure that your code follows the project's coding standards and includes appropriate documentation.

## License

This project is licensed under the [MIT License](LICENSE.txt).
