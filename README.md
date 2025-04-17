🌐 Website:

https://urldefense.com/v3/__https://www.saucedemo.com/__;!!GfteaDio!bJbR0opX9qdDsnIYX46zmvnz0CZqLAqwUPETJeip65oPqwq1Z3BlphoWbuZsBvh8YyHYcdfp0rnhVf_SKaEF$

🔐 Credentials:

Username: standard_user

Password: secret_sauce

🎯 Task Overview:

Log in with the provided credentials.

Add two specific items to the cart:

Sauce Labs Backpack

Sauce Labs Bike Light

Navigate to the cart and verify that both items are present.

Remove one item (e.g., the Bike Light), and confirm the correct item remains.

Proceed to checkout.

Fill in the required checkout details:

First Name

Last Name

Zip/Postal Code

Complete the checkout process.

Verify the confirmation message: “THANK YOU FOR YOUR ORDER”

Setting up the project
Pre-requisites

    Clone repo: https://github.com/veenajhawar/Parexel.git

OR
gh repo clone veenajhawar/Parexel

Once cloned, checkout a branch and install from package.lock in working dir

    npm install

    Install playwright :

npm install -D @playwright/test@latest

I have installed quite a few extensions

1.  prettier
2.  cucumber
3.  playwright with typescript
4.  Git Hub copilet
    **Make sure to update all packages before running tests**

        npm -i

**Running tests**

Tests will run tag names (smoke and regression) We can add more tags as we need in index.html

example - run tests with smoke tag

    npm run cucumber smoke

cucumber is a script in package.json which calls index.ts for full script

Reports can be generated with

    npm run cucmber --reporter=html

Contributors
veena Jhawar
