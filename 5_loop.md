### loop
* used to do something repeatedly while a condtion is met or until a condtion is met
* diffrent kinds of loops
    * `for`loop
        *   ```js
            for (i = 0; i >= 5; i++)// do something before loop usually initialize; a condtion to check before an ittration; an action to do after every ittreation usually increnment and decrement of the initilized variable
            {
                //code to be looped
            }
            ````
    * `for in` loop
        *   ```js
            for (n in x) //for every property n in x itterate the statment
            {    
                //statments to be looped
            }
            ```    
    * `for of` loop
        *   ```js
            for (n of x) {// for every element n in x array itterate the statment
            // statments to be looped
            }
            ```
    
    * `while` loop
        *   ```js
            while (n == x)//check before every ittration if condtion n == x is true then ittrate the statement
            {
                //statments to be looped
            }
    * `Do while` loop
        *   ```js
            do {
                    //do something while condtion is true
            } while (n == x) //check whether the condtion is true after every itteration
            ```