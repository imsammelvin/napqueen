# Project Documentation: Dashboard

## Introduction

The Dashboard project is a web application developed using React, Material design and SCSS. It serves as a centralized platform for data visualization and management. The project utilizes various libraries and frameworks such as GitHub for version control and Netlify for deployment.

## Installation and Setup

To set up the project locally, follow these steps:

1. Clone the project from the GitHub repository.

   `git clone https://github.com/imsammelvin/napqueen.git`

2. Install the required dependencies using npm.

   `npm install`

   `npm start`

3. Configure any necessary environment variables.
4. Start the development server to run the application locally.

   `http://localhost:3000/`

## Project Structure

The project follows a standard React project structure, with the following main folders and files:

- `/src`: Contains the source code for the project.
- `/src/components`: Houses the reusable components used throughout the application.
- `package.json`: Lists the project's dependencies, scripts, and configuration.

## Dependencies

The project relies on the following key dependencies (version numbers indicated in the package.json file):

- `@fortawesome/fontawesome-svg-core`: Provides scalable vector icons.
- `@fortawesome/free-regular-svg-icons`: Offers a collection of regular style icons.
- `@fortawesome/free-solid-svg-icons`: Provides a selection of solid style icons.
- `@fortawesome/react-fontawesome`: Enables the usage of Font Awesome icons within React components.
- `@mui/icons-material`: Provides a set of Material-UI icons.
- `@mui/lab`: Offers experimental and additional UI components for Material-UI.
- `@mui/material`: Provides the Material-UI component library.
- `@mui/x-data-grid`: Offers a powerful grid component for displaying tabular data.
- `@testing-library/jest-dom`: Provides utilities for testing React components with Jest.
- `@testing-library/react`: Provides utilities for testing React components with Jest.
- `@testing-library/user-event`: Simulates user interactions in testing React components.
- `chart.js`: Allows for the creation of interactive and customizable charts.
- `dayjs`: A lightweight alternative to Moment.js for date and time manipulation.
- `faker`: Generates realistic dummy data for testing or prototyping.
- `mui-datatables`: Provides a customizable data table component for Material-UI.
- `react`: The core library for building the user interface.
- `react-chartjs-2`: A React wrapper for Chart.js, simplifying the usage of charts in React components.
- `react-datepicker`: Offers a flexible date picker component for React.
- `react-dom`: Provides methods for rendering React components in the browser.
- `react-icons`: Offers a collection of popular icon sets as React components.
- `react-scripts`: Provides scripts and configuration for the React development environment.
- `recharts`: A composable charting library built on React components.

## Components

## App Component

The `App` component serves as the entry point of the application. It is responsible for rendering the main layout and organizing the different components of the dashboard.

### Import Statements

```jsx
import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SuperHeader from "./SuperHeader";
```

- The `App.css` file contains the CSS styles specific to the `App` component.
- The `Dashboard`, `Header`, `Sidebar`, and `SuperHeader` components are imported to be used within the `App` component.

### Component Structure

```jsx
function App() {
  return (
    <div className="App">
      <SuperHeader />
      <div style={{ flex: 1 }}>
        <Sidebar />
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}
```

- The `App` component is a functional component defined using the arrow function syntax.
- It returns JSX elements that define the structure and layout of the application.

### JSX Elements

- `<div className="App">`: This div serves as the main container for the entire application. The `App` CSS class is applied to it, allowing for custom styling.
- `<SuperHeader />`: This component represents the super header of the application, which could contain additional global elements or branding.
- `<div style={{ flex: 1 }}>`: This div element is used to create a flex container to organize the sidebar, header, and dashboard components.
- `<Sidebar />`: This component represents the sidebar of the dashboard, typically used for navigation or displaying contextual information.
- `<Header />`: This component represents the header section of the dashboard, often containing branding, menus, or user-related information.
- `<Dashboard />`: This component represents the main content area or dashboard of the application, where the data visualization and management components are rendered.

### Export Statement

```jsx
export default App;
```

- The `App` component is exported as the default export of the file, allowing it to be imported and used in other parts of the project.

This `App` component acts as the container and orchestrator for the various components in your dashboard application. It provides the structure and layout by arranging the `SuperHeader`, `Sidebar`, `Header`, and `Dashboard` components in the desired order.

## Dashboard Component

The `Dashboard` component represents the main content area of the application where data visualization and management components are rendered.

### Import Statements

```jsx
import CampaignTable from "./CampaignTable";
import "./Dashboard.css";
import Graph from "./Graph";
```

- The `CampaignTable` component is imported to be rendered within the `Dashboard` component.
- The `./Dashboard.css` file is imported to apply custom CSS styles specific to the `Dashboard` component.
- The `Graph` component is imported to be rendered within the `Dashboard` component.

### Component Structure

```jsx
const Dashboard = () => {
  return (
    <div className="dashboard">
      <Graph />
      <CampaignTable />
    </div>
  );
};
```

- The `Dashboard` component is defined as a functional component using the arrow function syntax.
- It returns JSX elements that define the structure and layout of the dashboard.

### JSX Elements

- `<div className="dashboard">`: This div serves as the main container for the dashboard content. The `dashboard` CSS class is applied to it, allowing for custom styling.
- `<Graph />`: This component represents the graph or chart component to visualize data within the dashboard. It is rendered within the `dashboard` container.
- `<CampaignTable />`: This component represents the table component to display campaign-related data. It is also rendered within the `dashboard` container.

### Export Statement

```jsx
export default Dashboard;
```

- The `Dashboard` component is exported as the default export of the file, making it available for importing and using in other parts of the project.

The `Dashboard` component serves as the main content area where the `Graph` and `CampaignTable` components are rendered. It provides a structured layout for visualizing data and displaying campaign-related information. The component applies custom CSS styles defined in the associated `Dashboard.css` file to achieve the desired visual presentation.

By rendering the `Graph` and `CampaignTable` components within the `Dashboard` component, you create a cohesive and organized layout for presenting data and managing campaigns in your application.

Certainly! Here's the documentation for the `Graph` component:

## Graph Component

The `Graph` component represents a container for displaying graphs and associated data cards within the dashboard.

### Import Statements

```jsx
import React from "react";
import Card from "./Card";
import "./Graph.css";
import { LineBarGraph } from "./LineBarGraph";
import { LineGraph } from "./LineGraph";
```

- The `React` module is imported to enable the usage of React components and JSX syntax.
- The `Card` component is imported to render the data cards within the `Graph` component.
- The `./Graph.css` file is imported to apply custom CSS styles specific to the `Graph` component.
- The `LineBarGraph` and `LineGraph` components are imported to render the actual graph components within the data cards.

### Component Structure

```jsx
const Graph = () => {
  const data = {
    card1: {
      // Card 1 data
    },
    card2: {
      // Card 2 data
    },
    card3: {
      // Card 3 data
    },
  };

  return (
    <div
      className="container"
      style={{ overflowX: "auto", marginLeft: "180px" }}
    >
      <div className="graphs">
        <Card className="card-grow" data={data.card1}>
          <LineBarGraph />
        </Card>
        <Card className="card-grow" data={data.card2}>
          <LineGraph />
        </Card>
        <Card className="card-grow" data={data.card3}>
          <LineGraph />
        </Card>
      </div>
    </div>
  );
};
```

- The `Graph` component is defined as a functional component using the arrow function syntax.
- The `data` object holds the data for the different data cards to be rendered within the `Graph` component.

### JSX Elements

- `<div className="container" style={{ overflowX: "auto", marginLeft: "180px" }}>`: This div serves as the main container for the `Graph` component. The `container` CSS class is applied to it for custom styling. It includes a style attribute to enable horizontal scrolling and add left margin to accommodate the sidebar.
- `<div className="graphs">`: This div is a container for the individual data cards.
- `<Card className="card-grow" data={data.card1}>`: This `Card` component represents a data card and accepts the `data` prop to populate the card with the corresponding information. The `card-grow` CSS class is applied to it for custom styling. It contains the `LineBarGraph` component to render the specific graph type.
- `<Card className="card-grow" data={data.card2}>`: This `Card` component represents another data card with different data and graph type (`LineGraph`).
- `<Card className="card-grow" data={data.card3}>`: This `Card` component represents a third data card with its own data and graph type (`LineGraph`).

### Export Statement

```jsx
export default Graph;
```

- The `Graph` component is exported as the default export of the file, making it available for importing and using in other parts of the project.

The `Graph` component acts as a container for the data cards and associated graph components within the dashboard. It utilizes the `Card` component to render each data card, passing the appropriate data as props. Additionally, it includes the `LineBarGraph` and `LineGraph` components to display specific types of graphs within the data cards.

By customizing the `data` object, you can easily modify the content and configuration of the data cards and their associated graphs to suit your specific requirements.

## Sidebar Component

The `Sidebar` component represents a responsive sidebar menu in a React application.

### Import Statements

```jsx
import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Toolbar,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";
import InventoryIcon from "@mui/icons-material/Inventory";
import OrderIcon from "@mui/icons-material/PlaylistAddCheck";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CatalogIcon from "@mui/icons-material/MenuBook";
import ReportIcon from "@mui/icons-material/Assessment";
import HelpIcon from "@mui/icons-material/Help";
```

- The `React` module and `useState` hook are imported to enable the usage of React components and state management.
- Components and icons from the `@mui/material` package are imported to build the sidebar UI.
  - `Drawer` is used as the container for the sidebar.
  - `List`, `ListItem`, `ListItemIcon`, and `ListItemText` are used to create the list items in the sidebar.
  - Various icons like `DashboardIcon`, `BarChartIcon`, etc., are imported to represent different menu options.

### Component Structure

```jsx
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Drawer
      variant="permanent"
      open={isOpen}
      sx={{
        width: isOpen ? drawerWidth : 64,
        flexShrink: 0,
        transition: (theme) =>
          theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
      }}
      anchor="left"
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="toggle sidebar"
          onClick={toggleSidebar}
          edge="start"
          sx={{ mr: 2, ...(isOpen && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>
        <IconButton
          color="inherit"
          aria-label="close sidebar"
          onClick={toggleSidebar}
          edge="start"
          sx={{ mr: 2, ...(isOpen ? {} : { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <List>{/* Sidebar Menu Items */}</List>
    </Drawer>
  );
};
```

- The `Sidebar` component is defined as a functional component using the arrow function syntax.
- The state variable `isOpen` and the `setIsOpen` function are created using the `useState` hook to manage the open/close state of the sidebar.
- The `toggleSidebar` function is defined to toggle the value of `isOpen` when the sidebar is clicked.
- The `Drawer` component is used as the container for the sidebar. It is rendered with the following props:
  - `variant="permanent"`: Specifies that the sidebar should always remain visible.
  - `open={isOpen}`: Determines whether the sidebar is open or closed based on the `isOpen` state variable.
  - `sx`: Allows for custom styling of the sidebar using the `theme.transitions` object for transitions.
  - `anchor="left"`: Positions the sidebar on

the left side of the screen.

- The `Toolbar` component is used to display the toggle buttons for opening and closing the sidebar.
- Two `IconButton` components are rendered within the `Toolbar`:
  - The first button is displayed when the sidebar is closed. It triggers the `toggleSidebar` function when clicked.
  - The second button is displayed when the sidebar is open. It also triggers the `toggleSidebar` function when clicked.
- The `List` component is used to render the list of menu items in the sidebar. The menu items are defined within the `List` component.

### Menu Items

```jsx
<ListItem button>
  <ListItemIcon style={{ marginRight: "-20px" }}>
    <DashboardIcon />
  </ListItemIcon>
  {isOpen && <ListItemText primary="Dashboard" />}
</ListItem>;
{
  /* Other menu items */
}
```

- Each menu item is represented by a `ListItem` component wrapped within the `List` component.
- The `ListItem` component is rendered as a clickable button using the `button` prop.
- Within each `ListItem`, an `ListItemIcon` component is used to display an icon for the menu item.
- The icon component, such as `DashboardIcon`, represents the specific menu item.
- If the sidebar is open (`isOpen` is `true`), a `ListItemText` component is rendered with the primary text label for the menu item.

### Available Menu Options

The following icons and their corresponding menu options are included in the sidebar:

- Dashboard: Displays the dashboard icon and label.
- Charts: Displays the bar chart icon and label.
- Inventory: Displays the inventory icon and label.
- Order: Displays the order icon and label.
- Calendar: Displays the calendar icon and label.
- Catalog: Displays the catalog icon and label.
- Report: Displays the report icon and label.
- Profile: Displays the profile icon and label.
- Settings: Displays the settings icon and label.
- Help: Displays the help icon and label.

### Export

```jsx
export default Sidebar;
```

- The `Sidebar` component is exported as the default export of the file, making it available for use in other parts of the application.

This is the documentation for the edited `Sidebar` component. It provides a responsive sidebar menu with various menu options represented by icons and labels. The sidebar can be toggled open and closed using the toggle buttons.

## Header Component

The `Header` component represents the header section of a React application.

### Import Statements

```jsx
import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import DateRangePickerComponent from "./DateRangePickerComponent";
```

- The `React` module is imported to enable the usage of React components.
- The `"react-datepicker/dist/react-datepicker.css"` file is imported to apply styles to the date range picker component.
- The `DateRangePickerComponent` is imported to render the date range picker in the header.

### Component Structure

```jsx
const Header = () => {
  return (
    <div
      className="header"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "20px",
        paddingTop: "0",
        marginLeft: "160px",
        alignItems: "end",
      }}
    >
      {/* Header Left */}
      <div className="header-left">
        {/* Advertising Heading */}
        <div style={{ marginRight: "250px", paddingRight: "60px" }}>
          <h1>Advertising</h1>
        </div>

        {/* Header Controls */}
        <div
          className="header-controls"
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "10px",
          }}
        >
          {/* Marketplace Dropdown */}
          <div className="dropdown" style={{ marginRight: "20px" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label
                htmlFor="marketplace-select"
                style={{ marginRight: "110px" }}
              >
                Marketplace
              </label>
              <select
                id="marketplace-select"
                style={{
                  marginTop: "5px",
                  width: "200px",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                <option value="Amazon 977462" style={{ fontWeight: "bold" }}>
                  Amazon 977462
                </option>
              </select>
            </div>
          </div>

          {/* Ad Type Dropdown */}
          <div className="dropdown">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="ad-type-select" style={{ marginRight: "180px" }}>
                Ad type
              </label>
              <select
                id="ad-type-select"
                style={{
                  marginTop: "5px",
                  width: "200px",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                <option value="All">All</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Header Right */}
      <div className="header-right">
        <DateRangePickerComponent />
      </div>
    </div>
  );
};
```

- The `Header` component is defined as a functional component using the arrow function syntax.
- The component renders a `div` element with the class name "header". It has the following inline styles applied to it:
  - `display: flex`: Arranges the header content in a row.
  - `flexDirection: row`: Sets the direction of the flex container to horizontal.
  - `justifyContent: space-between`: Positions the content at the start and end of the container with space in between.
  - `padding: 20px`: Adds padding to the header.
  - `paddingTop: 0`: Removes top padding from the header.
  - `marginLeft: 160px`: Adds left margin to create space for the sidebar.
  - `alignItems: end`: Aligns the header content to the bottom.
- The header is divided into two sections: `header-left` and `header-right`.

#### Header Right

- The `header-right` section contains the `DateRangePickerComponent`.
- The `DateRangePickerComponent` is rendered within the `header-right` div.

### Export

```jsx
export default Header;
```

- The `Header` component is exported as the default export of the file, making it available for use in other parts of the application.

This is the documentation for the `Header` component. It represents the header section of a React application and includes the "Advertising" heading, marketplace and ad type dropdowns, and a date range picker component.

## Card Component

The `Card` component represents a card element in a React application.

### Import Statements

```jsx
import React from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { faCompress } from "@fortawesome/free-solid-svg-icons";
```

- The `React` module is imported to enable the usage of React components.
- The `Card.css` file is imported to apply custom styles to the card component.
- The `FontAwesomeIcon` component is imported from `@fortawesome/react-fontawesome` to use font icons in the card.
- The `faSquareArrowUpRight` and `faCompress` icons are imported from `@fortawesome/free-solid-svg-icons` to be used as icons within the card.

### Component Structure

```jsx
const Card = ({ children, data }) => {
  return (
    <div className="card">
      {/* Card Header */}
      <div className="card-header">
        <h2>{data.title}</h2>
        <div>
          <select style={{ marginRight: "5px" }}>
            <option>Last 7 days</option>
            {/* Add more dropdown options as needed */}
          </select>
          <FontAwesomeIcon
            icon={faCompress}
            size="xs"
            style={{ color: "#696969" }}
          />
        </div>
      </div>

      {/* Horizontal Line */}
      <hr></hr>

      {/* Card Content */}
      <div className="card-content">
        {data.data.map((item, index) => {
          return (
            <div className="data-section" key={index}>
              <p>{item.title}</p>
              <h3>
                {item.value}{" "}
                {item.icon === "FaArrowUp" ? (
                  <FontAwesomeIcon
                    icon={faSquareArrowUpRight}
                    style={{ color: "#00c165" }}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faSquareArrowUpRight}
                    style={{ color: "#ff0000" }}
                  />
                )}
              </h3>
            </div>
          );
        })}
      </div>

      {/* Horizontal Line */}
      <hr></hr>

      {/* Card Chart */}
      <div className="card-chart">{children}</div>
    </div>
  );
};
```

- The `Card` component is defined as a functional component using the arrow function syntax. It takes two props: `children` and `data`.
- The component renders a `div` element with the class name "card". This is the main container for the card component.

#### Card Header

- The card header is represented by the `div` element with the class name "card-header".
- It contains the following elements:
  - An `h2` element that displays the `data.title` value.
  - Another `div` element that contains a dropdown select element and a font icon.
    - The select element has inline styles applied to it, including a right margin of 5 pixels.
    - Inside the select element, there is an option element with the text "Last 7 days". More options can be added as needed.
    - The font icon is represented by the `FontAwesomeIcon` component, which displays the `faCompress` icon from the fontawesome library.
    - The icon has a size of "xs" (extra small) and a color of "#696969".

#### Card Content

- The card content section is represented by the `div` element with the class name "card-content".
- It contains a mapping of `data.data` array

to render a set of data sections.

- Each data section is represented by a `div` element with the class name "data-section".
- Inside each data section, there are the following elements:
  - A `p` element that displays the `item.title` value.
  - An `h3` element that displays the `item.value` value.
  - Inside the `h3` element, there is a font icon represented by the `FontAwesomeIcon` component.
    - The icon displayed depends on the value of `item.icon`. If it is equal to "FaArrowUp", the `faSquareArrowUpRight` icon is displayed with a color of "#00c165". Otherwise, the same icon is displayed with a color of "#ff0000".

#### Horizontal Line

- A horizontal line is represented by the `hr` element, which is used to visually separate the different sections of the card.

#### Card Chart

- The card chart section is represented by the `div` element with the class name "card-chart".
- It contains the `children` prop, which represents any content or components passed as children to the `Card` component.

### Export

```jsx
export default Card;
```

- The `Card` component is exported as the default export of the file, allowing it to be imported and used in other parts of the application.

This concludes the documentation for the `Card` component. It represents a customizable card element that can display a title, data sections with icons, and a chart.

## LineBarGraph Component

The `LineBarGraph` component represents a combination of a line chart and a bar chart using the `react-chartjs-2` library.

### Import Statements

```jsx
import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
```

- The `React` module is imported to enable the usage of React components.
- The `Line` component is imported from `react-chartjs-2` to render the line chart.
- The `Chart` module is imported from `chart.js/auto` to register a custom scale for the right y-axis.

### Options

```jsx
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "Revenue Chart",
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: "Ads Revenue($)",
      },
      ticks: {
        callback: (value) => `$${value}`,
      },
      grid: {
        display: false,
      },
    },
    y1: {
      beginAtZero: true,
      min: 0,
      max: 100,
      title: {
        display: true,
        text: "ACSO(%)",
      },
      position: "right",
      grid: {
        display: true,
      },
      ticks: {
        stepSize: 20,
      },
    },
  },
  layout: {
    padding: {
      right: 30, // Adjust the right padding to accommodate the right y-axis labels
    },
  },
  elements: {
    bar: {
      borderWidth: 1,
      categoryPercentage: 0.8,
      barPercentage: 0.7,
      backgroundColor: "#165DFF",
    },
    line: {
      borderWidth: 1,
      backgroundColor: "#14C9C9",
    },
    point: {
      radius: 0,
      pointStyle: "line",
    },
  },
  responsiveAnimationDuration: 0, // Disable animation for a smoother rendering
};
```

- The `options` object represents the configuration options for the line and bar chart.
- It defines various properties such as responsiveness, legends, titles, scales, layout, elements, and animation.
- The `scales` property defines three scales: `x` for the x-axis, `y` for the left y-axis (Ads Revenue), and `y1` for the right y-axis (ACSO).
- The `layout` property adjusts the padding to accommodate the right y-axis labels.
- The `elements` property defines the styling for the bar, line, and point elements.
- The `responsiveAnimationDuration` property is set to 0 to disable animation for a smoother rendering.

### Data

```jsx
const barAndLineData = {
  labels: ["23", "24", "25", "26", "27", "28", "29", "30", "1", "2", "3", "4"],
  datasets: [
    {
      type: "line",
      label: "ACSO",
      data: [20, 60, 30, 80, 60, 50, 90, 60, 20, 80, 70, 40],
      borderColor: "#14C9C9",
      yAxisID: "y1",
      fill: false,
    },
    {
      type: "bar",
      label: "Revenue",
      data: [200, 400, 600, 800, 700, 500, 900, 300, 500, 700, 600, 400],
      backgroundColor: "#165DFF",
      yAxisID: "y",
    },
  ],
};
```

- The `barAndLineData` object represents the data for the line and bar charts.
- It contains an array of `labels` representing the x-axis labels.
- The `datasets` property contains two datasets: one for the line chart (ACSO) and one for the bar chart (Revenue).
- Each dataset includes the `type`, `label`, `data`, `borderColor`, and `yAxisID` properties to specify its type, label, values, color, and associated y-axis.
- The `fill` property is set to `false` for the line dataset to disable filling the area under the line.

### Custom Scale Registration

```jsx
React.useEffect(() => {
  // Register a custom scale for the right y-axis
  Chart.register({
    id: "y1",
    afterDraw: (chart, args, options) => {
      const scales = chart.scales;
      const ctx = chart.ctx;
      const yAxis = scales.y1;
      const yAxisWidth = yAxis.width;

      ctx.save();
      ctx.lineWidth = 1;
      ctx.strokeStyle = yAxis.options.color;
      ctx.beginPath();
      const y = yAxis.getPixelForValue(yAxis.min);
      ctx.moveTo(yAxisWidth, y);
      ctx.lineTo(chart.width, y);
      ctx.stroke();
      ctx.restore();
    },
  });
}, []);
```

- The `useEffect` hook is used to register a custom scale for the right y-axis.
- The `Chart.register` function is called with an object representing the custom scale.
- The scale is defined with an `id` of "y1".
- The `afterDraw` function is provided to draw a horizontal line at the minimum value of the y-axis.
- The line is drawn using the canvas `ctx` context, starting from the right edge of the y-axis and extending to the right edge of the chart.

### LineBarGraph Component

```jsx
export const LineBarGraph = () => {
  React.useEffect(() => {
    // Register a custom scale for the right y-axis
    Chart.register({
      id: "y1",
      afterDraw: (chart, args, options) => {
        const scales = chart.scales;
        const ctx = chart.ctx;
        const yAxis = scales.y1;
        const yAxisWidth = yAxis.width;

        ctx.save();
        ctx.lineWidth = 1;
        ctx.strokeStyle = yAxis.options.color;
        ctx.beginPath();
        const y = yAxis.getPixelForValue(yAxis.min);
        ctx.moveTo(yAxisWidth, y);
        ctx.lineTo(chart.width, y);
        ctx.stroke();
        ctx.restore();
      },
    });
  }, []);

  return (
    <div>
      <Line options={options} data={barAndLineData} height={210} width={420} />
    </div>
  );
};
```

- The `LineBarGraph` component is defined as a functional component.
- Inside the component, the `useEffect` hook is used to register the custom scale for the right y-axis.
- The `Line` component from `react-chartjs-2` is used to render the line and bar chart.
- The `options` object and `barAndLineData` object are passed as props to the `Line` component.
- The `height` and `width` props control the dimensions of the chart.

###

Export

```jsx
export default LineBarGraph;
```

- The `LineBarGraph` component is exported as the default export.

You can use this component in your application by importing it and including it in your desired location, such as within the `Card` component.

## CampaignTable Component

The `CampaignTable` component represents a table view of campaign data using the `MUIDataTable` component from the `mui-datatables` library. Let's go through the code:

```jsx
import React from "react";
import MUIDataTable from "mui-datatables";
import "./CampaignTable.css";
import { Icon, IconButton, Switch } from "@mui/material";
import {
  CheckCircle,
  Cancel,
  MoreVert,
  Download as DownloadIcon,
} from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import FilterListIcon from "@mui/icons-material/FilterList";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
```

- Various dependencies and icons are imported for the component.

```jsx
const CampaignTable = () => {
  const columns = [
    {
      label: "Status",
      name: "status",
      options: {
        customBodyRender: (value) => {
          return value === "Active" ? (
            <Icon component={CheckCircle} style={{ color: "green" }} />
          ) : (
            <Icon component={Cancel} style={{ color: "red" }} />
          );
        },
      },
    },
    // ...
  ];
```

- The `columns` array represents the configuration for each column in the table.
- Each column object includes a `label` for the column header, a `name` to identify the data field in each row, and additional options.
- The `customBodyRender` option is used to customize the rendering of the cell contents based on the data value. For example, rendering an icon or applying conditional styling.

```jsx
const options = {
  filterType: "checkbox",
  customHeadStyles: {
    fontSize: "14px", // Adjust the font size as desired
  },
  // ...
};
```

- The `options` object provides configuration options for the table.
- `filterType` is set to "checkbox" to enable checkbox-based filtering.
- `customHeadStyles` allows customizing the styling of the table header.

```jsx
const data = [
  {
    status: "Active",
    campaignName: "Maxima Twin",
    info: "Some info",
    automation: "Enabled",
    dayparting: "Yes",
    budget: "$1000",
    biddingStrategy: "Up && Down",
    spend: "$500",
    revenue: "$800",
    currentBid: "$1.5",
    orders: 50,
    impression: 1000,
    ctr: "5%",
    convRate: "10%",
    report: "Report",
  },
  // ...
];
```

- The `data` array contains the actual campaign data.
- Each object in the array represents a row, with keys corresponding to the column names and values representing the cell data.

```jsx
return <div style={{ maxWidth: "100%" }}>{/* ... */}</div>;
```

- The component is wrapped in a `div` element with a `maxWidth` style to ensure the table fits within its container.

The remaining JSX code represents the structure and styling of the table, including the table header, filtering and column view buttons, and the table itself rendered using the `MUIDataTable` component.

Overall, the `CampaignTable` component provides a customizable table view of campaign data with options for filtering, column customization, and other interactive features.

## Workflow

The workflow within the project follows this general sequence:

1. The Dashboard component serves as the entry point of the application.
2. The Dashboard component renders the Graph component.
3. The Graph component renders multiple Card components.
4. The Graph component also renders the MuiTable component.
5. The ReactSidebar component is used to provide navigation and control within the application.

## Deployment

The project is deployed to Netlify, a popular platform for hosting static websites. The deployment process is automated through continuous integration with the GitHub repository. Any changes pushed to the repository trigger a build and deployment process on Netlify.

The deployed project can be accessed at https://napqueen-dashboard.netlify.app/

## Scripts

The project's package.json file includes the following scripts:

- `start`: Starts the development server.
- `build`: Builds the production-ready version of the project.
- `test`: Runs tests for the project.
- `eject`: Ejects the project from Create React App configuration.

To run a script, use the command `npm run [script-name]`.

## ESLint Configuration

The project extends the default configuration provided by Create React App. It includes the following ESLint configurations:

- `"react-app"`: Base configuration for React applications.
- `"react-app/jest"`: Configuration for Jest when used with Create React App.

Additional ESLint rules or plugins can be added to the project's `.eslintrc` file.

## Browserslist Configuration

The project's Browserslist configuration specifies the supported browsers for production and development environments. It ensures that the application is compatible with a wide range of modern browsers.

## Conclusion

The Dashboard project is a React-based web application that provides a centralized platform for data visualization and management. It utilizes various components, including Card, Graph, MuiTable, and ReactSidebar, to create an interactive and user-friendly experience. By following the provided documentation, you can set up the project, understand its structure, and leverage its components to enhance and customize the application as per your requirements.

This documentation provides an overview of the project and its various aspects. For more detailed information or specific instructions, refer to the relevant sections or consult the source code and documentation of the individual components and libraries used.
