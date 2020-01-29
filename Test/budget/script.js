////Implemented a module pattern for data privacy
var budgetController = (function() {
    
    //create contructor for all expense objects. There will be lots of expenses!!!!!
    //contructors var is capitalised at first to distinguish
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };
    
    //constructor for income. Even though there probably wont be as many!
    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    
    
     var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
    };
    
    return {
        addItem: function(type, description, value) {
            var newItem, ID;
            // cereate new id and get new item based on type
             if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }
            //push into data structure
            data.allItems[type].push(newItem);
            
            //show new element
            return newItem;
        },
        testing: function() {
            console.log(data);
        }
    };
    
})();

///USER INTERFACE MODULE--------
var userInterface = (function() {
    
    //Get user inputs
    return {
        getInput: function() {
            
            //return an object (return{ -var | =/: | ;/, })
            return{
            
            type: document.querySelector('.add-type').value,
            description: document.querySelector('.add-description').value,
            value: document.querySelector('.add-value').value,
            }
        }
    }
    
})();

///BACK END MODULE----------------
//Passed the other two modules as arguement to connect them.
var controller = (function(BC, UI) {
    
    var eventListeners = function() {
         document.querySelector("#submit").addEventListener('click', newItem);  //CHECK  {console.log("button was clicked")});                                           /*for when the enter key is pressed*/
         document.addEventListener('keypress', function(event) {
         //console.log(event); check keyCode number for enter
            if(event.keyCode === 13) {
               newItem();
               }
            });
    };
                  
    var ctrlAddItem = function() {
        var input, newItem;
    
//1GET INPUT DATA
      input = userInterface.getInput(); 
     
//2ADD TO BUDGET CONTROLLER
      var newItem = budgetController.addItem(input.type, input.description, input.value);
//3ADD TO UI
        
//4CALCULATE BUDGET
        
//5DISPLAY ON UNI alert("it works");
    };
        return {
        init: function() {
            console.log('Application has started.');
           
            
            eventListeners();
        }
    };
    
})(budgetController, userInterface);


controller.init();