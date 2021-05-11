## Website Screenshots

1. Homepage (logged out)
   ![Screenshot 1](images/website/home.PNG)


2. Login Page
   ![Screenshot 2](images/website/login.PNG)
   

3. Homepage (logged in)
   ![Screenshot 3](images/website/home-logged-in.PNG)


4. Main Menu/Account Info (all pages from here require Auth0 login)
   ![Screenshot 4](images/website/main-menu.PNG)


5. Database Table View
   ![Screenshot 5](images/website/table-view.PNG)


6. Clicking on a city name brings you to a Detail View
   ![Screenshot 6](images/website/detail-view.PNG)


7. Query Page
   ![Screenshot 7](images/website/query.PNG)


8. Query Results
   ![Screenshot 8](images/website/result.PNG)
   

## API Screenshots

1. Obtaining a token from Auth0
   ![API Screenshot 1](images/api/obtain-token.PNG)


2. Public endpoint (no token needed)
   ![API Screenshot 2](images/api/request-public-no-token.PNG)


3. Attempting to access private endpoint without auth token results in an error
   ![API Screenshot 3](images/api/request-private-no-token.PNG)


4. Once you include auth token in the header, the request is successful
   ![API Screenshot 4](images/api/request-private-with-token.PNG)


5. Successful POST request with token
   ![API Screenshot 5](images/api/post-with-token.PNG)