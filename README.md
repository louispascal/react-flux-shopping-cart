# Example Shopping Cart

Built using React and Flux. This application was built to test how 
state used in multiple places across the app can be managed using Flux.

Working Example: https://burger-ac4a5.firebaseapp.com/

The number of items in a cart is used in multiple places across the UI. Flux
helps to keep those values in-sync across the UI, making sure there are no 
discrepencies. This is achieved by having a central store and actions dispatched
through the Flux framework, that ensures values are set correctly and in the right
order.

Products from a single product json object. Bundles are another layer on top of
products that allow grouping of multiple items to be displayed as one item in
the shopping cart. In this app, a bundle that has different items selected, is 
considered a separate item in the cart.

For example:

A Supereme Meal (Bundle) with Surpreme Burger, Skinny Fries and Coke is different to a
Supereme Meal (Bundle) with Surpreme Burger, Chunky Fries and Sprite and will be 
displayed as two items in the cart.

