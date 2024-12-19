ARTISTIC PORTFOLIO WEBSITE

Node v. 18.20.5

COMMIT NOTES:

COMMIT - Home Page: 

    - Created and Added a NavbarToggle Component to the Hompage
        - gave it absolute and sticky positioning so that it would overlay the CardImg for the page, but stay at the top as user scrolls page

    - Added two card components to the HomePage  
        - each has an image that takes up the full page 
        - each has text overlay 

COMMIT - Header:

    - Created a Header Component using Navbar
        - Header is dynamic based on screen size
            - space between NavItems will change when screen if md through xxl
                - NavbarBrand is Centered and placed between the first three and last two NavItems
            - when screen size is xs - sm the Navbar becomes a NavbarToggler that Collapses
                - NavbarBrand stays visible in the header when the NavItems are in the NavbarToggler