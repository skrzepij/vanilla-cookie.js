A simple JS script for add cookies functionality.
How it works:

- On start check if there is cookie already
- If not, body element get additional class and cookie-box will be visible
- If there is a cookie saved already, class will not be added

In the cookie-box is placed a button - close cookie, witch will close cookie-box and save cookie in browser.

Browser Support:
For now, this script will work on all modern browsers (IE10+) because it's using vanilla JS and new 'classList' method. 
In the future I will add some polyfill for IE8 / IE9
