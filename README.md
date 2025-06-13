ARTISTIC PORTFOLIO WEBSITE

Tech Stack:

-   Node Version: 18.20.5

-   Frontend: React, Reactstrap, Styled Components

-   State Management: Redux Toolkit, React Redux

-   Routing: React Router DOM

-   Styling: Bootstrap, Font Awesome, Styled Components

-   Forms: Formik

-   Animation: React Spring

-   Build Tools: Webpack, React Scripts

-   Testing: Jest, React Testing Library

How to Run the App Locally:

If you download this project as a ZIP file, follow these steps to run it on your local machine:

Unzip the project

Extract the contents of the ZIP file to a folder on your computer.

Open a terminal/command prompt

Navigate to the project folder you just unzipped.

Install dependencies

Make sure you have Node.js installed (version 18.20.5 recommended). Then run:

npm install

This will install all required packages listed in package.json.

Start the development server
Run the command:

npm start

This will start the React app and open it in your default browser, usually at http://localhost:3000.

COMMIT NOTES:

COMMIT - Home Page:

-   Implemented a NavbarToggle Component:

    -   Positioned absolutely and set to sticky to overlay the CardImg but remain at the top during scrolling.

-   Added two card components to the Home Page:

    -   Each card features a full-page background image.

    -   Each includes a text overlay for better readability and design aesthetics.

COMMIT - Header:

-   Developed a Header Component using Navbar:

    -   Designed to be dynamic and responsive to screen sizes.

    -   For md through xxl screens:

        -   Spaces between NavItems adjust dynamically.

        -   NavbarBrand is centered and placed between the first three and last two NavItems.

    -   For xs to sm screens:

        -   The Navbar collapses into a NavbarToggler.

        -   NavbarBrand remains visible in the header while NavItems move inside the toggle menu.

COMMIT - Carousel:

-   Built a Carousel Component using Carousel from Reactstrap.

-   Integrated the Carousel into the Works and Projects pages:

    -   Placed beside a card component on the Works page.

    -   Adjusts dynamically for xs to md screens, positioning above or below the card component.

-   Implemented useRef-based navigation:

    -   Linked three buttons on the Works page to their corresponding sections for seamless scrolling.

COMMIT - About Page, Contact Page:

-   Developed an About Page:

    -   Added a button linking to the artist’s resume, opening it in a new tab.

-   Created a Contact Page:

    -   Built a contact form using Styled Components.

    -   Planning to transition existing Bootstrap components to Styled Components for better maintainability.

---

Challenges & Resolutions:

-   Navbar Toggle Positioning on Home Page:

    -   Ensured correct alignment to the right side of the screen.

-   Centering Image Carousels on Works Page:

    -   Adjusted flexbox and grid properties for better alignment alongside cards.

-   Preventing Scroll on Projects Page Carousel:

    -   Ensured the carousel fills the page dynamically regardless of vh, preventing unwanted page scrolling.

-   Responsiveness of 'My Story' Card on About Page:

    -   Adjusted layout so that on smaller screens, the card moves below the image as intended.
